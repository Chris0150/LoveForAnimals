import React from 'react';
import { connect } from "react-redux";
import './SobreNosotros.css';
import NavBar from '../../../components/NavBar';
import Typography from '@material-ui/core/Typography';

class SobreNosotros extends React.Component {
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
        <NavBar handleNavBack={this.handleNavBack} title="Sobre Nosotros"/>
        <Typography variant="h6" display="block" gutterBottom>
          Sobre Nosotros
        </Typography>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(SobreNosotros);
