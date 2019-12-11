<template>
    <div class="quotesReportDiv gray">

      <v-btn  class='pendingSaleButton red ' 
      v-on:click="changeType('pending')">Pending</v-btn>

      <v-btn class='soldButton green' 
      v-on:click="changeType('sold')">Sold</v-btn>
      
        <v-card class="primaryCard purple ">
            <v-card-title>Cotizaciones</v-card-title>
            <v-data-table class="generalTable"
            v-model="quoteSelected"
            :headers="primaryHeaders"
            :items="currentItems.length>0?currentItems:primaryItems"
            :single-select= true
            show-select
            :search="primarySearch"
            ></v-data-table>
        </v-card>

        <v-card class="secondCard blue">
            <v-card-title>Productos</v-card-title>
            <v-data-table class="secondTable "
            :headers="secondHeaders"
            :items="quoteSelected.length>0?quoteSelected[0].quoteListItems:[]"
            :sort-by="['price', 'quantity']"
            :sort-desc="[false, true]"
            ></v-data-table>
        </v-card>
    </div>
</template>

<script>
import {getPendingJson} from '../../services/QuotesService.js'
import {getSoldJson} from '../../services/QuotesService.js'



export default {
    data:() => ({
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
       this.primaryItems = getPendingJson();
    },

    methods: {
        async changeType(type){
            if(type=='pending')
                this.primaryItems = getPendingJson();
            else 
                this.primaryItems = getSoldJson();
        }
    }
  
}
</script>

<style scoped>

    .generalTable{
        position: absolute;
        top: 8vh;
        left: 1vw;
        height: auto;
        width: 42.5vw;
    }

    .secondTable{
        position:absolute;
        top:8vh;
        left: 1vw;
        height: auto;
        width: 42.5vw;
    }


    .pendingSaleButton{
        position: absolute;
        top:80vh;
        left:30vw;
    }
    .soldButton{
        position: absolute;
        top:80vh;
        left:60vw;
    }

    .primaryCard{
        position: absolute;
        top:10vh;
        left: 5vw;
        height: 52vh;
        width: 45vw;
    }
    .secondCard{
        position: absolute;
        top:10vh;
        left: 52vw;
        height: 52vh;
        width: 45vw;
    }
    .quotesReportDiv{
        position: absolute;
        height: 100vh;
        width: 100vw;
    }
</style>