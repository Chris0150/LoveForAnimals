import React from 'react';
import { connect } from "react-redux";
import './ListaPerros.css';
import NavBar from '../../../components/NavBar';
import Filterbar from '../../../components/Filterbar';
import GridList from '../../../components/GridList';

class ListaPerros extends React.Component {
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
    aFilters.push({filter: "Provincia", items: "Todas|Barcelona|Madrid|Valencia"});
    aFilters.push({filter: "Sexo", items: "Todos|Macho|Hembra"});
    aFilters.push({filter: "Edad", items: "Todas|Cachorro|Joven|Adulto"});
    aFilters.push({filter: "Tamaño", items: "Todos|Pequeño|Mediano|Grande"});

    return (
      <div>
        <NavBar handleNavBack={this.handleNavBack} title="Perros en Adopción" />
        <Filterbar filters={aFilters} />
        <GridList type="Perros"  showFooter={true}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ListaPerros);
