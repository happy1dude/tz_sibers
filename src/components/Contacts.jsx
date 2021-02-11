import React, { Component } from 'react';
import App from '../App';
import EllipseList from '../assets/img/user.svg';



export default class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch('http://demo.sibers.com/users')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <p> Error {error.message} </p>
        } else if (!isLoaded) {
            return <p> Загрузка...</p>
        } else {
            return (
                <ul className='contact__list-name'>
                    {items.map(item => (
                        <li key={item.id}>
                            <i><img width='20px' src={EllipseList} alt='icon' /> </i>
                            <span>{item.name}</span>
                        </li>
                    ))}
                </ul>
            )
        }
    }
}