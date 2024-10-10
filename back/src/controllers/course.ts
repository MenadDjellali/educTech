import { Request, Response } from 'express';

import { db } from '../utils/db';
import { Prisma } from '@prisma/client';

export const createCourse = async (req: Request, res: Response) => {

  try {

    const data: Prisma.CourseCreateInput = req.body;
    const course = await db.course.create({ data });
    
    console.log(`[createCourse] course: ${JSON.stringify(course)}`);

    res.status(201).json({
      ...course,
     });
  } catch (error) {
    res.status(500).json({ error });
  }
}