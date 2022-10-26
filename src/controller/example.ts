import { Request, Response, NextFunction } from "express";

export const exampleFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body);
  const body = req.body as { text: string };
  const exampleEndpointText = body.text + " This is an endpoint";
  console.log(exampleEndpointText);
  res.status(201).json({
    responseText: exampleEndpointText,
  });
};
