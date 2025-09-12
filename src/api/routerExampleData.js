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
