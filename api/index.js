const express = require('express')
const bodyParser = require('body-parser');
const router = require('./router')


const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(router)


module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}