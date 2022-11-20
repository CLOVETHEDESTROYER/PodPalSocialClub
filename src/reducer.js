export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false, 
  item: null,
  //remove after finished developing
  //token: 'BQAaTm7JvaeQxmPMjLiDCnEPhoPchQgCRfVrmrIFMuASOTLReTDora9C14458vTOc3EWXozQVo36qc6Ai52TFA9JaYhnaji2xsKITuC_NitCF_YTNXhh-ut08Ct9TnPy3O07X_xdKi1ScVchnF9eC4IvUIGIv37QHDS4jMoBQpBucRR36ewWvZwNR2Mnt1ckXZ-wrBHE4ZB8UdZ26O0v',
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
      case "SET_PODCASTS":
      return {
        ...state,
        playlists: action.shows,
      };
    default:
      return state;
  }
};

export default reducer;