import './DaysOfWeek.css'
import { useIntl } from 'react-intl'
import { getText } from '/src/messages'

export const DaysOfWeek = ({ dates }) => {
  const intl = useIntl()

  const locale = intl.locale
  const today = new Date().getDate()
  return (
    <div className="daysOfWeek">
      {dates.map((date, index) => {
        var dayName = ''
        var isToday = false

        if (date.getDate() == today) {
          isToday = true
          dayName = date.toLocaleDateString(locale, { weekday: 'long' })
        } else {
          dayName = date.toLocaleDateString(locale, { weekday: 'short' })
        }
        return <DayOfWeek isCurrent={isToday} dayName={dayName} key={index} />
      })}
    </div>
  )
}

const DayOfWeek = ({ isCurrent, dayName }) => {
  const upperName = dayName.toUpperCase()

  if (isCurrent) {
    return <CurrentDayOfWeek dayName={upperName} />
  }

  return (
    <div className="dayOfWeek">
      <p className="day">{upperName}</p>
    </div>
  )
}

const CurrentDayOfWeek = ({ dayName }) => {
  const intl = useIntl()

  return (
    <div className="currentDayOfWeek">
      <p className="today text-xs">{getText('today', intl).toUpperCase()}</p>
      <p className="todayName">{dayName}</p>
    </div>
  )
}
