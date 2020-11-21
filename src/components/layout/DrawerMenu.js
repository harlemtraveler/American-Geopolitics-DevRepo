import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DescriptionIcon from "@material-ui/icons/Description";
import ListItemText from "@material-ui/core/ListItemText";
import AssessmentIcon from "@material-ui/icons/Assessment";
import TimelineIcon from "@material-ui/icons/Timeline";
import ExploreIcon from "@material-ui/icons/Explore";
import Divider from "@material-ui/core/Divider";
import TheatersIcon from "@material-ui/icons/Theaters";
import HelpIcon from "@material-ui/icons/Help";
import BusinessIcon from "@material-ui/icons/Business";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import {useTheme} from "@material-ui/core/styles";
import Collapse from '@material-ui/core/Collapse';
import RemoveIcon from '@material-ui/icons/Remove';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

export default function TestDrawerMenu(props) {
  const [ expanded, setExpanded ] = useState(false);
  const { classes, open, onClose, handleDrawerClose } = props;
  const theme = useTheme();

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Drawer
        className={classes.drawer}
        variant={"persistent"}
        anchor={"left"}
        open={open}
        onClose={onClose}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {/* Drawer Internals: */}
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <Toolbar />

        {/* List Internals: */}
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText primary={"Top Stories"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary={"Analysis"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <TimelineIcon />
              </ListItemIcon>
              <ListItemText primary={"Forecast"} />
            </ListItem>
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <ExploreIcon />
              </ListItemIcon>
              <ListItemText primary={"Explore"} />
              {expanded ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={expanded} timeout={"auto"} unmountOnExit>
              <List>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <RemoveIcon />
                  </ListItemIcon>
                  <ListItemText primary={"US"} />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <RemoveIcon />
                  </ListItemIcon>
                  <ListItemText primary={"World"} />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <RemoveIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Politics"} />
                </ListItem>
              </List>
            </Collapse>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <TheatersIcon />
              </ListItemIcon>
              <ListItemText primary={"Media"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText primary={"Help & Support"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText primary={"Affiliate Sites"} />
            </ListItem>
          </List>
        </div>

      </Drawer>
    </>
  );
}