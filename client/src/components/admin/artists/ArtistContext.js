export const artistState = {
    artists: [],
    addArtistModal: false,
    editArtistModal: {
      modal: false,
      cId: null,
      des: "",
      status: "",
    },
    loading: false,
  };
  
  export const artistReducer = (state, action) => {
    switch (action.type) {
      /* Get all category */
      case "fetchArtistAndChangeState":
        return {
          ...state,
          artists: action.payload,
        };
      /* Create a category */
      case "addArtistModal":
        return {
          ...state,
          addArtistModal: action.payload,
        };
      /* Edit a category */
      case "editArtistModalOpen":
        return {
          ...state,
          editArtistModal: {
            modal: true,
            cId: action.cId,
            des: action.des,
            status: action.status,
          },
        };
      case "editArtistModalClose":
        return {
          ...state,
          editArtistModal: {
            modal: false,
            cId: null,
            des: "",
            status: "",
          },
        };
      case "loading":
        return {
          ...state,
          loading: action.payload,
        };
      default:
        return state;
    }
  };
  