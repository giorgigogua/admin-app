import { Options } from "highcharts";

export const pieChartOptions: Options ={
        chart: {
            type: 'pie',
            events: {
                render() {
                    const chart = this,
                        series = chart.series[0];
                    let customLabel = chart.options.chart.custom.label;
    
                    if (!customLabel) {
                        customLabel = chart.options.chart.custom.label =
                            chart.renderer.label(
                                'Total<br/>' +
                                '<strong>2 877 820</strong>'
                            )
                                .css({
                                    color: '#000',
                                    textAnchor: 'middle'
                                })
                                .add();
                    }
    
                    const x = series.center[0] + chart.plotLeft,
                        y = series.center[1] + chart.plotTop -
                        (customLabel.attr('height') / 2);
    
                    customLabel.attr({
                        x,
                        y
                    });
                    // Set font size based on chart diameter
                    customLabel.css({
                        fontSize: `${series.center[2] / 12}px`
                    });
                }
            }as any
        }, 
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                allowPointSelect: false,
                cursor: 'pointer',
                dataLabels: [{
                    enabled: false,
                }, {
                    enabled: false,
                }],
                showInLegend: false
            }
        },
        series: [{
            name: 'Registrations',
            colorByPoint: true,
            innerSize: '75%',
            data: [{
                name: 'Dogecoin',
                y: 23.9
            }, {
                name: 'Ethereum',
                y: 12.6
            }, {
                name: 'Bitcoin',
                y: 37.0
            }, {
                name: 'Tether',
                y: 26.4
            }]
        }] as any

}