import { useState } from 'react'
import Button from './Button'
import styled from 'styled-components'
import { CMS } from '../assets/db.json'
import { pepSearchOrganization, pepSearchPerson, pepSearchRoles } from '../services/pepService'
import Accordion from './Accordion'

const Form = ({ className }: any) => {
  const [pepTarget, setPepTarget] = useState('Knut Arild Hareide');
  const [targetType, setTargetType] = useState('person');
  const [targetData, setTargetData] = useState([])

  const handleRequest = async () => {
    console.log('Searching for:', pepTarget, '(', targetType, ')')

    if (targetType == 'person') {
      console.log('Searching for person', pepTarget)
      var response = await pepSearchPerson(pepTarget)
      console.log(response)
    }

    if (targetType == 'buisness') {
      console.log('Searching for buisness', pepTarget)
      var response = await pepSearchOrganization(pepTarget)
      console.log(response)
    }

    if (targetType == 'roles') {
      console.log('Searching for roles', pepTarget)
      var response = await pepSearchRoles(pepTarget)
      console.log(response)
    }
    setTargetData(response)
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
      <Accordion data={targetData} />
    </div>
  )
}

export default styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;


    gap: 10px;
    width: 700px;
    height: 350px;
    border-radius: 2px;
    margin-bottom: 20px;
    color: rgb(45, 45, 45);
    background-color: rgb(245, 240, 240);

    .header {
        font-size: larger;
    }

    .radioContainer {
        display: flex;
        width: 200px;
        justify-content: space-between;
        color: rgb(45, 45, 45);
    }

    .inputField {
        color: rgb(45, 45, 45);
        width: 200px;
        height: 25px;
        border-radius: 5px;
        font-size: large;
    }

`