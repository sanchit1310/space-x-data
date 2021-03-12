const axios = require('axios');

const getSpaceData = async () => {
    try {
        return await axios.get(process.env.SPACE_X_FISRST_API)
    } catch (error) {
        console.error(error)
    }
}


async function routeHome(req, res, next) {
    const breeds = getSpaceData()
        .then(response => {
            if (response) {
                console.log(response.data.length)
                const context = {
                    name: process.env.DEVELOPER_NAME,
                    date: new Date(),
                    breeds: response.data
                }
                //console.log(context)
                res.render('home', context)
            }
        })
        .catch(error => {
            console.log(error)
        })
}



module.exports = routeHome