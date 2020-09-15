import React, { useState, useEffect, useRef } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';
export default function WordCard() {
    const prepareStateFromWord = (given_word) => {
        let word = given_word.toUpperCase()
        let chars = _.shuffle(Array.from(word))
        return {
            word,
            chars,
            attempt: 1,
            guess: '',
            completed: false
        }
    }
    let state2 = prepareStateFromWord("rewkong")
    const [state, setState] = useState(state2);
    const activationHandler = (c) => {
        console.log(`${c} has been activated.`)
        let guess = state.guess + c
        setState({ ...state, guess })
        if (guess.length == state.word.length) {
            if (guess == state.word) {
                console.log('yeah!')
                setState({ ...state, guess: '', completed: true })
            } else {
                console.log('reset')
                setState({ ...state, guess: '', attempt: state.attempt + 1 })
            }
        }
    }
    console.log(state);
    return (
        <div>
            {Array.from(state.chars).map((c, i) => <CharacterCard value={c} key={i} activationHandler={activationHandler} state={state} />)}
        </div>
    );
}
