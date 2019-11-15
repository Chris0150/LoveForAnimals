import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import redMarker from "../assets/images/icons/redMarker.png";
import TextField from '@material-ui/core/TextField'; 
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    position: "absolute"
  };
}

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  button: {
    backgroundColor: "rgba(0,0,0,0.3)",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: 20
  },
  paper: {
    width: "66%",
    height: "85%",
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0)",
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "95%",
  },
}));


export default function FolderList(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div>

      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>

          <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <AddIcon onClick={handleOpen} />
          </Fab>
          <div className={classes.grow} />

        </Toolbar>
      </AppBar>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <Typography gutterBottom variant="h5" display="block">
            Nueva Entrada
          </Typography>
          <TextField
            id="filled-password-input"
            label="Nombre"
            variant="filled"
            className={classes.textField}
            margin="normal"
          />

          <TextField
            id="filled-password-input"
            label="Raza"
            variant="filled"
            className={classes.textField}
            margin="normal"
          />

          <TextField
            id="filled-password-input"
            label="Edad"
            variant="filled"
            className={classes.textField}
            margin="normal"
          />

          <TextField
            id="filled-password-input"
            label="Localización"
            variant="filled"
            className={classes.textField}
            margin="normal"
          />


          <TextField
            id="filled-password-input"
            label="Visto por última vez"
            variant="filled"
            className={classes.textField}
            margin="normal"
          />

          <TextField
            id="filled-password-input"
            label="Teléfono de Contacto"
            variant="filled"
            className={classes.textField}
            margin="normal"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange('checkedB')}
                value="checkedB"
                color="primary"
              />
            }
            label="Adjuntar Perfil"
          />


          <Button className={classes.button} onClick={handleClose}>
            <img src={redMarker} alt="" width="20px" />
            Añadir
        </Button>
        </div>
      </Modal>

    </div>
  );
}