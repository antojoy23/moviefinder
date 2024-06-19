import React, { useEffect, useState } from 'react'
import { StyledWatchlistPanel, StyledWatchlistPanelOverlay } from './WatchlistPanel.style'
import { getWatchlist, removeFromWatchlist } from '../../../utils/watchlistAPI'
import LoadingDots from '../../common/LoadingDots/LoadingDots';
import TitleCard from '../../TitleListing/TitleCard/TitleCard';

import CrossIcon from '../../../assets/icons/cross.svg';

export default function WatchlistPanel({ onHidePanel }) {
    const [isLoading, setIsLoading] = useState(false);
    const [watchlist, setWatchlist] = useState({});

    useEffect(() => {
        setIsLoading(true);
        let list = getWatchlist();
        setWatchlist(list);
        setIsLoading(false)
    }, []);

    const onWatchlistRemove = (e) => {
        let titleId = e.currentTarget.getAttribute("data-id");
        setIsLoading(true);
        let newWatchlist = removeFromWatchlist(titleId);
        setWatchlist(newWatchlist);
        setIsLoading(false);
    }

    const resolveComponent = () => {
        if (isLoading) {
            return (
                <div className='loading'>
                    <LoadingDots />
                </div>
            )
        }

        if (Object.keys(watchlist).length > 0) {
            let titleMap = Object.keys(watchlist).map((key) => {
                return <TitleCard
                    key={key}
                    titleId={key}
                    title={watchlist[key]}
                    watchlist={true}
                    onRemove={onWatchlistRemove}
                />
            });
            return (
                <div className='watchlist-cards'>
                    {titleMap}
                </div>
            )
        } else {
            return (
                <div className='empty-watchlist'>
                    <p>Seems like you dont have any titles added to your watchlist &#128533;</p>
                </div>
            )
        }
    }
    return (
        <>
            <StyledWatchlistPanelOverlay onClick={onHidePanel}>
            </StyledWatchlistPanelOverlay>
            <StyledWatchlistPanel>
                <div className='watchlist-header'>
                    <h4>Watchlist</h4>
                    <img onClick={onHidePanel} src={CrossIcon} alt='Close Watchlist' />
                </div>
                {resolveComponent()}
            </StyledWatchlistPanel>
        </>
    )
}
