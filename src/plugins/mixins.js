

export default {

    install(Vue) {
      Vue.mixin({
        methods: {
            getCaseStatus(status){
              var arr=[
                'For Evaluation',
                'For Review',
                'For Approval',
                'For Finalization',
                'For Execution'
              ]
              return arr[status]
            },
            getCaseType(status){
              var arr=[
                'Docket',
                'Case',
                'Appeal'
              ]
              return arr[status]
            },
            formatDate: (date_str, type) => {
                if (!date_str) {
                  return "";
                }
                var date = new Date(date_str)
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var ampm = hours >= 12 ? 'pm' : 'am';
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
                minutes = minutes < 10 ? '0'+minutes : minutes;
                var strTime = hours + ':' + minutes + ' ' + ampm;
                return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
            },
            allowed_access(module_access){
              console.log("MODULE_ACCESS: "+ this.$store.state.user_session.permissions.find(o => o.value === module_access))
              if(this.$store.state.user_session.permissions.find(o => o.value === module_access)){
                return true
              }else{
                return false
              }              
            },
            logout() {
            this.$store.dispatch("LOGOUT");
            this.$router.push("/login");
          },
          createActivityDesc(item){
            return "<span class='primary--text'>"+this.formatDate(item.date_created)+"</span> &mdash; "+this.docket.status+" By "+this.docket.user+" with Case Information (Docket Number: "+this.docket.dtn+" Status "+ this.docket.status+")"
          },
        }
      })
    }
}