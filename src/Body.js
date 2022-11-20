import React from "react";
import "./Body.css";
import { useStateValue } from "./StateProvider";
import Header from "./Header";
import SongRow from "./SongRow";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Body({ spotify }) {
  const [{ discover_weekly, user, playlists }, dispatch] = useStateValue();

  const playPlaylist = () => {
    spotify
      .play({
        context_uri: `spotify:playlist:47JJqjN5fyzD7UE7PgOPgW`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  

  const playSong = (id) => {
    spotify
      .play({
        uris: `spotify:track:${id}`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={user?.images[0].url} alt=""/>
  
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly Podpals</h2>
          <p>{playlists?.description}</p>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />    
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} 
      />
        ))}
      </div>
    </div>
  );
}

export default Body;