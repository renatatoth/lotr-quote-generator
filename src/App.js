import {useState} from "react";
import Header from "./components/Header";
import QuoteBox from './components/QuoteBox';
import Button from './components/Button';
import Footer from "./components/Footer";
import Select from "./components/Select";
import classes from "./App.module.css";

const randomQuote = require('random-lotr-movie-quote');
const minQuoteLength = 15;
const maxQuoteLength = 200;
const moviesList = ['All', 'The Fellowship of the Ring', 'The Two Towers', 'The Return of the King'];

function App() {
    const [char, setChar] = useState('');
    const [dialog, setDialog] = useState('');
    const [selectedMovie, setSelectedMovie] = useState('');
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const [showErrorMsg, setShowErrorMsg] = useState(false);

    const getQuote = () => {
        setIsOptionsOpen(false);

        if (!selectedMovie) {
            setShowErrorMsg(true);
            return;
        }

        let currQuote = randomQuote();
        let trimmedDialog = currQuote.dialog.trim();
        let trimmedMovie = currQuote.movie.trim();

        // Keep calling for new quote until it matches specified length range and movie
        while ((trimmedDialog.length < minQuoteLength || trimmedDialog.length > maxQuoteLength) || (selectedMovie !== 'All' && trimmedMovie !== selectedMovie)) {
            currQuote = randomQuote();
            trimmedDialog = currQuote.dialog.trim();
            trimmedMovie = currQuote.movie.trim();
        }

        // setState after formatting data
        setChar(formatChar(currQuote.char));
        setDialog(formatDialog(trimmedDialog));
    };

    const toggleOptionsHandler = () => {
        setIsOptionsOpen(!isOptionsOpen);
    };

    const selectedMovieHandler = (movie) => {
        setSelectedMovie(movie);
        setShowErrorMsg(false);
    };

    const formatChar = (charName) => {
        return (charName.charAt(0) + charName.slice(1).toLowerCase()).trim();
    };

    const formatDialog = (dialog) => {
        let fixedDialog = dialog;

        // fix commas and missing space after punctuation
        let regex = /[.?!,][a-zA-Z]/g;
        let results = dialog.match(regex);

        if (results) {
            results.forEach(el => {
                fixedDialog = fixedDialog.replace(el, el.replace(',', ' ').split('').join(' '));
            });
        }

        // delete unnecessary commas
        regex = / +, +|,$/g;
        fixedDialog = fixedDialog.split(regex).join(' ');

        return fixedDialog;
    };

    return (
        <div className={classes.pageWrapper}>
            <Header/>
            <main className={classes.main}>
                <QuoteBox dialog={dialog} char={char}/>
                <div className={classes.controls}>
                    <Select movies={moviesList} btnValue={selectedMovie || 'Select Movie'} onToggle={toggleOptionsHandler} onSelect={selectedMovieHandler} showOptions={isOptionsOpen} showError={showErrorMsg}/>
                    <Button btnClickHandler={getQuote}/>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
