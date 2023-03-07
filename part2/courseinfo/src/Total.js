const Total = (props) =>{
    const total = props.parts.reduce((t, p) => t + p.exercises, 0)
    return (<p><strong>total of {total} exercises</strong></p>)
}

export default Total