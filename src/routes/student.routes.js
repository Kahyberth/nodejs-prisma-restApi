import { Router } from 'express';
import { createStudent, getAllStudents, studentById } from '../controller/student.controller.js';
const router = Router();


router.get('/student/:id', studentById);

router.get('/students', getAllStudents);

router.post('/create/student', createStudent);





export default router;
