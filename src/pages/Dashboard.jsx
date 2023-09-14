import {useContext } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Deposits from "../components/Deposits";
import Template from "../components/Template";
import { AuthContext } from "../context/AuthContext";
import { DataGrid } from "@mui/x-data-grid";
import Title from "../components/Title";

const columns = [
  { field: "id", headerName: "No", width: 200 },
  { field: "nama", headerName: "Nama", width: 200 },
  { field: "tanggal", headerName: "Tanggal", width: 550 },
];

export default function Dashboard() {
  const { dataState} = useContext(AuthContext);

  const lastData = dataState.slice((dataState.length - 1) - 5 + 1, (dataState.length - 1) + 1);
  const data = []
  if (dataState.length > 5){
    lastData.map((item, index) => data.push({...item, id: index+1}))
  } else{
    dataState.map((item, index) => data.push({...item, id: index+1}))
  }

  return (
    <Template title="Dashboard">
      <Grid container spacing={3}>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 130,
            }}
          >
            <Deposits jumlah={dataState.length}/>
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Title>Pasien Terbaru </Title>
              <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5]}
                rowSelection={false}
              />
          </Paper>
        </Grid>
      </Grid>
    </Template>
  );
}
