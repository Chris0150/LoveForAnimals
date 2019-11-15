import React, { Component } from 'react';
import { connect } from "react-redux";
import './Perfil.css';
import NavBar from '../../../components/NavBar';
import List from "../../../components/List";
import TabPanel from '../../../components/TabPanel';
import Typography from '@material-ui/core/Typography';
import User from '../../../assets/images/profiles/user3.png';
import ListUsers from '../../../assets/data/ListUsers';

class Perfil extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    // Perfil
    let tabs = [];
    tabs.push(
      <div>
        <img src={User} alt="" height="150px" style={{ display: "block", margin: "auto", padding: 30 }} />
        <Typography variant="h6" style={{ display: "block", textAlign: "center" }} gutterBottom>User</Typography>
        <div>
          <Typography variant="caption" style={{ display: "block", textAlign: "center" }} gutterBottom>
            Miembro desde: 07/08/2018
           </Typography>
          <Typography variant="caption" style={{ display: "block", textAlign: "center" }} gutterBottom>
            Lugar: Barcelona
           </Typography>
        </div>
      </div>
    );

    // Valoraciones
    tabs.push(
      <div>
        <Typography variant="caption" style={{display: "block", margin: 20 }} gutterBottom>
          Últimos comentarios:
        </Typography>

        <List
          items={ListUsers}
          showFeedback={true}
          showRating={true}
          maxHeight={"66vh"}
          overflow="auto"
        />
      </div>
    );

    // Configuracion
    tabs.push(
      <div style={{ padding: 15 }}>
      </div>
    );

    return (
      <div>
        <NavBar handleNavBack={this.handleNavBack} title="Cuenta de Usuario" />
        <TabPanel
          tab1="Perfil"
          tab2="Valoraciones"
          tab3="Configuración"
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

export default connect(mapStateToProps, mapDispatchToProps)(Perfil);
