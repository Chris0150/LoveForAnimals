import React from 'react';
import { connect } from "react-redux";
import './Centros.css';
import NavBar from '../../components/NavBar';
import TabPanel from '../../components/TabPanel';
import List from "../../components/List";
import Map from 'pigeon-maps';
import GridList from '../../components/GridList';
import Typography from '@material-ui/core/Typography';
import User from '../../assets/images/vets/wide2.jpg';
import ListUsers from '../../assets/data/ListUsers';
import vet from "../../assets/images/icons/vet.png";

const locations = {
  "Barcelona": { "center": [41.403611, 2.174444], "zoom": 14 }
}

class PerfilVet extends React.Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, locations['Barcelona'], {
      location: 'Barcelona',
      animating: false,
      animationStart: null
    })

    this.handleNavBack = this.handleNavBack.bind(this);
  }

  handleNavBack() {
    this.props.history.goBack();
  }

  render() {

    const Marker = ({ left, top, style, children }) => (
      <div style={{
        position: 'absolute',
        left: left - 15,
        top: top - 30,
        width: 30,
        height: 30,
        background: 'transparent',
        ...(style || {})
      }}>{children}</div>
    )

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
      <div>
        <Map center={this.state.center} zoom={this.state.zoom} defaultWidth={400} height={400}>

          <Marker key={Math.random()} anchor={[41.403611, 2.174444]} onClick={this.handleMarkerClick}>
            <img alt="" src={vet} width={30} />
          </Marker>

        </Map>
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
