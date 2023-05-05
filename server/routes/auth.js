const router = require('express').Router();

const registerValidation = require('../validation').registerValidation;

// middleware
router.use((req, res, next) => {
    console.log("正在接收一个跟auth相关的请求");
    next();
});

router.get('/testAPI', (req, res) => {
    return res.send("成功链接auth route...");
});

router.post('/register', async (req, res) => {
    console.log("注册使用者");
    console.log(req.body);
});


module.exports = router;