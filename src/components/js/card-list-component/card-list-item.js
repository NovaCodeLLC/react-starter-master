/**
 * Created by Thomas Lesperance on 1/28/2018.
 */
import * as React from 'react';
import {Component} from 'react';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import PropTypes from 'prop-types';
require('./../../scss/card-list-component/_card-list-item.scss');

export default class CardListItem extends Component {
    render() {
        console.log(this.props.dataset);
        return(
                <Card className='card-container'>
                    <CardImg top className='card-img' src={this.props.dataset.image} alt='Card image cap' />
                    <CardBody className='card-body'>
                        <CardSubtitle className='card-sub'>{this.props.dataset.subtitle}</CardSubtitle>
                        <CardTitle className='card-title'>{this.props.dataset.title}</CardTitle>
                        <CardText className='card-text'>{this.props.dataset.content}</CardText>
                    </CardBody>
                </Card>
        );
    }
}

CardListItem.propTypes = {
    dataset: PropTypes.object
};

CardListItem.defaulProps = {
  dataset: {}
};
