<template>
    <div id="quotesReportDiv">

      <v-btn  id='pendingSaleButton'
      v-on:click="changeType('pending')">Pending</v-btn>
        <v-btn id='soldButton' 
      v-on:click="changeType('sold')">Sold</v-btn>
      <v-card id="primaryCard">
        <v-card-title>Cotizaciones</v-card-title>
        <v-data-table id="generalTable"
          v-model="quoteSelected"
          :headers="primaryHeaders"
          :items="currentItems.length>0?currentItems:primaryItems"
          :single-select= true
          show-select
          :search="primarySearch"
        ></v-data-table>
      </v-card>

      <v-card id="secondCard">
        <v-card-title>Productos</v-card-title>
        <v-data-table id="secondTable"
          :headers="secondHeaders"
          :items="quoteSelected.length>0?quoteSelected[0].quoteListItems:[]"
          :sort-by="['price', 'quantity']"
          :sort-desc="[false, true]"
        ></v-data-table>
      </v-card>
    </div>
</template>

<script>
//import {getJson2} from '../../services/QuotesService.js'
import {getJson} from '../../services/QuotesService.js'

//import QuotesServices from '../../services/QuotesService.js';

export default {
    data:() => ({
    title:'das',
     primarySearch: '',   
     pendingSalesOnly:true,
     quoteSelected:[],
     currentItems:[],
     primaryHeaders: [
          {
            text: 'Quote Code',
            align: 'left',
            sortable: false,
            value: 'quoteName',
          },
          { text: 'Client', value: 'client.lastName' },
          { text: 'N.I.T.', value: 'client.ci' },
          { text: 'Date', value: 'date' },
        ],

      primaryItems: [],
      secondHeaders: [
          { text: 'Producto', value:'product.code'},
          { text: 'Descripcion', value: 'product.name' },
          { text: 'Precio', value: 'price' },
          { text: 'Cantidad', value: 'quantity' },
      ]

    }),

    async mounted() {
   
       this.primaryItems = getJson();
       console.log (this.primaryItems);
    },

    methods: {
        async changeType(type){
             const url = 'http://192.168.0.17:5000/crm-api/quotes/'+type;
             const response = await fetch(url)
             this.primaryItems = await response.json();
        },

        getPendingSales(){
            var currentItemsIndex=0;
            var index;

            for(index=0;index<this.primaryItems.length;index++){
                if(this.primaryItems[index].sold=='false'){
                    this.currentItems[currentItemsIndex] = this.primaryItems[index]
                    currentItemsIndex++;
                }
            }
            this.title = 'pending Sales Only';
        },

        getSoldSales(){
            var currentItemsIndex=0;
            var index;

            for(index=0;index<this.primaryItems.length;index++){
                if(this.primaryItems[index].sold=='true'){
                    this.currentItems[currentItemsIndex] = this.primaryItems[index]
                    currentItemsIndex++;
                }
            }
            this.title = 'soldSalesOnly';
        },

    }
  
}
</script>

<style scoped>

    #generalTable{
        position: absolute;
        top: 8vh;
        left: 1vw;
        height: auto;
        width: 42.5vw;
    }

    #secondTable{
        position:absolute;
        top:8vh;
        left: 1vw;
        height: auto;
        width: 42.5vw;
    }

    #title{
        position: absolute;
        background-color: #F67280;
        top: 85vh;
        left: 50vw;
    }

    #pendingSaleButton{
        position: absolute;
        background-color: red;
        top:80vh;
        left:30vw;
    }
    #soldButton{
        position: absolute;
        background-color: green;
        top:80vh;
        left:60vw;
    }

    #primaryCard{
        position: absolute;
        top:10vh;
        left: 5vw;
        background-color: #8552A0;
        height: 52vh;
        width: 45vw;
    }
    #secondCard{
        position: absolute;
        top:10vh;
        left: 52vw;
        background-color: #06A10B;
        height: 52vh;
        width: 45vw;
    }
    #quotesReportDiv{
        background-color: #ECECEC;
        position: absolute;
        height: 100vh;
        width: 100vw;
    }
</style>