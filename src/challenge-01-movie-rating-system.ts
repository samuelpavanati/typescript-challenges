type Movie = {
  name: string
  genre: string
  rating: number // 1 to 5
  views: number
}

const data = [
	{ 'name': 'Until Tomorrow', 'genre': 'Romance', 'rating': 5, 'views': 1254 },
	{ 'name': 'Last Day', 'genre': 'Action', 'rating': 4, 'views': 3200 },
	{ 'name': 'Turbocharged', 'genre': 'Action', 'rating': 3, 'views': 1254 },
	{ 'name': 'Last Love', 'genre': 'Romance', 'rating': 1, 'views': 10552 },
	{ 'name': 'My First Love', 'genre': 'Romance', 'rating': 5, 'views': 12333 },
	{ 'name': 'Old Year', 'genre': 'War', 'rating': 2, 'views': 931 }
]

function addMovie(movies: Movie[], movie: Movie): Movie[] {
	movies.push(movie)
	return movies
}

function removeMovie(movies: Movie[], name: string): Movie[] {
	return movies.filter(movie => movie.name !== name)
}

function filterByGenre(movies: Movie[], genre: string): Movie[] {
	return movies.filter(movie => movie.genre === genre)
}

function filterByMinimumRating(movies: Movie[], rating: number): Movie[] {
	return movies.filter(movie => movie.rating >= rating)
}

function filterTheBestMovieByGenre1(movies: Movie[], genre: string): Movie[] {
	const moviesByGenre = movies.filter(movie => movie.genre === genre)

	let maxValue = 0
	let movieName: string
	for (const movie of moviesByGenre) {
		if (movie.rating > maxValue) {
			maxValue = movie.rating
			movieName = movie.name
		}
	}

	return movies.filter(movie => movie.name === movieName)
}

function filterTheBestMovieByGenre2(movies: Movie[], genre: string): Movie | undefined {
	let bestMovie: Movie | undefined
	for (const movie of movies) {
		if (movie.genre === genre && (!bestMovie || movie.rating > bestMovie.rating)) {
			bestMovie = movie
		}
	}
	return bestMovie
}

function filterTheBestMovieByGenre3(movies: Movie[], genre: string): Movie | undefined {
	const moviesByGenre = movies.filter(movie => movie.genre === genre)
  
	if (moviesByGenre.length === 0) {
		return undefined
	}
	
	const bestMovie = moviesByGenre.reduce((prev, curr) => prev.rating > curr.rating ? prev : curr)
	
	return bestMovie
}

function filterTheBestMoviesByGenre(movies: Movie[], genre: string): Movie[] {
	const moviesByGenre = movies.filter(movie => movie.genre === genre)
	
	if (moviesByGenre.length === 0) {
		return []
	}
	
	const maxRating = Math.max(...moviesByGenre.map(movie => movie.rating))
	const bestMovies = moviesByGenre.filter(movie => movie.rating === maxRating)
	
	return bestMovies
}

function filterMoviesWithMoreViews1(movies: Movie[]): Movie {
	let moreViews = 0

	const movie = movies.findIndex(movie => movie.views > moreViews ? moreViews = movie.views : moreViews)

	return movies[movie]
}

function filterMoviesWithMoreViews2(movies: Movie[]): Movie[] {
	let moreViews = 0

	for (const movie of movies) {
		if (movie.views > moreViews) {
			moreViews = movie.views
		}
	}

	return movies.filter(movie => movie.views === moreViews)
}

const movieToBeAdded = { 'name': 'Cars', 'genre': 'Action', 'rating': 3, 'views': 123 }
const movieToBeRemoved = 'Old Year'
const genreToBeFiltered = 'Romance'
const ratingToBeFiltered = 3

console.log(`\nAdding the movie ${movieToBeAdded.name}\n`, addMovie(data, movieToBeAdded))
console.log(`\nRemoving the movie ${movieToBeRemoved}\n`, removeMovie(data, movieToBeRemoved))
console.log(`\nFilter movies by genre ${genreToBeFiltered}\n`, filterByGenre(data, genreToBeFiltered))
console.log(`\nFilter movies by rating ${ratingToBeFiltered}\n`, filterByMinimumRating(data, ratingToBeFiltered))
console.log(`\n1. Filter the best movie by genre ${genreToBeFiltered}\n`, filterTheBestMovieByGenre1(data, genreToBeFiltered))
console.log(`\n2. Filter the best movie by genre ${genreToBeFiltered}\n`, filterTheBestMovieByGenre2(data, genreToBeFiltered))
console.log(`\n3. Filter the best movie by genre ${genreToBeFiltered}\n`, filterTheBestMovieByGenre3(data, genreToBeFiltered))
console.log(`\nFilter the best movies by genre ${genreToBeFiltered}\n`, filterTheBestMoviesByGenre(data, genreToBeFiltered))
console.log('\n1. Filter movie with more views \n', filterMoviesWithMoreViews1(data))
console.log('\n2. Filter movie with more views \n', filterMoviesWithMoreViews2(data))
