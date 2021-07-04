import React, { useState } from 'react'

const Button = ({handleClick, buttonText}) => {
  return (
    <button onClick={handleClick}>{buttonText}</button>
  )
}

const Anecdote = ({anecdote, votes}) => {
  if(votes >= 0) {
    return (
      <div>
        <p>{anecdote}</p>
        <p>has {votes} votes</p>
      </div>
    ) } else {
      return (
      <div></div>
      )
    }
  }



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [highestVoteIndex, setHighestVoteIndex] = useState(-1);

  const getRandomIndex = (maxIndex) => {
    return Math.floor(Math.random() * maxIndex);

  }
  
  const handleNextQuote = () => {
    const lastQuote = selected;
    let nextQuote = lastQuote;
    while(nextQuote === lastQuote) {
      nextQuote = getRandomIndex(anecdotes.length);
    }

    setSelected(nextQuote);
  }

  const handleVote = ()=> {
    // copy entire object, then update state.
    const voteCopy = [...votes];
    voteCopy[selected] += 1;
    setVotes(voteCopy);
    console.log("highest vote index: ", highestVoteIndex);
    if(highestVoteIndex < 0 || votes[selected] >= votes[highestVoteIndex]) {
      setHighestVoteIndex(selected);
      console.log("highest vote index: ", highestVoteIndex);
    }


  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
        <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
        <Button handleClick = {handleVote} buttonText={"vote"} />
        <Button handleClick = {handleNextQuote} buttonText={"Get a random quote"} />
      <h1>Anecdote with most votes</h1>
        <Anecdote anecdote={anecdotes[highestVoteIndex]} votes={votes[highestVoteIndex]} />
    </div>
  ) 
}

export default App