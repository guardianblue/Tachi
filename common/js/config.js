"use strict";
// Hi, Just so you know, this code is not representative of the internal site code.
// This has been added to over the course of around 10 months at the time of writing, and is the source
// of some of my first javascript code.
// It's,, alright, but I like the versatility it brings.
Object.defineProperty(exports, "__esModule", { value: true });
exports.humaniseGame = exports.supportsESD = exports.folderTables = exports.defaultTable = exports.clearGrade = exports.validScoreMeta = exports.AbsoluteScoreGradeDelta = exports.gamePercentMax = exports.defaultDifficulty = exports.gameSpecificCalcDescriptions = exports.DirectScoreGradeDelta = exports.FormatDifficulty = exports.expChartScale = exports.gameSpecificCalc = exports.boundaryHCF = exports.validHitMeta = exports.validHitData = exports.validDifficulties = exports.ChangeAlpha = exports.PercentToScore = exports.judgementWindows = exports.gameRelevantScoreBucket = exports.clearLamp = exports.validTierlistTiers = exports.gameColours = exports.judgeColours = exports.ScoreGradeDelta = exports.validPlaytypes = exports.ratingParameters = exports.gameHuman = exports.gradeBoundaries = exports.GetGrade = exports.gameChartIndicators = exports.defaultPlaytype = exports.serviceSupportedGames = exports.gradeColours = exports.lampColours = exports.lamps = exports.grades = exports.versionHuman = exports.internalServiceGames = exports.gameOrders = exports.supportedGames = void 0;
const supportedGames = [
    "iidx",
    "museca",
    "maimai",
    "jubeat",
    "popn",
    "sdvx",
    "ddr",
    "bms",
    "chunithm",
    "gitadora",
    "usc",
];
exports.supportedGames = supportedGames;
const serviceSupportedGames = {
    PLI: ["iidx"],
    ARC: ["iidx", "jubeat", "sdvx", "ddr"],
    FLO: ["iidx"],
    EAG: ["iidx"],
    "e-amusement": ["iidx"],
    LR2: ["bms"],
    beatoraja: ["bms"],
    MER: ["iidx"],
    SSS: ["iidx"],
    MaimaiNet: ["maimai"],
    "BATCH-MANUAL": supportedGames,
    "DIRECT-MANUAL": supportedGames,
    MANUAL: supportedGames,
};
exports.serviceSupportedGames = serviceSupportedGames;
// internal services are services that aren't exposed to the public
// but still leverage ImportMain.
const internalServiceGames = {
    "ktchi-beatoraja-IR": ["bms"],
    FER: ["iidx"],
    "ktchi-usc-IR": ["usc"],
};
exports.internalServiceGames = internalServiceGames;
const gameSpecificCalc = {
    iidx: {
        SP: ["BPI", "K%"],
        DP: ["BPI"],
    },
    sdvx: {
        Single: ["VF4", "VF5"],
    },
    ddr: {
        SP: ["MFCP"],
        DP: ["MFCP"],
    },
    usc: {
        Single: ["VF4", "VF5"],
    },
};
exports.gameSpecificCalc = gameSpecificCalc;
const gameSpecificCalcDescriptions = {
    iidx: {
        SP: {
            BPI: "Beat Power Index: How good a score is relative to Kaiden Average (BPI 0) and the World Record (BPI 100).",
            "K%": "Kaiden Percentile: How many Kaidens you're ahead of on a given chart.",
        },
        DP: {
            BPI: "Beat Power Index: How good a score is relative to Kaiden Average (BPI 0) and the World Record (BPI 100).",
        },
    },
    sdvx: {
        Single: {
            VF4: "VOLFORCE as calculated in SOUND VOLTEX IV: HEAVENLY HAVEN.",
            VF5: "VOLFORCE as calculated in SOUND VOLTEX V: VIVID WAVE.",
        },
    },
    ddr: {
        SP: {
            MFCP: "MFC Points as described in LIFE4.",
        },
        DP: {
            MFCP: "MFC Points as described in LIFE4.",
        },
    },
    usc: {
        Single: {
            VF4: "VOLFORCE as calculated in SOUND VOLTEX IV: HEAVENLY HAVEN.",
            VF5: "VOLFORCE as calculated in SOUND VOLTEX V: VIVID WAVE.",
        },
    },
};
exports.gameSpecificCalcDescriptions = gameSpecificCalcDescriptions;
const validDifficulties = {
    iidx: ["BEGINNER", "NORMAL", "HYPER", "ANOTHER", "LEGGENDARIA"],
    museca: ["Green", "Yellow", "Red"],
    maimai: ["Easy", "Basic", "Advanced", "Expert", "Master", "Re:Master"],
    jubeat: ["BSC", "ADV", "EXT"],
    popn: ["Easy", "Normal", "Hyper", "EX"],
    sdvx: ["NOV", "ADV", "EXH", "MXM", "INF", "GRV", "HVN", "VVD"],
    ddr: ["BEGINNER", "BASIC", "DIFFICULT", "EXPERT", "CHALLENGE"],
    bms: ["BEGINNER", "NORMAL", "HYPER", "ANOTHER", "INSANE", "CUSTOM"],
    chunithm: ["BASIC", "ADVANCED", "EXPERT", "MASTER", "WORLD'S END"],
    gitadora: [
        "BASIC",
        "ADVANCED",
        "EXTREME",
        "MASTER",
        "BASS BASIC",
        "BASS ADVANCED",
        "BASS EXTREME",
        "BASS MASTER",
    ],
    usc: ["NOV", "ADV", "EXH", "INF"],
};
exports.validDifficulties = validDifficulties;
const defaultTable = {
    iidx: "Levels (N-1)",
    bms: "Insane",
    museca: "Levels",
    jubeat: "Levels",
    popn: "Levels",
    sdvx: "Levels",
    ddr: "Levels",
    chunithm: "Levels",
    gitadora: "Levels",
    usc: "Levels",
    maimai: "Levels",
};
exports.defaultTable = defaultTable;
const folderTables = {
    iidx: ["Levels", "Levels (Omnimix)", "Levels (N-1)", "Levels (N-1 Omnimix)", "Versions"],
    bms: ["Normal", "Insane", "Overjoy", "Satellite", "Stella", "Insane 2", "Joverjoy"],
    museca: ["Levels", "Versions"],
    jubeat: ["Levels", "Versions"],
    popn: ["Levels", "Versions"],
    sdvx: ["Levels", "Versions"],
    ddr: ["Levels", "Versions"],
    chunithm: ["Levels", "Levels (Omnimix)", "Versions"],
    gitadora: ["Levels", "Versions"],
    usc: ["Levels", "Versions"],
    maimai: ["Levels", "Versions"],
};
exports.folderTables = folderTables;
const validHitData = {
    iidx: ["pgreat", "great", "good", "bad", "poor"],
    bms: ["pgreat", "great", "good", "bad", "poor"],
    museca: ["critical", "near", "miss"],
    ddr: ["marvelous", "perfect", "great", "good", "boo", "miss", "ok", "ng"],
    sdvx: ["critical", "near", "miss"],
    popn: ["cool", "great", "good", "bad"],
    maimai: ["perfect", "great", "good", "miss"],
    jubeat: ["perfect", "great", "good", "bad", "miss"],
    chunithm: ["jcrit", "justice", "attack", "miss"],
    gitadora: ["perfect", "great", "good", "ok", "miss"],
    usc: ["critical", "near", "miss"],
};
exports.validHitData = validHitData;
const BASE_VALID_HIT_META = ["fast", "slow", "maxCombo"];
const validHitMeta = {
    iidx: ["bp", "gauge", "gaugeHistory", "comboBreak", ...BASE_VALID_HIT_META],
    museca: BASE_VALID_HIT_META,
    ddr: BASE_VALID_HIT_META,
    maimai: BASE_VALID_HIT_META,
    jubeat: BASE_VALID_HIT_META,
    popn: ["gauge", ...BASE_VALID_HIT_META],
    sdvx: ["gauge", ...BASE_VALID_HIT_META],
    bms: [
        "bp",
        "gauge",
        "lbd",
        "ebd",
        "lpr",
        "epr",
        "lgd",
        "egd",
        "lgr",
        "egr",
        "lpg",
        "epg",
        "diedAt",
        "random",
        "inputDevice",
        ...BASE_VALID_HIT_META,
    ],
    chunithm: [...BASE_VALID_HIT_META],
    gitadora: [...BASE_VALID_HIT_META],
    usc: ["gauge", ...BASE_VALID_HIT_META],
};
exports.validHitMeta = validHitMeta;
const validScoreMeta = {
    iidx: {
        optionsRandom: ["NONRAN", "RANDOM", "R-RANDOM", "S-RANDOM", "MIRROR"],
        optionsAssist: [
            "AUTO SCRATCH",
            "5KEYS",
            "LEGACY NOTE",
            "ASCR + 5KEY",
            "ASCR + LEGACY",
            "5KEYS + LEGACY",
            "FULL ASSIST",
        ],
        optionsRange: ["SUDDEN+", "HIDDEN+", "SUD+ HID+", "LIFT", "LIFT SUD+"],
        optionsGauge: ["ASSISTED EASY", "EASY", "HARD", "EX-HARD"],
        pacemaker: [
            "NO GRAPH",
            "MY BEST",
            "RIVAL 1",
            "RIVAL 2",
            "RIVAL 3",
            "RIVAL 4",
            "RIVAL 5",
            "RIVAL NEXT",
            "RIVAL BEST",
            "RIVAL AVERAGE",
            "NATIONAL BEST",
            "NATIONAL AVERAGE",
            "PREFECTURE BEST",
            "PREFECTURE AVERAGE",
            "CLASS BEST",
            "CLASS AVERAGE",
            "VENUE BEST",
            "VENUE NEXT",
            "PREVIOUS GHOST",
            "PACEMAKER AAA",
            "PACEMAKER AA",
            "PACEMAKER A",
            "PACEMAKER" /* ??? */,
            "PACEMAKER NEXT",
            "PACEMAKER NEXT+",
            "PLAYER 1",
            "PLAYER 2",
        ],
        pacemakerName: "string",
        pacemakerTarget: "integer",
        deadMeasure: "integer",
        deadNote: "integer",
    },
    museca: {},
    ddr: {},
    maimai: {},
    jubeat: {},
    popn: {},
    sdvx: {},
    bms: {},
    chunithm: {},
    gitadora: {},
    usc: {
        noteMod: ["NORMAL", "MIRROR", "RANDOM", "MIR-RAN"],
        gaugeMod: ["NORMAL", "HARD"],
    },
};
exports.validScoreMeta = validScoreMeta;
const gameColours = {
    iidx: "#E7BDB3",
    museca: "#C9A4A0",
    maimai: "#AE8094",
    sdvx: "#D6B7B1",
    ddr: "#CC5079",
    gitadora: "#CA9CA9",
    // gfdm: "#DA836E",
    jubeat: "#129A7D",
    popn: "#F39CA4",
    bms: "#B5DCCD",
    chunithm: "#AE8094",
    usc: "#D6B7B1", // TODO
};
exports.gameColours = gameColours;
const gameRelevantScoreBucket = {
    iidx: "lamp",
    museca: "grade",
    maimai: "grade",
    sdvx: "grade",
    ddr: "lamp",
    gitadora: "grade",
    // gfdm: "grade",
    jubeat: "grade",
    popn: "grade",
    bms: "lamp",
    chunithm: "grade",
    usc: "grade",
};
exports.gameRelevantScoreBucket = gameRelevantScoreBucket;
// human readable stuff for games
const gameHuman = {
    iidx: "beatmania IIDX",
    museca: "MÚSECA",
    maimai: "maimai",
    sdvx: "SOUND VOLTEX",
    ddr: "DDR",
    gitadora: "GITADORA",
    jubeat: "jubeat",
    popn: "pop'n music",
    bms: "BMS",
    chunithm: "CHUNITHM",
    usc: "unnamed sdvx clone",
};
exports.gameHuman = gameHuman;
// human readable stuff for versions
const versionHuman = {
    iidx: {
        0: "1st Style",
        1: "substream",
        2: "2nd Style",
        3: "3rd Style",
        4: "4th Style",
        5: "5th Style",
        6: "6th Style",
        7: "7th Style",
        8: "8th Style",
        9: "9th Style",
        10: "10th Style",
        11: "IIDX RED",
        12: "HAPPY SKY",
        13: "DISTORTED",
        14: "GOLD",
        15: "DJ TROOPERS",
        16: "EMPRESS",
        17: "SIRIUS",
        18: "Resort Anthem",
        19: "Lincle",
        20: "tricoro",
        21: "SPADA",
        22: "PENDUAL",
        23: "copula",
        24: "SINOBUZ",
        25: "CANNON BALLERS",
        26: "ROOTAGE",
        27: "HEROIC VERSE",
    },
    museca: {
        1: "",
        1.5: "1+1/2",
    },
    maimai: {
        maimai: "",
        maimaiplus: "PLUS",
        green: "GReeN",
        greenplus: "GReeN PLUS",
        orange: "ORANGE",
        orangeplus: "ORANGE PLUS",
        pink: "PiNK",
        pinkplus: "PiNK PLUS",
        murasaki: "MURASAKi",
        murasakiplus: "MURASAKi PLUS",
        milk: "MiLK",
        milkplus: "MiLK PLUS",
        finale: "FiNALE",
    },
    jubeat: {
        jubeat: "",
        ripples: "ripples",
        knit: "knit",
        copious: "copious",
        saucer: "saucer",
        saucerfulfill: "saucer fulfill",
        prop: "prop",
        qubell: "Qubell",
        clan: "clan",
        festo: "festo",
    },
    popn: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12 Iroha",
        13: "13 CARNIVAL",
        14: "14 FEVER!",
        15: "15 ADVENTURE",
        16: "16 PARTY♪",
        17: "17 THE MOVIE",
        18: "18 Sengoku",
        19: "19 TUNE STREET",
        20: "20 fantasia",
        park: "Sunny Park",
        lapis: "Lapistoria",
        eclale: "éclale",
        usaneko: "Usaneko",
        peace: "peace",
    },
    sdvx: {
        booth: "BOOTH",
        inf: "II -infinite infection-",
        gw: "III GRAVITY WARS",
        heaven: "IV HEAVENLY HAVEN",
        vivid: "V VIVID WAVE",
    },
    ddr: {
        1: "1st Mix",
        2: "2nd Mix",
        3: "3rd Mix",
        4: "4th Mix",
        5: "5th Mix",
        max: "MAX",
        max2: "MAX2",
        extreme: "EXTREME",
        snova: "SuperNOVA",
        snova2: "SuperNOVA 2",
        x: "X",
        x2: "X2",
        x3: "X3 vs. 2nd Mix",
        2013: "(2013)",
        2014: "(2014)",
        a: "Ace",
        a20: "A20",
    },
    chunithm: {
        chuni: "",
        chuniplus: "PLUS",
        air: "AIR",
        airplus: "AIR PLUS",
        star: "STAR",
        starplus: "STAR PLUS",
        amazon: "AMAZON",
        amazonplus: "AMAZON PLUS",
        crystal: "CRYSTAL",
        crystalplus: "CRYSTAL PLUS",
    },
    gitadora: {
        xg: "XG",
        xg2: "XG2",
        xg3: "XG3",
        gitadora: "",
        overdrive: "OverDrive",
        triboost: "Tri-Boost",
        triboostplus: "Tri-Boost (Re:EVOLVE)",
        matixx: "Matixx",
        exchain: "EXCHAIN",
        nextage: "NEX+AGE",
    },
    bms: {
        0: "BMS",
    },
    usc: {
        0: "USC",
    },
};
exports.versionHuman = versionHuman;
// release orders of the games.
const gameOrders = {
    iidx: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
    ],
    museca: ["1", "1.5"],
    maimai: [
        "maimai",
        "maimaiplus",
        "green",
        "greenplus",
        "orange",
        "orangeplus",
        "pink",
        "pinkplus",
        "murasaki",
        "murasakiplus",
        "milk",
        "milkplus",
        "finale",
    ],
    jubeat: [
        "jubeat",
        "ripples",
        "knit",
        "copious",
        "saucer",
        "saucerfulfill",
        "prop",
        "qubell",
        "clan",
        "festo",
    ],
    popn: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "park",
        "lapis",
        "eclale",
        "usaneko",
        "peace",
    ],
    sdvx: ["booth", "inf", "gw", "heaven", "vivid"],
    ddr: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "max",
        "max2",
        "extreme",
        "snova",
        "snova2",
        "x",
        "x2",
        "x3",
        "2013",
        "2014",
        "a",
        "a20",
    ],
    bms: ["0"],
    chunithm: [
        "chuni",
        "chuniplus",
        "air",
        "airplus",
        "star",
        "starplus",
        "amazon",
        "amazonplus",
        "crystal",
        "crystalplus",
    ],
    gitadora: [
        "gf1",
        "gf2dm1",
        "gf3dm2",
        "gf4dm3",
        "gf5dm4",
        "gf6dm5",
        "gf7dm6",
        "gf8dm7",
        "gf8dm7plus",
        "gf9dm8",
        "gf10dm9",
        "gf11dm10",
        "v",
        "v2",
        "v3",
        "v4",
        "v5",
        "v6",
        "v7",
        "v8",
        "xg",
        "xg2",
        "xg3",
        "gitadora",
        "overdrive",
        "triboost",
        "triboostplus",
        "matixx",
        "exchain",
        "nextage",
    ],
    usc: ["0"],
};
exports.gameOrders = gameOrders;
const defaultPlaytype = {
    iidx: "SP",
    museca: "Single",
    maimai: "Single",
    jubeat: "Single",
    popn: "9B",
    sdvx: "Single",
    ddr: "SP",
    bms: "7K",
    chunithm: "Single",
    gitadora: "Dora",
    usc: "Single",
};
exports.defaultPlaytype = defaultPlaytype;
const defaultDifficulty = {
    iidx: "ANOTHER",
    museca: "Red",
    maimai: "Master",
    jubeat: "EXT",
    popn: "EX",
    sdvx: "EXH",
    ddr: "EXPERT",
    bms: "CUSTOM",
    chunithm: "MASTER",
    gitadora: "MASTER",
    usc: "EXH",
};
exports.defaultDifficulty = defaultDifficulty;
function humaniseGame(game, pt) {
    if (!pt) {
        return gameHuman[game];
    }
    if (validPlaytypes[game].length === 1) {
        return gameHuman[game];
    }
    return `${gameHuman[game]} (${pt})`;
}
exports.humaniseGame = humaniseGame;
// todo, maybe
// const difficultyColours = {
//     iidx: {
//         "BEGINNER": ,
//         "NORMAL": ,
//         "HYPER": ,
//         "ANOTHER": ,
//         "LEGGENDARIA": ,
//     }
// }
const validPlaytypes = {
    iidx: ["SP", "DP"],
    popn: ["9B"],
    sdvx: ["Single"],
    ddr: ["SP", "DP"],
    maimai: ["Single"],
    jubeat: ["Single"],
    museca: ["Single"],
    bms: ["7K", "14K", "5K"],
    chunithm: ["Single"],
    gitadora: ["Gita", "Dora"],
    usc: ["Single"],
};
exports.validPlaytypes = validPlaytypes;
const validTierlistTiers = {
    iidx: ["clear", "hardclear", "exhardclear"],
    museca: ["clear"],
    maimai: [],
    jubeat: [],
    popn: [],
    sdvx: ["clear", "excessiveclear"],
    ddr: ["clear", "perfectfullcombo"],
    bms: ["easyclear", "clear", "hardclear", "fullcombo"],
    chunithm: [],
    gitadora: [],
    usc: ["clear", "excessiveclear"],
};
exports.validTierlistTiers = validTierlistTiers;
// correct order for grades
const grades = {
    iidx: ["F", "E", "D", "C", "B", "A", "AA", "AAA", "MAX-", "MAX"],
    bms: ["F", "E", "D", "C", "B", "A", "AA", "AAA", "MAX-", "MAX"],
    museca: ["没", "拙", "凡", "佳", "良", "優", "秀", "傑", "傑G"],
    maimai: ["F", "E", "D", "C", "B", "A", "AA", "AAA", "S", "S+", "SS", "SS+", "SSS", "SSS+"],
    jubeat: ["E", "D", "C", "B", "A", "S", "SS", "SSS", "EXC"],
    popn: ["E", "D", "C", "B", "A", "AA", "AAA", "S"],
    sdvx: ["D", "C", "B", "A", "A+", "AA", "AA+", "AAA", "AAA+", "S"],
    ddr: [
        "D",
        "D+",
        "C-",
        "C",
        "C+",
        "B-",
        "B",
        "B+",
        "A-",
        "A",
        "A+",
        "AA-",
        "AA",
        "AA+",
        "AAA",
        "MAX",
    ],
    chunithm: ["D", "C", "B", "BB", "BBB", "A", "AA", "AAA", "S", "SS", "SSS"],
    gitadora: ["C", "B", "A", "S", "SS", "MAX"],
    usc: ["D", "C", "B", "A", "A+", "AA", "AA+", "AAA", "AAA+", "S"],
};
exports.grades = grades;
const gradeBoundaries = {
    iidx: [0, 22.22, 33.33, 44.44, 55.55, 66.66, 77.77, 88.88, 94.44, 100.0],
    bms: [0, 22.22, 33.33, 44.44, 55.55, 66.66, 77.77, 88.88, 94.44, 100.0],
    museca: [0, 60, 70, 80, 85, 90, 95, 97.5, 100],
    // maimai is fidgety with grades - SSS+ is only possible if you get above 100%, but what the limit is depends on the chart
    maimai: [0, 10, 20, 40, 60, 80, 90, 94, 97, 98, 99, 99.5, 100, 9999],
    jubeat: [0, 50, 70, 80, 85, 90, 95, 98, 100],
    popn: [0, 50, 62, 72, 82, 90, 95, 98],
    // popn is fidgety with grades - A is the limit of grades if you fail. this NEEDS TO BE HANDLED in importhelpers. - 18/09/2020 isnt done yet lol
    sdvx: [0, 70, 80, 87, 90, 93, 95, 97, 98, 99],
    ddr: [0, 55, 59, 60, 65, 69, 70, 75, 79, 80, 85, 89, 90, 95, 99, 100],
    chunithm: [0, 50, 60, 70, 80, 90, 92.5, 95.0, 97.5, 100, 107.5, 101],
    gitadora: [0, 63, 73, 80, 95, 100],
    usc: [0, 70, 80, 87, 90, 93, 95, 97, 98, 99],
};
exports.gradeBoundaries = gradeBoundaries;
// these are to resolve some GARBAGE in chart.js
const boundaryHCF = {
    iidx: 5.555,
    bms: 5.555,
    museca: 2.5,
    maimai: 0.5,
    jubeat: 1,
    popn: 1,
    sdvx: 1,
    ddr: 1,
    chunithm: 0.5,
    gitadora: 1,
    usc: 1,
};
exports.boundaryHCF = boundaryHCF;
const expChartScale = {
    iidx: 1,
    bms: 1,
    museca: 5,
    maimai: 8,
    jubeat: 5,
    popn: 1,
    sdvx: 7,
    usc: 7,
    ddr: 6,
    chunithm: 4,
    gitadora: 3,
};
exports.expChartScale = expChartScale;
// valid lamps for a game, and also in order.
const lamps = {
    iidx: [
        "NO PLAY",
        "FAILED",
        "ASSIST CLEAR",
        "EASY CLEAR",
        "CLEAR",
        "HARD CLEAR",
        "EX HARD CLEAR",
        "FULL COMBO",
    ],
    bms: [
        "NO PLAY",
        "FAILED",
        "ASSIST CLEAR",
        "EASY CLEAR",
        "CLEAR",
        "HARD CLEAR",
        "EX HARD CLEAR",
        "FULL COMBO",
    ],
    museca: ["FAILED", "CLEAR", "CONNECT ALL", "PERFECT CONNECT ALL"],
    maimai: ["FAILED", "CLEAR", "FULL COMBO", "ALL PERFECT", "ALL PERFECT+"],
    jubeat: ["FAILED", "CLEAR", "FULL COMBO", "EXCELLENT"],
    popn: ["FAILED", "CLEAR", "FULL COMBO", "PERFECT"],
    sdvx: ["FAILED", "CLEAR", "EXCESSIVE CLEAR", "ULTIMATE CHAIN", "PERFECT ULTIMATE CHAIN"],
    ddr: [
        "FAILED",
        "CLEAR",
        "LIFE4",
        "FULL COMBO",
        "GREAT FULL COMBO",
        "PERFECT FULL COMBO",
        "MARVELOUS FULL COMBO",
    ],
    chunithm: ["FAILED", "CLEAR", "FULL COMBO", "ALL JUSTICE", "ALL JUSTICE CRITICAL"],
    gitadora: ["FAILED", "CLEAR", "FULL COMBO", "EXCELLENT"],
    usc: ["FAILED", "CLEAR", "EXCESSIVE CLEAR", "ULTIMATE CHAIN", "PERFECT ULTIMATE CHAIN"],
};
exports.lamps = lamps;
// first lamp that is considered a "true clear" by the game.
// laugh now, but who'll be laughing when some nerds at sega come up with a brand new
// minimal clear grade called "SOFTER EASIER ASSIST CLEAR EPIC X3"
const clearLamp = {
    iidx: "CLEAR",
    bms: "EASY CLEAR",
    museca: "CLEAR",
    maimai: "CLEAR",
    jubeat: "CLEAR",
    popn: "CLEAR",
    sdvx: "CLEAR",
    ddr: "CLEAR",
    chunithm: "CLEAR",
    gitadora: "CLEAR",
    usc: "CLEAR",
};
exports.clearLamp = clearLamp;
// minimum grade considered by the game (or kamaitachi) to be a clearing grade.
const clearGrade = {
    iidx: "A",
    bms: "A",
    museca: "良",
    maimai: "A",
    jubeat: "A",
    popn: "A",
    sdvx: "AA",
    ddr: "A",
    chunithm: "A",
    gitadora: "A",
    usc: "A",
};
exports.clearGrade = clearGrade;
const judgementWindows = {
    iidx: {
        SP: [
            { name: "PGREAT", msBorder: 16.667, value: 2 },
            { name: "GREAT", msBorder: 33.333, value: 1 },
            { name: "GOOD", msBorder: 116.667, value: 0 },
        ],
        DP: [
            { name: "PGREAT", msBorder: 16.667, value: 2 },
            { name: "GREAT", msBorder: 33.333, value: 1 },
            { name: "GOOD", msBorder: 116.667, value: 0 },
        ],
    },
    ddr: {
        SP: [
            { name: "MARVELOUS", msBorder: 15, value: 3 },
            { name: "PERFECT", msBorder: 30, value: 2 },
            { name: "GREAT", msBorder: 59, value: 1 },
            { name: "GOOD", msBorder: 89, value: 0 },
            { name: "BAD", msBorder: 119, value: 0 },
        ],
        DP: [
            { name: "MARVELOUS", msBorder: 15, value: 3 },
            { name: "PERFECT", msBorder: 30, value: 2 },
            { name: "GREAT", msBorder: 59, value: 1 },
            { name: "GOOD", msBorder: 89, value: 0 },
            { name: "BAD", msBorder: 119, value: 0 },
        ],
    },
    museca: {
        Single: [
            { name: "CRITICAL", msBorder: 33.333, value: 2 },
            { name: "NEAR", msBorder: 66.667, value: 1 },
        ],
    },
    gitadora: {
        Gita: [
            { name: "PERFECT", msBorder: 33, value: 1 },
            { name: "GREAT", msBorder: 57, value: 0.5 },
            { name: "GOOD", msBorder: 81, value: 0.2 },
            { name: "OK", msBorder: 116.667 /* not really, but yknow */, value: 0 },
        ],
        Dora: [
            { name: "PERFECT", msBorder: 27, value: 1 },
            { name: "GREAT", msBorder: 48, value: 0.5 },
            { name: "GOOD", msBorder: 72, value: 0.2 },
            { name: "OK", msBorder: 116.667 /* not really, but yknow */, value: 0 },
        ],
    },
};
exports.judgementWindows = judgementWindows;
const COLOUR_SET = {
    gray: "rgba(105, 105, 105, 1)",
    maroon: "rgba(85, 17, 17, 1)",
    red: "rgba(170, 85, 85, 1)",
    paleGreen: "rgba(142,174,79, 1)",
    paleBlue: "rgba(92, 97, 153, 1)",
    green: "rgba(50, 205, 50, 1)",
    blue: "rgba(70, 130, 180, 1)",
    gold: "rgba(255, 215, 0, 1)",
    vibrantYellow: "rgba(245, 229, 27, 1)",
    teal: "rgba(127, 255, 212, 1)",
    white: "rgba(192, 192, 192, 1)",
    purple: "rgba(153, 50, 204, 1)",
    vibrantPurple: "rgba(161, 23, 230, 1)",
    paleOrange: "rgba(235, 151, 78, 1)",
    orange: "rgba(248, 148, 6, 1)",
    vibrantOrange: "rgba(248, 175, 6, 1)",
    vibrantBlue: "rgba(43, 149, 237, 1)",
    vibrantGreen: "rgba(26, 232, 26, 1)",
};
const gradeColours = {
    museca: {
        outline: {
            没: COLOUR_SET.gray,
            拙: COLOUR_SET.maroon,
            凡: COLOUR_SET.red,
            佳: COLOUR_SET.paleGreen,
            良: COLOUR_SET.paleBlue,
            優: COLOUR_SET.green,
            秀: COLOUR_SET.blue,
            傑: COLOUR_SET.teal,
            傑G: COLOUR_SET.gold,
        },
    },
    gitadora: {
        outline: {
            MAX: COLOUR_SET.white,
            SS: COLOUR_SET.gold,
            S: COLOUR_SET.orange,
            A: COLOUR_SET.green,
            B: COLOUR_SET.blue,
            C: COLOUR_SET.purple,
        },
    },
    ddr: {
        outline: {
            D: COLOUR_SET.gray,
            "D+": COLOUR_SET.maroon,
            "C-": COLOUR_SET.red,
            C: COLOUR_SET.purple,
            "C+": COLOUR_SET.vibrantPurple,
            "B-": COLOUR_SET.paleBlue,
            B: COLOUR_SET.blue,
            "B+": COLOUR_SET.vibrantBlue,
            "A-": COLOUR_SET.paleGreen,
            A: COLOUR_SET.green,
            "A+": COLOUR_SET.vibrantGreen,
            "AA-": COLOUR_SET.paleOrange,
            AA: COLOUR_SET.orange,
            "AA+": COLOUR_SET.vibrantOrange,
            AAA: COLOUR_SET.gold,
        },
    },
    jubeat: {
        outline: {
            E: COLOUR_SET.gray,
            D: COLOUR_SET.maroon,
            C: COLOUR_SET.purple,
            B: COLOUR_SET.paleBlue,
            A: COLOUR_SET.paleGreen,
            S: COLOUR_SET.blue,
            SS: COLOUR_SET.gold,
            SSS: COLOUR_SET.teal,
            EXC: COLOUR_SET.white,
        },
    },
    maimai: {
        outline: {
            F: COLOUR_SET.gray,
            E: COLOUR_SET.red,
            D: COLOUR_SET.maroon,
            C: COLOUR_SET.purple,
            B: COLOUR_SET.paleGreen,
            A: COLOUR_SET.green,
            AA: COLOUR_SET.paleBlue,
            AAA: COLOUR_SET.blue,
            S: COLOUR_SET.gold,
            "S+": COLOUR_SET.vibrantYellow,
            SS: COLOUR_SET.paleOrange,
            "SS+": COLOUR_SET.orange,
            SSS: COLOUR_SET.teal,
            "SSS+": COLOUR_SET.white,
        },
    },
    popn: {
        outline: {
            F: COLOUR_SET.gray,
            E: COLOUR_SET.red,
            D: COLOUR_SET.maroon,
            C: COLOUR_SET.purple,
            B: COLOUR_SET.paleBlue,
            A: COLOUR_SET.green,
            AA: COLOUR_SET.paleOrange,
            AAA: COLOUR_SET.gold,
            S: COLOUR_SET.teal,
        },
    },
    iidx: {
        outline: {
            F: COLOUR_SET.gray,
            E: COLOUR_SET.red,
            D: COLOUR_SET.maroon,
            C: COLOUR_SET.purple,
            B: COLOUR_SET.paleBlue,
            A: COLOUR_SET.green,
            AA: COLOUR_SET.blue,
            AAA: COLOUR_SET.gold,
            "MAX-": COLOUR_SET.teal,
            MAX: COLOUR_SET.white,
        },
    },
    bms: {
        outline: {
            F: COLOUR_SET.gray,
            E: COLOUR_SET.red,
            D: COLOUR_SET.maroon,
            C: COLOUR_SET.purple,
            B: COLOUR_SET.paleBlue,
            A: COLOUR_SET.green,
            AA: COLOUR_SET.blue,
            AAA: COLOUR_SET.gold,
            "MAX-": COLOUR_SET.teal,
            MAX: COLOUR_SET.white,
        },
    },
    sdvx: {
        outline: {
            D: COLOUR_SET.gray,
            C: COLOUR_SET.red,
            B: COLOUR_SET.maroon,
            A: COLOUR_SET.paleBlue,
            "A+": COLOUR_SET.blue,
            AA: COLOUR_SET.paleGreen,
            "AA+": COLOUR_SET.green,
            AAA: COLOUR_SET.gold,
            "AAA+": COLOUR_SET.vibrantYellow,
            S: COLOUR_SET.teal,
        },
    },
    usc: {
        outline: {
            D: COLOUR_SET.gray,
            C: COLOUR_SET.red,
            B: COLOUR_SET.maroon,
            A: COLOUR_SET.paleBlue,
            "A+": COLOUR_SET.blue,
            AA: COLOUR_SET.paleGreen,
            "AA+": COLOUR_SET.green,
            AAA: COLOUR_SET.gold,
            "AAA+": COLOUR_SET.vibrantYellow,
            S: COLOUR_SET.teal,
        },
    },
    chunithm: {
        outline: {
            D: COLOUR_SET.red,
            C: COLOUR_SET.purple,
            B: COLOUR_SET.paleBlue,
            BB: COLOUR_SET.blue,
            BBB: COLOUR_SET.vibrantBlue,
            A: COLOUR_SET.paleGreen,
            AA: COLOUR_SET.green,
            AAA: COLOUR_SET.vibrantGreen,
            S: COLOUR_SET.vibrantOrange,
            SS: COLOUR_SET.vibrantYellow,
            SSS: COLOUR_SET.teal,
        },
    },
};
exports.gradeColours = gradeColours;
const lampColours = {
    gitadora: {
        outline: {
            FAILED: COLOUR_SET.red,
            CLEAR: COLOUR_SET.blue,
            "FULL COMBO": COLOUR_SET.teal,
            EXCELLENT: COLOUR_SET.gold,
        },
    },
    ddr: {
        outline: {
            FAILED: COLOUR_SET.red,
            CLEAR: COLOUR_SET.paleGreen,
            LIFE4: COLOUR_SET.orange,
            "FULL COMBO": COLOUR_SET.paleBlue,
            "GREAT FULL COMBO": COLOUR_SET.green,
            "PERFECT FULL COMBO": COLOUR_SET.gold,
            "MARVELOUS FULL COMBO": COLOUR_SET.teal,
        },
    },
    iidx: {
        outline: {
            "NO PLAY": COLOUR_SET.gray,
            FAILED: COLOUR_SET.red,
            "ASSIST CLEAR": COLOUR_SET.purple,
            "EASY CLEAR": COLOUR_SET.green,
            CLEAR: COLOUR_SET.blue,
            "HARD CLEAR": COLOUR_SET.orange,
            "EX HARD CLEAR": COLOUR_SET.gold,
            "FULL COMBO": COLOUR_SET.teal,
        },
    },
    bms: {
        outline: {
            "NO PLAY": COLOUR_SET.gray,
            FAILED: COLOUR_SET.red,
            "ASSIST CLEAR": COLOUR_SET.purple,
            "EASY CLEAR": COLOUR_SET.green,
            CLEAR: COLOUR_SET.blue,
            "HARD CLEAR": COLOUR_SET.orange,
            "EX HARD CLEAR": COLOUR_SET.gold,
            "FULL COMBO": COLOUR_SET.teal,
        },
    },
    museca: {
        outline: {
            FAILED: COLOUR_SET.red,
            CLEAR: COLOUR_SET.green,
            "CONNECT ALL": COLOUR_SET.teal,
            "PERFECT CONNECT ALL": COLOUR_SET.gold,
        },
    },
    sdvx: {
        outline: {
            FAILED: COLOUR_SET.red,
            CLEAR: COLOUR_SET.green,
            "EXCESSIVE CLEAR": COLOUR_SET.orange,
            "ULTIMATE CHAIN": COLOUR_SET.teal,
            "PERFECT ULTIMATE CHAIN": COLOUR_SET.gold,
        },
    },
    usc: {
        outline: {
            FAILED: COLOUR_SET.red,
            CLEAR: COLOUR_SET.green,
            "EXCESSIVE CLEAR": COLOUR_SET.orange,
            "ULTIMATE CHAIN": COLOUR_SET.teal,
            "PERFECT ULTIMATE CHAIN": COLOUR_SET.gold,
        },
    },
    popn: {
        outline: {
            FAILED: COLOUR_SET.red,
            CLEAR: COLOUR_SET.green,
            "FULL COMBO": COLOUR_SET.teal,
            PERFECT: COLOUR_SET.gold,
        },
    },
    maimai: {
        outline: {
            FAILED: COLOUR_SET.red,
            CLEAR: COLOUR_SET.green,
            "FULL COMBO": COLOUR_SET.blue,
            "ALL PERFECT": COLOUR_SET.gold,
            "ALL PERFECT+": COLOUR_SET.teal,
        },
    },
    jubeat: {
        outline: {
            FAILED: COLOUR_SET.red,
            CLEAR: COLOUR_SET.paleBlue,
            "FULL COMBO": COLOUR_SET.teal,
            EXCELLENT: COLOUR_SET.gold,
        },
    },
    chunithm: {
        outline: {
            FAILED: COLOUR_SET.red,
            CLEAR: COLOUR_SET.paleGreen,
            "FULL COMBO": COLOUR_SET.paleBlue,
            "ALL JUSTICE": COLOUR_SET.gold,
            "ALL JUSTICE CRITICAL": COLOUR_SET.white,
        },
    },
};
exports.lampColours = lampColours;
// ok
// shoutouts to stack overflow
// https://stackoverflow.com/questions/41993515/access-object-key-using-variable-in-typescript
function typedKeys(o) {
    return Object.keys(o);
}
for (const colourConfig of [lampColours, gradeColours]) {
    for (const game of typedKeys(colourConfig)) {
        if (colourConfig.hasOwnProperty(game)) {
            colourConfig[game].fill = {};
            for (const key in colourConfig[game].outline) {
                if (colourConfig[game].outline.hasOwnProperty(key)) {
                    const element = colourConfig[game].outline[key];
                    if (!element) {
                        continue;
                    }
                    let fadedEl = element.split(",");
                    fadedEl[fadedEl.length - 1] = "0.2)";
                    colourConfig[game].fill[key] = fadedEl.join(",");
                }
            }
        }
    }
}
const judgeColours = {
    iidx: {
        fill: {
            MISS: "rgba(211, 38, 38, 0.2)",
            BAD: "rgba(165, 38, 211, 0.2)",
            GOOD: "rgba(38, 211, 78, 0.2)",
            GREAT: "rgba(241, 245, 24, 0.2)",
            PGREAT: "rgba(158, 248, 255, 0.2)",
        },
        outline: {
            MISS: "rgba(211, 38, 38, 1)",
            BAD: "rgba(165, 38, 211, 1)",
            GOOD: "rgba(38, 211, 78, 1)",
            GREAT: "rgba(241, 245, 24, 1)",
            PGREAT: "rgba(158, 248, 255, 1)",
        },
    },
    bms: {
        fill: {
            MISS: "rgba(211, 38, 38, 0.2)",
            BAD: "rgba(165, 38, 211, 0.2)",
            GOOD: "rgba(38, 211, 78, 0.2)",
            GREAT: "rgba(241, 245, 24, 0.2)",
            PGREAT: "rgba(158, 248, 255, 0.2)",
        },
        outline: {
            MISS: "rgba(211, 38, 38, 1)",
            BAD: "rgba(165, 38, 211, 1)",
            GOOD: "rgba(38, 211, 78, 1)",
            GREAT: "rgba(241, 245, 24, 1)",
            PGREAT: "rgba(158, 248, 255, 1)",
        },
    },
    ddr: {
        fill: {
            MISS: "rgba(211, 38, 38, 0.2)",
            BOO: "rgba(165, 38, 211, 0.2)",
            GOOD: "rgba(38, 211, 78, 0.2)",
            GREAT: COLOUR_SET.green,
            PERFECT: "rgba(158, 248, 255, 0.2)",
            MARVELOUS: "rgba(241, 245, 24, 0.2)",
        },
        outline: {
            MISS: "rgba(211, 38, 38, 1)",
            BOO: "rgba(165, 38, 211, 1)",
            GOOD: "rgba(38, 211, 78, 1)",
            GREAT: ChangeAlpha(COLOUR_SET.green, "1"),
            PERFECT: "rgba(158, 248, 255, 1)",
            MARVELOUS: "rgba(241, 245, 24, 1)",
        },
    },
    museca: {
        fill: {
            MISS: "rgba(211, 38, 38, 0.2)",
            NEAR: "rgba(20, 210, 223, 0.2)",
            CRITICAL: "rgba(241, 245, 24, 0.2)",
        },
        outline: {
            MISS: "rgba(211, 38, 38, 1)",
            NEAR: "rgba(20, 210, 223, 1)",
            CRITICAL: "rgba(241, 245, 24, 1)",
        },
    },
    sdvx: {
        fill: {
            MISS: "rgba(211, 38, 38, 0.2)",
            NEAR: "rgba(20, 210, 223, 0.2)",
            CRITICAL: "rgba(241, 245, 24, 0.2)",
        },
        outline: {
            MISS: "rgba(211, 38, 38, 1)",
            NEAR: "rgba(20, 210, 223, 1)",
            CRITICAL: "rgba(241, 245, 24, 1)",
        },
    },
    usc: {
        fill: {
            MISS: "rgba(211, 38, 38, 0.2)",
            NEAR: "rgba(20, 210, 223, 0.2)",
            CRITICAL: "rgba(241, 245, 24, 0.2)",
        },
        outline: {
            MISS: "rgba(211, 38, 38, 1)",
            NEAR: "rgba(20, 210, 223, 1)",
            CRITICAL: "rgba(241, 245, 24, 1)",
        },
    },
    popn: {
        fill: {
            BAD: "rgba(165, 38, 211, 0.2)",
            GOOD: "rgba(239, 84, 81, 0.2)",
            GREAT: "rgba(241, 245, 24, 0.2)",
            PGREAT: "rgba(158, 248, 255, 0.2)",
        },
        outline: {
            BAD: "rgba(165, 38, 211, 1)",
            GOOD: "rgba(239, 84, 81, 1)",
            GREAT: "rgba(241, 245, 24, 1)",
            PGREAT: "rgba(158, 248, 255, 1)",
        },
    },
    maimai: {
        fill: {
            MISS: "rgba(211, 38, 38, 0.2)",
            GOOD: "rgba(38, 211, 78, 0.2)",
            GREAT: "rgba(228, 62, 225, 0.2)",
            PERFECT: "rgba(241, 245, 24, 0.2)",
        },
        outline: {
            MISS: "rgba(211, 38, 38, 1)",
            GOOD: "rgba(38, 211, 78, 1)",
            GREAT: "rgba(228, 62, 225,1)",
            PERFECT: "rgba(241, 245, 24, 1)",
        },
    },
    jubeat: {
        fill: {
            MISS: "rgba(211, 38, 38, 0.2)",
            POOR: "rgba(165, 38, 211, 0.2)",
            GOOD: "rgba(39, 190, 117,0.2)",
            GREAT: "rgba(38, 211, 78, 0.2)",
            PERFECT: "rgba(241, 245, 24, 0.2)",
        },
        outline: {
            MISS: "rgba(211, 38, 38, 1)",
            POOR: "rgba(165, 38, 211, 1)",
            GOOD: "rgba(39, 190, 117, 1)",
            GREAT: "rgba(38, 211, 78, 1)",
            PERFECT: "rgba(241, 245, 24, 1)",
        },
    },
    chunithm: {
        outline: {
            MISS: COLOUR_SET.gray,
            ATTACK: COLOUR_SET.green,
            JUSTICE: COLOUR_SET.orange,
            JCRIT: COLOUR_SET.gold,
        },
        fill: {
            MISS: ChangeAlpha(COLOUR_SET.gray, "1"),
            ATTACK: ChangeAlpha(COLOUR_SET.green, "1"),
            JUSTICE: ChangeAlpha(COLOUR_SET.orange, "1"),
            JCRIT: ChangeAlpha(COLOUR_SET.gold, "1"),
        },
    },
    gitadora: {
        outline: {
            MISS: COLOUR_SET.red,
            OK: COLOUR_SET.purple,
            GOOD: COLOUR_SET.blue,
            GREAT: COLOUR_SET.green,
            PERFECT: COLOUR_SET.gold,
        },
        fill: {
            MISS: ChangeAlpha(COLOUR_SET.red, "1"),
            OK: ChangeAlpha(COLOUR_SET.purple, "1"),
            GOOD: ChangeAlpha(COLOUR_SET.blue, "1"),
            GREAT: ChangeAlpha(COLOUR_SET.green, "1"),
            PERFECT: ChangeAlpha(COLOUR_SET.gold, "1"),
        },
    },
};
exports.judgeColours = judgeColours;
const gameChartIndicators = {
    iidx: ["cn", "bss", "hcn", "hbss"],
    popn: ["holds"],
    ddr: ["shocks", "freezes"],
    museca: [],
    maimai: [],
    jubeat: ["holds"],
    sdvx: [],
    usc: [],
    bms: [],
    chunithm: [],
    gitadora: [],
};
exports.gameChartIndicators = gameChartIndicators;
function GetGrade(game, percent) {
    // THIS FOR LOOP IS ITERATING DOWNWARDS
    // JUST INCASE YOU DON'T ACTUALLY READ IT PROPERLY
    for (let i = grades[game].length; i >= 0; i--) {
        let gradeName = grades[game][i];
        let gradeBound = gradeBoundaries[game][i];
        if (percent >= gradeBound) {
            return gradeName;
        }
    }
    // if we get all this way they've got a negative score
    // idk what to write in this case so ur gonna get null and throw an error in my logs
    return null;
}
exports.GetGrade = GetGrade;
const ratingParameters = {
    iidx: {
        failHarshnessMultiplier: 0.3,
        pivotPercent: 0.7777,
        clearExpMultiplier: 1,
    },
    bms: {
        failHarshnessMultiplier: 0.5,
        pivotPercent: 0.7777,
        clearExpMultiplier: 0.75,
    },
    museca: {
        failHarshnessMultiplier: 1,
        pivotPercent: 0.8,
        clearExpMultiplier: 1, // no real reason
    },
    popn: {
        failHarshnessMultiplier: 1,
        pivotPercent: 0.8,
        clearExpMultiplier: 0.4, // no real reason
    },
    maimai: {
        failHarshnessMultiplier: 1,
        pivotPercent: 0.8,
        clearExpMultiplier: 1,
    },
    jubeat: {
        failHarshnessMultiplier: 0.9,
        pivotPercent: 0.7,
        clearExpMultiplier: 1,
    },
    sdvx: {
        failHarshnessMultiplier: 1,
        pivotPercent: 0.92,
        clearExpMultiplier: 1.45, // testing
    },
    usc: {
        failHarshnessMultiplier: 1,
        pivotPercent: 0.92,
        clearExpMultiplier: 1.45, // testing
    },
    ddr: {
        failHarshnessMultiplier: 0.9,
        pivotPercent: 0.9,
        clearExpMultiplier: 1,
    },
    chunithm: {
        failHarshnessMultiplier: 1,
        pivotPercent: 0.975,
        clearExpMultiplier: 1.1,
    },
    gitadora: {
        // GENERIC PARAMS. THIS IS **NOT** THE USED CALC.
        failHarshnessMultiplier: 1,
        pivotPercent: 0.8,
        clearExpMultiplier: 1.1,
    },
};
exports.ratingParameters = ratingParameters;
function ChangeAlpha(string, alpha) {
    let spl = string.split(",");
    spl[spl.length - 1] = `${alpha})`;
    return spl.join(",");
}
exports.ChangeAlpha = ChangeAlpha;
function DirectScoreGradeDelta(game, score, percent, chart, delta) {
    let grade = GetGrade(game, percent);
    if (!grade) {
        throw new Error(`Invalid grade created from ${game}, ${percent}`);
    }
    let scoreObj = {
        scoreData: {
            score,
            grade,
        },
    };
    return ScoreGradeDelta(game, scoreObj, chart, delta);
}
exports.DirectScoreGradeDelta = DirectScoreGradeDelta;
const supportsESD = {
    iidx: true,
    museca: false,
    bms: false,
    chunithm: false,
    ddr: false,
    gitadora: false,
    jubeat: false,
    maimai: false,
    popn: false,
    sdvx: false,
    usc: false,
};
exports.supportsESD = supportsESD;
function ScoreGradeDelta(game, score, chart, delta) {
    let nextGrade = grades[game][grades[game].indexOf(score.scoreData.grade) + delta];
    if (nextGrade) {
        let nextGradePercent = gradeBoundaries[game][grades[game].indexOf(nextGrade)];
        let nGScore = CalculateScore(game, nextGradePercent, chart);
        if (nGScore) {
            let delta = score.scoreData.score - nGScore;
            let formattedString = `(${nextGrade})`;
            if (Number.isInteger(delta)) {
                formattedString += delta >= 0 ? `+${delta}` : `${delta}`;
            }
            else {
                formattedString += delta >= 0 ? `+${delta.toFixed(2)}` : `${delta.toFixed(2)}`;
            }
            return {
                grade: nextGrade,
                delta: delta,
                formattedString: formattedString,
            };
        }
        else {
            return null;
        }
    }
    else {
        return null;
    }
}
exports.ScoreGradeDelta = ScoreGradeDelta;
function AbsoluteScoreGradeDelta(game, score, percent, absDelta) {
    let grade = grades[game][absDelta];
    if (grade) {
        let chart = null;
        if (game === "iidx" || game === "bms") {
            let reversedNC = Math.floor((score / percent) * 100) / 2;
            chart = {
                notedata: {
                    notecount: reversedNC,
                },
            };
        }
        let sc = CalculateScore(game, gradeBoundaries[game][absDelta], chart);
        if (sc) {
            let delta = score - sc;
            let formattedString = `(${grade})`;
            formattedString += delta >= 0 ? `+${delta}` : `${delta}`;
            return {
                grade: grade,
                delta: delta,
                formattedString: formattedString,
            };
        }
        else {
            return null;
        }
    }
    else {
        return null;
    }
}
exports.AbsoluteScoreGradeDelta = AbsoluteScoreGradeDelta;
function CalculateScore(game, percent, chart) {
    let score = percent;
    if (game === "iidx" || game === "bms") {
        score = chart.notedata.notecount * 2 * (percent / 100);
    }
    else if (game === "ddr") {
        score = 1000000 * (percent / 100);
    }
    else if (game === "museca" || game === "jubeat") {
        score = 1000000 * (percent / 100);
    }
    else if (game === "popn") {
        score = 100000 * (percent / 100);
    }
    else if (game === "sdvx" || game === "usc") {
        score = 10000000 * (percent / 100);
    }
    else if (game === "chunithm") {
        score = 1000000 * (percent / 100);
    }
    if (score) {
        return score;
    }
    return null;
}
function PercentToScore(percent, game, chartData) {
    let eScore = 0;
    if (game === "iidx" || game === "bms") {
        eScore = percent * chartData.notedata.notecount * 2;
    }
    else if (game === "museca" || game === "jubeat") {
        eScore = percent * 1000000;
    }
    else if (game === "popn") {
        eScore = percent * 100000;
    }
    else if (game === "sdvx" || game === "usc") {
        eScore = percent * 10000000;
    }
    else if (game === "ddr") {
        // todo
    }
    else if (game === "chunithm") {
        eScore = percent * 1000000;
    }
    else if (game === "gitadora") {
        eScore = percent;
    }
    return eScore;
}
exports.PercentToScore = PercentToScore;
function FormatDifficulty(chart, game) {
    if (validPlaytypes[game].length > 1) {
        return `${chart.playtype} ${chart.difficulty} ${chart.level}`;
    }
    return `${chart.difficulty}`;
}
exports.FormatDifficulty = FormatDifficulty;
const gamePercentMax = {
    iidx: 100,
    ddr: 100,
    gitadora: 100,
    popn: 100,
    sdvx: 100,
    museca: 100,
    jubeat: 100,
    bms: 100,
    chunithm: 101,
    maimai: 150,
    maimaidx: 150,
    usc: 100,
};
exports.gamePercentMax = gamePercentMax;
//# sourceMappingURL=config.js.map