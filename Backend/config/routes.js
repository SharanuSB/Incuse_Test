import express from 'express'
import companiesCltr from '../app/controllers/companies-cltr.js'

const router = express.Router()

router.post('/api/companies',companiesCltr.create)

export default router