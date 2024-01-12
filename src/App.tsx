import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import styled from 'styled-components';
import Message from './pages/Message/[id]';

const Component = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;

  &>div{
    width: 40rem;
    padding: 2rem;
  }
`

function App() {

  return (
    <BrowserRouter>
      <Component>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/message/:id/:name' element={<Message />} />
        </Routes>
      </Component>
    </BrowserRouter>
  )
}

export default App
