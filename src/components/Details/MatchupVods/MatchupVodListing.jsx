// React
import React from 'react';

function MatchupVodListing(props) {

    const { vod } = props;

    const vodSnippet = vod.snippet;
    const dateString = new Date(vodSnippet.publishedAt).toLocaleDateString();

    const videoURL = `https://www.youtube.com/watch?v=${vod.id}${(vod.timeStamp !== null) ? ("&t=" + vod.timeStamp) : ""}`;

    return (
        <>
            <li className="c-matchup-vods__listing">
                <a href={videoURL} className="text-decoration-none" target="_blank" rel="noreferrer">
                    <div className="c-matchup-vods__listing-img">
                        <img src={vodSnippet.thumbnails.medium.url} alt="" />
                    </div>
                    <div className="c-matchup-vods__listing-details">
                        <h3 className="c-matchup-vods__listing-title">{vodSnippet.title}</h3>
                        <table className="small">
                            <tbody>
                                <tr>
                                    <th>Shulk</th>
                                    <td>{vod.shulk}</td>
                                </tr>
                                <tr>
                                    <th>Opponent</th>
                                    <td>{vod.opponent}</td>
                                </tr>
                                <tr>
                                    <th>Date</th>
                                    <td>{dateString}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </a>
            </li>
        </>
    );
}

export default MatchupVodListing;
