let num = 49;

if (num < 49) {
    console.log('False')
} else if (num > 100) {
    console.log("Many")
} else {
    console.log("True")
};

(num == 50) ? console.log('True') : console.log('False');

switch (num) {
    case num < 49:
        console.log("False");
        break;
    case num > 100:
        console.log("Many");
        break;
    case num > 80:
        console.log("Still More");
        break;
    case 50:
        console.log("True");
        break;
    default:
        console.log("Something went wrong")
        break;
            
}