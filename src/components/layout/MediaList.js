import React from 'react'

import Media from './Media'

/** ------------------------- Media List Container  ---------------------- **/
const MediaList = props => {
    const { mediaType } = props;
    return (
        <div className="media-list"> 
            {props.mediaList.map((element) => {
                if(mediaType == 'search') {
                    console.log(element)
                }
                const {
                    id,
                    title,
                    name,
                    poster_path,
                    release_date,
                    first_air_date,
                    popularity,
                    overview
                } = element
                return (
                    <Media 
                        id={id}
                        title={(title) ? title : name}
                        posterPath={poster_path}
                        releaseDate={(release_date) ? release_date : first_air_date}
                        popularity={popularity}
                        description={overview}/>
                )})}
        </div>
    )
}

export default MediaList