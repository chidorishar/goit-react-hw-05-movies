import axios from 'axios';

const API_KEY = 'a7cdca3ac9a73d688c9dec2c3c2e067b';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function getTrendingMovies() {
  let response = null;

  try {
    response = await axios(`trending/all/day?api_key=${API_KEY}`);
  } catch (error) {
    console.log(`Error! Server responded with status: ${response?.status}. 
    Error message: ${error.message}`);

    return;
  }

  console.log(response.data);
  return response.data.results;
}

export async function getMovieDetailByID(ID) {
  let response = null;

  //try to fetch movie`s data
  try {
    response = await axios(`movie/${ID}?api_key=${API_KEY}`);
  } catch (error) {
    if (error.code !== 'ERR_BAD_REQUEST') {
      console.log(`Error! Server responded with status: ${error.code}. 
    Error message: ${error.message}`);

      return null;
    }
  }
  //fetched successfully return response`s data
  if (response) return response.data;

  //else try to fetch tv series` data
  try {
    response = await axios(`tv/${ID}?api_key=${API_KEY}`);
  } catch (error) {
    console.log(`Error! Server responded with status: ${error.code}. 
    Error message: ${error.message}`);

    return null;
  }

  return response.data;
}
