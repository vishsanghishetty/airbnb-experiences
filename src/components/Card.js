import React from 'react';
import star from '../images/Star.png';

export default function Card(props) {
    console.log(props);

    let badgeText
    if (props.data.openSpots === 0) {
        badgeText = "SOLD OUT"

    }
    else if (props.data.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">

            <img src={`../images/${props.data.img}`} alt="card images" className="card--image" />
            {badgeText && <div className="card--badge">{badgeText}</div>}

            <div className="card--rating">
                <img src={star} alt="star" className="card--star" />
                <span className="rat1">{props.data.stats.rating}</span>
                <span className="gray">({props.data.stats.reviewCount}) • </span>
                <span className="gray">{props.data.location}</span>
            </div>
            <p className="card--title">{props.data.title}</p>
            <p className="card--price"><span className="bold">From ${props.data.price}</span> / person</p>
        </div >
    )
}