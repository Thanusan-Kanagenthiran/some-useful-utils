function convertTo24HourFormat(time12: string): string | null {
  const timeRegex: RegExp = /(\d+):(\d+) (\w+)/i
  const time: RegExpExecArray | null = timeRegex.exec(time12)

  if (!time) {
    return null
  }

  let hours: number = parseInt(time[1])
  const minutes: number = parseInt(time[2])
  const period: string = time[3].toUpperCase()

  if (period === "PM" && hours !== 12) {
    hours += 12
  } else if (period === "AM" && hours === 12) {
    hours = 0
  }

  const formattedHours: string = hours.toString().padStart(2, "0")

  return `${formattedHours}:${minutes.toString().padStart(2, "0")}`
}
