import React, { PropTypes } from 'react'

import FilterLink from '../containers/FilterLink';

const Footer = () => {
  return (
    <div>
      Show:
      { ' '}
      <FilterLink filter="SHOW_ALL"> all </FilterLink>
      { ', '}
      <FilterLink filter="SHOW_COMPLETED"> completed </FilterLink>
      { ', '}
      <FilterLink filter="SHOW_ACTIVE"> active </FilterLink>
    </div>
  )
}

export default Footer;
