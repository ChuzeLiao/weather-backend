var bodyParser = require('body-parser');
var crypto = require('crypto');

var express = require("express")
var app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3001)

console.log('Node.js Express server is running on port 3000')
app.get('/v1/weather',get_weather)
app.get('/v1/hello',get_hello)
app.post('/v1/auth',post_auth);

function get_weather(request,response){
	response.json({
    "coord": {
      "lon": -0.13,
      "lat": 51.51
    },
    "weather": [
      {
        "id": 300,
        "main": "Drizzle",
        "description": "light intensity drizzle",
        "icon": "09d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 280.32,
      "pressure": 1012,
      "humidity": 81,
      "temp_min": 279.15,
      "temp_max": 281.15
    },
    "visibility": 10000,
    "wind": {
      "speed": 4.1,
      "deg": 80
    },
    "clouds": {
      "all": 90
    },
    "dt": 1485789600,
    "sys": {
      "type": 1,
      "id": 5091,
      "message": 0.0103,
      "country": "GB",
      "sunrise": 1485762037,
      "sunset": 1485794875
    },
    "id": 2643743,
    "name": "London",
    "cod": 200
})
}
function get_hello(request,response){
	response.json({
    
    "msg": "world",
    "code": 200
})
}

function post_auth(request,response){
  console.log(request.body)
  if(request.body.username=='liu' && 
  request.body.password=='123456'){
    var result = crypto.createHash('md5').update(request.body.username).digest("hex")
    response.json({
      'token':result,
      'msg':'success'
    })
  }else{
    response.json({
      'token':'',
      'msg':'failed'
    })
  }

}
