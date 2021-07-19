import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes/',
})

const API = {
  getRecipesByCategory(category) {
    return axiosInstance
      .get(
        `complexSearch?tags=${category}&instructionsRequired=true&addRecipeInformation=true&apiKey=4fdcbfb4481d4b23a16a4534d9c3fb28`
      )
      .then((response) => response.data.results)
  },
}

export default API
