import axios from "axios";

axios.defaults.baseURL = 'https://code-challenge.stacc.dev/api/'

export async function pepSearchPerson(name: string) {
  try {
    const { data: response } = await axios.get('pep?name=' + name)
    return response.hits
  } catch (error) {
    console.log(error)
  }
}


export async function pepSearchOrganization(orgNr: string) {
  try {
    const { data: response } = await axios.get('enheter?orgNr=' + orgNr)
    return [response]
  } catch (error) {
    console.log(error)
  }
}

export async function pepSearchRoles(orgNr: string) {
  try {
    const { data: response } = await axios.get('roller?orgNr=' + orgNr)
    return response
  } catch (error) {
    console.log(error)
  }
}
