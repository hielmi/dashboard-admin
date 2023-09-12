import * as React from "react";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import { Grid } from "@mui/material";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Jumlah Pasien</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
    </React.Fragment>
  );
}
