const dbConfig = require('./db.config');
const emailConfig = require('./nodemailer.config');
const websocketConfig = require('./websocket.config');
const baseUrls = require('./baseurls.config');

module.exports = {
  db: dbConfig,
  email: emailConfig,
  websocket: websocketConfig,
  baseUrls: baseUrls
};
