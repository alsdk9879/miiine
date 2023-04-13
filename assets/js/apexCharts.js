const variablesNum = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const primaryColorList = variablesNum.map((item) => getComputedStyle(document.querySelector('html')).getPropertyValue(`--primary-color-${item}`));

const primarySets = primaryColorList.map((color) => color.trim());    // chart.js 처럼 배열 공백 자동처리 X
console.log(primarySets)

// gaugeChart
const gaugeChartOptions = {
  series: [70],
  chart: {
    width: 300,
    height: 300,
    type: 'radialBar',
  },
  colors: [primarySets[3]],
  plotOptions: {
    radialBar: {
      hollow: {
        size: '60%',
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          color: '#373737',
          fontSize: '40px',
          fontWeight: 600,
          offsetY: 15,
        },
      },
    },
  },
  stroke: {
    lineCap: 'round',
  },
};
const apexGaugeChart = new ApexCharts(document.querySelector("#gaugeChart"), gaugeChartOptions);
apexGaugeChart.render();

// barChart
let barChartOptions = {
  series: [{
    data: [130, 158, 200, 270, 340]
  }],
  chart: {
    type: 'bar',
    height: 300,
    toolbar: {
      show: false
    },
  },
  colors: primarySets,
  plotOptions: {
    bar: {
      horizontal: true,
      // borderRadius: 24,
      barHeight: '75%',
      dataLabels: {
        position: 'top',
      },
      distributed: true
    }
  },
  dataLabels: {
    enabled: true,
    textAnchor: 'end',
    formatter: function(val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex] + " " + val
    },
    offsetX: -10,
    style: {
      fontSize: '12px',
      colors: ['#fff']
    }
  },
  xaxis: {    // x축
    categories: ['ReaDT', 'LIFE+', '메타버스 러닝', '생각의 탄생', '일의 밀도'],
    labels: {
      show: false
    },
    axisBorder: {   // x축 선
      show: false
    },
    axisTicks: {    // 간격눈금
      show: false
    }
  },
  yaxis: {    // y축
    show: false,
    axisBorder: {
      show: false
    }
  },
  legend: {
    show: false
  },
  grid: {   // 차트 라인 숨김
    show: false
  },
};
let apexBarChart = new ApexCharts(document.querySelector('#barChart'), barChartOptions);
apexBarChart.render();

// barChart2
const barChart2Options = {
  series: [{
    data: [130, 158, 50, 200, 270, 340]
  }],
  chart: {
    width: '100%',
    height: 300,
    type: 'bar',
    toolbar: {
      show: false
    },
    selection: {
      stroke: {
        dashArray: 1
      }
    }
  },
  colors: [primarySets[4], primarySets[2], primarySets[4], primarySets[2], primarySets[4], primarySets[2]],
  plotOptions: {
    bar: {
      // borderRadius: 14,  // 반응형시 깨짐현상 발생 -> 상단 css로 처리
      columnWidth: '10%',
      dataLabels: {
        position: 'top',
      },
      distributed: true
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ['#706CE8']
    }
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: ['0%', '1% ~ 20%', '21% ~ 40%', '41% ~ 60%', '61% ~ 80%', '81% ~ 100%'],
    position: 'bottom',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: '#B7B7B7',
      }
    }
  },
};
const apexBar2Chart = new ApexCharts(document.querySelector("#barChart2"), barChart2Options);
apexBar2Chart.render();