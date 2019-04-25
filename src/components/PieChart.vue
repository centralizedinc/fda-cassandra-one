<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  props: ['chartdata', 'options'],
  mounted () {
    this.renderChart(this.chartdata, {legend:{display:false}, title:{display:false}})
  }
}
</script>