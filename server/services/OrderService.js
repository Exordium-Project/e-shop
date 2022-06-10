import Order from '../models/Order.js';
import OrderItem from '../models/OrderItem';
import Error from '../error/Error.js';

export default class OrderService {

    static async getOrderByNumber(orderNumber) {
        const order = await Order.findOne({
            where:{
                number: orderNumber
            }
        }).catch(error => {
            console.log(error);
            return new Error(500, error.message);
        });
        
        
        if (!order) {
            return new Error(404, "Not found. Order with this number does not exist");
        }

        return order;
    }

    static async createOrder(order) {
        
        let createdOrder = await Order.create(order).catch(error => {
            console.log(error);
            return new Error(500, error.message);
        });


        const orderItems = order.items

        await OrderItem.bulkCreate(orderItems).catch(error => {
            console.log(error);
            return new Error(500, error.message);
        });


        let orderNumber = `EX-${new Date().getUTCMilliseconds}-${createdOrder.id}`

        let updatedOrder = await Order.update({number:orderNumber},{
            where:{
                id:createdOrder.id
            }
        })

        return updatedOrder.number
    }

    static async updateOrder(orderNumber,newStatus) {
        
        const order = await Order.findOne({
            where:{
                number: orderNumber
            }
        }).catch(error => {
            console.log(error);
            return new Error(500, error.message);
        });
        
        
        if (!order) {
            return new Error(404, "Not found. Order with this number does not exist");
        }

        Order.update({status:newStatus},{
            where:{
                number:orderNumber
            }
        }).catch(error => {
            console.log(error);
            return new Error(500, error.message);
        });

        return `Order: ${orderNumber} status has been updated to: ${newStatus}`
    }
}