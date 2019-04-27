import React from 'react';
import Navigation from './Navigation';
import Main from './Main';
import * as Styled from './styles';

function App() {
  return (
    <Styled.FlexRowWrapper>
      <Navigation />
      <Main />
    </Styled.FlexRowWrapper>
  );
}

export default App;
