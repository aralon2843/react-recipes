import Recipes from '../Recipes/Recipes'
import Search from '../Search/Search'
import { StyledMainPage } from './Styles'

const MainPage = () => {
  return (
    <StyledMainPage>
      <Search />
      <Recipes />
    </StyledMainPage>
  )
}

export default MainPage
