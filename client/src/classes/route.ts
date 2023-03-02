import { ReportDetails } from "../components/report/survey/survey-machine";
import { MachineFilter } from "../components/report/route-view";
import { Engineering, Routes } from "../data/reports-data";
import { getDateString } from "../helpers/dates";
import dayjs from "../common/dayjs";

export class Route {
  type?: "survey" | "engineering" | null;
  reportId?: string | null;
  routeId?: string;
  routeName?: string;
  createdAt?: number | string | null;
  date?: string | number;
  michlolim?: Routes[number]["michlolim"];
  machines?: string[];
  data: {
    [machineName: string]: MachineData;
  };
  user?: User;
  completedMachines?: number;
  constructor() {
    this.data = {};
  }

  newReport(report: Routes[number] | Engineering[number]): ReportData {
    const timestamp = dayjs().format();
    if (report.type === "survey") {
      return {
        type: report.type,
        createdAt: dayjs().format(),
        date: dayjs().format("YYYY-MM-DD"),
        reportId: `${report.routeId}-${timestamp}`,
        routeId: report.routeId,
        routeName: report.routeName,
        michlolim: report.michlolim,
        data: {},
        user: report.user,
      };
    } else {
      return {
        type: report.type,
        createdAt: timestamp,
        date: getDateString(new Date(Date.now())),
        reportId: `${report.routeId}-${timestamp}`,
        routeId: report.routeId,
        routeName: report.routeName,
        machines: report.machines,
        data: {},
      };
    }
  }

  instantiateReport(report: ReportData) {
    this.type = report.type;
    this.reportId = report.reportId;
    this.routeId = report.routeId;
    this.routeName = report.routeName;
    this.createdAt = report.createdAt;
    this.date = report.date;
    if (report.michlolim) {
      this.michlolim = report.michlolim;
    }
    if (report.machines) {
      this.machines = report.machines;
    }
    if (report.user) {
      this.user = report.user;
    }
    if (report.completedMachines) {
      this.completedMachines = report.completedMachines;
    }
  }

  loadMachines(machines: MachineData[]) {
    machines.forEach((machine) => (this.data[machine.machineName] = machine));
  }

  setValue(reportDetails: ReportDetails, value: FormSubmission) {
    const { machineName, michlolName, michlolId, partName, equipmentUnit } =
      reportDetails;
    if (!this.data[machineName])
      this.data[machineName] = this.createMachine(
        michlolName,
        michlolId,
        machineName,
        equipmentUnit
      );
    this.data[machineName].data[partName] = value;
  }

  setEngineeringValue(machineName: string, value: FormSubmission) {
    if (!this.data[machineName])
      this.data[machineName] = this.createEngineeringMachine(machineName);
    this.data[machineName].data = value;
  }

  createMachine(
    michlolName: string,
    michlolId: string,
    machineName: string,
    equipmentUnit: string
  ): MachineData {
    return {
      completed: false,
      uniqueId: `${this.reportId}: ${machineName}`,
      michlolName,
      michlolId,
      machineName,
      equipmentUnit,
      routeName: this.routeName!,
      routeId: this.routeId!,
      reportId: this.reportId!,
      createdAt: this.createdAt!,
      data: {},
    };
  }

  createEngineeringMachine(machineName: string): any {
    return {
      completed: false,
      uniqueId: `${this.reportId}: ${machineName}`,
      machineName,
      routeName: this.routeName!,
      routeId: this.routeId!,
      reportId: this.reportId!,
      createdAt: this.createdAt!,
      data: {},
    };
  }

  isPartComplete(machineName: string, partName: string) {
    const part = this.data?.[machineName]?.data?.[partName] as FormSubmission;
    if (part?.excelOutput) return true;
    if (part?.text) return true;
    return false;
  }

  setMachineComplete(machineName: string) {
    const machine = this.data?.[machineName];
    if (machine) {
      machine.completed = true;
    }
  }

  isQuestionAnswered(machineName: string, partName: string, index: string) {
    //@ts-ignore
    if (this.data?.[machineName]?.data?.[partName]?.[index]) return true;
    return false;
  }

  sendMachineData(machineName: string, isFromPublishedReport: any, user: User) {
    const machine = this.data?.[machineName];
    if (machine)
      return JSON.stringify({
        ...machine,
        completed: true,
        lastEditBy: user,
      });
  }

  getMachineComplete(machineName: string): MachineFilter {
    const machine = this.data?.[machineName];
    if (machine) {
      return machine.completed ? "הושלם" : "חלקי";
    }
    return "לא הושלם";
  }

  sendReportData() {
    return JSON.stringify(this);
  }
}

export type ReportData = {
  type: "survey" | "engineering";
  reportId: string;
  routeId: string;
  routeName: string;
  createdAt: number | string;
  date: string | number;
  michlolim?: Routes[number]["michlolim"];
  machines?: string[];
  data: {
    [machineName: string]: MachineData;
  };
  user?: User;
  publishedAt?: any;
  _id?: string;
  completedMachines?: number;
  publishedReport?: any[] | undefined;
};

export type User = {
  name: string;
  email: string;
};

export type FormSubmission = {
  [id: string]: FormDataEntryValue;
  excelOutput: string;
  alert: string;
  text: string;
};

export type MachineData = {
  completed: boolean;
  uniqueId: string;
  reportId: string;
  routeName: string;
  routeId: string;
  michlolName: string | undefined;
  michlolId: string | undefined;
  equipmentUnit: string;
  machineName: string;
  createdAt: number | string | null;
  updatedAt?: number | string | null;
  user?: User;
  data:
    | {
        [partName: string]: FormSubmission;
      }
    | FormSubmission;
};

export type AlertData = {
  uniqueId: string;
  completed: boolean;
  michlolName: string | undefined;
  michlolId: string | undefined;
  machineName: string;
  routeName: string;
  routeId: string;
  reportId: string;
  createdAt: number | null;
  data: {
    [partName: string]: FormSubmission;
  };
  user?: User;
  lastEditBy?: User;
};
