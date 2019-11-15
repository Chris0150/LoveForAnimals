import React from 'react';
import { connect } from "react-redux";
import './Mensajes.css';
import NavBar from '../../../components/NavBar';
import List from "../../../components/List";
import BottomBar from '../../../components/BottomBar';
import email from "../../../assets/images/icons/email.png";

class Mensajes extends React.Component {
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
    let aCategories = [];
    aCategories.push({target: "", title: "User3 te ha enviado un mensaje", subtitle: "", icon: email});
    aCategories.push({target: "", title: "Nueva reserva de alojamiento 09/11",  subtitle: "", icon:email});
    aCategories.push({target: "", title: "User1 te ha enviado un mensaje",  subtitle: "", icon:email});
    aCategories.push({target: "", title: "Nueva reserva de alojamiento 07/12",  subtitle: "", icon:email});
    aCategories.push({target: "", title: "Nueva reserva de alojamiento 08/12",  subtitle: "", icon:email});
    aCategories.push({target: "", title: "User2 te ha enviado un mensaje",  subtitle: "", icon:email});
    aCategories.push({target: "", title: "User3 te ha enviado un mensaje", subtitle: "", icon: email});
    aCategories.push({target: "", title: "Nueva reserva de alojamiento 09/11",  subtitle: "", icon:email});
    aCategories.push({target: "", title: "User1 te ha enviado un mensaje",  subtitle: "", icon:email});
    aCategories.push({target: "", title: "Nueva reserva de alojamiento 07/12",  subtitle: "", icon:email});
    aCategories.push({target: "", title: "Nueva reserva de alojamiento 08/12",  subtitle: "", icon:email});
    aCategories.push({target: "", title: "User2 te ha enviado un mensaje",  subtitle: "", icon:email});

    return (
      <div>
        <NavBar handleNavBack={this.handleNavBack} title="Mensajes"/>
        <List 
         items={aCategories}
         maxHeight={"80vh"}
         overflow="auto"
        />
         <BottomBar type="newEmail"/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Mensajes);
