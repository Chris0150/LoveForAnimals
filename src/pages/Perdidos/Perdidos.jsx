import React from 'react';
import './Perdidos.css';
import NavBar from '../../components/NavBar';
import BottomBar from '../../components/BottomBar';
import TabPanel from '../../components/TabPanel';
import List from "../../components/List";
import Map from '../../components/Map';
import { connect } from "react-redux";
import MenuIcon from '@material-ui/icons/Menu';
import tileDataDogs from '../../assets/data/GridListDataDogs';
import dog from "../../assets/images/icons/dog.png";

class Perdidos extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);

    this.handleNavBack = this.handleNavBack.bind(this);
  }

  handleNavBack() {
    this.props.history.goBack();
  }

  render() {
    let aPages = [];
    let aMarkers = [];
    let aLostAnimals = [];

    // Data mapping
    tileDataDogs.map((item) => (
      aLostAnimals.push({ target: "", title: item.title, subtitle: item.location, icon: item.img, type: item.type })
    ))
    tileDataDogs.map(user => (
      aMarkers.push(user.coords)
    ))

    // Tab: Listado
    aPages.push(
      <div>
        <List showLostMarker={true} items={aLostAnimals} maxHeight={"75vh"} overflow="auto" />
      </div>
    );

    // Tab: Perdidos
    aPages.push(
      <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: window.innerWidth - 20 }}>
        <Map
          type={"Perdidos"}
          showPopover={true}
          filter={"redFilter"}
          borderRadius={"50%"}
          animation={"pulseRed 2s infinite"}
          markers={aMarkers}
          icon={dog}
          zoom={15}
          height={window.innerHeight - 175}
        />
      </div>
    );

    // Tab: Detectados
    aPages.push(
      <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: window.innerWidth - 20 }}>
        <Map
          type={"Detectados"}
          showPopover={true}
          filter={"yellowFilter"}
          borderRadius={"50%"}
          animation={"pulseYellow 2s infinite"}
          markers={aMarkers}
          icon={dog}
          zoom={14}
          height={window.innerHeight - 175}
        />
      </div>
    );

    // Tab: Encontrados
    aPages.push(
      <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: window.innerWidth - 20 }}>
        <Map
          type={"Encontrados"}
          showPopover={true}
          filter={"greenFilter"}
          markers={aMarkers}
          icon={dog}
          zoom={13}
          height={window.innerHeight - 175}
        />
      </div>
    );

    return (
      <div>
        <NavBar handleNavBack={this.handleNavBack} title="Animales Perdidos" />
        <TabPanel
          tab1={<MenuIcon />}
          tab2="Perdidos"
          tab3="Detectados"
          tab4="Encontrados"
          orientation="horizontal"
          items={aPages}
        />
        <BottomBar type="lost" />
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Perdidos);