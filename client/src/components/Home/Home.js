import React from 'react';

import TitleListing from '../TitleListing/TitleListing';
import DetailsPanel from '../DetailsPanel/DetailsPanel';
import Watchlist from '../Watchlist/Watchlist';

export default function Home({ yearRange }) {

    return (
        <>
            <TitleListing
                yearRange={yearRange}
            />
            <DetailsPanel />
            <Watchlist />
        </>
    )
}
