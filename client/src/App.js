import './App.css';
import {createTheme,ThemeProvider} from '@mui/material'
import { Route , Routes } from 'react-router-dom';
import AdminLogin from './pages/auth/AdminLogin';
import AdminHome from './pages/admin/AdminHome';
import AddMarket from './pages/admin/AddMarket';
import AllMarkets from './pages/admin/AllMarkets';

function App() {

  const theme = createTheme({
    palette:{
      primary:{
        contrastText:"#fff",
        main:"#283045"
      },
      secondary:{
        contrastText:"#fff",
        main:"#fc5a5a"
      }
    }
  })

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          {/* auth pages */}
          <Route path='/admin/login' element={<AdminLogin/>}/>
          {/** admin pages*/}
          <Route path='/admin' element={<AdminHome/>}/>
          <Route path='/admin/add-market' element={<AddMarket/>}/>
          <Route path='/admin/all-markets' element={<AllMarkets/>}/>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
