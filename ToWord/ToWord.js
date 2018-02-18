function round(value) {
  return Number(Math.round(value+'e'+2)+'e-'+2);
}

function ToWord(number) {
var placevalues = ["blank", "Thousand", "Million", "Billion", "Trillion", "Quadrillion", "Quintillion", "Sextillion", "Septillion", "Octillion", "Nonillion", "Decillion", "Undecillion", "Duodecillion", "Tredecillion", "Quattuordecillion", "Quindecillion", "Sexdecillion", "Septendecillion", "Octodecillion", "Novemdecillion", "Vigintillion", "Unvigintillion", "Duovigintillion", "Tresvigintillion", "Quattuorvigintillion", "Quinvigintillion", "Sexvigintillion", "Septenvigintillion", "Octovigintillion", "Novemvigintillion", "Trigintillion", "Untrigintillion", "Duotrigintillion", "Tretrigintillion", "Quattuortrigintillion", "Quintrigintillion", "Sextrigintillion", "Septentrigintillion", "Octotrigintillion", "Novemtrigintillion", "Quadragintillion", "Unquadragintillion", "Duoquadragintillion", "Trequadragintillion", "Quattuorquadragintillion", "Quinquadragintillion", "Sexquadragintillion", "Septenquadragintillion", "Octoquadragintillion", "Novemquadragintillion", "Quinquagintillion", "Unquinquagintillion", "Duoquinquagintillion", "Trequinquagintillion", "Quattuorquinquagintillion", "Quinquinquagintillion", "Sexquinquagintillion", "Septenquinquagintillion", "Octoquinquagintillion", "Novemquinquagintillion", "Sexagintillion", "Unsexagintillion", "Duosexagintillion", "Tresexagintillion", "Quattuorsexagintillion", "Septensexagintillion", "Octosexagintillion", "Novemsexagintillion", "Septagintillion", "Unseptagintillion", "Duoseptagintillion", "Treseptagintillion", "Quattuorseptagintillion", "Quinseptagintillion", "Sexseptagintillion", "Septaseptagintillion", "Octoseptagintillion", "Novemseptagintillion", "Octagintillion", "Unoctogintillion", "Duooctogintillion", "Tresoctogintillion", "Quattuoroctogintillion", "Quinoctogintillion", "Sexoctogintillion", "Septenoctogintillion", "Octooctogintillion", "Novemoctogintillion", "Nonagintillion", "Unnonagintillion", "Duononagintillion", "Trenonagintillion", "Quattuornonagintillion", "Quinnonagintillion", "Sexnonagintillion", "Septennonagintillion", "Octononagintillion", "Novemnonagintillion", "Centillion", "Uncentillion", "Duocentillion", "Trescentillion", "Quattuorcentillion", "Quincentillion", "Sexcentillion", "Septencentillion", "Octocentillion", "Novencentillion", "Decicentillion"];
    if (((Math.round(number)).toString().length) > 3) {
        var length = (number.toString().length) % 3;
        if (length == 0) {length = (number.toString().length) - ((number.toString().length) - 3);}
        var rl = (number.toString().length) - length;
        var d = round(number / (10**(rl)));
        var pre = Math.round(number / (10**(rl)));
        while (pre.toString().length > 3) {
            var length = (pre.toString().length) % 3;
            if (length == 0) {length = (pre.toString().length) - ((pre.toString().length) - 3);}
            var nl = (pre.toString().length) - length;
            var rl = rl + nl;
            var d = round(number / (10**(rl)));
            var pre = Math.round(pre / (10**(nl)));
        }
        return d + " " + placevalues[rl / 3];
    } else return number;
}