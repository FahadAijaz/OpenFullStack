import Content from "./Content"
import Total from "./Total"
import Header from "./Header"

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const parts = [{ name: part1, exercises: exercises1 },
  { name: part2, exercises: exercises2 }, { name: part3, exercises: exercises3 }]
  return (
    <div>
      <Header course={course} />
      <Content exerciseList={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App