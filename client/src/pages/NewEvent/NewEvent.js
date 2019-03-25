import React, { Component } from "react";
import axios from 'axios';
import Card from '../../components/Card/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Event extends Component {
    state = {
        eventName: "",
        category: "",
        description: "",
        priority: "",
        lastDate: "",
        nextDue: "",
        completed: false
    }

    //on change update state
    onChangeHandler = (e) => {
        const { name } = e.target;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        this.setState({
            [name]: value
        })
    }

    //post new event to server
    handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("/api/event", {
                eventName: this.state.eventName,
                category: this.state.category,
                description: this.state.description,
                priority: this.state.priority,
                lastDate: this.state.lastDate,
                nextDue: this.state.nextDue,
            })
            .then((response) => {
                console.log(response);
                this.props.history.push("/");
            })
            .catch((err) => {
                console.error(err.message);
                console.error("could not retrieve event!");
                this.props.history.push("/");
            })
    }
    //render form inside Card component
    render() {
        return (
            <div className="row">
                <div className="col-sm-10 offset-sm-1">
                    <Card title="New Event">
                        <form>
                            <div className="form-group">
                                <label htmlFor="eventName">Event Name
                                <FontAwesomeIcon icon="compress-arrows-alt" />
                                </label>
                                <input type="input" name="eventName" value={this.state.eventName} onChange={this.onChangeHandler} className="form-control" id="eventName" placeholder="Event Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="eventname">Category</label>
                                <input type="input" name="category" value={this.state.category} onChange={this.onChangeHandler} className="form-control" id="category" placeholder="Category" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Event Description</label>
                                <textarea name="description" value={this.state.description} onChange={this.onChangeHandler} className="form-control" id="description" rows="3"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="eventname">Priority</label>
                                <input type="select" name="priority" value={this.state.priority} onChange={this.onChangeHandler} className="form-control" id="priority" placeholder="Priority" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="eventname">Last Date</label>
                                <input type="date" name="lastDate" value={this.state.lastDate} onChange={this.onChangeHandler} className="form-control" id="lastDate" placeholder="Last Date" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="eventname">Next Due</label>
                                <input type="date" name="nextDue" value={this.state.nextDue} onChange={this.onChangeHandler} className="form-control" id="nextDue" placeholder="Next Due" />
                            </div>
                            <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Event;