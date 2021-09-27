import {
  Burger,
  Navigation,
  StyledItem,
  StyledList,
  StyledLogo,
  StyledSideBar,
} from './Styles';
import mainCourseIcon from '../../assets/img/main-course.png';
import soupIcon from '../../assets/img/soup.png';
import saladIcon from '../../assets/img/broccoli.png';
import dessertIcon from '../../assets/img/dessert.png';
import drinkIcon from '../../assets/img/drink.png';
import logo from '../../assets/img/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategory } from '../../redux/actionCreators/mainPage';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Search from '../Search/Search';

const SideBar = () => {
  const categories = ['Main course', 'Soup', 'Salad', 'Dessert', 'Drink'];
  const icons = [mainCourseIcon, soupIcon, saladIcon, dessertIcon, drinkIcon];

  const dispatch = useDispatch();

  const onCategoryClick = (category) => {
    dispatch(setActiveCategory(category));
  };

  const activeCategory = useSelector((state) => state.mainPage.activeCategory);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
      document.querySelector('body').style.overflow = 'auto';
    } else {
      setMenuOpen(true);
      document.querySelector('body').style.overflow = 'hidden';
    }
  };

  return (
    <StyledSideBar>
      <Navigation>
        <Link to='/'>
          <StyledLogo src={logo} />
        </Link>
        <Search />
        <StyledList isOpen={menuOpen}>
          {categories.map((category, i) => (
            <StyledItem
              active={activeCategory === category.toLowerCase()}
              icon={icons[i]}
              onClick={() => {
                onCategoryClick(category.toLowerCase());
                menuOpen && toggleMenu();
              }}
              key={category}>
              <Link to='/'>{category + 's'}</Link>
            </StyledItem>
          ))}
        </StyledList>
        <Burger onClick={toggleMenu} isOpen={menuOpen}>
          <span />
        </Burger>
      </Navigation>
    </StyledSideBar>
  );
};

export default SideBar;
