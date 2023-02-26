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
  width: "80%",
  height: "60%",
  bgcolor: "background.paper",
  border: "2px solid green",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ alert }: any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    console.log(alert);
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
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
            Machine Saved At:{" "}
            {dayjs(alert.createdAt).format("MM/DD/YYYY HH:mm:ss")}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Edited by: {alert.lastEditBy}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Free Text: {alert?.data?.text ? alert.data.text : ""}
          </Typography>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
}
