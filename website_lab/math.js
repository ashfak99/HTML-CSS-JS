var otp = document.write(Math.floor(10000 * (Math.random())));
console.log("otp");
function optverification() {
    console.log(otp);
    document.write('Enter Opt <br> <input type=`number` id=`ipotp`><br> <button type=`submit` onclick="verification()">Submit</button>');
}
let ipotp = document.getElementById("ipotp");
function verification() {
    console.log(otp);
    if (ipotp != otp) {
        document.write("<br><br>Wrong Opt");
    }
    else {
        document.write("Welcome on My Website");
    }
}