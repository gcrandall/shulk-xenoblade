// React
import { useState, useEffect } from 'react';

// Custom Components
import ArtSelector from './ArtSelector';
import ValueIcon from '../ValueIcon';

// Data
import type { FighterListing, FrameDataFighter, FrameDataCollection, MonadoArtSafetyCollection } from '../../../data/dataTypes';
import frameDataRaw from '../../../data/frameData.json';
import monadoArtSafetyRaw from '../../../data/monadoArtSafety.json';

type MatchupSafetyOnBlockProps = {
    fighter: FighterListing;
}

type OutOfShieldOption = {
    name: string;
    startup: number;
    addedFrames: number;
}

type OffensiveOption = {
    name: string;
    Adv_Collection: number[];
}

const MatchupSafetyOnBlock = ({ fighter }: MatchupSafetyOnBlockProps) => {

    //--------------------------------------------------
    // BASIC VARIABLES
    //--------------------------------------------------

    const [offenseMode, setOffenseMode] = useState(true);
    const [opponentOutOfShield, setOpponentOutOfShield] = useState<OutOfShieldOption[]>([]);
    const [opponentOffensiveMoves, setOpponentOffensiveMoves] = useState<OffensiveOption[]>([]);
    const [safestShulkMoves, setSafestShulkMoves] = useState<string[]>([]);
    const [activeArt, setActiveArt] = useState("Vanilla");

    const frameData = frameDataRaw as FrameDataCollection;
    const monadoArtSafety = monadoArtSafetyRaw as MonadoArtSafetyCollection;

    const opponentPortrait = `/images/fighters/portrait/${fighter.image}`;
    const shulkPortrait = `/images/fighters/portrait/57.webp`;
    const opponentData: FrameDataFighter = frameData[fighter.frameDataName];

    const AIR_SLASH_STARTUP = 10;
    const JUMP_SQUAT_FRAMES = 3;
    const JUMP_SQUAT_FRAMES_KAZUYA = 7;
    const GRAB_ADDED_FRAMES = 4;
    const SHIELD_DROP_FRAMES = 11;


    //--------------------------------------------------
    // PARSE FRAME DATA
    //--------------------------------------------------

    useEffect(() => {
        // Determine opponent's OOS options
        let oos: OutOfShieldOption[] = [];
        for (const [moveName, moveData] of Object.entries(opponentData.Moves)) {
            // Grab
            if ( moveName === "Grab" ) {
                oos.push({
                    name: moveName,
                    startup: Math.min(...moveData["Startup_Collection"]),
                    addedFrames: GRAB_ADDED_FRAMES
                })
                continue;
            }

            // Direct out of shield options
            if (
                moveData["Out of Shield"]
                && (moveData["Startup_Collection"].length > 0)
            ) {
                oos.push({
                    name: moveName,
                    startup: Math.min(...moveData["Startup_Collection"]),
                    addedFrames: 0
                })
                continue;
            }

            // Aerials
            if (
                moveData["Air"]
                && (moveData["Startup_Collection"].length > 0)
                && (moveData["Link Index"] === null)
            ) {
                oos.push({
                    name: moveName,
                    startup: Math.min(...moveData["Startup_Collection"]),
                    addedFrames: ((fighter.name !== "Kazuya") ? JUMP_SQUAT_FRAMES : JUMP_SQUAT_FRAMES_KAZUYA)
                })
                continue;
            }

            // Drop shield grounded moves
            if (
                moveData["Grounded"]
                && (moveData["Startup_Collection"].length > 0)
                && (moveData["Link Index"] === null)
            ) {
                oos.push({
                    name: moveName,
                    startup: Math.min(...moveData["Startup_Collection"]),
                    addedFrames: SHIELD_DROP_FRAMES
                })
                continue;
            }
        }
        oos.sort((a, b) => ((a.startup + a.addedFrames) > (b.startup + b.addedFrames)) ? 1 : -1);
        setOpponentOutOfShield(
            [oos[0], oos[1], oos[2], oos[3], oos[4]]
        );

        // Determine opponent's offensive options
        let offense: OffensiveOption[] = [];
        for (const [moveName, moveData] of Object.entries(opponentData.Moves)) {
            if ((moveData["Adv_Collection"].length > 0)) {
                offense.push({
                    name: moveName,
                    Adv_Collection: moveData["Adv_Collection"]
                });
            }
        }
        offense.sort(
            (a, b) => ((Math.max(...a["Adv_Collection"])) < (Math.max(...b["Adv_Collection"]))) ? 1 : -1
        );
        setOpponentOffensiveMoves(offense);

        // Order Shulk's moves from safest to least safe
        let safest: string[] = [];
        for (const [moveName] of Object.entries(monadoArtSafety)) {
            safest.push(moveName);
        }
        safest.sort(
            (a, b) => ((Math.max(...monadoArtSafety[a]["Vanilla"])) < (Math.max(...monadoArtSafety[b]["Vanilla"]))) ? 1 : -1
        );
        setSafestShulkMoves(safest);
    }, []);
    

    //--------------------------------------------------
    // BUILD MARKUP
    //--------------------------------------------------

    const formatSafetyValues = (vals: number[]): string => {
        let result = "";
        for (let i = 0; i < vals.length; i++) {
            result += vals[i];
            if (i !== vals.length - 1) {
                result += "/";
            }
        }
        return result;
    }

    let currentArt = (activeArt !== "Jump") ? activeArt : "Vanilla";

    const attackerInteractionsMarkup: JSX.Element[] = [];
    for (let i = 0; i < safestShulkMoves?.length; i++) {
        let safetyValues = monadoArtSafety[safestShulkMoves[i]][currentArt];
        let safestValue = Math.max(...safetyValues);

        // Do not display moves with no safety data
        if (safetyValues.length <= 0) {
            continue;
        }
        
        attackerInteractionsMarkup.push(
            <tr key={`attacker-row-${i}`}>
                <td>
                    {safestShulkMoves[i]}
                    <span className="small">({formatSafetyValues(safetyValues)})</span>
                </td>
                <td className="text-end">
                    {opponentOutOfShield.map(option => {
                        return (
                            <span key={`${option.name}`}>
                                {option.name} ({(option.startup + option.addedFrames)})
                                <ValueIcon
                                    value={((option.startup + option.addedFrames) + safestValue <= 0)}
                                    className="ms-2"
                                />
                            </span>
                        );
                    })}
                </td>
            </tr>
        );
    }

    const defenderInteractionsMarkup: JSX.Element[] = [];
    for (let i = 0; i < opponentOffensiveMoves.length; i++) {
        let safetyValues = opponentOffensiveMoves[i]["Adv_Collection"];
        let safestValue = Math.max(...safetyValues);

        defenderInteractionsMarkup.push(
            <tr key={`defender-row-${i}`}>
                <td>
                    {opponentOffensiveMoves[i].name}
                    <span className="small">({formatSafetyValues(safetyValues)})</span>
                </td>
                <td className="text-end align-middle">
                    <ValueIcon
                        value={(AIR_SLASH_STARTUP + safestValue <= 0)}
                        className="ms-2"
                    />
                    {/* <span className="small">
                        Leniency: 0
                    </span> */}
                </td>
            </tr>
        );
    }


    return (
        <>
            <section className="c-card c-card--dark">
                <h2 className="c-card__header">Safety on Block</h2>

                <div className="c-safety-calc">
                    
                    <div className="c-safety-calc__fighters">
                        <div className="c-safety-calc__fighters-portrait">
                            <img
                                src={(offenseMode) ? shulkPortrait : opponentPortrait}
                                alt={(offenseMode) ? "Shulk" : fighter.name}
                            />
                        </div>
                        <div className="c-safety-calc__fighters-swap">
                            <button className="btn" title={`Switch to ${(offenseMode) ? "defender" : "attacker"} mode`} onClick={() => setOffenseMode(!offenseMode)}>
                                <span className="icon-arrows-cw"></span>
                                <span className="visually-hidden">Switch to {(offenseMode) ? "defender" : "attacker"} mode</span>
                            </button>
                        </div>
                        <div className="c-safety-calc__fighters-portrait">
                            <img
                                src={(offenseMode) ? opponentPortrait : shulkPortrait}
                                alt={(offenseMode) ? fighter.name : "Shulk"}
                            />
                        </div>
                    </div>

                    {
                        offenseMode &&
                        <ArtSelector
                            art={activeArt}
                            callback={(art: string) => setActiveArt(art)}
                        />
                    }

                    <div className="c-safety-calc__data">
                        <table className="c-data-table">
                            <tbody>
                                {
                                    offenseMode
                                        ? (
                                            <>
                                                <tr>
                                                    <th>Move</th>
                                                    <th className="text-end">Punishable?</th>
                                                </tr>
                                                {attackerInteractionsMarkup}
                                            </>
                                        ) : (
                                            <>
                                                <tr>
                                                    <th>Move</th>
                                                    <th className="text-end">Air Slash?</th>
                                                </tr>
                                                {defenderInteractionsMarkup}
                                            </>
                                        )
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MatchupSafetyOnBlock;
