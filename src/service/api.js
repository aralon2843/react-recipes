import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes/',
})

const API = {
  getRecipesByCategory(category) {
    return axiosInstance
      .get(
        `complexSearch?type=${category}&instructionsRequired=true&addRecipeInformation=true&number=11&apiKey=25e990ca867d460fb39b86a74eeaa699`
      )
      .then((response) => response.data.results)
  },
  getNextRecipesByCategory(category, offset) {
    console.log(category, offset)
    return axiosInstance
      .get(
        `complexSearch?type=${category}&instructionsRequired=true&addRecipeInformation=true&number=11&offset=${offset}&apiKey=25e990ca867d460fb39b86a74eeaa699`
      )
      .then((response) => response.data.results)
  },
}

export default API
