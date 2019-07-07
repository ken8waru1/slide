export const selectAllChannels = (state) => {
  return(
    Object.values(state.entities.channels)
  )
}