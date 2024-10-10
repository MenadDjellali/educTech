import { Router } from 'express';

import { createCourse } from '../controllers/course';

const courseRoutes: Router = Router();

courseRoutes.post('/create', createCourse)

export default courseRoutes;