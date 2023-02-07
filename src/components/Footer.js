import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <p>Made with the <a href="https://www.npmjs.com/package/random-lotr-movie-quote">random-lotr-movie-quote</a> package.</p>
        </footer>
    );
};

export default Footer;