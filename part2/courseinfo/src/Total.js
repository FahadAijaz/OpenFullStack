const Total = (props) =>{
    let total = 0
    props.parts.forEach(element => {
        total += element.exercises    
    });
    return (<p><strong>total of {total} exercises</strong></p>)
}

export default Total