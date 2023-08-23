import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {
  render() {
    return (
      <div>
        Parent Hello Hihi
        {this.props.count}
        <Child count = {this.props.count}/>
        {JSON.stringify(this.props.users)}
        <button onClick={() => {
            this.props.onHello();
        }}>Bấm đi tao Hello</button>

        <button onClick={() => {
            this.props.onTest(this.props.name, {name: "Hảo"});
        }}>Gọi App</button>
        Count Value
        {this.props.countValue()}
      </div>
    )
  }
}
