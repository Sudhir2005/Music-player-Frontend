import axios from 'axios';
import queryString from 'query-string';

const clientId = '12103010db054e7d9913f4c640ca973b';
const clientSecret = '4ce150dcfb55493b8bf85c195d5e6d45';
const authEndpoint = 'https://accounts.spotify.com/api/token';
const apiEndpoint = 'https://api.spotify.com/v1';

let accessToken = '';

const getAccessToken = async () => {
  const response = await axios.post(authEndpoint, queryString.stringify({
    grant_type: 'client_credentials',
  }), {
    headers: {
      'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  accessToken = response.data.access_token;
};

const searchTracks = async (query) => {
  if (!accessToken) {
    await getAccessToken();
  }

  const response = await axios.get(`${apiEndpoint}/search`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
    params: {
      q: query,
      type: 'track',
    },
  });

  return response.data.tracks.items;
};

export default { searchTracks };
