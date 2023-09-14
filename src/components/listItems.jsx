import * as React from "react";
import { useState, useEffect } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import PeopleIcon from "@mui/icons-material/People";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {  } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    active: "#9e9e9e",
  },
});

export default function ListItems() {
  const location = useLocation();
  const [active, setActive] = useState(0);
  const { authState, setAuthState } = React.useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Determine the active item based on the current location
    if (location.pathname === "/dashboard") {
      setActive(1);
    } else if (location.pathname === "/pasien") {
      setActive(2);
    } else if (location.pathname === "/help") {
      setActive(3);
    } else {
      setActive(0);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, AuthContext]);

  const handleLogout = () => {
    setAuthState({
      authenticated: false,
    });
    navigate('/signin');
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <ListItemButton
          sx={{
            backgroundColor: active === 1 ? "#9e9e9e" : "transparent",
          }}
          selected={active === 1}
          onClick={() => setActive(1)}
          component={Link}
          to="/dashboard"
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton
          sx={{
            mb: 5,
            backgroundColor: active === 2 ? "#9e9e9e" : "transparent",
          }}
          selected={active === 2}
          onClick={() => setActive(2)}
          component={Link}
          to="/pasien"
        >
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Pasien" />
        </ListItemButton>
        <Divider sx={{ my: 1 }} />
        <ListItemButton
          sx={{
            backgroundColor: active === 3 ? "#9e9e9e" : "transparent",
          }}
          selected={active === 3}
          onClick={() => setActive(3)}
          component={Link}
          to="/help"
        >
          <ListItemIcon>
            <HelpCenterIcon />
          </ListItemIcon>
          <ListItemText primary="Help" />
        </ListItemButton>
        <ListItemButton
          selected={active === 4}
          onClick={handleLogout}
          sx={{
            "&:hover": {
              backgroundColor: "#ff2a12", // Define your hover color here
            },
          }}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Log out" />
        </ListItemButton>
      </ThemeProvider>
    </React.Fragment>
  );
}
