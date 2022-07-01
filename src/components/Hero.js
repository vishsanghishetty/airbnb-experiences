import React from 'react';
import group from '../images/Group77.png'



export default function Hero() {
    return (<section className="hero">

        <img src={group} alt='group' className='hero--logo' />

        <h1 className='hero--title'>Online Experiences</h1>
        <p className='hero--desc'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
    )

}