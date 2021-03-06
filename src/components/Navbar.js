import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import Scrollchor from "react-scrollchor";

class NavbarPage extends Component {
  state = {
    collapseID: "",
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  render() {
    return (
      <Router>
        <MDBNavbar color="black" dark expand="md" scrolling fixed="top">
          <MDBNavbarBrand>
            <strong className="white-text">Rommel Jay San Jose</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
          <MDBCollapse
            id="navbarCollapse3"
            isOpen={this.state.collapseID}
            navbar
          >
            <MDBNavbarNav right>
              <MDBNavItem>
                <Scrollchor
                  to="#about-me"
                  className="nav-link waves-effect waves-light"
                >
                  <MDBIcon icon="user" className="mr-1" />
                  About
                </Scrollchor>
              </MDBNavItem>
              <MDBNavItem>
                <Scrollchor to="#contact-me" className="nav-link">
                  <MDBIcon icon="envelope" className="mr-1" />
                  Contact
                </Scrollchor>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret className="white-text">
                    <MDBIcon icon="folder-open" className="mr-c1" />
                    Portfolio
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default" right>
                    <MDBDropdownItem href="#design-web">
                      Design . Web
                    </MDBDropdownItem>
                    <MDBDropdownItem href="#!">
                      Residential Designs
                    </MDBDropdownItem>
                    <MDBDropdownItem href="#!">ArchViz</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Photography</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default NavbarPage;
