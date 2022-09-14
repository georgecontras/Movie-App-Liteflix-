export const getPopularMovies = async() => {
	try {
		const response = await fetch(`${window.location.protocol}https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20${process.env.REACT_APP_MOVIE_DB_API_KEY}`)
		const data = await response.json()
		return data?.results
	} 
	catch(error) {
		alert(error)
	}
}

export const getFeaturedMovies = async() => {
	try {
		const response = await fetch(`${window.location.protocol}https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20${process.env.REACT_APP_MOVIE_DB_API_KEY}`)
		const data = await response.json()
		return data?.results
	} 
	catch (error) {
		alert(error)
	}
}