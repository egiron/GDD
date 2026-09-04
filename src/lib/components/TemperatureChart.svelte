<script lang="ts">
  // @ts-nocheck
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';
  import 'chartjs-adapter-date-fns';  // Still required for date formatting capabilities
  import type { GDDRow } from '$lib/types';

  // import {
  //       Chart,
  //       Colors,
  //       BarController,
  //       CategoryScale,
  //       LineController,
  //       LineElement,
  //       LinearScale,
  //       PointElement,
  //       BarElement,
  //       Legend
  //   } from 'chart.js'

  //   Chart.register(
  //       Colors,
  //       BarController,
  //       BarElement,
  //       CategoryScale,
  //       LineController,
  //       LineElement,
  //       LinearScale,
  //       PointElement,
  //       Legend
  //   );

  const { data, latitude, longitude, units, chart_temperature_labels } = $props<{ 
    data: GDDRow[], 
    latitude:number, 
    longitude:number, 
    units:string,
    chart_temperature_labels:{}
  }>();
    
  let canvas: HTMLCanvasElement;
  let chart = $state<Chart | undefined>(undefined);

  $effect(() => {
    if (chart && data) {
      chart.data.labels = data.map(gdd => {
        const date = new Date(gdd.timestamp);
        return date; //.toLocaleDateString(); //date.toLocaleTimeString();
      });
      chart.data.datasets[0].data = data.map(gdd => gdd.Tn);
      chart.data.datasets[1].data = data.map(gdd => gdd.Ta);
      chart.data.datasets[2].data = data.map(gdd => gdd.Tx);
      chart.update();
    }
  });

  const chartAreaBorderPlugin = {
    id: 'chartAreaBorder',
    beforeDraw(chart, args, options) {
      const {ctx, chartArea: {left, top, width, height}} = chart;
      ctx.save();
      ctx.strokeStyle = options.borderColor;
      ctx.lineWidth = options.borderWidth;
      ctx.setLineDash(options.borderDash || []);
      ctx.lineDashOffset = options.borderDashOffset;
      ctx.strokeRect(left, top, width, height);
      ctx.restore();
    }
  };

  function toTitleCase(str) {
    return str
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  function formatXDateLabels(date) {
    const y = date.toLocaleDateString(chart_temperature_labels.chart_locale, { year: 'numeric' });
    const m = date.toLocaleDateString(chart_temperature_labels.chart_locale, { month: 'short' });
    const d = date.toLocaleDateString(chart_temperature_labels.chart_locale, { day: '2-digit' });
    return `${y} ${toTitleCase(m).replace('.','')} ${d}`;
  }

  onMount(() => {
    chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: `${chart_temperature_labels.chart_temperature_legend_label1} (°${units})`,
          data: [],
          borderColor: '#3498db',
          borderWidth: 1,
          // hoverBorderWidth: 2,
          // cubicInterpolationMode: 'monotone',
          // tension: 0.4,
          fill: false,
          pointRadius: 0, // disable for a single dataset
          // animations: {
          //   y: {
          //     duration: 2000,
          //     delay: 500
          //   }
          // },
        },
        {
          label: `${chart_temperature_labels.chart_temperature_legend_label2} (°${units})` ,
          data: [],
          borderColor: '#FF8834',
          borderWidth: 1,
          // hoverBorderWidth: 2,
          // cubicInterpolationMode: 'monotone',
          // tension: 0.4,
          fill: false,
          pointRadius: 0 // disable for a single dataset
        },
        {
          label: `${chart_temperature_labels.chart_temperature_legend_label3} (°${units})`,
          data: [],
          borderColor: '#FF3688',
          borderWidth: 1,
          // hoverBorderWidth: 2,
          // cubicInterpolationMode: 'monotone',
          // tension: 0.4,
          fill: false,
          pointRadius: 0 // disable for a single dataset
        },
      ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,  // Crucial: Allows the height to adapt on mobile without breaking layout
        // showLine: false, // disable for all datasets
        animation: {
          duration: 0 // Disable animations for real-time updates
          // y: {
          //   easing: 'easeInOutElastic',
          //   from: (ctx) => {
          //     if (ctx.type === 'data') {
          //       if (ctx.mode === 'default' && !ctx.dropped) {
          //         ctx.dropped = true;
          //         return 0;
          //       }
          //     }
          //   }
          // }
        },
        locale: chart_temperature_labels.chart_locale, //'es-ES', // Sets the language/region standard
        scales: {
          x: {
            type: 'time',
            offset: true,
            time: {
              unit: 'day', // Base unit for ticks (day, week, month, year)
              displayFormats: {
                day: 'Y  MMM-dd', // Formats the label (e.g., "Oct 13")
                // month: 'MMM YYYY'
              }
            },
            // time: {
            //   tooltipFormat: 'dd' //'DD T' // Luxon format string
            // },
            title: {
              // color: 'red',
              display: true,
              text: function(){ return `${chart_temperature_labels.chart_temperature_xlabel}`}, //'Date',
              font: {
                // family: 'Comic Sans MS',
                // size: 12,
                weight: 'bold',
                // lineHeight: 1.2,
              },
            },
            ticks: {
              color: '#333', 
              font: {
                family: 'Arial', size: 10, //weight: 'bold'
              },
              maxRotation: 90,             
              minRotation: 90,             
              autoSkip: true,              
              autoSkipPadding: 10,
              // callback: function(value, index, ticks) {
              //   const label = this.getLabelForValue(value);
              //   return label.replaceAll('/','-'); 
              //   // return new Date(label).toLocaleDateString('en-US', {
              //   //   month: 'short',
              //   //   day: 'numeric'
              //   // });
              // }
              callback: function(value, index, ticks) {
                // Define configuration for numeric year, short text month, and 2-digit day
                // const formatter = new Intl.DateTimeFormat(chart_temperature_labels.chart_locale, {
                //   year: 'numeric',
                //   month: 'short',
                //   day: '2-digit'
                // });
                // // Destructure the parts array into an easily queryable object
                // const parts = formatter.formatToParts(value).reduce((acc, part) => {
                //   acc[part.type] = part.value;
                //   return acc;
                // }, {});
                // return `${parts.year} ${parts.month} ${parts.day}`;
                return formatXDateLabels(new Date(value));
                
              }   
            }
          },
          y: {
            title: {
              // color: 'red',
              display: true,
              text: function(){ return `${chart_temperature_labels.chart_temperature_ylabel} (°${units})`},
              font: {
                // family: 'Comic Sans MS',
                // size: 12,
                weight: 'bold',
                // lineHeight: 1.2,
              },
            },
            beginAtZero: false,
            // suggestedMin: 290, //15,
            // suggestedMax: 292,
            ticks: {
              color: '#333', 
              font: {
                family: 'Arial', size: 10, //weight: 'bold'
              },
              // Intercept the tick value to apply language-specific formatting
              // callback: function(value, index, ticks) {
              //   const date = new Date(value);
              //   // Example: Using German ('de-DE') localization
              //   // "short" month + "numeric" year (e.g., "Jan. 2026")
              //   return date.toLocaleDateString('es', {
              //     month: 'short',
              //     year: 'numeric'
              //   });
              // },
              // callback: function(value, index, ticks) {
              //   const label = this.getLabelForValue(value);
              //   // return label.split('/'); 
              //   return new Date(label).toLocaleDateString('es-CO', {
              //     month: 'short',
              //     day: 'numeric'
              //   });
              // } 
              
            }
          }
        },
        interaction: {
            mode: 'x' //'dataset' //'index' //'nearest' //'point'
        },
        // events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
        plugins: {
          title: {
              display: true,
              text: function(){ return `${chart_temperature_labels.chart_temperature_title}`}, //'Daily Temperature', // at site-specific',
              font: {
                // family: 'Comic Sans MS',
                size: 16,
                weight: 'bold',
                lineHeight: 1.2,
              },
          },
          subtitle: {
              display: true,
              text: `Lat: ${latitude}, Lng: ${longitude}`,
              font: {
                // family: 'Comic Sans MS',
                size: 10,
                // weight: 'bold',
                // lineHeight: 1.2,
              },
              padding: {top: -10, left: 0, right: 0, bottom: 0}
          },
          legend: {
            display: true,
            position: 'bottom', //'top','chartArea',
            align: 'center',//'end',
            labels: {
              lineWidth: 1,
              font: {
                family: 'Arial', size: 11, //weight: 'bold'
              },
            }
          },
          tooltip: {
            enabled: true,
            callbacks: {
              title: function(tooltipItems) {
                const item = tooltipItems[0]
                const defaultLabel = item.label.split(',').slice(0,2); //item.label; 
                // Return any string or array of strings (for multi-line titles)
                // return `📅 Date: ${defaultLabel}`;
                return `${defaultLabel}`;
              }
            }
          },
          chartAreaBorder: {
            borderColor: '#ccc',
            borderWidth: 0.7,
            // borderDash: [5, 5],
            borderDashOffset: 2,
          }
        }
      },
      plugins: [chartAreaBorderPlugin]
    });

    return () => {
      if (chart) chart.destroy();
    };
  });
</script>

<canvas bind:this={canvas}></canvas>
