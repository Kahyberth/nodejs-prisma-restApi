import { Router } from 'express';
const router = Router();
import { getAllSubjects, getSubjectById, createSubject } from '../controller/subject.controller.js';


router.get('/subject/:id', getSubjectById);

router.get('/subjects', getAllSubjects);

router.post('/create/subject', createSubject);

export default router;