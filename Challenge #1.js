const EventEmitter= require('events');
const emitter= new EventEmitter();

const eventCounter= {
    'user-login': 0,
    'user-purchase': 0,
    'user-logout': 0,
}

emitter.on('user-login', (name)=>{
    eventCounter['user-login']++;
    console.log(`${name} logged in.`);
});

emitter.on('user-purchase', (name, item)=>{
    eventCounter['user-purchase']++;
    console.log(`${name} purchased ${item}.`);
});

emitter.on('user-logout', (name)=>{
    eventCounter['user-logout']++;
    console.log(`${name} logged out.`);
});

emitter.on('total-count', ()=>{
    console.log('Summary of total count:', eventCounter);
})

//event call
emitter.emit('user-login', 'Martin');
emitter.emit('user-purchase', 'Martin', 'macbook');
emitter.emit('user-logout', 'Martin');
emitter.emit('total-count');
