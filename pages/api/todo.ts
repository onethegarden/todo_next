import type { NextApiRequest, NextApiResponse } from "next";
import TodoGenerator from "../../src/utils/TodoGenerator";

export default function todo(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(TodoGenerator({ length: 500 }));
}
