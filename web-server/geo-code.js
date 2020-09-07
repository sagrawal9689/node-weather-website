const request= require('request')

const geoCode=(address,callback)=>{

    const geocodeUrl= 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic2FoaWw5NjgiLCJhIjoiY2tlanJ2ZzdzMHhiMjJ6cGNvOGV0OGIxciJ9.VDVusjj-U3Ey5OKIX1snrw'
    request({url: geocodeUrl,json: true},(error,response)=>{


        if(response.body.message==='Not Found'|| response.body.features[0]===undefined )
        {
            callback(true,undefined,undefined)
        }
        else
        {
            callback(false,response.body.features[0].center[1],response.body.features[0].center[0])
        }
        
    })
}

module.exports= geoCode

