import * as React from 'react';
import "../Dashboard/Dashboard.css"
import keep from '../Dashboard/keep.png'
import { styled, useTheme } from '@mui/material/styles';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Clear from '@mui/icons-material/Clear';
import Badge from '@mui/material/Badge';
import Refresh from '@mui/icons-material/Refresh';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import ViewStreamSharp from '@mui/icons-material/ViewStreamSharp';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import { useState } from "react";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
// import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import Button from "@mui/material/Button";
// import IconButton from '@mui/material/IconButton';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { alpha } from '@mui/material/styles';




const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


export default function Dashboard() {

  //Notes

    const [show, setShow] = useState(false); 
  
    const expandIt = () => {
      setShow(true);
    };
  
    const normal = () => {
      setShow(false);
    };
 
    
    //Drawer
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };



  return (
    <div className = "dash">
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
           
          >
            <MenuIcon />
          </IconButton>
          <img src={keep} className='keep_logo' alt="keep image" />
          <Typography variant="h6" noWrap component="div">
            Fundoo Notes
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
         

          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
           <div className = "icons">
            <IconButton size="large" color="inherit">
              < Badge className = "refresh">
         
                <Refresh />
                </Badge>
                </IconButton>
                
            <IconButton size="large" color="inherit">
                < Badge className = "list">
                <ViewStreamOutlinedIcon/>
                </Badge>
                </IconButton>

                
            <IconButton size="large" color="inherit">


                < Badge className = "settings">
                <SettingsOutlined />
                </Badge>
       
            </IconButton>
            </div>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              className="apps"
            >
                <AppsIcon/>
    
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          
        </DrawerHeader>
        <Divider />
        <List>
          {['Notes', 'Reminders', 'Edit Labels', 'Archive', 'Bin'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index <= 0 ? <LightbulbOutlinedIcon /> : <InboxIcon /> && index <= 1 ? <NotificationsNoneIcon /> : <InboxIcon />
                  && index <= 2 ? <ModeEditOutlineOutlinedIcon /> : <InboxIcon />
                    && index <= 3 ? <ArchiveOutlinedIcon /> : <InboxIcon />
                      && index <= 4 ? <DeleteOutlineOutlinedIcon /> : <InboxIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

      </Box>
    </Box>
    <div className="header2" >
      <form id="form1">
        {show && (
          <input
            className="forminput1"
            type="text"
            placeholder="Title"
            name="title"
          />
        )}


        <p>
        <input className="forminput2" aria-label="empty textarea" placeholder="Take a Note..."  onDoubleClick={expandIt} />
        <IconButton size="large" >
          <CheckBoxOutlinedIcon/>
          </IconButton>
          <IconButton size="large" >
          <BrushOutlinedIcon/>
          </IconButton>
          <IconButton size="large" >
          <InsertPhotoOutlinedIcon/>
          </IconButton>
        </p>
        {show && (
          <div id="icons">
            <AddAlertOutlinedIcon
              style={{ fontSize: "large" }}
            ></AddAlertOutlinedIcon>
            <PersonAddOutlinedIcon
              style={{ fontSize: "large" }}
            ></PersonAddOutlinedIcon>
            <ColorLensOutlinedIcon
              style={{ fontSize: "large" }}
            ></ColorLensOutlinedIcon>
            <ImageOutlinedIcon
              style={{ fontSize: "large" }}
            ></ImageOutlinedIcon>
            <ArchiveOutlinedIcon
              style={{ fontSize: "large" }}
            ></ArchiveOutlinedIcon>
            <MoreVertOutlinedIcon
              style={{ fontSize: "large" }}
            ></MoreVertOutlinedIcon>
            <UndoOutlinedIcon style={{ fontSize: "large" }}></UndoOutlinedIcon>
            <RedoOutlinedIcon style={{ fontSize: "large" }}></RedoOutlinedIcon>
            <Button className="button" style={{ fontSize: "small" }} onClick = {normal}>Close</Button>
          </div>
        )}
      </form>
    </div>
    </div>
    
  
  );
}


