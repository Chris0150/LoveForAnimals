import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './PerfilOtro.css';
import NavBar from '../../../components/NavBar';
import TabPanel from '../../../components/TabPanel';
import Carousel from '../../../components/Carousel';
import otherAdoption1 from '../../../assets/images/others/otherAdoption1.jpg';
import otherAdoption2 from '../../../assets/images/others/otherAdoption2.jpg';
import otherAdoption3 from '../../../assets/images/others/otherAdoption3.jpg';
import adoptdog from "../../../assets/images/icons/adoptdog.png";
import vet from "../../../assets/images/icons/vet.png";
import ok from "../../../assets/images/icons/ok.png";

class AdopcionGatos extends React.Component {
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
    let aTabs = [];
    aTabs.push(
      <div style={{margin : 20}}>
        <Typography variant="caption" display="block" gutterBottom>Nombre: Tula</Typography>
        <Typography variant="caption" display="block" gutterBottom>Fecha de Nacimiento: 22/10/19</Typography>
        <Typography variant="caption" display="block" gutterBottom>Raza: pato</Typography>
        <Typography variant="caption" display="block" gutterBottom>Peso: 0.1kg</Typography>
        <Typography variant="caption" display="block" gutterBottom>Salud: Muy buena</Typography>
      </div>
    );
    aTabs.push(
      <div style={{margin : 20}}>
        <Typography variant="caption" display="block" gutterBottom>
          Esta simpática patita fué abandonada junto con dos hermanitas más
           en la puerta de una protectora de Lleida. Progat Cerdanya ayuda en su difusión
            para encontrar un hogar para estos bebes grandullones. Son muy buenas y juguetonas.
             Solo necesitan un hogar. La tasa de adopción corresponde a parte de los gastos veterinarios
              que ha tenido o tendrá el animal.
               </Typography>
      </div>
    );
    aTabs.push(
      <div style={{margin : 20}}>
        <div>
          <Typography variant="caption" display="block" gutterBottom>Vacunado: Sí  <img src={ok} alt="" width="15px" /></Typography>
          <Typography variant="caption" display="block" gutterBottom>Desparasitado: Sí  <img src={ok} alt="" width="15px" /></Typography>
          <Typography variant="caption" display="block" gutterBottom>Identificado: Sí  <img src={ok} alt="" width="15px" /></Typography>
          <Typography variant="caption" display="block" gutterBottom>Microchip: Sí  <img src={ok} alt="" width="15px" /></Typography>
          <Typography variant="caption" display="block" gutterBottom>Esterilizado: Sí  <img src={ok} alt="" width="15px" /></Typography>
        </div>
        <div>
          <Button style={{
            textAlign: "center",
            backgroundColor: 'silver',
            width: '40%',
            bottom: '20%',
            right: '25px',
            position: 'absolute',
            textTransform: 'inherit',
            boxShadow: "5px 5px 5px #3f3f3f"
          }}
            component={Link} to={"/FormularioApadrinar"}>
            <img src={vet} alt="" width="30px" />
            Apadrinar
          </Button>
          <Button style={{
            textAlign: "center",
            backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRppg_nXStuMySH0ix_oVISR71Clm8F9bumRcpIwCU_h-YR3UQeeWNK7Hst&s)',
            backgroundSize: 'cover',
            width: '40%',
            bottom: '10%',
            right: '25px',
            position: 'absolute',
            textTransform: 'inherit',
            boxShadow: "5px 5px 5px #3f3f3f"
          }} component={Link} to={"/FormularioAdopción"}>
            <img src={adoptdog} alt="" width="30px" />
            Formulario de Adopción
         </Button>
        </div>
      </div>
    );

    return (
      <div>
        <NavBar handleNavBack={this.handleNavBack} title="Perfil Otro" />
        <Carousel
          showFooter={false}
          showRating={false}
          showLegend={false}
          autoPlay={true}
          autoPlaySpeed={3000}
          infiniteLoop={false}
          slide1={otherAdoption1}
          slide2={otherAdoption2}
          slide3={otherAdoption3}
          slide4={"https://www.youtube.com/embed/CWgbmgIzoT8"}
          axis="horizontal">
        </Carousel>
        <TabPanel
          tab1="Ficha"
          tab2="Descripción"
          tab3="Adopción"
          variant="fullWidth"
          orientation="horizontal"
          items={aTabs}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AdopcionGatos);
