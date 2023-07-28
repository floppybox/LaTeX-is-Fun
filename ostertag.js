function berechneOsterdatum(jahr) {
  var a = jahr % 19;
  var b = Math.floor(jahr / 100);
  var c = jahr % 100;
  var d = Math.floor(b / 4);
  var e = b % 4;
  var f = Math.floor((b + 8) / 25);
  var g = Math.floor((b - f + 1) / 3);
  var h = (19 * a + b - d - g + 15) % 30;
  var i = Math.floor(c / 4);
  var k = c % 4;
  var l = (32 + 2 * e + 2 * i - h - k) % 7;
  var m = Math.floor((a + 11 * h + 22 * l) / 451);
  var n = Math.floor((h + l - 7 * m + 114) / 31);
  var p = (h + l - 7 * m + 114) % 31;

  var tag = p + 1;
  var monat = n;

  return new Date(jahr, monat - 1, tag);
}

var jahr = 2023; // Hier das gewünschte Jahr eingeben
var osterdatum = berechneOsterdatum(jahr);
console.log("Osterdatum:", osterdatum.toLocaleDateString());
