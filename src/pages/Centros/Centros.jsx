import React from 'react';
import { connect } from "react-redux";
import './Centros.css';
import NavBar from '../../components/NavBar';
import TabPanel from '../../components/TabPanel';
import List from "../../components/List";
import ListCentros from '../../assets/data/ListCentros';
import ListVets from '../../assets/data/ListVeterinarios';
import Map from 'pigeon-maps';
import adoptdog from "../../assets/images/icons/adoptdog.png";
import vet from "../../assets/images/icons/vet.png";

const locations = {
  "Barcelona": { "center": [41.403611, 2.174444], "zoom": 12 }
}

class Centros extends React.Component {
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
    
    ListCentros.map(centro => (markers.push(centro.coords)))

    // Tabs
    let tabs = [];
    tabs.push(
      <div>
        <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: window.innerWidth - 20 }}>
          <Map center={this.state.center} zoom={this.state.zoom} defaultWidth={window.innerWidth - 20} height={window.innerHeight/2 - 75}>
            {Object.keys(markers).map(key => (
               <Marker key={Math.random()} anchor={markers[key][0]}>
               <img alt="" src={adoptdog} width={30} />
             </Marker>
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
        <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: window.innerWidth - 20 }}>
          <Map center={this.state.center} zoom={this.state.zoom} defaultWidth={window.innerWidth - 20} height={window.innerHeight/2 - 75}>
            {Object.keys(markers).map(key => (
              <Marker key={Math.random()} anchor={markers[key][0]}>
              <img alt="" src={vet} width={30} />
            </Marker>
            ))}
          </Map>
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
