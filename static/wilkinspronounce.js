var GeneraCV = d3.map({
  'transgen': 'B\u{0003b1}',
  'transrel': 'Ba',
  'transact': 'Be',
  'discourse':'Bi',
  'god':'D\u{0003b1}',
  'world': 'Da',
  'element': 'De',
  'stone': 'Di',
  'metal': 'Do',
  'leaf': 'G\u{0003b1}',
  'flower': 'Ga', 
  'seed': 'Ge',
  'shrub':'Gi',
  'tree':'Go',
  'exsanguious': 'Z\u{0003b1}',
  'fish': 'Za',
  'bird': 'Ze',
  'beast': 'Zi',
  'partspec': 'P\u{0003b1}',
  'partgen':'Pa',
  'magnitude':'Pe',
  'space':'Pi',
  'measure':'Po',
  'power':'T\u{0003b1}',
  'habit':'Ta',
  'manner':'Te',
  'sensible':'Ti',
  'disease':'To',
  'spiritact':'C\u{0003b1}',
  'corporact':'Ca',
  'motionact':'Ce',
  'operationact':'Ci',
  'econ':'Co',
  'posses':'C\u{000223}',
  'provis':'S\u{0003b1}',
  'civil':'Sa',
  'judicial':'Se',
  'military':'Si',
  'naval':'So',
  'eccles':'S\u{000223}',
});

var DifferenceC = d3.map({
    '1': 'b',
    '2': 'd',
    '3': 'g',
    '4': 'p',
    '5': 't',
    '6': 'c',
    '7': 'z',
    '8': 's',
    '9': 'z',
    '0': ''
});

var SpeciesV = d3.map({
    '1': '\u{0003b1}',
    '2': 'a',
    '3': 'e',
    '4': 'i',
    '5': 'o',
    '6': '\u{000223}',
    '7': 'y',
    '8': 'yi',
    '9': 'y\u{000223}',
    '0': ''
});

function pronounce(symboltype) {
  	var genera = symboltype.split("-")[0];
    var diff = symboltype.split("-")[1];
    if (diff == null){
    	diff = '0';
    }
    var spec = symboltype.split("-")[2];
	if (spec == null){
    	spec = '0';
    }
    try{
        var g = GeneraCV.get(genera)
        var d = DifferenceC.get(diff)
        var s = SpeciesV.get(spec);
        if(spec>18){
            g = g.slice(0,1) +"r"+ g.slice(1)
            s = SpeciesV.get(spec - 18);
        } 
        else if (spec>9){
            g = g.slice(0,1) +"l"+ g.slice(1)
            s = SpeciesV.get(spec - 9);
        }
        return g+d+s;
    }
    catch (e) {
        return ""
    }
  }
