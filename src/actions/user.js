import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS
} from './types';

export function setPurchaseDetail(_id) {
    return({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}


export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: [
            {
                _id: 0,
                product: {
                    _id: 0,
                    title: 'JavaScript in the Browser',
                    description: 'Things about objects and such other things',
                    price: 1.99,
                    belongsTo: [0, 1]
                },
                quantity: 2
            },
            {
                _id: 1,
                product: {
                    _id: 1,
                    title: 'Graph Database',
                    description: 'Stuff dealing with graph databases in here',
                    price: 1.99,
                    belongsTo: [0, 6]
                },
                quantity: 1
            },

        ]
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                total: 10.40,
                orderNumber: 'GGME0692190',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Nina Gonzalez',
                    shippingAddress: '123 Colorado Blvd.'
                }
            },
            {
                _id: 2,
                total: 12.10,
                orderNumber: 'OJIBD002983',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Joe Schmo',
                    shippingAddress: '123 North State Street'
                }
            },
            {
                _id: 3,
                total: 14.60,
                orderNumber: 'DFKHDLK0987',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Petersen',
                    shippingAddress: '123 North State Street'
                }
            },
            {
                _id: 4,
                total: 11.40,
                orderNumber: 'A0063898344',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Shaun Senn',
                    shippingAddress: '123 North State Street'
                }
            },            
            {
                _id: 5,
                total: 10.40,
                orderNumber: 'A0067898344',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Elon Musk',
                    shippingAddress: '123 North State Street'
                }
            },
            {
                _id: 6,
                total: 10.50,
                orderNumber: 'A0067858344',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Mario Gonzalez',
                    shippingAddress: '456 North State Street'
                }
            },
            {
                _id: 7,
                total: 10.40,
                orderNumber: 'A0048248344',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Chris Lab',
                    shippingAddress: '789 North State Street'
                }
            }
        ]
    })
}