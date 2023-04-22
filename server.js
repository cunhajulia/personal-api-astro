const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 5555

app.use(cors())

const zodiac = {
    'aries': {
        'displayZodiac': 'Aries',
        'funFacts': 'impulsive, bold, competitive',
        'drag': 'Good news because we know you want to be the best at something: your temper tantrums beat those of any child, ever.'
    },
    'taurus':{
        'displayZodiac': 'Taurus',
        'funFacts': 'hard-headed, patient, foodie',
        'drag': 'You are a brick wall, but at least you are a brick wall that is great at picking a restaurant.' 
    },
    'gemini':{
        'displayZodiac': 'Gemini',
        'funFacts': 'inquisitive, versatile, witty',
        'drag': 'Marie Kondo would have a field day inside your head. ' 
    },
    'cancer':{
        'displayZodiac': 'Cancer',
        'funFacts': 'sappy, protective, nurturing',
        'drag': 'Two words: emotional terrorism.' 
    },
    'leo':{
        'displayZodiac': 'Leo',
        'funFacts': 'dramatic, confident, charismatic',
        'drag': 'You are actually a Cancer, but with a red silk robe on.' 
    },
    'virgo':{
        'displayZodiac': 'Virgo',
        'funFacts': 'practical, analytical, perfectionist',
        'drag': 'You are the true agent of chaos of the zodiac.' 
    },
    'libra':{
        'displayZodiac': 'Libra',
        'funFacts': 'romantic, indecisive, congenial',
        'drag': 'You are 6 Flags: all red (added bonus: you offer emotional rollercoaster rides too.)' 
    },
    'scorpio':{
        'displayZodiac': 'Scorpio',
        'funFacts': 'enigmatic, intense, private',
        'drag': 'You want to be mysterious so bad, but you just will not shut up.' 
    },
    'sagittarius':{
        'displayZodiac': 'Sagittarius',
        'funFacts': 'adventurous, audacious, optimistic',
        'drag': 'Sense has chased you all your life, but you are faster.' 
    },
    'capricorn':{
        'displayZodiac': 'Capricorn',
        'funFacts': 'bossy, disciplined, ambitious',
        'drag': 'You are the poster child for the ✨Girlboss.Gatekeep.Gaslight.✨ movement.' 
    },
    'aquarius':{
        'displayZodiac': 'Aquarius',
        'funFacts': 'unique, eccentric, reserved',
        'drag': 'Why do people think you are detached again? You turn into Helga from Hey Arnold when you like someone.' 
    },
    'pisces':{
        'displayZodiac': 'Pisces',
        'funFacts': 'dreamy, escapist, empathic',
        'drag': 'Hollywood, the Marvel and DC universes, and even the Barbie Cinematic universe are no match for the lala land that you live in.' 
    },
    'unknown':{
        'displayZodiac': 'unknown',
        'funFacts': 'unknown',
        'drag': 'unknown'
    }
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/api/allZodiacs', (request, response) => { //creating this, not in main.js
    response.json(zodiac) //respond with zodiac object 
})
app.get('/main.js', (request, response)=>{
    response.sendFile(__dirname + '/main.js')
})
app.get('/main.css', (request, response)=>{
    response.setHeader('Content-Type', 'text/css');
    response.sendFile(__dirname + '/main.css')
})
app.get('/api/:zodiac',(request,response)=>{
    const zodiacs = request.params.zodiac.toLowerCase()

    if( zodiac[zodiacs] ){
        response.json(zodiac[zodiacs])
    }else{
        response.json(zodiac['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Get Ready To Get Called Out!`)
})