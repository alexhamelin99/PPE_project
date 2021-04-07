import React, { Component , useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

const Map = () =>{
        const URL = "https://restcountries.eu/rest/v2/name";
        const [query, setQuery] = useState();
        const [query2, setQuery2] = useState();
        const [country, SetCountry] = useState({});
             
        const fetchCountry = async(query) => {

            const { data } = await axios.get(URL, {
                params: {
                    q: query
                }
            });
            const { data1 } = await axios.get(URL, {
                params: {
                    q: query2
                }
            });
            return data,data1; 
        }
         

        const search = async(e) => {

        if (e.key == 'Enter') {

            const data = await fetchCountry(query)
            const data1 = await fetchCountry(query2)
            SetCountry (data);
            SetCountry (data1);
            setQuery('');
            setQuery2('');
        }
     }

    
        return(
            <div className="container-fluid form-group d-md-flex justify-content-md-center" data-aos="fade" data-aos-duration="1000" >
                <input className="bg-light border rounded shadow form-control-lg d-flex col-sm" type="text" placeholder="Départ" required="" autofocus="" autocomplete="on" name="départ" value={query} onChange = {(e) => setQuery(e.target.value)}/>
                <input className="bg-light border rounded shadow form-control-lg d-flex col-sm" type="text" placeholder="Destination"  autoFocus="" autoComplete="on" required="" name="destination" value={query2} onChange = {(e) => setQuery2(e.target.value)}/>
                <input className="bg-light border rounded shadow form-control-lg d-flex col-sm" type="date"/> 
                    <p>{country.name,country.data1}</p>          
                <br/>    
            </div>  
            
        )
}; export default Map;

