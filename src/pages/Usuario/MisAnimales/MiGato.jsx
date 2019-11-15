import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import './MiGato.css';
import NavBar from '../../../components/NavBar';
import Table from '../../../components/Table';
import List from "../../../components/List";
import TabPanel from '../../../components/TabPanel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import vet from "../../../assets/images/icons/vet.png";
import profileCat from "../../../assets/images/profiles/cat.jpg";
import bannerVet from "../../../assets/images/vets/12.jpg";
import healthdog from "../../../assets/images/icons/healthdog.png";
import conedog from "../../../assets/images/icons/conedog.png";

class MiGato extends React.Component {
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
    let aPerfil = [];
    aPerfil.push([{ field: "Nombre:" }, { field: "Estrella" }]);
    aPerfil.push([{ field: "Fecha de Nacimiento:" }, { field: "14/12/2018" }]);
    aPerfil.push([{ field: "Raza:" }, { field: "American Shorthair" }]);
    aPerfil.push([{ field: "Peso:" }, { field: "5 Kg" }]);
    aPerfil.push([{ field: "Chip ID:" }, { field: "9251001582" }]);
    aPerfil.push([{ field: "Contacto:" }, { field: "634-056-982" }]);

    let aHistorial = [];
    aHistorial.push({title: "Vacunación rabia 1/3", subtitle: "Fecha: 22/11/19 17:00h", icon: healthdog, target: ""});
    aHistorial.push({title: "Vacunación rabia 2/3", subtitle: "Fecha: 29/11/19 17:00h", icon: healthdog, target: ""});
    aHistorial.push({title: "Torcedura simple (3 días)", subtitle: "Fecha: 31/11/19", icon: conedog, target: ""});
    aHistorial.push({title: "Revision torcedura", subtitle: "Fecha: 01/12/19", icon: vet, target: ""});
    aHistorial.push({title: "Vacunación rabia 3/3", subtitle: "Fecha: 12/12/19 17:00h", icon: healthdog, target: ""});
    aHistorial.push({title: "2a Revision torcedura", subtitle: "Fecha: 17/12/19", icon: vet, target: ""});
    aHistorial.push({title: "Torcedura simple (3 días)", subtitle: "Fecha: 25/12/19", icon: conedog, target: ""});
    aHistorial.push({title: "Vacunación malaria 1/3", subtitle: "Fecha: 22/11/19 17:00h", icon: healthdog, target: ""});
    aHistorial.push({title: "Vacunación malaria 2/3", subtitle: "Fecha: 29/11/19 17:00h", icon: healthdog, target: ""});
    aHistorial.push({title: "Magulladura", subtitle: "Fecha: 31/11/19", icon: conedog, target: ""});
    aHistorial.push({title: "Revision magulladura", subtitle: "Fecha: 01/12/19", icon: vet, target: ""});
    aHistorial.push({title: "Vacunación malaria 3/3", subtitle: "Fecha: 12/12/19 17:00h", icon: healthdog, target: ""});
    aHistorial.push({title: "2a Revision magulladura", subtitle: "Fecha: 17/12/19", icon: vet, target: ""});
    aHistorial.push({title: "Torcedura simple (1 días)", subtitle: "Fecha: 25/12/19", icon: conedog, target: ""});

    // Perfil
    let tabs = [];
    tabs.push(
      <div style={{margin: 10}}>
        <Table items={aPerfil}></Table>
      </div>
    );
    // Historial
    tabs.push(
      <div style={{margin: 10}}>
        <div>
        <Typography variant="caption" display="block" gutterBottom>No hay tratamiento(s) en curso.</Typography>
        <List 
         items={aHistorial}
         maxHeight={250}
         overflow="auto"
        />
        </div>
      </div>
    );
    // Veterinario
    tabs.push(
      <div style={{margin: 10}}>
        <div>

          <Typography variant="caption" display="block" gutterBottom>Veterinario asociado: Silvestre Veterinaria</Typography>
          <Typography variant="caption" display="block" gutterBottom>Última visita: 19/01/19  </Typography>
          <Typography variant="caption" display="block" gutterBottom>Última e-consulta: 21/01/19</Typography>

          <img src={bannerVet} alt="" width={"100%"} height={"150px"} />

          <Button style={{
            textAlign: "center",
            backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRppg_nXStuMySH0ix_oVISR71Clm8F9bumRcpIwCU_h-YR3UQeeWNK7Hst&s)',
            backgroundSize: 'cover',
            width: '100%',
            height: 50,
            marginTop: 10,
            textTransform: 'inherit',
            boxShadow: "5px 5px 5px #3f3f3f",
            
          }}
            component={Link} to={"/ConsultaVeterinaria"}>
            <img src={vet} alt="" width="30px" />
            Consulta
           </Button>

        </div>
      </div>
    );

    return (
      <div>
        <NavBar handleNavBack={this.handleNavBack} title="Estrella Perfil" />
        <img alt="" src={profileCat} style={{ width: "100%" }} />
        <TabPanel style={{ maxHeight: '200px', overflow: 'auto' }}
          tab1="Perfil"
          tab2="Historial"
          tab3="Veterinario"
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

export default connect(mapStateToProps, mapDispatchToProps)(MiGato);
