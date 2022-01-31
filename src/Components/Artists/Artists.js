import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Artists.css';
import { useParams } from 'react-router-dom';
import { Spinner } from 'reactstrap';

function Artists() {
  let params = useParams();
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    setLoading(true);
    axios
      .get(`https://musicdb-api.herokuapp.com/artists/${params.id}`)
      .then((res) => {
        setLoading(false);
        setArtist({ ...res.data });
      })
      .catch((e) => console.log('error', e));
  }

  function convertSeconds(seconds) {
    var convert = function (x) {
      return x < 10 ? '0' + x : x;
    };
    return convert(parseInt((seconds / 60) % 60)) + ':' + convert(seconds % 60);
  }

  return (
    <div className="content-container">
      {loading && (
        <div className="spinner-container">
          <Spinner type="grow" color="warning" />
        </div>
      )}
      {artist && (
        <>
          <div className="artist-container">
            <div className="container-left">
              <div className="name">{artist.name}</div>
              <div className="fans">
                <span>{artist.nb_fan}</span> <span> fans</span>
              </div>
              <div className="divider"></div>
              <div className="description">Long description go here and many more lines</div>
            </div>
            <div className="container-right">
              <div className="subheading">Top tracks</div>
              {artist.tracklist &&
                artist.tracklist.splice(0, 5).map((track, index) => (
                  <div className="tracks-row" key={index}>
                    <span>{index + 1}</span>
                    <span>{track.title}</span>
                    <span>{convertSeconds(track.duration)}</span>
                  </div>
                ))}
            </div>
          </div>

          <div className="artist-container-mobile">
            <div className="container-top">
              <div className="artist-thumbnail">
                <img src={artist.picture_medium} />
              </div>
              <div className="name">{artist.name}</div>
              <div className="fans">
                <span>{artist.nb_fan}</span> <span> fans</span>
              </div>
              <div className="divider"></div>
              <div className="description">Long description go here and many more lines</div>
            </div>
            <div className="container-bottom">
              <div className="subheading">Top tracks</div>
              {artist.tracklist &&
                artist.tracklist.splice(0, 4).map((track, index) => (
                  <div className="tracks-row" key={track.id}>
                    <span>{index + 1}</span>
                    <span>{track.title}</span>
                    <span>{convertSeconds(track.duration)}</span>
                  </div>
                ))}
            </div>
          </div>

          <div className="album-container">
            <div className="subheading">Albums</div>

            <div className="album-row">
              {artist.albums &&
                artist.albums.map((album) => (
                  <div className="album-card" key={album.id}>
                    <div className="album-thumbnail">
                      <img src={album.cover_medium} />
                    </div>
                    <div className="album-name">{album.title}</div>
                    <div className="album-year">2019</div>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Artists;
