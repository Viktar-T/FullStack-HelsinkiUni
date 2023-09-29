const Button = ({handleClick, text}) => (
      <button onClick={handleClick}>
        {text}
      </button>
)
    

  const Display = ({counter}) => <div>{counter}</div>

  export {Button, Display}