const {namespaceWrapper} = require('../namespaceWrapper');


async function ensureIndex() {
  const db = await namespaceWrapper.getDb();
    db.ensureIndex(
      { fieldName: 'contactId', unique: true, sparse: true },
      function (err) {
        if (err) console.error('Index creation error:', err);
      },
    );
    db.ensureIndex(
      { fieldName: 'proofsId', unique: true, sparse: true },
      function (err) {
        if (err) console.error('Index creation error:', err);
      },
    );
    db.ensureIndex(
      { fieldName: 'NodeProofsCidId', unique: true, sparse: true },
      function (err) {
        if (err) console.error('Index creation error:', err);
      },
    );
    db.ensureIndex(
      { fieldName: 'authListId', unique: true, sparse: true },
      function (err) {
        if (err) console.error('Index creation error:', err);
      },
    );
  }



module.exports = { ensureIndex };