import React, { useState } from 'react';
import styled from 'styled-components';
import Counter from './Counter';
import Form from './Form';

const Logo = styled.img``;

const Main = styled.div`
  flex-grow: 1;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const C = styled.div`
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  flex-direction: column;
  gap: 2rem;
  place-content: center;
  place-items: center;
  height: 100vh;
`;

function App() {
  const [u, setU] = useState('');

  return (
    <C>
      Hello {u} 👋
      <Form value={u} onChange={(e) => setU(e.target.value)} />
      {!!u && <Counter login={u} />}
    </C>
  );
}

export default App;
