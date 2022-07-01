import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Data from './data'

export default function App() {

    const dataArray = Data.map(data =>
        <Card
            key={data.id}
            data={data} />
    )
    return (<div>
        <Navbar />
        <Hero />
        <section className="card--container">{dataArray}</section>
    </div>
    )
}


