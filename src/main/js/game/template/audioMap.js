define({
    // IMPLEMENT: Map SFX to channels

    /* 
     * If audio assets are named nicely you can do:
     * {
     *  fileName: channelNumber
     * }
     * 
     * Otherwise use a nice name for the keys and include the filename and channel as an array:
     * {
     *  soundName: ['Ugly_sound_file_V2-final', channelNumber]
     * }
     */

    music: ['BackgroundMusicLoop', 0],
    bonusMusic: ['BonusMusicLoop', 0],
    numberMatch : ['NumberMatch',1],
    winTerminator: ['BackgroundMusicTerm_WIN', 1],
    loseTerminator: ['BackgroundMusicTerm_LOSE', 1],
    click: ['UI_Click', 4],
    costDown: ['BetDown', 1],
    costUp: ['BetUp', 2],
    buy: ['BuyButton', 2],
    costMax: ['BetMax', 3],

    /*
     * Audio groups
     * A game can include multiple variations of each of these sounds. Ensure each variation starts
     * with the same name plus some kind of ordered suffix. Each time a sound group plays the next 
     * item in the group will be used.
     */
    playerNumber_1: ['YourNumberSelect_1', 3],
    playerNumber_2: ['YourNumberSelect_2', 4],
    playerNumber_3: ['YourNumberSelect_3', 5],

    winningNumber_1: ['LuckyNumberSelect_1', 3],
    winningNumber_2: ['LuckyNumberSelect_2', 4],
    winningNumber_3: ['LuckyNumberSelect_3', 5],
    winningNumber_4: ['LuckyNumberSelect_4', 6],
    winningNumber_5: ['LuckyNumberSelect_5', 7],

    revealAllLuckyNumbers: ['LuckyNumberSelect__RevealAll',8],
    revealAllYourNumbers: ['YourNumberSelect_RevealAll',6],

    instantWin:['InstantWin',9],
    instantWin2X:['InstantWin2x',10],

    spinStart: ['SpinButton', 1],
    spinSustain: ['SpinLoop', 2],
    spinStop: ['SpinStop', 3],

    transition:['Transition',4],

    wheelBonusTransition:['WheelBonusTransition',5],
    wheelBonusRevealed:['WheelBonusReveal',7],
    wheelBonusTriggered:['WheelBonusTriggered',6],

    prizeBonusTransition:['PrizeBonusTransition',8],
    prizeBonusRevealed:['PrizeBonusReveal',9],
    prizeBonusTriggered:['PrizeBonusTriggered',9],

    prizeWin:['PrizeWin',11],
    GoldBar1:['GoldBar1',1],
    GoldBar2:['GoldBar2',2],
    GoldBar3:['GoldBar3',3],
    GoldBar4:['GoldBar4',4],
    GoldBar5:['GoldBar5',5],
    GoldBar6:['GoldBar6',6],
    GoldBar7:['GoldBar7',7],
    GoldBar8:['GoldBar8',8],
    GoldBar9:['GoldBar9',9],
    AllGoldBars:['9_GoldBars',12],

    goldBarSelect:['GoldBarSelect',2],
    collect:['Collect',1],
    bagDrop:['BagDrop',11],
    MultiplierWin:['MultiplierWin',8],

    countUp:['CountUp',9],
    countUpEnd:['CountUpEnd',10]

    /*
     * Optional audio
     * The following audio is optional and will be ignored if not included
     */

    //  buy: ['BuyButton', 4],
    //  revealAll: ['RevealAllButton', 4],
});
