
//import Url from '../config.js'

  export async function getJson(){
        const Url = 'http://192.168.137.1:5000/crm-api/quotes/pending'
        const response = await fetch(Url)
        const myJson = await response.json();

        return myJson;
     }