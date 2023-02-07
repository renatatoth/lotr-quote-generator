import classes from './Button.module.css';

const Button = ({btnClickHandler}) => {
    return (
        <button onClick={btnClickHandler} type="button" className={classes.button}>Generate</button>
    );
};

export default Button;