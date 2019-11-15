import React from 'react';
import { connect } from "react-redux";
import './Contacto.css';
import NavBar from '../../../components/NavBar';
import FormContact from '../../../assets/Forms/FormularioContacto';

class Contacto extends React.Component {
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
        <NavBar handleNavBack={this.handleNavBack} title="Contacto"/>
        <FormContact />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacto);
