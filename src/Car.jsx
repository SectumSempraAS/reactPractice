// props are read only
function Car(props) {
    return (
      <>
      <h2>Hi, I am a Car! of color {props.color} and of brand {props.brand}.</h2>
      <h3>My owners are {props.carObject.owner} and {props.carObject.coOwner}</h3>
      </>
    );

  }
  
  export default Car;