var data = {
  tables: {
    USER: [
     {F_NAME: "John", M_NAME: "J", L_NAME: "DOE"},
     {F_NAME: "Mike", M_NAME: "T", L_NAME: "White"},
    ],
    COMMITTEE: [
      {NAME: "Audit Committee", DESCRIPTION: "This is AC."},
      {NAME: "Board Committee", DESCRIPTION: "This is BC."},
    ],
  },
}

var db = require('./db')
db.connect(db.MODE_PRODUCTION, function() {
  db.fixtures(data, function(err) {
    if (err) return console.log(err)
    console.log('Data has been loaded...')
  })
})
