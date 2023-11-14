function ArtSelector(props) {

    //--------------------------------------------------
    // BASIC PROPS & VARIABLES
    //--------------------------------------------------

    const { art, callback } = props;

    const artDefinitions = [
        {name: "Vanilla", icon: "icon-x"},
        {name: "Jump", icon: "icon-monado-jump"},
        {name: "Speed", icon: "icon-monado-speed"},
        {name: "Shield", icon: "icon-monado-shield"},
        {name: "Buster", icon: "icon-monado-buster"},
        {name: "Smash", icon: "icon-monado-smash"},
    ]

    const buttonsMarkup = [];
    for (let i = 0; i < artDefinitions.length; i++) {
        buttonsMarkup.push(
            <button
                type="button"
                title={artDefinitions[i].name}
                className={`${artDefinitions[i].icon}${(art === artDefinitions[i].name) ? " active" : ""}`}
                onClick={() => callback(artDefinitions[i].name)}
                key={`monado-art-${artDefinitions[i].name}`}
            >
                <span className="visually-hidden">{artDefinitions[i].name}</span>
            </button>
        );
    }


    return (
        <>
            <div className="c-safety-calc__arts">
                {buttonsMarkup}
            </div>
        </>
    );
}

export default ArtSelector;
