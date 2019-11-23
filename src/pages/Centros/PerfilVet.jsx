import React from 'react';
import { connect } from "react-redux";
import './PerfilVet.css';
import Map from '../../components/Map';
import NavBar from '../../components/NavBar';
import TabPanel from '../../components/TabPanel';
import List from "../../components/List";
import GridList from '../../components/GridList';
import Typography from '@material-ui/core/Typography';
import User from '../../assets/images/vets/wide2.jpg';
import ListUsers from '../../assets/data/ListUsers';
import vet from "../../assets/images/icons/vet.png";

class PerfilVet extends React.Component {
  constructor(props) {
    super(props);

    this.handleNavBack = this.handleNavBack.bind(this);
  }

  handleNavBack() {
    this.props.history.goBack();
  }

  render() {
    let aMarkers = [];
    aMarkers.push([[41.403611, 2.174444], 13]);

    // Tabs
    let tabs = [];
    tabs.push(
      <div>
        <div>
          <img src={User} alt="" style={{ marginTop: 20, height: 200, width: "100%" }} />
          <Typography variant="h6" style={{ display: "block", textAlign: "center" }} gutterBottom>Medico Veterinario 24/7</Typography>
          <div>
            <Typography variant="caption" style={{ display: "block", textAlign: "center" }} gutterBottom>
              c/Marina 139-145
           </Typography>
            <Typography variant="caption" style={{ display: "block", textAlign: "center" }} gutterBottom>
              Barcelona 08005
           </Typography>
          </div>
          <Typography variant="caption" style={{ display: "block", margin: 20 }} gutterBottom>
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

    // Imagenes
    tabs.push(
      <div>
        <GridList type="Perros" showFooter={true} />
      </div>
    );

    // Contacto
    tabs.push(
      <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: window.innerWidth - 20 }}>
          <Map
            type={"Contacto"}
            showPopover={true}
            markers={aMarkers}
            icon={vet}
            zoom={14}
            height={"50vh"}
            width={"30vh"}
          />
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
