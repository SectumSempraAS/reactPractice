const Student = (props) => {
    return (
        <>
            <p>{props.student.rollNo} {props.student.name}</p>
        </>
    )
}

export default Student;