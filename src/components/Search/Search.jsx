import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getRecipesBySearchRequest } from '../../redux/actionCreators/mainPage';
import {
  getSearchAutocompleteRequest,
  setSearchValue,
} from '../../redux/actionCreators/search';
import SearchSuggestions from '../SearchSuggestions/SearchSuggestions';
import { StyledSearch, StyledSearchWrapper, StyledForm } from './Styles';

const Search = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const searchSuggestions = useSelector((state) => state.search.autocomplete);
  const [isSuggestsVisible, setSuggestsVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const onChangeHandler = (value) => {
    setSearchText(value);
    if (value === '') {
      dispatch(getSearchAutocompleteRequest(''));
      setSuggestsVisible(false);
    } else {
      dispatch(getSearchAutocompleteRequest(searchText));
      setSuggestsVisible(true);
    }
  };

  const onSubmitHandler = (e, searchText) => {
    e.preventDefault();
    dispatch(getRecipesBySearchRequest(searchText));
    dispatch(setSearchValue(searchText));
    history.push('/');
    setSuggestsVisible(false);
    dispatch(getSearchAutocompleteRequest(''));
  };

  const formRef = useRef();

  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      e.path.includes(formRef.current)
        ? setSuggestsVisible(true)
        : setSuggestsVisible(false);
    });
  });

  return (
    <StyledForm onSubmit={(e) => onSubmitHandler(e, searchText)} ref={formRef}>
      <StyledSearchWrapper>
        <StyledSearch
          type='text'
          placeholder='Search by food name'
          onChange={(e) => onChangeHandler(e.target.value)}
          value={searchText}
        />
        {searchSuggestions.length > 0 && (
          <SearchSuggestions
            searchSuggestions={searchSuggestions}
            isVisible={isSuggestsVisible}
            hideSuggests={() => setSuggestsVisible(false)}
          />
        )}
      </StyledSearchWrapper>
    </StyledForm>
  );
};

export default Search;
