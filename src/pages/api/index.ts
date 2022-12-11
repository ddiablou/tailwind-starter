import type { NextApiRequest, NextApiResponse } from "next";

export default function route(_: NextApiRequest, res: NextApiResponse) {
  res.send("Index api route");
}
