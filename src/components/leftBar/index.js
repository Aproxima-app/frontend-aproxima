import React from 'react';

import Aproxima from '../../assets/aproxima.svg';
import Back from '../../assets/back.svg';

import { Link } from "react-router-dom";

import SchoolIcon from '@material-ui/icons/School';
import './styles.css';


export default function LeftBar ({ events }) {
    return (
        <div className="left-bar">
            <div className="Header">
                <Link to="/"><img src={Back} alt="Volta" /></Link>
                <img src={Aproxima} alt="Aproxima logo" />
            </div>
            {!events.length && <p>Nenhum evento próximo</p>}
            <ul>
            {events.map(event => (
                <li key={event.id}>
                <div className="card">
                    <div className="event-info">
                    <h2>{event.title}</h2>
                    <h3>{event.description}</h3>
                    <h5>Unissuam</h5>
                    </div>
                    <SchoolIcon />
                </div>
                </li>
            ))}
            </ul>
        </div>
    );
}
