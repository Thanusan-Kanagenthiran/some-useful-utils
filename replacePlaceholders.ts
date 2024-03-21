export default function replacePlaceholders<T>(template: string, data: Record<string, T>): string {
  return template.replace(/<([^>]+)>/g, (match, key) => {
    if (data[key] !== undefined) {
      return String(data[key]) // Ensure the value is a string before returning
    } else {
      return match
    }
  })
}
