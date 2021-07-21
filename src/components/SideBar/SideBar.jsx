import { StyledItem, StyledList, StyledLogo, StyledSideBar } from './Styles'
import mainCourseIcon from '../../assets/logo/main-course.png'
import soupIcon from '../../assets/logo/soup.png'
import saladIcon from '../../assets/logo/broccoli.png'
import dessertIcon from '../../assets/logo/dessert.png'
import drinkIcon from '../../assets/logo/drink.png'
import favoritesIcon from '../../assets/logo/star.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveCategory } from '../../redux/actionCreators/mainPage'

const SideBar = () => {
  const categories = ['Main course', 'Soup', 'Salad', 'Dessert', 'Drink']
  const icons = [mainCourseIcon, soupIcon, saladIcon, dessertIcon, drinkIcon]

  const dispatch = useDispatch()

  const onCategoryClick = (category) => {
    dispatch(setActiveCategory(category))
  }

  const activeCategory = useSelector((state) => state.mainPage.activeCategory)

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
            key={category}>
            {category + 's'}
          </StyledItem>
        ))}
        <StyledItem icon={favoritesIcon}>Favorites</StyledItem>
      </StyledList>
    </StyledSideBar>
  )
}

export default SideBar
