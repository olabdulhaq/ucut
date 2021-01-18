import React from 'react'
import './barber.css'

const BarberDetails = () => {
    return (
        <>
        <section className="section-image">
            <div className="barber-info-image">
            </div>
        </section>

        <section className="section-details">
            <div className="barber-shop-info">
                <h4 className="barber-shop-info-name">
                    Rotex cutz
                </h4>
                <h4 className="barber-shop-info-location">
                    Bosso, Minna
                </h4>
                <div className="barber-shop-info-rating">
                    <span className="fa fa-star checked"></span>
                    6.5
                </div>
            </div>
        </section>
        </>
    )
}

export default BarberDetails
