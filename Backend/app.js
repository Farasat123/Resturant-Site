import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbconnection.js"
import { errorMiddleware } from "./error/error.js";
import reservationRoutes from "./routes/reservationRoutes.js";

const app = express();
dotenv.config({ path: "config/config.env" });


app.use(cors({
    origin: [process.env.Frontend_UR],
    methods: ["POST"],
    credentials: true,
})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dbConnection();
app.use(errorMiddleware)
app.use("/api/v1/reservation", reservationRoutes);



export default app;