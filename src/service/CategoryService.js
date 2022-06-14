import http from "../config";

const URL_CATEGORIES = "categories";

class CategoryService {

    getAll(){
        return http.get(URL_CATEGORIES + "/list", {
        });
    }

}

export default new CategoryService();