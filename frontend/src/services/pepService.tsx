import axios from "axios";

export async function pepSearchPerson(name: string) {
  axios.defaults.baseURL = 'https://code-challenge.stacc.dev/api/pep'
  let response = await axios.get('?name=' + name)
  return response.data
}

export async function pepSearchOrganization(orgNr: string) {
  axios.defaults.baseURL = 'https://code-challenge.stacc.dev/api/enheter'
  let response = await axios.get('?orgNr=' + orgNr)
  return response.data
}

export async function pepSearchRoles(orgNr: string) {
  axios.defaults.baseURL = 'https://code-challenge.stacc.dev/api/roller'
  let response = await axios.get('?orgNr=' + orgNr)
  return response.data
}