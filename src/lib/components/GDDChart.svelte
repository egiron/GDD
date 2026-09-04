<script lang="ts">
  // @ts-nocheck
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';
  import type { GDDRow } from '$lib/types';
  import { t } from '$lib/assets/i18n.js';
  

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

  const { api = {}, data, latitude, longitude, Tbase, Tcutoff, gddTarget, maturityGDDThreshold, 
    daystoMaturityThreshold, units, selectedCropPestLabel, harvestYear, chart_GDD_labels,
    theme_mode,
  } = $props<{ api:{}, data: GDDRow[], 
    latitude:number, longitude:number,
    Tbase:number, Tcutoff:number, gddTarget:number, 
    maturityGDDThreshold:number, daystoMaturityThreshold:number
    units: string, harvestYear:number, 
    selectedCropPestLabel:string, 
    chart_GDD_labels:{},
    theme_mode: string
  }>();
  let canvas: HTMLCanvasElement;
  let chart = $state<Chart | undefined>(undefined);
  let dark = $derived(theme_mode==='dark' ? true : false ); // ?? chart_GDD_labels.chart_dark);
  // let datasets = [];

  function updateThemeMode(theme_mode){
    dark = theme_mode==='dark' ? true : false;
  }
  
  let maturityGDDThreshold_datevalue:any = null; //state(null);
  function updateMaturityGDDThresholdLine(data:any){
    if (data && maturityGDDThreshold!==null && maturityGDDThreshold!==undefined && maturityGDDThreshold!==0){
      const arr = data.map((gdd:any) => gdd.accGDD);
      const closestIndex = arr.reduce((bestIdx:number, currVal:any, currIdx:number, array:any) => Math.abs(currVal - maturityGDDThreshold) < Math.abs(array[bestIdx] - maturityGDDThreshold) ? currIdx : bestIdx, 0);
      const arr2 = data.map((gdd:any) => gdd.timestamp);
      // maturityGDDThreshold_datevalue = (new Date(arr2[closestIndex])).toLocaleDateString();
      maturityGDDThreshold_datevalue = new Date(arr2[closestIndex]);
      // console.log(arr[closestIndex], maturityGDDThreshold_datevalue);
    }
    return maturityGDDThreshold_datevalue
  }

  let daystoMaturityThreshold_datevalue:any = null; //$state(null);
  function updateDaystoMaturityThresholdLine(data:any){
    if (data && daystoMaturityThreshold!==null && daystoMaturityThreshold!==undefined && daystoMaturityThreshold!==0){
      const arr = data.map((gdd:any) => gdd.timestamp);
      const plantingDate = new Date(arr[0]) //.toLocaleDateString();
      const maturityDate = plantingDate.setDate(plantingDate.getDate() + daystoMaturityThreshold) //.toLocaleDateString();
      // console.log(plantingDate, maturityDate);
      // const closestIndex = arr.reduce((bestIdx, currVal, currIdx, array) => Math.abs(currVal - maturityDate) < Math.abs(array[bestIdx] - maturityDate) ? currIdx : bestIdx, 0);
      // const arr2 = data.map(gdd => gdd.timestamp);
      // daystoMaturityThreshold_datevalue = new Date(maturityDate).toLocaleDateString();
      daystoMaturityThreshold_datevalue = new Date(maturityDate);
      // console.log(plantingDate, maturityDate, daystoMaturityThreshold_datevalue);
    }
    return daystoMaturityThreshold_datevalue
  }

  $effect(() => {
    // isDarkMode = () => document.documentElement.classList.contains('dark');
    // dark = isDarkMode();
    if (chart && data) {
      chart.data.labels = data.map((gdd:any) => {
        const date = new Date(gdd.timestamp);
        date.setHours(0, 0, 0, 0); 
        return date; //.toLocaleDateString();
      });

      chart.data.datasets[0].data = data.map((gdd:any) => gdd.accGDD);
      chart.options.plugins.maturityGDDThresholdVerticalLine.value = maturityGDDThreshold!==null ? updateMaturityGDDThresholdLine(data) : null;
      chart.options.plugins.daystoMaturityThresholdLine.value = daystoMaturityThreshold!==null ? updateDaystoMaturityThresholdLine(data) : null;
      chart.options.plugins.maturityGDDThresholdVerticalLine.color = dark ? '#FF8C00': '#FF8C00';
      chart.options.plugins.daystoMaturityThresholdLine.color = dark ? '#FF9' : '#006400';
      
      chart.options.plugins.whiteBackground.value = theme_mode==='dark' ? true : false;
      // chart.options.plugins.title.text = 'Your New Chart Title';
      chart.data.datasets[0].label = `${chart_GDD_labels.chart_gdd_legend_label}`;
      // chart.options.scales.x.grid = { color: theme_mode==='dark' ? '#444' : '#E5E7EB' };
      // chart.options.scales.y.grid = { color: theme_mode==='dark' ? '#444' : '#E5E7EB' };

      chart.update();
    }
  });

  const maturityGDDverticalLinePlugin = {
    id: 'maturityGDDThresholdVerticalLine',
    afterDatasetsDraw(chart:Chart, args:any, options:any) {
      const { ctx, chartArea: { top, bottom }, scales } = chart;
      const xValue = scales.x.getPixelForValue(options.value);
      if (options.value!==null){
        ctx.save();
        ctx.beginPath();
        // ctx.moveTo(xValue, top + 16);
        ctx.moveTo(xValue, top);
        ctx.lineTo(xValue, bottom);
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = options.color || 'orange';
        ctx.setLineDash(options.dash || [5, 5]); // Dashed pattern
        ctx.stroke();
        // write TEXT
        ctx.textAlign = 'top';
        ctx.textBaseline = "middle";
        ctx.font = "10px Arial";
        ctx.fillStyle = options.color || 'orange';
        // ctx.fillText('maturity GDD', xValue, top + 12);
        ctx.translate(xValue+6, top+10); // X and Y position
        ctx.rotate((Math.PI / 2)); // Rotate 90 degrees clockwise
        // ctx.fillText('maturity GDD', 0, 0);
        ctx.fillText(`${chart_GDD_labels.chart_gdd_verticalline_label1} `, 0, 0);
        ctx.restore();
      } 
    }
  };
  const daystoMaturityverticalLinePlugin = {
    id: 'daystoMaturityThresholdLine',
    afterDatasetsDraw(chart:Chart, args:any, options:any) {
      const { ctx, chartArea: { top, bottom }, scales } = chart;
      const xValue = scales.x.getPixelForValue(options.value);
      // const yValue = scales.y.getPixelForValue(options.y);
      if (options.value!==null){
        // const yValue = scales.y.getPixelForValue(options.value);
        ctx.save();
        ctx.beginPath();
        // ctx.moveTo(xValue, top + 16);
        ctx.moveTo(xValue, top);
        ctx.lineTo(xValue, bottom);
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = options.color || 'yellow';
        // ctx.setLineDash(options.dash || [5, 5]); // Dashed pattern
        ctx.stroke();
        // write TEXT
        ctx.font = "10px Arial";
        ctx.fillStyle = options.color || 'yellow';
        ctx.textAlign = 'start';
        ctx.textBaseline = "middle";
        // ctx.fillText('maturity days', xValue, top + 12);
        ctx.translate(xValue-6, bottom - 10); // X and Y position
        ctx.rotate(3 * Math.PI / 2); // Rotate 180 degrees clockwise
        // ctx.fillText('days to maturity', 0, 0);
        ctx.fillText(`${chart_GDD_labels.chart_gdd_verticalline_label2} `, 0, 0);
        
        ctx.restore();
      }
    }
  };

  const chartAreaBorderPlugin = {
    id: 'chartAreaBorder',
    beforeDraw(chart:Chart, args:any, options:any) {
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
    beforeDraw: (chart:Chart, args:any, options:any) => {
      const { ctx, width, height } = chart;
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = options.value ? '#000000' :'#ffffff';
      ctx.fillRect(0, 0, width, height);
      ctx.restore();
    }
  };

  function toTitleCaseRegex(str) {
    return str
      .toLowerCase()
      .replace(/\b\w/g, match => match.toUpperCase());
  }
  function toTitleCase(str) {
    return str
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  function formatXDateLabels(date) {
    const y = date.toLocaleDateString(chart_GDD_labels.chart_locale, { year: 'numeric' });
    const m = date.toLocaleDateString(chart_GDD_labels.chart_locale, { month: 'short' });
    const d = date.toLocaleDateString(chart_GDD_labels.chart_locale, { day: '2-digit' });
    return `${y} ${toTitleCase(m).replace('.','')} ${d}`;
  }

  function beforePrintHandler () {
      for (let id in Chart.instances) {
          Chart.instances[id].resize();
      }
  }
  window.addEventListener('beforeprint', () => {
    if (chart) chart.resize(600, 600);
  });
  window.addEventListener('afterprint', () => {
    if (chart) chart.resize();
  });

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
    link.download = `chartGDD_${latitude}_${longitude}_${selectedCropPestLabel}.png`;
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
		downloadLink.download = `chartGDD_${latitude}_${longitude}_${selectedCropPestLabel}.jpg`;
    document.body.appendChild(downloadLink);
		downloadLink.click();
    document.body.removeChild(downloadLink);
	}

  onMount(() => {
    api.updateThemeMode = updateThemeMode;
    chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: `${chart_GDD_labels.chart_gdd_legend_label}`, //'Accumulative GDD',
          data: [],
          borderColor: '#FF6384',
          borderWidth: 1,
          cubicInterpolationMode: 'monotone',
          tension: 0.4,
          fill: false,
          pointRadius: 1.2
        }]
      },
      options: {
        // color: document.documentElement.classList.contains('dark') ? 'white' : '#333', 
        color: function(){ returndark ? 'white' : '#333'}, 
        // spanGaps: true, // enable for all datasets
        // showLine: false, // disable for all datasets
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: 2, 
        layout: {
            padding: 0,
            // padding: { left: 50 }
        },
        animation: {
          duration: 0 // Disable animations for real-time updates
        },
        locale: function(){ return chart_GDD_labels.chart_locale}, //'es-ES', // Sets the language/region standard
        scales: {
          x: {
            grid: function(){ return{ color: dark ? '#444' : '#E5E7EB' }},
            type: 'time',
            time: {
              unit: 'day', // Base unit for ticks (day, week, month, year)
              displayFormats: {
                day: 'Y  MMM-dd' // Formats the label (e.g., "2025 Oct-03")
              }
            },
            offset: true,
            title: {
              color: function(){ return dark ? 'white' : '#333'}, 
              display: true,
              text: function(){ return `${chart_GDD_labels.chart_gdd_xlabel}`}, //'Date',
              font: {
                // family: 'Comic Sans MS',
                // size: 12,
                weight: 'bold',
                // lineHeight: 1.2,
              },
              // padding: {top: 20, left: 0, right: 0, bottom: 0}
            },
            // border: {
            //   color: 'red'
            // },
            // grid: {
            //   color: 'red',
            //   borderColor: 'grey',
            //   tickColor: 'grey'
            // },
            ticks: {
              color: function(){ return dark ? 'white' : '#666'},
              font: {
                family: 'Arial', size: 10, //weight: 'bold'
              },
              maxRotation: 90,             
              minRotation: 90,             
              autoSkip: true,              
              autoSkipPadding: 20,
              callback: function(value, index, ticks) {
                // const label = this.getLabelForValue(value);
                // return label.split('/'); 
                // return new Date(label).toLocaleDateString('es-CO', {
                //   month: 'short',
                //   day: 'numeric'
                // });
                // return new Intl.DateTimeFormat(chart_GDD_labels.chart_locale, {
                //   // weekday: "short",
                //   year: "numeric",
                //   month: "short",
                //   day: "numeric",
                //   day: '2-digit',
                //   // dateStyle: "short",
                //   // timeStyle: "short",
                //   // timeZone: "UTC",
                //   // timeZoneName: "short",
                // }).format(new Date(value));
                
                // Define configuration for numeric year, short text month, and 2-digit day
                // const formatter = new Intl.DateTimeFormat(chart_GDD_labels.chart_locale, {
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
            grid: function(){ return{ color: dark ? '#444' : '#E5E7EB' }},
            title: {
              color: function(){ return dark ? 'white' : '#333'}, 
              display: true,
              text: function(){ return `${chart_GDD_labels.chart_gdd_ylabel} (°${units})`}, //`Cumulative GDD (°${units})`,
              font: {
                // family: 'Comic Sans MS',
                // size: 12,
                weight: 'bold',
                // lineHeight: 1.2,
              },
            },
            beginAtZero: false,
            // type: 'logarithmic',
            // suggestedMin: 290, //15,
            // suggestedMax: 292,
            border: {
              display: false
            },
            // grid: {
            //   display: true,
            //   drawOnChartArea: true,
            //   drawTicks: true,
            // },
            ticks: {
              color: function(){ return dark ? 'white' : '#333' }, 
              font: {
                family: 'Arial', size: 10, //weight: 'bold'
              },
            }
          },
          // myScale: {
          //   type: 'logarithmic',
          //   position: 'right', // `axis` is determined by the position as `'y'`
          // }
        },
        plugins: {
          title: {
              display: true,
              color: function(){ return dark ? 'white' : '#333'}, 
              // text: `Cumulative Growing Degree Days (Base ${Tbase} / ${Tcutoff})`
              text: function(){ return `${harvestYear} - ${toTitleCase(selectedCropPestLabel)} ${chart_GDD_labels.chart_gdd_title} (Base ${Tbase})`},
              font: {
                // family: 'Comic Sans MS',
                size: 16,
                weight: 'bold',
                // lineHeight: 1.2,
              }
          },
          subtitle: {
              display: true,
              text: `Lat: ${latitude}, Lng: ${longitude}`,
              color: function(){ return dark ? 'white' : '#333' }, 
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
            position: 'top', //'chartArea', //'top','chartArea',
            align: 'center',//'end',
            labels: {
              color: '#FF6384', //'rgb(255, 99, 132)'
            }
          },
          tooltip: {
            enabled: true,
            callbacks: {
              title: function(tooltipItems) {
                // The item being hovered
                const item = tooltipItems[0]
                // Access the default X-axis label
                const defaultLabel = item.label.split(',').slice(0,2); //item.label; 
                // Return any string or array of strings (for multi-line titles)
                // return `📅 Date: ${defaultLabel}`;
                return `${defaultLabel}`;
              },
              label: function(context) {
                // Get the default label name (e.g., dataset name)
                let label = context.dataset.label || '';
                if (label) {
                  label += ': ';
                }
                // Format the number using Intl.NumberFormat
                if (context.parsed.y !== null) {
                  // label += new Intl.NumberFormat('en-US', { 
                  //   style: 'currency', 
                  //   currency: 'USD' 
                  // }).format(context.parsed.y);
                  label += context.parsed.y.toFixed(0) + ' units';
                }
                return label;
              }
            }

          },
          maturityGDDThresholdVerticalLine: {
            value: maturityGDDThreshold_datevalue, //`${maturityGDDThreshold_datevalue}`, //'2/4/2026', // Match your X-axis label or index
            color: dark ? '#FF8C00': '#FF8C00'
          },
          daystoMaturityThresholdLine: {
            value: daystoMaturityThreshold_datevalue, //`${maturityGDDThreshold_datevalue}`, //'2/4/2026', // Match your X-axis label or index
            color: dark ? '#FF9' : '#006400'
          },
          chartAreaBorder: {
            borderColor: dark ? '#888' : '#ccc',
            borderWidth: 0.7,
            // borderDash: [5, 5],
            borderDashOffset: 2,
          },
          whiteBackground:{
            value: dark
          }
        }
      },
      plugins: [maturityGDDverticalLinePlugin, daystoMaturityverticalLinePlugin, chartAreaBorderPlugin, whiteBackgroundPlugin]
    });

    // 
    // if (chart){
    //   chart.canvas.parentNode.style.height = '480px'; 
    //   chart.canvas.parentNode.style.width = '280px'; 
    // }

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

/**
 * Converts a JavaScript Date object into a Julian Date (UTC).
 * @param {Date} date - The JavaScript Date object to convert.
 * @returns {number} The Julian Date as a floating-point number.
 */
function toJulianDate(date) {
  // Get time in milliseconds since January 1, 1970 UTC
  const timeInMs = date.getTime(); 
  // 86,400,000 milliseconds in a standard day
  const msInDay = 86400000; 
  // Julian Date epoch offset for 1970-01-01T00:00:00Z
  const julianEpochOffset = 2440587.5; 
  
  return (timeInMs / msInDay) + julianEpochOffset;
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

  // Julian Day of Year" (YTTT / Ordinal Format)
  // const jdata = data.map((gdd:any) => {
  //   const targetDate = new Date(gdd.timestamp);
  //   targetDate.setHours(0, 0, 0, 0); 
  //   // const time = date.getTime(); // the timestamp, not neccessarely using UTC as current time
  //   // const julian_day = ((time / 86400000) - (date.getTimezoneOffset()/1440) + 2440587.5);
  //   // const julian_date = (Math.floor((time / 86400000) - (date.getTimezoneOffset()/1440) + 2440587.5));

  //   const customJulianFormat = `${targetDate.getFullYear()}${String(getDayOfYear(targetDate)).padStart(3, '0')}`;

  //   return customJulianFormat; //toJulianDate(date); //.toLocaleDateString();
  // });

  // const Tn = data.map((gdd:any) => gdd.Tn);
  const Tavg = data.map((gdd:any) => gdd.Ta);
  // const Tx = data.map((gdd:any) => gdd.Tx);

  const getAverage = (arr) => arr.length ? arr.reduce((sum, num) => sum + num, 0) / arr.length : 0;

  // const Tnavg = getAverage(Tn); //Tn.reduce((sum, num) => sum + num, 0) / Tn.length;
  const TAV = getAverage(Tavg);
  // const Txavg = getAverage(Tx); //Tx.reduce((sum, num) => sum + num, 0) / Tx.length;

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
    // const Tn = data.map((gdd:any) => gdd.Tn);
    const Tavg = data.map((gdd:any) => gdd.Ta);
    // const Tx = data.map((gdd:any) => gdd.Tx);

    const getAverage = (arr) => arr.length ? arr.reduce((sum, num) => sum + num, 0) / arr.length : 0;

    // const Tnavg = getAverage(Tn); //Tn.reduce((sum, num) => sum + num, 0) / Tn.length;
    const TAV = getAverage(Tavg);
    // const Txavg = getAverage(Tx); //Tx.reduce((sum, num) => sum + num, 0) / Tx.length;

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
      // const Wind_el = (data[i].Wind * 86.4).toFixed(1); //he official standard nomenclature for daily weather input files requires wind speed to be in kilometers per day (km⋅day⁻¹)
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
        </DropdownMenu.Group>
      </DropdownMenu.Content>
      </DropdownMenu.Root>
  </div>
  <div class="w-full h-75 min-h-60">
    <canvas id="chartGDD" bind:this={canvas}></canvas>
  </div>
</div>

<style>
  /* canvas {
    border: 1px dotted red;
  } */
</style>