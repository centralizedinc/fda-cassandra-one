export default {

  install(Vue) {
    Vue.mixin({
      methods: {
        getCaseStatus(status) {
          var arr = [
            'For Evaluation',
            'For Review',
            'For Approval',
            'For Finalization',
            'For Execution'
          ]
          return arr[status]
        },
        getCaseType(status) {
          var arr = [
            'Docket',
            'Case',
            'Appeal'
          ]
          return arr[status]
        },
        caseStatus(status) {
          if (status = 5) {
            return "Docketed"
          } else if (status = 0) {
            return "Evaluated"
          } else if (status = 1) {
            return "Reviewed"
          } else if (status = 2) {
            return "Approved"
          } else if (status = 3) {
            return "Finalized"
          } else if (status = 4) {
            return "Executed"
          }
          //evaluation = 0
          // review = 1
          // approval = 2
          // finalization = 3
          // execution = 4
          // creation/docketing = 5
        },
        formatDate: (date, type) => {
          if (!date) {
            return "";
          }
          var format = type ? type : {
            hour12: true,
            year: "numeric",
            month: "long",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
          };
          var dt = new Date(date).toLocaleString("en-US", format);
          return dt;
        },
        allowed_access(module_access) {
          console.log("MODULE_ACCESS: " + this.$store.state.user_session.permissions.find(o => o.value === module_access))
          if (this.$store.state.user_session.permissions.find(o => o.value === module_access)) {
            return true
          } else {
            return false
          }
        },
        getProgressColor(status) {
          return ['#4285f4', '#fbbc05', '#34a853', '#ff8c00', '#ea4335'][status]
        },
        logout() {
          this.$store.dispatch("LOGOUT");
          this.$router.push("/login");
        },
        createActivityDesc(item) {

          return "<span class='primary--text'>" + this.formatDate(item.date_created) + "</span> &mdash; " + this.caseStatus(item.status) + " by " + item.user.username + " Type: " + this.getCaseType(item.stage) + ""
        }
        //   console.log("Item#########" + JSON.stringify(item))
        //   return "<span class='primary--text'>"+this.formatDate(item.date_created)+"</span> &mdash;  Created Case Docket (Docket Number: "+this.docket.dtn+")  Date Modified "+this.formatDate(item.date_modified)+""
        //   date name status type },
        // date - 


      }
    })
  }
}