const app = require('./base')

const PORT = +process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log(`Port started on http://localhost:${PORT}`)
})