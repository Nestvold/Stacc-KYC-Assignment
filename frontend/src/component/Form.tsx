import { useState } from 'react'
import Button from './Button'
import styled from 'styled-components'
import { CMS } from '../assets/db.json'
import { pepSearchOrganization, pepSearchPerson, pepSearchRoles } from '../services/pepService'

const Form = ({ className }: any) => {
  const [pepTarget, setPepTarget] = useState('');
  const [targetType, setTargetType] = useState('person');


  const handleRequest = () => {
    let response;
    console.log('Her: ', targetType, pepTarget)
    if (targetType == 'person') {
      console.log('Searching for person', pepTarget)
      console.log(pepSearchPerson(pepTarget))
    }
    if (targetType == 'buisness') {
      console.log('Searching for buisness', pepTarget)
      console.log(pepSearchOrganization(pepTarget))
    }
    if (targetType == 'roles') {
      console.log('Searching for roles', pepTarget)
      console.log(pepSearchRoles(pepTarget))
    }


  }

  return (
    <div className={className}>
      <h1 className='header'>{CMS.TITLE}</h1>
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
          {CMS.RADIO_BUTTON_1}
        </label>
        <label>
          <input
            type="radio"
            name="searchType"
            value="roles"
            onChange={(e) => setTargetType(e.target.value)}
          />
          {CMS.RADIO_BUTTON_2}
        </label>
        <label>
          <input
            type="radio"
            name="searchType"
            value="buisness"
            onChange={(e) => setTargetType(e.target.value)}
          />
          {CMS.RADIO_BUTTON_3}
        </label>
      </div>
      <Button
        label={CMS.BUTTON}
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