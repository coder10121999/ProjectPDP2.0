import React, { Fragment, createContext, useReducer } from "react";
import AdminLayout from "../layout";
import ArtistMenu from "./ArtistMenu";
import AllArtists from "./AllArtists";
import { artistState, artistReducer } from "./ArtistContext";

/* This context manage all of the caregories component's data */
export const ArtistContext = createContext();

const ArtistComponent = () => {
  return (
    <div className="grid grid-cols-1 space-y-4 p-4">
      <ArtistMenu />
      <AllArtists />
    </div>
  );
};

const Artists = (props) => {
  const [data, dispatch] = useReducer(artistReducer, artistState);
  return (
    <Fragment>
      <ArtistContext.Provider value={{ data, dispatch }}>
        <AdminLayout children={<ArtistComponent />} />
      </ArtistContext.Provider>
    </Fragment>
  );
};

export default Artists;
