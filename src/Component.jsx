import React from 'react';
import Image from './components/js/modules/Image';
require('./components/scss/util/_default');

export default class Component extends React.Component {

  render() {
    if (this.props.onRender) {
      this.props.onRender();
    }

    return (
        this.recallImage()
    );
  }

  recallImage() {
    const url = 'https://raw.githubusercontent.com/rexxars/react-hexagon/HEAD/logo/react-hexagon.png';

    return(
      <Image src={url}/>
    );
  }
}

Component.propTypes = {
  onRender: React.PropTypes.func
};
