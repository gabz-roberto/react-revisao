// Tratando o tipo de requisição
const handler = (req, res) => {
    if(req.method === "GET") {
        handleGet(req, res)
    } else {
        res.status(405).send()
    }
}

const handleGet = (req, res) => {
    res.status(200).json({
        id: 1,
        name: "Gabriel",
        age: 25,
    })
}

export default handler;