import React, { useContext } from 'react';
import './Banner.css';
import Arrow from '../../assets/Arrow'
import Searcher, {SearchContext} from '../../store/SearchContext';
import { useHistory } from 'react-router';

function Banner() {
  const {setproSearch} = useContext(SearchContext);
  const history = useHistory();

  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <Arrow></Arrow> 
          </div>
          <div className="otherQuickOptions">
            <span onClick={e=>{
              e.preventDefault();
              setproSearch("car");
              history.push("/search")
            }}>Cars</span>
            <span onClick={e=>{
              e.preventDefault();
              setproSearch("two Wheeler");
              history.push("/search")
            }}>Motorcy...</span>
            <span onClick={e=>{
              e.preventDefault();
              setproSearch("Phone");
              history.push("/search")
            }}>Mobile Ph...</span>
            <span onClick={e=>{
              e.preventDefault();
              setproSearch("laptop");
              history.push("/search")
            }}>New Laptops</span>
            <span onClick={e=>{
              e.preventDefault();
              setproSearch("Scooter");
              history.push("/search")
            }}>Scoot...</span>
            <span onClick={e=>{
              e.preventDefault();
              setproSearch("Bikes");
              history.push("/search")
            }}>Two Wheelers</span>
            <span onClick={e=>{
              e.preventDefault();
              setproSearch("House");
              history.push("/search")
            }}>For Rent: House & Apart...</span>
          </div>
        </div>
        <div className="banner">
          <img
            src="../../../Images/banner copy.png"
            alt=""
          />
        </div>
      </div>
      
    </div>
  );
}

export default Banner;
