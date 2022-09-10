import React from 'react'
import Button from './Button'
import styled from 'styled-components'
import {TITLE_ENGLISH, BUTTON_ENGLISH} from '../assets/content.json'

const Form = ({ className }) => {
    return (
        <div className={className}>
            <h1 className='header'>{TITLE_ENGLISH}</h1>
            <label>
                <input className="inputField" name="inputField"></input>
            </label>
            <Button label={BUTTON_ENGLISH}/>    
        </div>
  )
}

export default styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 700px;
    height: 350px;
    background-color: rgb(243, 241, 240);

    gap: 10px;

    .header {
        font-size: larger;
        color: rgb(45, 44, 44);;
    }

    .inputField {
        width: 200px;
        height: 25px;
        border-radius: 5px;
        font-size: large;
    }

`