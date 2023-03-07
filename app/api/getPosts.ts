import type { NextApiRequest, NextApiResponse } from "next";
// import { PrismaClient } from "@prisma/client";
import prisma from "../../prisma/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("req: ", req);
    // if (req.method === "GET") {
    try {
        console.log("Hello");
        // return res.status(200).json({ message: "Hello" });
        // const prisma = new PrismaClient();
        const data = await prisma.post.findMany();
        return res.status(200).json(data);
    } catch (error) {
        console.log("Error!");
        return res.status(500).json(error);
        // return "error";
    }
    // }
}
