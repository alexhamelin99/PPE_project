import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import Map from './Map';

export default class Data extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }



    render(){
        return(
            <Map/>
        )
    }
}