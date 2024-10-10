import { Request, Response } from 'express';

import { db } from '../utils/db';

export const createCourse = async (req: Request, res: Response) => {

  try {
    const course = await db.course.create({
      data: {
        userId: req.body.userId,
        title: req.body.title,
      }
    });

    res.status(201).json({ course });
  } catch (error) {
    res.status(500).json({ error });
  }
}