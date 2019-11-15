import React from 'react';
import { connect } from "react-redux";
import './Centros.css';
import NavBar from '../../components/NavBar';
import TabPanel from '../../components/TabPanel';

class PerfilVet extends React.Component {
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

    // Tabs
    let tabs = [];
    tabs.push(
      <div>
      
      </div>
    );
    tabs.push(
      <div>
        
      </div>
       ); 
       tabs.push(
        <div>
        
        </div>
         );

    return (
      <div>
        <NavBar handleNavBack={this.handleNavBack} title="Detalles Vet" />
        <TabPanel
          tab1="Información"
          tab2="Imagenes"
          tab3="Valoraciones"
          variant="fullWidth"
          orientation="horizontal"
          items={tabs}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(PerfilVet);
