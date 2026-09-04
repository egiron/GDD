<script lang="ts">

  // @ts-nocheck
  import { onMount } from 'svelte';
  import { t } from '$lib/assets/i18n.js';
  import Chart from 'chart.js/auto';
  import 'chartjs-adapter-date-fns';  // Still required for date formatting capabilities
  import type { GDDRow } from '$lib/types';
  // import ArrowUpIcon from "@lucide/svelte/icons/arrow-up";
  import FileDown from "@lucide/svelte/icons/file-down"; 
  import ImageDown from "@lucide/svelte/icons/image-down"; 
  import EllipsisVertical from "@lucide/svelte/icons/ellipsis-vertical"; 
  import FolderDown from "@lucide/svelte/icons/folder-down"; 
  // import { Button } from "$lib/components/ui/button/index.js";
 import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
 import * as XLSX from 'xlsx';

  // Helper function to check if Dark Mode is active
  // let isDarkMode = () => document.documentElement.classList.contains('dark');
  // let dark = $derived(isDarkMode());

  const { data, latitude, longitude, units, selectedCropPestLabel, chart_temperature_labels } = $props<{ 
    data: GDDRow[], 
    latitude:number, 
    longitude:number, 
    units:string,
    selectedCropPestLabel:string,
    chart_temperature_labels:{}
  }>();
    
  let canvas: HTMLCanvasElement;
  let chart = $state<Chart | undefined>(undefined);
  let dark = $derived(chart_temperature_labels.chart_dark);
  let datasets = [];

  $effect(() => {
    if (chart && data) {
      // isDarkMode = () => document.documentElement.classList.contains('dark');
      // dark = isDarkMode();
      chart.data.labels = data.map(gdd => {
        const date = new Date(gdd.timestamp);
        return date; //.toLocaleDateString(); //date.toLocaleTimeString();
      });

      datasets = [];
      const tmin = {
        label: `${chart_temperature_labels.chart_temperature_legend_label1} (°${units})`,
        data: data.map(gdd => gdd.Tn), //[],
        borderColor: function(){ return dark ? '#FFFF00' : '#f1c40f'},
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
      };

      const tavg = {
        label: `${chart_temperature_labels.chart_temperature_legend_label2} (°${units})` ,
        data: data.map(gdd => gdd.Ta), //[],
        borderColor: '#e74c3c',
        borderWidth: 1,
        // hoverBorderWidth: 2,
        // cubicInterpolationMode: 'monotone',
        // tension: 0.4,
        fill: false,
        pointRadius: 0 // disable for a single dataset
      };

      const tmax = {
        label: `${chart_temperature_labels.chart_temperature_legend_label3} (°${units})`,
        data: data.map(gdd => gdd.Tx), //[],
        borderColor: '#FF0000',
        borderWidth: 1,
        // hoverBorderWidth: 2,
        // cubicInterpolationMode: 'monotone',
        // tension: 0.4,
        fill: false,
        pointRadius: 0 // disable for a single dataset
      };

      const prec = {
        label: `${chart_temperature_labels.chart_temperature_legend_label4}`, //'Precipitation (mm/day)',
        data: data.map(gdd => gdd.Prec), //[],
        borderColor: function(){ return dark ? 'lightblue' : '#3498db88' },
        borderWidth: 1,
        borderDash: [2, 2],
        fill: false,
        pointRadius: 0, // disable for a single dataset
        yAxisID: 'y1' // Links to secondary axis ID
      };

      // console.log(data);
      const allEqual = arr => arr.every(val => val === arr[0]);
      if (Object.hasOwn(data[0], "Tn")){
        const tn = data.map(gdd => gdd.Tn);
        if (!allEqual(tn))
          datasets.push(tmin);
      }
      if (Object.hasOwn(data[0], "Ta")){
        const ta = data.map(gdd => gdd.Ta);
        if (!allEqual(ta))
          datasets.push(tavg);
      }
      if (Object.hasOwn(data[0], "Tx")){
        const tx = data.map(gdd => gdd.Tx);
        if (!allEqual(tx))
          datasets.push(tmax);
      }
      if (Object.hasOwn(data[0], "Prec")){
        const pcp = data.map(gdd => gdd.Prec);
        if (!allEqual(pcp)){
          datasets.push(prec);
          chart.options.scales.y1 = {
              // beginAtZero: false,
              title: {
                color: function(){ return dark ? 'lightblue' : 'blue' },
                display: true,
                text: function(){ return `${chart_temperature_labels.chart_temperature_y1label}`}, //'Precipitation (mm day-1)',
                font: {
                  // family: 'Comic Sans MS',
                  size: 11,
                  // weight: 'bold',
                },
              },
              type: 'linear',
              position: 'right',
              // Optional: Prevents grid lines from overlapping
              grid: {
                  color: function(){ return dark ? 'lightblue' : '#333' }, 
                  drawOnChartArea: false, 
              },
              ticks: {
                color: function(){ return dark ? 'lightblue' : 'blue' }, 
                font: {
                  family: 'Arial', size: 10, //weight: 'bold'
                },
              }
          }
        } else {
          chart.options.scales.y1 = {};
        }
      }
      // if (Object.hasOwn(data[0], "Srad"))
      //   datasets.push(srad);
      // if (Object.hasOwn(data[0], "Wind"))
      //   datasets.push(wind);
      // if (Object.hasOwn(data[0], "GDD"))
      //   datasets.push(gdd);
      // if (Object.hasOwn(data[0], "accGDD"))
      //   datasets.push(accGDD);
      
      // datasets.push(tmin, tavg, tmax, prec);
      chart.data.datasets = datasets;
      
      
      // chart.data.datasets[0].data = data.map(gdd => gdd.Tn);
      // chart.data.datasets[1].data = data.map(gdd => gdd.Ta);
      // chart.data.datasets[2].data = data.map(gdd => gdd.Tx);
      // chart.data.datasets[3].data = data.map(gdd => gdd.Prec);
      // chart.data.datasets[4].data = data.map(gdd => gdd.Srad);
      // chart.data.datasets[5].data = data.map(gdd => gdd.Wind);

      // chart.data.datasets[0].label = `${chart_temperature_labels.chart_temperature_legend_label1} (°${units})`;
      // chart.data.datasets[1].label = `${chart_temperature_labels.chart_temperature_legend_label2} (°${units})`;
      // chart.data.datasets[2].label = `${chart_temperature_labels.chart_temperature_legend_label3} (°${units})`;
      // chart.data.datasets[3].label = `${chart_temperature_labels.chart_temperature_legend_label4}`;
      
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

  // Custom plugin to ensure background is white during rendering and export
  const whiteBackgroundPlugin = {
    id: 'whiteBackground',
    beforeDraw: (chart) => {
      const { ctx, width, height } = chart;
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = dark ? '#000000' :'#ffffff';
      ctx.fillRect(0, 0, width, height);
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


  // Scale factor for resolution (e.g., 3 means 3x crispier/larger than on-screen size)
	const EXPORT_DPI_SCALE = 3; 
  function downloadPNG() {
    if (!chart) return;
    
    chart.options.devicePixelRatio = EXPORT_DPI_SCALE;
		chart.resize();
		chart.update('none'); // Update instantly without animation glitches
    // Get base64 data URL from Chart.js
    const imageUrl = chart.toBase64Image('image/png', 1.0); 
    // Generate data URL from the canvas which now includes the white background plugin
    // const dataUrl = canvas.toDataURL('image/png');

    // 3. Reset the chart back to the default monitor DPI resolution
		chart.options.devicePixelRatio = window.devicePixelRatio || 1;
		chart.resize();
		chart.update('none');
    
    // Create temporary link element to trigger download
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `chartWeatherSite_${latitude}_${longitude}_${selectedCropPestLabel}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function exportHighResJpg() {
		if (!chart) return;

		// 1. Temporarily increase devicePixelRatio to trick chart into rendering at high res
		chart.options.devicePixelRatio = EXPORT_DPI_SCALE;
		chart.resize();
		chart.update('none'); // Update instantly without animation glitches

		// 2. Export the high resolution canvas data string as JPEG
		const dataUrl = chart.toBase64Image('image/jpeg', 1.0); 

		// 3. Reset the chart back to the default monitor DPI resolution
		chart.options.devicePixelRatio = window.devicePixelRatio || 1;
		chart.resize();
		chart.update('none');

		// 4. Trigger browser file download
		const downloadLink = document.createElement('a');
		downloadLink.href = dataUrl;
		downloadLink.download = `chartWeatherSite_${latitude}_${longitude}_${selectedCropPestLabel}.jpg`;
    document.body.appendChild(downloadLink);
		downloadLink.click();
    document.body.removeChild(downloadLink);
	}

  onMount(() => {
    chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: [],
        datasets: datasets,
      },
      options: {
        color: function(){ return dark ? 'white' : '#333' }, 
        responsive: true,
        maintainAspectRatio: false,  // Crucial: Allows the height to adapt on mobile without breaking layout
        // showLine: false, // disable for all datasets
        animation: {
          duration: 0 // Disable animations for real-time updates
        },
        locale: chart_temperature_labels.chart_locale, //'es-ES', // Sets the language/region standard
        // Crucial: This plugin forces a solid background color so the final JPG doesn't turn black
				plugins: {
					customCanvasBackgroundColor: {
						color: function(){ return dark ? '#000000' :'#ffffff' },
					}
				},
        scales: {
          x: {
            type: 'time',
            offset: true,
            grid: function(){ return  { color: dark ? '#444' : '#E5E7EB' } },
            time: {
              unit: 'day', // Base unit for ticks (day, week, month, year)
              displayFormats: {
                day: 'Y  MMM-dd', // Formats the label (e.g., "Oct 13")
                // month: 'MMM YYYY'
              }
            },
            title: {
              display: true,
              color: function(){ return dark ? 'white' : '#333' }, 
              text: function(){ return `${chart_temperature_labels.chart_temperature_xlabel}`}, //'Date',
              font: {
                weight: 'bold',
              },
            },
            ticks: {
              color: function(){ return dark ? 'white' : '#666' }, 
              font: {
                family: 'Arial', size: 10, //weight: 'bold'
              },
              maxRotation: 90,             
              minRotation: 90,             
              autoSkip: true,              
              autoSkipPadding: 10,
              callback: function(value, index, ticks) {
                return formatXDateLabels(new Date(value));
                
              }   
            }
          },
          y: {
            grid: function(){ return { color: dark ? '#444' : '#E5E7EB' } },
            title: {
              // color: 'red',
              color: function(){ return dark ? 'white' : '#333' }, 
              display: true,
              text: function(){ return `${chart_temperature_labels.chart_temperature_ylabel} (°${units})`},
              font: {
                // family: 'Comic Sans MS',
                // size: 12,
                weight: 'bold',
              },
            },
            beginAtZero: false,
            ticks: {
              color: function(){ return dark ? 'white' : '#333' }, 
              font: {
                family: 'Arial', size: 10, //weight: 'bold'
              },
            }
          },
          // y1: {
          //     // beginAtZero: false,
          //     title: {
          //       color: function(){ return dark ? 'lightblue' : 'blue' },
          //       display: true,
          //       text: function(){ return `${chart_temperature_labels.chart_temperature_y1label}`}, //'Precipitation (mm day-1)',
          //       font: {
          //         // family: 'Comic Sans MS',
          //         size: 11,
          //         // weight: 'bold',
          //       },
          //     },
          //     type: 'linear',
          //     position: 'right',
          //     // Optional: Prevents grid lines from overlapping
          //     grid: {
          //         color: function(){ return dark ? 'lightblue' : '#333' }, 
          //         drawOnChartArea: false, 
          //     },
          //     ticks: {
          //       color: function(){ return dark ? 'lightblue' : 'blue' }, 
          //       font: {
          //         family: 'Arial', size: 10, //weight: 'bold'
          //       },
          //     }
          // },
        },
        interaction: {
            mode: 'x' //'dataset' //'index' //'nearest' //'point'
        },
        plugins: {
          title: {
              display: true,
              color: function(){ return dark ? 'white' : '#444' }, 
              text: function(){ return `${chart_temperature_labels.chart_temperature_title}`}, //'Daily Temperature', // at site-specific',
              font: {
                // family: 'Comic Sans MS',
                size: 16,
                weight: 'bold',
                lineHeight: 1.2,
                color: function(){ return dark ? '#FFF' : '#333' }, 
              },
          },
          subtitle: {
              display: true,
              text: `Lat: ${latitude}, Lng: ${longitude}`,
              color: function(){ return dark ? '#FFF' : '#333' }, 
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
            color: function(){ return dark ? '#FFF' : '#333' }, 
            labels: {
              lineWidth: 1,
              font: {
                family: 'Arial', size: 11, //weight: 'bold'
                color: function(){ return dark ? '#FFF' : '#333' }, 
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
            borderColor: dark ? '#888' : '#ccc' ,
            borderWidth: 0.7,
            // borderDash: [5, 5],
            borderDashOffset: 2,
          }
        }
      },
      plugins: [chartAreaBorderPlugin, whiteBackgroundPlugin]
    });

    return () => {
      if (chart) chart.destroy();
    };
  });

  function exportToCsv() {
    if (data.length === 0) return;
    // Extract headers from the first object keys
    const headers = Object.keys(data[0]);
    // Map rows to comma-separated strings
    const rows = data.map(obj => 
      headers.map(header => {
        let val = obj[header] === null || obj[header] === undefined ? '' : obj[header];
        // Escape double quotes and wrap strings containing commas or quotes in quotes
        // val = String(val).replace(/"/g, '""');
        val = String(val).replace(/"/g, '');
        return `${val}`;
      }).join(',')
    );
    // Combine headers and rows with newlines
    const csvContent = [headers.join(','), ...rows].join('\n');
    // Create a Blob and trigger download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `weatherSite_data_${latitude}_${longitude}_${selectedCropPestLabel}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  function exportToTxt() {
    if (data.length === 0) return;
    // Extract headers from the first object keys
    const headers = Object.keys(data[0]);
    // Map rows to comma-separated strings
    const rows = data.map(obj => 
      headers.map(header => {
        let val = obj[header] === null || obj[header] === undefined ? '' : obj[header];
        // Escape double quotes and wrap strings containing commas or quotes in quotes
        val = String(val).replace(/"/g, '');
        return `${val}`;
      }).join('\t')
    );
    // Combine headers and rows with newlines
    const csvContent = [headers.join('\t'), ...rows].join('\n');
    // Create a Blob and trigger download
    const blob = new Blob([csvContent], { type: 'text/txt;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `weatherSite_data_${latitude}_${longitude}_${selectedCropPestLabel}.txt`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

function getDayOfYear(date = new Date()) {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const diffInMs = date - startOfYear;
  const msInDay = 86400000;
  
  return Math.floor(diffInMs / msInDay) + 1;
}

function getJulianDay(date) {
  const targetDate = new Date(date);
  targetDate.setHours(0, 0, 0, 0); 
  // const customJulianFormat = `${targetDate.getFullYear().toString().substring(2)}${String(getDayOfYear(targetDate)).padStart(3, '0')}`;
  const customJulianFormat = `${targetDate.getFullYear().toString().slice(-2)}${String(getDayOfYear(targetDate)).padStart(3, '0')}`;
  return customJulianFormat;  
}

function exportToDSSAT() {
  // Export to DSSAT
  // *WEATHER DATA : ACNM
  //
  // @ INSI      LAT     LONG  ELEV   TAV   AMP REFHT WNDHT
  //   ACNM   34.583 -103.200  1348  12.8  11.2 -99.0 -99.0
  // @DATE  SRAD  TMAX  TMIN  RAIN  DEWP  WIND   PAR  EVAP  RHUM
  // 13001  12.2   7.8 -14.4   0.0  

  if (data.length === 0) return;

  const Tn = data.map((gdd:any) => gdd.Tn);
  const Tavg = data.map((gdd:any) => gdd.Ta);
  const Tx = data.map((gdd:any) => gdd.Tx);

  const getAverage = (arr) => arr.length ? arr.reduce((sum, num) => sum + num, 0) / arr.length : 0;

  const Tnavg = getAverage(Tn); //Tn.reduce((sum, num) => sum + num, 0) / Tn.length;
  const TAV = getAverage(Tavg);
  const Txavg = getAverage(Tx); //Tx.reduce((sum, num) => sum + num, 0) / Tx.length;

  // Annual amplitude in mean monthly temperature. (units: oC)
  //  AMP stands for the long-term monthly air temperature amplitude (also referred to as TAMP). It represents the difference or range from the highest monthly mean air temperature to the lowest monthly mean air temperature over a multi-year period
  // const TAV = (Txavg + Tnavg) / 2;
  const AMP = Math.max(...Tavg) - Math.min(...Tavg); //Txavg - Tnavg; //
  // console.log(Math.min(...Tn), Math.max(...Tx), TAV, AMP);

  // console.log(data);
  let dssatData = []; //Clean
  for (let i = 0; i < data.length; i++) {
    const date_el = getJulianDay(data[i].timestamp); //new Date(data.date[i]);
    const Tn_el = data[i].Tn.toFixed(1);
    // const Ta_el = data[i].Ta;
    const Tx_el = data[i].Tx.toFixed(1);
    const Prec_el = data[i].Prec.toFixed(1);
    const Srad_el = data[i].Srad.toFixed(1);
    const Wind_el = (data[i].Wind * 86.4).toFixed(1); //he official standard nomenclature for daily weather input files requires wind speed to be in kilometers per day (km⋅day⁻¹)
    const DEWP = -99
    // const GDD_el = data[i].GDD.toFixed(1);
    // const accGDD_el = data[i].accGDD.toFixed(1);
    dssatData.push({
      "DATE": date_el, "SRAD": Srad_el, "TMAX": Tx_el, "TMIN": Tn_el, "RAIN": Prec_el, "DEWP": DEWP ,"WIND": Wind_el,
    });
  }
  // console.log(dssatData);

  // Extract headers from the first object keys
  const headers = Object.keys(dssatData[0]);
  // Map rows to comma-separated strings
  const rows = dssatData.map(obj => 
    headers.map(header => {
      let val = obj[header] === null || obj[header] === undefined ? '' : obj[header];
      // Escape double quotes and wrap strings containing commas or quotes in quotes
      if (header!=="DATE"){
        val = String(parseFloat(val).toFixed(1)).replace(/"/g, '');
        if (header=="DEWP"){
          val = String(-99).replace(/"/g, '');
        }
        val = `${String(val).padStart(7, " ")}`;
      } else {
        val = String(val).replace(/"/g, '');
      }
      return `${val}`;
      // return `${String(val).padStart(4, " ")}`;
    }).join('')
  );

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3
  });

  // Combine headers and rows with newlines
  const line1 = [`*WEATHER DATA : STAT\n`];
  const line2 = [`@ INSI      LAT     LONG  ELEV   TAV   AMP REFHT WNDHT`];
  const line3 = [`  STAT${String(formatter.format(+latitude)).padStart(9, " ")}${String(formatter.format(+longitude)).padStart(9, " ")}${String(-99).padStart(6, " ")}${String(+TAV.toFixed(1)).padStart(6, " ")}${String(+AMP.toFixed(1)).padStart(6, " ")} -99.0 -99.0`];
  const line4 = [`@DATE   SRAD   TMAX   TMIN   RAIN   DEWP   WIND   PAR   EVAP   RHUM`];
  // const line5 = [`13001  12.2   7.8 -14.4   0.0`];
  const header_lines = [...line1, ...line2, ...line3, ...line4]
  // const csvContent = [...header_lines, headers.join('\t'), ...rows].join('\n');
  const csvContent = [...header_lines, ...rows].join('\n');
  // Create a Blob and trigger download
  const blob = new Blob([csvContent], { type: 'text/txt;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `STATGDD0.WTH`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

  function exportToAPSIM() {

    // - APSIM .met
    //   The met file must also have a year and day column (or date formatted as yyyy/mm/dd), solar radiation (MJ/m2), maximum temperature (oC), minimum temperature (oC) and rainfall. The column headings to use for these are year and day (or date), radn, maxt, mint, rain.
    //   Spacing in the file is not relevant. Comments can be inserted using the ! character.

    //   weather.met.weather
    //   !latitude = -27.6297 (DECIMAL DEGREES)
    //   !longitude = 152.7111 (DECIMAL DEGREES)
    //   tav = 20.5  (annual average ambient temperature in oC)
    //   amp = 14.2  (annual amplitude of mean monthly temperature in oC)
    //   amp = 14.2

    //   year  day  radn  maxt  mint  rain  evap  vp
    //   ()    ()   (MJ/m2) (oC)  (oC)  (mm)  (mm)  (hPa)
    //   2023  1    22.5  30.1  18.2  0.0   5.2   21.3
    //   2023  2    24.1  31.5  19.0  4.2   4.8   22.1
    //   2023  3    18.0  27.4  17.5  12.5  3.1   20.8
    //   2023  4    25.6  32.0  18.8  0.0   6.0   19.5

    if (data.length === 0) return;
    const Tn = data.map((gdd:any) => gdd.Tn);
    const Tavg = data.map((gdd:any) => gdd.Ta);
    const Tx = data.map((gdd:any) => gdd.Tx);

    const getAverage = (arr) => arr.length ? arr.reduce((sum, num) => sum + num, 0) / arr.length : 0;

    const Tnavg = getAverage(Tn); //Tn.reduce((sum, num) => sum + num, 0) / Tn.length;
    const TAV = getAverage(Tavg);
    const Txavg = getAverage(Tx); //Tx.reduce((sum, num) => sum + num, 0) / Tx.length;

    // Annual amplitude in mean monthly temperature. (units: oC)
    //  AMP stands for the long-term monthly air temperature amplitude (also referred to as TAMP). It represents the difference or range from the highest monthly mean air temperature to the lowest monthly mean air temperature over a multi-year period
    // const TAV = (Txavg + Tnavg) / 2;
    const AMP = Math.max(...Tavg) - Math.min(...Tavg); //Txavg - Tnavg; //
    // console.log(Math.min(...Tn), Math.max(...Tx), TAV, AMP);

    // console.log(data);
    let dssatData = []; //Clean
    for (let i = 0; i < data.length; i++) {
      const date_el = new Date(data[i].timestamp);
      const jday = getDayOfYear(date_el); //getJulianDay(data[i].timestamp);
      const Tn_el = data[i].Tn.toFixed(1);
      // const Ta_el = data[i].Ta;
      const Tx_el = data[i].Tx.toFixed(1);
      const Prec_el = data[i].Prec.toFixed(1);
      const Srad_el = data[i].Srad.toFixed(1);
      const Wind_el = (data[i].Wind * 86.4).toFixed(1); //he official standard nomenclature for daily weather input files requires wind speed to be in kilometers per day (km⋅day⁻¹)
      // const evap = -99
      // const vp = -99
      dssatData.push({
        "year": date_el.getFullYear(), "day":jday ,"radn": Srad_el, "maxt": Tx_el, "mint": Tn_el, "rain": Prec_el, //"evap": evap ,"vp": vp,
      });
    }

    // Extract headers from the first object keys
    const headers = Object.keys(dssatData[0]);
    const rows = dssatData.map(obj => 
      headers.map(header => {
        let val = obj[header] === null || obj[header] === undefined ? '' : obj[header];
        // Escape double quotes and wrap strings containing commas or quotes in quotes
        if (header!=="year" && header!=="day"){
          val = String(parseFloat(val).toFixed(1)).replace(/"/g, '');
          if (header=="evap" || header=="vp"){
            val = String(-99).replace(/"/g, '');
          }
          val = `${String(val).padStart(7, " ")}`;
        } else if (header=="day"){
          val = `${String(val).padStart(7, " ")}`;
        } else {
          val = String(val).replace(/"/g, '');
        }
        return `${val}`;
      }).join('')
    );

    const formatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 4,
      maximumFractionDigits: 4
    });

    // Combine headers and rows with newlines
    const line1 = [`[weather.met.weather]\n`];
    const line2 = [`latitude = ${formatter.format(+latitude)} (DECIMAL DEGREES)`];
    const line3 = [`longitude = ${formatter.format(+longitude)} (DECIMAL DEGREES)`];
    const line4 = [`tav = ${+TAV.toFixed(1)} (oC) !annual average ambient temperature in oC`];
    const line5 = [`amp = ${+AMP.toFixed(1)} (oC) !annual amplitude of mean monthly temperature in oC\n`];
    // const line6 = [`year  day  radn  maxt  mint  rain  evap  vp`];
    // const line7 = ['()    ()   (MJ/m2) (oC)  (oC)  (mm)  (mm)  (hPa)'];
    const line6 = [`year    day   radn   maxt   mint   rain`];
    const line7 = ['()      ()   (MJ/m2) (oC)   (oC)   (mm)'];
    const header_lines = [...line1, ...line2, ...line3, ...line4, ...line5, ...line6, ...line7]
    const csvContent = [...header_lines, ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/txt;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `STATGDDweather.met`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  function exportToXLSX() {
    // Create a worksheet from the JSON array
    const worksheet = XLSX.utils.json_to_sheet(data);
    // Create a new workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    // Trigger the file download
    XLSX.writeFile(workbook, `weatherSite_data_${latitude}_${longitude}_${selectedCropPestLabel}.xlsx`);
  }
</script>

<div class="">
  <div class="absolute right-0 top-0 pt-2 text-[0.75rem] text-right justify-end items-center gap-2">
    <!-- <button class="buttonApply" onclick={downloadPNG}>Download PNG</button>
    <button onclick={exportHighResJpg}>
      Export High-Res JPG
    </button> -->
    <!-- <Button variant="outline" size="icon-sm" aria-label="Download PNG" onclick={downloadPNG} title="Download PNG"
    class="rounded-full"
    >
      <FileDown />
    </Button> -->
    <!-- <Button variant="outline" size="icon-sm" aria-label="Export to JPG" onclick={exportHighResJpg} title="Export to JPG"
    class="rounded-full"
    >
      <EllipsisVertical />
    </Button> -->

    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <!-- Open -->
        <EllipsisVertical />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content class="w-55" align="end">
        <DropdownMenu.Group>
        <DropdownMenu.Label>{$t("chart.export_menu_header")}</DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.Item onclick={exportHighResJpg}><ImageDown />{$t("chart.export_figure_toJPG")}</DropdownMenu.Item>
        <DropdownMenu.Item onclick={downloadPNG}><ImageDown />{$t("chart.export_figure_toPNG")}</DropdownMenu.Item>
        <DropdownMenu.Separator/>
        <DropdownMenu.Item onclick={exportToCsv}><FileDown />{$t("chart.export_data_toCSV")}</DropdownMenu.Item>
        <DropdownMenu.Item onclick={exportToTxt}><FileDown />{$t("chart.export_data_toTXT")}</DropdownMenu.Item>
        <DropdownMenu.Item onclick={exportToXLSX}><FileDown />{$t("chart.export_data_toXLSX")}</DropdownMenu.Item>
        <DropdownMenu.Separator/>
        <DropdownMenu.Item onclick={exportToDSSAT}><FolderDown />{$t("chart.export_data_toDSSAT")}</DropdownMenu.Item>
        <DropdownMenu.Item onclick={exportToAPSIM}><FolderDown />{$t("chart.export_data_toAPSIM")}</DropdownMenu.Item>
        <!-- <DropdownMenu.Item disabled><FolderDown />{$t("chart.export_data_toAPSIM")}</DropdownMenu.Item> -->
        </DropdownMenu.Group>
      </DropdownMenu.Content>
      </DropdownMenu.Root>
  </div>
  <div class="w-full h-75 min-h-60">
    <canvas bind:this={canvas}></canvas>
  </div>
</div>

<style>
  /* button {
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		background-color: #4caf50;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	} */
</style>


