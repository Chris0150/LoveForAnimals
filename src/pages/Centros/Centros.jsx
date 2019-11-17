import React from 'react';
import { connect } from "react-redux";
import './Centros.css';
import NavBar from '../../components/NavBar';
import TabPanel from '../../components/TabPanel';
import List from "../../components/List";
import ListCentros from '../../assets/data/ListCentros';
import ListVets from '../../assets/data/ListVeterinarios';
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker/react'

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
    let markers = [];
    ListCentros.map(centro => (markers.push(centro.coords)))

    // Tabs
    let tabs = [];
    tabs.push(
      <div>
        <div>
          <Map center={[41.403611, 2.174444]} zoom={14} width={400} height={300}>
            {Object.keys(markers).map(key => (
              <Marker key={key} anchor={markers[key][0]} payload={key} onClick={this.handleMarkerClick} />
            ))}
          </Map>
        </div>
        <List
          items={ListCentros}
          showOpHours={true}
          showRating={false}
          maxHeight={"40vh"}
          overflow="auto"
        />
      </div>
    );
    tabs.push(
      <div>
        <div>
          <Map center={[41.403611, 2.174444]} zoom={14} width={400} height={300}>
            {Object.keys(markers).map(key => (
              <Marker key={key} anchor={markers[key][0]} payload={key} onClick={this.handleMarkerClick} />
            ))}
          </Map>
        </div>
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
