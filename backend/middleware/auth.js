const auth = (middlewareParams) => (req, res, next) => {
  // console.log("épp authentikálok...")
  const userId = req.header('authorization') 
  res.locals.userId = userId
  if  (middlewareParams.block && !res.locals.userId) return res.sendStatus(401)
  next()
}

module.exports = auth