'use strict'
const path=require('path');

module.exports = {
    initRoutes: initRoutes
};


function initRoutes(app) {

    const routesPath = path.join( __dirname, '../app/routes');
    console.log('__dirname', __dirname);
    console.log('routesPath', routesPath)
    const routes = ['users'];

    routes.forEach(function(route) {
        console.log("route",route);
        app.use('/api',require(`${routesPath}/${route}`));
    })
}