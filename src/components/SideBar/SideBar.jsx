import { StyledItem, StyledList, StyledLogo, StyledSideBar } from './Styles';
import mainCourseIcon from '../../assets/img/main-course.png';
import soupIcon from '../../assets/img/soup.png';
import saladIcon from '../../assets/img/broccoli.png';
import dessertIcon from '../../assets/img/dessert.png';
import drinkIcon from '../../assets/img/drink.png';
import logo from '../../assets/img/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategory } from '../../redux/actionCreators/mainPage';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const categories = ['Main course', 'Soup', 'Salad', 'Dessert', 'Drink'];
  const icons = [mainCourseIcon, soupIcon, saladIcon, dessertIcon, drinkIcon];

  const dispatch = useDispatch();

  const onCategoryClick = (category) => {
    dispatch(setActiveCategory(category));
  };

  const activeCategory = useSelector((state) => state.mainPage.activeCategory);

  return (
    <StyledSideBar>
      <Link to='/'>
        <StyledLogo src={logo} />
      </Link>
      <StyledList>
        {categories.map((category, i) => (
          <StyledItem
            active={activeCategory === category.toLowerCase()}
            icon={icons[i]}
            onClick={() => onCategoryClick(category.toLowerCase())}
            key={category}>
            <Link to='/'>{category + 's'}</Link>
          </StyledItem>
        ))}
      </StyledList>
    </StyledSideBar>
  );
};

export default SideBar;
