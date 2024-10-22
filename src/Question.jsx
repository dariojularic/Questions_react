import { useState } from 'react';
import './Question.css'

function Question(props) {
    const [isOpen, setIsOpen] = useState(false);
    const {id, title, info} = props;
    return (
        <li className="list-item">
          <div className="question-container">
            <h3 className="question-title">{title}</h3>
            <button className="open-close-btn" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "-" : "+"}
            </button>
          </div>
            {isOpen ? (<p className="question-info"> {info} </p>) : null}
        </li>
    )
}

export default Question
