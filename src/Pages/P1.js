import React from 'react'
import Banner from '../Components/Banner/Banner'
import Content from '../Components/Content/Content'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import { useHistory } from 'react-router';
import { AuthContext } from '../store/FireBaseContext'
import { useContext} from 'react';


function P1() {
    const {user} = useContext(AuthContext);
    const history = useHistory();


    return (
        <div>
          <Header></Header>
            <Banner></Banner>
            {user? <Content/>:history.push("/signup")}
            <Footer style={{bottom:0}}></Footer>
        </div>
    )
}

export default P1
