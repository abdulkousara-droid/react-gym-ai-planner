import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { profileRouter } from "./routes/profile";
import { planRouter } from "./routes/plan";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;


const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:5173",
    "https://react-gym-ai-planner-seven.vercel.app/",
    "https://ep-twilight-firefly-an37z0qp.neonauth.c-6.us-east-1.aws.neon.tech/neondb/auth",
];

app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}));
//app.use(cors());
app.use(cookieParser());
app.use(express.json());

//API Routes
app.use("/api/profile", profileRouter);
app.use("/api/plan", planRouter);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});