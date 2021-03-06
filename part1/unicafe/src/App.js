import React, {useState} from 'react'


const Button = ({handleClick, buttonText} ) => {
  return (
      <button onClick={handleClick}>{buttonText}</button>
  )
}

const Statistic = ({value, text, percentage}) => {
  if(percentage === true) percentage = "%";
  
  return (
    <tr>
      <td>
        {text}
      </td>
      <td>
        {value} {percentage}
      </td>
    </tr>
  )
}

const Statistics = ({stats}) => {
  
  const all = stats.good + stats.neutral + stats.bad
  if( all === 0) {
    return (
      <div>
        No Feedback Given
      </div>
    )
  } 
  
  const average = (stats.good - stats.bad) / all;
  const positive = (stats.good / all) * 100;

  return(
    <table>
      <tbody>
        <Statistic text="good" value={stats.good} />
        <Statistic text="neutral" value={stats.neutral} />
        <Statistic text="bad" value={stats.bad} />
        <Statistic text="all" value={all} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positive} percentage={true}/>
      </tbody>
    </table>
  )

}

const App = ()=> {
  const [goodFeedback, setGood] = useState(0);
  const [neutralFeedback, setNeutral] = useState(0);
  const [badFeedback, setBad] = useState(0);

  const stats = {
    good: goodFeedback,
    neutral: neutralFeedback,
    bad: badFeedback
  }

  
  const handleBadClick = () => {
    setBad(badFeedback + 1);
  }
  const handleNeutralClick = () => {
    setNeutral(neutralFeedback + 1);
  }
  const handleGoodClick = () => {
    setGood(goodFeedback + 1);
  }


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} buttonText="Good" />
      <Button handleClick={handleNeutralClick} buttonText="Neutral"/>
      <Button handleClick={handleBadClick} buttonText="Bad" />

      <h1>Statistics</h1>
      <Statistics stats={stats} />
      
      
    </div>
  )

 

};

export default App