import { API_KEY, BASE_URL } from '../config/api_config'

/** ------------------------- Movie and TV Series List API Call ---------------------- **/
export const getMediaData = async (mediaType, mediaCategory) => {

    const url = `${BASE_URL}/${mediaType}/${mediaCategory}?api_key=${API_KEY}`;
    console.log(url);
    const apiCall = await fetch(url);
    const result = await apiCall.json();
    
    const mediaListJson = await result.results

    return mediaListJson

}

/** ----------------------------------- Search Query --------------------------------- **/
export const searchMediaData = async (searchType, searchQuery) => {
    const url = `${BASE_URL}/search/${searchType}?api_key=${API_KEY}&query=${searchQuery}`
  
    const apiCall = await fetch(url)
  
    const result = await apiCall.json()
  
    const searchedMediaList = await result.results
  
    return searchedMediaList
  }