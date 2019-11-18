import React from 'react';
import { connect } from "react-redux";
import './PerfilUser.css';
import NavBar from '../../components/NavBar';
import DatePicker from '../../components/DatePicker';
import List from "../../components/List";
import TabPanel from '../../components/TabPanel';
import Typography from '@material-ui/core/Typography';
import User from '../../assets/images/profiles/user.png';
import ListUsers from '../../assets/data/ListUsers';
import GridList from '../../components/GridList';
import Map from 'pigeon-maps';
import Button from '@material-ui/core/Button';
import deer from "../../assets/images/icons/deer.png";
import adoptdog from "../../assets/images/icons/adoptdog.png";
import { Link } from 'react-router-dom'

class PerfilUser extends React.Component {
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

    // Perfil
    let tabs = [];
    tabs.push(
      <div>
        <img src={User} alt="" height="150px" style={{ display: "block", margin: "auto", padding: 30 }} />
        <Typography variant="h6" style={{ display: "block", textAlign: "center" }} gutterBottom>User</Typography>
        <div>
          <Typography variant="caption" style={{ display: "block", textAlign: "center" }} gutterBottom>
            Miembro desde: 07/08/2018
          </Typography>
          <Typography variant="caption" style={{ display: "block", textAlign: "center" }} gutterBottom>
            Lugar: Barcelona
          </Typography>
          <Typography variant="caption" style={{ fontWeight: "bold", display: "block", textAlign: "center" }} gutterBottom>
            Valoraciones:
          </Typography>
          <List
            items={ListUsers}
            showRating={true}
            showFeedback={true}
            maxHeight={"33vh"}
            overflow="auto"
          />
        </div>
      </div>
    );

    // Imagenes
    tabs.push(
      <div>
        <GridList type="User" showFooter={false} />
      </div>
    );

    // Reservas
    tabs.push(
      <div style={{ padding: 15 }}>
        <div style={{ display: "grid" }}>
          <DatePicker type="Inicial" />
          <DatePicker type="Final" />
        </div>
        <Typography variant="caption" style={{ display: "block", margin: 10 }} gutterBottom>
          Zona aproximada de residencia:
          </Typography>
        <Map center={[41.403611, 2.174444]} zoom={14} width={360} height={200}>
        <Marker key={Math.random()} anchor={[41.403611, 2.174444]}>
           <img alt="" src={deer} width={30} />
         </Marker>
        </Map>
        <Button style={{
          // marginTop: "40%",
          textAlign: "center",
          backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRppg_nXStuMySH0ix_oVISR71Clm8F9bumRcpIwCU_h-YR3UQeeWNK7Hst&s)',
          backgroundSize: 'cover',
          width: '100%',
          textTransform: 'inherit',
          boxShadow: "5px 5px 5px #3f3f3f"
        }}
          component={Link} to={"/FormularioAdopción"}>
          <img src={adoptdog} alt="" width="30px" />
          Enviar reserva
           </Button>
      </div>
    );

    return (
      <div>
        <NavBar handleNavBack={this.handleNavBack} title="Perfil User" />
        <TabPanel
          tab1="Perfil"
          tab2="Imágenes"
          tab3="Reservas"
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

export default connect(mapStateToProps, mapDispatchToProps)(PerfilUser);
