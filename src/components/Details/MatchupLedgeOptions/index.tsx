// Custom Components
import ValueIcon from '../ValueIcon';

// Data
import type { FighterLedgeOptions } from '../../../data/dataTypes';

type MatchupLedgeOptionsProps = {
    data: FighterLedgeOptions | undefined;
}

const MatchupLedgeOptions = ({ data }: MatchupLedgeOptionsProps) => {

    if (!data) {
        return <></>;
    }

    const usmashNotesIncrement: number = (data.usmash.notes != null) ? 1 : 0;
    const fsmashNotesIncrement: number = usmashNotesIncrement + ((data.fsmash.notes != null) ? 1 : 0);;
    const dsmashNotesIncrement: number = fsmashNotesIncrement + ((data.cornerBusterPivotDsmashShieldBreakNotes != null) ? 1 : 0);
    const dtiltNotesIncrement: number = dsmashNotesIncrement + ((data.dtilt.notes != null) ? 1 : 0);

    return (
        <>
            <section className="c-card c-card--teal">
                <h2 className="c-card__header">Ledge Options</h2>

                <table className="c-data-table">
                    <tbody>
                        <tr>
                            <td>F-Tilt Neutral Getup + Roll</td>
                            <td className="text-center">
                                <ValueIcon value={data.ftilt.neutralGetupRoll} />
                            </td>
                        </tr>
                        <tr>
                            <td>F-Tilt Neutral Getup + Getup Attack</td>
                            <td className="text-center">
                                <ValueIcon value={data.ftilt.neutralGetupAttack} />
                            </td>
                        </tr>
                        <tr>
                            <td>U-Smash Roll + Neutral Getup</td>
                            <td className="text-center">
                                <ValueIcon value={data.usmash.neutralGetupRoll} />
                                {(data.usmash.notes != null) && <sup>{usmashNotesIncrement}</sup>}
                            </td>
                        </tr>
                        <tr>
                            <td>Air Slash at ledge</td>
                            <td className="text-center">
                                <ValueIcon value={data.airslash} />
                            </td>
                        </tr>
                        <tr>
                            <td>F-Smash at ledge</td>
                            <td className="text-center">
                                <ValueIcon value={data.fsmash.hits} />
                                {(data.fsmash.notes != null) && <sup>{fsmashNotesIncrement}</sup>}
                            </td>
                        </tr>
                        <tr>
                            <td>Corner Buster Pivot D-Smash Shield Break</td>
                            <td className="text-center">
                                <ValueIcon value={data.cornerBusterPivotDsmashShieldBreak} />
                                {(data.cornerBusterPivotDsmashShieldBreakNotes != null) && <sup>{dsmashNotesIncrement}</sup>}
                            </td>
                        </tr>
                        <tr>
                            <td>D-Tilt hits ledge hang</td>
                            <td className="text-center">
                                <ValueIcon value={data.dtilt.hits} />
                                {(data.dtilt.notes != null) && <sup>{dtiltNotesIncrement}</sup>}
                            </td>
                        </tr>
                        <tr>
                            <td>D-Tilt outranges Getup Attack</td>
                            <td className="text-center">
                                <ValueIcon value={data.dtilt.outrangesGetupAttack} />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="c-card__footnotes">
                    {
                        (data.usmash.notes != null) &&
                        <p className="small">
                            <sup>{usmashNotesIncrement}</sup>{data.usmash.notes}
                        </p>
                    }
                    {
                        (data.fsmash.notes != null) &&
                        <p className="small">
                            <sup>{fsmashNotesIncrement}</sup>{data.fsmash.notes}
                        </p>
                    }
                    {
                        (data.cornerBusterPivotDsmashShieldBreakNotes != null) &&
                        <p className="small">
                            <sup>{dsmashNotesIncrement}</sup>{data.cornerBusterPivotDsmashShieldBreakNotes}
                        </p>
                    }
                    {
                        (data.dtilt.notes != null) &&
                        <p className="small">
                            <sup>{dtiltNotesIncrement}</sup>{data.dtilt.notes}
                        </p>
                    }
                </div>
            </section>
        </>
    );
}

export default MatchupLedgeOptions;