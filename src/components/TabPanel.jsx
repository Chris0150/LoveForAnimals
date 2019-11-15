import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const StyledTabPanel = withStyles(theme => ({
  root: {
    padding: "0 !important"
  },
}))(TabPanel);

const StyledTabs = withStyles(theme => ({
  root: {
    padding: "0 !important"
  },
}))(Tabs);

const StyledTab = withStyles(theme => ({
  root: {
    padding: "15px !important",
    textTransform: "inherit"
  },
}))(Tab);

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box className={classes.tab} p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: "transparent"
  },
  tab: {
    padding: 0
  }
}));

export default function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  let tabs = [];

  if (props.tab1) tabs.push({ title: props.tab1 });
  if (props.tab2) tabs.push({ title: props.tab2 });
  if (props.tab3) tabs.push({ title: props.tab3 });
  if (props.tab4) tabs.push({ title: props.tab4 });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div >
      <AppBar position="static" className={classes.appBar}>
        <StyledTabs value={value} onChange={handleChange} orientation={props.orientation} variant={props.variant}>

          {tabs.map(
            (tab, index) =>
              <StyledTab key={Math.random()} className={classes.tab} label={tab.title} {...a11yProps(index)} />
          )}

        </StyledTabs>
      </AppBar>

      {tabs.map(
        (tabPanel, index) =>
          <StyledTabPanel key={Math.random()}  value={value} index={index}>
            <div> 
            {props.items[index]}
            </div>
          </StyledTabPanel>
      )}
    </div>
  );
}