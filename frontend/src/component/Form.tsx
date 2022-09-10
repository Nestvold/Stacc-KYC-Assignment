import { useState } from 'react'
import Button from './Button'
import styled from 'styled-components'
import { CMS } from '../assets/db.json'
import { pepSearchOrganization, pepSearchPerson, pepSearchRoles } from '../services/pepService'

const Form = ({ className }: any) => {
  const [pepTarget, setPepTarget] = useState('Knut Arild Hareide');
  const [targetType, setTargetType] = useState('person');


  const handleRequest = async() => {
    console.log('Searching for:', pepTarget, '(', targetType, ')')

    if (targetType == 'person') {
      console.log('Searching for person', pepTarget)
      var data = await pepSearchPerson(pepTarget)
      console.log(data)
    }

    if (targetType == 'buisness') {
      console.log('Searching for buisness', pepTarget)
      var data = await pepSearchOrganization(pepTarget)
      console.log(data)
    }
    
    if (targetType == 'roles') {
      console.log('Searching for roles', pepTarget)
      var data = await pepSearchRoles(pepTarget)
      console.log(data)
    }
  }

  return (
    <div className={className}>
      <h1 className='header'>{CMS.TITLE}</h1>
      <input
        className='inputField'
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
      <div>
        <p>{CMS.SEARCH}</p>
        <p>{pepTarget}</p>
      </div>
    </div>
  )
}

export default styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 10px;
    width: 700px;
    height: 350px;
    margin-bottom: 20px;
    color: rgb(45, 44, 44);
    background-color: rgb(243, 241, 240);

    .header {
        font-size: larger;
    }

    .radioContainer {
        display: flex;
        width: 200px;
        justify-content: space-between; 
    }

    .inputField {
        color: rgb(255, 255, 255);
        width: 200px;
        height: 25px;
        border-radius: 5px;
        font-size: large;
    }

`