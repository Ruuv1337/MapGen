var data = require('../../data/data.json'),
      path = require('path'),
      fs = require('fs'),
      os = require('os');

module.exports = function MAPGEN(mod) {
    let NewData = '';
    let MapsData = data.maps;
    
    for (let protocol in MapsData) {
        for (let hook in MapsData[protocol]) {
            NewData += hook+' = '+MapsData[protocol][hook]+os.EOL
        }
        
        fs.writeFile(path.join(__dirname, protocol+'.map'), NewData, () => {
            console.log('[MAP GEN] Generated a new protocol = '+protocol)
        });
        
        NewData = '';
    }
}