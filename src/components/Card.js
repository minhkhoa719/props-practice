import React from "react";


function Card(props) {
    console.log(props);
    let checkHeader 
    if(props.id === 1) {
        checkHeader = 
        <header className="header">
                    <div className="header--title">
                        <img src="images/Fill 213.png"/>
                        <span>my travel journal</span>
                    </div>
        </header>
    }
    return (
        <div className="card">
            
            <div className="card--content">
                {checkHeader}
                <div className ="card--body">
                    <img src = {props.imageUrl} className="card--img"/>
                    <div className = "card--describe">
                        <section className="card--place">
                            <img src = "images/Fill 220.png" className = "card--logo place--item"/>
                            <h3 className = "place--item">{props.location.toUpperCase()}</h3>
                            <a className = "place--item" href={props.googleMapsUrl}>View on Google Maps</a>
                        </section>
                        <section className="card--text">
                            <h1>{props.title}</h1>
                            <p className="bold">
                                <span>{props.startDate}</span>
                                -
                                <span>{props.endDate}</span>
                            </p>
                            <p>{props.description}</p>
                        </section>
                    </div>
                </div>
                <hr/>
            </div>
            
        </div>
        
    )
}

export default Card;