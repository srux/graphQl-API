import React, { Component } from 'react';
import Modal from '../components/modal/modal';
import AuthContext from '../context/auth-context';
class Events extends Component {
    constructor(props) {
        super(props);

        this.state = {
            creatingEvent:false,
            events:[]
        };

 


        this.titleElRef = React.createRef();
        this.priceElRef = React.createRef();
        this.dateElRef = React.createRef();
        this.descriptionElRef = React.createRef();

    }

    static contextType = AuthContext;

    componentDidMount() {
        this.fetchEvents();
    }

    handleCreateEvent = (e) => {
        e.preventDefault();
        this.setState({
            creatingEvent:true
        })  
    }

    handleModalConfirm = (e) => {
        e.preventDefault();
        this.setState({
            creatingEvent:false
        })  

        const title = this.titleElRef.current.value;
        const price = +this.priceElRef.current.value;
        const date = this.dateElRef.current.value;
        const description = this.descriptionElRef.current.value;
        
        if (title.trim().length === 0 || price <= 0 || date.trim().length === 0 || description.trim().length === 0) {
            return;
        }

        const event = {title,price,date,description};
        console.log(event);

    
         const requestBody = {
                query: `
                    mutation {
                        createEvent(eventInput: {title:"${title}", description:"${description}", price:${price}, date:"${date}"}) {
                            _id
                            title
                            description
                            date
                            price
                            creator {
                                _id
                                email
                            }
                        }
                    }
                    `
            };

        const token = this.context.token;

        fetch('http://localhost:4000/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => {
                if (res.status !== 200 && res.status !== 201) {
                    throw new Error('Failed!');
                }
                return res.json();
            })
          .then(resData => {
                this.fetchEvents();
            })
            .catch(err => {
                console.log(err);
            });
    }
    

    handleModalCancel = (e) => {
        e.preventDefault();
        this.setState({
            creatingEvent:false
        })  
    }

    fetchEvents(){
        const requestBody = {
            query: `
                query {
                    events {
                        _id
                        title
                        description
                        date
                        price
                        creator {
                            _id
                            email
                        }
                    }
                }
                `
        };


        fetch('http://localhost:4000/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status !== 200 && res.status !== 201) {
                    throw new Error('Failed!');
                }
                return res.json();
            })
          .then(resData => {
                const events = resData.data.events;
                this.setState({
                    events
                })
            })
            .catch(err => {
                console.log(err);
            });

    }

    render() {

        const eventList = this.state.events.map(event => {
        return  <li key={event._id} className="event-item">
            <span>
            {event.title}
            </span><span>
            {event.description}
            </span><span>
            {event.price}
            </span><span>
            {event.date}
            </span></li>
        })

        return (
            <div className="section">
                {this.state.creatingEvent && <Modal title="Add Event" canConfirm canCancel onCancel={this.handleModalCancel} onConfirm={this.handleModalConfirm}>
                    
                    <form>
                        <div className="form-control">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" ref={this.titleElRef}></input>
                        </div>
                        <div className="form-control">
                            <label htmlFor="price">Price</label>
                            <input type="number" id="price" ref={this.priceElRef}></input>
                        </div>
                        <div className="form-control">
                            <label htmlFor="date">Date</label>
                            <input type="datetime-local" id="date" ref={this.dateElRef}></input>
                        </div>
                        <div className="form-control">
                            <label htmlFor="description">Title</label>
                            <textarea rows="4" id="description" ref={this.descriptionElRef}></textarea>
                        </div>
                    </form>

                    </Modal>}
                
                <div className="events-container">
                    <h1>Events</h1>
                    <ul className="events">
                        {eventList}
                    </ul>
                    {this.context.token && (
                    <div className="button" onClick={this.handleCreateEvent}>
                        Create Event
                    </div>
                    )}
                </div>
                

            </div>
        )
    }
}

export default Events