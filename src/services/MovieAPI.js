import axios from 'axios';

const API_KEY = 'a7cdca3ac9a73d688c9dec2c3c2e067b';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function getTrendingMovies() {
  const response = await getDataByRequest(
    `trending/all/day?api_key=${API_KEY}`
  );

  return response.data.results;
}

export async function getMoviesByName(name) {
  const response = await getDataByRequest(
    `search/movie?api_key=${API_KEY}&query=${name}`
  );

  return response.data.results;
}

export async function getMovieDetailsByID(ID) {
  const requests = [
    `movie/${ID}?api_key=${API_KEY}`,
    `tv/${ID}?api_key=${API_KEY}`,
  ];

  const response = await getMovieDetails(requests);

  return response?.data;
}

export async function getMovieReviewsByID(ID) {
  const requests = [
    `movie/${ID}/reviews?api_key=${API_KEY}`,
    `tv/${ID}/reviews?api_key=${API_KEY}`,
  ];

  const response = await getMovieDetails(requests);

  return response?.data?.results;
}

export async function getMovieCastByID(ID) {
  const requests = [
    `movie/${ID}/credits?api_key=${API_KEY}`,
    `tv/${ID}/credits?api_key=${API_KEY}`,
  ];

  const response = await getMovieDetails(requests);

  return response?.data?.cast;
}

async function getMovieDetails(requests) {
  let response = null;

  for (const request of requests) {
    response = await getDataByRequest(request);
    if (response) break;
  }

  return response;
}

async function getDataByRequest(request) {
  let response = null;

  try {
    response = await axios(request);
  } catch (error) {
    console.log(`Error! Server responded with status: ${error.code}. 
    Error message: ${error.message}`);

    return null;
  }

  return response;
}
