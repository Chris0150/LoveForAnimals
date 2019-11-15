import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { store } from './helpers';
import Inicio from './pages/Inicio/Inicio';
import Alojamientos from './pages/Alojamientos/Alojamientos';
import PerfilUser from './pages/Alojamientos/PerfilUser';
import Centros from './pages/Centros/Centros';
import PerfilVet from './pages/Centros/PerfilVet';
import PerfilCentro from './pages/Centros/PerfilCentro';
import Perdidos from './pages/Perdidos/Perdidos';
import Salud from './pages/Salud/Salud';
import Seleccion from './pages/Adopciones/Seleccion';
import ListaPerros from './pages/Adopciones/Perros/ListaPerros';
import PerfilPerro from './pages/Adopciones/Perros/PerfilPerro';
import ListaGatos from './pages/Adopciones/Gatos/ListaGatos';
import PerfilGato from './pages/Adopciones/Gatos/PerfilGato';
import ListaOtros from './pages/Adopciones/Otros/ListaOtros';
import PerfilOtro from './pages/Adopciones/Otros/PerfilOtro';
import Perfil from './pages/Usuario/Perfil/Perfil';
import MiPerro from './pages/Usuario/MisAnimales/MiPerro';
import MiGato from './pages/Usuario/MisAnimales/MiGato';
import Notificaciones from './pages/Usuario/Notificaciones/Notificaciones';
import Mensajes from './pages/Usuario/Mensajes/Mensajes';
import SobreNosotros from './pages/Usuario/SobreNosotros/SobreNosotros';
import Contacto from './pages/Usuario/Contacto/Contacto';
import Adopcion from './pages/Adopciones/Adopcion';
import Apadrinar from './pages/Adopciones/Apadrinar';
import Veterinario from './pages/Usuario/MisAnimales/MiVeterinario';

class App extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }  

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={Inicio} />
              <Route path='/SobreNosotros' component={SobreNosotros} />
              <Route path='/Contacto' component={Contacto} />
              <Route path='/ListaPerros' component={ListaPerros} />
              <Route path='/ListaGatos' component={ListaGatos} />
              <Route path='/ListaOtros' component={ListaOtros} />
              <Route path='/FormularioAdopción' component={Adopcion} />
              <Route path='/FormularioApadrinar' component={Apadrinar} />
              <Route path='/Alojamientos' component={Alojamientos} />
              <Route path='/PerfilUser' component={PerfilUser} />
              <Route path='/Seleccion' component={Seleccion} />
              <Route path='/Centros' component={Centros} />
              <Route path='/PerfilVet' component={PerfilVet} />
              <Route path='/PerfilCentro' component={PerfilCentro} />
              <Route path='/Perdidos' component={Perdidos} />
              <Route path='/Salud' component={Salud} />
              <Route path='/Notificaciones' component={Notificaciones} />
              <Route path='/Mensajes' component={Mensajes} />
              <Route path='/PerfilPerro' component={PerfilPerro} />
              <Route path='/PerfilGato' component={PerfilGato} />
              <Route path='/PerfilOtro' component={PerfilOtro} />
              <Route path='/Perfil' component={Perfil} />
              <Route path='/ConsultaVeterinaria' component={Veterinario} />
              <Route path='/MiPerro' component={MiPerro} />
              <Route path='/MiGato' component={MiGato} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps)(App);