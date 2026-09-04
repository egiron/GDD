<script lang="ts">
	import { onMount } from 'svelte';
	// import Chart from 'chart.js/auto'; // Auto registers all components

    import {
        Chart,
        Colors,
        BarController,
        CategoryScale,
        LinearScale,
        BarElement,
        Legend
    } from 'chart.js'

    Chart.register(
        Colors,
        BarController,
        BarElement,
        CategoryScale,
        LinearScale,
        Legend
    );

    
	let chartData = [12, 19, 3, 5, 2, 3];
	let chartLabels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
    let chartInstance = $state<Chart | undefined>(undefined);
    let canvas: HTMLCanvasElement;

    onMount(() => {
        //  initialize the Chart.js instance on the canvas element
		chartInstance = new Chart(canvas, {
			type: 'bar', // You can change this to 'line', 'pie', etc.
			data: {
				labels: chartLabels,
				datasets: [{
					label: 'Votes',
					data: chartData,
					backgroundColor: 'rgba(75, 192, 192, 0.2)',
					borderColor: 'rgba(75, 192, 192, 1)',
					borderWidth: 1
				}]
			},
			options: {
				responsive: true,
				scales: {
					y: { beginAtZero: true }
				}
			}
		});

		// Cleanup chart instance when the component unmounts
        return () => {
            if (chartInstance) chartInstance.destroy();
        };
	});

	// 3. Reactivity: Update chart data dynamically when state variables mutate
	$effect(() => {
		if (chartInstance) {
			chartInstance.data.labels = chartLabels;
			chartInstance.data.datasets[0].data = chartData;
			chartInstance.update(); // Smoothly animates the changes
		}
	});

	// Example function to test real-time data reactivity
	function randomizeData() {
		chartData = chartData.map(() => Math.floor(Math.random() * 20));
        chartInstance.data.datasets[0].data = chartData;
        chartInstance.update();
	}
</script>

<main>
	<!-- <div class="chart-container"></div> -->
    <canvas bind:this={canvas}></canvas>
	<button onclick={randomizeData}>Randomize Data</button>
</main>

<style>
	/* .chart-container {
		width: 100%;
		max-width: 600px;
		margin: 0 auto;
	} */
	/* button {
		display: block;
		margin: 20px auto;
		padding: 8px 16px;
	} */
	button {
		display: block;
		margin: 20px auto;
		padding: 0.5rem 1rem;
		/* padding: 8px 16px; */
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 0.9rem;
		transition: opacity 0.2s;
		background: #2ecc71;
		color: white;
	}
	button:hover {
		opacity: 0.9;
	}
</style>
