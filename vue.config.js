const path = require('path');
const mockIndexData = require("./mock/index.json");

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    devServer: {
      before: (app) => {
        app.post('/index', function (req, res) {
          res.json(mockIndexData)
        })
      }
    }
  }