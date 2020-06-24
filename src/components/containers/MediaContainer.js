import React, { Component } from 'react'
import { getMediaData, searchMediaData } from '../../services/api'
import Form from '../forms/Form'
import MediaTabs from '../layout/MediaTabs'

/** --------------------------------------------------------------------- */
/** ------------------ Parent of all Tab Screens -------------------------*/
/** --------- Calling apis and sending data to all components ----------- */
/** --------------------------------------------------------------------- */
class MediaContainer extends Component {

    /** ------------------ default state when open the app  ------------ */
    state = {
        searchQuery: '',
        searchType: 'multi',
        mediaList: [],
        isLoading: false,
        message: 'Please initialize the search',
        filter: 'popular',
        mediaType: 'movie'
    }

    /** ------------- first time when website page called  ------------ */
    componentDidMount() {
        this.fetchMediaList()
    }

    /** ---------------- Handling Media category changed   ------------ */
    handleInputFilterChange = filter => {

        this.setState({
            filter
        }, function () {
            this.fetchMediaList();
        }.bind(this));

    }

    /** ------------------ Handling Tab selection (Movie, TV, Search) ------------ */
    handleMediaTypeChange = mediaType => {

        if (mediaType == 'tv' || mediaType == 'movie') {
            this.setState({
                mediaType,
                filter: 'popular',
                mediaList: []

            }, function () {
                this.fetchMediaList();
            }.bind(this));
        } else {
            this.setState({
                mediaType,
                message: 'Please initialize the search',
                mediaList: [],
                searchQuery: '',
                searchType: 'multi'
            })
        }
    }

    /** ------------------ Fecthing media list for Movie or TV ------------ */
    fetchMediaList = () => {

        const { filter, mediaType } = this.state;

        this.setState({
            isLoading: true
        })

        getMediaData(mediaType, filter).then(
            mediaList => {

                this.setState({
                    mediaList,
                    isLoading: false,
                })
            },
            error => {
                console.log("error")
                alert('Error', `Something went wrong! ${error}`)
            }
        )

    }

    /** ------------------ Handling Search type change (multi, TV, Movie)  ------------ */
    handleSearchTypeChange = searchType => {
        this.setState({
            searchType
        })
    }

    /** ------------------ Handling Search Query  ------------ */
    handleSearchQuery = searchQuery => {

        this.setState({
            searchQuery
        })
    }

    /** ------------------ Fetching Search Data after Submit Button clicked in Form  ------------ */
    fetchSearchQuery = e => {
        const { searchQuery, searchType } = this.state;
        e.preventDefault()

        this.setState({
            isLoading: true
        })

        searchMediaData(searchType, searchQuery).then(
            mediaList => {
                if (mediaList.length > 0) {
                    this.setState({
                        mediaType: 'search',
                        mediaList,
                        isLoading: false,
                        message: ''
                    })
                } else {
                    this.setState({
                        mediaType: 'search',
                        mediaList: [],
                        isLoading: false,
                        message: 'Sorry, there was no result'
                    })
                }
            },
            error => {
                console.log(error)
            }
        )
    }



    render() {

        const { isLoading, message, mediaList } = this.state;

        return (
            <div>
                <Form
                    onSearchTypeChange={this.handleSearchTypeChange}
                    onInputChange={this.handleSearchQuery}
                    onSubmit={this.fetchSearchQuery} />
                <MediaTabs
                    isLoading={isLoading}
                    searchTabMessage={message}
                    onFilterChange={this.handleInputFilterChange}
                    onMediaTypeChange={this.handleMediaTypeChange}
                    mediaList={mediaList} />
            </div>
        )
    }
}

export default MediaContainer