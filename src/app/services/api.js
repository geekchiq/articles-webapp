const baseURL = 'https://jsonplaceholder.typicode.com'

const fetchData = async (endpoint) => {
  const response = await fetch(`${baseURL}/${endpoint}`)

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`)
  }
  const data = await response.json()
  return data
}

const callApi = async (endpoint, method, payload) => {
  const response = await fetch(`${baseURL}/${endpoint}`, {
    method: method.toUpperCase(),
    body: JSON.stringify(payload)
  })

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`)
  }

  const data = await response.json()
  return data
}

export { fetchData, callApi }
