export default function decimalTimeTo12HoursFormat(time24: number | null): string {
  const INVALID_TIME: string = "N/A"
  let hours: number
  let minutes: number
  let minutesString: string
  let period: string = "AM"

  try {
    if (time24 === null) return INVALID_TIME

    minutes = time24 % 1

    if (minutes > 0) {
      hours = Math.trunc(time24)
      minutesString = time24.toString().split(".")[1]
    } else {
      hours = time24!
      minutesString = "00"
    }

    if (hours >= 12) {
      period = "PM"
      if (hours > 12) {
        hours -= 12
      }
    }

    minutesString = minutesString.length < 2 ? minutesString + "0" : minutesString

    return `${hours}:${minutesString} ${period}`
  } catch (e) {
    return INVALID_TIME
  }
}
