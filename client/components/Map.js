import React, { useEffect, useState } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

const data = [
  {
    country: 'Lithuania',
    visites: 501,
  },
  {
    country: 'Czech Republic',
    visites: 301,
  },
  {
    country: 'Ireland',
    visites: 201,
  },
  {
    country: 'Germany',
    visites: 165,
  },
  {
    country: 'Australia',
    visites: 139,
  },
];

const Map = () => {
  const [chart, setChart] = useState({});
  useEffect(() => {
    let chart = am4core.create('chartdiv', am4charts.XYChart);

    chart.paddingRight = 20;

    //creating data
    let data = [];
    let visits = 10;
    for (let i = 1; i < 366; i++) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({
        date: new Date(2018, 0, i),
        name: 'name' + i,
        value: visits,
      });
    }

    chart.data = data;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = 'date';
    series.dataFields.valueY = 'value';

    series.tooltipText = '{valueY.value}';
    chart.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    setChart(chart);

    return function () {
      if (chart) {
        chart.dispose();
      }
    };
  }, []);
  return <div id="chartdiv" style={{ width: '100%', height: '500px' }}></div>;
};

export default Map;
