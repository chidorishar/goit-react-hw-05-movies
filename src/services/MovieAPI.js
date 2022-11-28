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

  return response?.data;
}

async function getMovieDetails(requests) {
  let response = null;

  for (const request of requests) {
    try {
      response = await axios(request);
      if (response) break;
    } catch (error) {
      if (error.code !== 'ERR_BAD_REQUEST') {
        console.log(
          `Error! Server responded with status: ${error.code}. Error message: ${error.message}`
        );

        return null;
      }
    }
  }

  return response;
}
