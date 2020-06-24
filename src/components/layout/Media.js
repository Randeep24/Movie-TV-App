import React from 'react'
import { IMAGE_URL } from '../../config/api_config'
import { makeStyles } from '@material-ui/core/styles'

import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

/** -------------------------- Media Card Container (having media info) -------------------- **/
const getStyles = makeStyles(() => ({
    root: {
        margin: '1.5rem',
        display: 'grid',
        gridTemplateColumns: '220px auto'
    },
    mediaImage: {
        width: 200,
        height: 300,
        margin: 10,
        backgroundPosition: 'left',
        backgroundSize: 'cover'
    },
    cardContent : {
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    mediaOverview : {
        textAlign: 'justify'
    }
}))

const Media = props => {
    const classes = getStyles()
    const { id, title, posterPath, releaseDate, popularity, description } = props
    return (
        <div id={id}>
            <Card className={classes.root}>
                <CardMedia className={classes.mediaImage} image={`${IMAGE_URL}${posterPath}`} />
                <CardContent className={classes.cardContent}>
                    <CardHeader title={title} />
                    <Typography>
                        Release Date: {releaseDate} | Popularity: {popularity}
                    </Typography>
                    <Typography className={classes.mediaOverview}>
                        {description}
                    </Typography>
                </CardContent>
            </Card>
            <Divider />
        </div>

    )
}

export default Media