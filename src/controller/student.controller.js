import { prisma } from "../db/db.js";


export const studentById = async (req, res) => {
    const { id } = req.params;
    const student = await prisma.student.findUnique({
        where: {
            id: parseInt(id)
        }
    });
    res.json(student);
}

export const studentBySubject = async (req, res) => {
    const { subject } = req.params;
    const students = await prisma.student.findMany({
        where: {
            subject: subject
        }
    });
    res.json(students);
}

export const studentBySubjectAndYear = async (req, res) => {
    const { subject, year } = req.params;
    const students = await prisma.student.findMany({
        where: {
            subject: subject,
            year: parseInt(year)
        }
    });
    res.json(students);
}


export const getAllStudents = async (req, res) => {
    const students = await prisma.student.findMany();
    res.json(students);
};

export const createStudent = async (req, res) => {
    const student = await prisma.student.create({
        data: req.body,
    });
    res.json(student);
}