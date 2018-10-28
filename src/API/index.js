import axios from "axios";

const baseURL = "https://beetle-backend.herokuapp.com/api";

export default {
    boxes: async ({ branchid }) => {
        const boxes = await axios.post(`${baseURL}/getallboxes`, {branchid})
        return boxes.data.boxes
    }
}