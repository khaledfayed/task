export const getComments = async ({ effects, state }) => {
  state.comments.isLoading = true
  const response = await effects.comments.api.getComments()
  state.comments.data = response.data
  state.comments.isLoading = false
  state.performance.responseTime = response.duration
}
