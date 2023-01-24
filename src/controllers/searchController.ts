import { Request, Response } from "express";

import { Pet } from '../models/pet';
import { createMenuObject } from "../helpers/createMenuObject";

export const search = (req: Request, res: Response) => {
  console.log(req.query)
  let query: string = req.query.q as string;

  if(!query) {
    res.redirect('/');
    return;
  }

  let list = Pet.getFromName(query);

  res.render('pages/page', {
    menu: createMenuObject(''),
    list,
    query
  })
};
