const jwt = require('jsonwebtoken')
, bcrypt = require('bcryptjs')
, config = require('./../config')

module.exports = {
  signup: (req, res) => {
    let db = req.app.get('db')
    , { email, password } = req.body
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          db.auth.create_user([email, hash]).then(userCreated => {
            const token = jwt.sign({id: userCreated[0].id.toString()}, config.token_secret).toString();
            res.header('x-auth', token).json({user:userCreated[0]})
          }).catch(err => res.status(500).json(err))
      })
    })
  },
  login: (req, res ) => {
    const db = req.app.get('db')
    , {email, password} = req.body
    db.auth.login([email]).then(loginRes => {
      bcrypt.compare(password, loginRes[0].password, (err, result) => {
        if(err){res.status(500).json(false)}
         else {
           if(result){
             const token = jwt.sign({id: loginRes[1].id}, config.token_secret).toString();
             res.header('x-auth', token).status(200).json(loginRes[1])
           } else {
             res.status(500).json(result)
           }
         }
      })
    }).catch(err => {
      res.status(500).json(error)
    })
  }
}
