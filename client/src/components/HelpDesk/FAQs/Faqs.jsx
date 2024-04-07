import React, { useState } from 'react';
import './FAQSection.css'; // Import CSS file for styling
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq">
      <div className={`question ${isOpen ? 'open' : ''}`} onClick={toggleAnswer}>
        {question}
        <span id='icon'>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown /> }</span>
      </div>
      {isOpen && <div className="answer">{answer}</div>}
    </div>
  );
}

function FAQSection() {
  return (
    <div className="faq-section">
      <div className="FAQ-box">
      <FAQItem
        question="What is Lorem Ipsum?"
        answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      </div>
      <div className="FAQ-box">
      <FAQItem
        question="Why do we use it?"
        answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      />
      </div>
      <div className="FAQ-box">
      <FAQItem
        question="Where does it come from?"
        answer="Contrary to popular belief, Lorem Ipsum is not simply random text."
      />
      </div>
    </div>
  );
}

export default FAQSection;
