import React from 'react';
import { connect } from "react-redux";
import './Inicio.css';
import List from "../../components/List";
import NavBar from '../../components/NavBar';
import Carousel from '../../components/Carousel';
import Dog from '../../assets/images/profiles/dog.jpg';
import Cat from '../../assets/images/profiles/cat.jpg';
import vet from "../../assets/images/icons/vet.png";
import adoptdog from "../../assets/images/icons/adoptdog.png";
import fetch from "../../assets/images/icons/fetch.png";
import lost from "../../assets/images/icons/lost.png";
import health from "../../assets/images/icons/health.png";

class Inicio extends React.Component {
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
    let aCategories = [];
    aCategories.push({target: "/Seleccion", title: "Animales en Adopción", subtitle: "5246 en Adopción", icon: adoptdog});
    aCategories.push({target: "/Centros", title: "Centros y Veterinarios", subtitle: "367 Centros, 412 Veterinarios", icon: vet});
    aCategories.push({target: "/Alojamientos", title: "Alojamientos y paseos", subtitle: "498 Peticiones", icon: fetch});
    aCategories.push({target: "/Perdidos", title: "Animales Perdidos", subtitle: "968 en Búsqueda", icon: lost});
    aCategories.push({target: "/Salud", title: "Salud y Consejos", subtitle: "Nuevos consejos disponibles", icon: health});

    return (
      <div>
        <NavBar handleNavBack={this.handleNavBack} title="Inicio"/>
        <Carousel
          showFooter={false}
          showRating={false}
          showLegend={true}
          autoPlay={true}
          autoPlaySpeed={6000}
          infiniteLoop={true}
          slide1={Dog}
          slide2={Cat}
          name1="Luna"
          name2="Estrella"
          target1="/MiPerro"
          target2="/MiGato"
          legendHeight="5%"
          axis="horizontal">
        </Carousel>
        <List 
         items={aCategories}
         maxHeight={"67vh"}
         overflow="inherit"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Inicio);
