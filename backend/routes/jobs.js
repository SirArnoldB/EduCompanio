
import express from 'express'
import Jobs from '../controllers/jobs.js'

const router = express.Router()

router.get('/', Jobs.getAllJobs)
router.get('/:id', Jobs.getJobById)
router.post('/', Jobs.createJob)
router.patch('/:id', Jobs.updateJob)
router.delete('/:id', Jobs.deleteJob)

export default router
