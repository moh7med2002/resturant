import './App.css';
import {createTheme,ThemeProvider} from '@mui/material'
import { Route , Routes , Navigate} from 'react-router-dom';
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
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { useSelector } from 'react-redux';
import MarketLogin from './pages/auth/MarketLogin';
import Home from './pages/client/Home';
import Market from './pages/client/Market';
import Markets from './pages/client/Markets';

const queryClient = new QueryClient()


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

  const {admin} = useSelector(s => s.admin);
  const {market} = useSelector(s => s.market);


  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          {/* auth pages */}
          <Route path='/admin/login' element={admin ?<Navigate to={'/admin'}/> :<AdminLogin/>}/>
          <Route path='/market/login' element={market ?<Navigate to={'/market'}/> :<MarketLogin/>}/>

          {/** admin pages*/}
          <Route path='/admin' element={admin ? <AdminHome/> : <Navigate to={'/admin/login'}/>}/>
          <Route path='/admin/add-market' element={admin ? <AddMarket/> : <Navigate to={'/admin/login'}/>}/>
          <Route path='/admin/all-markets' element={admin ? <AllMarkets/> : <Navigate to={'/admin/login'}/>}/>
          <Route path='/admin/all-users' element={admin ? <AllUsers/> : <Navigate to={'/admin/login'}/>}/>
          {/** market pages */}
          <Route path='/market' element={market?<MarketHome/> : <Navigate to={'/market/login'}/>}/>
          <Route path='/market/add-product' element={market?<AddProduct/> : <Navigate to={'/market/login'}/>}/>
          <Route path='/market/add-department' element={market?<AddDepartment/> : <Navigate to={'/market/login'}/>}/>
          <Route path='/market/departments' element={market?<MarketDepartments/> : <Navigate to={'/market/login'}/>}/>
          <Route path='/market/products' element={market?<MarketAllProducts/> : <Navigate to={'/market/login'}/>}/>
          <Route path='/market/chat-coustomer' element={market?<ChatCustomers/> : <Navigate to={'/market/login'}/>}/>
        {/** home pages */}
        <Route path='' element={<Home/>}/>
        <Route path='markets' element={<Markets/>}/>
        <Route path='/market/:id' element={<Market/>}/>
        </Routes>
      </ThemeProvider>
    </div>
    </QueryClientProvider>
  );
}

export default App;
