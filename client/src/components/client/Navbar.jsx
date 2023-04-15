import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const navItems = [
    {title:"Cart",url:"/cart"},{title:'Orders',url:"/orders"}
];

function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Link to="/">
        <Typography variant="h6" sx={{ my: 2 ,color:"white"}}>
            Multi Vendor
        </Typography>
        </Link>
        <Divider />
        {true?
        <List>
            <Link to={'/'}>
                <ListItem disablePadding sx={{color:"white"}}>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText primary={'Home'} />
                    </ListItemButton>
                </ListItem>
            </Link>
            <Link to={'/markets'}>
                <ListItem disablePadding sx={{color:"white"}}>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText primary={'Markets'} />
                    </ListItemButton>
                </ListItem>
            </Link>
            {navItems.map((item) => (
            <Link to={item.url}>
                <ListItem key={item} disablePadding sx={{color:"white"}}>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText primary={item.title} />
                    </ListItemButton>
                </ListItem>
            </Link>
            ))}
            <ListItem disablePadding sx={{color:"white"}}>
                <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText primary={'Logout'} />
                </ListItemButton>
            </ListItem>
        </List>
        :
        <List>
            <Link to={'/login'}>
                <ListItem disablePadding sx={{color:"white"}}>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText primary='Login'/>
                    </ListItemButton>
                </ListItem>
            </Link>
            <Link to={'/register'}>
                <ListItem disablePadding sx={{color:"white"}}>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText primary='Register'/>
                    </ListItemButton>
                </ListItem>
            </Link>
        </List>}
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" sx={{color:"white"}}>
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            <Link to="/">
            <Typography
                variant="h6"
                component="div"
            >
                Multi Vendor
            </Typography>
            </Link>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {
                true?   
                <>
                <Link to={'/'}>
                    <Button sx={{color:"white"}}>
                        Home
                    </Button>
                </Link>
                <Link to={'/markets'}>
                    <Button sx={{color:"white"}}>
                        Markets
                    </Button>
                </Link>
                {navItems.map((item) => (
                <Link to={item.url}>
                    <Button key={item} sx={{color:"white"}}>
                        {item.title}
                    </Button>
                </Link>
                ))}
                <Button sx={{color:"white"}}>
                    Logout
                </Button>
                </>
                :
                <>
                <Link to={'/login'}>
                    <Button sx={{color:"white"}}>
                        Login
                    </Button>
                </Link>
                <Link to={'/register'}>
                    <Button sx={{color:"white"}}>
                        Register
                    </Button>
                </Link>
                </>
                }
            </Box>
            </Toolbar>
        </AppBar>
        <Box component="nav">
            <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            >
            {drawer}
            </Drawer>
        </Box>
        <Box component="main">
            <Toolbar />
        </Box>
        </Box>
    );
}

Navbar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Navbar;