import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AlertData } from "../classes/route";
import dayjs from "dayjs";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "55%",
  height: "55%",
  bgcolor: "background.paper",
  border: "2px solid green",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ alert }: any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const detailsStyle = { fontSize: "1em", fontWeight: "bold" };

  return (
    <div style={{ flex: 1, textAlign: "center" }}>
      <Button onClick={handleOpen}>פרטים</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            פרטים נוספים:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            שם מכונה: <span style={detailsStyle}>{alert.machineName}</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            שם מחלול: <span style={detailsStyle}>{alert.michlolName}</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            נשמר ב:{" "}
            <span style={detailsStyle}>
              {dayjs(alert.createdAt).format("HH:mm:ss MM/DD/YYYY")}
            </span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            נערך על ידי:{" "}
            <span style={detailsStyle}>{alert?.lastEditBy?.name}</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            טקסט חופשי:{" "}
            <span style={detailsStyle}>
              {alert?.data?.text ? alert.data.text : ""}
            </span>
          </Typography>

          <Button style={{ marginTop: 15 }} onClick={handleClose}>
            חזור
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

// text-align: center;
// font-size: 2em;
// font-weight: bold;
// background-color: rgba(0, 0, 0, 0.7);
// color: white;
// min-height: 50vh;
// text-shadow: 0px 0px 5px var(--blue5);
// padding-top: 0.5em;
