import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { MdCategory, MdDashboard } from "react-icons/md";
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Link, Route, Routes } from 'react-router-dom';
import Category from './Category';
import Dash2 from './Dash2';
import QA from './Q&A';
import Subcategory from './Subcategory'; // Fixed spelling

const drawerWidth = 240;

function Dashbord() {
    const iconList = [<MdDashboard />, <MdCategory />, <ControlPointDuplicateIcon />, <HelpOutlineIcon />];
    const links = ['/', '/Category', '/Subcategory', '/QA']; // Fixed spelling

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Interview Portal
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { 
                        width: drawerWidth, 
                        boxSizing: 'border-box',
                        height: '100vh'
                    },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List >
                        {['Dashboard', 'Category', 'Subcategory', 'Q & A'].map((text, index) => (
                            <ListItem key={text} disablePadding sx={{width:"100%"}}>
                                <Link to={links[index]} style={{ textDecoration: 'none', color: 'inherit',width:"90%",margin:"auto" }}>
                                    <ListItemButton
                                        sx={{
                                            '&:hover': {
                                                backgroundColor: '#1976D2' ,
                                                color:"white"
                                            }
                                        }}
                                    >
                                        <ListItemIcon>
                                            {iconList[index]}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Routes>
                    <Route path="/" element={<Dash2 />} />
                    <Route path="/Category" element={<Category />} />
                    <Route path="/Subcategory" element={<Subcategory />} />
                    <Route path="/QA" element={<QA />} />
                </Routes>
            </Box>
        </Box>
    );
}

export default Dashbord;
