export default function convertTo12HourFormat(time24: string | null): string {
  const INVALID_TIME: string = "N/A"

  if (!time24 || time24.trim() === "") {
    return INVALID_TIME
  }

  let [hours, minutes]: string[] = time24.split(/[:.]/)

  if (!hours || !minutes || isNaN(parseInt(hours)) || isNaN(parseInt(minutes))) {
    return INVALID_TIME
  }

  let period: string = "AM"
  let hour: number = parseInt(hours)

  if (hour >= 12) {
    period = "PM"
    if (hour > 12) {
      hour -= 12
    }
  }

  return `${hour}:${minutes.padStart(2, "0")} ${period}`
}
