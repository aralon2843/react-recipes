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

  const formRef = useRef();

  const onChangeHandler = (value) => {
    setSearchText(value);
    if (value === '') {
      dispatch(getSearchAutocompleteRequest(''));
      hideSuggests();
    } else {
      dispatch(getSearchAutocompleteRequest(searchText));
      showSuggests();
    }
  };

  const onSubmitHandler = (e, searchText) => {
    e.preventDefault();
    dispatch(getRecipesBySearchRequest(searchText));
    dispatch(setSearchValue(searchText));
    history.push('/');
    hideSuggests();
    dispatch(getSearchAutocompleteRequest(''));
  };

  const hideSuggests = () => {
    setSuggestsVisible(false);
  };

  const showSuggests = () => {
    setSuggestsVisible(true);
  };

  useEffect(() => {
    const listener = (e) => {
      e.path.includes(formRef.current) && !isSuggestsVisible
        ? showSuggests()
        : hideSuggests();
    };
    document.body.addEventListener('click', listener);
    return () => {
      document.body.removeEventListener('click', listener);
    };
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
        {searchSuggestions.length > 0 && isSuggestsVisible && (
          <SearchSuggestions
            searchSuggestions={searchSuggestions}
            hideSuggests={hideSuggests}
          />
        )}
      </StyledSearchWrapper>
    </StyledForm>
  );
};

export default Search;
