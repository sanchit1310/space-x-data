const axios = require('axios');
const url = require('url');
let data;
let urls;
const getSpaceData = async (urls) => {
    try {
        return await axios.get(urls)
    } catch (error) {
        console.error(error)
    }
}


async function routeFilter(req, res, next) {
    const queryObject = url.parse(req.url, true).query;

    if (queryObject.year) {
        urls = process.env.SPACE_X_YEAR_API + `${queryObject.year}`;
    } else if (queryObject.launch) {
        urls = process.env.SPACE_X_LAUNCH_API+ `${queryObject.launch}`
    } else {
        urls = process.env.SPACE_X_LANDING_API+ `${queryObject.landing}`
    }
    const breeds = getSpaceData(urls)
        .then(response => {
            if (response) {
                console.log(response.data.length)
                const context = {
                    name: process.env.DEVELOPER_NAME,
                    date: new Date(),
                    breeds: response.data
                }
                //console.log(context)
                res.render('filter', context)
            }
        })
        .catch(error => {
            console.log(error)
        })
}



module.exports = routeFilter
