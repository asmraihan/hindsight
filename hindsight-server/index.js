import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())


// TODO - Issues API
app.post(`/createIssue`, async (req, res) => {
    const { title, description, status } = req.body
    const result = await prisma.issue.create({
        data: {
            title,
            description,
            status
        },
    })
    res.json(result)
})




app.get(`/countIssues`, async (req, res) => {
    const result = await prisma.issue.count()
    res.json(result)
})


app.get(`/test`, async (req, res) => {
    res.json({ message: 'Hello World' })
})

const server = app.listen(5000, () =>
    console.log(`
🚀 Server ready at: http://localhost:5000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)