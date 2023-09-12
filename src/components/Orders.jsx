/* eslint-disable react/prop-types */
import { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Title from "./Title";
import Grid from "@mui/material/Unstable_Grid2";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

function preventDefault(event) {
  event.preventDefault();
}
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "nama", headerName: "Nama", width: 200 },
  { field: "tanggal", headerName: "Tanggal", width: 550 },
];

// eslint-disable-next-line react/prop-types
export default function Orders({ data }) {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  }; 
  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={8}>
          <Title>Pasien</Title>
        </Grid>
        <Grid xs={4}>
          <FormControlLabel
            control={
              <Switch
              checked={checked}
              onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Mode Edit"
          />
        </Grid>
      </Grid>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection={checked}
        rowSelection={checked}
        slots={{ toolbar: GridToolbar }}
      />
    </>
  );
}
