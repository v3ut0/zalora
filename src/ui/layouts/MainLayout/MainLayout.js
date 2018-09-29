import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MainLayout extends Component {
  render() {
    const { component: Children } = this.props
    return (
      <div>
        <Children/>
      </div>
    )
  }
}

MainLayout.propTypes = {
  component: PropTypes.func.isRequired,
}

export default MainLayout
