const Part = ({parts, exercise}) => {
    return (
        <div>
            {parts} {exercise}
        </div>
    )
}

const Content = ({ parts }) => {
  return (
    <div>
      <Part parts={parts[0].name} exercise={parts[0].exercises} /><br />
      <Part parts={parts[1].name} exercise={parts[0].exercises} /><br />
      <Part parts={parts[2].name} exercise={parts[0].exercises} />
    </div>
  )
}

export default Content