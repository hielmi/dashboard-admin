import Grid from "@mui/material/Grid";
import Template from "../components/Template";
import { Box, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function Help() {
  return (
    <Template title="Help">
      <Grid container sx={{ p: 1 }}>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            Informasi
          </Typography>
        </Grid>
        <List style={{ fontSize: 2 }}>
          <ListItem>
            <Typography variant="body2">
              Persalinan normal 24 jam ( Eny Trianti, AMKeb )
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body2">
              Pelayanan umum dan lansia ( Enwar Usti Sumardi S.Kep.Ns)
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body2">
              Pelayanan KB kesehatan ibu dan anak dan imunisasi rutin anak ( Sri
              Purwandari S.ST, MM)
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <Typography variant="body2">
              Pelayanan paru paru, Pelayyanan THT dan mata, Pelayanan gigi,
              Pelayanan persalinan 24 jam, Pelayanan umum dan lansia, Pelayanan
              KB Kesehatan ibu, anak dan imunisasi rutin
            </Typography>
          </ListItem>
        </List>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            Visi & Misi
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body2">Visi:</Typography>
            <Typography variant="body2">
              “Dharma Prima Bersama Menuju Sehat”
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Misi:</Typography>
            <List>
              <ListItem>
                <Typography variant="body2" component="span">
                  1. Mewujudkan masyarakat sehat melalui peningkatan pelayanan
                  dan penerapan PHBS yang makin baik
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2" component="span">
                  2. Memelihara dan meningkatkan kesehatan individu, keluarga,
                  dan masyarakat beserta lingkungannya
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2" component="span">
                  3. Menyelenggarakan pelayanan kesehatan yang paripurna,
                  bermutu, terjangkau, dan merata Mendorong kemandirian
                  masyarakat untuk hidup sehat
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2" component="span">
                  4. Melaksanakan penanggulangan dan pengendalian penyakit
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2" component="span">
                  5. Menjamin ketersediaan dan pemerataan sumber daya kesehatan
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Template>
  );
}
