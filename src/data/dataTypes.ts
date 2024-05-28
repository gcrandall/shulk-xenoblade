//--------------------------------------------------
// MAIN APP
//--------------------------------------------------

export type FighterListing = {
    id: string;
    number: string;
    name: string;
    frameDataName: string;
    image: string;
    ufd: string;
    dragdown: string;
    weight: number;
    fallSpeed: number;
    airdodge: number;
    escape: number;
    escapeName: string;
    searchTerms: string;
}

export type SortOption = {
    name: string;
    sortOrder: (a: FighterListing, b: FighterListing) => number;
}


//--------------------------------------------------
// FIGHTER DATA
//--------------------------------------------------

export type FighterBusterDthrowComboTree = {
    dtilt: number[][];
    ftilt: number[][];
    fsmash: number[][];
}

type FighterLedgeOptionsFtilt = {
    neutralGetupRoll: boolean;
    neutralGetupAttack: boolean;
}

type FighterLedgeOptionsUsmash = {
    neutralGetupRoll: boolean;
    notes: string | null;
}

type FighterLedgeOptionsFsmash = {
    hits: boolean;
    notes: string | null;
}

type FighterLedgeOptionsDtilt = {
    hits: boolean;
    outrangesGetupAttack: boolean;
    notes: string | null;
}

export type FighterLedgeOptions = {
    ftilt: FighterLedgeOptionsFtilt;
    usmash: FighterLedgeOptionsUsmash;
    fsmash: FighterLedgeOptionsFsmash;
    dtilt: FighterLedgeOptionsDtilt;
    airslash: boolean;
    cornerBusterPivotDsmashShieldBreak: boolean;
    cornerBusterPivotDsmashShieldBreakNotes?: string | null;
}

export type FighterVod = {
    shulk: string;
    opponent: string;
    id: string;
    timeStamp: number | null;
}

export type FighterData = {
    inheritNotesFrom: string | null;
    notesShort: string[];
    busterDthrowComboTree: FighterBusterDthrowComboTree;
    ledgeOptions: FighterLedgeOptions;
    inheritVodsFrom: string | null;
    vods: FighterVod[];
}


//--------------------------------------------------
// YOUTUBE
//--------------------------------------------------

type YouTubeVodThumbnail = {
    url: string;
    width: number;
    height: number;
}

export type YouTubeVodSnippet = {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
        default: YouTubeVodThumbnail;
        medium: YouTubeVodThumbnail;
        high: YouTubeVodThumbnail;
        standard: YouTubeVodThumbnail;
        maxres: YouTubeVodThumbnail;
    };
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
        title: string;
        description: string;
    };
}

export type YouTubeVod = {
    etag: string;
    id: string;
    kind: string;
    snippet: YouTubeVodSnippet;
}

export interface FighterVodDetailed extends FighterVod {
    snippet: YouTubeVodSnippet;
}


//--------------------------------------------------
// FIGHTER FRAME DATA
//--------------------------------------------------

export type FrameDataMove = {
    "index": number;
    "Startup": string | null;
    "Total Frames": string | null;
    "Landing Lag": string | null;
    "Additional Notes": string | null;
    "Base Damage": string | null;
    "Shieldlag": string | null;
    "Shieldstun": string | null;
    "<-Which hitbox?": string | null;
    "Advantage": string | null;
    "Grounded": boolean;
    "Air": boolean;
    "Class": number;
    "Move_Class": string | null;
    "Base Link": string | null;
    "Prev_Link": string | null;
    "Link Index": number | null;
    "Out of Shield": boolean;
    "Dash": boolean;
    "Air Special": boolean;
    "Ground Special": boolean;
    "Move_ID": number;
    "Shieldstun_Collection": number[] | string;
    "Startup_Collection": number[];
    "Adv_Collection": number[];
    "Total_Frames_Collection": number[] | string;
    "Damage_Collection": number[] | string;
}

export type FrameDataFighter = {
    Moves: {
        [key: string]: FrameDataMove;
    };
    "Number": string;
    "Internal Name": string;
}

export type FrameDataCollection = {
    [key: string]: FrameDataFighter;
}


//--------------------------------------------------
// MONADO ART SAFETY
//--------------------------------------------------

export type MonadoArtSafetyMove = {
    [key: string]: number[];
}

export type MonadoArtSafetyCollection = {
    [key: string]: MonadoArtSafetyMove;
}