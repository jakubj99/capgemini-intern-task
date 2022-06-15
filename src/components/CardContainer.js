import React, { useState } from 'react';
import Card from './Card';
import '../styles/card-container.css';

function CardContainter(props) {
    const { students } = props;

    const [active, setActive] = useState(undefined);

    const onCardClick = (clickedCardIdx) => {
        if (clickedCardIdx === active) {
            setActive(undefined);
        } else {
            setActive(clickedCardIdx);
        }
    }

    return (
        <div className="card-container">
            {students.map((student, idx) => {
                const notEmptyMarks = student.marks
                    .filter(mark => !!mark);

                const average = notEmptyMarks.reduce((sum, x) => sum + x, 0) / student.marks.length;

                return (<Card
                    key={idx}
                    onClickCalback={() => onCardClick(idx)}
                    active={idx === active}
                    student={student}
                    visitedLectures={notEmptyMarks.length}
                    average={average}
                />);
            })}
        </div>
    )
}

export default CardContainter;
