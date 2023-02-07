import arrow from './../images/arrow-down-icon.png';
import classes from "./Select.module.css";

const Select = ({movies, onToggle, onSelect, btnValue, showOptions, showError}) => {
    const onMovieChange = (e) => {
        const movie = e.target.value;
        onToggle();
        onSelect(movie);
    };

    return (
        <div className={classes.container}>
            <button type="button" onClick={onToggle} className={classes.selectBtn}>{btnValue}
                <img src={arrow} className={`${classes.icon} ${showOptions && classes.rotate}`} alt="Arrow icon"/>
            </button>
            <ul className={`${classes.optionsList} ${showOptions && classes.show}`}>
                {movies.map((movie, index) =>
                    <li key={index}>
                        <button type="button" value={movie} className={classes.option} onClick={onMovieChange}>{movie}</button>
                    </li>
                )}
            </ul>
            {showError && <p className={classes.error}>Please select a movie</p>}
        </div>
    );
};

export default Select;