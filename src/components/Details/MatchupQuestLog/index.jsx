import React from 'react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { getWeightClass } from "../../../data/fighterList";

function MatchupQuestLog(props) {

    //--------------------------------------------------
    // BASIC PROPS & VARIABLES
    //--------------------------------------------------

    const { fighter, notes } = props;

    const [notesExpanded, setNotesExpanded] = useState(false);

    const NOTES_DISPLAY_LIMIT = 5;

    const customQuestNames = {
        "mario":                "Mamma Mia!",
        "donkey_kong":          "Primate Triumvirate",
        "link":                 "A Hero's Welcome",
        "samus":                "First Day of Prison",
        "dark_samus":           "Second Day of Prison",
        "yoshi":                "Dino Drama",
        "kirby":                "Cook-Off Showdown!",
        "fox":                  "Marvelous Mercenaries",
        "pikachu":              "Pest Control",
        "luigi":                "Making Camp",
        "ness":                 "The Missing Boy",
        "captain_falcon":       "Merciless Pursuit",
        "jigglypuff":           "Eternal Rest",
        "peach":                "From Atop Her Throne",
        "daisy":                "Girl Power",
        "bowser":               "The Lost Turtle",
        "ice_climbers":         "A Helping Hand",
        "sheik":                "Covert Operations",
        "zelda":                "The Imperial Ceremony",
        "dr_mario":             "The Malcontent Doctor",
        "pichu":                "Call the Exterminators",
        "falco":                "Bird's-Eye View",
        "marth":                "Blade-Sharp Memory",
        "lucina":               "A Twist Of Fate",
        "young_link":           "Where's the Boy Gone?",
        "ganondorf":            "Unspeakable Being",
        "mewtwo":               "It's All in the Mind",
        "roy":                  "Trail of Destruction",
        "chrom":                "The Ties that Bind",
        "gnw":                  "Glory from the Past",
        "meta_knight":          "A Previous Legacy",
        "pit":                  "Language Teacher",
        "dark_pit":             "Recovery and Reflection",
        "zss":                  "Can't Escape",
        "wario":                "Time is Money",
        "snake":                "A Tough Battle",
        "ike":                  "Fresh and Fruity",
        "squirtle":             "The Three Fiends",
        "ivysaur":              "The Three Fiends",
        "charizard":            "The Three Fiends",
        "diddy_kong":           "Natural Selection",
        "lucas":                "Cultural Exchange",
        "sonic":                "The Broken Watch",
        "king_dedede":          "Cook-Off Counter Attack!",
        "olimar":               "Flattened Flowers",
        "lucario":              "Mastering Self",
        "rob":                  "Stop the Mechon Rampage!",
        "toon_link":            "Proof of Courage",
        "wolf":                 "Lone Wolf",
        "villager":             "A Community Service",
        "mega_man":             "Artificial Intelligence",
        "wii_fit_trainer":      "A Revised Regimen",
        "rosalina":             "Eliminate the Backup!",
        "little_mac":           "A Merciful End",
        "greninja":             "The Greedy Monster",
        "mii_brawler":          "Thieving Monsters",
        "mii_sword":            "The Calm and the Storm",
        "mii_gunner":           "Third Day of Prison",
        "palutena":             "A Mysterious Light",
        "pac_man":              "Bearing Fruit",
        "robin":                "Tactician's Plan",
        "shulk":                "The Future Within Our Grasp",
        "bowser_jr":            "Lousy Lizards",
        "duck_hunt":            "Rules of the Hunt",
        "ryu":                  "The Expert Warrior",
        "ken":                  "Flames of Justice",
        "cloud":                "Limits of Awareness",
        "corrin":               "Family Secrets",
        "bayonetta":            "Bewitching Dance",
        "inkling":              "Turf War",
        "ridley":               "Ponspectors Till We Cry",
        "simon":                "Bloodsuckers",
        "richter":              "Night Visitors",
        "king_k_rool":          "Defend Colony 6 - Reptile",
        "isabelle":             "Canine Conversation",
        "incineroar":           "Nine Lives",
        "piranha_plant":        "Ecological Survey",
        "joker":                "Stop, Thief!",
        "hero":                 "Power Up!",
        "banjo":                "Birds of a Feather",
        "terry":                "To Face Forward",
        "byleth":               "School is in Session",
        "min_min":              "Arms Testers Wanted",
        "steve":                "Clearing Obstructions",
        "sephiroth":            "The Old Gods",
        "pyra":                 "We Meet Again",
        "mythra":               "We Meet Again",
        "kazuya":               "Defend Colony 6 - Demon",
        "sora":                 "Where The Heart Is"
    }


    //--------------------------------------------------
    // BUILD MARKUP
    //--------------------------------------------------

    const questName = (customQuestNames[fighter.id] !== "") ? customQuestNames[fighter.id] : "Eliminate the Threat";

    const portrait = `/images/fighters/portrait/${fighter.image}`;

    const notesMarkup = [];
    const notesRenderLimit = (notesExpanded) ? notes.length : Math.min(NOTES_DISPLAY_LIMIT, notes.length);
    for (let i = 0; i < notesRenderLimit; i++) {
        notesMarkup.push(
            <li key={`notes-${i}`}>
                {/* {notes[i]} */}
                <ReactMarkdown
                    children={notes[i]}
                    allowedElements={["p", "strong", "em", "a", "del"]}
                    remarkPlugins={[remarkGfm]}
                />
            </li>
        );
    }

    return (
        <>
            <section className="c-quest-log">
                
                <div className="c-quest-log__description">
                    <h2 className="c-quest-log__title">
                        {questName}
                    </h2>

                    <div className="c-quest-log__section">
                        <h3 className="c-quest-log__heading">Challenged By</h3>
                        <div className="c-quest-log__challenger">
                            <img src={portrait} alt=""/>
                        </div>
                        <div className="c-quest-log__section-row">
                            {fighter.name}
                        </div>
                        <table>
                            <tbody>
                            <tr>
                                <td>Weight Class</td>
                                <td className="text-end">
                                    {getWeightClass(fighter.weight)}
                                </td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td className="text-end">
                                    {fighter.weight}
                                </td>
                            </tr>
                            <tr>
                                <td>Fall Speed</td>
                                <td className="text-end">
                                    {fighter.fallSpeed}
                                </td>
                            </tr>
                            <tr>
                                <td>Airdodge</td>
                                <td className="text-end">
                                    {fighter.airdodge}
                                </td>
                            </tr>
                            <tr>
                                <td>Fastest Escape ({fighter.escapeName})</td>
                                <td className="text-end">
                                    {fighter.escape}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="c-quest-log__details">
                    <h3 className="c-quest-log__heading">Quest Details</h3>
                    <ul>
                        {notesMarkup}
                    </ul>
                    {
                        (notes.length > NOTES_DISPLAY_LIMIT) &&
                        <button type="button" className="btn mt-2" onClick={() => setNotesExpanded(!notesExpanded)}>
                            Show {notesExpanded ? "Less" : "More"}
                        </button>
                    }
                </div>

            </section>
        </>
    );
}

export default MatchupQuestLog;
