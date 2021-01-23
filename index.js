const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (let element of Object.values(collection)) {
        callback(element)
      } 
      return collection;
    },


    map: function(collection, callback) {
      let newCollection = [];
      for (let element of Object.values(collection)) {
        newCollection.push(callback(element))
      }
      return newCollection;
    },


    reduce: function(collection, callback, acc) { //acc short for accumulator starts the initial state of the reduction and with each successive step it should accumulate the return value of callback
      let reducedCollection = collection;
      for (let element of Object.values(reducedCollection)) {
        acc = callback(acc, element, reducedCollection)
      }
      return acc;
    },


    functions: function() {

    },


  }
})()

fi.libraryMethod()
