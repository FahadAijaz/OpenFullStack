import Part from "./Part"
const Content = (props) => {
    const exerciseP =
        props.exerciseList.map((e) =>
            <Part part={e.part} exercises={e.exercises}/>)

    return (<div>{exerciseP}</div >)
}

export default Content