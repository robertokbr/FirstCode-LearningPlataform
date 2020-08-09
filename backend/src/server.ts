import express from 'express';

const app = express();


app.get('/', (request,response)=>{
  response.json({'ola':true});
});


app.listen( process.env.PORT || 3333, ()=>{
  console.log("server is on at the port 3000")
})
