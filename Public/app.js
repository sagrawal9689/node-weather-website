
const textHandler= document.getElementById('text')

const btnHandler= document.getElementById('btn')

const message= document.getElementById('message')

btnHandler.addEventListener('click',(e)=>{

    message.innerHTML= 'loading...'

    fetch('/weather?address='+textHandler.value).then((response)=>{

        response.json().then((data)=>{

            if(data.error===true)
            {
                return message.innerHTML='Please enter a valid adress'
            }

            message.innerHTML= 'The Temperature in ' + textHandler.value+ ' is '+ data.temp+'°C and the wind speed is '+ data.speed+ ' km/hr'
            
        })
})

})




