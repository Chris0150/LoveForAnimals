import React from 'react';
import { connect } from "react-redux";
import './Centros.css';
import NavBar from '../../components/NavBar';
import TabPanel from '../../components/TabPanel';
import Map from '../../components/Map';
import List from "../../components/List";
import ListCentros from '../../assets/data/ListCentros';
import ListVets from '../../assets/data/ListVeterinarios';

class Centros extends React.Component {
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
    
    // Tabs
    let tabs = [];
    tabs.push(
      <div>
        <Map markerColor="white" showPopover={false} showSearchBar={true} height={"30vh"} width={"100vh"} />
        <List
          items={ListCentros}
          showOpHours={true}
          showRating={false}
          maxHeight={"45vh"}
          overflow="auto"
        />
      </div>
    );
    tabs.push(
      <div>
        <Map markerColor="violet" showPopover={false} showSearchBar={true} height={"30vh"} width={"100vh"} />
        <List
          items={ListVets}
          showOpHours={true}
          showRating={false}
          maxHeight={"45vh"}
          overflow="auto"
        />
      </div>
    );

    return (
      <div>
        <NavBar handleNavBack={this.handleNavBack} title="Centros y Veterinarios" />
        <TabPanel
          tab1="Centros"
          tab2="Veterinarios"
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

export default connect(mapStateToProps, mapDispatchToProps)(Centros);
