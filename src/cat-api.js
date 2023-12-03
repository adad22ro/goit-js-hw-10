import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_xkrJRTCL8NqsvizM7aCqgHgY4SDyOjG58uF0d9oVGH9pd9WqA1ppdpaBc6kpZR4x';
export function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching breeds:', error);
      throw error;
    });
}
export function fetchCatByBreed(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data[0])
    .catch(error => {
      console.error('Error fetching cat by breed:', error);
      throw error;
    });
}
