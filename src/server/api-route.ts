import express from "express";
import cors from "cors";
import { connectClient } from "./db";
const router = express.Router();
router.use(cors());
router.use(express.json());

router.get("/contests", async (req, res) => {
  const client = await connectClient();
  const contests = await client
    .collection("contests")
    .find()
    .project({
      id: 1,
      categoryName: 1,
      contestName: 1,
      _id: 0,
    })
    .toArray();
  res.send({ contests });
});

// contest get api response
router.get("/contest/:contestId", async (req, res) => {
  const client = await connectClient();
  const contest = await client.collection("contests").findOne({
    id: req.params.contestId,
  });
  res.send({ contest });
});

// contest post api response
router.post("/contest/:contestId", async (req, res) => {
  try {
    const client = await connectClient();

    const { newNameValue } = req.body;
    const doc = await client
      .collection("contests")
      .findOneAndUpdate(
        { id: req.params.contestId },
        {
          $push: {
            names: {
              id: newNameValue.toLowerCase().replace(/\s/g, "-"),
              name: newNameValue,
              timestamp: new Date(),
            },
          },
        },
        { returnDocument: 'after' },
      )

    if (doc) {
      res.send({ updatedContest: doc });
    } else {
      console.log("Document not found");
      res.status(404).send("Document not found");
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred.");
  }
});

export default router;
