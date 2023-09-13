import * as React from "react";
import { useContext, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Orders from "../components/Orders";
import Template from "../components/Template";
import { AuthContext } from "../context/AuthContext";
import { Box, Button } from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom";
import { db } from "../firebase/firebase";
import { ref, remove, update } from "firebase/database";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Patiens() {
  const [openConfDelete, setOpenConfDelete] = useState(false);
  const [openConfUpdate, setOpenConfUpdate] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [dataEdit, setDataEdit] = useState([]);
  const [newNama, setNewNama] = useState("");
  const [newTanggal, setNewTanggal] = useState(dayjs(Date()));
  const { dataState, setDataState } = useContext(AuthContext);

  const handleClickOpenDelete = ({ data }) => {
    setOpenConfDelete(true);
    const itemDeleted = [];
    data.map((deleteData) => {
      itemDeleted.push(dataState[deleteData.dataIndex]);
    });
    setSelectedRows(itemDeleted);
  };

  const handleCloseDelete = () => {
    setOpenConfDelete(false);
    setSelectedRows([]);
  };

  const handleClickOpenUpdate = ({ data }) => {
    setOpenConfUpdate(true);
    const selected = dataState[data[0].dataIndex];
    setDataEdit(selected.nama);
    setNewNama(selected.nama);
    setNewTanggal(selected.tanggal);
  };

  const handleCloseUpdate = () => {
    setOpenConfUpdate(false);
    setNewNama("");
    setNewTanggal(dayjs(Date()));
    setDataEdit("");
  };

  const handleSubmitChange = () => {
    const formattedDate = newTanggal
      ? dayjs(newTanggal).locale("id").format("DD MMMM YYYY")
      : "";
    update(ref(db, `/user/${dataEdit}`), {
      nama: newNama,
      tanggal: formattedDate,
    });

    setNewNama("");
    setNewTanggal(dayjs(Date()));
    setOpenConfUpdate(false);
  };

  //   delete
  const handleDelete = () => {
    selectedRows.map((item) => {
      remove(ref(db, `/user/${item.nama}`));
    })
    setOpenConfDelete(false);
  };

  return (
    <Template title="Informasi Pasien">
      <Grid container spacing={3}>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Box display="flex" justifyContent="flex-end" sx={{ mb: 2 }}>
            <Button variant="contained" component={Link} to="/tambah_pasien">
              <AddBoxOutlinedIcon sx={{ mr: 1 }} />
              Tambah Pasien
            </Button>
          </Box>
          {/* dialog for edit data */}
          <Dialog open={openConfUpdate} onClose={handleCloseUpdate}>
            <DialogTitle>Edit Data Pasien</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Silahkan Masukan data yang akan dirubah
              </DialogContentText>
              <Box width={"100%"} sx={{ mb: 2 }}>
                <TextField
                  label="Nama"
                  variant="outlined"
                  value={newNama}
                  style={{ width: "30%" }}
                  disabled
                />
              </Box>
              <Box width={"100%"} sx={{ mb: 2 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Tanggal"
                    defaultValue={dayjs("2022-04-17")}
                    value={dayjs(newTanggal)}
                    onChange={setNewTanggal}
                  />
                </LocalizationProvider>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseUpdate}>Batal</Button>
              <Button onClick={handleSubmitChange}>Ubah Data</Button>
            </DialogActions>
          </Dialog>
          {/* dialog for delete data */}
          <Dialog
            open={openConfDelete}
            onClose={handleCloseDelete}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Delete</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Yakin menghapus data?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDelete}>Cancel</Button>
              <Button onClick={handleDelete} autoFocus>
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Orders
              data={dataState}
              handleDelete={handleClickOpenDelete}
              handleUpdate={handleClickOpenUpdate}
            />
          </Paper>
        </Grid>
      </Grid>
    </Template>
  );
}
