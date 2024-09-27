function OneFunc1 ({name, size}) {
    console.log("hello from function 'oneFunc1' ")
    return (
      <>
        <p>oneFunction1 - name: {name} - size: {size}</p>
      </>    
    )
  }

  function OneFunc2 (props) {
    console.log("hello from function 'oneFunc2' ")
    return (
      <>
        <p>OneFunction2 - {props.name}</p>
      </>    
    )
  }

  export {OneFunc1, OneFunc2};