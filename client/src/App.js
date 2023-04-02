import './App.css';
import {createTheme,ThemeProvider, CssBaseline} from '@mui/material'
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { Route , Routes } from 'react-router-dom';
import AdminLogin from './pages/auth/AdminLogin';



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
        <Routes>
          {/* admin pages */}
          <Route path='/admin/login' element={<AdminLogin/>}/>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
