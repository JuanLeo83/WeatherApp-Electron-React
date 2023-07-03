import { DaysOfWeek } from './components/DaysOfWeek/DaysOfWeek'

function App() {
  const initDate = new Date()
  const dates = []

  for (var i = 0; i < 7; i++) {
    var aDate = new Date(initDate.getTime() + i * 24 * 60 * 60 * 1000)
    dates.push(aDate)
  }

  return (
    <div className="container">
      <DaysOfWeek dates={dates} />
    </div>
  )
}

export default App
