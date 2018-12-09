import axios from "axios";

const baseURL = "https://beetle-backend.herokuapp.com/api";

export default {
    boxes: async ({ branchid }) => {
        const boxes = await axios.get(`${baseURL}/getallboxes/${branchid}`)
        return boxes.data.boxes
    },
    addBox: (boxid, name, size, price, branchid) => {
        return new Promise(async (resolve, reject) => {
            try {
                const addbox = await axios.post(`${baseURL}/boxes`, {
                    boxid,
                    name,
                    size,
                    price,
                    branchid
                })
                resolve(addbox.data)
            } catch (error) {
                console.log(error)
            }
        })
    },
    deleteBox: (boxid) => {
        return new Promise(async (resolve, reject) => {
            try {
                const deleteBox = await axios.delete(`${baseURL}/boxes/${boxid}`)
                resolve(deleteBox.data)
            } catch (error) {
                console.log(error)
            }
        })
    },
    updateBox: (boxid, size, price) => {
        return new Promise(async (resolve, reject) => {
            try {
                const update = await axios.put(`${baseURL}/boxes/${boxid}`, {
                    size,
                    price
                })
                resolve(update.data)
            } catch (error) {
                console.log(error)
            }
        })
    },
    unlockBox: (boxid) => {
        return new Promise(async (resolve, reject) => {
            try {
                const unlock = await axios.put(`${baseURL}/boxes/unlock/${boxid}`)
                resolve(unlock.data)
            } catch (error) {
                console.log(error)
            }
        })
    }
}