
import styled from 'styled-components'
import { FcOk, FcHighPriority } from "react-icons/fc";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Accordion = ({ className, data }: any) => {

  return (
    <li className={className}>
      <button className={className}>
        <div className='container'>
          <FcOk size={30} />
          <div className='header'>
            <p className='text'>Name: </p>
            <p className='text'>Idetifier: </p>
            {/*} <p className='text'>Name: {data.header}</p> */}
            {/*} <p className='text'>Idetifier: {data.id}</p>*/}
          </div>
          <BsChevronDown size={40} />
        </div>
      </button>
      <div className='details'>
        test {/*{data.information}*/}
      </div>
    </li>
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