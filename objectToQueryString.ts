export default function objectToQueryString(obj: {[key: string]: string | number | null | boolean}): string {
  return Object.entries(obj)
    .map(([key, value]) => {
      if (value !== null && value !== undefined) {
        return `${encodeURIComponent(key)}=${encodeURIComponent(value.toString())}`
      }
      return ""
    })
    .filter(Boolean)
    .join("&")
}
