import express from "express";
import cors from "cors";

const configMiddlewares = (server) => {
   server.use(express.json());
   server.use(cors());
};

export default configMiddlewares;
