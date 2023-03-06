const Content = (props) => {
    const exerciseP =
        props.exerciseList.map((e) =>
            <p>{e.part} {e.exercises}</p>)

    return (<div>{exerciseP}</div >)
}

export default Content