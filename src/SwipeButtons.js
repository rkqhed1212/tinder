import React from 'react'
import './SwipeButtons.css'

import ReplayIcon from "@material-ui/icons/Replay"
import CloseIcon from "@material-ui/icons/Close"
import StarRateIcon from "@material-ui/icons/StarRate"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FlashOnIcon from "@material-ui/icons/FlashOn"
import Iconbutton from '@material-ui/core/IconButton'

export default function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <Iconbutton className="swipeButtons__repeat">
                <ReplayIcon fontSize="large"/>
            </Iconbutton>
            <Iconbutton className="swipeButtons__left">
                <CloseIcon fontSize="large"/>
            </Iconbutton>
            <Iconbutton className="swipeButtons__star">
                <StarRateIcon fontSize="large"/>
            </Iconbutton>
            <Iconbutton className="swipeButtons__right">
                <FlashOnIcon fontSize="large"/>
            </Iconbutton>
            <Iconbutton className="swipeButtons__lightning">
                <FavoriteIcon fontSize="large"/>
            </Iconbutton>

        </div>
    )
}
