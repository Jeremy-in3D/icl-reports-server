import dayjs from "dayjs";
import { mongo } from "../../server.js";
import { MachineData } from "../../server.js";

export async function saveMachine(req: any, res: any) {
  const data: MachineData = req.body;
  data.createdAt = dayjs().format();

  try {
    if (data.completed) {
      const updateCompletedMachinesInReports = await mongo.incValue(
        data.reportId,
        "reports"
      );
    }

    const engineeringRoutes: string[] = ['דו"ח מערכת שמן', 'דו"ח רעידות'];

    if (engineeringRoutes.includes(data.routeName)) {
      const machineFromPreviousReport = await mongo.find(
        { machineName: data.machineName },
        "machines",
        2
      );
      const compareMachineFromCurrentReportWithLast =
        machineFromPreviousReport.map(async (machine, index) => {
          if (!machine?.reportId || machine.reportId == data.reportId) {
            return;
          }

          if (machineFromPreviousReport.length == 2) {
            if (machineFromPreviousReport[0].reportId != data.reportId) {
              if (index == 1) {
                return;
              }
            }
          }

          const machineStatus = {
            נורמלי: 1,
            גבולי: 2,
            גבוה: 3,
            קריטי: 4,
          };

          const quakeStatus = {
            acceptable: 1,
            monitor: 2,
            alarm: 3,
            danger: 4,
          };

          for (const [dataKey, dataValue] of Object.entries(data.data)) {
            for (const [machineKey, machineValue] of Object.entries(
              machine.data
            )) {
              if (machineKey == dataKey) {
                if (data.routeName == 'דו"ח מערכת שמן') {
                  const currentCriticalLevel = dataValue || 10;
                  const previousCriticalValue = machineValue || 0;
                  const shouldAlertFromDeterioratedReport =
                    machineStatus[
                      previousCriticalValue as keyof typeof machineStatus
                    ] <
                    machineStatus[
                      currentCriticalLevel as unknown as keyof typeof machineStatus
                    ];

                  if (shouldAlertFromDeterioratedReport) {
                    data.alertFromDeteriorate = {
                      previousVal:
                        machineStatus[
                          previousCriticalValue as keyof typeof machineStatus
                        ],
                      currentVal:
                        machineStatus[
                          currentCriticalLevel as unknown as keyof typeof machineStatus
                        ],
                    };
                    console.log("oil report before true");
                    data.completed = false;
                    (data.data as any).alert = "true";
                  }
                }
                if (
                  data.routeName == 'דו"ח רעידות' ||
                  data.routeName == 'דו"ח רעידות'
                ) {
                  const alertFromHmi =
                    machineKey == "MHI" &&
                    Number(dataValue) > Number(machineValue);
                  const alertFromDeterioratedReport =
                    machineKey == "סטטוס" &&
                    quakeStatus[machineValue as keyof typeof quakeStatus] >
                      quakeStatus[
                        dataValue as unknown as keyof typeof quakeStatus
                      ];

                  if (alertFromHmi || alertFromDeterioratedReport) {
                    console.log(
                      "which one????",
                      alertFromHmi,
                      alertFromDeterioratedReport
                    );
                    //
                    if (alertFromHmi) {
                      data.alertFromHmi = {
                        previousVal: Number(machineValue),
                        currentVal: Number(dataValue),
                      };
                    }
                    //
                    if (alertFromDeterioratedReport) {
                      data.alertFromDeteriorate = {
                        previousVal:
                          quakeStatus[machineValue as keyof typeof quakeStatus],
                        currentVal:
                          quakeStatus[
                            dataValue as unknown as keyof typeof quakeStatus
                          ],
                      };
                    }
                    //
                    data.completed = false;
                    (data.data as any).alert = "true";
                  }
                }
              }
            }
          }
        });
      if ((data.data as any).alert == "true") {
        console.log("did we insert a doc????");
        await mongo.insertDoc(data, "alerts");
      }
    }

    const updateMachines = await mongo.updateDoc(data, "machines");
    //Save machine to collection
    if (!updateMachines.value) await mongo.insertDoc(data, "machines");
    //Refactor to promise.all
    //Check if any of saved data raised an alert
    const machines = Object.entries(data.data);
    let alertKey: string;
    const filteredAlerts = machines
      .map((machine) => {
        const [key, value] = machine as any;
        alertKey = key;
        return value.alert === "true" ? value : null;
      })
      .filter((parts) => parts !== null);
    if (filteredAlerts.length) {
      filteredAlerts.forEach(async (alertData) => {
        const alert = {
          uniqueId: data.uniqueId,
          reportId: data.reportId,
          routeName: data.routeName,
          routeId: data.routeId,
          machineName: data.machineName,
          michlolName: data.michlolName,
          michlolId: data.michlolId,
          createdAt: data.createdAt,
          completed: false,
          data: alertData,
          lastEditBy: data.lastEditBy,
          alertSource: alertKey,
        };
        console.log(
          "and did we just mess up and replace it with a different doc?"
        );
        await mongo.insertDoc(alert, "alerts");
      });
    }
    res.status(200).send();
  } catch (e) {
    res.status(500).send("Error" + e);
  }
}
