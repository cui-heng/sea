const request = require('../utils/request');

function userLogin(req, res) {
  request.get('/website/userLogin', {
    params: req.body,
  }).then((data) => {
    // 七天后过期
    res.cookie('TOKEN', data.data, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7
    })
    res.json(data)
  });
}

module.exports = {
  login: userLogin
}
