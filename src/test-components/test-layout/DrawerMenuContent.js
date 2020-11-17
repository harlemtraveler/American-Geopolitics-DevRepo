import React from "react";
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

export default function DrawerMenuContent() {
  return (
    <>
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
        <ListItem button>
          <ListItemIcon>
            <ExploreIcon />
          </ListItemIcon>
          <ListItemText primary={"Explore"} />
        </ListItem>
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
    </>
  );
}