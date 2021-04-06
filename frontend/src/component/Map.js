import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Map extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }



    render(){
        return(
            <div className="container-fluid form-group d-md-flex justify-content-md-center" data-aos="fade" data-aos-duration="1000">
                <input className="bg-light border rounded shadow form-control-lg d-flex col-sm" type="text" placeholder="Départ" required="" autofocus="" autocomplete="on" name="départ"/>
                <input className="bg-light border rounded shadow form-control-lg d-flex col-sm" type="text" placeholder="Destination"  autofocus="" autocomplete="on" required="" name="destination"/>
                <input className="bg-light border rounded shadow form-control-lg d-flex col-sm" type="date"/>
            </div>
        )
    }
}

