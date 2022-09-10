import { useState } from 'react'
import Button from './Button'
import styled from 'styled-components'
import { TITLE, BUTTON, RADIO_BUTTON_1, RADIO_BUTTON_2 } from '../assets/content.json'

const Form = ({ className }) => {
  const [pepTarget, setPepTarget] = useState('');
  const [targetType, setTargetType] = useState('person');


  const handleRequest = () => {
    console.log(targetType, pepTarget)
  }

  return (
    <div className={className}>
      <h1 className='header'>{TITLE}</h1>
      <input
        type='text'
        required
        value={pepTarget}
        onChange={(e) => setPepTarget(e.target.value)}
      />

      <div className='radioContainer'>
        <label>
          <input
            type="radio"
            name="searchType"
            value="person"
            defaultChecked={true}
            onChange={(e) => setTargetType(e.target.value)}
          />
          {RADIO_BUTTON_1}
        </label>
        <label>
          <input
            type="radio"
            name="searchType"
            value="buisness"
            onChange={(e) => setTargetType(e.target.value)}
          />
          {RADIO_BUTTON_2}
        </label>
      </div>
      <Button
        label={BUTTON}
        onClick={handleRequest}
      />
      <p>{pepTarget} + {targetType}</p>
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

    .radioContainer {
        display: flex;
        width: 200px;
        justify-content: space-between;
    }

    .inputField {
        width: 200px;
        height: 25px;
        border-radius: 5px;
        font-size: large;
    }

`