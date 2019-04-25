

export default {

    install(Vue) {
      Vue.mixin({
        methods: {
            formatDate: (date, type) => {
                if (!date) {
                  return "";
                }
                var dt = new Date(date).toLocaleString("en-US", type ? type : {
                  hour12: true,
                  year: "numeric",
                  month: "long",
                  day: "2-digit"
                });
                return dt;
              },
        }
      })
    }
}