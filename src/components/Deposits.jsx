import * as React from "react";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import { Grid } from "@mui/material";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits({jumlah}) {
  return (
    <React.Fragment>
      <Title>Jumlah Pasien</Title>
      <Typography component="p" variant="h4">
        {jumlah}
      </Typography>
    </React.Fragment>
  );
}
