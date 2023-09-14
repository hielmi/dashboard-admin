import MUIDataTable from "mui-datatables";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";


const columns = ["nama", "tanggal"];

// eslint-disable-next-line react/prop-types
export default function Orders({ data, handleDelete, handleUpdate }) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      <MUIDataTable
        title={"Pasien"}
        data={data}
        columns={columns}
        options={{
          filterType: "checkbox",
          selectableRowsOnClick: true,
          viewColumns: false,
          responsive: "standard",
          onRowSelectionChange: (currentRowsSelected, allRowsSelected) => {
            if (allRowsSelected.length <= 1) {
              setIsEdit(true);
            } else {
              setIsEdit(false);
            }
          },
          customToolbarSelect: (selectedRows, displayData, setSelectedRows) => {
            return (
              <Grid
                container
                spacing={2}
                justifyContent={"flex-end"}
                sx={{ mr: 2 }}
              >
                <Grid item display={isEdit === true ? "flex" : "none"}>
                  <IconButton
                    onClick={() => handleUpdate(selectedRows)}
                  >
                    <EditIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    onClick={() => {handleDelete(selectedRows);}}
                  >
                    <DeleteIcon color="error" />
                  </IconButton>
                </Grid>
              </Grid>
            );
          },
        }}
      />
    </>
  );
}
