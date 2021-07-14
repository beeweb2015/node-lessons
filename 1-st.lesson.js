
let events = require('events');

let logger = new events.EventEmitter();
const argv = require('minimist')(process.argv.slice(2));


let users=[];
let msgs=[];

logger.on('message',  (msg) =>{
    console.log(`New message [${msg}]`)
    msgs.push(msg);    
});

logger.emit('message','hi');
logger.emit('message','node.js');


logger.on('login',  (name) =>{
    console.log(`New user [${name}]`)
    users.push(name);    
});

logger.emit('login','liza');
logger.emit('login','Armen');

logger.on('getUsers',  (users) =>{
    console.log('Logged users')
    users.map(user=>console.log(user))
});

logger.on('getMessages',  (msgs) =>{
    msgs.map(msg=>console.log(msg))
});

logger.emit('message', argv.message);
logger.emit('login', argv.addUser);
logger.emit('getUsers');




