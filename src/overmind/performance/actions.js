export const getPerformance = ({ state, effects }, values) => {
  state.performance.latestData.push(values)
}

export const setPerformance = async ({ state, effects }) => {
  state.performance.data = await effects.comments.localStorage.loadData(
    'performance'
  )
}

export const setResponseDict = async ({ state, effects }) => {
  state.performance.responseDict = effects.comments.localStorage.loadData(
    'latency'
  )
}

export const pushToLocalStorage = async ({ state, effects }) => {
  const obj = {}
  const date = Date.now()
  const latestData = [...state.performance.latestData]
  state.performance.data[date] = latestData
  state.performance.latestData = []
  effects.comments.localStorage.push('performance', date, latestData)
  effects.comments.localStorage.push(
    'latency',
    date,
    state.performance.responseTime
  )
}
