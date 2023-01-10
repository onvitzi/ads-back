const admin = require("firebase-admin");
const db = admin.firestore();

async function PaginationCampaigns(req, res) {
  const page = req.query.page || 1;
  const offset = (page - 1) * 10;

  db.collection('campaigns')
    .limit(10)
    .offset(offset)
    .get()
    .then((snapshot) => {
      const items = snapshot.docs.map((doc) => doc.data());
      return res.status(200).send({ status: "Success", data: items });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send({ error });
    });
}

module.exports = PaginationCampaigns;
