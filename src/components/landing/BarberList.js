import React from 'react'
import barb5 from '../../img/barb5.jpg'
import barb6 from '../../img/barb6.jpg'
import barb7 from '../../img/barb7.jpg'

import './landing.css'
import { Link } from 'react-router-dom'

const BarberList = () => {
    return (
        <>
        <section className="section-search">
            <form className="search">
                <input type="text" className="search__input" placeholder="Looking for a barber?" />
                <button className="search__button">Search</button>
            </form>
        </section>
        
        <section className="section-list">
        <div className="barber__list">
            <div className="barber__item--left">
                <img src={barb5} alt="" className="barber__photo" />
                <div className="barber__rating">
                    <span className="fa fa-star checked"></span>
                    6.5
                </div>
            </div>
            <div className="barber__item--right">
                <h2 className="barber__shop-name">Rotex cutz</h2>
                <h3 className="barber__location">Bosso, Minna</h3>
                <p className="barber__tagline">
                    A barber is a person whose occupation is mainly to cut
                </p>
            </div>
        </div>

        <div className="barber__list">
            <div className="barber__item--left">
                <img src={barb6} alt="" className="barber__photo" />
                <div className="barber__rating">
                    <span className="fa fa-star checked"></span>
                    8.3
                </div>
            </div>
            <div className="barber__item--right">
                <h2 className="barber__shop-name">Kemzzy cutz</h2>
                <h3 className="barber__location">Sango, Ilorin</h3>
                <p className="barber__tagline">
                    A barber is a person whose occupation is mainly to cut
                </p>
            </div>
        </div>

        <div className="barber__list">
            <div className="barber__item--left">
                <img src={barb7} alt="" className="barber__photo" />
                <div className="barber__rating">
                    <span className="fa fa-star checked"></span>
                    4.7
                </div>
            </div>
            <div className="barber__item--right">
                <h2 className="barber__shop-name">Ango cutz</h2>
                <h3 className="barber__location">Kajola, Kabba</h3>
                <p className="barber__tagline">
                    A barber is a person whose occupation is mainly to cut
                </p>
            </div>
        </div>
        </section>

        <section className="section-full-list">
            <Link className="view-all-barber">
                View all barbers
            </Link>
        </section>
        </>
    )
}

export default BarberList
