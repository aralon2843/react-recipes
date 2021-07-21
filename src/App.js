import { Route, Switch } from 'react-router-dom'
import { Container, Wrapper } from './appStyles'
import Flex from './common/Flex'
import MainPage from './components/MainPage/MainPage'
import RecipePage from './components/RecipePage/RecipePage'
import SideBar from './components/SideBar/SideBar'

function App() {
  return (
    <Wrapper>
      <Container>
        <Flex>
          <SideBar />
          <Switch>
            <Route exact path='/'>
              <MainPage />
            </Route>
            <Route path='/recipe:id'>
              <RecipePage />
            </Route>
          </Switch>
        </Flex>
      </Container>
    </Wrapper>
  )
}

export default App
