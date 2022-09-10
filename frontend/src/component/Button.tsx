
import { useState } from 'react'
import styled from 'styled-components'

const Button = ({ className, label, onClick }) => {

  return (
    <div className={className} onClick={onClick}>
      <div className='text'>
        {label}
      </div>
    </div>
  )
}

export default styled(Button)`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 120px;
  height: 50px;
  border-radius: 5px;
  background-color: #AD362B;

  .text {
      color: #ffffff;
      font-weight: bold;
      font-size: 20px;
  }
`