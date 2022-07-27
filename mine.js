let apiUrl = "https://myapi.hellomuiz.my.id/index.php/"
let app = Vue.createApp({
    data() {
        return {
            user: {},
            
            markdown: null
        }
    },
    methods: {
        getUsersData() {
            axios
                .get(apiUrl+"users")
                .then((res) => {
                    this.user = res.data;
                    console.log(res.data);
                })
                .catch((error) => {
                    console.log(error);
                });
            },
            
    },
    beforeMount() {
        this.getUsersData()
       
    }
})
app.mount('#app');