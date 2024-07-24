import React from 'react'
import { useState } from 'react'
import CardView from '../components/items/CardView'

function Main() {
    const [Komik, setKomik] = useState(20)
    const [KomikHits, setKomikHits] = useState(4)

    return (
        <>
            <div className="full-row p-2" style={{marginTop: '82px'}}>
                <div className="container">
                    
                </div>
            </div>

            <div className="full-row p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <h2 className="mb-4">Komik Hits</h2>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <a href="#" className="my-3 btn-link text-secondary float-end">More &raquo;</a>
                        </div>
                    </div>
                    <div className="row">
                        {Array.from({ length: KomikHits }).map((_, index) => (
                            <CardView key={index} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="full-row py-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <hr />
                        </div>
                    </div>
                </div>
            </div>

            <div className="full-row p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <h2 className="mb-4">Komik</h2>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <a href="#" className="my-3 btn-link text-secondary float-end">More &raquo;</a>
                        </div>
                    </div>
                    <div className="row">
                        {Array.from({ length: Komik }).map((_, index) => (
                            <CardView key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main