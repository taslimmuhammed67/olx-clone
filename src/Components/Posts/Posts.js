import React, { useContext, useEffect, useState } from 'react';
import Heart from '../../assets/Heart';
import './Post.css';
import { FireBaseContext } from '../../store/FireBaseContext';
import Post, { PostContext } from '../../store/PostContext';
import { useHistory } from 'react-router';
import DeleteButton from '../../assets/DeleteButton';

function Posts() {
const history = useHistory();
const {firebase} = useContext(FireBaseContext);
const [products , setProducts]=useState([]);
const {PostDetails, setPostDetails} = useContext(PostContext);
useEffect(() => {
  firebase.firestore().collection('products').get().then((snapshot)=>{
     const allPost = snapshot.docs.map((product)=>{
       return{
         ...product.data(), id:product.id
       }
     })
    setProducts(allPost);
    console.log(`updated`)
  })
},[])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
         
           {products.slice(0 , 5).map(product=>{
            return(
             <div className="card" onClick={()=>{
               setPostDetails(product);
               history.push("/view");
               console.log(PostDetails)
             }}>
             <div className="favorite">
               <Heart></Heart>
             
             </div>
             <div className="image">
               <img src={product.url}/>
             </div>
             <div className="content">
               <p className="rate">&#x20B9; {product.Price}</p>
               <span className="kilometer">{product.Category}</span>
               <p className="name">{product.name}</p>
             </div>
             <div className="date">
               <span>{product.createdAt}</span>
             </div>
           </div>)
          })
           }
         
        </div>
      </div>
      <div className="recommendations" style={{padding:50,}}>
        <div className="heading" style={{padding:10}}>
          <span>Fresh recommendations</span>
        </div>
        <div className="cards" style={{display:'block'}}>
        {products.reverse().map(product=>{
            return(
             <div className="card">
             <div className="favorite">
               <Heart></Heart>
             </div>
             <div className="image"  onClick={()=>{
               setPostDetails(product);
               history.push("/view");
               console.log(PostDetails)
             }}>
               <img src={product.url}/>
             </div>
             <div className="content"  onClick={()=>{
               setPostDetails(product);
               history.push("/view");
               console.log(PostDetails)
             }}>
               <p className="rate">&#x20B9; {product.Price}</p>
               <span className="kilometer">{product.Category}</span>
               <p className="name">{product.name}</p>
             </div>
             <div className="date">
               <span>{product.createdAt}</span>
             </div>
           </div>)
          })
           }
        </div>
      </div>
    </div>
  );
}

export default Posts;
