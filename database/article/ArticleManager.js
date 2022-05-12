const fs = require('fs');
let articles = require('./article.json')

export const ArticleManager = {
  getAll: () => articles,
  //getAll,
  getById: id => articles.find(x => x.titleID === titleID.toString()),
  find: x => articles.find(x),
  create,
  update,
  saveData,
  delete: _delete
};
async function getAll() {
  return JSON.parse(fs.readFileSync('./article.json', 'utf8'))
}

function create(task) {
  // generate new user id
  task.taskID = articles.length ? Math.max(...articles.map(x => x.taskID)) + 1 : 1;

  // set date created and updated
  task.reminder = false;
  task.date = new Date().toISOString();
  task.updated = new Date().toISOString();

  // add and save task
  articles.push(task);
  return saveData();
}

function update(params) {
  // set date updated
  params.updated = new Date().toISOString();

  let task = articles.find(x => x.taskID.toString() === params.taskID.toString());

  // update and save
  Object.assign(task, params);
  return saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(taskID) {
  // filter out deleted task and save
  articles = articles.filter(x => x.taskID.toString() !== taskID.toString());
  return saveData();
}

function saveData() {
  fs.writeFileSync('database/article/article.json', JSON.stringify(articles, null, 4));
  //return this.getAll()
  return JSON.parse(fs.readFileSync('database/article/article.json', 'utf-8'))

}