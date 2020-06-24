import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MediaList from '../layout/MediaList'
import Loading from '../layout/Loading'

/** ------------------------ Media List Screen Container with filter Option Component ----------------------- */
const MediaTabContainer = props => {

    const { isLoading, mediaList, mediaType } = props

    const handleChange = (event) => {
        props.onFilterChange(event.target.value);
    };

    return (

        <div className="media-list-container">

            <FormControl variant="outlined" margin='normal'>
                <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
                <Select
                    native
                    onChange={handleChange}
                    label="Category">
                    <option value={"popular"}>Popular</option>
                    <option value={(mediaType == 'movie') ? "now_playing" : "airing_today"}>
                        {(mediaType == 'movie') ? 'Now Playing' : 'Airing Today'}
                    </option>
                    <option value={"top_rated"}>Top Rated</option>
                    <option value={(mediaType == 'movie') ? "upcoming" : "on_the_air"}>
                        {(mediaType == 'movie') ? 'Upcoming' : 'On Tv'}
                    </option>
                </Select>
            </FormControl>

            {isLoading ? (<Loading />) : (<MediaList mediaList={mediaList} mediaType={mediaType} />)}

        </div>
    )
}

export default MediaTabContainer