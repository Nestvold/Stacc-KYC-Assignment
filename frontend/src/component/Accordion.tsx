
import styled from 'styled-components'
import { FcOk, FcHighPriority } from "react-icons/fc";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { CMS } from '../assets/db.json'

const Accordion = ({ className }: any) => {

  const data = {
    aliases: "Hareide, Knut Arild",
    birth_date: "1972-11-23",
    countries: "no",
    dataset: "Every Politician",
    emails: "",
    first_seen: "2021-10-07 03:02:59",
    id: "evpo-ff10bc5a-4aad-4895-b886-fb88e598ed57",
    identifiers: "Q1350399",
    last_seen: "2021-07-26 11:55:45",
    name: "Knut Arild Hareide",
    phones: "",
    sanctions: "",
    schema: "Person",
    score: 0.0003451437393358565
  }

  return (
    <div className={className}>
      <button className={className}>
        <div className='container'>
          <FcOk size={30} />
          <div className='header'>
            <p className='text'>{CMS.ACCORDION_TARGET_NAME} </p>
            <p className='text'>{CMS.ACCORDION_TARGET_ID} </p>
          </div>
          <BsChevronDown size={40} />
        </div>
      </button>
      <div className='details'>
        {data.aliases}
      </div>
    </div>
  )
}

export default styled(Accordion)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 700px;
    height: 108px;
    background-color: rgb(243, 241, 240);
    color: rgb(45, 44, 44);

    .header {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

    }
    .container {
      width: 600px;
      height: inherit;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      align-content: center;
    }

    .text {
      font-size: 16px;
      font-weight: bold;
    }

`