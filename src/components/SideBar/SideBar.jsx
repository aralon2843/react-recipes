import { StyledItem, StyledList, StyledLogo, StyledSideBar } from './Styles'
import popularIcon from '../../assets/logo/popularity.svg'
import meatIcon from '../../assets/logo/steak.svg'
import vegetarianIcon from '../../assets/logo/diet.svg'
import drinkIcon from '../../assets/logo/drink.svg'
import favoriteIcon from '../../assets/logo/star.svg'
import { useState } from 'react'

const SideBar = () => {
  const categories = ['Popular', 'Meat', 'Vegetarian', 'Drinks', 'Favorites']
  const icons = [popularIcon, meatIcon, vegetarianIcon, drinkIcon, favoriteIcon]

  const [activeCategory, setActiveCategory] = useState(categories[0])

  const onCategoryClick = (category) => {
    setActiveCategory(category)
  }

  return (
    <StyledSideBar>
      <StyledLogo>
      <span>react</span>{'recipes>_'}
      </StyledLogo>
      <StyledList>
        {categories.map((category, i) => (
          <StyledItem
            active={activeCategory === category}
            icon={icons[i]}
            onClick={() => onCategoryClick(category)}
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
