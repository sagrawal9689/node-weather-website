const path= require('path')
const request= require('request')
const express= require('express')
const app= express()
const geoCode= require('./geo-code')
const forcast= require('./forecast')

const publicDirectoryPath= path.join(__dirname,'../Public') 

app.use(express.static(publicDirectoryPath))

const port= process.env.PORT

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

app.get('*',(req,res)=>{
    res.send('404')
})



app.listen(port,()=>{
    console.log('server started')
})