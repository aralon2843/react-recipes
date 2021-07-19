import { Container, Wrapper } from './appStyles'
import Flex from './common/Flex'
import MainPage from './components/MainPage/MainPage'
import SideBar from './components/SideBar/SideBar'

function App() {
  return (
    <Wrapper>
      <Container>
        <Flex >
          <SideBar />
          <MainPage />
        </Flex>
      </Container>
    </Wrapper>
  )
}

export default App
