import axios from "axios";
import { baseImgURL, urls } from "../configs/urls";

const axiosInstance = axios.create({
    baseURL: baseImgURL,
    headers: {}
})

const imageService = {
    getImg: async (id: string) => {
        const response = await axiosInstance.get(urls.image.main(id))
        return response.data
    }
}
export {imageService}