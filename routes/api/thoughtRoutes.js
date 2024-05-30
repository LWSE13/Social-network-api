const router = require('express').Router();

const {
    getThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts)
router.route('/:userId').post(createThought);
router.route('/:thoughtId').get(getThoughtById).put(updateThought)
router.route('/:userId/:thoughtId').delete(deleteThought)

module.exports = router;