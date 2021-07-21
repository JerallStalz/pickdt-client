import axios from "axios";
import data from "../config/values";

class UploadService {
    getImages() {
        return axios.get(`http://${data.serverUrl}/download`)
    }

    sendImages( name, file ) {
        const form = new FormData();
        form.append("name", name);
        console.log(file)
        form.append("file", file, name);
        return axios.post(`http://${data.serverUrl}/upload`, form)
    }
}

export default new UploadService();