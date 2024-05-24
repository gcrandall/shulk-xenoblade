// React

function MatchupBusterDthrowWindows(props) {

    const { data } = props;

    if (!data) {
        return <></>;
    }

    const createWindowsMarkup = (arr) => {
        if ( (arr.length === 0) || ((arr.length === 1) && (arr[0].length === 0)) ) {
            return <span className="text-light" key="na">N/A</span>
        }

        const markup = arr.map((x, i) => {
            return <span key={i}>{x[0]} - {x[1]}%</span>;
        });
        return markup;
    }

    return (
        <>
            <section className="c-card c-card--purple">
                <h2 className="c-card__header">Buster D-Throw Windows</h2>

                <table className="c-data-table">
                    <tbody>
                        <tr>
                            <td>D-Tilt</td>
                            <td className="text-end">
                                {createWindowsMarkup(data.dtilt)}
                            </td>
                        </tr>
                        <tr>
                            <td>F-Tilt</td>
                            <td className="text-end">
                                {createWindowsMarkup(data.ftilt)}
                            </td>
                        </tr>
                        <tr>
                            <td>F-Smash</td>
                            <td className="text-end">
                                {createWindowsMarkup(data.fsmash)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    );
}

export default MatchupBusterDthrowWindows;