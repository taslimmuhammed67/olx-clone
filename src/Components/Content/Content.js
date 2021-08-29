import React from 'react'
import { useHistory } from 'react-router';
import { useContext , useState, useEffect} from 'react';
import { FireBaseContext, AuthContext } from '../../store/FireBaseContext';
import  { PostContext } from '../../store/PostContext';
import "./Content.css"
import DeleteButton from '../../assets/DeleteButton';
function Content() {
    const [MyProducts, setMyProducts] = useState([]);
    const history = useHistory();
    const {firebase} = useContext(FireBaseContext);
    const {user} = useContext(AuthContext);
    const {PostDetails, setPostDetails} = useContext(PostContext);
   
     useEffect(() => {
        firebase.firestore().collection('products').get().then((snapshot)=>{
           const allPost = snapshot.docs.filter((product)=>(
            product.data().userId == user.uid )).map((pdt)=>{
            return{
                ...pdt.data(), id:pdt.id
              }
           })
          setMyProducts(allPost);
          console.log(`updated`)
          
        })
      },[])
    return (
        <div className="body">
            {MyProducts.map(product=>{
              
              return(
               <div className="card" >
               <div className="favorite" onClick={()=>
            firebase.firestore().collection('products').doc(product.id).delete().then(()=>{
                alert(`${product.name} deleted succesfully`);
                history.push("/")

            }).catch(()=>alert(`Error, could not delete the item`))}>
                   <DeleteButton></DeleteButton>
               </div>
               <div className="image" onClick={()=>{
                 setPostDetails(product);
                 history.push("/view");
                 console.log(PostDetails)
               }}>
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
    )
}

export default Content



