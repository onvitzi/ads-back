const admin = require("firebase-admin");
const db = admin.firestore();

const query = db
  .collection("campaigns")
  .orderBy("nameCampaign", "asc")
  .limit(10);
  
let currentPage = 1;
let lastDocument = null;

async function fetchNextPage(req, res) {

  const snapshot = await query.get();

  const documents = snapshot.docs.map((doc) => doc.data());

  if (currentPage > 1) {
    db.collection("campaigns")
    .orderBy("nameCampaign")
    .startAfter(lastDocument)
    .limit(10);
  }

  lastDocument = documents[documents.length - 1];

  currentPage += 1;

  console.log(lastDocument);

  res.status(200).send({ status: "Success", data: documents });
}

module.exports = fetchNextPage;
