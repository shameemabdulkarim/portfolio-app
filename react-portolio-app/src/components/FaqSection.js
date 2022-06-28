import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { fade } from "../animation";
import { UseScroll } from "./UseScroll";
const Faqsection = () => {
  const [element, controls] = UseScroll();
  return (
    <Faq variants={fade} ref={element} animate={controls} initial="hidden">
      <h2>
        Any questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start ?">
          <div className="answer">
            <p>lorem ipsumsfsgsdfgsdf sdfgsfg</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              adipisci magni aut commodi reiciendis tempore id deleniti
              aspernatur, quibusdam accusantium illo nesciunt quisquam
              repudiandae quidem incidunt molestiae explicabo deserunt dolore!
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>lorem ipsumsfsgsdfgsdf sdfgsfg</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              adipisci magni aut commodi reiciendis tempore id deleniti
              aspernatur, quibusdam accusantium illo nesciunt quisquam
              repudiandae quidem incidunt molestiae explicabo deserunt dolore!
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>lorem ipsumsfsgsdfgsdf sdfgsfg</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              adipisci magni aut commodi reiciendis tempore id deleniti
              aspernatur, quibusdam accusantium illo nesciunt quisquam
              repudiandae quidem incidunt molestiae explicabo deserunt dolore!
            </p>
          </div>
        </Toggle>
        <Toggle title="What product do you offer ?">
          <div className="answer">
            <p>lorem ipsumsfsgsdfgsdf sdfgsfg</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              adipisci magni aut commodi reiciendis tempore id deleniti
              aspernatur, quibusdam accusantium illo nesciunt quisquam
              repudiandae quidem incidunt molestiae explicabo deserunt dolore!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
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
