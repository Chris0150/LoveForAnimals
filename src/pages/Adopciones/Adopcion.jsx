import React from 'react';
import { connect } from "react-redux";
import './Adopcion.css';
import NavBar from '../../components/NavBar';
import FormAdopcion from '../../components/Forms/FormularioAdopcion';

class Adopcion extends React.Component {
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
        <NavBar handleNavBack={this.handleNavBack} title="Formulario de Adopción" />
        <FormAdopcion/>
      </div>
    );
  }
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Adopcion);
