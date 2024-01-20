import { param, query, validationResult } from 'express-validator';
import express, { Request,Response } from 'express';
const PORT = process.env.PORT||3000;
const app = express();
app.use(express.json())
app.get('/',async (req:Request,res:Response)=>{
//  await new Promise(r=>{setTimeout(()=>{r(true)},3000)})
console.log(req.body)
 res.status(200).json('Люблю тебе маленький пиздюк))')
})
// app.post('/a',async (req:Request,res:Response)=>{
// //  await new Promise(r=>{setTimeout(()=>{r(true)},3000)})
// console.log(req.body)
//  res.sendStatus(200)
// })
app.listen(PORT,()=>{
	console.log('START')
});

