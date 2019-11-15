import React from 'react';
import { connect } from "react-redux";
import './Apadrinar';
import NavBar from '../../components/NavBar';
import FormApadrinar from '../../components/Forms/FormularioApadrinar';

class Apadrinar extends React.Component {
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
        <NavBar handleNavBack={this.handleNavBack} title="Apadrinar" />
        <FormApadrinar/>
      </div>
    );
  }
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Apadrinar);
