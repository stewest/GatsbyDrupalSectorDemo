export const handlePath = (pathInput, nid) => {
  if (pathInput != null) {
    return pathInput
  } else if (pathInput === "/home") {
    return "/"
  } else if (pathInput === "/404") {
    return "/404"
  } else if (pathInput === "/403") {
    return "/403"
  } else {
    console.log(nid)
    return `/node/${nid}`
  }
}
