module.exports = (inputs) => {
  return new Promise((resolve, reject) => {
    var q = {
      index: 'products',
      body: {
          query: {
            wildcard: {
              "title": ""
            }
          }
      }
    };

    if (inputs.search) {
      q.body.query.wildcard.title = inputs.search
    }

    if (inputs.number) {
      q.size = inputs.number
    }

    resolve(q);
  });
}