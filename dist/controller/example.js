"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleFunction = void 0;
const exampleFunction = (req, res, next) => {
    console.log(req.body);
    const body = req.body;
    const exampleEndpointText = body.text + " This is an endpoint";
    console.log(exampleEndpointText);
    res.status(201).json({
        responseText: exampleEndpointText,
    });
};
exports.exampleFunction = exampleFunction;
