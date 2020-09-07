const request= require('request')


const forecast=(latitude,longitude,callback)=>{

    const url='http://api.weatherstack.com/current?access_key=67b238b437fd4c2e8443d9af72713798&query='+latitude+','+longitude
    request({url: url,json: true},(error,response)=>{

        callback(response.body.current.temperature,response.body.current.wind_speed)
    })
}

module.exports= forecast