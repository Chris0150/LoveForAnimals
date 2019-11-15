import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormLabel from '@material-ui/core/FormLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    title: {
        margin: 20
    },
    section: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        marginTop: 10,

        // backgroundColor: theme.palette.background.paper,
    },
    checkbox: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        marginTop: 15,

        // backgroundColor: theme.palette.background.paper,
    }
}));

export default function FolderList(props) {
    const classes = useStyles();
    // const [state, setState] = React.useState({
    //     checkedA: false,
    //     checkedB: false
    // });

    // const handleChange = name => event => {
    //     setState({ ...state, [name]: event.target.checked });
    // };

    return (
        <div>

            <Typography className={classes.title} variant="h6" display="block" gutterBottom>
                Cuestionario de Adopción
                        </Typography>

            {/* Contribución
            <div className={classes.section}>
                <FormLabel>Contribución</FormLabel>
                <div className={classes.checkbox}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.checkedA}
                                onChange={handleChange('checkedA')}
                                value="checkedA" />
                        }
                        label="Única"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.checkedB}
                                onChange={handleChange('checkedB')}
                                value="checkedB"
                            />
                        }
                        label="Periódica"
                    />
                </div>
            </div>

          
            <div className={classes.section}>
                <FormLabel>Contribución</FormLabel>
                <div className={classes.checkbox}>
                 
                 
                </div>
            </div> 
            */}

        </div>
    );
}