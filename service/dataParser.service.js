

const parse = (message) => {
    if (!message || !message.type || !message.appName || !message.body) {
        throw new Error('Cannot parse message');
    }
    const receivedDate = new Date();
    console.log(`[ ${receivedDate} ] || ${message.type} || ${message.appName} || \n${JSON.stringify(message.body, null, 4)}`);
};


module.exports = {
    parse
};