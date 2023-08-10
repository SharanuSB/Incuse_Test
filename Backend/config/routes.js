import express from 'express'
import companiesCltr from '../app/controllers/companies-cltr.js'
import { setclientdb } from '../app/middlewares/setclientdb.js'
import { clientListener } from '../app/middlewares/clientListener.js'
import { companyMiddleware } from '../app/middlewares/companyMiddleware.js'

const router = express.Router()

router.post('/api/companies/register',companyMiddleware,companiesCltr.register)
router.post('/api/companies/signin',clientListener,setclientdb,companiesCltr.signIn)

export default router