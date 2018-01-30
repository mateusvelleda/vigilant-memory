import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as API from '../../services/api/index';

// import {GridList, GridTile} from 'material-ui/GridList';
import { Grid, Row, Col } from 'react-material-responsive-grid';

import CardItem from '../CardItem/CardItem';

class CardList extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    { this.props.links.map((data, i) => <Col key={i} lg={3} md12={4} sm={6} xs8={4} style={{marginTop: 16}}><CardItem {...data} /></Col>) }
                </Row>
            </Grid>
        );
    }
    componentDidMount() {
        API.GET_LINKS()
            .then(req => {
                req.data.forEach(data => {
                    console.log(data);
                    this.props.dispatch({
                        type: 'ADD_LINK',
                        data: data,
                    });
                })
            })
            .catch(req => console.log(req));
    }
}

const mapStateToProps = state => ({
    links: state.links
});

export default connect(mapStateToProps)(CardList);