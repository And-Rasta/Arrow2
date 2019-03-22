import React, { Component } from "react";
import axios from 'axios';
import Card from '../../components/Card/Card';

class Event extends Component {
    state = {
        eventName: "",
        description: "",
        completed: ""
    }
    //on change update state
    onChangeHandler = (e) => {
        const { name } = e.target;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        this.setState({
            [name]: value
        })
    }
    //update event on server
    handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put("/api/event", {
                id: this.props.match.params.id,
                eventName: this.state.eventName,
                category: this.state.category,
                description: this.state.description,
                priority: this.state.priority,
                lastDate: this.state.lastDate,
                nextDue: this.state.nextDue,
                completed: this.state.completed
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
    //delete event from server
    handleDelete = (e) => {
        e.preventDefault();
        axios
            .delete("/api/event/" + this.props.match.params.id)
            .then((response) => {
                console.log(response);
                this.props.history.push("/");
            })
            .catch((err) => {
                console.error(err.message);
                console.error("could not delete event!");
                this.props.history.push("/");
            })
    }
    //on component mount, update state so that user sees task data
    componentDidMount() {
        axios
            .get("/api/event/" + this.props.match.params.id)
            .then((response) => {
                this.setState({
                    eventName: response.data.eventName,
                    category: response.data.category,
                    description: response.data.description,
                    priority: response.data.priority,
                    lastDate: response.data.lastDate,
                    nextDue: response.data.nextDue,
                    completed: response.data.completed
                })
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
                    <Card title="Edit Event">
                    <form>
                            <div className="form-group">
                                <label htmlFor="eventName">Event Name</label>
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
                            <div className="form-check">
                                <input name="completed" checked={this.state.completed} onChange={this.onChangeHandler} type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Event Completed?</label>
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