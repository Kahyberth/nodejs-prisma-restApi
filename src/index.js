import express from 'express';
const app = express();
import subject from './routes/subject.routes.js';
import student from './routes/student.routes.js';

app.use(express.json());
app.use("/api", subject);
app.use("/api", student);
app.use((req, res, next) => {
    res.status(404).json({error: "not found"})
})
app.listen(3000, () => console.log('Server started on port 3000'));