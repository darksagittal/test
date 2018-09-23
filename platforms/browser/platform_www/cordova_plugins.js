cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-magnetometer/www/magnetometer.js",
        "id": "cordova-plugin-magnetometer.main",
        "pluginId": "cordova-plugin-magnetometer",
        "clobbers": [
            "cordova.plugins.magnetometer"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-magnetometer": "1.0.0"
}
// BOTTOM OF METADATA
});