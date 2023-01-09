import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useEffect, useState} from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

export default function LagoonAppBar(props) {

  const {title} = props
  const [subTitle, setSubTitle] = useState('')
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const menuItems = [
      {'name': 'apiKeys', 'label': 'Api Keys', 'url': '/apiKey.html'},
      {'name': 'comparison', 'label': 'Case Comparison', 'url': '/comparison.html'},
      {'name': 'dashboard', 'label': 'Dashboard', 'url': '/app.html'},
      {'name': 'discoveryPluginSite', 'label': 'Discovery Plugin Site Management', 'url': '/discoveryPluginSite.html' },
      {'name': 'discoveryPlugin', 'label': 'Discovery Plugin Management', 'url': '/discoveryPlugin.html' },
      {'name': 'documentation', 'label': 'Documentation', 'url': 'https://support.bakerstreet.llc/'},
      {'name': 'options', 'label': 'Configuration Options', 'url': '/options.html'},
      {'name': 'report', 'label': 'Reporting', 'url': '/draftEditor.html'},
      {'name': 'support', 'label': 'Support', 'url':'https://bakerstreet.llc'}
  ]

  useEffect(() =>
  {
    setSubTitle(title)
  }, [title]);

  const handleMainMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = (event) => {
    setAnchorEl(null);
    const { optionValue } = event.currentTarget.dataset;
    const found = menuItems.find((menuItem) => menuItem.name === optionValue);

    if(found === undefined) {
      return;
    }
    window.open(found.url, '_blank');
  }

  return (
    <Box sx={{ flexGrow: 1, pb:2 }} >
      <AppBar position="static" >
        <Toolbar>
          <IconButton
            aria-controls="main-menu"
            aria-haspopup="true"
            onClick={handleMainMenuClick}
            size="large">
            <MenuIcon />
          </IconButton>
            <Menu
              id="main-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
            >
            {menuItems &&
              menuItems.map((menuItem) => (
                <MenuItem
                  key={menuItem.label}
                  onClick={handleClose}
                  data-option-value={menuItem.name}
                >
                  {menuItem.label}
                </MenuItem>
              ))}
            </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Local Internet Archive (LIA) &mdash; {subTitle}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}