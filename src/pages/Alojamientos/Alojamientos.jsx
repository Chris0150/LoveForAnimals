import React from 'react';
import { connect } from "react-redux";
import './Alojamientos.css';
import NavBar from '../../components/NavBar';
import TabPanel from '../../components/TabPanel';
import Map from '../../components/Map';
import List from "../../components/List";
import ListUsers from '../../assets/data/ListUsers';
import Filterbar from '../../components/Filterbar';
import house from "../../assets/images/icons/house.png";
import fetch from "../../assets/images/icons/fetch.png";

class Alojamientos extends React.Component {
  constructor(props) {
    super(props);

    this.handleNavBack = this.handleNavBack.bind(this);
  }

  handleNavBack() {
    this.props.history.goBack();
  }

  render() {
    let aMarkers = [];
    let aFilters = [];

    // Data mapping
    ListUsers.map(user => (aMarkers.push(user.coords)));
    aFilters.push({ filter: "Provincia", items: "Todas|Barcelona|Madrid|Valencia" });
    aFilters.push({ filter: "Animal", items: "Todos|Perro|Gato|Otro" });
    aFilters.push({ filter: "Edad", items: "Todas|Cachorro|Joven|Adulto" });
    aFilters.push({ filter: "Fechas", items: "Hoy|Mañana|Esta Semana|Próxima Semana" });

    // Tab: Alojamientos
    let tabs = [];
    tabs.push(
      <div>
        <Filterbar filters={aFilters} />
        <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: window.innerWidth - 20 }}>
          <Map
            type={"Alojamientos"}
            showPopover={true}
            markers={aMarkers}
            icon={house}
            zoom={14}
            height={window.innerHeight/3}
          />
        </div>
        <List
          items={ListUsers}
          showRating={true}
          maxHeight={"33vh"}
          overflow="auto"
        />
      </div>
    );

    // Tab: Paseos
    tabs.push(
      <div>
        <Filterbar filters={aFilters} />
        <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: window.innerWidth - 20 }}>
          <Map
            type={"Paseos"}
            showPopover={true}
            markers={aMarkers}
            icon={fetch}
            zoom={14}
            height={window.innerHeight/3}
          />
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
