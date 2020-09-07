const path= require('path')
const request= require('request')
const express= require('express')
const app= express()
const geoCode= require('./geo-code')
const forcast= require('./forecast')

const publicDirectoryPath= path.join(__dirname,'../Public') 

app.use(express.static(publicDirectoryPath))

app.listen(3000,()=>{
    console.log('server started')
})

app.get('/weather',(req,res)=>
{

    geoCode(req.query.address,(error,latitude,longitude)=>{

        if(error)
        {
            res.send({
                error
            })
        }
        else
        {
            forcast(latitude,longitude,(temp,speed)=>{

                res.send(
                    {
                        temp,
                        speed
                    } 
    
                )}
            )
            
        }
        

    })

    
    
})

