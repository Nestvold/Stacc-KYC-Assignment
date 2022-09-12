
import styled from 'styled-components'
import { FcOk, FcHighPriority } from "react-icons/fc";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { CMS } from '../assets/db.json'
import { SetStateAction, useState } from 'react';

const Accordion = ({ className, data }: any) => {

  const [accordion, setActiveAccordion] = useState(-1)

  function toggleAccordion(index: SetStateAction<number>) {
    if (index === accordion) {
      setActiveAccordion(-1)
      return
    }
    setActiveAccordion(index);
  }

  function BoldText({ children }: any) {
    return <span style={{ fontWeight: 'bold' }}>{children}</span>;
  }

  return (
    <div className={className}>
      <h2>{CMS.RESULT_HEADER}</h2>
      <div className='results'>
        {data.map((item: any, index: number) =>
          < div className='container' key={index} onClick={() => toggleAccordion(index)}>
            <div className='header'>
              <div className='summary'>
                <p className='text'>{CMS.ACCORDION_TARGET_NAME} {item.name}</p>
                <p className='text'>{CMS.ACCORDION_TARGET_ID} {item.identifiers}</p>
              </div>
              {accordion === index ? (
                <span>
                  <BsChevronUp size={40} />
                </span>
              ) : (
                <span>
                  <BsChevronDown size={40} />
                </span>
              )}
            </div>
            <div className={accordion === index ? 'active' : 'inactive'}>
              <ul>
                {Object.entries(item).map(([key, value]) => (
                  <li key={key}>
                    <>
                      <BoldText>{key}</BoldText> : {value}
                    </>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div >
  )
}

export default styled(Accordion)`
  padding-top: 100px;

  .container {
    text-align: start;
    padding: 15px;
  }

  .summary {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 650px;
  }

  .text {
    font-size: 16px;
    font-weight: bold;
  }

  .accordion-simple > .active {
    display: block;
    align-content: flex-start;
  }

  .results .inactive {
    display: none;
  }

  .results > div {
    color: rgb(45, 45, 45);
    background-color: rgb(245, 240, 240);
    margin-bottom: 20px;
    border-radius: 2px;
    cursor: pointer;
    width: 670px;
    height: inherit;
  }
`