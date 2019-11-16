import React from 'react';
import { connect } from "react-redux";
import './Centros.css';
import NavBar from '../../components/NavBar';
import TabPanel from '../../components/TabPanel';
import List from "../../components/List";
import Typography from '@material-ui/core/Typography';
import User from '../../assets/images/profiles/user3.png';
import ListUsers from '../../assets/data/ListUsers';

class PerfilCentro extends React.Component {
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

    // Tabs
    let tabs = [];
    tabs.push(
      <div>
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
        </div>
      </div>
      </div>
    );
    tabs.push(
      <div>
        <Typography variant="caption" style={{display: "block", margin: 20 }} gutterBottom>
          Últimas valoraciones:
        </Typography>

        <List
          items={ListUsers}
          showFeedback={true}
          showRating={true}
          maxHeight={"66vh"}
          overflow="auto"
        />
      </div>
       ); 

       tabs.push(
        <div>
        
        </div>
         );

    return (
      <div>
        <NavBar handleNavBack={this.handleNavBack} title="Detalles Centro" />
        <TabPanel
          tab1="Información"
          tab2="Imagenes"
          tab3="Valoraciones"
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

export default connect(mapStateToProps, mapDispatchToProps)(PerfilCentro);
