import React from 'react'
import { Link } from 'react-router-dom'
import Data from '../component/Data';

const Index = () => {
    return (
        <div>
            <header className="masthead text-center text-white">
                <div className="masthead-content">
                    <div className="container">
                        <h1 className="masthead-heading mb-0">Envie de prendre</h1>
                        <h2 className="masthead-subheading mb-0">le large avec TRIP-COVID ?</h2>
                        <Link to="/aboutus" className="btn btn-primary btn-xl rounded-pill mt-5" role="button">En savoir plus</Link>
                    </div>
                </div>
            </header>
            <section>
                <div className="container">
                    <div className="justify-content-xl-center p-5">
                        <h2 className="text-center d-md-flex d-lg-flex justify-content-md-center justify-content-lg-center display-4" >Où souhaitez-vous allez ?</h2>
                        <div className="container-fluid form-group d-md-flex justify-content-md-center" data-aos="fade" data-aos-duration="1000">
                            
                        </div><Data/>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Index
