import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { getRecipesBySearchRequest } from '../../redux/actionCreators/mainPage';
import { setSearchValue } from '../../redux/actionCreators/search';
import { StyledSearch } from './Styles';

const Search = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('');

  const onChangeHandler = (value) => {
    setSearchText(value);
  };

  const onSubmitHandler = (e, searchText) => {
    e.preventDefault();
    dispatch(getRecipesBySearchRequest(searchText));
    dispatch(setSearchValue(searchText));
    history.push('/');
  };

  return (
    <form onSubmit={(e) => onSubmitHandler(e, searchText)}>
      <StyledSearch
        type='text'
        placeholder='Search by food name'
        onChange={(e) => onChangeHandler(e.target.value)}
        value={searchText}
      />
    </form>
  );
};

export default Search;
