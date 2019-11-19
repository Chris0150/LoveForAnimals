import React from 'react';
import { connect } from "react-redux";
import './Notificaciones.css';
import NavBar from '../../../components/NavBar';
import Typography from '@material-ui/core/Typography';

class Notificaciones extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
    this.handleNavBack = this.handleNavBack.bind(this);
  }

  handleNavBack() {
    this.props.history.goBack();
  }
  
  render() {
    return (
      <div>
        <NavBar handleNavBack={this.handleNavBack} title="Notificaciones"/>
        <Typography variant="h6" display="block" gutterBottom>
          Notificaciones
        </Typography>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Notificaciones);
