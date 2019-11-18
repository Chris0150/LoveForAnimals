import React from 'react';
import { connect } from "react-redux";
import './Seleccion.css';
import NavBar from '../../components/NavBar';
import Carousel from '../../components/Carousel';
import dog from '../../assets/images/profiles/bannerdog1.jpg';
import cat from '../../assets/images/profiles/bannercat3.jpg';
import other from '../../assets/images/profiles/bannerother.jpg';

class Seleccion extends React.Component {
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
    return (
      <div>
        <NavBar handleNavBack={this.handleNavBack} title="Animales en Adopción" />
        <Carousel
          showFooter={true}
          showRating={true}
          showLegend={true}
          autoPlay={false}
          slide1={dog}
          slide2={cat}
          slide3={other}
          name1="Perros"
          name2="Gatos"
          name3="Otros"
          target1="/ListaPerros"
          target2="/ListaGatos"
          target3="/ListaOtros"
          footerTitle1="Adopción"
          footerTitle2="Apadrinar"
          footerTitle3="Urgentes"
          legendHeight="20%"
          axis="horizontal">
        </Carousel>
      </div>
    );
  }
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Seleccion);
