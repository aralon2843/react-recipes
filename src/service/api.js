import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes/',
});

const API = {
  getRecipesByCategory(category) {
    return axiosInstance
      .get(
        `complexSearch?type=${category}&instructionsRequired=true&addRecipeInformation=true&number=11&apiKey=25e990ca867d460fb39b86a74eeaa699`
      )
      .then((response) => response.data.results);
  },
  getNextRecipesByCategory(category, offset) {
    console.log(category, offset);
    return axiosInstance
      .get(
        `complexSearch?type=${category}&instructionsRequired=true&addRecipeInformation=true&number=11&offset=${offset}&apiKey=25e990ca867d460fb39b86a74eeaa699`
      )
      .then((response) => response.data.results);
  },
  getRecipeInformationById(id) {
    return axiosInstance
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=25e990ca867d460fb39b86a74eeaa699`
      )
      .then((response) => response.data);
  },
  getRecipesBySearch(searchValue) {
    return axiosInstance
      .get(
        `complexSearch?query=${searchValue}&&instructionsRequired=true&addRecipeInformation=true&number=11&apiKey=25e990ca867d460fb39b86a74eeaa699`
      )
      .then((response) => response.data.results);
  },
  getNextRecipesBySearch(searchValue, offset) {
    return axiosInstance
      .get(
        `complexSearch?query=${searchValue}&instructionsRequired=true&addRecipeInformation=true&number=11&offset=${offset}&apiKey=25e990ca867d460fb39b86a74eeaa699`
      )
      .then((response) => response.data.results);
  },
  getSearchAutocomplete(searchValue) {
    return axiosInstance
      .get(
        `autocomplete?number=5&query=${searchValue}&apiKey=25e990ca867d460fb39b86a74eeaa699`
      )
      .then((response) => response.data);
  },
};

export default API;
