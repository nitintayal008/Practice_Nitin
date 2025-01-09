const squashObject = (object, parentkey = '', result = {}) => {
    for (let key in object) {
      const newKey =
        key !== ''
          ? parentkey
            ? `${parentkey}.${key}`
            : key
          : parentkey
          ? `${parentkey}`
          : key;
      if (typeof object[key] === 'object' && object[key] !== null) {
        squashObject(object[key], newKey, result);
      } else {
        result[newKey] = object[key];
      }
    }
    return result;
  };
  
  const object = {
    a: 5,
    b: 6,
    c: {
      f: 9,
      g: {
        m: 17,
        n: 3,
      },
    },
  };
  
  console.log(squashObject(object));
  // Output: { a: 5, b: 6, 'c.f': 9, 'c.g.m': 17, 'c.g.n': 3 }
  