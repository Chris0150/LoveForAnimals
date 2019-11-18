import React from 'react';
import { connect } from "react-redux";
import './Alojamientos.css';
import NavBar from '../../components/NavBar';
import TabPanel from '../../components/TabPanel';
import Map from 'pigeon-maps';
import List from "../../components/List";
import ListUsers from '../../assets/data/ListUsers';
import Filterbar from '../../components/Filterbar';
import fetch from "../../assets/images/icons/fetch.png";

class Alojamientos extends React.Component {
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
        <div>
      <Map center={[41.403611, 2.174444]} zoom={14} width={400} height={200}>
        {Object.keys(markers).map(key => (
           <Marker key={Math.random()} anchor={markers[key][0]} onClick={this.handleMarkerClick}>
           <img alt="" src={fetch} width={30} />
         </Marker>
        ))}
      </Map>
    </div>
        {/* <Map
          markerColor="blue"
          showPopover={false}
          showSearchBar={false}
          height={"30vh"}
          width={"100vh"}
          zoom={14} /> */}
        <List
          items={ListUsers}
          showRating={true}
          maxHeight={"25vh"}
          overflow="auto"
        />
      </div>
    );
    
    // Paseos
    tabs.push(
      <div>
        <Filterbar filters={aFilters} />
        <div>
      <Map center={[41.403611, 2.174444]} zoom={14} width={400} height={200}>
        {Object.keys(markers).map(key => (
           <Marker key={Math.random()} anchor={markers[key][0]} onClick={this.handleMarkerClick}>
           <img alt="" src={fetch} width={30} />
         </Marker>
        ))}
      </Map>
    </div>
        {/* <Map
          markerColor="aqua"
          showPopover={false}
          showSearchBar={false}
          height={"30vh"}
          width={"100vh"}
          zoom={14} /> */}
        <List
          items={ListUsers}
          showRating={true}
          maxHeight={"25vh"}
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
