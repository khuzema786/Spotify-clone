export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "134632d6aea245a2920a2d0e92d23016";

// Functionalities performed which are under the scope of spotify API
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  // #access_token=BQAizygddFqmxUpLjD3oUDED0d3_-hWNyg5g7wzIL6y6ZkHY3vndbD24K7CERfiIa7qERI3ok67qYAae1g2zLDgLHwZ4gs7e4mEYxZdeiSGoQ6hIBLyoEJZWmXO_omjJ5RQskHYfL6JkydU6XPN8VUVGDq9x5kQ&token_type=Bearer
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      // stringify
      return initial; // {"access_token":"BQAizygddFqmxUpLjD3oUDED0d3_-hWNyg5g7wzIL6y6ZkHY3vndbD24K7CERfiIa7qERI3ok67qYAae1g2zLDgLHwZ4gs7e4mEYxZdeiSGoQ6hIBLyoEJZWmXO_omjJ5RQskHYfL6JkydU6XPN8VUVGDq9x5kQ"}
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
