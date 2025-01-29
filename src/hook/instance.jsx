import axios from "axios";
import { API_REQUEST } from "./useEnv";


export const instance = () => axios.create({baseURL:`${API_REQUEST}`})

export default instance