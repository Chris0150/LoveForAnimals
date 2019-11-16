import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const classes = useStyles();

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        maxHeight: "75vh",
        overflow: "auto",
        flexGrow: 1,
        backgroundColor: "rgba(0,0,0,0)",
        display: 'flex'
    },
    tabs: {
        overflow: "initial",
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    tab: {
        padding: 0
    },
    tab2: {
        maxHeight: "75vh",
        overflow: "auto"
    },

}));

export default function VerticalTabs(props) {
    const classes = useStyles();
    const [value] = React.useState(0);
    //const [value, setValue] = React.useState(0);

    //TODO: fix this
    // const handleChange = (event, index) => {
    // setValue(index);
    // };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={props.change}
                className={classes.tabs}
            >
                <Tab label={props.icons[0]} {...a11yProps(0)} />
                <Tab label={props.icons[1]} {...a11yProps(1)} />
                <Tab label={props.icons[2]} {...a11yProps(2)} />
                <Tab label={props.icons[3]} {...a11yProps(3)} />
                <Tab label={props.icons[4]} {...a11yProps(4)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <div className={classes.tab2}>
                    {props.items}
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                {props.items}
            </TabPanel>
            <TabPanel value={value} index={2}>
                {props.items}
            </TabPanel>
            <TabPanel value={value} index={3}>
                {props.items[0]}
            </TabPanel>
            <TabPanel value={value} index={4}>
                {props.items[0]}
            </TabPanel>
        </div>
    );
}
