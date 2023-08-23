import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <div>
        Child
        {this.props.count}
    </div>
    )
  }
}
