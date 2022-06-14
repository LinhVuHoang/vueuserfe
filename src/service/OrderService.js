import http from "../config";

const URL_CATEGORIES = "orders";

class OrderService {

    getAll(){
        return http.get(URL_CATEGORIES + "/cart1");
    }
    addToCart(body){
        return http.post(URL_CATEGORIES + "/addToCart1" ,body
        );
    }
    removeItem(id){
        return http.post(URL_CATEGORIES + "/remove1?productId="+id);
    }
    proceedOrder(orderDto){
        return http.post(URL_CATEGORIES + "/proceedOrder"
            ,orderDto
        );
    }
    getOrders(body){
        return http.post(URL_CATEGORIES + "/proceedOrder1",body
        );
    }
    getvalue(body){
        return http.post(URL_CATEGORIES+"/controlvalue1",body);
    }

}

export default new OrderService();