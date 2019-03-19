const request = require('request')

const forecast = (latitude, longitude, callback) => {
	const url = 'https://api.darksky.net/forecast/12be1c6f914e4c9d6409802db6f35e2f/' + latitude + ',' + longitude
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

// request({ url: url, json: true }, (error, response) => {
// 	if (error) {
// 		console.log('Unable to connect to weather service!')
// 	} else if (response.body.error) {
// 		console.log('Unable to find location')
// 	} else {
// 		const cur = response.body.currently
// 		const t = cur.temperature
// 		const p = cur.precipProbability
// 		console.log('t:', t, 'p:', p)
// 	}
// })
module.exports = forecast