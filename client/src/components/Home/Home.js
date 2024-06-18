import React from 'react';

import TitleListing from '../TitleListing/TitleListing';
import DetailsPanel from '../DetailsPanel/DetailsPanel';

export default function Home({ yearRange }) {

    return (
        <>
            <TitleListing
                yearRange={yearRange}
            />
            <DetailsPanel />
        </>
    )
}
