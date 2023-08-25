const { connect, connection } = require('mongoose');

connect('mongodb+srv://root:root@cluster0.jnispgn.mongodb.net/socialMindReader');

module.exports = connection;
