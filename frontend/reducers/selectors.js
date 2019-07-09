export const selectAllChannels = (state) => {
  return(
    Object.values(state.entities.channels)
  )
}

export const selectAllSubscriptions = (state) => {
  return (
    Object.values(state.entities.subscriptions)
  )
}