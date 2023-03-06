const Total = (props) =>{
    let total = 0
    props.parts.forEach(element => {
        total += element.exercises    
    });
    return (<p>Number of exercises {total}</p>)
}

export default Total