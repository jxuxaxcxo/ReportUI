
import dataBaseUrl from '../config.js'
class QuotesServices{


    async getJson(){
      //  const response = await fetch('http://192.168.137.207:5000');
      //  const response = await fetch('dataBaseUrl')
      //  const myJson = await response.json();
    }

    static getJson2(){
        const object = [
            {
                quoteName: 'COT-001',
                client: {
                    clientCode: 'MTR-300056',   
                    name: 'Mauricio',
                    lastname: 'Terceros',
                    ci: '7118795'
                },
                date: '2016/06/01',
                sold: 'false',
                qliList: [
                {
                    product: {
                        productCode: 'COD-0001',
                        name: 'papa con queso'
                    },
                    price: 6,
                    quantity: 2
                }, 
                //more qliList items
                {  	product: {
                        productCode: 'COD-0002',
                        name: 'Salchipapa'
                    },
                    price: 10,
                    quantity: 7} 
                ]
            },
        
            {
                quoteName: 'COT-002',
                client: {
                    clientCode: 'MTR-s3dsada00056',   
                    name: 'Jimmy',
                    lastname: 'Jones',
                    ci: '71187dasd95'
                },
                date: '2016/ads06/01',
                sold: 'false',
                qliList: [
                {
                    product: {
                        productCode: 'COD-0001',
                        name: 'chancho a la cruz'
                    },
                    price: 3,
                    quantity: 4
                }, 
                //more qliList items
                {  	product: {
                        productCode: 'COD-0002',
                        name: 'Salchipapa'
                    },
                    price: 10,
                    quantity: 7
                },
                {
                    product: {
                        productCode: 'COD-0001',
                        name: 'chancho a la cruz'
                    },
                    price: 6,
                    quantity: 2
                },  
                ]
            },
        
            {
                quoteName: 'COT-001',
                client: {
                    clientCode: 'MTR-300056',   
                    name: 'Mauricio',
                    lastname: 'Terceros',
                    ci: '7118795'
                },
                date: '2016/06/01',
                sold: 'true',
                qliList: [
                {
                    product: {
                        productCode: 'COD-0001',
                        name: 'papa con queso'
                    },
                    price: 4,
                    quantity: 3
                }, 
                //more qliList items
                {  	product: {
                        productCode: 'COD-0002',
                        name: 'Salchipapa'
                    },
                    price: 10,
                    quantity: 7} 
                ]
            },
            
        
            //more Quotes items
            ]

            return object;
    }


}

export {QuotesServices}