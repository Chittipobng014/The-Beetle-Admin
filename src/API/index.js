import axios from "axios";

const baseURL = "localhost:8080/api";

export default {
    boxes: async ({ branchid }) => {
        const boxes = await axios.post(`${baseURL}/getallboxes`, branchid)
        return boxes.data.boxes
    }
}