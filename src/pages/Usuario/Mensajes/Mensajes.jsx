import React from 'react';
import { connect } from "react-redux";
import './Mensajes.css';
import NavBar from '../../../components/NavBar';

class Mensajes extends React.Component {
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
        <NavBar handleNavBack={this.handleNavBack} title="Mensajes"/>
        <p>Mensajes page</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Mensajes);
