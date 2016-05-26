"use strict";

angular.module('myApp.chart', [])

    .directive("jakebloChart", function() {
        return {
            restrict: 'E',
            scope: {
                config: '=jakebloChart'
            },
            replace: true,
            templateUrl: "components/chart/views/jakeblo-chart.html",

            link: function (scope, element) {
                var context = element.find('canvas');
                scope.chart = new Chart(context[0], {
                    type: 'bar',
                    data: {
                        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                        datasets: [{
                            label: '# of Votes',
                            data: [12, 19, 3, 5, 2, 3]
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero:true
                                }
                            }]
                        }
                    }
                });
            }
        }
    });
