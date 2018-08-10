$(document).ready(function() {
    Highcharts.chart('volumeYTD', {
        title: {
            text: 'Sell Out Volume YTD'
        },
        subtitle: {
            text: '2018'
        },
        xAxis: {
            gridLineWidth: 1,
            categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
        },
        yAxis: {
            gridLineWidth: 1,
            title: {
                text: 'Volume (tonase)',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        },
        tooltip: {
            shared: true
        },
        series: [{
            type: 'column',
            name: 'Actual',
            data: [87708, 67542, 72977, 75699, 89046, 50404, 39916],
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                align: 'center',
                y: -10,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }, {
            name: 'Target',
            color: '#FDD835',
            data: [91853, 85855, 75413, 80193, 94284, 71953, 98913],
            marker: {
                lineWidth: 2,
                lineColor: '#FDD835',
                fillColor: '#fff'
            },
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                align: 'center',
                y: 25,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });

    Highcharts.chart('volumeMTD', {
        title: {
            text: 'Sell Out Volume MTD'
        },
        subtitle: {
            text: 'July'
        },
        xAxis: {
            gridLineWidth: 1
        },
        yAxis: {
            gridLineWidth: 1,
            title: {
                text: 'Volume (tonase)',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        },
        series: [{
            type: 'column',
            showInLegend: false,
            data: [2318, 3375, 3185, 3200, 3026, 3484, 3444, 4214, 3648, 3000, 3797, 3228, 3364, 4041, 3745, 3610, 2758, 3492],
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                align: 'center',
                y: 0,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });

    Highcharts.chart('universe', {
        title: {
            text: 'Universe'
        },
        xAxis: {
            gridLineWidth: 1,
            categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
        },
        yAxis: {
            gridLineWidth: 1,
            title: {
                text: 'Outlet',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        },
        series: [{
            type: 'column',
            showInLegend: false,
            data: [4193.75, 4193.75, 4193.75, 4193.75, 4193.75, 4193.75, 4193.75],
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                align: 'center',
                format: '{point.y:.2f}',
                y: 0,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });

    Highcharts.chart('YTDVisit', {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'YTD Visit Completion'
        },
        subtitle: {
            text: '2018'
        },
        xAxis: [{
            categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            crosshair: true
        }],
        yAxis: [{
            title: {
                text: 'Transaction',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, {
            title: {
                text: 'Achievement',
                style: {
                    color: '#43A047'
                }
            },
            min: 0,
            max: 100,
            labels: {
                format: '{value}%',
                style: {
                    color: '#43A047'
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        series: [{
                name: 'Actual',
                type: 'column',
                data: [9931, 8465, 11325, 11958, 16786, 11344, 13117],
                tooltip: {
                    valueSuffix: '°C'
                }
            },
            {
                name: 'Target',
                color: '#FDD835',
                data: [13048, 10019, 12039, 18739, 17532, 16319, 15432],
                marker: {
                    lineWidth: 2,
                    lineColor: '#FDD835',
                    fillColor: '#fff'
                }
            }, {
                name: 'Acv.',
                color: '#43A047',
                yAxis: 1,
                data: [80.1, 85.16, 87.32, 67.73, 100, 73.83, 92.01],
                tooltip: {
                    valueSuffix: '%'
                },
                marker: {
                    lineWidth: 2,
                    lineColor: '#43A047',
                    fillColor: '#fff'
                }
            }
        ]
    });

    Highcharts.chart('YTDStrike', {
        title: {
            text: 'YTD Strike Rate'
        },
        subtitle: {
            text: '2018'
        },
        xAxis: {
            gridLineWidth: 1,
            categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
        },
        yAxis: {
            gridLineWidth: 1,
            title: {
                text: 'Transaction',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        },
        tooltip: {
            shared: true
        },
        series: [{
            type: 'column',
            name: 'Actual',
            data: [8230, 7031, 10166, 5728, 11631, 5232, 5958],
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                align: 'center',
                y: -10,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }, {
            name: 'Target',
            color: '#FDD835',
            data: [10000, 7301, 10000, 13898, 13567, 12273, 11978],
            marker: {
                lineWidth: 2,
                lineColor: '#FDD835',
                fillColor: '#fff'
            },
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                align: 'center',
                y: 25,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });

    Highcharts.chart('coverage', {
        title: {
            text: 'Coverage'
        },
        xAxis: {
            gridLineWidth: 1,
            categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
        },
        yAxis: {
            gridLineWidth: 1,
            title: {
                text: 'Outlet',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        },
        series: [{
            type: 'column',
            name: 'Actual',
            data: [4193.75, 4193.75, 4193.75, 4193.75, 4193.75, 4193.75, 4193.75],
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                align: 'center',
                format: '{point.y:.2f}',
                y: 0,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }, {
            name: 'Target',
            color: '#FDD835',
            data: [5000, 5000, 5000, 5000, 5000, 5000, 5000],
            marker: {
                lineWidth: 2,
                lineColor: '#FDD835',
                fillColor: '#fff'
            },
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                align: 'center',
                y: 25,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });

    Highcharts.chart('transaction', {
        title: {
            text: 'Transaction'
        },
        xAxis: {
            gridLineWidth: 1,
            categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
        },
        yAxis: {
            gridLineWidth: 1,
            title: {
                text: 'Outlet',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        },
        series: [{
            type: 'column',
            name: 'Actual',
            data: [4193.75, 4193.75, 4193.75, 4193.75, 4193.75, 4193.75, 4193.75],
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                align: 'center',
                format: '{point.y:.2f}',
                y: 0,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }, {
            name: 'Target',
            color: '#FDD835',
            data: [5000, 5000, 5000, 5000, 5000, 5000, 5000],
            marker: {
                lineWidth: 2,
                lineColor: '#FDD835',
                fillColor: '#fff'
            },
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                align: 'center',
                y: 25,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });

    var gaugeOptions = {

        chart: {
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '140%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
                [0.1, '#55BF3B'], // green
                [0.5, '#DDDF0D'], // yellow
                [0.9, '#DF5353'] // red
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };

    // The speed gauge
    var chartSpeed = Highcharts.chart('today-1', Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 200
        },

        credits: {
            enabled: false
        },

        series: [{
            data: [80],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black')
            }
        }]

    }));

    // The RPM gauge
    var chartRpm = Highcharts.chart('today-2', Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 5
        },

        series: [{
            data: [1],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black')
            }
        }]

    }));

    // Bring life to the dials
    setInterval(function() {
        // Speed
        var point,
            newVal,
            inc;

        if (chartSpeed) {
            point = chartSpeed.series[0].points[0];
            inc = Math.round((Math.random() - 0.5) * 100);
            newVal = point.y + inc;

            if (newVal < 0 || newVal > 200) {
                newVal = point.y - inc;
            }

            point.update(newVal);
        }

        // RPM
        if (chartRpm) {
            point = chartRpm.series[0].points[0];
            inc = Math.random() - 0.5;
            newVal = point.y + inc;

            if (newVal < 0 || newVal > 5) {
                newVal = point.y - inc;
            }

            point.update(newVal);
        }
    }, 2000);
});