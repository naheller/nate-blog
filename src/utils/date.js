const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export const getFormattedDate = timestamp => {
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const monthIndex = date.getMonth()
  const monthName = MONTHS[monthIndex]
  const dayNumber = date.getDate()

  return `${monthName} ${dayNumber}, ${year}`
}
