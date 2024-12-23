const { Router } = require("express");
const searchRouter = Router();
const usersStorage = require("../storages/usersStorage");

searchRouter.get("/", (req, res) => {
  const users = usersStorage.getUsers();
  const query = req.query.querySearch ? req.query.querySearch.toLowerCase() : '';
  const results = users.filter(user =>
    user.firstName.toLowerCase().includes(query) || 
    user.lastName.toLowerCase().includes(query)
  );

  res.render('search', { query, results });
});

module.exports = searchRouter;