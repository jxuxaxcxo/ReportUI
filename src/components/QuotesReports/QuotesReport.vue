<template>
    <div>

        <h1 id="title">{{title}}</h1>
        <v-btn id= "pendingSaleButton"
        rounded = {true}
        v-on:click="getPendingSales()"
        >Pending</v-btn>
        <v-btn id="soldButton"
        rounded = {true}
        v-on:click="getSoldSales()"
        >Sold</v-btn>

      <v-card id="primaryCard">
        <v-card-title>Cotizaciones</v-card-title>
        <v-data-table id="generalTable"
          v-model="quoteSelected"
          :headers="primaryHeaders"
          :items="currentItems"
          :single-select= true
          show-select
          :search="primarySearch"
        ></v-data-table>
      </v-card>

      <v-card id="secondCard">
        <v-card-title>Productos</v-card-title>
        <v-data-table id="secondTable"
          :headers="secondHeaders"
          :items="quoteSelected.length>0?quoteSelected[0].qliList:yes"
          :sort-by="['price', 'quantity']"
          :sort-desc="[false, true]"
        ></v-data-table>
      </v-card>
    </div>
</template>

<script>
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
          { text: 'Client', value: 'client.lastname' },
          { text: 'N.I.T.', value: 'client.ci' },
          { text: 'Date', value: 'date' },
        ],

    primaryItems: [
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
    ],

      secondHeaders: [
          { text: 'Producto', value:'product.productCode'},
          { text: 'Descripcion', value: 'product.name' },
          { text: 'Precio', value: 'price' },
          { text: 'Cantidad', value: 'quantity' },
      ]

    }),

    methods: {
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
        background-color: red;
        top: 85vh;
        left: 50vw;
    }

    #pendingSaleButton{
        position: absolute;
        background-color: red;
        top:10vh;
        left:30vw;
    }
    #soldButton{
        position: absolute;
        background-color: green;
        top:10vh;
        left:60vw;
    }

    #primaryCard{
        position: absolute;
        top:30vh;
        left: 5vw;
        background-color: red;
        height: 52vh;
        width: 45vw;
    }
    #secondCard{
        position: absolute;
        top:30vh;
        left: 52vw;
        background-color: blue;
        height: 52vh;
        width: 45vw;
    }
</style>