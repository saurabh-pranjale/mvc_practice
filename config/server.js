const mongoose = require('mongoose')


const connect = () => {
    try {
        mongoose.connect('mongodb://localhost:27017/4')
            .then(() => { console.log("database has been successfully connected") })
            .catch((error) => { console.log(error) })

    } catch (error) {
      console.log(error)
    }
}

module.exports = {connect}
