import React from 'react';
import './Perdidos.css';
import NavBar from '../../components/NavBar';
import BottomBar from '../../components/BottomBar';
import TabPanel from '../../components/TabPanel';
import List from "../../components/List";
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker/react'
import { connect } from "react-redux";
import MenuIcon from '@material-ui/icons/Menu';
import tileDataDogs from '../../assets/data/GridListDataDogs';

class Perdidos extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);

    this.state = {
    };

    this.handleNavBack = this.handleNavBack.bind(this);
  }

  handleNavBack() {
    this.props.history.goBack();
  }

  // NOTE:
  // Add the class pigeon-drag-block to disable dragging on the overlay. 
  // Add the class pigeon-click-block to disable map background clicks on the element.

  render() {
    let aLostAnimals = [];
    let markers = [];

    tileDataDogs.map((item) => (
      aLostAnimals.push({ target: "", title: item.title, subtitle: item.location, icon: item.img, type: item.type }))
    )

    tileDataDogs.map(user => (
      markers.push(user.coords)
    ))

    let aPages = [];
    aPages.push(
      <div>
        <List showLostMarker={true} items={aLostAnimals} maxHeight={"75vh"} overflow="auto" />
      </div>
    );

    aPages.push(
      <div>
        <Map center={[41.403611, 2.174444]} zoom={14} width={400} height={600}>
          {Object.keys(markers).map(key => (
            <Marker key={key} anchor={markers[key][0]} payload={key} onClick={this.handleMarkerClick} />
          ))}
        </Map>
      </div>
    );

    aPages.push(
      <div>
        <Map center={[41.403611, 2.174444]} zoom={14} width={400} height={600}>
          {Object.keys(markers).map(key => (
            <Marker key={key} anchor={markers[key][0]} payload={key} onClick={this.handleMarkerClick} />
          ))}
        </Map>
      </div>
    );

    aPages.push(
      <div>
        <Map center={[41.403611, 2.174444]} zoom={14} width={400} height={600}>
          {Object.keys(markers).map(key => (
            <Marker key={key} anchor={markers[key][0]} payload={key} onClick={this.handleMarkerClick} />
          ))}
        </Map>
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