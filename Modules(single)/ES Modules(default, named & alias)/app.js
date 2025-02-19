//import from app.js using named import
import {add, product} from "./demo.js";
import {difference, pi} from "./demo.js";

//using alias import method
import * as math from "./demo.js";

//using default method
// import add from "./demo.js";

//named import method
console.log('Sum:', add(12, 8));
console.log('Product:', product(12, 8));
console.log('Difference:', difference(12, 8));
console.log('PI:', pi);

//alias method
console.log("Add:", math.add(9,7));

