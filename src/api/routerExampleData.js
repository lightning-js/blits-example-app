export const getMovies = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const movies = [
        {
          id: 1,
          title: 'Blade Runner 2049',
          director: 'Denis Villeneuve',
          genre: 'Sci-Fi',
          year: 2017,
          colorPalette: ['neon blue', 'orange', 'grey'],
          mood: 'Futuristic, melancholic',
          imageUrl: 'https://example.com/blade-runner.jpg',
        },
        {
          id: 2,
          title: 'The Grand Budapest Hotel',
          director: 'Wes Anderson',
          genre: 'Comedy/Drama',
          year: 2014,
          colorPalette: ['pastel pink', 'lavender', 'gold'],
          mood: 'Whimsical, nostalgic',
          imageUrl: 'https://example.com/grand-budapest.jpg',
        },
        {
          id: 3,
          title: 'Mad Max: Fury Road',
          director: 'George Miller',
          genre: 'Action',
          year: 2015,
          colorPalette: ['desert orange', 'steel blue', 'black'],
          mood: 'Intense, chaotic',
          imageUrl: 'https://example.com/mad-max.jpg',
        },
        {
          id: 4,
          title: 'Moonlight',
          director: 'Barry Jenkins',
          genre: 'Drama',
          year: 2016,
          colorPalette: ['deep blue', 'purple', 'soft pink'],
          mood: 'Emotional, intimate',
          imageUrl: 'https://example.com/moonlight.jpg',
        },
        {
          id: 5,
          title: 'Life of Pi',
          director: 'Ang Lee',
          genre: 'Adventure/Drama',
          year: 2012,
          colorPalette: ['sunset orange', 'ocean blue', 'white'],
          mood: 'Spiritual, surreal',
          imageUrl: 'https://example.com/life-of-pi.jpg',
        },
      ]
      resolve(movies)
    }, 200)
  })
}

export const getTvShows = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tvShows = [
        {
          id: 1,
          title: 'Breaking Bad',
          creator: 'Vince Gilligan',
          genre: 'Crime/Drama',
          year: 2008,
          seasons: 5,
          episodes: 8,
          status: 'Completed',
          rating: '9.5/10',
          mood: 'Intense, dark, character-driven',
          colorPalette: ['dark green', 'yellow', 'black'],
          imageUrl: 'https://example.com/breaking-bad.jpg',
        },
        {
          id: 2,
          title: 'The Office',
          creator: 'Greg Daniels',
          genre: 'Comedy',
          year: 2005,
          seasons: 4,
          episodes: 8,
          status: 'Completed',
          rating: '8.9/10',
          mood: 'Hilarious, heartwarming, cringe comedy',
          colorPalette: ['office blue', 'beige', 'white'],
          imageUrl: 'https://example.com/the-office.jpg',
        },
        {
          id: 3,
          title: 'Stranger Things',
          creator: 'The Duffer Brothers',
          genre: 'Sci-Fi/Horror',
          year: 2016,
          seasons: 4,
          episodes: 8,
          status: 'Ongoing',
          rating: '8.7/10',
          mood: 'Nostalgic, mysterious, thrilling',
          colorPalette: ['neon pink', 'dark blue', 'purple'],
          imageUrl: 'https://example.com/stranger-things.jpg',
        },
        {
          id: 4,
          title: 'Game of Thrones',
          creator: 'David Benioff & D.B. Weiss',
          genre: 'Fantasy/Drama',
          year: 2011,
          seasons: 3,
          episodes: 8,
          status: 'Completed',
          rating: '9.3/10',
          mood: 'Epic, political, brutal',
          colorPalette: ['royal blue', 'gold', 'dark red'],
          imageUrl: 'https://example.com/game-of-thrones.jpg',
        },
        {
          id: 5,
          title: 'The Mandalorian',
          creator: 'Jon Favreau',
          genre: 'Sci-Fi/Western',
          year: 2019,
          seasons: 2,
          episodes: 8,
          status: 'Ongoing',
          rating: '8.7/10',
          mood: 'Adventure, family-friendly, space western',
          colorPalette: ['beskar silver', 'desert tan', 'space black'],
          imageUrl: 'https://example.com/mandalorian.jpg',
        },
        {
          id: 6,
          title: 'The Crown',
          creator: 'Peter Morgan',
          genre: 'Historical Drama',
          year: 2016,
          seasons: 5,
          episodes: 8,
          status: 'Completed',
          rating: '8.6/10',
          mood: 'Regal, dramatic, historical',
          colorPalette: ['royal purple', 'gold', 'cream'],
          imageUrl: 'https://example.com/the-crown.jpg',
        },
      ]
      resolve(tvShows)
    }, 200)
  })
}