import express from 'express'
import cors from 'cors'
import { routes } from './routes';

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes)



//servidor roda na porta 3333
app.listen(3333, () => {
  console.log('HTTP server running!')
})
