import React from 'react';
import { connect } from "react-redux";
import './Alojamientos.css';
import NavBar from '../../components/NavBar';
import TabPanel from '../../components/TabPanel';
import Map from '../../components/Map';
import List from "../../components/List";
import ListUsers from '../../assets/data/ListUsers';
import Filterbar from '../../components/Filterbar';

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
        <Map
          markerColor="blue"
          showPopover={false}
          showSearchBar={false}
          height={"30vh"}
          width={"100vh"}
          zoom={14} />
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
        <Map
          markerColor="aqua"
          showPopover={false}
          showSearchBar={false}
          height={"30vh"}
          width={"100vh"}
          zoom={14} />
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
