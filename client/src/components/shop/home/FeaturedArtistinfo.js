import React, { Fragment, useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { getAllArtist } from "../../admin/artists/FetchApi";

const apiURL = process.env.REACT_APP_API_URL;

const FeaturedArtistinfo = (props) => {
  
  
  const history = useHistory();
const [state,setState]=useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // dispatch({ type: "loading", payload: true });
    try {
      let responseData = await getAllArtist();
      setTimeout(() => {
        if (responseData && responseData.Artists) {
         
            setState(responseData)
        }
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(state);

//   if (data.loading) {
//     return (
//       <div className="col-span-2 md:col-span-3 lg:col-span-4 flex items-center justify-center py-24">
//         <svg
//           className="w-12 h-12 animate-spin text-gray-600"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
//           ></path>
//         </svg>
//       </div>
    // );
//   }
  return (
    
    <Fragment>
        {console.log(state.Artists)}
        {state.Artists && state.Artists.length > 0 ? (
         
         state.Artists.map((item, index) => {
           return (
             <Fragment key={index}>
               <div className="relative col-span-1 m-2 "style={{flexBasis:"30%",padding:"1rem"}}>
                 <div>
                    <img
                      //onClick={(e) => history.push(`/products/${item._id}`)}
                      className="object-cover object-center cursor-pointer"
                      width={500} height={500}
                      src={`${apiURL}/uploads/artist/${item.cImage}`}
                      alt=""
                    />
                    <div className="flex" style={{flexDirection:"column"}}>
                      <div className="truncate" style={{fontWeight:"700",fontSize:"1.2rem"}}>
                        {item.cName}
                      </div>
                      <div>
                        {item.cDescription}
                      </div>
                      
                    </div>
                 </div>
               </div>
             </Fragment>
           );
         })
       ) : (
         <div className="col-span-2 md:col-span-3 lg:col-span-4 flex items-center justify-center py-24 text-2xl">
           No product found
         </div>
       )}
     </Fragment>
  );
};

export default FeaturedArtistinfo;
