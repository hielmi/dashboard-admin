import React, {  useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, Typography } from "@mui/material";
import Template from "../components/Template";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { db } from "../firebase/firebase";
import { set, ref } from "firebase/database";

// komponen alert
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function TambahPasien() {
  const [name, setName] = useState("");
  const [selectedDate, setSelectedDate] = useState(dayjs(new Date()));
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = useState("error");

  // close snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // menyimpan nama ke state
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // mengambil data tanggal yang dipilih dan menyimpan ke state.
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // create ke database
  const writeToDatabase = () => {
    try {
      // melakukan format tanggal
      const formattedDate = selectedDate
        ? dayjs(selectedDate).locale("id").format("DD MMMM YYYY")
        : "";

      // create data ke firebase
      set(ref(db, `/user/${name}`), {
        nama: name,
        tanggal: formattedDate,
      });
      setOpen(true);
      setSeverity("success");
    } catch (err) {
      setOpen(true);
      setSeverity("error");
      console.log(err);
    }
  };
  return (
    <Template title="Pasien">
      <Box width={"100%"} sx={{ mb: 1 }}>
        <Typography variant="h5" component="h5">
          Tambah Pasien
        </Typography>
      </Box>
      <Box width={"100%"} sx={{ mb: 2 }}>
        <TextField
          label="Nama"
          variant="outlined"
          value={name}
          onChange={handleNameChange}
          style={{ width: "30%" }}
        />
      </Box>
      <Box width={"100%"} sx={{ mb: 2 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Tanggal"
            defaultValue={dayjs("2022-04-17")}
            value={selectedDate}
            onChange={handleDateChange}
          />
        </LocalizationProvider>
      </Box>
      <Box display="block">
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Button variant="contained" color="primary" onClick={writeToDatabase}>
            Kirim Data
          </Button>
          <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity={severity}
              sx={{ width: "100%" }}
            >
              {severity === "success"
                ? "Berhasil Menambahkan Data!"
                : "Gagal Menambahkan Data!"}
            </Alert>
          </Snackbar>
        </Stack>
      </Box>
    </Template>
  );
}
