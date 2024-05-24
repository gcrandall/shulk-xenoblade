// React
import React  from 'react';
import { Link } from 'react-router-dom';

// Fighter Data
import { getWeightClass } from '../../../data/fighterList';


function FighterCard(props) {

    //--------------------------------------------------
    // BASIC PROPS & VARIABLES
    //--------------------------------------------------

    const { fighter } = props;

    const portrait = `/images/fighters/tile/${fighter.image}`;

    return (
        <>
            <Link to={`/details/${fighter?.id}`} className="text-decoration-none">
                <div className="c-card c-fighter-card">
                    <img src={portrait} className="c-fighter-card__portrait" alt=""/>
                    
                    {/* <span className="c-fighter-card__divider">
                        <span></span>
                    </span> */}
                    <div className="c-fighter-card__details">
                        <h2 className="c-fighter-card__title">
                            <div className="c-fighter-card__num" title="Weight Class">{getWeightClass(fighter?.weight)}</div>
                            <div className="c-fighter-card__name">{fighter?.name}</div>
                        </h2>
                        <span className="c-fighter-card__divider c-fighter-card__divider--horizontal">
                            <span></span>
                        </span>
                        <table>
                            <tbody>
                                {/* <tr>
                                    <th>Wgt</th>
                                    <td>{fighter?.weight}</td>
                                </tr> */}
                                <tr>
                                    <th>Esc</th>
                                    <td>{fighter?.escape}</td>
                                </tr>
                                <tr>
                                    <th>Adg</th>
                                    <td>{fighter?.airdodge}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default FighterCard;