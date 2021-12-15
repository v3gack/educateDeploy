 import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/material/Menu';
import { useHistory } from 'react-router-dom';

export default function Appbar() {

  const history = useHistory();
  const routeChange = () =>{ 
    let path = '/suma'; 
    history.push(path);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: '#2E3B55' }} position="static">
        <Toolbar> 
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button  onClick ={
                    ()=>{
                    history.push("/suma");
                    }
                } variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Nivel Semilla
          </Button>
          <Button  onClick ={
                    ()=>{
                    history.push("/suma");
                    }
                } variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Nivel Brote
          </Button>
          <Button  onClick ={
                    ()=>{
                    history.push("/suma");
                    }
                } variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Nivel Planta
          </Button>
          <Button  onClick ={
                    ()=>{
                    history.push("/suma");
                    }
                } variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Nivel Arbol
          </Button>
          
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
