import React from 'react';
import { connect } from "react-redux";
import './Centros.css';
import Map from '../../components/Map';
import NavBar from '../../components/NavBar';
import GridList from '../../components/GridList';
import TabPanel from '../../components/TabPanel';
import List from "../../components/List";
import Typography from '@material-ui/core/Typography';
import User from '../../assets/images/centros/wide1.jpg';
import adoptdog from "../../assets/images/icons/adoptdog.png";
import ListUsers from '../../assets/data/ListUsers';

class PerfilCentro extends React.Component {
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
          <Typography variant="h6" style={{ display: "block", textAlign: "center" }} gutterBottom>Protectora Gat i Gos</Typography>
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
            icon={adoptdog}
            zoom={14}
            height={window.innerHeight/2}
          />
        </div>
    );

    return (
      <div>
        <NavBar handleNavBack={this.handleNavBack} title="Detalles Centro" />
        <TabPanel
          tab1="Información"
          tab2="Animales"
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

export default connect(mapStateToProps, mapDispatchToProps)(PerfilCentro);
