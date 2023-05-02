import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// Controllers (route handlers)
import * as countriesController from "./controllers/countries";

dotenv.config();

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
	res.send('Express + TypeScript Server fsfsdfada');
});



app.get('/countries', countriesController.getCountries);
app.get('/countries/:countryName', countriesController.getCountry);

export default app;