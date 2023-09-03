const Football = (props) => {
    const show = true;
    const onClickFootballButton = () => {
        alert(props.alertMessage);
    }
    const customOnCLick = (event) => {
        alert(event.type);
    }
    return ( show && 
        <>
            <button onClick={onClickFootballButton}>CLick Me</button>
            <button onClick={(event) => customOnCLick(event)}>Click me also</button>
        </>
    );
}

export default Football;