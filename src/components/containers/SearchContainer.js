import React from 'react'
import MediaList from '../layout/MediaList'
import Loading from '../layout/Loading'


/** ---------------------- Search Query Result Container --------------------- **/
const SearchContainer = props => {
    const { isLoading, message, mediaList } = props
    console.log(mediaList);
    return (
        <div className="media-list-container">
            <h3 className="searchMessage">{message}</h3>
            {isLoading ? (<Loading />) : (<MediaList mediaList={mediaList} />)}
        </div>
    )
}

export default SearchContainer;