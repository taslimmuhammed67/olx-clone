import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './View.css';
import { PostContext } from '../../store/PostContext';
import { FireBaseContext } from '../../store/FireBaseContext';
function View() {
  const [userDetails, setuserDetails] = useState();
  const {postDetails} = useContext(PostContext);
  const {PostDetails, setPostDetails} = useContext(PostContext);

  const {firebase} = useContext(FireBaseContext);
 
  useEffect(() => {
    const {userId} = PostDetails;
    firebase.firestore().collection('users').where('id','==',userId)
    .get().then((res)=>{
      res.forEach(doc =>{
        setuserDetails(doc.data());
        console.log(`updated`)
      })
      })
  }, [PostDetails])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={PostDetails.url}
          alt="Product image"
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{PostDetails.Price}  </p>
           <span>{PostDetails.name}</span>
          <p>Two Wheeler</p>
          <span>Tue May 04 2021</span>
        </div>
  { userDetails &&     <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.userName}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
