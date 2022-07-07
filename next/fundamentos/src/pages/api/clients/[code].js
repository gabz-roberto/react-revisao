const handler = (req, res) => {
    const code = req.query.code
    // recebendo o codigo da url

    res.status(200).json({
        id: code,
        nome: `Gabriel${code}`,
        email: `gabriel${code}@gmail.com`
    })
}

export default handler;