import { Options } from "highcharts";

export const lineChartOptions: Options = {
    chart: {
        type: 'spline'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ': '
    },
    xAxis: {
        categories: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        accessibility: {
            description: 'Months of the year'
        }
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            format: ''
        }
    },
    tooltip: {
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: 'blue',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: '',
        data: [{
            y: 1.5,

            accessibility: {
                description: 'Snowy symbol, this is the coldest point in the ' +
                    'chart.'
            }
        }, 1.6, 3.3, 5.9, 10.5, 13.5, 14.5, 14.4, 11.5, 8.7, 4.7, 2.6]
    }] as any

}