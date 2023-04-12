import { Grid, styled, Paper, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ffe",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const profile = {
  name: "Ram Pratap",
  age: 22,
};

const previousHistory = [
  {
    id: 1,
    hospital: "CWS",
    doctorName: "Dr. Jain",
    report: "Diagnosed with maleria",
  },
];

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "doctorName",
    headerName: "Doctor Name",
    width: 200,
  },
  {
    field: "hospital",
    headerName: "Hospital",
    width: 200,
  },
  {
    field: "report",
    headerName: "Report",
    width: 210,
    flex: 1,
  },
];

function MedicalHistory() {
  return (
    <Box sx={{ marginTop: 10 }}>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Item
          sx={{
            fontWeight: 600,
            fontSize: 18,
            width: "100%",
            backgroundColor: "azure",
          }}
        >
          Medical Record
        </Item>
      </Box>
      <Box sx={{ height: 280, width: "100%" }}>
        <DataGrid
          rows={previousHistory}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
}

function AddHealthRecord() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Item sx={{ fontWeight: 600, backgroundColor: "wheat" }}>Name</Item>
        </Grid>
        <Grid item xs={4}>
          <Item sx={{ fontWeight: 600, color: "black" }}>{profile.name}</Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{ fontWeight: 600, backgroundColor: "wheat" }}>Age</Item>
        </Grid>
        <Grid item xs={4}>
          <Item sx={{ fontWeight: 600, color: "black" }}>{profile.age}</Item>
        </Grid>
      </Grid>

      <MedicalHistory />
    </>
  );
}

export default AddHealthRecord;
