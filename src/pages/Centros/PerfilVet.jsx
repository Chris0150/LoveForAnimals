import React from 'react';
import { connect } from "react-redux";
import './Centros.css';
import NavBar from '../../components/NavBar';
import TabPanel from '../../components/TabPanel';
import List from "../../components/List";
import Typography from '@material-ui/core/Typography';
import User from '../../assets/images/vets/wide2.jpg';
import ListUsers from '../../assets/data/ListUsers';

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
        <div>
        <img src={User} alt="" style={{marginTop: 20, height: 200, width: "100%" }} />
        <Typography variant="h6" style={{ display: "block", textAlign: "center" }} gutterBottom>Medico Veterinario 24/7</Typography>
        <div>
          <Typography variant="caption" style={{ display: "block", textAlign: "center" }} gutterBottom>
            c/Marina 139-145
           </Typography>
          <Typography variant="caption" style={{ display: "block", textAlign: "center" }} gutterBottom>
            Barcelona 08005
           </Typography>
        </div>
        <Typography variant="caption" style={{display: "block", margin: 20 }} gutterBottom>
          Últimas valoraciones:
        </Typography>

        <List
          items={ListUsers}
          showFeedback={true}
          showRating={true}
          maxHeight={"30vh"}
          overflow="auto"
        />
      </div>
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
        <NavBar handleNavBack={this.handleNavBack} title="Detalles Veterinario" />
        <TabPanel
          tab1="Información"
          tab2="Imágenes"
          tab3="Contacto"
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
