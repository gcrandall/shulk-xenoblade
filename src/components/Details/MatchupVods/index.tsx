// React
import { useState, useEffect } from 'react';

// Custom Components
import MatchupVodListing from './MatchupVodListing';

// Data
import type { FighterVod, FighterVodDetailed, YouTubeVod } from '../../../data/dataTypes';

type MatchupVodsProps = {
    vods: FighterVod[] | null;
}

const MatchupVods = ({ vods }: MatchupVodsProps) => {

    const [vodsData, setVodsData] = useState<YouTubeVod[] | null>(null);
    const [vodsCombinedData, setVodsCombinedData] = useState<FighterVodDetailed[] | null>(null);

    if (!vods) {
        return <></>;
    }

    useEffect(() => {
        let videoIds = "";
        for (let i = 0; i < vods.length; i++) {
            videoIds += vods[i].id;
            if (i !== vods.length - 1) {
                videoIds += ",";
            }
        }
        if (videoIds.length > 0) {
            const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
            const API_ENDPOINT = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoIds}&key=${API_KEY}`;

            fetch(API_ENDPOINT)
                .then(response => response.json())
                .then(data => setVodsData(data.items))
                .catch((error) => console.log("error loading video details", error));
        }
    }, [vods]);

    useEffect(() => {
        if (vodsData === null) {
            return;
        }

        let result: FighterVodDetailed[] = vods.map((v, i) => {
            return {
                shulk: v.shulk,
                opponent: v.opponent,
                id: v.id,
                timeStamp: v.timeStamp,
                snippet: vodsData[i].snippet
            }
        });
        result.sort(
            (a, b) => (
                (new Date(a.snippet.publishedAt).getTime()) < (new Date(b.snippet.publishedAt).getTime())
            ) ? 1 : -1
        );
        setVodsCombinedData(result);
    }, [vodsData]);


    return (
        <>
            <section className="c-card">
                <h2 className="c-card__header">VODs ({vods.length})</h2>
                
                <a href="https://forms.gle/tCGt8sYxRBjeJqNJ8" className="btn mb-2 ms-2 me-2 link-ext" target="_blank" rel="noreferrer">
                    Submit VODs
                </a>

                <ul className="c-matchup-vods">
                    {
                        (vodsCombinedData !== null)
                        ? (
                            vodsCombinedData.map((x, i) => {
                                return (
                                    <MatchupVodListing vod={x} key={i} />
                                )
                            })
                        ) : (
                            <li className="c-matchup-vods__listing c-matchup-vods__listing--empty">
                                {
                                    (vods.length === 0) ? "No data" : "Loading..."
                                }
                            </li>
                        )   
                    }
                </ul>
            </section>
        </>
    );
}

export default MatchupVods;
