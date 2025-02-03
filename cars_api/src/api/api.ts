import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://faiskola.richardkorom.hu/api"
}
);

export default apiClient;