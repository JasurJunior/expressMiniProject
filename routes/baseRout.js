import {Router} from 'express'


const router = Router()


router.get('/', (req, res)=>
    {
    const URL = 'home'
    res.render('index',
        {
        title: URL,
        active: URL
        })
    })


router.get('/:id', (req, res)=>
    {
    const URL = req.url.substr(1) == 'more' ? "you clicked on button! :)\n have FUN" : req.url.substr(1)
    res.render('index',
        {
        title: URL,
        active: URL
        })
    })


export default router