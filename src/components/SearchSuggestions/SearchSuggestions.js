import { Link } from 'react-router-dom';
import {
  StyledSearchSuggestions,
  StyledSearchSuggestion,
  StyledSuggestionTitle,
} from './Styles';

const SearchSuggestions = ({ searchSuggestions, isVisible, hideSuggests }) => {
  return isVisible ? (
    <StyledSearchSuggestions>
      {searchSuggestions.map((suggestion) => (
        <Link to={`/recipe${suggestion.id}`}>
          <StyledSearchSuggestion onClick={hideSuggests}>
            <StyledSuggestionTitle> {suggestion.title}</StyledSuggestionTitle>
          </StyledSearchSuggestion>
        </Link>
      ))}
    </StyledSearchSuggestions>
  ) : null;
};

export default SearchSuggestions;
