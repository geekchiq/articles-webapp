const baseURL = 'https://jsonplaceholder.typicode.com'

const headers = {
  'Content-Type': 'application/json'
}

const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${baseURL}/${endpoint}`, { headers })
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`)
    }
    return response.json()
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error // Re-throw the error for handling in the component
  }
}

const getPosts = async () => {
  return await fetchData('posts')
}

export { getPosts }
