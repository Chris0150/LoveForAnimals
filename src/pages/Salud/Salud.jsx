import React from 'react';
import { connect } from "react-redux";
import './Salud.css';
import NavBar from '../../components/NavBar';
import Card from '../../components/Card';
import Grid from "../../components/Grid";
import adoptdog from '../../assets/images/icons/adoptdog.png';

import dog from "../../assets/images/icons/dog.png";
import cat from "../../assets/images/icons/cat.png";
import rabbit from "../../assets/images/icons/bunny.png";
import turtle from "../../assets/images/icons/turtle.png";
import fish from "../../assets/images/icons/fish.png";

import firststep_dog from '../../assets/images/salud/firststep_dog.jpg';
import young_dog from '../../assets/images/salud/young_dog.jpg';
import training_dog from '../../assets/images/salud/training_dog.jpg';
import friends_dog from '../../assets/images/salud/friends_dog.jpg';
import bath_dog from '../../assets/images/salud/bath_dog.jpg';
import food_dog from '../../assets/images/salud/food_dog.jpg';

import firststep_cat from '../../assets/images/salud/firststep_cat.jpg';
import young_cat from '../../assets/images/salud/young_cat.jpg';
import training_cat from '../../assets/images/salud/training_cat.jpg';
import friends_cat from '../../assets/images/salud/friends_cat.jpg';
import bath_cat from '../../assets/images/salud/bath_cat.jpg';
import food_cat from '../../assets/images/salud/food_cat.jpg';


import firststep_bunny from '../../assets/images/salud/firststep_bunny.jpg';
import young_bunny from '../../assets/images/salud/young_bunny.jpg';
import training_bunny from '../../assets/images/salud/training_bunny.jpg';
import friends_bunny from '../../assets/images/salud/friends_bunny.jpg';
import bath_bunny from '../../assets/images/salud/bath_bunny.jpg';
import food_bunny from '../../assets/images/salud/food_bunny.jpg';


class Salud extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firststep: firststep_dog,
      young: young_dog,
      training: training_dog,
      friends: friends_dog,
      bath: bath_dog,
      food: food_dog
    }

    this.handleNavBack = this.handleNavBack.bind(this);
  }

  handleNavBack() {
    this.props.history.goBack();
  }

  onClick = (event) => {
    var typeSrc = event.target.src;
    if (!typeSrc) return;

    if (typeSrc.indexOf("dog") > -1) {
      this.setState({ firststep: firststep_dog });
      this.setState({ young: young_dog });
      this.setState({ training: training_dog });
      this.setState({ friends: friends_dog });
      this.setState({ bath: bath_dog });
      this.setState({ food: food_dog });

    }
    else if (typeSrc.indexOf("cat") > -1) {
      this.setState({ firststep: firststep_cat });
      this.setState({ young: young_cat });
      this.setState({ training: training_cat });
      this.setState({ friends: friends_cat });
      this.setState({ bath: bath_cat });
      this.setState({ food: food_cat });
    }

    else if (typeSrc.indexOf("bunny") > -1) {
      this.setState({ firststep: firststep_bunny });
      this.setState({ young: young_bunny });
      this.setState({ training: training_bunny });
      this.setState({ friends: friends_bunny });
      this.setState({ bath: bath_bunny });
      this.setState({ food: food_bunny });
    }
  }

  render() {

    // Top grid
    let aCategories = [];
    aCategories.push({ icon: dog });
    aCategories.push({ icon: cat });
    aCategories.push({ icon: rabbit });
    aCategories.push({ icon: turtle });
    aCategories.push({ icon: fish });

    return (
      <div>
        <NavBar handleNavBack={this.handleNavBack} title="Salud y Consejos" />
        <Grid onClick={this.onClick} items={aCategories} />
        <div style={{ maxHeight: "75vh", overflow: "auto" }}>
          <Card title="Introducción" subtitle="Primeros pasos" image={this.state.firststep} height={150} icon={adoptdog} />
          <Card title="Jóvenes" subtitle="Desarrollo y aprendizaje" image={this.state.young} height={150} icon={adoptdog} />
          <Card title="Enseñanza" subtitle="Buenas prácticas y métodos recomendados" image={this.state.training} height={150} icon={adoptdog} />
          <Card title="Salud y Cuidados" subtitle="Higiene y bienestar" image={this.state.bath} height={150} icon={adoptdog} />
          <Card title="Dieta y Nutrición" subtitle="Requerimientos y necesidades" image={this.state.food} height={150} icon={adoptdog} />
          <Card title="Convivencia" subtitle="Espacios en común y coexistencia" image={this.state.friends} height={150} icon={adoptdog} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Salud);
