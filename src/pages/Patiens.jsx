import * as React from "react";
import { useContext } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Orders from "../components/Orders";
import Template from "../components/Template";
import { AuthContext } from "../context/AuthContext";
import { Box, Button } from "@mui/material";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Link } from "react-router-dom";

export default function Patiens() {
  const authContext = useContext(AuthContext);
  return (
    <Template title="Informasi Pasien">
      <Grid container spacing={3}>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Box display="flex" justifyContent="flex-end" sx={{mb: 2}}>
            
            <Button variant="contained" component={Link} to="/tambah_pasien">
             <AddBoxOutlinedIcon sx={{mr: 1}}/>
                Tambah Pasien
            </Button>
          </Box>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Orders data={authContext?.dataState} />
          </Paper>
        </Grid>
      </Grid>
    </Template>
  );
}
