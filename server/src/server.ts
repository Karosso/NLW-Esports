import express from "express";
import { PrismaClient } from "@prisma/client";
import { AdRequest, AdResponse } from "./dto/ad";
import { convertHoursStringToMinutes, convertMinutesToHoursString } from "./utils/utils";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const prisma = new PrismaClient({
  log: ["query"],
});

app.get("/games", async (_, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });
  return res.json(games);
});

app.post("/games/:id/ads", async (req, res) => {
  const gameId = req.params.id;
  const body: AdRequest = req.body;

  console.log({ body });

  const ad = await prisma.ad.create({
    data: {
      ...body,
      gameId,
      weekDays: body.weekDays.join(";"),
      hoursEnd: convertHoursStringToMinutes(body.hoursEnd),
      hoursStart: convertHoursStringToMinutes(body.hoursStart),
    },
  });

  return res.status(201).json({
    ...ad,
    weekDays: ad.weekDays.split(";"),
  });
});

app.get("/games/:id/ads", async (req, res) => {
  const gameId: string = req.params.id;

  const ads: AdResponse[] = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hoursStart: true,
      hoursEnd: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return res.json(
    ads.map((ad) => ({
      ...ad,
      weekDays: ad.weekDays.split(";"),
      hoursEnd: convertMinutesToHoursString(ad.hoursEnd),
      hoursStart: convertMinutesToHoursString(ad.hoursStart),
    }))
  );
});

app.get("/ads/:id/discord", async (req, res) => {
  const adId = req.params.id;

  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    },
  });

  return res.json({
    discord: ad.discord,
  });
});

app.listen(3333);
