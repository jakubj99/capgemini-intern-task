import React from 'react';
import '../styles/card.css';

function Card(props) {
    const { student, visitedLectures, average, active, onClickCalback } = props;
    let className = 'card ' + (average <= 5 ? 'red' : 'green');

    if (active) {
        className += ' active';
    }

    return (
        <div className={className} onClick={onClickCalback}>
            <p>Name: {student.name}</p>
            <p>Last name: {student.lastName}</p>
            <p>Visited lectures: {visitedLectures}</p>
            <p>Average mark: {average}</p>
        </div>
    )
}

export default Card;