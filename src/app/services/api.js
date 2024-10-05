const baseURL = 'https://jsonplaceholder.typicode.com'

const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${baseURL}/${endpoint}`)

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`)
    }
    return response.json()
  } catch (error) {
    return null
    console.error('Error fetching data:', error)
  }
}

const callApi = async (endpoint, method, payload) => {
  try {
    const response = await fetch(`${baseURL}/${endpoint}`, {
      method: method.toUpperCase(),
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('API error:', error)
  }
}

export { fetchData, callApi }
