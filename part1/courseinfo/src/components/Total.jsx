const Total = (props) => {
    let total3 = 0;
    props.parts.forEach(element => {
      total3 += element.exercises
    });
    return (
      <>
        <p>Number of exercises {total3}</p>
      </>
    ) 
  }


  export default Total