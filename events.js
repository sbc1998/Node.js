const EventEmitter= require('events');
const myEmitter= new EventEmitter();

//create events without argument
console.log("create events without argument:")
myEmitter.on('drive', function(){
    console.log('drive the car');
})

myEmitter.on('walk', function(){
    console.log('walk the dog');
})

myEmitter.emit('drive');
myEmitter.emit('walk');

//create events with argument
console.log("\ncreate events with argument:");
myEmitter.on('greet', function(name){
    console.log('Hello!', name);
});

myEmitter.on('greet', function(name, country){
    console.log(`Hello ${name}. He is from ${country}`);
});

myEmitter.emit('greet', 'Avicii', 'Sweden');

//passing argument as an single object
console.log("\npassing argument as an single object:")
myEmitter.on('artist', function(object){
    console.log(`Hello ${object.name}. He is from ${object.country}`);
});

myEmitter.emit('artist', {name: 'Avicii', country: 'Sweden'});
