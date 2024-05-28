type ValueIconProps = {
    value: boolean | null;
    className?: string;
}

type IconDefinition = {
    title: string;
    icon: string;
    color: string;
}

type IconCollection = {
    [key: string]: IconDefinition;
}

const ValueIcon = ({ value, className }: ValueIconProps) => {

    if ( value == null) {
        return (
            <span>---</span>
        );
    }

    const icons: IconCollection = {};
    icons["false"] = {
        title: "No",
        icon: "icon-false",
        color: "text-no"
    };
    icons["true"] = {
        title: "Yes",
        icon: "icon-true",
        color: "text-yes"
    };

    let valueString = (value) ? "true" : "false";

    let classes = `${icons[valueString].icon} ${icons[valueString].color} ${className}`;
    classes = classes.trim();

    return (
        <>
            <i className={classes} title={icons[valueString].title}></i>
        </>
    );
}

export default ValueIcon;
