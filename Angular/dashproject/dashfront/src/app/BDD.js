
const initSqlJs = require('sql.js');
const fs = require('fs');
const readline = require('readline');
const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
app.use(cors());

config = {
    locateFile: filename => `../../../dashfront/node_modules/sql.js/dist/sql-wasm.wasm`
  }
  // The `initSqlJs` function is globally provided by all of the main dist files if loaded in the browser.
  // We must specify this locateFile function if we are loading a wasm file from anywhere other than the current html page's folder.
  initSqlJs(config).then(function(SQL){
    //Create the database
    const db = new SQL.Database();

    // on execute le fichier input.txt
    try {
      var data = fs.readFileSync('input.txt', 'utf8');
      db.run(data.toString());
    } catch(e) {
      console.log('Error:', e.stack);
    }

    const b = db.exec("SELECT route_short_name,stop_name,route_link,stop_lat,stop_lon FROM stops JOIN stop_times USING(stop_id) JOIN trips USING(trip_id) JOIN routes USING(route_id) GROUP BY route_short_name,stop_name;");

    console.log(JSON.parse(JSON.stringify(b[0].values)))
    app.get('/',(req,res) => {;
      res.json(JSON.parse(JSON.stringify(b[0].values)));
    })

    app.listen(port, function (err) {
      if (err) console.log(err);
      console.log("Server listening on PORT", port);
    });

});
