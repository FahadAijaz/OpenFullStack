import Content from "./Content"
import Total from "./Total"
import Header from "./Header"

const Course = (props) =>{
    const {course} = props
    return (
        <div>
          <Header course={course.name} />
          <Content exerciseList={course.parts} />
          {/* <Total parts={course.parts} /> */}
        </div>
      )
}

export default Course