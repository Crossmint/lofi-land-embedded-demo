import React from 'react';

const TrendingSongs = () => {
  const songs = [
    {
      image: '/1.png',
      title: 'Raindrop Serenade',
    },
    {
      image: '/2.png',
      title: 'Midnight Pulsee',
    },
    {
      image: '/3.png',
      title: 'Warm Cosy',
      description: 'Sketch of Spring'
    },
    {
      image: '/4.png',
      title: 'Cafe Reverie',
    },
    {
      image: '/5.png',
      title: 'Cafe Vibes',
    },
    {
      image: '/6.png',
      title: 'Ninja Vibes',
    },
  ];

  return (
    <div className="trending-songs-section pt-5">
      <h1 className="text-center mb-2 title">Trending Lofi Songs</h1>
      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in volutpat mauris.</p>
      <div className="row">
        {songs.map((song, index) => (
          <div key={index} className="col-md-2 songs">
            <a href="#" className="card-link">
              <div className="h-100 px-0 py-0">
                <img src={song.image} className="image-trending" alt={song.title} />
                <div className="body">
                  <h5 className="title mt-3">{song.title}</h5>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingSongs;