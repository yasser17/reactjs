import React from 'react';
import PropTypes from 'prop-types'
import './styles.css'

const Location = ({city}) => (
    <h5>{city}</h5>
);

Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;