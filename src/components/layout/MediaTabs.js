import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../layout/TabPanel'
import SearchContainer from '../containers/SearchContainer'
import MediaTabContainer from '../containers/MediaTabContainer'

/** --------------------------- Tab Layout consist of all Tabs (Movie, Search , TV) ---------------- */
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(10),
        backgroundColor: theme.palette.background.paper,
    }
}));


const MediaTabs = props => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    /** --------------- Handling Tab Clicks and sending it to parent component ------------------ **/
    const handleChange = (event, newValue) => {

        setValue(newValue);
        switch (newValue) {
            case 0:
                props.onMediaTypeChange('movie')
                break;
            case 1:
                props.onMediaTypeChange('search')
                break;
            case 2:
                props.onMediaTypeChange('tv')
                break;
        }
    };



    const handleChangeIndex = (index) => {
        setValue(index);
    };

    /** ---------------------- Handling media category filter and sending it to parent component ----------- */
    const onFilterChange = (value) => {
        props.onFilterChange(value)
    };

    const { isLoading, searchTabMessage, mediaList, isSearchType } = props;

    if (isSearchType) {
        if (value != 1) {
            setValue(1)
        }
    }
    return (
        <div className={classes.root}>

            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example">
                    <Tab label="Movies" id="full-width-tab-0" aria-controls="full-width-tabpanel-0" />
                    <Tab label="Search" id="full-width-tab-1" aria-controls="full-width-tabpanel-1" />
                    <Tab label="TV Series" id="full-width-tab-2" aria-controls="full-width-tabpanel-2" />
                </Tabs>
            </AppBar>

            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}>

                <TabPanel value={value} index={0} dir={theme.direction}>
                    <MediaTabContainer
                        isLoading={isLoading}
                        onFilterChange={onFilterChange}
                        mediaList={mediaList}
                        mediaType='movie' />
                </TabPanel>

                <TabPanel value={value} index={1} dir={theme.direction}>
                    <SearchContainer
                        isLoading={isLoading}
                        message={searchTabMessage}
                        mediaList={mediaList} />
                </TabPanel>

                <TabPanel value={value} index={2} dir={theme.direction}>
                    <MediaTabContainer
                        isLoading={isLoading}
                        onFilterChange={onFilterChange}
                        mediaList={mediaList} media='tv' />
                </TabPanel>

            </SwipeableViews>
        </div>
    );
}

export default MediaTabs

