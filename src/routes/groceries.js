const { Router } = require('express');

const router = Router();

const groceryList = [
  {
    item: 'milk',
    quantity: 2,
  },
];

router.get('/', (request, response) => {
  response.send(groceryList);
});
module.exports = router;
