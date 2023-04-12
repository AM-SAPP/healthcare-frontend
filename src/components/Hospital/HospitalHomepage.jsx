import { Box, Button, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const columns = [
  { field: "id", headerName: "ID", width: 90},
  {
    field: "doctorName",
    headerName: "Doctor Name",
    width: 250,
  },
  {
    field: "publicKey",
    headerName: "Public Key",
    width: 450,
  },
  {
    field: "registrationNumber",
    headerName: "Reg. Number",
    type: "string",
    width: 210,
    flex: 1
  },
];

const rows = [
  {
    id: 1,
    doctorName: "Nikhil Singh",
    registrationNumber: "A4BC1234",
    publicKey: "0xd9145CCE52D386f254917e481eB44e9943F39138",
  },
  {
    id: 2,
    doctorName: "Darshan Singh",
    registrationNumber: "B4BC1276",
    publicKey: "0xd9145CCE52D386f254917e481eB44e9943F39138",
  },
  {
    id: 3,
    doctorName: "Rahul Singh",
    registrationNumber: "C4BC1265",
    publicKey: "0xd9145CCE52D386f254917e481eB44e9943F39138",
  },
  {
    id: 4,
    doctorName: "Aman Singh",
    registrationNumber: "D4BC1243",
    publicKey: "0xd9145CCE52D386f254917e481eB44e9943F39138",
  },
  {
    id: 5,
    doctorName: "Prashant Singh",
    registrationNumber: "E4BC1254",
    publicKey: "0xd9145CCE52D386f254917e481eB44e9943F39138",
  },
];

function HospitalHomepage() {
  return (
    <Box>
      <Box sx={{ height: 500, width: "100%" }}>
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
        />
      </Box>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        padding: "20px"
      }}>
        <Button variant="outlined" color="primary" sx={{height : "50px" , fontSize: "20px" , width : "400px"}}>Add Doctors</Button>
      </Box>
    </Box>
  );
}

export default HospitalHomepage;
