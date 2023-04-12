import { Box, Button, Grid, Paper, styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useNavigate } from "react-router-dom";

const doctorData = {
  name: "Nikhil Singh",
  registrationNumber: "ABCD1234",
  qualifications: ["MBBS"],
  specializations: [["MS", "General Surgery"]],
};


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


const AddRecordButton = ()=>{
  const navigate = useNavigate();
  function handleAddRecord(){
    return navigate("/add-health-record")
  }

  return (
    <Button variant="outlined" color="info" onClick={handleAddRecord}>
      Add Record
    </Button>
  );
}

const columns = [
  { field: "id", headerName: "ID", width: 90},
  {
    field: "patientName",
    headerName: "Patient Name",
    width: 150,
  },
  {
    field: "publicKey",
    headerName: "Public Key",
    width: 450,
  },
  {
    field: "viewRecord",
    headerName: "View Record",
    width: 250,
    flex: 1,
    renderCell: (params) => {
      return (
        <Button variant="outlined" color="info">
          View Record
        </Button>
      );
    },
  },
  {
    field: "addRecord",
    headerName: "Add Record",
    width: 250,
    flex: 1,
    renderCell: ()=> <AddRecordButton/>
  },
];

const rows = [
  {
    id: 1,
    patientName: "Nikhil Singh",
    publicKey: "0xd9145CCE52D386f254917e481eB44e9943F39138",
  },
];

function PatientDataGrid() {
  return (
    <Box>
      <Box>
        <h1>Patient's List</h1>
      </Box>
      <Box sx={{ height: 350, width: "100%" }}>
        <DataGrid
          rows={rows}
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

function DoctorHomepage() {
  return (
    <>
      <Grid container spacing={2} sx={{ width: "100%" }}>
        <Grid item xs={3}>
          <Item>Name</Item>
        </Grid>
        <Grid item xs={9}>
          <Item>{doctorData.name}</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>Registration Number </Item>
        </Grid>
        <Grid item xs={9}>
          <Item>{doctorData.registrationNumber}</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>Qualifications</Item>
        </Grid>
        <Grid item xs={7}>
          <Item sx={{ padding: 0 }}>
            {doctorData.qualifications.map((qual,index) => {
              return (
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ height: "100%", margin: "0px 10px" }}
                  key={index}
                >
                  {qual}
                </Button>
              );
            })}
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="outlined"
            color="primary"
            sx={{ width: "100%", height: "100%" }}
          >
            Update
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Item>Specializations</Item>
        </Grid>
        <Grid item xs={7}>
          <Item sx={{ padding: 0 }}>
            {doctorData.specializations.map((spec,index) => {
              return (
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ height: "100%", margin: "0px 10px" }}
                  key={index}
                >
                  {spec[0] + " : " + spec[1]}
                </Button>
              );
            })}
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="outlined"
            color="primary"
            sx={{ width: "100%", height: "100%" }}
          >
            Update
          </Button>
        </Grid>
      </Grid>
      <PatientDataGrid />
    </>
  );
}

export default DoctorHomepage;
