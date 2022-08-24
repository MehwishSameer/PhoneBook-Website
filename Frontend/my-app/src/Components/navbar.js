import React,{useRef} from "react";
import { faAddressCard, faEdit, faExchange, faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPhone} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavHashLink } from 'react-router-hash-link';
import {Link} from "react-router-dom";

export default function Nav(props){

    function func(event) {
        event.preventDefault();
        document.title = 'Phone Book - About';
      };
  
      function func1(event) {
        event.preventDefault();
        document.title = 'Phone Book - Home';
      };

      function func2(event) {
        event.preventDefault();
        document.title = 'Phone Book - Emergency Contacts';
      };

      function func3(event) {
        event.preventDefault();
        document.title = 'Phone Book - Modify Contacts';
      };


      return(
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
    <span className='navbar-brand' id='title' onClick={func1}><NavHashLink to='/#'>PhoneBook</NavHashLink></span>
    <span className="nav-link mx-2" id='home'  onClick={func1}><Link  to='/'><FontAwesomeIcon icon={faHome} size="1x" title='Home'/></Link></span>
    <span className='nav-link mx-2' id='about' onClick={func}> <Link to='/about' ><FontAwesomeIcon icon={faAddressCard} size="1x" title="About"/></Link></span>
    <span className="nav-link mx-2" id='emergency-contacts'  onClick={func2}><Link  to='/emergency-contacts'><FontAwesomeIcon icon={faPhone} size="1x" title='Emergency Contacts'/></Link></span>
    <span className="nav-link mx-2" id='modify'  onClick={func3}><Link  to='/modify'><FontAwesomeIcon icon={faEdit} size="1x" title='Modify Contacts'/></Link></span>
    <input type="text" placeholder="Search" id='search'/>
    <button className='btn btn-outline-warning' href="/Search/" id='sea'><FontAwesomeIcon icon={faMagnifyingGlass} size="1x" title='Search'/></button>
    </nav>
        );
}