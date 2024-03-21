const getValueOrDefault = (isEmpty: boolean, value: string, defaultValue: string): string => {
  if (isEmpty) return defaultValue
  return value
}

export default getValueOrDefault
