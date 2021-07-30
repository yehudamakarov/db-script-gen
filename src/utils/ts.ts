export const getTimestamp = () => {
  const pad = (unit: number) => (('00' + unit).slice(-2))
  const date = new Date()
  return [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()]
    .map(pad)
    .join('.')
}
