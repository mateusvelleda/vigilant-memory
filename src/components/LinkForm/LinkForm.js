import React, { Component } from 'react';

import * as API from '../../services/api/index';

import Input from 'react-toolbox/lib/input';
import {connect} from "react-redux";

class LinkForm extends Component {
    constructor() {
        super();
        this.state = {
            url: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.setLink = this.setLink.bind(this);
    }

    handleChange(val) {
        this.setState({
            url: val
        });
    }

    render() {
        return (
            <form onSubmit={this.setLink}>
                <Input value={this.state.url} type="url" placeholder="Paste or type a URL here" onChange={this.handleChange} />
            </form>
        );
    }

    setLink(e) {
        e.preventDefault();
        API.GET_LINK_INFO(this.state.url)
            .then(req => {
                this.props.dispatch({
                    type: 'ADD_LINK',
                    data: {...req.data, uri: this.state.url},
                });
                this.setState({
                    url: ''
                });
            });
    }
}

const mapStateToProps = state => ({
    links: state.links
});

export default connect(mapStateToProps)(LinkForm);
