import React, { Fragment } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useState, useContext } from 'react';
import { FireBaseContext, AuthContext } from '../../store/FireBaseContext';
import { useHistory } from 'react-router';
const Create = () => {
  const history = useHistory();
  const {firebase} = useContext(FireBaseContext)
  const {user} = useContext(AuthContext)
  const [name, setName] = useState("");
  const [Category, setCategory] = useState("");
  const [Price, setPrice] = useState("");
  const [image, setimage] = useState(null);
  const date = new Date();
  const category =[ 'two wheeler', 'phone' , 'tablet', 'house', 'apartment', 'laptop', ]
 const handleSubmit= ()=>{
  firebase.storage().ref(`/image/${image.name}`).put(image)
     .then(({ref})=>ref.getDownloadURL().then((url)=>{console.log(url)
    firebase.firestore().collection('products').add({
      name,
      Category,
      Price,
      url,
      createdAt: date.toDateString(),
      userId:user.uid
    })
  .then(history.push("/"))}))
  
 }  
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
        
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
              value={name}
              onChange={(e)=>{
               setName(e.target.value)
              }}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />




          
            <select className="input"
           id="fname"
           name="category"
           defaultValue="cars"
           value={Category}
           onChange={(e)=>{
            setCategory(e.target.value)
           }}>
           <option value="car">cars</option>
            <option value="bike">bikes</option>
             <option value="scooter">scooter</option>
             <option value="phone">phones</option>
             <option value="laptop">laptops</option>
            <option value="house">houses</option>
            <option value="">other products         </option>
             <option value="apartment">apartments</option>
             <option value="watch">watches</option>
        
            </select>
           <div className="c1"></div>


            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price"   value={Price}
              onChange={(e)=>{
               setPrice(e.target.value)
              }}/>
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={image? URL.createObjectURL(image): null}></img>
      
            <br />
            <input type="file" 
              onChange={(e)=>{
               setimage(e.target.files[0])
              }}/>
            <br />
            <button onClick={handleSubmit} className="uploadBtn" >upload and Submit</button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
