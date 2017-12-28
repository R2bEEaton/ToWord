function round(value) {
  return Number(Math.round(value+'e'+2)+'e-'+2);
}

function ToWord(number) {
var placevalues = ["blank", "Thousand", "Million", "Billion", "Trillion", "Quadrillion", "Quintillion", "Sextillion", "Septillion", "Octillion", "Nonillion", "Decillion", "Undecillion", "Duodecillion", "Tredecillion", "Quattuordecillion", "Quindecillion", "Sexdecillion", "Septendecillion", "Octodecillion", "Novemdecillion", "Vigintillion", "Unvigintillion"];
    if (((Math.round(number)).toString().length) > 3) {
        var length = (number.toString().length) % 3;
        if (length == 0) {length = (number.toString().length) - ((number.toString().length) - 3);}
        var rl = (number.toString().length) - length;
        var d = round(number / (10**(rl)));
        var pre = Math.round(number / (10**(rl)));
        if (pre.toString().length > 3) {
            var length = (pre.toString().length) % 3;
            if (length == 0) {length = (pre.toString().length) - ((pre.toString().length) - 3);}
            var nl = (pre.toString().length) - length;
            var rl = rl + nl;
            var d = round(number / (10**(rl)));
            var pre = Math.round(pre / (10**(nl)));
                if (pre.toString().length > 3) {
                var length = (pre.toString().length) % 3;
                if (length == 0) {length = (pre.toString().length) - ((pre.toString().length) - 3);}
                var nl = (pre.toString().length) - length;
                var rl = rl + nl;
                var d = round(number / (10**(rl)));
                var pre = Math.round(pre / (10**(nl)));
                    if (pre.toString().length > 3) {
                    var length = (pre.toString().length) % 3;
                    if (length == 0) {length = (pre.toString().length) - ((pre.toString().length) - 3);}
                    var nl = (pre.toString().length) - length;
                    var rl = rl + nl;
                    var d = round(number / (10**(rl)));
                    var pre = Math.round(pre / (10**(nl)))}
                    
        }
        }
        return d + " " + placevalues[rl / 3];
    } else return number;
}