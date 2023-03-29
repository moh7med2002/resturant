import './App.css';
import {createTheme,ThemeProvider,Button, Typography,Box, CssBaseline} from '@mui/material'
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';



function App() {

  const {mode} = useSelector(s => s.theme);
  const theme = createTheme({
    direction:"rtl",
    palette:{
      mode:mode
    }
  })

  useEffect(()=>{
    const lang = Cookies.get("i18next") || "en";
    if(lang==="ar"){
      document.body.dir="rtl"
    }
    else{
      document.body.dir="ltr"
    }
  },[])


  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
      </ThemeProvider>
    </div>
  );
}

export default App;
