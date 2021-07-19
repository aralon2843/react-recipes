import { StyledItem, StyledList, StyledLogo, StyledSideBar } from './Styles'
import meatIcon from '../../assets/logo/steak.svg'
import vegetarianIcon from '../../assets/logo/diet.svg'
import drinkIcon from '../../assets/logo/drink.svg'
import favoriteIcon from '../../assets/logo/star.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveCategory } from '../../redux/actionCreators/mainPage'

const SideBar = () => {
  const categories = [
    'Main courses',
    'Soups',
    'Salads',
    'Desserts',
    'Drinks',
    'Favorites',
  ]
  const icons = [meatIcon, vegetarianIcon, drinkIcon, favoriteIcon]

  const dispatch = useDispatch()

  const onCategoryClick = (category) => {
    dispatch(setActiveCategory(category))
  }

  const activeCategory = useSelector((state) => state.mainPage.activeCategory)
  console.log(activeCategory)

  return (
    <StyledSideBar>
      <StyledLogo>
        <span>react</span>
        {'recipes>_'}
      </StyledLogo>
      <StyledList>
        {categories.map((category, i) => (
          <StyledItem
            active={activeCategory === category.toLowerCase()}
            icon={icons[i]}
            onClick={() => onCategoryClick(category.toLowerCase())}
            key={category}
          >
            {category}
          </StyledItem>
        ))}
      </StyledList>
    </StyledSideBar>
  )
}

export default SideBar
