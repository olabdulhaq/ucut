import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import img1 from '../../img/barb1.jpg'
import img2 from '../../img/barb3.jpg'
import img3 from '../../img/barb4.jpg'

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slideshow = () => {
    return (
        <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={6000}
            className="slide-img"
        >
            <div data-src={img1} />
            <div data-src={img2} />
            <div data-src={img3} />
        </AutoplaySlider>
    )
}

export default Slideshow
