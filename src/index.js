import React from 'react';
import ReactDOM from 'react-dom';
import CardListComponent from './components/js/card-list-component/card-list-container';
import '../node_modules/bootstrap/scss/bootstrap.scss';

window.onload = () => {

  /*
    note:

    I realized I deviated pretty hard from the instructions as I opted to develop my own components. Some of this was probably
    because I read the requirements faster than I should have, while most of this is because I went on a learning binge in a single afternoon
    to complete assignment.  After caring for my other customers,
    I had fairly limited time to teach myself the parts of react I had forgotten and the parts
    I didn't know -- ie How to write it all into ES6 classes correctly.

    In addition to crash coursing myself through react -- I mainly work with Angular -- I recognized bootstrap came equipped to handle this project.
    So I spent the remainder of the time learning how to marry bootstrap to react, and how to make use of the materials library to correctly
    emulate the project.  As a result I abandoned the JSX files I was given and created my own components / modifed the index file.

    Sorry for the steep deviation, but I was looking to get something close to what you wanted with extremely limited time for the week.
    I hope this works for you.  Thank you much
    --Tom Lesperance
  */
  ReactDOM.render(
      <CardListComponent/>,
    document.querySelector('#container')
  );
};
