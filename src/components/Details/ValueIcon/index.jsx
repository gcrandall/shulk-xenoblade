function ValueIcon(props) {

    const { value, className } = props;

    if ( value == null) {
        return (
            <span>---</span>
        );
    }

    const icons = {};
    icons[false] = {
        title: "No",
        icon: "icon-false",
        color: "text-no"
    };
    icons[true] = {
        title: "Yes",
        icon: "icon-true",
        color: "text-yes"
    };

    let classes = `${icons[value].icon} ${icons[value].color} ${className}`;
    classes = classes.trim();

    return (
        <>
            <i className={classes} title={icons[value].title}></i>
        </>
    );
}

export default ValueIcon;
