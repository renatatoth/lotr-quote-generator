import classes from './QuoteBox.module.css';

const QuoteBox = ({dialog, char}) => {
    return (
        <div className={classes.container}>
            <span className={classes.symbols}/>
            <p className={classes.dialog}>{dialog}</p>
            <p className={classes.character}>{char && "- "}{char}</p>
        </div>
    );
};

export default QuoteBox;