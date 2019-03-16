import React, { Component } from "react";
import Card from '../../components/Card/Card';
import List from './components/List';
import axios from 'axios';
import "./Home.css";
class Home extends Component {
    state = {
        eventList: []
    }

    componentDidMount() {
        //when component mounts, get tasklist from server
        axios
            .get("/api/event")
            .then((response) => {
                //setstate with data
                this.setState({
                    eventList: response.data
                })
            })
            .catch((err) => {
                console.error(err.message);
                console.error("could not retrieve list!");
            })
    }
    //render 2 columns on medium screen or higher, or 2 rows on a smaller screen. 
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-sm-10 col-md-5 offset-sm-1 text-center">
                        <Card title="Incomplete Events">
                            <List list={this.state.eventList.filter((elem) => !elem.completed)} />
                        </Card>
                    </div>
                    <div className="col-sm-10 col-md-5 text-center">
                        <Card title="Completed Eventss">
                            <List list={this.state.eventList.filter((elem) => elem.completed)} />
                        </Card>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;