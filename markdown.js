let app = Vue.createApp({
    data() {
      return {
        articles: {},
        markdown: null
      }
    },
    methods: {
      getArticleData() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const fileName = urlParams.get('markdown');
        var converter = new showdown.Converter();
        axios
          .get(
            "https://raw.githubusercontent.com/dzulfadhlilmuiz/tekweb2022/main/" + fileName
          )
          .then((res) => {
            var html = converter.makeHtml(res.data);           
                    this.markdown = html;
            this.articles = res.data;
            console.log(res.data)
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    beforeMount() {
      this.getArticleData()
    }
  })
  app.mount('#app');
