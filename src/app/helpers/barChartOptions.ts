import { color, Options } from "highcharts";

export const barChartOptions: Options = {
    chart: {
        type: 'column'
    },
    credits: {
        enabled: false
    },
    title: {
        text: ''
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    legend: {
        enabled: false
    },
    xAxis: {
        categories: ['USA', 'China', 'Brazil', 'EU', 'Argentina', 'India'],
        crosshair: true,
    },

    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 10,
            borderRadius:20
        }
    },
    series: [
        {
            name: 'Total',
            color:'blue',
            data: [387749, 250000, 387749, 387749, 387749, 250000]
        } as any,
        {
            name: 'Tracked',
            color:'lightgrey',
            data: [387749, 250000, 387749, 250000, 250000, 387749]
        } as any
    ]

}