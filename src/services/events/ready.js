const config = require('../../../config.json');

const pti = require('png-to-ico');
const fs = require('fs');

const moment = require('moment');

module.exports = (Client, chalk) => {

    if(Client.user.username != config.name) Client.user.setUsername(config.name)
        .then(user => log('I have aquired my specified name. [' + chalk.magenta(user.username) + ']'))
        .catch(() => {error("Failed to set bot's name. Remember that this can only be changed twice every hour!")});

    Client.user.setActivity(config.activity, {type: config.activity_type});

    log("Loading custom modules...", true);
    loadModules(Client, config);    

}
