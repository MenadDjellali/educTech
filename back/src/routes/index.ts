import { Router } from 'express';

import courseRoutes from './course';

const rootRouter: Router = Router();

rootRouter.use('/course', courseRoutes);

export default rootRouter;