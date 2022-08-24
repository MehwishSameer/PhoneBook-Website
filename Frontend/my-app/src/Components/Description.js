import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import Box from "./Box";


export default function Description() {

        let {name,code,numCode,amb,pol,fire,dispatch}="Not Available";
        let location = useLocation();
    return (<pre>
            <h5 id="des">{ location.state.name}</h5>
            <p id="description">
                 ISO-Code:    {location.state.code}
            <br/>ISO-Numeric: {location.state.numCode}
            <br/>Ambulance:   {location.state.amb}
            <br/>Fire:        {location.state.fire}
            <br/>Police:      {location.state.pol}
            <br/>Dispatch:    {location.state.dispatch}</p>
    </pre>)
    }