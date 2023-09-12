import Grid from "@mui/material/Grid";
import Template from "../components/Template";

// TODO remove, this demo shouldn't need to reset the theme.

export default function Help() {
  return (
    <Template title="Help">
      <Grid container spacing={3}>
        <Grid item >
          <h1>Tests</h1>
        </Grid>
      </Grid>
    </Template>
  );
}
