const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/thought s
router.route('/').get(getThoughts).post(createThought);

// /api/thought s/:thought Id
router
  .route('/:thought Id')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thought s/:thought Id/reactions
router.route('/:thought Id/reactions').post(addReaction);

// /api/thought s/:thought Id/reactions/:reactionId
router.route('/:thought Id/reactions/:reactionId').delete(removeReaction);

module.exports = router;
