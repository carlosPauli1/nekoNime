import Header from './Componentes/header';
import styled from 'styled-components';
import Pesquisa from './Componentes/pesquisa';
import Lancamentos from './Componentes/Lancamentos';

const AppContainer = styled.div`
  /* fonts */
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #EDEBE3;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <Lancamentos />
    </AppContainer>
  );
}

export default App;
