import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import Map from './Map';
import { GoogleMap,
         withScriptjs,
         withGoogleMap,
         Marker
         } from "react-google-maps"

function zone(){
    return (
        <GoogleMap
            defaultZoom={2} 
            defaultCenter={{lat: 46.227638, lng: 2.213749}} 
        />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(zone));

export default class Data extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div style= {{width:'50vw' ,height: '50vh'}}>
            <Map/>
            <WrappedMap googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDIwh0aUIKvX34yetZFQq8gebi3Mzhdt50'}
                    loadingElement={<div style={{ height: "100%"}} />}
                    containerElement={<div style={{ height: "100%"}} />}
                    mapElement = {<div style={{ height:"100%" }} />} 
                />
            </div>
        )
    }
}