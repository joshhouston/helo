
module.exports = {
    register: (req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db');
        db.register(username, password).then(() => {
            res.status(200).json(username)
        })
    }
}