/**
 * Created by Thomas Lesperance on 1/28/2018.
 */
import React, {Component} from 'react';
import {CardDeck} from 'reactstrap';
import {getCardSet} from '../../../staticDatasets/cardActions';
import CardListItem from './card-list-item';

export default class CardListContainer extends Component {

    render() {
        return(
            <CardDeck>
                {this.renderCards()}
            </CardDeck>
        );
    }

    // create individual cards
    renderCards() {
        return getCardSet().map((cardData) => (
              <CardListItem
                  key={cardData.id}
                  dataset={cardData}
              />
        ));
    }
}

