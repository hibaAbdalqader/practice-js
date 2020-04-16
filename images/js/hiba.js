vartoday = newDate();
var name = "hiba"
console.log(name);

var
    varhourNow = today.getHours();
vargreeting;
if (hourNow > 18) {
    greeting = 'Goodevening,Class!';
}
elseif(hourNow > 12) {
    greeting = 'Goodafternoon,Class!';
}
elseif(hourNow >= 0) {
    greeting = 'Goodmorning!';
} else {
    greeting = 'Somethingwentwrong!';
}
document.write('<h3>' + greeting + '</h3>');