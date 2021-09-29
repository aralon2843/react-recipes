import { Route, Switch } from 'react-router-dom';
import { Container, Wrapper } from './appStyles';
import MainPage from './components/MainPage/MainPage';
import RecipePage from './components/RecipePage/RecipePage';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <Wrapper>
      <Container>
        <SideBar />
        <Switch>
          <Route exact path='/react-recipes'>
            <MainPage />
          </Route>
          <Route path='/react-recipes/recipe:id'>
            <RecipePage />
          </Route>
        </Switch>
      </Container>
    </Wrapper>
  );
}

export default App;
