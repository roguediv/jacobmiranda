import { mgrTask } from '../../database/article/ArticleManager'

export default function handler(req, res) {
  try {
    if (req.method === 'POST') {
      if (req.body.request === 'delete') {
        res.status(201).json(mgrTask.delete(req.body.params))
      } else
      if (req.body.request === 'create') {
        res.status(201).json(mgrTask.create(req.body.params))
      }
      if (req.body.request === 'update') {
        res.status(201).json(mgrTask.update(req.body.params))
      }
      //res.status(200).json(req.body.allTasks)
      //res.status(201).json(mgrTask.saveData(req.body.allTasks))
    } else {
      res.status(404).send("404 Error Connecting to Page")
    }
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data: ' + err })
  }

}