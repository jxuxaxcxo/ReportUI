
import axios from 'axios'
import Urls from '../config.js'

  export async function getPendingJson(){

    return new Promise((resolve, reject) => {
      axios.get(Urls.pendingQuotesUrl)
        .then(response => { console.log('Get promise success '); resolve(response) })
        .catch(error => { console.log('Get promise failed'); reject(error) })
    })
    
  }

  export async function getSoldJson(){

    return new Promise((resolve, reject) => {
      axios.get(Urls.soldQuotesUrl)
        .then(response => { console.log('Get promise success '); resolve(response) })
        .catch(error => { console.log('Get promise failed'); reject(error) })
    })
    
  }

