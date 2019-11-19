import React from 'react';
import './Perdidos.css';
import NavBar from '../../components/NavBar';
import BottomBar from '../../components/BottomBar';
import TabPanel from '../../components/TabPanel';
import List from "../../components/List";
import Map from 'pigeon-maps';
import { connect } from "react-redux";
import MenuIcon from '@material-ui/icons/Menu';
import tileDataDogs from '../../assets/data/GridListDataDogs';
import dog from "../../assets/images/icons/dog.png";

const locations = {
  "Barcelona": { "center": [41.403611, 2.174444], "zoom": 14 }
}

class Perdidos extends React.Component {
  // eslint-disable-next-line
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
    // const animationOffset = 0
    let aLostAnimals = [];
    let aPages = [];
    let markers = [];
    let redFilter = "grayscale(100%) brightness(35%) sepia(100%) hue-rotate(-50deg) saturate(1000%) contrast(0.8)";
    let yellowFilter = "grayscale(100%) brightness(90%) sepia(90%) hue-rotate(360deg) saturate(500%) contrast(1)";
    let greenFilter = "grayscale(100%) brightness(35%) sepia(100%) hue-rotate(50deg) saturate(2000%) contrast(0.8)";

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

    tileDataDogs.map((item) => (
      aLostAnimals.push({ target: "", title: item.title, subtitle: item.location, icon: item.img, type: item.type }))
    )

    tileDataDogs.map(user => (
      markers.push(user.coords)
    ))

    // Listado
    aPages.push(
      <div>
        <List showLostMarker={true} items={aLostAnimals} maxHeight={"75vh"} overflow="auto" />
      </div>
    );

    // Perdidos
    aPages.push(
      <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: window.innerWidth - 20 }}>
        
        <Map center={this.state.center} zoom={this.state.zoom} defaultWidth={window.innerWidth - 20} height={window.innerHeight - 175}>
          {Object.keys(markers).map(key => (
            <Marker key={Math.random()} anchor={markers[key][0]}>
              <img alt="" style={{
                filter: redFilter,
                borderRadius: "50%",
                 animation: "pulseRed 2s infinite"
              }} src={dog} width={30} />
            </Marker>
          ))} 
        </Map>

      </div>
    );

    // Detectados
    aPages.push(
      <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: window.innerWidth - 20 }}>

        <Map center={this.state.center} zoom={this.state.zoom} defaultWidth={window.innerWidth - 20} height={window.innerHeight - 175}>
          {Object.keys(markers).map(key => (
            <Marker key={Math.random()} anchor={markers[key][0]}>
              <img alt="" style={{
                filter: yellowFilter,
                borderRadius: "50%",
                 animation: "pulseYellow 2s infinite"
              }} src={dog} width={30} />
            </Marker>
          ))} 
        </Map>

      </div>
    );

    // Encontrados
    aPages.push(
      <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: window.innerWidth - 20 }}>
        <Map center={this.state.center} zoom={this.state.zoom} defaultWidth={window.innerWidth - 20} height={window.innerHeight - 175}>
          {Object.keys(markers).map(key => (
            <Marker key={Math.random()} anchor={markers[key][0]}>
              <img alt="" style={{
                filter: greenFilter
              }} src={dog} width={30} />
            </Marker>
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