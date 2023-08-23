import React from 'react'
import ComC from './ComC'

export default function ComA() {
    let users = ["Phước", "Hảo", "Thái", "Khang"];
  return (
    <div>
        ComA
        <br></br>
        <ComC users={users} name="Hảo"/>
        <br></br>
        <ComC></ComC>
        <br></br>
        <ComC></ComC>
    </div>
  )
}
