require('dotenv').config()
const app= require('./src/app')



//app listen means start the server whatever you write inside it will be shown on server
app.listen(3000 , ()=> { 
console.log('server is running on port http://localhost:3000');
});

