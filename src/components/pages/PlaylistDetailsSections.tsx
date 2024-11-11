import React from 'react';
import PlayListDetails from './PlayListDetailsPage.tsx/PlayListDetails';
import PlayListBtnText from './PlayListDetailsPage.tsx/PlayListBtnText';
import PlayListTracks from './PlayListDetailsPage.tsx/PlayListTracks';

const PlaylistDetailsSections = () => {
    return (
        <div>
            <PlayListDetails/>
            <PlayListBtnText/>
            <PlayListTracks/>
        </div>
    );
};

export default PlaylistDetailsSections;