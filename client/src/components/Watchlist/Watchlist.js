import React, { useState, useRef } from 'react'
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import BookmarkIcon from '../common/icons/BookmarkIcon'
import WatchlistPanel from './WatchlistPanel/WatchlistPanel';

import { StyledWatchlist } from './Watchlist.style'

export default function Watchlist() {
    const [showWatchlistPanel, setShowFavoritesPanel] = useState(false);
    const nodeRef = useRef(null);

    return (
        <>
            <StyledWatchlist onClick={() => setShowFavoritesPanel(!showWatchlistPanel)}>
                <BookmarkIcon />
            </StyledWatchlist>
            <CSSTransition
                in={showWatchlistPanel}
                timeout={300}
                nodeRef={nodeRef}
                classNames={"watchlist-panel"}
                unmountOnExit
            >
                <>
                    {createPortal(
                        <WatchlistPanel ref={nodeRef} onHidePanel={() => setShowFavoritesPanel(false)} />,
                        document.body
                    )}
                </>
            </CSSTransition>
        </>
    )
}
