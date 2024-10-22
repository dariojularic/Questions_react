import { useState } from "react";
import "./Question.css"

function Question(props) {
    const [isOpen, setIsOpen] = useState(false);
    const {id, title, info} = props;
    return (
        <li className="list-item">
          <div className="question-container">
            <h2 className="question-title">{title}</h2>
            <button className="open-close-btn" onClick={() => setIsOpen(!isOpen)}> Open </button>
          </div>
          <p className="question-info">
            {isOpen ? info : null}
          </p>
        </li>
    )
}

export default Question