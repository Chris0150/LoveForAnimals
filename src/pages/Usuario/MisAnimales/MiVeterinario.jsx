import React from 'react';
import { connect } from "react-redux";
import './FormularioVeterinario.css';
import NavBar from '../../../components/NavBar';
import FormVet from '../../../../components/FormularioVeterinario';


class FormularioVeterinario extends React.Component {
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
        <NavBar handleNavBack={this.handleNavBack} title="Consulta Veterinaria"/>
        <FormVet/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(FormularioVeterinario);
