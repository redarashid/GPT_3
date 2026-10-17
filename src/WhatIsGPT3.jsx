import React from 'react';
import './WhatIsGPT3.css';

function WhatIsGPT3() {
  return (
    <section className="gpt3-about">
      <div className="gpt3-about__top">
        <div className="gpt3-about__label">
          <span className="gpt3-about__line"></span>
          <h2>What is GPT-3</h2>
        </div>

        <p className="gpt3-about__description">
          We so opinion friends me message as delight.
          Whole front do of plate heard oh ought. His
          defective nor convinced residence own.
          Connection has put impossible own apartments
          boisterous. At jointure ladyship an insisted
          so humanity he. Friendly bachelor entrance
          to on by.
        </p>
      </div>

      <div className="gpt3-about__heading">
        <h1>
          The possibilities are beyond
          <br />
          your imagination
        </h1>

        <a href="#library" className="gpt3-about__link">
          Explore The Library
        </a>
      </div>

      <div className="gpt3-about__features">
        <article className="gpt3-about__feature">
          <span className="gpt3-about__line"></span>
          <h3>Chatbots</h3>
          <p>
            We so opinion friends me message as delight.
            Whole front do of plate heard oh ought.
          </p>
        </article>

        <article className="gpt3-about__feature">
          <span className="gpt3-about__line"></span>
          <h3>Knowledgebase</h3>
          <p>
            At jointure ladyship an insisted so humanity he.
            Friendly bachelor entrance to on by.
          </p>
        </article>

        <article className="gpt3-about__feature">
          <span className="gpt3-about__line"></span>
          <h3>Education</h3>
          <p>
            At jointure ladyship an insisted so humanity he.
            Friendly bachelor entrance to on by.
          </p>
        </article>
      </div>
    </section>
  );
}

export default WhatIsGPT3;