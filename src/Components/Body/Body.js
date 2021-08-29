import './Body.css';
import React from 'react'
import { useContext , useState, useEffect} from 'react';
import { SearchContext } from '../../store/SearchContext';
import Heart from '../../assets/Heart';
import { FireBaseContext } from '../../store/FireBaseContext';
import Post, { PostContext } from '../../store/PostContext';
import { useHistory } from 'react-router';


function Body() {
    const {proSearch} = useContext(SearchContext);
    const history = useHistory();
    const {firebase} = useContext(FireBaseContext);
    const [products , setProducts]=useState([]);
    const {PostDetails, setPostDetails} = useContext(PostContext);
    
    useEffect(() => {
        firebase.firestore().collection('products').get().then((snapshot)=>{
           const allPost = snapshot.docs.filter((product)=>(
               product.data().name.toLowerCase().includes(proSearch.toLowerCase()) ||product.data().Category.toLowerCase().includes(proSearch.toLowerCase())
           )).map((pdt)=>{
            return{
                ...pdt.data(), id:pdt.id
              }
           })
          setProducts(allPost);
          console.log(`updated`)
          
        })
      },[ proSearch])
  
    return (
        <div className="body">
            <div className="body-container">
            <h3>Showing reasult for "{proSearch}"</h3>
            <div className="post-box">
            {products.map(product=>{
              
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
            
        </div>
    )
}

export default Body
