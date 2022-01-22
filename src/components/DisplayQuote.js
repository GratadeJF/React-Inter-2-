import React from 'react';

function DisplayQuote( props ) {
  return (
    props.quote && (
      <div className='Displayquote'>
        <img src={props.quote.image}/>
        <ul>
          <li>quote: {props.quote.quote}</li>
          <li>
            character: {props.quote.character}{' '}
          </li>
        </ul>
      </div>
    )
  );
}

export default DisplayQuote;