var GeneraSymbol = d3.map({
  'transgen': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size / 3) + ',' + 0 +
      'l' + (size / 3) + ',' + -size / 2 +
      'l' + (size / 3) + ',' + size / 2 +
      'l' + (2 * size / 3) + ',' + 0;
  },
  'transrel': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size ) + ',' + 0 +
      'l' + (2 * size / 3) + ',' + 0 +
      'l' + (size / 3) + ',' + size / 2 +
      'l' + (size / 3) + ',' + -size / 2 +
      'l' + (2 * size / 3) + ',' + 0;
  },
  'transact': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size / 3) + ',' + 0 +
      'A' + size / 3 + ',' + size / 3 + ',1,1,1' + size / 3 + ',' + 0 +
      'l' + (2 * size / 3) + ',' + 0;
  },
  'discourse': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size / 3) + ',' + 0 +
      'A' + size / 3 + ',' + size / 3 + ',1,1,0' + size / 3 + ',' + 0 +
      'l' + (2 * size / 3) + ',' + 0;
  },
  'god': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (size * 2) + ',' + 0;
  },
  'world': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +

      'M' + 0 + ',' + size / 2 +
      'l' + 0 + ',' + -size;
  },
  'element': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +

      'M' + 0 + ',' + 0 +
      'l' + 0 + ',' + -size / 2;
  },
  'stone': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +

      'M' + 0 + ',' + 0 +
      'l' + 0 + ',' + size / 2;
  },
  'metal': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +

      'M' + -pad + ',' + -size / 2 +
      'l' + pad * 2 + ',' + size;
  },
  'leaf': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +

      'M' + 0 + ',' + 0 +
      'l' + pad + ',' + size / 2;
  },
  'fish': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +

      'M' + 0 + ',' + 0 +
      'l' + 0 + ',' + size / 2 +
      'l' + size / 6 + ',' + -size / 4 + '';
  },
  'exsanguious': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +

      'M' + 0 + ',' + 0 +
      'l' + 0 + ',' + -size / 2 +
      'l' + -size / 6 + ',' + size / 4 + '';
  },
  'beast': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +

      'M' + 0 + ',' + 0 +
      'l' + 0 + ',' + size / 2 +
      'l' + size / 6 + ',' + 0 + '';
  },
  'bird': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +

      'M' + 0 + ',' + 0 +
      'l' + 0 + ',' + -size / 2 +
      'l' + -size / 6 + ',' + 0 + '';
  },
  'partspec': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +

      'M' + 0 + ',' + size/2 +
      'l' + 0 + ',' + -size  +
      'l' + -size / 6 + ',' + size / 4 + '';    
  },
  'partgen': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +

      'M' + 0 + ',' + -size / 2 +
      'l' + 0 + ',' + size +
      'l' + size / 6 + ',' + -size/4 + '';
  },
  'magnitude': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +
		
			'M' + 0 + ',' + 0 +
			'l' + 0 + ',' + (-size / 3) +
			'a'+size/5+' '+size/5+' 0 1 0 ' + (-size/5 * 2) +' '+ 0 +''; 

  },
  'space': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +

			'M' + 0 + ',' + 0 +
			'l' + 0 + ',' + (size / 3) +
			'a'+size/5+' '+size/5+' 0 1 0 ' + (size/5 * 2) +' '+ 0 +''; 

  },
  'measure': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +

			'M' + 0 + ',' + (size/3) +
			'l' + 0 + ',' + (-size / 3 * 2) +
			'a'+size/5+' '+size/5+' 0 1 0 ' + (-size/5 * 2) +' '+ 0 +''; 

  },
  'power': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +

      'M' + -size/4*.707 + ',' + (-size/4 + -size/4*.707) +
	  'a' + (size/4) +' '+ (size/4)+' 0 1 0 ' + (size/4*1.414) +' '+ 0 +'';
  },
  'habit': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +

      'M' + -size/4*.707 + ',' + (size/4 + size/4*.707) +
      'a' + (size/4) +' '+ (size/4)+' 0 1 1 ' + (size/4*1.414) +' '+ 0 +'';

  },
  'manner': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +

      'M' + 0 + ',' + 0 +
      'l' + 0 + ',' + -size / 2 +
      'l' + -size / 6 + ',' + 0 + '';
  },
  'sensible': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +

      'M' + 0 + ',' + 0 +
      'l' + 0 + ',' + -size / 2 +
      'l' + -size / 6 + ',' + 0 + '';
  },
  'disease': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +

      'M' + 0 + ',' + 0 +
      'l' + 0 + ',' + -size / 2 +
      'l' + -size / 6 + ',' + 0 + '';
  },
  'spiritact': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +

      'M' + 0 + ',' + 0 +
      'l' + 0 + ',' + -size / 2 +
      'l' + -size / 6 + ',' + 0 + '';
  },
  'corporact': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +

      'M' + 0 + ',' + 0 +
      'l' + 0 + ',' + -size / 2 +
      'l' + -size / 6 + ',' + 0 + '';
  },
  'motionact': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +

      'M' + 0 + ',' + 0 +
      'l' + 0 + ',' + -size / 2 +
      'l' + -size / 6 + ',' + 0 + '';
  },
  'operationact': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +

      'M' + 0 + ',' + 0 +
      'l' + 0 + ',' + -size / 2 +
      'l' + -size / 6 + ',' + 0 + '';
  },
  'econ': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +

      'M' + 0 + ',' + 0 +
      'l' + 0 + ',' + -size / 2 +
      'l' + -size / 6 + ',' + 0 + '';
  },
  'posses': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +

      'M' + 0 + ',' + 0 +
      'l' + 0 + ',' + -size / 2 +
      'l' + -size / 6 + ',' + 0 + '';
  },
  'provis': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +

      'M' + 0 + ',' + 0 +
      'l' + 0 + ',' + -size / 2 +
      'l' + -size / 6 + ',' + 0 + '';
  },
  'civil': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +

      'M' + 0 + ',' + 0 +
      'l' + 0 + ',' + -size / 2 +
      'l' + -size / 6 + ',' + 0 + '';
  },
  'judicial': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +

      'M' + 0 + ',' + 0 +
      'l' + 0 + ',' + -size / 2 +
      'l' + -size / 6 + ',' + 0 + '';
  },
  'military': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +

      'M' + 0 + ',' + 0 +
      'l' + 0 + ',' + -size / 2 +
      'l' + -size / 6 + ',' + 0 + '';
  },
  'naval': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +

      'M' + 0 + ',' + 0 +
      'l' + 0 + ',' + -size / 2 +
      'l' + -size / 6 + ',' + 0 + '';
  },
  'eccles': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      'l' + (2 * size) + ',' + 0 + '' +

      'M' + 0 + ',' + 0 +
      'l' + 0 + ',' + -size / 2 +
      'l' + -size / 6 + ',' + 0 + '';
  },
});

var DifferenceSymbol = d3.map({
  '1': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      '	l' + (size / 2) + ',' + (-size / 2) + '';
  },
    '2': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      '	l' + 0 + ',' + (-size / 2) + '';
  },
    '3': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      '	l' + (-size / 2) + ',' + (-size / 2) + '';
  },
    '4': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      '	l' + (-size / 2) + ',' + (size / 2) + '';
  },
    '5': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      '	l' + 0 + ',' + (size / 2) + '';
  },
    '6': function(size) {
    size = Math.sqrt(size);
    var r = size / 8;
    return 'M' + (-size) + ',' + 0 +
      '	l' + (size / 2) + ',' + (size / 2) + '';
  },
    '7': function(size) {
    size = Math.sqrt(size);
    var r = size / 8;
    return 'M' + (-size/2) + ',' + (-size / 2) +
      '	l' + (-size) + ',' + (size) + '';
  },
    '8': function(size) {
    size = Math.sqrt(size);
    var r = size / 8;
    return 'M' + (-size) + ',' + (-size/2) +
      '	l' + 0 + ',' + (size) + '';
  },
    '9': function(size) {
    size = Math.sqrt(size);
    var r = size / 8;
    return 'M' + (-3 * size/2) + ',' + (-size/2) +
      '	l' + (size) + ',' + (size) + '';
  },  '0': function(size) {
    return '';
  }
});

var SpeciesSymbol = d3.map({
  '1': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (size) + ',' + 0 +
      '	l' + (-size / 2) + ',' + (-size / 2) + '';
  },
    '2': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (size) + ',' + 0 +
      '	l' + 0 + ',' + (-size / 2) + '';
  },
    '3': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (size) + ',' + 0 +
      '	l' + (size / 2) + ',' + (-size / 2) + '';
  },
    '4': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (size) + ',' + 0 +
      '	l' + (size / 2) + ',' + (size / 2) + '';
  },
    '5': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (size) + ',' + 0 +
      '	l' + 0 + ',' + (size / 2) + '';
  },
    '6': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (size) + ',' + 0 +
      '	l' + (-size / 2) + ',' + (size / 2) + '';
  },
    '7': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (size/2) + ',' + (-size/2) +
      '	l' + (size) + ',' + (size) + '';
  },
    '8': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (size) + ',' + (-size/2) +
      '	l' + 0 + ',' + (size) + '';
  },
    '9': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return 'M' + (3*size/2) + ',' + (-size/2) +
      '	l' + (-size) + ',' + (size) + '';
  },
  '0': function(size) {
    size = Math.sqrt(size);
    var pad = size / 5;
    var r = size / 8;
    return '';
  }
});

d3.svg.customSymbol = function() {
  var type,
    size = 64;

  function symbol(d, i) {
  	var symboltype = type.call(this, d, i);
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
        var constructed_symbol = GeneraSymbol.get(genera)(size.call(this, d, i)) +
                                    DifferenceSymbol.get(diff)(size.call(this, d, i)) +
                                    SpeciesSymbol.get(spec)(size.call(this, d, i));
        return constructed_symbol;
    }
    catch (e) {
        return ""
    }
  }
  symbol.type = function(_) {
    if (!arguments.length) return type;
    type = d3.functor(_);
    return symbol;
  };
  symbol.size = function(_) {
    if (!arguments.length) return size;
    size = d3.functor(_);
    return symbol;
  };
  return symbol;
};

function WilkinsSymbol(type, size) {
  size = size || 64;
  if (d3.svg.symbolTypes.indexOf(type) !== -1) {
    return d3.svg.symbol().type(type).size(size)();
  } else {
    return d3.svg.customSymbol().type(type).size(size)();
  }
}
