import { Button, Paper } from '@mui/material'
import React from 'react'
import './styles/login.css'

function Login() {
  return (
    <div id="login">
        <Paper elevation={4} className="login-container">
            <h1>Welcome to Healthcare</h1>
            <Button variant="contained">Login</Button>
        </Paper>
    </div>
  )
}

export default Login