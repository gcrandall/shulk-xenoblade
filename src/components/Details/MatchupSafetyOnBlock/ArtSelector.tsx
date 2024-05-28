type ArtSelectorProps = {
    art: string;
    callback: Function;
}

const ArtSelector = ({ art, callback }: ArtSelectorProps) => {

    const artDefinitions: Array<{ name: string; icon: string; }> = [
        {name: "Vanilla",   icon: "icon-x"},
        {name: "Jump",      icon: "icon-monado-jump"},
        {name: "Speed",     icon: "icon-monado-speed"},
        {name: "Shield",    icon: "icon-monado-shield"},
        {name: "Buster",    icon: "icon-monado-buster"},
        {name: "Smash",     icon: "icon-monado-smash"},
    ]

    const buttonElements = artDefinitions.map((artDef) => {
        return (
            <button
                type="button"
                title={artDef.name}
                className={`${artDef.icon}${(art === artDef.name) ? " active" : ""}`}
                onClick={() => callback(artDef.name)}
                key={`monado-art-${artDef.name}`}
            >
                <span className="visually-hidden">{artDef.name}</span>
            </button>
        )
    });


    return (
        <>
            <div className="c-safety-calc__arts">
                {buttonElements}
            </div>
        </>
    );
}

export default ArtSelector;
