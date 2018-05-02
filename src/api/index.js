import axios from 'axios'

export function getGithubUser(username) {
  return axios.get('"https://api.github.com/users/" + username')
}
