const fs = require('fs');
const ini = require("ini");


module.exports.readVersion = function (contents) {
    return ini.parse(contents.toString())['/Script/EngineSettings'].GeneralProjectSettings.ProjectVersion;
};

module.exports.writeVersion = function (contents, version) {
    let config = ini.parse(contents.toString())
    config['/Script/EngineSettings'].GeneralProjectSettings.ProjectVersion = version;
    return ini.stringify(config)
};