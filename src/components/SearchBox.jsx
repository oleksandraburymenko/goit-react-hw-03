import { Component } from "react";
import css from './Phonebook.module.css';
import PropTypes from 'prop-types';

export class SearchBox extends Component {
    render () {
        return (
            <>
            <p className={css.SearchBox_text}>
                Find contacts by name
            </p>
            <input
            type="text"
            name="filter"
            className={css.SearchBox_input}
            value={this.props.SearchBox}
            onChange={this.props.filterContact}
            ></input>
            </>
        )
    }
}


SearchBox.propTypes = {
    filter: PropTypes.string.isRequired,
    filterContact: PropTypes.func.isRequired,
}