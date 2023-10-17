import React from 'react'
import "./App.css"

const Card = ({ image, name, status, species, location, origin }) => {
    return (
        <div className='card-cont'>
            <div className='card'>
                <div className='img-cont'>
                    <img src={image} />
                </div>
                <div className='details-cont'>
                    <h2>{name}</h2>
                    <h3>{status}-{species}</h3>
                    <p>Last Known location:</p>
                    <h3>{location.name}</h3>
                    <p>First seen in:</p>
                    <h3>{origin.name}</h3>
                </div>
            </div>
        </div>
    )
}

export default Card