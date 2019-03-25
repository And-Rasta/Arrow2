import React from 'react';
import {
Collapse,
Navbar,
NavbarToggler,
NavbarBrand,
Nav,
NavItem,
NavLink,
UncontrolledDropdown,
DropdownToggle,
DropdownMenu,
DropdownItem } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TopNav.css";

//navbar component, loads logo to left and links to right

class TopNav extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
  render() {
    return (
        <div>
           <Navbar color ="dark" dark expand="lg">
           <NavbarBrand href="index.html" id="logo"> 
             <FontAwesomeIcon icon="compress-arrows-alt" id="compress" /> Arrow <span className="lite"> <FontAwesomeIcon icon="compress-arrows-alt" id="compress"/></span>
           </NavbarBrand>
           <NavbarToggler onClick={this.toggle} />
           <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                 <NavItem>
                 <NavLink tag={RRNavLink} to="/">Home</NavLink>
                 </NavItem>
                 <NavItem>
                 <NavLink tag={RRNavLink} to="/newevent">Add New Event</NavLink>                 
                 </NavItem>  
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Options
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          Option 1
                      </DropdownItem>
                        <DropdownItem>
                          Option 2
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                          Reset
                      </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>                                             
 
                </Nav>
            </Collapse>
        </Navbar>
      </div>
      );
    }
 }   
    export default TopNav;