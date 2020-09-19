export default string => {
  const target = "nate-blog/image/upload/"
  const replacement = "nate-blog/image/upload/q_auto,f_auto/"
  const regExp = new RegExp(target, "g")
  return string.replace(regExp, replacement)
}
