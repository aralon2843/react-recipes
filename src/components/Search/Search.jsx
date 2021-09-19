import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipesBySearchRequest } from '../../redux/actionCreators/mainPage';
import { StyledSearch } from './Styles';

const Search = () => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState('');

  const onChangeHandler = (value) => {
    console.log(value);
    setSearchValue(value);
  };

  const onSubmitHandler = (e, searchValue) => {
    e.preventDefault();
    dispatch(getRecipesBySearchRequest(searchValue));
  };

  return (
    <form onSubmit={(e) => onSubmitHandler(e, searchValue)}>
      <StyledSearch
        type='text'
        placeholder='Search by food name'
        onChange={(e) => onChangeHandler(e.target.value)}
        value={searchValue}
      />
    </form>
  );
};

export default Search;
