import axios from "axios";

export default async function (req, res) {
  if (req.method === "GET") {
    const dataRes = await fetch(`${process.env.API_URL}/resources`);
    const data = await dataRes.json();

    return res.send(data);
  }
  if (req.method === "POST" || req.method === "PATCH") {
    const { id, title, description, link, priority, timeToFinish } = req.body;
    let url = `${process.env.API_URL}/resources`;
    if (!title || !description || !link || !priority || !timeToFinish) {
      return res.status(422).json({ error: "failed to load data" });
    }
    if (req.method === "PATCH") {
      url += `/${id}`;
    }

    try {
      const axiosRes = await axios[req.method.toLowerCase()](url, req.body);
      return res.send(axiosRes.data);
    } catch (error) {
      return res.status(422).send("data cannot be stored");
    }
  }
}
