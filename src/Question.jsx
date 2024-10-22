import { useState } from 'react';
import './Question.css'
import PropTypes from 'prop-types';

function Question(props) {
    const [isOpen, setIsOpen] = useState(false);
    const {title, info} = props;
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

Question.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  info: PropTypes.string
}

export default Question
