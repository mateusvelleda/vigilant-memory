import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import styles from './card-item.css';

class CardItem extends Component {
    render() {
        return (
            <Card className="card-item">
                <CardHeader
                    title={this.props.title || this.props.id}
                    subtitle={<a href={this.props.uri} title={`Go to ${this.props.uri}`} target="_blank">{this.props.uri}</a>}
                    avatar={this.props.icon}
                    className="card-item__header lp"
                />
                <CardMedia className="card-item__image">
                    <img src={this.props.image || 'https://picsum.photos/960/540'} alt={this.props.title} />
                </CardMedia>
                <CardText className="card-item__description">{this.props.description}</CardText>
                <CardActions>
                    <FlatButton label="Share"/>
                    <FlatButton label="Delete"/>
                </CardActions>
            </Card>
        );
    }
}

export default CardItem;
