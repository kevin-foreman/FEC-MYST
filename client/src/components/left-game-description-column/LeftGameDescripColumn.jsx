import React, { useContext } from 'react';
import GameDescriptionArea from '../left-game-description-column/left-game-descrip-area/GameDescriptionArea';
import AboutThisGame from './AboutThisGame';
// import CommunityMods from './CommunityMods';
// import ContentForThisGame from './ContentForThisGame';
import FranchiseHighlight from './FranchiseHighlight';
// import MoreFromHalfLife from './MoreFromHalfLife';
// import MoreLikeThis from './MoreLikeThis';
import SystemRequirements from './SystemRequirements';
import WhatCuratorsSay from './WhatCuratorsSay';
import './styles/GameDescriptionArea.css'

function LeftGameDescripColumn() {
    return (
        <div>
            <FranchiseHighlight />
            <div className='game_area_purchase_game_wrapper'>
                <div className='game_area_purchase_game'>
                    <GameDescriptionArea />
                    <WhatCuratorsSay />
                </div>
            </div>
            <AboutThisGame />
            <SystemRequirements />
            {/* <ContentForThisGame />
                    
                    
                    <CommunityMods />
                    <MoreFromHalfLife />
                <MoreLikeThis /> */}
        </div>
    )
}

export default LeftGameDescripColumn;