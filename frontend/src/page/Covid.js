import React from 'react'
import Graph from '../component/Graph'

const Covid = () => {
    return (
        <div>
            <section>
                <div class="container" style={{paddingTop: 80}}>
                    <div class="justify-content-xl-center p-5">
                        <h2 class="text-center d-md-flex d-lg-flex justify-content-lg-center display-4" >Les informations générales COVID&nbsp;</h2>
                        <div class="d-flex justify-content-center">
                                <iframe title="covid_map" id="covidMapFrame" src="https://covid-statistical-map.sharecare.com/" height="500" width="80%" data-src="https://covid-statistical-map.sharecare.com/" data-src-mobile="https://covid-statistical-map.sharecare.com/"></iframe>
                        </div>
                        <div style={{paddingTop: 50}} >
                            <Graph/>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                
            </div>
        </div>
    )
}

export default Covid
