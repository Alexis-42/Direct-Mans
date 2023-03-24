const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
app.use(cors());

app.get('/',(req,res) => {
    data = [{name: 'T1'},{name: 'T2'},{name: 'T3'},{name: '4'},{name: '5'}];
    //tram = ['T1','T2','T3'].forEach(nom => res.json({name: nom}));
    res.json(data);
})

app.listen(port, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", port);
});