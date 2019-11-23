import React from 'react';
import { connect } from "react-redux";
import './Centros.css';
import Map from '../../components/Map';
import NavBar from '../../components/NavBar';
import TabPanel from '../../components/TabPanel';
import List from "../../components/List";
import ListCentros from '../../assets/data/ListCentros';
import ListVets from '../../assets/data/ListVeterinarios';
import adoptdog from "../../assets/images/icons/adoptdog.png";
import vet from "../../assets/images/icons/vet.png";

class Centros extends React.Component {
  constructor(props) {
    super(props);

    this.handleNavBack = this.handleNavBack.bind(this);
  }

  handleNavBack() {
    this.props.history.goBack();
  }

  render() {
    let aMarkers = [];

    // Data mapping
    ListCentros.map(centro => (aMarkers.push(centro.coords)))

    // Tab: Centros
    let tabs = [];
    tabs.push(
      <div>
        <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: window.innerWidth - 20 }}>
          <Map
            type={"Centros"}
            showPopover={true}
            markers={aMarkers}
            icon={adoptdog}
            zoom={14}
            height={window.innerHeight/3}
          />
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

    // Tab: Veterinarios
    tabs.push(
      <div>
        <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: window.innerWidth - 20 }}>
          <Map
            type={"Veterinarios"}
            showPopover={true}
            markers={aMarkers}
            icon={vet}
            zoom={14}
            height={window.innerHeight/3}
          />
        </div>
        <List
          items={ListVets}
          showOpHours={true}
          showRating={false}
          maxHeight={"40vh"}
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
