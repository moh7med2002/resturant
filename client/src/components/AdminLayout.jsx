import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { adminLogout } from '../redux/adminSlice';
const drawerWidth = 240;

const topics = [
    {title:"Home",icon:<HomeOutlinedIcon/>,link:""},
    {title:"Add Market",icon:<AddOutlinedIcon/>,link:"add-market"},
    {title:"All Markets",icon:<RestaurantMenuOutlinedIcon/>,link:"all-markets"},
    {title:"All Users",icon:<PersonOutlineOutlinedIcon/>,link:"all-users"},
];

function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const dispacth = useDispatch();
    const drawer = (
        <div>
        <Toolbar />
        <List sx={{color:"#fff"}}>
            {topics.map((item, index) => (
            <Link to={`/admin/${item.link}`}>
                <ListItem key={index+'a1'} disablePadding>
                    <ListItemButton>
                    <ListItemIcon sx={{color:"#fff"}}>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                    </ListItemButton>
                </ListItem>
            </Link>
            ))}
            <ListItem key={'a1'} disablePadding onClick={()=>dispacth(adminLogout())}>
                <ListItemButton>
                    <ListItemIcon sx={{color:"#fff"}}>
                        <LogoutOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Logout"} />
                </ListItemButton>
            </ListItem>
        </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
            position="fixed"
            sx={{
            width: { md: `calc(100% - ${drawerWidth}px)`},
            ml: { md: `${drawerWidth}px` },
            bgcolor:"#fff"
            }}
        >
            <Toolbar>
            <IconButton
                color="black"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: 'none' } }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{color:"black"}}>
                Dashboard
            </Typography>
            </Toolbar>
        </AppBar>
        <Box
            component="nav"
            sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
            <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', md: 'none'},
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            >
            {drawer}
            </Drawer>
            <Drawer
            variant="permanent"
            sx={{
                display: { xs: 'none', md: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
            >
            {drawer}
            </Drawer>
        </Box>
        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } , overflowX:"auto"}}
        >
            <Toolbar />
            {props.children}
        </Box>
        </Box>
    );
    }

    ResponsiveDrawer.propTypes = {
    window: PropTypes.func,
    };

export default ResponsiveDrawer;