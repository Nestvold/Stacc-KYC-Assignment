import Form from './component/Form';
import styled from 'styled-components';

export const App = ({ className }: any) => {

  return (
    <div className={className}>
      <div>
        <Form />
      </div>
    </div>
  )
}

export default styled(App)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;


  /* CSS moved from index.css */
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;

`
