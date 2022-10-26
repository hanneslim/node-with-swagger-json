"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const example_1 = require("../controller/example");
const router = (0, express_1.Router)();
router.post("/example", example_1.exampleFunction);
exports.default = router;
