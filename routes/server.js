import {Router} from 'express'
import {getall} from '../controllers/servers.js'


const router = Router()


router.get('/api/server', getall)


export default router