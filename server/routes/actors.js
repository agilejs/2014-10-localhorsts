'use strict'
var uuid = require('node-uuid');
var logger = require('log4js').getLogger('routes/actors');

exports = module.exports = function (db) {

    if (!db) {
        throw new Error('No database configured');
    }

    var exports = {};

    // helper function to return the absolute base uri used in the request
    function getAbsoluteUriBase (req) {
        // we use req.get('host') as this also gives us the port
        return req.protocol + '://' + req.get('host');
    }

    // return a list of all movies
    exports.getActors = function (req, res) {
        logger.debug('Retrieving a list of all actors');
        db.getIndexedNodes('node_auto_index', 'type', 'actor',
                function (err, nodes) {
            if (err) {
                logger.error('Failed to load a list of all actors', err);
                return res.status(500).send();
            }

            // fallback in case no movies are stored in the database
            nodes = nodes || [];

            // the attributes of the movie (like name, biography) are stored inside
            // the data-attribute, so we loop through all retrieved nodes and extract
            // the data-attribute
            var actors = nodes.map(function (node) {
                return node.data;
            });

            logger.debug('Successfully loaded %d actors..', actors.length);
            res.send(actors);
        });
    };

    return exports;
};
