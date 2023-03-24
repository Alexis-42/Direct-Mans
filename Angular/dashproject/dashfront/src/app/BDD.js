
const initSqlJs = require('sql.js');
const fs = require('fs');
const readline = require('readline');
const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
app.use(cors());

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

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

    const b = db.exec("SELECT route_short_name,stop_name,route_link FROM stops JOIN stop_times USING(stop_id) JOIN trips USING(trip_id) JOIN routes USING(route_id) WHERE (stop_lat BETWEEN 48.004382 AND 48.006382 ) OR (stop_lon BETWEEN  0.1959579 AND  0.1939579);");

    app.get('/',(req,res) => {
      //tram = ['T1','T2','T3'].forEach(nom => res.json({name: nom}));
      res.json(JSON.parse(JSON.stringify(b[0].values)));
    })

    app.listen(port, function (err) {
      if (err) console.log(err);
      console.log("Server listening on PORT", port);
    });

    console.log(JSON.parse(JSON.stringify(b[0].values)));

    for(var i=0; i<b[0].values.length; i++){
      // stop_id,stop_name,stop_lat,stop_lon
      //console.log("\nligne "+(b[0].values[i][0])+" ( arret : "+(b[0].values[i][1])+" lien : "+(b[0].values[i][2])+")");
    }
});


// =========== LINE BY LINE ===========
/*
async function processLineByLine() {
  const fileStream = fs.createReadStream('./input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    db.run(((String)(line)));
  }
}

processLineByLine();

    // Prepare a statement
    const stmt = db.prepare("SELECT * FROM routes");
    stmt.getAsObject({$start:1, $end:1});

    // Bind new values
    stmt.bind({$start:1, $end:2});
    while(stmt.step()) { //
      const row = stmt.getAsObject();
      //console.log(JSON.stringify(row['route_short_name']));
    }
*/

