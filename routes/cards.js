const router = require('express').Router();
const {
  getCards,
  createCard,
  removeCard,
  putLike,
  removeLike,
} = require('../controllers/cards');
const NotFoundError = require('../errors/not-found-err');
const { validateCreateCard, validateRemoveCard, validateLikeOnCard } = require('../middlewares/requestValidation');

router.get(
  '/cards/:char',
  (req, res, next) => {
    next(new NotFoundError('Запрашиваемые данные отсутствуют'));
  },
);

router.delete(
  '/cards/:_id',
  validateRemoveCard,
  removeCard,
);

router.get(
  '/cards',
  getCards,
);

router.post(
  '/cards',
  validateCreateCard,
  createCard,
);

router.put(
  '/cards/:_id/likes',
  validateLikeOnCard,
  putLike,
);

router.delete(
  '/cards/:_id/likes',
  validateLikeOnCard,
  removeLike,
);

module.exports = {
  cardRouter: router,
};
