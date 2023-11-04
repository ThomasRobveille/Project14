import React from 'react';

import "../stylesheet/Header.css"

export default function Header() {
  return (
    <div className='containerHeader'>
      <h1>HRnet</h1>
      <a href="/employee_list">View employee list</a>
    </div>
  )
}