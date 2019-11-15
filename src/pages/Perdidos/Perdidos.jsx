import React from 'react';
import './Perdidos.css';
import NavBar from '../../components/NavBar';
import BottomBar from '../../components/BottomBar';
import TabPanel from '../../components/TabPanel';
import List from "../../components/List";
import Map from '../../components/Map';
import { connect } from "react-redux";
import MenuIcon from '@material-ui/icons/Menu';
import tileDataDogs from '../../assets/data/GridListDataDogs';
// import Button from '@material-ui/core/Button';
// import lost2 from "../../assets/images/icons/lost2.png";

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

  render() {

    let aLostAnimals = [];
    //tileDataDogs.push({target: "", title: "Animal", subtitle: "", icon: "", type: ""});
    tileDataDogs.map((item, index) => (
      aLostAnimals.push({ target: "", title: item.title, subtitle: item.location, icon: item.img, type: item.type }))
    )

    let aMaps = [];
    aMaps.push(
       <div style={{ backgroundImage: "" }}>
         {/* <div style={{ display: "flex" }}>
           <img src={lost2} style={{
             width: 75,
             marginTop: 15
           }}
             alt=""></img>
           <Button variant="contained" style={{
             backgroundColor: "transparent",
             boxShadow: "none"
           }}
           >Tablón
         </Button> 
         <Button variant="contained" style={{
             backgroundColor: "transparent",
             boxShadow: "none"
           }}
           >Estado
         </Button>
         </div> */}
        <List showLostMarker={true} items={aLostAnimals} maxHeight={"75vh"} overflow="auto" />
      </div>);
    aMaps.push(<Map markerColor="red" showPopover={true} showSearchBar={false} height={"75vh"} width={"100vh"} zoom={14}/>);
    aMaps.push(<Map markerColor="orange" showPopover={true} showSearchBar={false} height={"75vh"} width={"100vh"} zoom={14}/>);
    aMaps.push(<Map markerColor="green" showPopover={true} showSearchBar={false} height={"75vh"} width={"100vh"} zoom={14}/>);

    return (
      <div>
        <NavBar handleNavBack={this.handleNavBack} title="Animales Perdidos" />
        <TabPanel
          tab1={<MenuIcon />}
          tab2="Perdidos"
          tab3="Detectados"
          tab4="Encontrados"
          // variant="fullWidth"
          orientation="horizontal"
          items={aMaps}
        />
        <BottomBar type="lost"/>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Perdidos);