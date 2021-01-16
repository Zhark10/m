export const getCardColorByCost = (cost: number) => {
  if (cost >= 500) {
    return '#c4a66a'
  }

  if (cost >= 400) {
    return '#8e6ac4'
  }

  if (cost >= 300) {
    return '#6a77c4'
  }

  if (cost >= 200) {
    return '#c46a6a'
  }
  return '#6ac46e'
}
