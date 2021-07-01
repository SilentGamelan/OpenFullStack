import React, {useState} from 'react'

const History = (props) => {
  if(props.clickHistory.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  } else {
    return (
      <div>
        button press history: {props.clickHistory.join('')}
      </div>
    )
  }
}

const Button = ({handleClick, buttonText}) => {
  return <button onClick={handleClick}>{buttonText}</button>
}

const App = ()=> {
  const [leftClicks, setLeftClicks] = useState(0);
  const [rightClicks, setRightClicks] = useState(0);
  const [clickHistory, setClickHistory] = useState([]);

  const handleLeftClick = () => {
    setClickHistory(clickHistory.concat('L'));
    setLeftClicks(leftClicks + 1);
  }

  const handleRightClick = () => {
    setClickHistory(clickHistory.concat('R'));
    setRightClicks(rightClicks + 1);
  }



  return (
    <div>
      {leftClicks}
      <Button handleClick={handleLeftClick} buttonText="Left Button" />
      <Button handleClick={handleRightClick} buttonText="Right Button" />
      {rightClicks}
      <History clickHistory={clickHistory} />
    </div>
  )
};

export default App