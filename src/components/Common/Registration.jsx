import { Box, Paper, Tab , Tabs , Typography , TextField, Button, Stack} from '@mui/material'
import React from 'react'
import './styles/register.css'
import PropTypes from 'prop-types';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


// Register Patient Component

function RegisterPatient(){
  return(
    <Box component={"form"} sx={{width : "100%" , marginTop : 4}}>
      <TextField id="outlined-basic" label="Name" variant="outlined" sx={{width : "100%"}}/>
      <TextField id="outlined-basic" label="Age" variant="outlined" sx={{width : "100%" , marginTop: 2}}/>
      <TextField id="outlined-basic" label="Height(cm)" variant="outlined" sx={{width : "47%" , marginTop: 2 , marginRight: 4}} />
      <TextField id="outlined-basic" label="Blood Group" variant="outlined" sx={{width : "47%" , marginTop: 2}} />
      <Stack direction={"row"} sx={{display: "flex" , justifyContent: "center"}}>

      <Button variant="contained" sx={{width: "50%" , height: "50px" , margin : "20px"}}>Register</Button>
      </Stack>
    </Box>
  )
}

function RegisterDoctor(){
  return (
    <Box component={"form"} sx={{width : "100%" , marginTop : 4}}>
      <TextField id="outlined-basic" label="Name" variant="outlined" sx={{width : "100%"}}/>
      <TextField id="outlined-basic" label="Age" variant="outlined" sx={{width : "100%" , marginTop: 2}}/>
      <TextField id="outlined-basic" label="Registration Number" variant="outlined" sx={{width : "100%", marginTop: 2}} />
      <Stack direction={"row"} sx={{display: "flex" , justifyContent: "center"}}>
        <Button variant="contained" sx={{width: "50%" , height: "50px" , margin : "20px"}}>Register</Button>
      </Stack>
    </Box>
  )
}

function RegisterHospital(){
  return (
    <Box component={"form"} sx={{width : "100%" , marginTop : 4}}>
      <TextField id="outlined-basic" label="Name" variant="outlined" sx={{width : "100%"}}/>
      <TextField id="outlined-basic" label="Address1" variant="outlined" sx={{width : "100%" , marginTop: 2}}/>
      <TextField id="outlined-basic" label="Address2" variant="outlined" sx={{width : "47%" , marginTop: 2 , marginRight: 4}}/>
      <TextField id="outlined-basic" label="Pin Code" variant="outlined" sx={{width : "47%" , marginTop: 2 }}/>
      <TextField id="outlined-basic" label="City" variant="outlined" sx={{width : "31%" ,marginTop: 2 , marginRight: 2}} />
      <TextField id="outlined-basic" label="State" variant="outlined" sx={{width : "31%" ,marginTop: 2 , marginRight: 2}} />
      <TextField id="outlined-basic" label="Country" variant="outlined" sx={{width : "31%",marginTop: 2 }} />
      <Stack direction={"row"} sx={{display: "flex" , justifyContent: "center"}}>
        <Button variant="contained" sx={{width: "50%" , height: "50px" , margin : "20px"}}>Register</Button>
      </Stack>
    </Box>
  )
}

function BasicTabs() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Patient" {...a11yProps(0)} />
          <Tab label="Doctor" {...a11yProps(1)} />
          <Tab label="Hospital" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <RegisterPatient/>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <RegisterDoctor/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <RegisterHospital/>
      </TabPanel>
    </Box>
  );
}


function Registration() {
  return (
    <Paper id='register'>
      <Paper elevation={4} className="register-container">
        <h1>Register to Healthcare</h1>
        <BasicTabs/>
      </Paper>
    </Paper>
  )
}

export default Registration