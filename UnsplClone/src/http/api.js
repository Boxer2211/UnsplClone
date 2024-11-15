import axios from 'axios'
import { ACCESS_KEY, API_BASE_URL } from 'src/http/constants'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`
  }
})

export const getPhotosByPage = async (query, page = 1) => {
  try {
    const response = await api.get('/photos', {
      params: {
        page,
        per_page: 10
      }
    })
    return response.data
  } catch (error) {
    console.error('Error fetching:', error)
    throw error
  }
}

export const getPhotoById = async id => {
  try {
    const response = await api.get(`/photos/${id}`)
    return response.data
  } catch (error) {
    console.error('Error fetching:', error)
    throw error
  }
}

export const searchPhotos = async (query, page = 1) => {
  try {
    const response = await api.get('/search/photos', {
      params: {
        query,
        page,
        per_page: 10
      }
    })
    return response.data.results
  } catch (error) {
    console.error('Error fetching collections:', error)
    throw error
  }
}

export const searchPhotoCollections = async (query, page = 1) => {
  try {
    const response = await api.get('/search/collections', {
      params: {
        query,
        page,
        per_page: 10
      }
    })
    return response.data.results
  } catch (error) {
    console.error('Error fetching collections:', error)
    throw error
  }
}
