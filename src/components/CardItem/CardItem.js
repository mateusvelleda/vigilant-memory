import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class CardItem extends Component {
    render() {
        return (
            <Card>
                <CardHeader
                    title={this.props.title || this.props.id}
                    subtitle={<a href={this.props.uri} target="_blank">{this.props.uri}</a>}
                    avatar={this.props.icon}
                />
                <CardMedia>
                    <img src={this.props.image} alt={this.props.title} />
                </CardMedia>
                <CardText>{this.props.description}</CardText>
                <CardActions>
                    <FlatButton label="Share"/>
                    <FlatButton label="Delete"/>
                </CardActions>
            </Card>
        );
    }
}

export default CardItem;
