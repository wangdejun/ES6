function steamrollArray(arr) {
    console.log(arguments);
    console.log(...arr);
    var flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
  };


console.log(steamrollArray([1, [2], [3, [[4]]]]));