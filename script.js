const { json } = require("express")
const express = require("express")
const https = require("https")

const app = express()

app.get("/", function(req, res){
     const url = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
    https.get(url, function(apiResponse){
        
        console.log(apiResponse)

        apiResponse.on("data", function(data){
            const apiData = JSON.parse(data)
            // console.log(apiData)
            // console.log(apiData.results[0].question)
            // console.log(apiData.results[0].incorrect_answers)


                var h3 = document.getElementById("multiple-questions");
                for (var i = 0; i < apiData.length; i++) {
                    // var div = document.createElement("div");
                    h3.innerHTML = apiData.results[0].question
                }
                    
                

        })
    })
    res.send("Server is up and running.")
})



app.listen(3500, function(){
    console.log("Server is running on port 3500.")
})

