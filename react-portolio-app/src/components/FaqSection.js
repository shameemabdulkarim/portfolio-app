import React from "react";
import styled from "styled-components";
import { About } from "../styles";

const Faqsection = () => {
  return (
    <Faq>
      <h2>
        Any questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How Do I Start ?</h4>
        <div className="answer">
          <p>lorem ipsumsfsgsdfgsdf sdfgsfg</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            adipisci magni aut commodi reiciendis tempore id deleniti
            aspernatur, quibusdam accusantium illo nesciunt quisquam repudiandae
            quidem incidunt molestiae explicabo deserunt dolore!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>lorem ipsumsfsgsdfgsdf sdfgsfg</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            adipisci magni aut commodi reiciendis tempore id deleniti
            aspernatur, quibusdam accusantium illo nesciunt quisquam repudiandae
            quidem incidunt molestiae explicabo deserunt dolore!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Different Payment Methods</h4>
        <div className="answer">
          <p>lorem ipsumsfsgsdfgsdf sdfgsfg</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            adipisci magni aut commodi reiciendis tempore id deleniti
            aspernatur, quibusdam accusantium illo nesciunt quisquam repudiandae
            quidem incidunt molestiae explicabo deserunt dolore!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What product do you offer ?</h4>
        <div className="answer">
          <p>lorem ipsumsfsgsdfgsdf sdfgsfg</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            adipisci magni aut commodi reiciendis tempore id deleniti
            aspernatur, quibusdam accusantium illo nesciunt quisquam repudiandae
            quidem incidunt molestiae explicabo deserunt dolore!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100% auto;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default Faqsection;
