import React, { Component } from 'react';
import Img404 from '../../assets/img/404.gif';
import "./404.css"
//404 pg not found
class Error404 extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <div id="pg404">
                        <h1 className="font-italic text-light">Error 404 - Page Not Found</h1>
                        <img src={Img404} alt="Error 404" />
                        <h3 className="font-italic text-light">I ate ur webpage; it was delicious.</h3>
                    </div>
                </div>
            </div>

        )
    }

}

export default Error404;