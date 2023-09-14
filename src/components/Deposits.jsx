/* eslint-disable react/prop-types */
import * as React from "react";
import Typography from "@mui/material/Typography";
import Title from "./Title";

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
