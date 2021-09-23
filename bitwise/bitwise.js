//decimal to binary convert
function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}
console.log(dec2bin(10));

function conBin(dec) {
    return (dec >>> 0).toString(2);
}
console.log(conBin(32));


//converting decimal to binary
function bin2dec(bin) {
    return parseInt(bin,2).toString(10);
}
console.log(bin2dec(100000));


function myBin(bin) {
    return parseInt(bin,2).toString(10);
}
console.log(myBin(110));