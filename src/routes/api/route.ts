export const getRouteDataRequest = (title: string) => {
  return Promise.resolve().then(() => {
    return {
      data: title
    }
  })
}
