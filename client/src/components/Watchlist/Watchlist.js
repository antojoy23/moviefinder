import React, { useState } from 'react'
import { createPortal } from 'react-dom';
import BookmarkIcon from '../common/icons/BookmarkIcon'

import { StyledWatchlist } from './Watchlist.style'
import WatchlistPanel from './WatchlistPanel/WatchlistPanel';

export default function Watchlist() {
    const [showWatchlistPanel, setShowFavoritesPanel] = useState(false);

    return (
        <>
            <StyledWatchlist onClick={() => setShowFavoritesPanel(!showWatchlistPanel)}>
                <BookmarkIcon />
            </StyledWatchlist>
            {showWatchlistPanel && createPortal(
                <WatchlistPanel onHidePanel={() => setShowFavoritesPanel(false)} />,
                document.body
            )}
        </>
    )
}
