let items = require("../Items");
const { uuid } = require("uuidv4");

const getItems = (req, reply) => {
  reply.send(items);
};

const getItem = (req, reply) => {
  const { id } = req.params;

  const item = items.find((item) => item.id === id);
  reply.send(item);
};

const postItems = (req, reply) => {
  const { name } = req.body;
  const item = {
    id: uuid,
    name,
  };
  items = [...items, item];

  reply.code(201).send(item);
};

const deleteItem = (req, reply) => {
  const { id } = req.params;
  items = items.filter((item) => item.id !== id);
  reply.send({ message: `Item ${id} has been removed` });
};

const updateItem = (req, reply) => {
  const { id } = req.params;
  const { name } = req.body;
  items = items.map((item) => (item.id === id ? { id, name } : item));
  item = items.find((item) => item.id === id);
  reply.send(item);
};

module.exports = { getItem, getItems, postItems, deleteItem, updateItem };
