import Part from "./Part"
const Content = (props) => {
    const exerciseP =
        props.exerciseList.map((e) =>
            <Part name={e.name} exercises={e.exercises}/>)

    return (<div>{exerciseP}</div >)
}

export default Content