 const crypto = require('crypto');
// const input = "100xdevs";

// const hash = crypto.createHash('sha256').update(input).digest('hex');
// console.log(`The SHA-256 hash of "${input}" is: ${hash}`);

function inputcheck( prefix ){
    let input = 0 ;
    while ( true ){
        let inputstr = "100xdevs" + input.toString();
        let hash = crypto.createHash('sha256').update( inputstr ).digest('hex');

        if ( hash.startsWith( prefix )){
            return { input : inputstr , hash : hash };
        }
        input++ ;
    }
}

const result = inputcheck('00000');
console.log(`input: ${ result.input }`);
console.log(`input: ${ result.hash }`);