import axios from 'axios'

export const getGithubUser = username => {
  return axios.get('https://api.github.com/users/' + username)
}
