import React from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Search, {SearchContext} from '../store/SearchContext'
import { useContext } from 'react'
import Body from '../Components/Body/Body'
function SearchResult() {
    const {proSearch} = useContext(SearchContext);
    return (
        <div>
            <Header/>
            <Body/>
            
            <Footer style={{bottom:0}}/>
        </div>
    )
}

export default SearchResult
