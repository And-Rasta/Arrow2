import React from 'react';
//genericized component to render a bootstrap card with header
function Card(props) {
    return (
        <div className="card text-white bg-dark text-center">
            <div className="card-header">
                <h1 className="font-italic">{props.title}</h1>
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
}

export default Card;