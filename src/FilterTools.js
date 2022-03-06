import React, { useState, useEffect,useCallback } from 'react';

function FilterTools({blueCardsEnabled, setBlueCardsState, yellowCardsEnabled, setYellowCardsState, redCardsEnabled, setRedCardsState ,greenCardsEnabled, setGreenCardsState})
{
    // const [blueCardsEnabled, setBlueCardsState] = useState(true);
    // const [yellowCardsEnabled, setYellowCardsState] = useState(true);
    // const [redCardsEnabled, setRedCardsState] = useState(true);
    // const [greenCardsEnabled, setGreenCardsState] = useState(true);

    const setBlueCardsStateCallback = useCallback(e=>{setBlueCardsState(!blueCardsEnabled)},[setBlueCardsState]);
    const setYellowCardsStateCallback = useCallback(e=>{setYellowCardsState(!yellowCardsEnabled)},[setYellowCardsState]);
    const setRedCardsStateCallback = useCallback(e=>{setRedCardsState(!redCardsEnabled)},[setRedCardsState]);
    const setGreenCardsStateCallback = useCallback(e=>{setGreenCardsState(!greenCardsEnabled)},[setGreenCardsState]);
    
    var cardTypeBlueEnabledImageTag = <img src={'/images/Card_Blue.png'} alt={'Card_Blue.png'} width={64} height={64} style={{opacity:1}} onClick={setBlueCardsStateCallback}></img>;
    var cardTypeYellowEnabledImageTag = <img src={'/images/Card_Yellow.png'} alt={'Card_Yellow.png'} width={64} height={64} style={{opacity:1}} onClick={setYellowCardsStateCallback}></img>;
    var cardTypeRedEnabledImageTag = <img src={'/images/Card_Red.png'} alt={'Card_Red.png'} width={64} height={64} style={{opacity:1}} onClick={setRedCardsStateCallback}></img>;
    var cardTypeGreenEnabledImageTag = <img src={'/images/Card_Green.png'} alt={'Card_Green.png'} width={64} height={64} style={{opacity:1}} onClick={setGreenCardsStateCallback}></img>;

    var cardTypeBlueDisabledImageTag = <img src={'/images/Card_Blue.png'} alt={'Card_Blue.png'} width={64} height={64} style={{opacity:0.5}} onClick={setBlueCardsStateCallback}></img>;
    var cardTypeYellowDisabledImageTag = <img src={'/images/Card_Yellow.png'} alt={'Card_Yellow.png'} width={64} height={64} style={{opacity:0.5}} onClick={setYellowCardsStateCallback}></img>;
    var cardTypeRedDisabledImageTag = <img src={'/images/Card_Red.png'} alt={'Card_Red.png'} width={64} height={64} style={{opacity:0.5}} onClick={setRedCardsStateCallback}></img>;
    var cardTypeGreenDisabledImageTag = <img src={'/images/Card_Green.png'} alt={'Card_Green.png'} width={64} height={64} style={{opacity:0.5}} onClick={setGreenCardsStateCallback}></img>;
    return(<div>
        {blueCardsEnabled?cardTypeBlueEnabledImageTag:cardTypeBlueDisabledImageTag}
        {yellowCardsEnabled?cardTypeYellowEnabledImageTag:cardTypeYellowDisabledImageTag}
        {redCardsEnabled?cardTypeRedEnabledImageTag:cardTypeRedDisabledImageTag}
        {greenCardsEnabled?cardTypeGreenEnabledImageTag:cardTypeGreenDisabledImageTag}
    </div>

    );
}
export default  FilterTools;