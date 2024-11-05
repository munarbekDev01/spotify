import React from 'react';
import TrackDetails from './TrackDetailsPage/TrackDetails';
import TrackPlayBtnText from './TrackDetailsPage/TrackPlayBtnText';
import TrackRecomendations from './TrackDetailsPage/TrackRecomendations';

const TrackDetailsSectioins = () => {
    return (
        <div>
            <TrackDetails/>
            <TrackPlayBtnText/>
            <TrackRecomendations/>
        </div>
    );
};

export default TrackDetailsSectioins;