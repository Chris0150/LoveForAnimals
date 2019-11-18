import React from 'react';
import { connect } from "react-redux";
import './Alojamientos.css';
import NavBar from '../../components/NavBar';
import TabPanel from '../../components/TabPanel';
import Map from 'pigeon-maps';
import List from "../../components/List";
import ListUsers from '../../assets/data/ListUsers';
import Filterbar from '../../components/Filterbar';
import house from "../../assets/images/icons/house.png";
import fetch from "../../assets/images/icons/fetch.png";

const locations = {
  "Barcelona": { "center": [41.403611, 2.174444], "zoom": 12 }
}

class Alojamientos extends React.Component {
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
    let markers = [];
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
    ListUsers.map(user => (markers.push(user.coords)));

    let aFilters = [];
    aFilters.push({ filter: "Provincia", items: "Todas|Barcelona|Madrid|Valencia" });
    aFilters.push({ filter: "Animal", items: "Todos|Perro|Gato|Otro" });
    aFilters.push({ filter: "Edad", items: "Todas|Cachorro|Joven|Adulto" });
    aFilters.push({ filter: "Fechas", items: "Hoy|Mañana|Esta Semana|Próxima Semana" });

    // Alojamientos
    let tabs = [];
    tabs.push(
      <div>
        <Filterbar filters={aFilters} />
        <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: window.innerWidth - 20 }}>
          <Map center={this.state.center} zoom={this.state.zoom} defaultWidth={window.innerWidth - 20} height={window.innerHeight/2 - 175}>
            {Object.keys(markers).map(key => (
              <Marker key={Math.random()} anchor={markers[key][0]} onClick={this.handleMarkerClick}>
                <img alt="" src={house} width={30} />
              </Marker>
            ))}
          </Map>
        </div>

        <List
          items={ListUsers}
          showRating={true}
          maxHeight={"33vh"}
          overflow="auto"
        />
      </div>
    );

    // Paseos
    tabs.push(
      <div>
        <Filterbar filters={aFilters} />
        <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: window.innerWidth - 20 }}>
        <Map center={this.state.center} zoom={this.state.zoom} defaultWidth={window.innerWidth - 20} height={window.innerHeight/2 - 175}>
            {Object.keys(markers).map(key => (
              <Marker key={Math.random()} anchor={markers[key][0]} onClick={this.handleMarkerClick}>
                <img alt="" src={fetch} width={30} />
              </Marker>
            ))}
          </Map>
        </div>

        <List
          items={ListUsers}
          showRating={true}
          maxHeight={"33vh"}
          overflow="auto"
        />
      </div>
    );

    return (
      <div>
        <NavBar handleNavBack={this.handleNavBack} title="Alojamientos y paseos" />
        <TabPanel
          tab1="Alojamientos"
          tab2="Paseos"
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

export default connect(mapStateToProps, mapDispatchToProps)(Alojamientos);
