import { prisma } from "../db/db.js";


export const getSubjectById = async (req, res) => {
    const { id } = req.params;
    const subject = await prisma.subject.findUnique({
        where: {
            id: parseInt(id)
        }
    });
    res.json(subject);
}


export const createSubject = async (req, res) => {
    const { name } = req.body;
    const subject = await prisma.subject.create({
        data: {
            name,
        }
    });
    res.json(subject);
}


export const getAllSubjects = async (req, res) => {
    const subjects = await prisma.subject.findMany();
    res.json(subjects);
}