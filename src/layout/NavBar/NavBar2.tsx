import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
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

declare module '@mui/material/AppBar' {
    interface AppBarPropsColorOverrides {
      neutral: true;
    }
  }

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
  }

const drawerWidth = 240;

interface Navigation {
  name: string
  path: string
}

const navItems: Navigation[] = [
  {name: "Accueil", path: `/`},
  {name: "À propos", path: `/about`},
  {name: "Admission", path: `/admission`},
  {name: "Vie scolaire", path: `/school-life`},
  {name: "Vie communautaire", path: `/community-life`},
  {name: "Actualités", path: `/news`},
  {name: "Contact", path: `/contact`}
];

const NavBar2 = ({ window }: Props) => {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 2 }}>
            <img
                src='https://8975b1c016.clvaw-cdnwnd.com/175cd2b7f31d3d4a7d2171ab1f8bf7aa/200000071-e7224e81ff/logopng.png?ph=8975b1c016'
                width={60}
            />
      </Box>
      <Divider />
      <List>
        {navItems.map(({name, path}) => (
          <ListItem key={name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link key={name} to={path} style={{textDecoration: 'none', color: 'inherit', marginLeft: 'auto', marginRight: 'auto'}}><ListItemText primary={name} /></Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
        <AppBar component="nav" position="sticky" color="neutral" style={{boxShadow: 'none'}}>
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
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <img
                    src='https://8975b1c016.clvaw-cdnwnd.com/175cd2b7f31d3d4a7d2171ab1f8bf7aa/200000071-e7224e81ff/logopng.png?ph=8975b1c016'
                    width={60}
                />
            </Box>
            <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
                Collège Al-Bader
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map(({name, path}) => (
                <Button key={name} sx={{ color: '#000' }}>
                    <Link key={name} to={path} style={{textDecoration: 'none', color: 'inherit'}}>{name}</Link>
                </Button>
                ))}
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
    </>
  )
}

export default NavBar2
