import { Grid , styled , Paper , Button , Box} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import { redirect, useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ffe",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const patientInfo = {
  name : "Darshan Singh",
  age : "22",
  bloodGroup: "B+",
  height: "172"
}


const columns = [
  { field: "id", headerName: "ID", width: 90},
  {
    field: "patientName",
    headerName: "Patient Name",
    width: 200,
  },
  {
    field: "publicKey",
    headerName: "Public Key",
    width: 500,
  },
  {
    field: "revokeAccess",
    headerName: "Revoke Access",
    width: 250,
    flex: 1,
    renderCell: (params) => {
      return (
        <Button variant="outlined" color="warning">
          Revoke Access
        </Button>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    patientName: "Rahul Singh",
    publicKey: "0xd9145CCE52D386f254917e481eB44e9943F39138",
  },
  {
    id: 2,
    patientName: "Prashant Singh",
    publicKey: "0xd9145CCE52D386f254917e481eB44e9943F39138",
  },
];

function DoctorDataGrid() {
  return (
    <Box sx={{marginTop: 4}}>
      <Box>
        <h1>Accessed Doctor's List</h1>
      </Box>
      <Box sx={{ height: 280, width: "100%" }}>
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


function ViewHealthRecordButton(){
  
  const navigate = useNavigate();
  
  function handleViewRecord(){
    return navigate("/healthrecord");
  }

  return(
    <Box sx={{display: "flex" , justifyContent: "center" , margin : "40px 0px"}}>
      <Button variant='outlined' color='error' onClick={handleViewRecord}>View Health Record</Button>
    </Box>
  )
}


// function PermitAccessToDoctorComponent(){
//   return(
//     <Box>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Box sx={{display: "flex" , justifyContent: "center" , width:"100%"}}>
//             <Item sx={{fontWeight : 600, fontSize : 18 , width : "100%"}} >Share Medical Record</Item>
//           </Box>
//         </Grid>
//         <Grid item xs={2}>
//           <Item sx={{fontWeight : 600,}}>Select Doctor</Item>
//         </Grid>
//         <Grid item xs={7}>

//         </Grid>
//         <Grid item xs={3}>

//         </Grid>

//       </Grid>
//     </Box>
//   )
// }

function PatientHomepage() {
  return (
    <>
    <Grid container spacing={2} sx={{width : "100%"}}>
      <Grid item xs={3}>
        <Item sx={{fontWeight: 600}}>Name</Item>
      </Grid>
      <Grid item xs={9}>
        <Item sx={{color: "black" , fontWeight: 600}}>{patientInfo.name}</Item>
      </Grid>
      <Grid item xs={1}>
        <Item sx={{fontWeight: 600}}>Age</Item>
      </Grid>
      <Grid item xs={2}>
        <Item sx={{color: "black" , fontWeight: 600}}>{patientInfo.age}</Item>
      </Grid>
      <Grid item xs={2}>
        <Item sx={{fontWeight: 600}}>Blood Group</Item>
      </Grid>
      <Grid item xs={3}>
        <Item sx={{color: "black" , fontWeight: 600}}>{patientInfo.bloodGroup}</Item>
      </Grid>
      <Grid item xs={1}>
        <Item sx={{fontWeight: 600}}>{"Height(cm)"}</Item>
      </Grid>
      <Grid item xs={3}>
        <Item sx={{color: "black" , fontWeight: 600}}>{patientInfo.height}</Item>
      </Grid>
    </Grid>
    

    <DoctorDataGrid/>

    <ViewHealthRecordButton/>

    {/* <PermitAccessToDoctorComponent/> */}

    </>
  )
}

export default PatientHomepage