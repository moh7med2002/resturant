import './App.css';
import {createTheme,ThemeProvider} from '@mui/material'
import { Route , Routes } from 'react-router-dom';
import AdminLogin from './pages/auth/AdminLogin';
import AdminHome from './pages/admin/AdminHome';
import AddMarket from './pages/admin/AddMarket';
import AllMarkets from './pages/admin/AllMarkets';
import MarketHome from './pages/market/MarketHome';
import AddProduct from './pages/market/AddProduct';
import AddDepartment from './pages/market/AddDepartment';
import AllUsers from './pages/admin/AllUsers';
import MarketDepartments from './pages/market/MarketDepartments';
import MarketAllProducts from './pages/market/MarketAllProducts';
import ChatCustomers from './pages/market/ChatCustomers';

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
  });


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
          <Route path='/admin/all-users' element={<AllUsers/>}/>
          {/** market pages */}
          <Route path='/market' element={<MarketHome/>}/>
          <Route path='/market/add-product' element={<AddProduct/>}/>
          <Route path='/market/add-department' element={<AddDepartment/>}/>
          <Route path='/market/departments' element={<MarketDepartments/>}/>
          <Route path='/market/products' element={<MarketAllProducts/>}/>
          <Route path='/market/chat-coustomer' element={<ChatCustomers/>}/>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
