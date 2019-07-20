import { fetchMovies } from './apiCalls';
import { apiKey } from '../apiKey'
import { async } from 'q';

describe('Fetch Movies', () => {
  let mockResponse;

  beforeEach(() => {
    mockResponse = {
      results: [{
        adult: false,
        backdrop_path: "/dihW2yTsvQlust7mSuAqJDtqW7k.jpg",
        genre_ids: Array[3],
        id: 429617,
        original_language: "en",
        original_title: "Spider-Man: Far from Home",
        overview: "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural d…",
        popularity: 461.454,
        poster_path: "/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg",
        release_date: "2019-06-28",
        title: "Spider-Man: Far from Home",
        video: false,
        vote_average: 7.8,
        vote_count: 1815
      }]
    };

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should be able to fetch movies given url', () => {
    const expected = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}edd&language=en-US&page=1`

    fetchMovies()
    expect(window.fetch).toHaveBeenCalledWith(expected)
  });

  it('should return parsed response if ok', async () => {
    await expect(fetchMovies()).resolves.toEqual(mockResponse.results)
  });

  it('should return an error if not promise does not resolve', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });

    expect(fetchMovies()).resolves.toEqual(Error(''))
  });
});
