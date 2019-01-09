const app = require('./app/app')

const port = 5555

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server API running in http://localhost:${port}`)
})
