import React, { Fragment } from 'react';

const Glossary = ({ terms }) => (
  <dl>
    {terms.map(t => {
      return (
      <ul>
        <li>
          <Fragment key={t.term}>
            <dt>{t.term}</dt>
            <dd>{t.definition}</dd>
      
          </Fragment>
        </li>
      </ul>
      );
    })}
  </dl>
);

export default Glossary;