import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StyledSearchSuggestions, StyledSearchSuggestion } from './Styles';
import { LoaderWrapper } from '../../common/LoaderWrapper';
import loader from '../../assets/loader.png';

const SearchSuggestions = ({ searchSuggestions, hideSuggests }) => {
  const isLoaded = useSelector((state) => state.search.isLoaded);

  return (
    <StyledSearchSuggestions>
      {isLoaded ? (
        searchSuggestions.map((suggestion) => (
          <StyledSearchSuggestion onClick={hideSuggests} key={suggestion.id}>
            <Link to={`/react-recipes/recipe${suggestion.id}`}>{suggestion.title}</Link>
          </StyledSearchSuggestion>
        ))
      ) : (
        <LoaderWrapper>
          <img src={loader} alt='loading...' />
        </LoaderWrapper>
      )}
    </StyledSearchSuggestions>
  );
};

export default SearchSuggestions;
