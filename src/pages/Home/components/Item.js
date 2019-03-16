import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaEraser, FaClipboard, FaClipboardCheck, FaEdit } from 'react-icons/fa';
import axios from 'axios';

class Item extends Component {
    handleDelete = (id) => {
        axios
            .delete("/api/event/" + id)
            .then((response) => {
                console.log(response);
                window.location.reload();
            })
            .catch((err) => {
                console.error(err.message);
                console.error("could not delete event");
            })
    }

    handleCompletion = (item) => {
        axios
            .put("/api/event", item)
            .then((response) => {
                console.log(response);
                window.location.reload();
            })
            .catch((err) => {
                console.error(err.message);
                console.error("could not mark event " + (item.completed) ? "complete" : "incomplete");
            })
    }
    render() {
        return (
            <li>
                <div className="row">
                    <div className="col-sm-12">
                        <h4>{this.props.item.name}</h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        
                        <Link className="btn btn-success" to={"/event/" + this.props.item.id}><FaEdit /></Link>
                        {
                            (this.props.item.completed)
                                ? <button type="button" onClick={() => this.handleCompletion({
                                    id: this.props.item.id,
                                    name: this.props.item.name,
                                    description: this.props.item.description,
                                    completed: false
                                })} className="btn btn-primary"><FaClipboard /></button>
                                : <button type="button" onClick={() => this.handleCompletion({
                                    id: this.props.item.id,
                                    name: this.props.item.name,
                                    description: this.props.item.description,
                                    completed: true
                                })} className="btn btn-primary"><FaClipboardCheck /></button>
                        }
                        <button type="button" onClick={() => this.handleDelete(this.props.item.id)} className="btn btn-danger"><FaEraser /></button>
                    </div>
                </div>
            </li>
        );
    }
}

export default Item;