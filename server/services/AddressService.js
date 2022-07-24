import Address from '../models/Address.js';
import Error from '../error/Error.js';

export default class AddressService{
    
    static async createAddress(addressData) {
        const address = await Address.findOne({
            where: {
                name: addressData.name
            }
        }).catch(error => {
            console.log(error);
            return new Error(500,error.message);
        });

        const newAddress = await Address.create(addressData).catch(error => {
            console.log(error);
            return new Error(500, error.message);
        });

        return newAddress;
    }
}