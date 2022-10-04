//Задание 1
var randomBodyParts = ["рот", "пупок", "нос"];
var randomAdjectives = ["вонючая", "гнилая", "лысая"];
var randomWords = ["кошара", "макака", "берёза", "мартышка", "какашка"];
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
var randomWord = randomWords[Math.floor(Math.random() * 5)];
var randomInsult = "У тебя " + randomBodyPart + " словно " + randomAdjective + " " + randomWord + "!!!" + "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀";
document.write(randomInsult);

//Задание 2
var randomBodyParts1 = ["рот", "живот", "нос", "зуб", "глаз"];
var randomAdjectives1 = ["вонючий", "гнилой", "большой", "лысый"];
var randomWords1 = ["брюхо", "шея", "хвост", "усы", "ноги"];
var randomAnimals1 = ["макаки", "кота", "собаки", "жирафа"]
var randomBodyPart1 = randomBodyParts1[Math.floor(Math.random() * 5)];
var randomAdjective1 = randomAdjectives1[Math.floor(Math.random() * 4)];
var randomWord1 = randomWords1[Math.floor(Math.random() * 5)];
var randomAnimals1 = randomAnimals1[Math.floor(Math.random() * 4)]
var randomInsult1 = "У тебя " + randomBodyPart1 + ", ещё более " + randomAdjective1 + ", чем " + randomWord1 + " у " + randomAnimals1 + "!!!" + "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀";
document.write(randomInsult1);

//Задание 3
var randomBodyParts = ["нога", "ухо", "борода", "пятка"];
var randomAdjectives = ["маленькая", "гнилая", "тупая"];
var randomWords = ["коала", "дуб", "лягушка", "свинья"];
var randomInsult = ["У тебя", randomBodyPart, "словно ",randomAdjective,randomWord,"!!!" + "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"].join(" ");
document.write(randomInsult);

//Задание 4
var chisla = [3,2,1];
var chisla2 = chisla.join(" больше, чем ");
document.write(chisla2)