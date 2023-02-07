import classes from "./Header.module.css";

const Header = () => {
    return (
        <header><h1 className={classes.mainHeading}>Lord of the Rings Quote Generator</h1></header>
    );
};

export default Header;