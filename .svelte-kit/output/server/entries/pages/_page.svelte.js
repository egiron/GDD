import { C as getContext, D as clsx$1, E as attr, I as writable, M as on, O as escape_html, P as derived, S as getAllContexts, St as run, T as setContext, _ as store_get, a as unmount, b as unsubscribe_stores, c as attributes, d as element, f as ensure_array_like, g as spread_props, i as tick, l as bind_props, m as props_id, n as mount, o as attr_class, s as attr_style, u as derived$1, ut as ATTACHMENT_KEY, v as store_set, w as hasContext, y as stringify, yt as fallback } from "../../chunks/index-server.js";
import "../../chunks/index-server2.js";
import "../../chunks/legacy-client.js";
import { i as SvelteMap, n as toggleMode, o as createSubscriber, r as derivedMode } from "../../chunks/dist.js";
import { clsx } from "clsx";
import parse from "style-to-object";
import * as zarr from "zarrita";
import "chart.js/auto";
import "chartjs-adapter-date-fns";
import { focusable, isFocusable, isTabbable, tabbable } from "tabbable";
import { CalendarDate, CalendarDateTime, DateFormatter, ZonedDateTime, endOfMonth, getDayOfWeek, getLocalTimeZone, isEqualMonth, isSameDay, isSameMonth, isToday, parseDate, parseDateTime, parseZonedDateTime, startOfMonth, toCalendar, today } from "@internationalized/date";
import { arrow, autoUpdate, computePosition, flip, hide, limitShift, offset, shift, size } from "@floating-ui/dom";
import { twMerge } from "tailwind-merge";
import * as XLSX from "xlsx";
import { tv } from "tailwind-variants";
import "maplibre-gl";
import "just-compare";
import "dequal/lite";
import "pmtiles";
//#region node_modules/svelte-loading-spinners/utils.js
var durationUnitRegex = /[a-zA-Z]/;
var range = (size, startAt = 0) => [...Array(size).keys()].map((i) => i + startAt);
//#endregion
//#region node_modules/svelte-loading-spinners/Wave.svelte
function Wave($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let color = fallback($$props["color"], "#FF3E00");
		let unit = fallback($$props["unit"], "px");
		let duration = fallback($$props["duration"], "1.25s");
		let size = fallback($$props["size"], "60");
		let pause = fallback($$props["pause"], false);
		let durationUnit = duration.match(durationUnitRegex)?.[0] ?? "s";
		let durationNum = duration.replace(durationUnitRegex, "");
		$$renderer.push(`<div class="wrapper svelte-1rumbqe"${attr_style(`--size: ${stringify(size)}${stringify(unit)}; --color: ${stringify(color)}; --duration: ${stringify(duration)};`)}><!--[-->`);
		const each_array = ensure_array_like(range(10, 0));
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let version = each_array[$$index];
			$$renderer.push(`<div${attr_class("bar svelte-1rumbqe", void 0, { "pause-animation": pause })}${attr_style(`left: ${stringify(version * (+size / 5 + (+size / 15 - +size / 100)) + unit)}; animation-delay: ${stringify(version * (+durationNum / 8.3))}${stringify(durationUnit)};`)}></div>`);
		}
		$$renderer.push(`<!--]--></div>`);
		bind_props($$props, {
			color,
			unit,
			duration,
			size,
			pause
		});
	});
}
//#endregion
//#region src/lib/assets/translations.js
var translations_default = {
	en: {
		"homepage.welcome": "Hi <strong>{{name}}</strong>, how are you?",
		"homepage.time": "The current time is: {{time}}",
		"app.title": "Growing degree days - GDD",
		"app.subtitle": "Calculates thermal time/growing degree days",
		"app.message": "Loading...",
		"app.failmsg": "Failed to connect to backend",
		"app.tabs_label_settings": "Settings",
		"app.tabs_label_sites": "Sites",
		"siteitem.label": "Site",
		"siteitem.label_last_update": "Last update",
		"settings.title": "Settings",
		"settings.growing_season": "Growing season",
		"settings.start_date": "Start Date",
		"settings.end_date": "End Date",
		"settings.error_date_range_message": "Growing season too long",
		"settings.crop_threshold_temperature": "Crop's threshold temperature",
		"settings.units": "Units",
		"settings.crop": "Crop",
		"settings.insects_and_diseases": "Insects and Diseases",
		"settings.optional": "Optional",
		"settings.crop_desc": "Select a crop/insect/disease to automatically setup the threshold temperatures",
		"settings.crop_maturity": "Crop Maturity",
		"settings.crop_maturity_gdd": "Maturity GDD",
		"settings.crop_daystomaturity": "Days to Maturity",
		"settings.calculating_msg": "Calculating stie-specific GDD accumulation...",
		"settings.calculating_processing_request_msg": "Processing your request",
		"settings.calculating_loading_norefresh": "Please wait while we process your request. Do not refresh the page.",
		"settings.location_desc": "Use the map to select your location, or enter your GPS coordinates manually",
		"settings.estimating_coord_msg": "Estimating the coordinates at your current location...",
		"settings.geographic_coordinates": "Geographic coordinates",
		"settings.geographic_coordinates_units": "Decimal Degrees",
		"settings.latitude": "Latitude",
		"settings.longitude": "Longitude",
		"settings.cimmyt_nursery_sites": "CIMMYT Nursery Sites",
		"settings.btn_apply": "Apply",
		"settings.btn_reset": "Reset",
		"app.chart.source": "Source: ECMWF - AgERA5",
		"app.copyright": "© CIMMYT GIS Unit, 2026. Credits: Tool developed by Ernesto Giron & Kai Sonder.",
		"tabs.label_coords": "Coordinates",
		"tabs.label_map": "Map",
		"tabs.label_weather_station": "Weather Station",
		"chart.gdd_title": "Cumulative Growing Degree Days",
		"chart.gdd_xlabel": "Date",
		"chart.gdd_ylabel": "Cumulative GDD",
		"chart.gdd_legend_label": "Accumulative GDD",
		"chart.gdd_verticalline_label_1": "maturity GDD",
		"chart.gdd_verticalline_label_2": "days to maturity",
		"chart.temperature_title": "Daily weather profile",
		"chart.temperature_xlabel": "Date",
		"chart.temperature_ylabel": "Temperature",
		"chart.temperature_y1label": "Precipitation (mm/day)",
		"chart.temperature_legend_label_1": "Minimum Temperature",
		"chart.temperature_legend_label_2": "Mean Temperature",
		"chart.temperature_legend_label_3": "Maximum Temperature",
		"chart.temperature_legend_label_4": "Precipitation (mm/day)",
		"chart.export_menu_header": "Export image or raw data",
		"chart.export_figure_toJPG": "Export to JPG",
		"chart.export_figure_toPNG": "Export to PNG",
		"chart.export_data_toCSV": "Export data to CSV",
		"chart.export_data_toTXT": "Export data to TXT",
		"chart.export_data_toXLSX": "Export data to XLS",
		"chart.export_data_toDSSAT": "Export data to DSSAT",
		"chart.export_data_toAPSIM": "Export data to APSIM",
		"settings.crops_selected": "Corn",
		"settings.crops_corn": "Corn",
		"settings.crops_sorghum": "Sorghum",
		"settings.crops_soybeans": "Soybeans",
		"settings.crops_tomato": "Tomato",
		"settings.crops_sunflower": "Sunflower",
		"settings.crops_potato": "Potato",
		"settings.crops_wheat": "Wheat",
		"settings.crops_barley": "Barley",
		"settings.crops_rye": "Rye",
		"settings.crops_oats": "Oats",
		"settings.crops_flaxseed": "Flaxseed",
		"settings.crops_lettuce": "Lettuce",
		"settings.crops_asparagus": "Asparagus",
		"settings.crops_other": "Other",
		"settings.pests_selected": "None",
		"settings.pests_green_cloverworm": "Green Cloverworm",
		"settings.pests_codling_moth": "Codling moth, Apple maggot",
		"settings.pests_alfalfa_weevil": "Alfalfa weevil",
		"settings.pests_corn_rootworm": "Corn rootworm, Oriental fruit moth",
		"settings.pests_stalk_borer": "Stalk Borer",
		"settings.pests_onion_maggot": "Onion maggot",
		"settings.pests_cabbage_maggot": "Cabbage maggot",
		"settings.pests_apple_scab": "Apple scab",
		"settings.pests_other": "Other",
		"weatherstation.label": "Upload your own station daily data",
		"weatherstation.label_select_csv": "Select a CSV File",
		"weatherstation.label_selected_file": "Selected file",
		"weatherstation.label_coldate": "Date (YYYY-MM-DD)",
		"weatherstation.label_coltmin": "Minimum temperature (°C)",
		"weatherstation.label_coltmax": "Maximum temperature (°C)",
		"weatherstation.label_colprec": "Precipitation (mm)",
		"weatherstation.label_apply_columns": "Apply columns",
		"weatherstation.label_processing_request_columns": "Processing request...",
		"site.hoovercard_site": "Site",
		"site.hoovercard_croppest": "Crop / Pest",
		"site.hoovercard_startdate": "Start date",
		"site.hoovercard_enddate": "End date",
		"site.hoovercard_tbase": "TBase",
		"site.hoovercard_tmaxthreshold": "Tmax threshold",
		"site.hoovercard_maturityGDDthreshold": "Maturity GDD threshold",
		"site.hoovercard_daysmaturitythreshold": "Days to Maturity threshold"
	},
	es: {
		"homepage.welcome": "Hola, <strong>{{name}}</strong>, ¿cómo estás?",
		"homepage.time": "La hora actual es: {{time}}",
		"app.title": "Grados-día de Crecimiento - GDC",
		"app.subtitle": "Calcula el tiempo térmico/grados-día de crecimiento",
		"app.message": "Cargando...",
		"app.failmsg": "Failed to connect to backend",
		"app.tabs_label_settings": "Ajustes",
		"app.tabs_label_sites": "Sitios",
		"siteitem.label": "Sitio",
		"siteitem.label_last_update": "Última actualización",
		"settings.title": "Ajustes",
		"settings.growing_season": "Temporada de cultivo",
		"settings.start_date": "Fecha Inicio",
		"settings.end_date": "Fecha Final",
		"settings.error_date_range_message": "Temporada de cultivo demasiado larga",
		"settings.crop_threshold_temperature": "Temperatura umbral del cultivo",
		"settings.units": "Unidades",
		"settings.crop": "Cultivo",
		"settings.insects_and_diseases": "Insectos y Enfermedades",
		"settings.optional": "Opcional",
		"settings.crop_desc": "Seleccione un cultivo, insecto o enfermedad para configurar automáticamente las temperaturas umbral",
		"settings.crop_maturity": "Madurez del cultivo",
		"settings.crop_maturity_gdd": "Madurez GDC",
		"settings.crop_daystomaturity": "Días hasta madurez",
		"settings.calculating_msg": "Cálculo de la acumulación de GDC específico para el sitio...",
		"settings.calculating_processing_request_msg": "Procesando su solicitud",
		"settings.calculating_loading_norefresh": "Por favor, espere mientras procesamos su solicitud. No actualice la página.",
		"settings.location_desc": "Utilice el mapa para seleccionar su ubicación o introduzca sus coordenadas GPS manualmente.",
		"settings.estimating_coord_msg": "Estimación de las coordenadas de su ubicación actual...",
		"settings.geographic_coordinates": "Coordenadas Geográficas",
		"settings.geographic_coordinates_units": "Grados decimales",
		"settings.latitude": "Latitud",
		"settings.longitude": "Longitud",
		"settings.cimmyt_nursery_sites": "Sitios de ensayos del CIMMYT",
		"settings.btn_apply": "Aplicar",
		"settings.btn_reset": "Reiniciar",
		"app.chart.source": "Fuente: ECMWF - AgERA5",
		"app.copyright": "© CIMMYT GIS Unit, 2026. Créditos: Herramienta desarrollada por Ernesto Giron & Kai Sonder.",
		"tabs.label_coords": "Coordenadas",
		"tabs.label_map": "Mapa",
		"tabs.label_weather_station": "Estación meteorológica",
		"chart.gdd_title": "Grados-día de crecimiento acumulados",
		"chart.gdd_xlabel": "Fecha",
		"chart.gdd_ylabel": "GDC acumulados",
		"chart.gdd_legend_label": "GDC acumulados",
		"chart.gdd_verticalline_label_1": "Madurez GDC",
		"chart.gdd_verticalline_label_2": "Días de madurez",
		"chart.temperature_title": "Perfil meteorológico diario",
		"chart.temperature_xlabel": "Fecha",
		"chart.temperature_ylabel": "Temperatura",
		"chart.temperature_y1label": "Precipitación (mm/día)",
		"chart.temperature_legend_label_1": "Temperatura Mínima",
		"chart.temperature_legend_label_2": "Temperatura Media",
		"chart.temperature_legend_label_3": "Temperatura Máximuma",
		"chart.temperature_legend_label_4": "Precipitación (mm/día)",
		"chart.export_menu_header": "Exportar imagen o datos",
		"chart.export_figure_toJPG": "Exportar a JPG",
		"chart.export_figure_toPNG": "Exportar a PNG",
		"chart.export_data_toCSV": "Exportar datos a CSV",
		"chart.export_data_toTXT": "Exportar datos a TXT",
		"chart.export_data_toXLSX": "Exportar datos a XLS",
		"chart.export_data_toDSSAT": "Exportar datos a DSSAT",
		"chart.export_data_toAPSIM": "Exportar datos a APSIM",
		"settings.crops_selected": "Maíz",
		"settings.crops_corn": "Maíz",
		"settings.crops_sorghum": "Sorgo",
		"settings.crops_soybeans": "Soja",
		"settings.crops_tomato": "Tomate",
		"settings.crops_sunflower": "Girasol",
		"settings.crops_potato": "Papa",
		"settings.crops_wheat": "Trigo",
		"settings.crops_barley": "Cebada",
		"settings.crops_rye": "Centeno",
		"settings.crops_oats": "Avena",
		"settings.crops_flaxseed": "Semilla de lino",
		"settings.crops_lettuce": "Lechuga",
		"settings.crops_asparagus": "Espárragos",
		"settings.crops_other": "Otro",
		"settings.pests_selected": "",
		"settings.pests_green_cloverworm": "Gusano verde del trébol",
		"settings.pests_codling_moth": "Polilla de la manzana, mosca de la manzana",
		"settings.pests_alfalfa_weevil": "Gorgojo de la alfalfa",
		"settings.pests_corn_rootworm": "Gusano de la raíz del maíz, polilla oriental de la fruta",
		"settings.pests_stalk_borer": "Barrenador del tallo",
		"settings.pests_onion_maggot": "Mosca de la cebolla",
		"settings.pests_cabbage_maggot": "Mosca de la raíz de la col",
		"settings.pests_apple_scab": "Moteado del manzano",
		"settings.pests_other": "Otro",
		"weatherstation.label": "Sube los datos diarios de tu propia estación",
		"weatherstation.label_select_csv": "Seleccionar un archivo CSV",
		"weatherstation.label_selected_file": "Archivo seleccionado",
		"weatherstation.label_coldate": "Fecha (AAAA-MM-DD)",
		"weatherstation.label_coltmin": "Temperatura Mínima (°C)",
		"weatherstation.label_coltmax": "Temperatura Máxima (°C)",
		"weatherstation.label_colprec": "Precipitación (mm)",
		"weatherstation.label_apply_columns": "Aplicar columnas",
		"weatherstation.label_processing_request_columns": "Procesando solicitud...",
		"site.hoovercard_site": "Sitio",
		"site.hoovercard_croppest": "Cultivo/Insects/Diseases",
		"site.hoovercard_startdate": "Fecha Inicio",
		"site.hoovercard_enddate": "Fecha Final",
		"site.hoovercard_tbase": "TBase",
		"site.hoovercard_tmaxthreshold": "Tmax umbral",
		"site.hoovercard_maturityGDDthreshold": "Umbral madurez GDC",
		"site.hoovercard_daysmaturitythreshold": "Umbral días a madurez"
	},
	fr: {
		"homepage.welcome": "Hola, <strong>{{name}}</strong>, ¿cómo estás?",
		"homepage.time": "La hora actual es: {{time}}",
		"app.title": "Degré-jours de croissance - DJC",
		"app.subtitle": "Calcule la somme des températures/degrés-jours de croissance",
		"app.message": "Chargement...",
		"app.failmsg": "Failed to connect to backend",
		"app.tabs_label_settings": "Paramètres",
		"app.tabs_label_sites": "Sites",
		"siteitem.label": "Site",
		"siteitem.label_last_update": "Dernière mise à jour",
		"settings.title": "Paramètres",
		"settings.growing_season": "Saison de croissance",
		"settings.start_date": "Date de début",
		"settings.end_date": "Date de fin",
		"settings.error_date_range_message": "Saison de croissance trop longue",
		"settings.crop_threshold_temperature": "Température seuil de la culture",
		"settings.units": "Unités",
		"settings.crop": "Cultures",
		"settings.insects_and_diseases": "Insectes et maladies",
		"settings.optional": "Facultative",
		"settings.crop_desc": "Sélectionnez une culture, un insecte ou une maladie pour configurer automatiquement les températures seuils",
		"settings.crop_maturity": "Maturité de la culture",
		"settings.crop_maturity_gdd": "Maturité DJC",
		"settings.crop_daystomaturity": "Jours jusqu'à maturité",
		"settings.calculating_msg": "Calcul de l'accumulation de DJC spécifique au site...",
		"settings.calculating_processing_request_msg": "Traitement de votre demande",
		"settings.calculating_loading_norefresh": "Veuillez patienter pendant que nous traitons votre demande. Ne rafraîchissez pas la page.",
		"settings.location_desc": "Utilisez la carte pour sélectionner votre emplacement ou saisissez vos coordonnées GPS manuellement",
		"settings.estimating_coord_msg": "Estimation des coordonnées de votre position actuelle...",
		"settings.geographic_coordinates": "Coordonnées géographiques",
		"settings.geographic_coordinates_units": "Degrés décimaux",
		"settings.latitude": "Latitude",
		"settings.longitude": "Longitude",
		"settings.cimmyt_nursery_sites": "Sites d'essais du CIMMYT",
		"settings.btn_apply": "Appliquer",
		"settings.btn_reset": "Réinitialiser",
		"app.chart.source": "Source: ECMWF - AgERA5",
		"app.copyright": "© CIMMYT GIS Unit, 2026. Crédits : Outil développé par Ernesto Giron & Kai Sonder.",
		"tabs.label_coords": "Coordonnées",
		"tabs.label_map": "Carte",
		"tabs.label_weather_station": "Station météorologique",
		"chart.gdd_title": "Degrés-jours de croissance cumulés",
		"chart.gdd_xlabel": "Date",
		"chart.gdd_ylabel": "DJC cumulatif",
		"chart.gdd_legend_label": "DJC cumulatif",
		"chart.gdd_verticalline_label_1": "maturité DJC",
		"chart.gdd_verticalline_label_2": "jours jusqu'à maturité",
		"chart.temperature_title": "Profil météorologique quotidien",
		"chart.temperature_xlabel": "Date",
		"chart.temperature_ylabel": "Température",
		"chart.temperature_y1label": "Précipitation (mm/jour)",
		"chart.temperature_legend_label_1": "Température minimale",
		"chart.temperature_legend_label_2": "Température moyenne",
		"chart.temperature_legend_label_3": "Température maximale",
		"chart.temperature_legend_label_4": "Précipitation (mm/jour)",
		"chart.export_menu_header": "Exporter l'image ou les données",
		"chart.export_figure_toJPG": "Exporter au JPG",
		"chart.export_figure_toPNG": "Exporter au PNG",
		"chart.export_data_toCSV": "Exporter données au CSV",
		"chart.export_data_toTXT": "Exporter données au TXT",
		"chart.export_data_toXLSX": "Exporter données au XLS",
		"chart.export_data_toDSSAT": "Exporter données au DSSAT",
		"chart.export_data_toAPSIM": "Exporter données au APSIM",
		"settings.crops_selected": "Maïs",
		"settings.crops_corn": "Maïs",
		"settings.crops_sorghum": "Sorgho",
		"settings.crops_soybeans": "Soja",
		"settings.crops_tomato": "Tomate",
		"settings.crops_sunflower": "Tournesol",
		"settings.crops_potato": "Pomme de terre",
		"settings.crops_wheat": "Blé",
		"settings.crops_barley": "Orge",
		"settings.crops_rye": "Seigle",
		"settings.crops_oats": "Avoine",
		"settings.crops_flaxseed": "Graine de lin",
		"settings.crops_lettuce": "Laitue",
		"settings.crops_asparagus": "Asperge",
		"settings.crops_other": "Autre",
		"settings.pests_selected": "",
		"settings.pests_green_cloverworm": "Chenille verte du trèfle",
		"settings.pests_codling_moth": "Carpocapse des pommes, Mouche de la pomme",
		"settings.pests_alfalfa_weevil": "Charançon de la luzerne",
		"settings.pests_corn_rootworm": "Chrysomèle des racines du maïs, tordeuse orientale du pêcher",
		"settings.pests_stalk_borer": "Perceur de la tige",
		"settings.pests_onion_maggot": "Mouche de l'oignon",
		"settings.pests_cabbage_maggot": "Mouche du chou",
		"settings.pests_apple_scab": "Tavelure du pommier",
		"settings.pests_other": "Autre",
		"weatherstation.label": "Téléversez les données quotidiennes de votre propre station",
		"weatherstation.label_select_csv": "Sélectionnez un fichier CSV",
		"weatherstation.label_selected_file": "Fichier sélectionné",
		"weatherstation.label_coldate": "Date (AAAA-MM-JJ)",
		"weatherstation.label_coltmin": "Température minimale (°C)",
		"weatherstation.label_coltmax": "Température maximale (°C)",
		"weatherstation.label_colprec": "Précipitation (mm)",
		"weatherstation.label_apply_columns": "Appliquer les colonnes",
		"weatherstation.label_processing_request_columns": "Traitement de la demande...",
		"site.hoovercard_site": "Site",
		"site.hoovercard_croppest": "Culture / Ravageur",
		"site.hoovercard_startdate": "Date de début",
		"site.hoovercard_enddate": "Date de fin",
		"site.hoovercard_tbase": "TBase",
		"site.hoovercard_tmaxthreshold": "Seuil de Tmax",
		"site.hoovercard_maturityGDDthreshold": "Seuil DJC pour la maturité",
		"site.hoovercard_daysmaturitythreshold": "Seuil de jours jusqu'à maturité"
	},
	pt: {
		"homepage.welcome": "Hi <strong>{{name}}</strong>, how are you?",
		"homepage.time": "A hora atual é: {{time}}",
		"app.title": "Graus-dia de desenvolvimento – GDD",
		"app.subtitle": "Calcula o tempo térmico/graus-dia de desenvolvimento",
		"app.message": "Carregando...",
		"app.failmsg": "Falha ao conectar ao backend",
		"app.tabs_label_settings": "Configurações",
		"app.tabs_label_sites": "Locais",
		"siteitem.label": "Site",
		"siteitem.label_last_update": "Última atualização",
		"settings.title": "Configurações",
		"settings.growing_season": "Estação de crescimento",
		"settings.start_date": "Data de início",
		"settings.end_date": "Data de término",
		"settings.error_date_range_message": "Período de crescimento excessivamente longo",
		"settings.crop_threshold_temperature": "Temperatura limiar da cultura",
		"settings.units": "Unidades",
		"settings.crop": "Cultivo",
		"settings.insects_and_diseases": "Insetos e doenças",
		"settings.optional": "Opcional",
		"settings.crop_desc": "Selecione uma cultura, inseto ou doença para definir automaticamente as temperaturas de limiar",
		"settings.crop_maturity": "Maturidade da cultura",
		"settings.crop_maturity_gdd": "Maturidade GDD",
		"settings.crop_daystomaturity": "Dias para maturação",
		"settings.calculating_msg": "Cálculo do acúmulo de GDD específico para o local...",
		"settings.calculating_processing_request_msg": "Processando sua solicitação",
		"settings.calculating_loading_norefresh": "Por favor, aguarde enquanto processamos sua solicitação. Não atualize a página.",
		"settings.location_desc": "Use o mapa para selecionar sua localização ou insira suas coordenadas de GPS manualmente",
		"settings.estimating_coord_msg": "Estimando as coordenadas da sua localização atual...",
		"settings.geographic_coordinates": "Coordenadas geográficas",
		"settings.geographic_coordinates_units": "Graus decimais",
		"settings.latitude": "Latitude",
		"settings.longitude": "Longitude",
		"settings.cimmyt_nursery_sites": "Locais de ensaio do CIMMYT",
		"settings.btn_apply": "Aplicar",
		"settings.btn_reset": "Reiniciar",
		"app.chart.source": "Fonte: ECMWF - AgERA5",
		"app.copyright": "© CIMMYT GIS Unit, 2026. Créditos: Ferramenta desenvolvida por Ernesto Giron e Kai Sonder.",
		"tabs.label_coords": "Coordenadas",
		"tabs.label_map": "Mapa",
		"tabs.label_weather_station": "Estação meteorológica",
		"chart.gdd_title": "Graus-dia de crescimento acumulados",
		"chart.gdd_xlabel": "Data",
		"chart.gdd_ylabel": "GDD acumulados",
		"chart.gdd_legend_label": "GDD acumulados",
		"chart.gdd_verticalline_label_1": "GDD de maturidade",
		"chart.gdd_verticalline_label_2": "dias até a maturidade",
		"chart.temperature_title": "Perfil meteorológico diário",
		"chart.temperature_xlabel": "Data",
		"chart.temperature_ylabel": "Temperatura",
		"chart.temperature_y1label": "Precipitação (mm/dia)",
		"chart.temperature_legend_label_1": "Temperatura mínima",
		"chart.temperature_legend_label_2": "Temperatura média",
		"chart.temperature_legend_label_3": "Temperatura máxima",
		"chart.temperature_legend_label_4": "Precipitação (mm/dia)",
		"chart.export_menu_header": "Exportar imagem ou dados brutos",
		"chart.export_figure_toJPG": "Exportar para JPG",
		"chart.export_figure_toPNG": "Exportar para PNG",
		"chart.export_data_toCSV": "Exportar dados CSV",
		"chart.export_data_toTXT": "Exportar dados TXT",
		"chart.export_data_toXLSX": "Exportar dados XLS",
		"chart.export_data_toDSSAT": "Exportar dados DSSAT",
		"chart.export_data_toAPSIM": "Exportar dados APSIM",
		"settings.crops_selected": "Milho",
		"settings.crops_corn": "Milho",
		"settings.crops_sorghum": "Sorgo",
		"settings.crops_soybeans": "Soja",
		"settings.crops_tomato": "Tomate",
		"settings.crops_sunflower": "Girassol",
		"settings.crops_potato": "Batata",
		"settings.crops_wheat": "Trigo",
		"settings.crops_barley": "Cevada",
		"settings.crops_rye": "Centeio",
		"settings.crops_oats": "Aveia",
		"settings.crops_flaxseed": "Semente de linhaça",
		"settings.crops_lettuce": "Alface",
		"settings.crops_asparagus": "Espargos",
		"settings.crops_other": "Outro",
		"settings.pests_selected": "",
		"settings.pests_green_cloverworm": "Lagarta-verde-do-trevo",
		"settings.pests_codling_moth": "Traça-da-maçã, Mosca-da-maçã",
		"settings.pests_alfalfa_weevil": "Gorgulho-da-alfafa",
		"settings.pests_corn_rootworm": "Larva-alfinete-do-milho, traça-oriental-da-fruta",
		"settings.pests_stalk_borer": "Broca-do-colmo",
		"settings.pests_onion_maggot": "Mosca-da-cebola",
		"settings.pests_cabbage_maggot": "larva da couve",
		"settings.pests_apple_scab": "Sarna da macieira",
		"settings.pests_other": "Outro",
		"weatherstation.label": "Envie os dados diários da sua própria estação",
		"weatherstation.label_select_csv": "Selecione um arquivo CSV",
		"weatherstation.label_selected_file": "Arquivo selecionado",
		"weatherstation.label_coldate": "Data (AAAA-MM-DD)",
		"weatherstation.label_coltmin": "Temperatura mínima (°C)",
		"weatherstation.label_coltmax": "Temperatura máxima (°C)",
		"weatherstation.label_colprec": "Precipitação (mm)",
		"weatherstation.label_apply_columns": "Aplicar colunas",
		"weatherstation.label_processing_request_columns": "Processando solicitação...",
		"site.hoovercard_site": "Site",
		"site.hoovercard_croppest": "Cultura / Praga",
		"site.hoovercard_startdate": "Data de início",
		"site.hoovercard_enddate": "Data de término",
		"site.hoovercard_tbase": "TBase",
		"site.hoovercard_tmaxthreshold": "Limite de Tmax",
		"site.hoovercard_maturityGDDthreshold": "Limiar GDD maturidade",
		"site.hoovercard_daysmaturitythreshold": "Limite dias maturidade"
	},
	it: {
		"homepage.welcome": "Ciao <strong>{{name}}</strong>, come stai?",
		"homepage.time": "L'ora attuale è: {{time}}",
		"app.title": "Gradi-giorno di crescita - GDD",
		"app.subtitle": "Calcola il tempo termico/i gradi-giorno di crescita",
		"app.message": "Caricamento in corso...",
		"app.failmsg": "Impossibile connettersi al backend",
		"app.tabs_label_settings": "Impostazioni",
		"app.tabs_label_sites": "Siti",
		"siteitem.label": "Sito",
		"siteitem.label_last_update": "Ultimo aggiornamento",
		"settings.title": "Impostazioni",
		"settings.growing_season": "Stagione di crescita",
		"settings.start_date": "Data di inizio",
		"settings.end_date": "Data di fine",
		"settings.error_date_range_message": "Stagione di crescita troppo lunga",
		"settings.crop_threshold_temperature": "Temperatura soglia della coltura",
		"settings.units": "Unità di misura",
		"settings.crop": "Coltura",
		"settings.insects_and_diseases": "Insetti e malattie",
		"settings.optional": "Opzionale",
		"settings.crop_desc": "Seleziona una coltura, un insetto o una malattia per impostare automaticamente le temperature soglia",
		"settings.crop_maturity": "Maturazione della coltura",
		"settings.crop_maturity_gdd": "GDD di maturazione",
		"settings.crop_daystomaturity": "Giorni alla maturazione",
		"settings.calculating_msg": "Calcolo dell'accumulo GDD specifico per il sito...",
		"settings.calculating_processing_request_msg": "Elaborazione della richiesta in corso",
		"settings.calculating_loading_norefresh": "Attendere l'elaborazione della richiesta. Non aggiornare la pagina.",
		"settings.location_desc": "Usa la mappa per selezionare la tua posizione o inserisci manualmente le coordinate GPS",
		"settings.estimating_coord_msg": "Calcolo delle coordinate per la posizione attuale...",
		"settings.geographic_coordinates": "Coordinate geografiche",
		"settings.geographic_coordinates_units": "Gradi decimali",
		"settings.latitude": "Latitudine",
		"settings.longitude": "Longitudine",
		"settings.cimmyt_nursery_sites": "Siti sperimentali CIMMYT",
		"settings.btn_apply": "Applica",
		"settings.btn_reset": "Ripristina",
		"app.chart.source": "Fonte: ECMWF - AgERA5",
		"app.copyright": "© CIMMYT GIS Unit, 2026. Crediti: Strumento sviluppato da Ernesto Giron e Kai Sonder.",
		"tabs.label_coords": "Coordinate",
		"tabs.label_map": "Mappa",
		"tabs.label_weather_station": "Stazione meteorologica",
		"chart.gdd_title": "Gradi-giorno di crescita (GDD) cumulativi",
		"chart.gdd_xlabel": "Data",
		"chart.gdd_ylabel": "GDD cumulativi",
		"chart.gdd_legend_label": "GDD accumulati",
		"chart.gdd_verticalline_label_1": "GDD a maturazione",
		"chart.gdd_verticalline_label_2": "giorni alla maturazione",
		"chart.temperature_title": "Profilo meteorologico giornaliero",
		"chart.temperature_xlabel": "Data",
		"chart.temperature_ylabel": "Temperatura",
		"chart.temperature_y1label": "Precipitazioni (mm/giorno)",
		"chart.temperature_legend_label_1": "Temperatura minima",
		"chart.temperature_legend_label_2": "Temperatura media",
		"chart.temperature_legend_label_3": "Temperatura massima",
		"chart.temperature_legend_label_4": "Precipitazioni (mm/giorno)",
		"chart.export_menu_header": "Esporta immagine o dati grezzi",
		"chart.export_figure_toJPG": "Esporta in JPG",
		"chart.export_figure_toPNG": "Esporta in PNG",
		"chart.export_data_toCSV": "Esporta dati in CSV",
		"chart.export_data_toTXT": "Esporta dati in TXT",
		"chart.export_data_toXLSX": "Esporta dati in XLS",
		"chart.export_data_toDSSAT": "Esporta dati in DSSAT",
		"chart.export_data_toAPSIM": "Esporta dati in APSIM",
		"settings.crops_selected": "Mais",
		"settings.crops_corn": "Mais",
		"settings.crops_sorghum": "Sorgo",
		"settings.crops_soybeans": "Soia",
		"settings.crops_tomato": "Pomodoro",
		"settings.crops_sunflower": "Girasole",
		"settings.crops_potato": "Patata",
		"settings.crops_wheat": "Frumento",
		"settings.crops_barley": "Orzo",
		"settings.crops_rye": "Segale",
		"settings.crops_oats": "Avena",
		"settings.crops_flaxseed": "Lino",
		"settings.crops_lettuce": "Lattuga",
		"settings.crops_asparagus": "Asparago",
		"settings.crops_other": "Altro",
		"settings.pests_selected": "Nessuno",
		"settings.pests_green_cloverworm": "Nottua verde del trifoglio",
		"settings.pests_codling_moth": "Carpocapsa, Mosca delle mele",
		"settings.pests_alfalfa_weevil": "Punteruolo dell'erba medica",
		"settings.pests_corn_rootworm": "Diabrotica del mais, Tignola orientale del pesco",
		"settings.pests_stalk_borer": "Piralide del fusto",
		"settings.pests_onion_maggot": "Mosca della cipolla",
		"settings.pests_cabbage_maggot": "Mosca del cavolo",
		"settings.pests_apple_scab": "Ticchiolatura del melo",
		"settings.pests_other": "Altro",
		"weatherstation.label": "Carica i dati giornalieri della tua stazione",
		"weatherstation.label_select_csv": "Seleziona un file CSV",
		"weatherstation.label_selected_file": "File selezionato",
		"weatherstation.label_coldate": "Data (AAAA-MM-GG)",
		"weatherstation.label_coltmin": "Temperatura minima (°C)",
		"weatherstation.label_coltmax": "Temperatura massima (°C)",
		"weatherstation.label_colprec": "Precipitazione (mm)",
		"weatherstation.label_apply_columns": "Applica colonne",
		"weatherstation.label_processing_request_columns": "Elaborazione della richiesta...",
		"site.hoovercard_site": "Sito",
		"site.hoovercard_croppest": "Coltura / Parassita",
		"site.hoovercard_startdate": "Data di inizio",
		"site.hoovercard_enddate": "Data di fine",
		"site.hoovercard_tbase": "TBase",
		"site.hoovercard_tmaxthreshold": "Soglia di Tmax",
		"site.hoovercard_maturityGDDthreshold": "Soglia GDD maturazione",
		"site.hoovercard_daysmaturitythreshold": "Soglia giorni maturazione"
	},
	de: {
		"homepage.welcome": "Hallo <strong>{{name}}</strong>, wie geht es dir?",
		"homepage.time": "Aktuelle Uhrzeit: {{time}}",
		"app.title": "Wärmesumme (GDD)",
		"app.subtitle": "Berechnet die Wärmesumme / Growing Degree Days (GDD)",
		"app.message": "Wird geladen...",
		"app.failmsg": "Verbindung zum Backend fehlgeschlagen",
		"app.tabs_label_settings": "Einstellungen",
		"app.tabs_label_sites": "Standorte",
		"siteitem.label": "Standort",
		"siteitem.label_last_update": "Letzte Aktualisierung",
		"settings.title": "Einstellungen",
		"settings.growing_season": "Vegetationsperiode",
		"settings.start_date": "Startdatum",
		"settings.end_date": "Enddatum",
		"settings.error_date_range_message": "Vegetationsperiode zu lang",
		"settings.crop_threshold_temperature": "Schwellentemperatur der Kultur",
		"settings.units": "Einheiten",
		"settings.crop": "Kultur",
		"settings.insects_and_diseases": "Insekten und Krankheiten",
		"settings.optional": "Optional",
		"settings.crop_desc": "Wählen Sie eine Kultur, ein Insekt oder eine Krankheit aus, um die Schwellentemperaturen automatisch festzulegen",
		"settings.crop_maturity": "Reife der Kultur",
		"settings.crop_maturity_gdd": "GDD bis zur Reife",
		"settings.crop_daystomaturity": "Tage bis zur Reife",
		"settings.calculating_msg": "Berechnung der standortspezifischen GDD-Summe...",
		"settings.calculating_processing_request_msg": "Anfrage wird bearbeitet",
		"settings.calculating_loading_norefresh": "Bitte warten Sie, während wir Ihre Anfrage bearbeiten. Aktualisieren Sie die Seite nicht.",
		"settings.location_desc": "Wählen Sie Ihren Standort auf der Karte aus oder geben Sie Ihre GPS-Koordinaten manuell ein",
		"settings.estimating_coord_msg": "Koordinaten für Ihren aktuellen Standort werden ermittelt...",
		"settings.geographic_coordinates": "Geografische Koordinaten",
		"settings.geographic_coordinates_units": "Dezimalgrad",
		"settings.latitude": "Breitengrad",
		"settings.longitude": "Längengrad",
		"settings.cimmyt_nursery_sites": "CIMMYT-Versuchsstandorte",
		"settings.btn_apply": "Anwenden",
		"settings.btn_reset": "Zurücksetzen",
		"app.chart.source": "Quelle: ECMWF - AgERA5",
		"app.copyright": "© CIMMYT GIS Unit, 2026. Credits: Tool entwickelt von Ernesto Giron & Kai Sonder.",
		"tabs.label_coords": "Koordinaten",
		"tabs.label_map": "Karte",
		"tabs.label_weather_station": "Wetterstation",
		"chart.gdd_title": "Kumulierte Wärmesumme (GDD)",
		"chart.gdd_xlabel": "Datum",
		"chart.gdd_ylabel": "Kumulierte GDD",
		"chart.gdd_legend_label": "Kumulierte GDD",
		"chart.gdd_verticalline_label_1": "GDD bis zur Reife",
		"chart.gdd_verticalline_label_2": "Tage bis zur Reife",
		"chart.temperature_title": "Tägliches Wetterprofil",
		"chart.temperature_xlabel": "Datum",
		"chart.temperature_ylabel": "Temperatur",
		"chart.temperature_y1label": "Niederschlag (mm/Tag)",
		"chart.temperature_legend_label_1": "Minimale Temperatur",
		"chart.temperature_legend_label_2": "Durchschnittstemperatur",
		"chart.temperature_legend_label_3": "Maximale Temperatur",
		"chart.temperature_legend_label_4": "Niederschlag (mm/Tag)",
		"chart.export_menu_header": "Bild oder Rohdaten exportieren",
		"chart.export_figure_toJPG": "Als JPG exportieren",
		"chart.export_figure_toPNG": "Als PNG exportieren",
		"chart.export_data_toCSV": "Daten als CSV exportieren",
		"chart.export_data_toTXT": "Daten als TXT exportieren",
		"chart.export_data_toXLSX": "Daten als XLS exportieren",
		"chart.export_data_toDSSAT": "Daten als DSSAT exportieren",
		"chart.export_data_toAPSIM": "Daten als APSIM exportieren",
		"settings.crops_selected": "Mais",
		"settings.crops_corn": "Mais",
		"settings.crops_sorghum": "Sorghumhirse",
		"settings.crops_soybeans": "Sojabohnen",
		"settings.crops_tomato": "Tomate",
		"settings.crops_sunflower": "Sonnenblume",
		"settings.crops_potato": "Kartoffel",
		"settings.crops_wheat": "Weizen",
		"settings.crops_barley": "Gerste",
		"settings.crops_rye": "Roggen",
		"settings.crops_oats": "Hafer",
		"settings.crops_flaxseed": "Leinsamen",
		"settings.crops_lettuce": "Salat",
		"settings.crops_asparagus": "Spargel",
		"settings.crops_other": "Sonstige",
		"settings.pests_selected": "Keine",
		"settings.pests_green_cloverworm": "Grüne Klee-Eule",
		"settings.pests_codling_moth": "Apfelwickler, Apfelfruchtfliege",
		"settings.pests_alfalfa_weevil": "Luzernerüssler",
		"settings.pests_corn_rootworm": "Maiswurzelbohrer, Orientalischer Fruchtwickler",
		"settings.pests_stalk_borer": "Stängelbohrer",
		"settings.pests_onion_maggot": "Zwiebelfliege",
		"settings.pests_cabbage_maggot": "Kohlfliege",
		"settings.pests_apple_scab": "Apfelschorf",
		"settings.pests_other": "Sonstige",
		"weatherstation.label": "Laden Sie Ihre eigenen täglichen Stationsdaten hoch",
		"weatherstation.label_select_csv": "Wählen Sie eine CSV-Datei aus.",
		"weatherstation.label_selected_file": "Ausgewählte Datei",
		"weatherstation.label_coldate": "Datum (JJJJ-MM-TT)",
		"weatherstation.label_coltmin": "Mindesttemperatur (°C)",
		"weatherstation.label_coltmax": "Höchsttemperatur (°C)",
		"weatherstation.label_colprec": "Fällung (mm)",
		"weatherstation.label_apply_columns": "Spalten anwenden",
		"weatherstation.label_processing_request_columns": "Anfrage wird bearbeitet...",
		"site.hoovercard_site": "Standort",
		"site.hoovercard_croppest": "Kultur / Schädling",
		"site.hoovercard_startdate": "Startdatum",
		"site.hoovercard_enddate": "Enddatum",
		"site.hoovercard_tbase": "TBase",
		"site.hoovercard_tmaxthreshold": "Tmax-Schwellenwert",
		"site.hoovercard_maturityGDDthreshold": "GDD-Schwellenwert für die Reife",
		"site.hoovercard_daysmaturitythreshold": "Schwellenwert für die Tage bis zur Fälligkeit"
	},
	ch: {
		"homepage.welcome": "您好 <strong>{{name}}</strong>，您好嗎？",
		"homepage.time": "當前時間：{{time}}",
		"app.title": "生長積溫 (GDD)",
		"app.subtitle": "計算熱積溫/生長積溫",
		"app.message": "正在載入...",
		"app.failmsg": "無法連線到後端",
		"app.tabs_label_settings": "設定",
		"app.tabs_label_sites": "站點",
		"siteitem.label": "地點",
		"siteitem.label_last_update": "最後更新",
		"settings.title": "設定",
		"settings.growing_season": "生長季",
		"settings.start_date": "開始日期",
		"settings.end_date": "結束日期",
		"settings.error_date_range_message": "生長季過長",
		"settings.crop_threshold_temperature": "作物門檻溫度",
		"settings.units": "單位",
		"settings.crop": "作物",
		"settings.insects_and_diseases": "病蟲害",
		"settings.optional": "可選",
		"settings.crop_desc": "選擇作物/昆蟲/病害以自動設定閾值溫度",
		"settings.crop_maturity": "作物成熟度",
		"settings.crop_maturity_gdd": "成熟期 GDD",
		"settings.crop_daystomaturity": "成熟所需天數",
		"settings.calculating_msg": "正在計算特定地點的 GDD 累積值...",
		"settings.calculating_processing_request_msg": "正在處理您的請求",
		"settings.calculating_loading_norefresh": "正在處理您的請求，請稍候。請勿重新整理頁面。",
		"settings.location_desc": "使用地圖選擇位置，或手動輸入 GPS 座標",
		"settings.estimating_coord_msg": "正在估算您目前位置的座標...",
		"settings.geographic_coordinates": "地理座標",
		"settings.geographic_coordinates_units": "十進制度",
		"settings.latitude": "緯度",
		"settings.longitude": "經度",
		"settings.cimmyt_nursery_sites": "CIMMYT 試驗圃站點",
		"settings.btn_apply": "應用程式",
		"settings.btn_reset": "重設",
		"app.chart.source": "資料來源：ECMWF - AgERA5",
		"app.copyright": "© CIMMYT GIS 部門，2026年。致謝：該工具由 Ernesto Girón 和 Kai Sonder 開發。",
		"tabs.label_coords": "座標",
		"tabs.label_map": "地圖",
		"tabs.label_weather_station": "氣象站",
		"chart.gdd_title": "累積生長積溫 (GDD)",
		"chart.gdd_xlabel": "日期",
		"chart.gdd_ylabel": "累積 GDD",
		"chart.gdd_legend_label": "累積 GDD",
		"chart.gdd_verticalline_label_1": "成熟期 GDD",
		"chart.gdd_verticalline_label_2": "成熟所需天數",
		"chart.temperature_title": "每日氣象概況",
		"chart.temperature_xlabel": "日期",
		"chart.temperature_ylabel": "溫度",
		"chart.temperature_y1label": "降水量 (毫米/天)",
		"chart.temperature_legend_label_1": "最低氣溫",
		"chart.temperature_legend_label_2": "平均氣溫",
		"chart.temperature_legend_label_3": "最高氣溫",
		"chart.temperature_legend_label_4": "降水量 (毫米/天)",
		"chart.export_menu_header": "導出影像或原始資料",
		"chart.export_figure_toJPG": "導出為 JPG",
		"chart.export_figure_toPNG": "導出為 PNG",
		"chart.export_data_toCSV": "匯出資料為 CSV",
		"chart.export_data_toTXT": "匯出資料為 TXT",
		"chart.export_data_toXLSX": "導出資料為 XLS",
		"chart.export_data_toDSSAT": "匯出資料為 DSSAT",
		"chart.export_data_toAPSIM": "將資料匯出至 APSIM",
		"settings.crops_selected": "玉米",
		"settings.crops_corn": "玉米",
		"settings.crops_sorghum": "高粱",
		"settings.crops_soybeans": "大豆",
		"settings.crops_tomato": "番茄",
		"settings.crops_sunflower": "向日葵",
		"settings.crops_potato": "馬鈴薯",
		"settings.crops_wheat": "小麥",
		"settings.crops_barley": "大麥",
		"settings.crops_rye": "黑麥",
		"settings.crops_oats": "燕麥",
		"settings.crops_flaxseed": "亞麻籽",
		"settings.crops_lettuce": "生菜",
		"settings.crops_asparagus": "蘆筍",
		"settings.crops_other": "其他",
		"settings.pests_selected": "無",
		"settings.pests_green_cloverworm": "綠三葉草尺蠖",
		"settings.pests_codling_moth": "蘋果蠹蛾、蘋果實蠅",
		"settings.pests_alfalfa_weevil": "苜蓿象甲",
		"settings.pests_corn_rootworm": "玉米根蟲、梨小食心蟲",
		"settings.pests_stalk_borer": "莖螟",
		"settings.pests_onion_maggot": "蔥蠅",
		"settings.pests_cabbage_maggot": "甘藍根蠅",
		"settings.pests_apple_scab": "蘋果黑星病",
		"settings.pests_other": "其他",
		"weatherstation.label": "上傳您自己的氣象站日資料",
		"weatherstation.label_select_csv": "選擇 CSV 文件",
		"weatherstation.label_selected_file": "選定文件",
		"weatherstation.label_coldate": "日期 (YYYY-MM-DD)",
		"weatherstation.label_coltmin": "最低溫度 (°C)",
		"weatherstation.label_coltmax": "最高溫度 (°C)",
		"weatherstation.label_colprec": "沉澱 (mm)",
		"weatherstation.label_apply_columns": "應用程式列",
		"weatherstation.label_processing_request_columns": "正在處理請求...",
		"site.hoovercard_site": "地點",
		"site.hoovercard_croppest": "作物 / 病蟲害",
		"site.hoovercard_startdate": "開始日期",
		"site.hoovercard_enddate": "結束日期",
		"site.hoovercard_tbase": "資料庫",
		"site.hoovercard_tmaxthreshold": "最高溫度閾值",
		"site.hoovercard_maturityGDDthreshold": "成熟期積溫 (GDD) 閾值",
		"site.hoovercard_daysmaturitythreshold": "成熟天數閾值"
	}
};
//#endregion
//#region src/lib/assets/i18n.js
var locale = writable("en");
var locales = Object.keys(translations_default);
function translate(locale, key, vars) {
	if (!key) throw new Error("no key provided to $t()");
	if (!locale) throw new Error(`no translation for key "${key}"`);
	let text = translations_default[locale][key];
	if (!text) throw new Error(`no translation found for ${locale}.${key}`);
	Object.keys(vars).map((k) => {
		const regex = new RegExp(`{{${k}}}`, "g");
		text = text.replace(regex, vars[k]);
	});
	return text;
}
var t = derived(locale, ($locale) => (key, vars = {}) => translate($locale, key, vars));
//#endregion
//#region src/lib/era5Service.svelte.ts
var cdsapiKey = "6525771d-c4b5-41a9-82f4-fac1f1aa4c37";
var geochunked_url = "https://arco.datastores.ecmwf.int/cadl-arco-geo-001/arco/sis_agrometeorological_indicators/all/geoChunked.zarr";
var ERA5_EPOCH = /* @__PURE__ */ new Date("1979-01-01T00:00:00Z");
var MILLISECONDS_IN_DAY = 864e5;
var formatter = new Intl.NumberFormat("en-US", {
	minimumFractionDigits: 1,
	maximumFractionDigits: 1
});
var formatter3 = new Intl.NumberFormat("en-US", {
	minimumFractionDigits: 2,
	maximumFractionDigits: 2
});
var GROUP_ERA5 = null;
async function CDS_EAR5_getMeta(url = "") {
	if (url == null || url === "") url = geochunked_url;
	const store = new zarr.FetchStore(url, { overrides: { headers: { Authorization: `Bearer ${cdsapiKey}` } } });
	const root = await zarr.withConsolidatedMetadata(store);
	GROUP_ERA5 = await zarr.open(root, { kind: "group" });
	return GROUP_ERA5;
}
async function era5_getData(lat, lng, units = "C", startDate, endDate, Tbase = 0, Tcutoff = null) {
	if (lat === void 0 || lng === void 0) return;
	if (startDate === void 0 || endDate === void 0) return;
	let group;
	if (GROUP_ERA5 === null || GROUP_ERA5 === void 0) group = await CDS_EAR5_getMeta();
	else group = GROUP_ERA5;
	const ta = await zarr.open(group.resolve("/Temperature_Air_2m_Mean_24h"), { kind: "array" });
	const tn = await zarr.open(group.resolve("/Temperature_Air_2m_Min_24h"), { kind: "array" });
	const tx = await zarr.open(group.resolve("/Temperature_Air_2m_Max_24h"), { kind: "array" });
	const pcp = await zarr.open(group.resolve("/Precipitation_Flux"), { kind: "array" });
	const srad = await zarr.open(group.resolve("/Solar_Radiation_Flux"), { kind: "array" });
	const wind = await zarr.open(group.resolve("/Wind_Speed_10m_Mean_24h"), { kind: "array" });
	const ts = await zarr.open(group.resolve("/time"), { kind: "array" });
	const lats = await zarr.open(group.resolve("/latitude"), { kind: "array" });
	const lons = await zarr.open(group.resolve("/longitude"), { kind: "array" });
	const startIndex = dateToEra5Index(new Date(startDate));
	const endIndex = dateToEra5Index(new Date(endDate)) + 1;
	const timeSlice = zarr.slice(startIndex, endIndex);
	const arr_Latitudes = await zarr.get(lats);
	const arr_Longitudes = await zarr.get(lons);
	const latIndex = findNearestIndex(arr_Latitudes?.data, lat);
	const lonIndex = findNearestIndex(arr_Longitudes?.data, lng);
	const arr_Ta = await zarr.get(ta, [
		timeSlice,
		latIndex,
		lonIndex
	]);
	const arr_Tn = await zarr.get(tn, [
		timeSlice,
		latIndex,
		lonIndex
	]);
	const arr_Tx = await zarr.get(tx, [
		timeSlice,
		latIndex,
		lonIndex
	]);
	const arr_Prec = await zarr.get(pcp, [
		timeSlice,
		latIndex,
		lonIndex
	]);
	const arr_Srad = await zarr.get(srad, [
		timeSlice,
		latIndex,
		lonIndex
	]);
	const arr_Wind = await zarr.get(wind, [
		timeSlice,
		latIndex,
		lonIndex
	]);
	const dates = getDateRange(startDate, (await zarr.get(ts, [timeSlice])).data?.length);
	let Ta = [];
	let Tn = [];
	let Tx = [];
	let Srad = [];
	if (units == "C") {
		if (arr_Ta && arr_Ta.data.length > 0) Ta = arr_Ta.data.map(temperature_K_to_celsius);
		if (arr_Tn && arr_Tn.data.length > 0) Tn = arr_Tn.data.map(temperature_K_to_celsius);
		if (arr_Tx && arr_Tx.data.length > 0) Tx = arr_Tx.data.map(temperature_K_to_celsius);
		if (arr_Srad && arr_Srad.data.length > 0) Srad = arr_Srad.data.map(solrad_to_MJ);
	} else if (units == "F") {
		if (arr_Ta && arr_Ta.data.length > 0) Ta = arr_Ta.data.map((num) => (num - 273.15) * 9 / 5 + 32);
		if (arr_Tn && arr_Tn.data.length > 0) Tn = arr_Tn.data.map((num) => (num - 273.15) * 9 / 5 + 32);
		if (arr_Tx && arr_Tx.data.length > 0) Tx = arr_Tx.data.map((num) => (num - 273.15) * 9 / 5 + 32);
	}
	if (Ta.length <= 0) Ta = await estimate_AvgTemperature(dates, Tn, Tx);
	const [GDD, accGDD] = await calculate_GDD(dates, Tn, Tx, Tbase, Tcutoff);
	const dataFormatted = [];
	for (let i = 0; i < dates.length; i++) dataFormatted.push({
		"timestamp": dates[i].toISOString().split("T")[0],
		"Prec": +formatter.format(+arr_Prec?.data[i]) || -99,
		"Tn": +formatter.format(+Tn[i]) || -99,
		"Ta": +formatter.format(+Ta[i]) || -99,
		"Tx": +formatter.format(+Tx[i]) || -99,
		"Srad": +formatter.format(+Srad[i]) || -99,
		"Wind": +formatter.format(+arr_Wind?.data[i]) || -99,
		"GDD": Number(GDD[i].toFixed(1)),
		"accGDD": Number(accGDD[i].toFixed(1))
	});
	return dataFormatted;
}
async function calculate_GDD(dates, Tn, Tx, Tbase = 0, Tcutoff = null) {
	const dataGDD = [];
	const dataAccGDD = [];
	let totalSum = 0;
	for (let i = 0; i < dates.length; i++) {
		const tn = Tn[i];
		const tx = Tx[i];
		const _gdd = await GDD(tn, tx, Tbase, Tcutoff);
		totalSum += _gdd;
		dataGDD.push(_gdd);
		dataAccGDD.push(totalSum);
	}
	return [dataGDD, dataAccGDD];
}
async function estimate_AvgTemperature(dates, Tn, Tx) {
	return dates.map((e, index) => {
		const tn = Tn[index];
		return (Tx[index] + tn) / 2;
	});
}
function getDateRange(startDateString, numberOfDays) {
	const start = new Date(startDateString);
	return Array.from({ length: numberOfDays }, (_, index) => {
		const date = new Date(start);
		date.setDate(start.getDate() + index);
		return date;
	});
}
function findNearestIndex(arr, target) {
	let closestIdx = 0;
	let minDiff = Math.abs(arr[0] - target);
	for (let i = 1; i < arr.length; i++) {
		const diff = Math.abs(arr[i] - target);
		if (diff < minDiff) {
			minDiff = diff;
			closestIdx = i;
		}
	}
	return closestIdx;
}
/**
* Converts a JS Date or Timestamp to an ERA5 hourly array index
*/
function dateToEra5Index(dateOrTimestamp) {
	const diffInDays = (new Date(dateOrTimestamp).getTime() - ERA5_EPOCH.getTime()) / MILLISECONDS_IN_DAY;
	return Math.floor(diffInDays);
}
function temperature_K_to_celsius(t) {
	return formatter.format(t - 273.15);
}
function solrad_to_MJ(sr) {
	return formatter3.format(sr / 1e6);
}
async function GDD(tn, tx, tbase = 0, Tcutoff = null) {
	if (tn == null || tx == null) {
		console.log("Temperature parameters are not valid");
		return 0;
	}
	if (tbase !== null) tn = tn < tbase ? tbase : tn;
	if (Tcutoff !== null) tx = tx > Tcutoff ? Tcutoff : tx;
	let Tavg = (tx + tn) / 2;
	Tavg = Tavg <= tbase ? 0 : Tavg;
	let GDD = Tavg > tbase ? Tavg - tbase : 0;
	GDD = Math.max(GDD, 0);
	return await GDD;
}
//#endregion
//#region node_modules/@lucide/svelte/dist/defaultAttributes.js
/**
* @file
* @license @lucide/svelte v1.37.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
};
//#endregion
//#region node_modules/@lucide/svelte/dist/utils/hasA11yProp.js
/**
* @file
* @license @lucide/svelte v1.37.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
/**
* Check if a component has an accessibility prop
*
* @param {object} props
* @returns {boolean} Whether the component has an accessibility prop
*/
var hasA11yProp = (props) => {
	for (const prop in props) if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
	return false;
};
//#endregion
//#region node_modules/@lucide/svelte/dist/context.js
/**
* @file
* @license @lucide/svelte v1.37.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LucideContext = Symbol("lucide-context");
var getLucideContext = () => getContext(LucideContext);
//#endregion
//#region node_modules/@lucide/svelte/dist/Icon.svelte
function Icon($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const globalProps = getLucideContext() ?? {};
		const { name, color = globalProps.color ?? "currentColor", size = globalProps.size ?? 24, strokeWidth = globalProps.strokeWidth ?? 2, absoluteStrokeWidth = globalProps.absoluteStrokeWidth ?? false, iconNode = [], children, $$slots, $$events, ...props } = $$props;
		const calculatedStrokeWidth = derived$1(() => absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth);
		$$renderer.push(`<svg${attributes({
			...defaultAttributes,
			...!children && !hasA11yProp(props) && { "aria-hidden": "true" },
			...props,
			width: size,
			height: size,
			stroke: color,
			"stroke-width": calculatedStrokeWidth(),
			class: clsx$1([
				"lucide-icon lucide",
				globalProps.class,
				name && `lucide-${name}`,
				props.class
			])
		}, void 0, void 0, void 0, 3)}><!--[-->`);
		const each_array = ensure_array_like(iconNode);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let [tag, attrs] = each_array[$$index];
			element($$renderer, tag, () => {
				$$renderer.push(`${attributes({ ...attrs }, void 0, void 0, void 0, 3)}`);
			});
		}
		$$renderer.push(`<!--]-->`);
		children?.($$renderer);
		$$renderer.push(`<!----></svg>`);
	});
}
//#endregion
//#region node_modules/@lucide/svelte/dist/icons/file-down.svelte
function File_down($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "file-down" },
		props,
		{ iconNode: [
			["path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }],
			["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }],
			["path", { "d": "M12 18v-6" }],
			["path", { "d": "m9 15 3 3 3-3" }]
		] }
	]));
}
//#endregion
//#region node_modules/@lucide/svelte/dist/icons/image-down.svelte
function Image_down($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "image-down" },
		props,
		{ iconNode: [
			["path", { "d": "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" }],
			["path", { "d": "m14 19 3 3v-5.5" }],
			["path", { "d": "m17 22 3-3" }],
			["circle", {
				"cx": "9",
				"cy": "9",
				"r": "2"
			}]
		] }
	]));
}
//#endregion
//#region node_modules/@lucide/svelte/dist/icons/ellipsis-vertical.svelte
function Ellipsis_vertical($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "ellipsis-vertical" },
		props,
		{ iconNode: [
			["circle", {
				"cx": "12",
				"cy": "12",
				"r": "1"
			}],
			["circle", {
				"cx": "12",
				"cy": "5",
				"r": "1"
			}],
			["circle", {
				"cx": "12",
				"cy": "19",
				"r": "1"
			}]
		] }
	]));
}
//#endregion
//#region node_modules/@lucide/svelte/dist/icons/folder-down.svelte
function Folder_down($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "folder-down" },
		props,
		{ iconNode: [
			["path", { "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }],
			["path", { "d": "M12 10v6" }],
			["path", { "d": "m15 13-3 3-3-3" }]
		] }
	]));
}
//#endregion
//#region node_modules/bits-ui/node_modules/svelte-toolbelt/dist/utils/is.js
function isFunction$1(value) {
	return typeof value === "function";
}
function isObject(value) {
	return value !== null && typeof value === "object";
}
var CLASS_VALUE_PRIMITIVE_TYPES = [
	"string",
	"number",
	"bigint",
	"boolean"
];
function isClassValue(value) {
	if (value === null || value === void 0) return true;
	if (CLASS_VALUE_PRIMITIVE_TYPES.includes(typeof value)) return true;
	if (Array.isArray(value)) return value.every((item) => isClassValue(item));
	if (typeof value === "object") {
		if (Object.getPrototypeOf(value) !== Object.prototype) return false;
		return true;
	}
	return false;
}
//#endregion
//#region node_modules/bits-ui/node_modules/svelte-toolbelt/dist/box/box-extras.svelte.js
var BoxSymbol = Symbol("box");
var isWritableSymbol = Symbol("is-writable");
function boxWith(getter, setter) {
	const derived = derived$1(getter);
	if (setter) return {
		[BoxSymbol]: true,
		[isWritableSymbol]: true,
		get current() {
			return derived();
		},
		set current(v) {
			setter(v);
		}
	};
	return {
		[BoxSymbol]: true,
		get current() {
			return getter();
		}
	};
}
/**
* @returns Whether the value is a Box
*
* @see {@link https://runed.dev/docs/functions/box}
*/
function isBox(value) {
	return isObject(value) && BoxSymbol in value;
}
/**
* @returns Whether the value is a WritableBox
*
* @see {@link https://runed.dev/docs/functions/box}
*/
function isWritableBox(value) {
	return isBox(value) && isWritableSymbol in value;
}
function boxFrom(value) {
	if (isBox(value)) return value;
	if (isFunction$1(value)) return boxWith(value);
	return simpleBox(value);
}
/**
* Function that gets an object of boxes, and returns an object of reactive values
*
* @example
* const count = box(0)
* const flat = box.flatten({ count, double: box.with(() => count.current) })
* // type of flat is { count: number, readonly double: number }
*
* @see {@link https://runed.dev/docs/functions/box}
*/
function boxFlatten(boxes) {
	return Object.entries(boxes).reduce((acc, [key, b]) => {
		if (!isBox(b)) return Object.assign(acc, { [key]: b });
		if (isWritableBox(b)) Object.defineProperty(acc, key, {
			get() {
				return b.current;
			},
			set(v) {
				b.current = v;
			}
		});
		else Object.defineProperty(acc, key, { get() {
			return b.current;
		} });
		return acc;
	}, {});
}
/**
* Function that converts a box to a readonly box.
*
* @example
* const count = box(0) // WritableBox<number>
* const countReadonly = box.readonly(count) // ReadableBox<number>
*
* @see {@link https://runed.dev/docs/functions/box}
*/
function toReadonlyBox(b) {
	if (!isWritableBox(b)) return b;
	return {
		[BoxSymbol]: true,
		get current() {
			return b.current;
		}
	};
}
function simpleBox(initialValue) {
	let current = initialValue;
	return {
		[BoxSymbol]: true,
		[isWritableSymbol]: true,
		get current() {
			return current;
		},
		set current(v) {
			current = v;
		}
	};
}
//#endregion
//#region node_modules/bits-ui/node_modules/svelte-toolbelt/dist/box/box.svelte.js
function box(initialValue) {
	let current = initialValue;
	return {
		[BoxSymbol]: true,
		[isWritableSymbol]: true,
		get current() {
			return current;
		},
		set current(v) {
			current = v;
		}
	};
}
box.from = boxFrom;
box.with = boxWith;
box.flatten = boxFlatten;
box.readonly = toReadonlyBox;
box.isBox = isBox;
box.isWritableBox = isWritableBox;
//#endregion
//#region node_modules/bits-ui/node_modules/svelte-toolbelt/dist/utils/compose-handlers.js
/**
* Composes event handlers into a single function that can be called with an event.
* If the previous handler cancels the event using `event.preventDefault()`, the handlers
* that follow will not be called.
*/
function composeHandlers(...handlers) {
	return function(e) {
		for (const handler of handlers) {
			if (!handler) continue;
			if (e.defaultPrevented) return;
			if (typeof handler === "function") handler.call(this, e);
			else handler.current?.call(this, e);
		}
	};
}
//#endregion
//#region node_modules/bits-ui/node_modules/svelte-toolbelt/dist/utils/strings.js
var NUMBER_CHAR_RE = /\d/;
var STR_SPLITTERS = [
	"-",
	"_",
	"/",
	"."
];
function isUppercase(char = "") {
	if (NUMBER_CHAR_RE.test(char)) return void 0;
	return char !== char.toLowerCase();
}
function splitByCase(str) {
	const parts = [];
	let buff = "";
	let previousUpper;
	let previousSplitter;
	for (const char of str) {
		const isSplitter = STR_SPLITTERS.includes(char);
		if (isSplitter === true) {
			parts.push(buff);
			buff = "";
			previousUpper = void 0;
			continue;
		}
		const isUpper = isUppercase(char);
		if (previousSplitter === false) {
			if (previousUpper === false && isUpper === true) {
				parts.push(buff);
				buff = char;
				previousUpper = isUpper;
				continue;
			}
			if (previousUpper === true && isUpper === false && buff.length > 1) {
				const lastChar = buff.at(-1);
				parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
				buff = lastChar + char;
				previousUpper = isUpper;
				continue;
			}
		}
		buff += char;
		previousUpper = isUpper;
		previousSplitter = isSplitter;
	}
	parts.push(buff);
	return parts;
}
function pascalCase(str) {
	if (!str) return "";
	return splitByCase(str).map((p) => upperFirst(p)).join("");
}
function camelCase(str) {
	return lowerFirst(pascalCase(str || ""));
}
function upperFirst(str) {
	return str ? str[0].toUpperCase() + str.slice(1) : "";
}
function lowerFirst(str) {
	return str ? str[0].toLowerCase() + str.slice(1) : "";
}
//#endregion
//#region node_modules/bits-ui/node_modules/svelte-toolbelt/dist/utils/css-to-style-obj.js
function cssToStyleObj(css) {
	if (!css) return {};
	const styleObj = {};
	function iterator(name, value) {
		if (name.startsWith("-moz-") || name.startsWith("-webkit-") || name.startsWith("-ms-") || name.startsWith("-o-")) {
			styleObj[pascalCase(name)] = value;
			return;
		}
		if (name.startsWith("--")) {
			styleObj[name] = value;
			return;
		}
		styleObj[camelCase(name)] = value;
	}
	parse(css, iterator);
	return styleObj;
}
//#endregion
//#region node_modules/bits-ui/node_modules/svelte-toolbelt/dist/utils/execute-callbacks.js
/**
* Executes an array of callback functions with the same arguments.
* @template T The types of the arguments that the callback functions take.
* @param callbacks array of callback functions to execute.
* @returns A new function that executes all of the original callback functions with the same arguments.
*/
function executeCallbacks(...callbacks) {
	return (...args) => {
		for (const callback of callbacks) if (typeof callback === "function") callback(...args);
	};
}
//#endregion
//#region node_modules/bits-ui/node_modules/svelte-toolbelt/dist/utils/style-to-css.js
function createParser(matcher, replacer) {
	const regex = RegExp(matcher, "g");
	return (str) => {
		if (typeof str !== "string") throw new TypeError(`expected an argument of type string, but got ${typeof str}`);
		if (!str.match(regex)) return str;
		return str.replace(regex, replacer);
	};
}
var camelToKebab = createParser(/[A-Z]/, (match) => `-${match.toLowerCase()}`);
function styleToCSS(styleObj) {
	if (!styleObj || typeof styleObj !== "object" || Array.isArray(styleObj)) throw new TypeError(`expected an argument of type object, but got ${typeof styleObj}`);
	return Object.keys(styleObj).map((property) => `${camelToKebab(property)}: ${styleObj[property]};`).join("\n");
}
//#endregion
//#region node_modules/bits-ui/node_modules/svelte-toolbelt/dist/utils/style.js
function styleToString(style = {}) {
	return styleToCSS(style).replace("\n", " ");
}
var EVENT_LIST_SET = /* @__PURE__ */ new Set([
	"onabort",
	"onanimationcancel",
	"onanimationend",
	"onanimationiteration",
	"onanimationstart",
	"onauxclick",
	"onbeforeinput",
	"onbeforetoggle",
	"onblur",
	"oncancel",
	"oncanplay",
	"oncanplaythrough",
	"onchange",
	"onclick",
	"onclose",
	"oncompositionend",
	"oncompositionstart",
	"oncompositionupdate",
	"oncontextlost",
	"oncontextmenu",
	"oncontextrestored",
	"oncopy",
	"oncuechange",
	"oncut",
	"ondblclick",
	"ondrag",
	"ondragend",
	"ondragenter",
	"ondragleave",
	"ondragover",
	"ondragstart",
	"ondrop",
	"ondurationchange",
	"onemptied",
	"onended",
	"onerror",
	"onfocus",
	"onfocusin",
	"onfocusout",
	"onformdata",
	"ongotpointercapture",
	"oninput",
	"oninvalid",
	"onkeydown",
	"onkeypress",
	"onkeyup",
	"onload",
	"onloadeddata",
	"onloadedmetadata",
	"onloadstart",
	"onlostpointercapture",
	"onmousedown",
	"onmouseenter",
	"onmouseleave",
	"onmousemove",
	"onmouseout",
	"onmouseover",
	"onmouseup",
	"onpaste",
	"onpause",
	"onplay",
	"onplaying",
	"onpointercancel",
	"onpointerdown",
	"onpointerenter",
	"onpointerleave",
	"onpointermove",
	"onpointerout",
	"onpointerover",
	"onpointerup",
	"onprogress",
	"onratechange",
	"onreset",
	"onresize",
	"onscroll",
	"onscrollend",
	"onsecuritypolicyviolation",
	"onseeked",
	"onseeking",
	"onselect",
	"onselectionchange",
	"onselectstart",
	"onslotchange",
	"onstalled",
	"onsubmit",
	"onsuspend",
	"ontimeupdate",
	"ontoggle",
	"ontouchcancel",
	"ontouchend",
	"ontouchmove",
	"ontouchstart",
	"ontransitioncancel",
	"ontransitionend",
	"ontransitionrun",
	"ontransitionstart",
	"onvolumechange",
	"onwaiting",
	"onwebkitanimationend",
	"onwebkitanimationiteration",
	"onwebkitanimationstart",
	"onwebkittransitionend",
	"onwheel"
]);
//#endregion
//#region node_modules/bits-ui/node_modules/svelte-toolbelt/dist/utils/merge-props.js
/**
* Modified from https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/utils/src/mergeProps.ts (see NOTICE.txt for source)
*/
function isEventHandler(key) {
	return EVENT_LIST_SET.has(key);
}
/**
* Given a list of prop objects, merges them into a single object.
* - Automatically composes event handlers (e.g. `onclick`, `oninput`, etc.)
* - Chains regular functions with the same name so they are called in order
* - Merges class strings with `clsx`
* - Merges style objects and converts them to strings
* - Handles a bug with Svelte where setting the `hidden` attribute to `false` doesn't remove it
* - Overrides other values with the last one
*/
function mergeProps(...args) {
	const result = { ...args[0] };
	for (let i = 1; i < args.length; i++) {
		const props = args[i];
		if (!props) continue;
		for (const key of Object.keys(props)) {
			const a = result[key];
			const b = props[key];
			const aIsFunction = typeof a === "function";
			const bIsFunction = typeof b === "function";
			if (aIsFunction && typeof bIsFunction && isEventHandler(key)) result[key] = composeHandlers(a, b);
			else if (aIsFunction && bIsFunction) result[key] = executeCallbacks(a, b);
			else if (key === "class") {
				const aIsClassValue = isClassValue(a);
				const bIsClassValue = isClassValue(b);
				if (aIsClassValue && bIsClassValue) result[key] = clsx(a, b);
				else if (aIsClassValue) result[key] = clsx(a);
				else if (bIsClassValue) result[key] = clsx(b);
			} else if (key === "style") {
				const aIsObject = typeof a === "object";
				const bIsObject = typeof b === "object";
				const aIsString = typeof a === "string";
				const bIsString = typeof b === "string";
				if (aIsObject && bIsObject) result[key] = {
					...a,
					...b
				};
				else if (aIsObject && bIsString) {
					const parsedStyle = cssToStyleObj(b);
					result[key] = {
						...a,
						...parsedStyle
					};
				} else if (aIsString && bIsObject) result[key] = {
					...cssToStyleObj(a),
					...b
				};
				else if (aIsString && bIsString) {
					const parsedStyleA = cssToStyleObj(a);
					const parsedStyleB = cssToStyleObj(b);
					result[key] = {
						...parsedStyleA,
						...parsedStyleB
					};
				} else if (aIsObject) result[key] = a;
				else if (bIsObject) result[key] = b;
				else if (aIsString) result[key] = a;
				else if (bIsString) result[key] = b;
			} else result[key] = b !== void 0 ? b : a;
		}
		for (const key of Object.getOwnPropertySymbols(props)) {
			const a = result[key];
			const b = props[key];
			result[key] = b !== void 0 ? b : a;
		}
	}
	if (typeof result.style === "object") result.style = styleToString(result.style).replaceAll("\n", " ");
	if (result.hidden === false) {
		result.hidden = void 0;
		delete result.hidden;
	}
	if (result.disabled === false) {
		result.disabled = void 0;
		delete result.disabled;
	}
	return result;
}
//#endregion
//#region node_modules/bits-ui/node_modules/svelte-toolbelt/dist/utils/sr-only-styles.js
var srOnlyStyles = {
	position: "absolute",
	width: "1px",
	height: "1px",
	padding: "0",
	margin: "-1px",
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	borderWidth: "0",
	transform: "translateX(-100%)"
};
var srOnlyStylesString = styleToString(srOnlyStyles);
//#endregion
//#region node_modules/bits-ui/node_modules/runed/dist/internal/configurable-globals.js
var defaultWindow = void 0;
//#endregion
//#region node_modules/bits-ui/node_modules/runed/dist/internal/utils/dom.js
/**
* Handles getting the active element in a document or shadow root.
* If the active element is within a shadow root, it will traverse the shadow root
* to find the active element.
* If not, it will return the active element in the document.
*
* @param document A document or shadow root to get the active element from.
* @returns The active element in the document or shadow root.
*/
function getActiveElement$1(document) {
	let activeElement = document.activeElement;
	while (activeElement?.shadowRoot) {
		const node = activeElement.shadowRoot.activeElement;
		if (node === activeElement) break;
		else activeElement = node;
	}
	return activeElement;
}
//#endregion
//#region node_modules/bits-ui/node_modules/runed/dist/utilities/active-element/active-element.svelte.js
var ActiveElement = class {
	#document;
	#subscribe;
	constructor(options = {}) {
		const { window = defaultWindow, document = window?.document } = options;
		if (window === void 0) return;
		this.#document = document;
		this.#subscribe = createSubscriber((update) => {
			const cleanupFocusIn = on(window, "focusin", update);
			const cleanupFocusOut = on(window, "focusout", update);
			return () => {
				cleanupFocusIn();
				cleanupFocusOut();
			};
		});
	}
	get current() {
		this.#subscribe?.();
		if (!this.#document) return null;
		return getActiveElement$1(this.#document);
	}
};
new ActiveElement();
//#endregion
//#region node_modules/bits-ui/node_modules/runed/dist/internal/utils/is.js
function isFunction(value) {
	return typeof value === "function";
}
//#endregion
//#region node_modules/bits-ui/node_modules/runed/dist/utilities/context/context.js
var Context = class {
	#name;
	#key;
	/**
	* @param name The name of the context.
	* This is used for generating the context key and error messages.
	*/
	constructor(name) {
		this.#name = name;
		this.#key = Symbol(name);
	}
	/**
	* The key used to get and set the context.
	*
	* It is not recommended to use this value directly.
	* Instead, use the methods provided by this class.
	*/
	get key() {
		return this.#key;
	}
	/**
	* Checks whether this has been set in the context of a parent component.
	*
	* Must be called during component initialisation.
	*/
	exists() {
		return hasContext(this.#key);
	}
	/**
	* Retrieves the context that belongs to the closest parent component.
	*
	* Must be called during component initialisation.
	*
	* @throws An error if the context does not exist.
	*/
	get() {
		const context = getContext(this.#key);
		if (context === void 0) throw new Error(`Context "${this.#name}" not found`);
		return context;
	}
	/**
	* Retrieves the context that belongs to the closest parent component,
	* or the given fallback value if the context does not exist.
	*
	* Must be called during component initialisation.
	*/
	getOr(fallback) {
		const context = getContext(this.#key);
		if (context === void 0) return fallback;
		return context;
	}
	/**
	* Associates the given value with the current component and returns it.
	*
	* Must be called during component initialisation.
	*/
	set(context) {
		return setContext(this.#key, context);
	}
};
//#endregion
//#region node_modules/bits-ui/node_modules/runed/dist/utilities/watch/watch.svelte.js
function runWatcher(sources, flush, effect, options = {}) {
	const { lazy = false } = options;
}
function watch(sources, effect, options) {
	runWatcher(sources, "post", effect, options);
}
function watchPre(sources, effect, options) {
	runWatcher(sources, "pre", effect, options);
}
watch.pre = watchPre;
function watchOnce(source, effect) {}
function watchOncePre(source, effect) {}
watchOnce.pre = watchOncePre;
//#endregion
//#region node_modules/bits-ui/node_modules/runed/dist/internal/utils/get.js
function get$1(value) {
	if (isFunction(value)) return value();
	return value;
}
//#endregion
//#region node_modules/bits-ui/node_modules/runed/dist/utilities/element-size/element-size.svelte.js
var ElementSize = class {
	#size = {
		width: 0,
		height: 0
	};
	#observed = false;
	#options;
	#node;
	#window;
	#width = derived$1(() => {
		this.#subscribe()?.();
		return this.getSize().width;
	});
	#height = derived$1(() => {
		this.#subscribe()?.();
		return this.getSize().height;
	});
	#subscribe = derived$1(() => {
		const node$ = get$1(this.#node);
		if (!node$) return;
		return createSubscriber((update) => {
			if (!this.#window) return;
			const observer = new this.#window.ResizeObserver((entries) => {
				this.#observed = true;
				for (const entry of entries) {
					const boxSize = this.#options.box === "content-box" ? entry.contentBoxSize : entry.borderBoxSize;
					const boxSizeArr = Array.isArray(boxSize) ? boxSize : [boxSize];
					this.#size.width = boxSizeArr.reduce((acc, size) => Math.max(acc, size.inlineSize), 0);
					this.#size.height = boxSizeArr.reduce((acc, size) => Math.max(acc, size.blockSize), 0);
				}
				update();
			});
			observer.observe(node$);
			return () => {
				this.#observed = false;
				observer.disconnect();
			};
		});
	});
	constructor(node, options = { box: "border-box" }) {
		this.#window = options.window ?? defaultWindow;
		this.#options = options;
		this.#node = node;
		this.#size = {
			width: 0,
			height: 0
		};
	}
	calculateSize() {
		const element = get$1(this.#node);
		if (!element || !this.#window) return;
		const offsetWidth = element.offsetWidth;
		const offsetHeight = element.offsetHeight;
		if (this.#options.box === "border-box") return {
			width: offsetWidth,
			height: offsetHeight
		};
		const style = this.#window.getComputedStyle(element);
		const paddingWidth = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
		const paddingHeight = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
		const borderWidth = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
		const borderHeight = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
		return {
			width: offsetWidth - paddingWidth - borderWidth,
			height: offsetHeight - paddingHeight - borderHeight
		};
	}
	getSize() {
		return this.#observed ? this.#size : this.calculateSize() ?? this.#size;
	}
	get current() {
		this.#subscribe()?.();
		return this.getSize();
	}
	get width() {
		return this.#width();
	}
	get height() {
		return this.#height();
	}
};
//#endregion
//#region node_modules/bits-ui/node_modules/runed/dist/utilities/resource/resource.svelte.js
function debounce$1(fn, delay) {
	let timeoutId;
	let lastResolve = null;
	return (...args) => {
		return new Promise((resolve) => {
			if (lastResolve) lastResolve(void 0);
			lastResolve = resolve;
			clearTimeout(timeoutId);
			timeoutId = setTimeout(async () => {
				const result = await fn(...args);
				if (lastResolve) {
					lastResolve(result);
					lastResolve = null;
				}
			}, delay);
		});
	};
}
function throttle(fn, delay) {
	let lastRun = 0;
	let lastPromise = null;
	return (...args) => {
		const now = Date.now();
		if (lastRun && now - lastRun < delay) return lastPromise ?? Promise.resolve(void 0);
		lastRun = now;
		lastPromise = fn(...args);
		return lastPromise;
	};
}
function runResource(source, fetcher, options = {}, effectFn) {
	const { lazy = false, once = false, initialValue, debounce: debounceTime, throttle: throttleTime } = options;
	let current = initialValue;
	let loading = false;
	let error = void 0;
	let cleanupFns = [];
	const runCleanup = () => {
		cleanupFns.forEach((fn) => fn());
		cleanupFns = [];
	};
	const onCleanup = (fn) => {
		cleanupFns = [...cleanupFns, fn];
	};
	const baseFetcher = async (value, previousValue, refetching = false) => {
		try {
			loading = true;
			error = void 0;
			runCleanup();
			const controller = new AbortController();
			onCleanup(() => controller.abort());
			const result = await fetcher(value, previousValue, {
				data: current,
				refetching,
				onCleanup,
				signal: controller.signal
			});
			current = result;
			return result;
		} catch (e) {
			if (!(e instanceof DOMException && e.name === "AbortError")) error = e;
			return;
		} finally {
			loading = false;
		}
	};
	const runFetcher = debounceTime ? debounce$1(baseFetcher, debounceTime) : throttleTime ? throttle(baseFetcher, throttleTime) : baseFetcher;
	const sources = Array.isArray(source) ? source : [source];
	let prevValues;
	effectFn((values, previousValues) => {
		if (once && prevValues) return;
		prevValues = values;
		runFetcher(Array.isArray(source) ? values : values[0], Array.isArray(source) ? previousValues : previousValues?.[0]);
	}, { lazy });
	return {
		get current() {
			return current;
		},
		get loading() {
			return loading;
		},
		get error() {
			return error;
		},
		mutate: (value) => {
			current = value;
		},
		refetch: (info) => {
			const values = sources.map((s) => s());
			return runFetcher(Array.isArray(source) ? values : values[0], Array.isArray(source) ? values : values[0], info ?? true);
		}
	};
}
function resource(source, fetcher, options) {
	return runResource(source, fetcher, options, (fn, options) => {
		const sources = Array.isArray(source) ? source : [source];
		const getters = () => sources.map((s) => s());
		watch(getters, (values, previousValues) => {
			fn(values, previousValues ?? []);
		}, options);
	});
}
function resourcePre(source, fetcher, options) {
	return runResource(source, fetcher, options, (fn, options) => {
		const sources = Array.isArray(source) ? source : [source];
		const getter = () => sources.map((s) => s());
		watch.pre(getter, (values, previousValues) => {
			fn(values, previousValues ?? []);
		}, options);
	});
}
resource.pre = resourcePre;
//#endregion
//#region node_modules/bits-ui/node_modules/svelte-toolbelt/dist/utils/after-sleep.js
/**
* A utility function that executes a callback after a specified number of milliseconds.
*/
function afterSleep(ms, cb) {
	return setTimeout(cb, ms);
}
//#endregion
//#region node_modules/bits-ui/node_modules/svelte-toolbelt/dist/utils/after-tick.js
function afterTick(fn) {
	(/* @__PURE__ */ tick()).then(fn);
}
//#endregion
//#region node_modules/bits-ui/node_modules/svelte-toolbelt/dist/utils/dom.js
var ELEMENT_NODE = 1;
var DOCUMENT_NODE = 9;
var DOCUMENT_FRAGMENT_NODE = 11;
function isHTMLElement$1(node) {
	return isObject(node) && node.nodeType === ELEMENT_NODE && typeof node.nodeName === "string";
}
function isDocument(node) {
	return isObject(node) && node.nodeType === DOCUMENT_NODE;
}
function isWindow(node) {
	return isObject(node) && node.constructor?.name === "VisualViewport";
}
function isNode(node) {
	return isObject(node) && node.nodeType !== void 0;
}
function isShadowRoot(node) {
	return isNode(node) && node.nodeType === DOCUMENT_FRAGMENT_NODE && "host" in node;
}
function contains(parent, child) {
	if (!parent || !child) return false;
	if (!isHTMLElement$1(parent) || !isHTMLElement$1(child)) return false;
	const rootNode = child.getRootNode?.();
	if (parent === child) return true;
	if (parent.contains(child)) return true;
	if (rootNode && isShadowRoot(rootNode)) {
		let next = child;
		while (next) {
			if (parent === next) return true;
			next = next.parentNode || next.host;
		}
	}
	return false;
}
function getDocument(node) {
	if (isDocument(node)) return node;
	if (isWindow(node)) return node.document;
	return node?.ownerDocument ?? document;
}
function getWindow(node) {
	if (isShadowRoot(node)) return getWindow(node.host);
	if (isDocument(node)) return node.defaultView ?? window;
	if (isHTMLElement$1(node)) return node.ownerDocument?.defaultView ?? window;
	return window;
}
function getActiveElement(rootNode) {
	let activeElement = rootNode.activeElement;
	while (activeElement?.shadowRoot) {
		const el = activeElement.shadowRoot.activeElement;
		if (el === activeElement) break;
		else activeElement = el;
	}
	return activeElement;
}
//#endregion
//#region node_modules/bits-ui/node_modules/svelte-toolbelt/dist/utils/dom-context.svelte.js
var DOMContext = class {
	element;
	#root = derived$1(() => {
		if (!this.element.current) return document;
		return this.element.current.getRootNode() ?? document;
	});
	get root() {
		return this.#root();
	}
	set root($$value) {
		return this.#root($$value);
	}
	constructor(element) {
		if (typeof element === "function") this.element = boxWith(element);
		else this.element = element;
	}
	getDocument = () => {
		return getDocument(this.root);
	};
	getWindow = () => {
		return this.getDocument().defaultView ?? window;
	};
	getActiveElement = () => {
		return getActiveElement(this.root);
	};
	isActiveElement = (node) => {
		return node === this.getActiveElement();
	};
	getElementById(id) {
		return this.root.getElementById(id);
	}
	querySelector = (selector) => {
		if (!this.root) return null;
		return this.root.querySelector(selector);
	};
	querySelectorAll = (selector) => {
		if (!this.root) return [];
		return this.root.querySelectorAll(selector);
	};
	setTimeout = (callback, delay) => {
		return this.getWindow().setTimeout(callback, delay);
	};
	clearTimeout = (timeoutId) => {
		return this.getWindow().clearTimeout(timeoutId);
	};
};
if (typeof HTMLElement === "function");
//#endregion
//#region node_modules/svelte/src/attachments/index.js
/**
* Creates an object key that will be recognised as an attachment when the object is spread onto an element,
* as a programmatic alternative to using `{@attach ...}`. This can be useful for library authors, though
* is generally not needed when building an app.
*
* ```svelte
* <script>
* 	import { createAttachmentKey } from 'svelte/attachments';
*
* 	const props = {
* 		class: 'cool',
* 		onclick: () => alert('clicked'),
* 		[createAttachmentKey()]: (node) => {
* 			node.textContent = 'attached!';
* 		}
* 	};
* <\/script>
*
* <button {...props}>click me</button>
* ```
* @since 5.29
*/
function createAttachmentKey() {
	return Symbol(ATTACHMENT_KEY);
}
//#endregion
//#region node_modules/bits-ui/node_modules/svelte-toolbelt/dist/utils/attach-ref.js
/**
* Creates a Svelte Attachment that attaches a DOM element to a ref.
* The ref can be either a WritableBox or a callback function.
*
* @param ref - Either a WritableBox to store the element in, or a callback function that receives the element
* @param onChange - Optional callback that fires when the ref changes
* @returns An object with a spreadable attachment key that should be spread onto the element
*
* @example
* // Using with WritableBox
* const ref = box<HTMLDivElement | null>(null);
* <div {...attachRef(ref)}>Content</div>
*
* @example
* // Using with callback
* <div {...attachRef((node) => myNode = node)}>Content</div>
*
* @example
* // Using with onChange
* <div {...attachRef(ref, (node) => console.log(node))}>Content</div>
*/
function attachRef(ref, onChange) {
	return { [createAttachmentKey()]: (node) => {
		if (isBox(ref)) {
			ref.current = node;
			run(() => onChange?.(node));
			return () => {
				if ("isConnected" in node && node.isConnected) return;
				ref.current = null;
				onChange?.(null);
			};
		}
		ref(node);
		run(() => onChange?.(node));
		return () => {
			if ("isConnected" in node && node.isConnected) return;
			ref(null);
			onChange?.(null);
		};
	} };
}
//#endregion
//#region node_modules/bits-ui/dist/internal/attrs.js
function boolToStr(condition) {
	return condition ? "true" : "false";
}
function boolToEmptyStrOrUndef(condition) {
	return condition ? "" : void 0;
}
function boolToTrueOrUndef(condition) {
	return condition ? true : void 0;
}
function getDataOpenClosed(condition) {
	return condition ? "open" : "closed";
}
function getDataTransitionAttrs(state) {
	if (state === "starting") return { "data-starting-style": "" };
	if (state === "ending") return { "data-ending-style": "" };
	return {};
}
function getAriaChecked(checked, indeterminate) {
	if (indeterminate) return "mixed";
	return checked ? "true" : "false";
}
var BitsAttrs = class {
	#variant;
	#prefix;
	attrs;
	constructor(config) {
		this.#variant = config.getVariant ? config.getVariant() : null;
		this.#prefix = this.#variant ? `data-${this.#variant}-` : `data-${config.component}-`;
		this.getAttr = this.getAttr.bind(this);
		this.selector = this.selector.bind(this);
		this.attrs = Object.fromEntries(config.parts.map((part) => [part, this.getAttr(part)]));
	}
	getAttr(part, variantOverride) {
		if (variantOverride) return `data-${variantOverride}-${part}`;
		return `${this.#prefix}${part}`;
	}
	selector(part, variantOverride) {
		return `[${this.getAttr(part, variantOverride)}]`;
	}
};
function createBitsAttrs(config) {
	const bitsAttrs = new BitsAttrs(config);
	return {
		...bitsAttrs.attrs,
		selector: bitsAttrs.selector,
		getAttr: bitsAttrs.getAttr
	};
}
//#endregion
//#region node_modules/bits-ui/dist/internal/kbd-constants.js
var ARROW_DOWN = "ArrowDown";
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
var ARROW_UP = "ArrowUp";
var ENTER = "Enter";
var HOME = "Home";
var PAGE_DOWN = "PageDown";
var PAGE_UP = "PageUp";
//#endregion
//#region node_modules/bits-ui/dist/internal/locale.js
/**
* Detects the text direction in the element.
* @returns {Direction} The text direction ('ltr' for left-to-right or 'rtl' for right-to-left).
*/
function getElemDirection(elem) {
	return window.getComputedStyle(elem).getPropertyValue("direction");
}
//#endregion
//#region node_modules/bits-ui/dist/internal/get-directional-keys.js
var FIRST_KEYS$1 = [
	ARROW_DOWN,
	PAGE_UP,
	HOME
];
var LAST_KEYS$1 = [
	ARROW_UP,
	PAGE_DOWN,
	"End"
];
[...FIRST_KEYS$1, ...LAST_KEYS$1];
/**
* A utility function that returns the next key based on the direction and orientation.
*/
function getNextKey(dir = "ltr", orientation = "horizontal") {
	return {
		horizontal: dir === "rtl" ? ARROW_LEFT : ARROW_RIGHT,
		vertical: ARROW_DOWN
	}[orientation];
}
/**
* A utility function that returns the previous key based on the direction and orientation.
*/
function getPrevKey(dir = "ltr", orientation = "horizontal") {
	return {
		horizontal: dir === "rtl" ? ARROW_RIGHT : ARROW_LEFT,
		vertical: ARROW_UP
	}[orientation];
}
/**
* A utility function that returns the next and previous keys based on the direction
* and orientation.
*/
function getDirectionalKeys(dir = "ltr", orientation = "horizontal") {
	if (!["ltr", "rtl"].includes(dir)) dir = "ltr";
	if (!["horizontal", "vertical"].includes(orientation)) orientation = "horizontal";
	return {
		nextKey: getNextKey(dir, orientation),
		prevKey: getPrevKey(dir, orientation)
	};
}
//#endregion
//#region node_modules/bits-ui/dist/internal/is.js
var isBrowser = typeof document !== "undefined";
var isIOS = getIsIOS();
function getIsIOS() {
	return isBrowser && window?.navigator?.userAgent && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function isHTMLElement(element) {
	return element instanceof HTMLElement;
}
function isElement(element) {
	return element instanceof Element;
}
function isElementOrSVGElement(element) {
	return element instanceof Element || element instanceof SVGElement;
}
function isTouch(e) {
	return e.pointerType === "touch";
}
function isFocusVisible(element) {
	return element.matches(":focus-visible");
}
function isNotNull(value) {
	return value !== null;
}
/**
* Determines if the provided object is a valid `HTMLInputElement` with
* a `select` method available.
*/
function isSelectableInput(element) {
	return element instanceof HTMLInputElement && "select" in element;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/roving-focus-group.js
var RovingFocusGroup = class {
	#opts;
	#currentTabStopId = box(null);
	constructor(opts) {
		this.#opts = opts;
	}
	getCandidateNodes() {
		return [];
	}
	focusFirstCandidate() {
		const items = this.getCandidateNodes();
		if (!items.length) return;
		items[0]?.focus();
	}
	handleKeydown(node, e, both = false) {
		const rootNode = this.#opts.rootNode.current;
		if (!rootNode || !node) return;
		const items = this.getCandidateNodes();
		if (!items.length) return;
		const currentIndex = items.indexOf(node);
		const { nextKey, prevKey } = getDirectionalKeys(getElemDirection(rootNode), this.#opts.orientation.current);
		const loop = this.#opts.loop.current;
		const keyToIndex = {
			[nextKey]: currentIndex + 1,
			[prevKey]: currentIndex - 1,
			[HOME]: 0,
			["End"]: items.length - 1
		};
		if (both) {
			const altNextKey = nextKey === "ArrowDown" ? ARROW_RIGHT : ARROW_DOWN;
			const altPrevKey = prevKey === "ArrowUp" ? ARROW_LEFT : ARROW_UP;
			keyToIndex[altNextKey] = currentIndex + 1;
			keyToIndex[altPrevKey] = currentIndex - 1;
		}
		let itemIndex = keyToIndex[e.key];
		if (itemIndex === void 0) return;
		e.preventDefault();
		if (itemIndex < 0 && loop) itemIndex = items.length - 1;
		else if (itemIndex === items.length && loop) itemIndex = 0;
		const itemToFocus = items[itemIndex];
		if (!itemToFocus) return;
		itemToFocus.focus();
		this.#currentTabStopId.current = itemToFocus.id;
		this.#opts.onCandidateFocus?.(itemToFocus);
		return itemToFocus;
	}
	getTabIndex(node) {
		const items = this.getCandidateNodes();
		const anyActive = this.#currentTabStopId.current !== null;
		if (node && !anyActive && items[0] === node) {
			this.#currentTabStopId.current = node.id;
			return 0;
		} else if (node?.id === this.#currentTabStopId.current) return 0;
		return -1;
	}
	setCurrentTabStopId(id) {
		this.#currentTabStopId.current = id;
	}
	focusCurrentTabStop() {
		const currentTabStopId = this.#currentTabStopId.current;
		if (!currentTabStopId) return;
		const currentTabStop = this.#opts.rootNode.current?.querySelector(`#${currentTabStopId}`);
		if (!currentTabStop || !isHTMLElement(currentTabStop)) return;
		currentTabStop.focus();
	}
};
//#endregion
//#region node_modules/bits-ui/dist/internal/animations-complete.js
var AnimationsComplete = class {
	#opts;
	#currentFrame = null;
	#observer = null;
	#runId = 0;
	constructor(opts) {
		this.#opts = opts;
	}
	#cleanup() {
		if (this.#currentFrame !== null) {
			window.cancelAnimationFrame(this.#currentFrame);
			this.#currentFrame = null;
		}
		this.#observer?.disconnect();
		this.#observer = null;
		this.#runId++;
	}
	run(fn) {
		this.#cleanup();
		const node = this.#opts.ref.current;
		if (!node) return;
		if (typeof node.getAnimations !== "function") {
			this.#executeCallback(fn);
			return;
		}
		const runId = this.#runId;
		const executeIfCurrent = () => {
			if (runId !== this.#runId) return;
			this.#executeCallback(fn);
		};
		const waitForAnimations = () => {
			if (runId !== this.#runId) return;
			const animations = node.getAnimations();
			if (animations.length === 0) {
				executeIfCurrent();
				return;
			}
			Promise.all(animations.map((animation) => animation.finished)).then(() => {
				executeIfCurrent();
			}).catch(() => {
				if (runId !== this.#runId) return;
				if (node.getAnimations().some((animation) => animation.pending || animation.playState !== "finished")) {
					waitForAnimations();
					return;
				}
				executeIfCurrent();
			});
		};
		const requestWaitForAnimations = () => {
			this.#currentFrame = window.requestAnimationFrame(() => {
				this.#currentFrame = null;
				waitForAnimations();
			});
		};
		if (!this.#opts.afterTick.current) {
			requestWaitForAnimations();
			return;
		}
		this.#currentFrame = window.requestAnimationFrame(() => {
			this.#currentFrame = null;
			const startingStyleAttr = "data-starting-style";
			if (!node.hasAttribute(startingStyleAttr)) {
				requestWaitForAnimations();
				return;
			}
			this.#observer = new MutationObserver(() => {
				if (runId !== this.#runId) return;
				if (node.hasAttribute(startingStyleAttr)) return;
				this.#observer?.disconnect();
				this.#observer = null;
				requestWaitForAnimations();
			});
			this.#observer.observe(node, {
				attributes: true,
				attributeFilter: [startingStyleAttr]
			});
		});
	}
	#executeCallback(fn) {
		const execute = () => {
			fn();
		};
		if (this.#opts.afterTick) afterTick(execute);
		else execute();
	}
};
//#endregion
//#region node_modules/bits-ui/dist/internal/presence-manager.svelte.js
var PresenceManager = class {
	#opts;
	#enabled;
	#afterAnimations;
	#shouldRender = false;
	#transitionStatus = void 0;
	#hasMounted = false;
	#transitionFrame = null;
	constructor(opts) {
		this.#opts = opts;
		this.#shouldRender = opts.open.current;
		this.#enabled = opts.enabled ?? true;
		this.#afterAnimations = new AnimationsComplete({
			ref: this.#opts.ref,
			afterTick: this.#opts.open
		});
		watch(() => this.#opts.open.current, (isOpen) => {
			if (!this.#hasMounted) {
				this.#hasMounted = true;
				return;
			}
			this.#clearTransitionFrame();
			if (!isOpen && this.#opts.shouldSkipExitAnimation?.()) {
				this.#shouldRender = false;
				this.#transitionStatus = void 0;
				this.#opts.onComplete?.();
				return;
			}
			if (isOpen) this.#shouldRender = true;
			this.#transitionStatus = isOpen ? "starting" : "ending";
			if (isOpen) this.#transitionFrame = window.requestAnimationFrame(() => {
				this.#transitionFrame = null;
				if (this.#opts.open.current) this.#transitionStatus = void 0;
			});
			if (!this.#enabled) {
				if (!isOpen) this.#shouldRender = false;
				this.#transitionStatus = void 0;
				this.#opts.onComplete?.();
				return;
			}
			this.#afterAnimations.run(() => {
				if (isOpen === this.#opts.open.current) {
					if (!this.#opts.open.current) this.#shouldRender = false;
					this.#transitionStatus = void 0;
					this.#opts.onComplete?.();
				}
			});
		});
	}
	get shouldRender() {
		return this.#shouldRender;
	}
	get transitionStatus() {
		return this.#transitionStatus;
	}
	#clearTransitionFrame() {
		if (this.#transitionFrame === null) return;
		window.cancelAnimationFrame(this.#transitionFrame);
		this.#transitionFrame = null;
	}
};
//#endregion
//#region node_modules/bits-ui/dist/internal/noop.js
/**
* A no operation function (does nothing)
*/
function noop() {}
//#endregion
//#region node_modules/bits-ui/dist/internal/create-id.js
function createId(prefixOrUid, uid) {
	if (uid === void 0) return `bits-${prefixOrUid}`;
	return `bits-${prefixOrUid}-${uid}`;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/portal/portal-consumer.svelte
function Portal_consumer($$renderer, $$props) {
	const { children } = $$props;
	$$renderer.push(`<!---->`);
	children?.($$renderer);
	$$renderer.push(`<!---->`);
	$$renderer.push(`<!---->`);
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/config/bits-config.js
var BitsConfigContext = new Context("BitsConfig");
/**
* Gets the current Bits UI configuration state from the context.
*
* Returns a default configuration (where all values are `undefined`) if no configuration is found.
*/
function getBitsConfig() {
	const fallback = new BitsConfigState(null, {});
	return BitsConfigContext.getOr(fallback).opts;
}
/**
* Configuration state that inherits from parent configurations.
*
* @example
* Config resolution:
* ```
* Level 1: { defaultPortalTo: "#some-element", theme: "dark" }
* Level 2: { spacing: "large" } // inherits defaultPortalTo="#some-element", theme="dark"
* Level 3: { theme: "light" }   // inherits defaultPortalTo="#some-element", spacing="large", overrides theme="light"
* ```
*/
var BitsConfigState = class {
	opts;
	constructor(parent, opts) {
		const resolveConfigOption = createConfigResolver(parent, opts);
		this.opts = {
			defaultPortalTo: resolveConfigOption((config) => config.defaultPortalTo),
			defaultLocale: resolveConfigOption((config) => config.defaultLocale)
		};
	}
};
/**
* Returns a config resolver that resolves a given config option's value.
*
* The resolver creates reactive boxes that resolve config option values using this priority:
* 1. Current level's value (if defined)
* 2. Parent level's value (if defined and current is undefined)
* 3. `undefined` (if no value is found in either parent or child)
*
* @param parent - Parent configuration state (null if this is root level)
* @param currentOpts - Current level's configuration options
*
* @example
* ```typescript
* // Given this hierarchy:
* // Root: { defaultPortalTo: "#some-element" }
* // Child: { someOtherProp: "value" } // no defaultPortalTo specified
*
* const resolveConfigOption = createConfigResolver(parent, opts);
* const portalTo = resolveConfigOption(config => config.defaultPortalTo);
*
* // portalTo.current === "#some-element" (inherited from parent)
* // even when child didn't specify `defaultPortalTo`
* ```
*/
function createConfigResolver(parent, currentOpts) {
	return (getter) => {
		return boxWith(() => {
			const value = getter(currentOpts)?.current;
			if (value !== void 0) return value;
			if (parent === null) return void 0;
			return getter(parent.opts)?.current;
		});
	};
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/config/prop-resolvers.js
/**
* Creates a generic prop resolver that follows a standard priority chain:
* 1. The getter's prop value (if defined)
* 2. The config default value (if no getter prop value is defined)
* 3. The fallback value (if no config value found)
*/
function createPropResolver(configOption, fallback) {
	return (getProp) => {
		const config = getBitsConfig();
		return boxWith(() => {
			const propValue = getProp();
			if (propValue !== void 0) return propValue;
			const option = configOption(config).current;
			if (option !== void 0) return option;
			return fallback;
		});
	};
}
/**
* Resolves a locale value using the prop, the config default, or a fallback.
*
* Default value: `"en"`
*/
var resolveLocaleProp = createPropResolver((config) => config.defaultLocale, "en");
/**
* Resolves a portal's `to` value using the prop, the config default, or a fallback.
*
* Default value: `"body"`
*/
var resolvePortalToProp = createPropResolver((config) => config.defaultPortalTo, "body");
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/portal/portal.svelte
function Portal($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { to: toProp, children, disabled } = $$props;
		const to = resolvePortalToProp(() => toProp);
		const context = getAllContexts();
		let target = derived$1(getTarget);
		function getTarget() {
			if (!isBrowser || disabled) return null;
			let localTarget = null;
			if (typeof to.current === "string") localTarget = document.querySelector(to.current);
			else localTarget = to.current;
			return localTarget;
		}
		let instance;
		function unmountInstance() {
			if (instance) {
				unmount(instance);
				instance = null;
			}
		}
		watch([() => target(), () => disabled], ([target, disabled]) => {
			if (!target || disabled) {
				unmountInstance();
				return;
			}
			instance = mount(Portal_consumer, {
				target,
				props: { children },
				context
			});
			return () => {
				unmountInstance();
			};
		});
		if (disabled) {
			$$renderer.push("<!--[0-->");
			children?.($$renderer);
			$$renderer.push(`<!---->`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region node_modules/bits-ui/dist/internal/events.js
/**
* Creates a typed event dispatcher and listener pair for custom events
* @template T - The type of data that will be passed in the event detail
* @param eventName - The name of the custom event
* @param options - CustomEvent options (bubbles, cancelable, etc.)
*/
var CustomEventDispatcher = class {
	eventName;
	options;
	constructor(eventName, options = {
		bubbles: true,
		cancelable: true
	}) {
		this.eventName = eventName;
		this.options = options;
	}
	createEvent(detail) {
		return new CustomEvent(this.eventName, {
			...this.options,
			detail
		});
	}
	dispatch(element, detail) {
		const event = this.createEvent(detail);
		element.dispatchEvent(event);
		return event;
	}
	listen(element, callback, options) {
		const handler = (event) => {
			callback(event);
		};
		return on(element, this.eventName, handler, options);
	}
};
//#endregion
//#region node_modules/bits-ui/dist/internal/debounce.js
function debounce(fn, wait = 500) {
	let timeout = null;
	const debounced = (...args) => {
		if (timeout !== null) clearTimeout(timeout);
		timeout = setTimeout(() => {
			fn(...args);
		}, wait);
	};
	debounced.destroy = () => {
		if (timeout !== null) {
			clearTimeout(timeout);
			timeout = null;
		}
	};
	return debounced;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/elements.js
function isOrContainsTarget(node, target) {
	return node === target || node.contains(target);
}
function getOwnerDocument(el) {
	return el?.ownerDocument ?? document;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/dom.js
/**
* Determines if the click event truly occurred outside the content node.
* This was added to handle password managers and other elements that may be injected
* into the DOM but visually appear inside the content.
*/
function isClickTrulyOutside(event, contentNode) {
	const { clientX, clientY } = event;
	const rect = contentNode.getBoundingClientRect();
	return clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/menu/utils.js
var SELECTION_KEYS = [ENTER, " "];
var FIRST_KEYS = [
	ARROW_DOWN,
	PAGE_UP,
	HOME
];
var LAST_KEYS = [
	ARROW_UP,
	PAGE_DOWN,
	"End"
];
var FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
[...SELECTION_KEYS], [...SELECTION_KEYS];
function isMouseEvent(event) {
	return event.pointerType === "mouse";
}
//#endregion
//#region node_modules/bits-ui/dist/internal/focus.js
/**
* A utility function that focuses an element.
*/
function focus(element, { select = false } = {}) {
	if (!element || !element.focus) return;
	const doc = getDocument(element);
	if (doc.activeElement === element) return;
	const previouslyFocusedElement = doc.activeElement;
	element.focus({ preventScroll: true });
	if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select();
}
/**
* Attempts to focus the first element in a list of candidates.
* Stops when focus is successful.
*/
function focusFirst(candidates, { select = false } = {}, getActiveElement) {
	const previouslyFocusedElement = getActiveElement();
	for (const candidate of candidates) {
		focus(candidate, { select });
		if (getActiveElement() !== previouslyFocusedElement) return true;
	}
}
/**
* Returns a list of potential tabbable candidates.
*
* NOTE: This is only a close approximation. For example it doesn't take into account cases like when
* elements are not visible. This cannot be worked out easily by just reading a property, but rather
* necessitate runtime knowledge (computed styles, etc). We deal with these cases separately.
*
* See: https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker
* Credit: https://github.com/discord/focus-layers/blob/master/src/util/wrapFocus.tsx#L1
*/
function getTabbableCandidates(container) {
	const nodes = [];
	const walker = getDocument(container).createTreeWalker(container, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => {
		const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
		if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
		return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	while (walker.nextNode()) nodes.push(walker.currentNode);
	return nodes;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/is-using-keyboard/is-using-keyboard.svelte.js
var isUsingKeyboard = false;
var IsUsingKeyboard = class {
	static _refs = 0;
	static _cleanup;
	constructor() {}
	get current() {
		return isUsingKeyboard;
	}
	set current(value) {
		isUsingKeyboard = value;
	}
};
//#endregion
//#region node_modules/bits-ui/dist/internal/tabbable.js
function getTabbableOptions() {
	return {
		getShadowRoot: true,
		displayCheck: typeof ResizeObserver === "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
	};
}
/**
* Gets all tabbable elements in the body and finds the next/previous tabbable element
* from the `currentNode` based on the `direction` provided.
* @param currentNode - the node we want to get the next/previous tabbable from
*/
function getTabbableFrom(currentNode, direction) {
	if (!isTabbable(currentNode, getTabbableOptions())) return getTabbableFromFocusable(currentNode, direction);
	const doc = getDocument(currentNode);
	const allTabbable = tabbable(doc.body, getTabbableOptions());
	if (direction === "prev") allTabbable.reverse();
	const activeIndex = allTabbable.indexOf(currentNode);
	if (activeIndex === -1) return doc.body;
	return allTabbable.slice(activeIndex + 1)[0];
}
function getTabbableFromFocusable(currentNode, direction) {
	const doc = getDocument(currentNode);
	if (!isFocusable(currentNode, getTabbableOptions())) return doc.body;
	const allFocusable = focusable(doc.body, getTabbableOptions());
	if (direction === "prev") allFocusable.reverse();
	const activeIndex = allFocusable.indexOf(currentNode);
	if (activeIndex === -1) return doc.body;
	return allFocusable.slice(activeIndex + 1).find((node) => isTabbable(node, getTabbableOptions())) ?? doc.body;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/arrays.js
/**
* Splits an array into chunks of a given size.
* @param arr The array to split.
* @param size The size of each chunk.
* @returns An array of arrays, where each sub-array has `size` elements from the original array.
* @example ```ts
* const arr = [1, 2, 3, 4, 5, 6, 7, 8];
* const chunks = chunk(arr, 3);
* // chunks = [[1, 2, 3], [4, 5, 6], [7, 8]]
* ```
*/
function chunk(arr, size) {
	if (size <= 0) return [];
	const result = [];
	for (let i = 0; i < arr.length; i += size) result.push(arr.slice(i, i + size));
	return result;
}
/**
* Checks if the given index is valid for the given array.
*
* @param index - The index to check
* @param arr - The array to check
*/
function isValidIndex(index, arr) {
	return index >= 0 && index < arr.length;
}
/**
* Finds the next matching item from a list of values based on a search string.
*
* This function handles several special cases in typeahead behavior:
*
* 1. Space handling: When a search string ends with a space, it handles it specially:
*    - If there's only one match for the text before the space, it ignores the space
*    - If there are multiple matches and the current match already starts with the search prefix
*      followed by a space, it keeps the current match (doesn't change selection on space)
*    - Only after typing characters beyond the space will it move to a more specific match
*
* 2. Repeated character handling: If a search consists of repeated characters (e.g., "aaa"),
*    it treats it as a single character for matching purposes
*
* 3. Cycling behavior: The function wraps around the values array starting from the current match
*    to find the next appropriate match, creating a cycling selection behavior
*
* @param values - Array of string values to search through (e.g., the text content of menu items)
* @param search - The current search string typed by the user
* @param currentMatch - The currently selected/matched item, if any
* @returns The next matching value that should be selected, or undefined if no match is found
*/
function getNextMatch(values, search, currentMatch) {
	const lowerSearch = search.toLowerCase();
	if (lowerSearch.endsWith(" ")) {
		const searchWithoutSpace = lowerSearch.slice(0, -1);
		/**
		* If there's only one match for the prefix without space, we don't
		* watch to match with space.
		*/
		if (values.filter((value) => value.toLowerCase().startsWith(searchWithoutSpace)).length <= 1) return getNextMatch(values, searchWithoutSpace, currentMatch);
		const currentMatchLowercase = currentMatch?.toLowerCase();
		/**
		* If the current match already starts with the search prefix and has a space afterward,
		* and the user has only typed up to that space, keep the current match until they
		* disambiguate.
		*/
		if (currentMatchLowercase && currentMatchLowercase.startsWith(searchWithoutSpace) && currentMatchLowercase.charAt(searchWithoutSpace.length) === " " && search.trim() === searchWithoutSpace) return currentMatch;
		/**
		* With multiple matches, find items that match the full search string with space
		*/
		const spacedMatches = values.filter((value) => value.toLowerCase().startsWith(lowerSearch));
		/**
		* If we found matches with the space, use the first one that's not the current match
		*/
		if (spacedMatches.length > 0) {
			const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
			return wrapArray(spacedMatches, Math.max(currentMatchIndex, 0)).find((match) => match !== currentMatch) || currentMatch;
		}
	}
	const normalizedSearch = search.length > 1 && Array.from(search).every((char) => char === search[0]) ? search[0] : search;
	const normalizedLowerSearch = normalizedSearch.toLowerCase();
	const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
	let wrappedValues = wrapArray(values, Math.max(currentMatchIndex, 0));
	if (normalizedSearch.length === 1) wrappedValues = wrappedValues.filter((v) => v !== currentMatch);
	const nextMatch = wrappedValues.find((value) => value?.toLowerCase().startsWith(normalizedLowerSearch));
	return nextMatch !== currentMatch ? nextMatch : void 0;
}
/**
* Wraps an array around itself at a given start index
* Example: `wrapArray(['a', 'b', 'c', 'd'], 2) === ['c', 'd', 'a', 'b']`
*/
function wrapArray(array, startIndex) {
	return array.map((_, index) => array[(startIndex + index) % array.length]);
}
//#endregion
//#region node_modules/bits-ui/dist/internal/box-auto-reset.svelte.js
var defaultOptions = {
	afterMs: 1e4,
	onChange: noop
};
function boxAutoReset(defaultValue, options) {
	const { afterMs, onChange, getWindow } = {
		...defaultOptions,
		...options
	};
	let timeout = null;
	let value = defaultValue;
	function resetAfter() {
		return getWindow().setTimeout(() => {
			value = defaultValue;
			onChange?.(defaultValue);
		}, afterMs);
	}
	return boxWith(() => value, (v) => {
		value = v;
		onChange?.(v);
		if (timeout) getWindow().clearTimeout(timeout);
		timeout = resetAfter();
	});
}
//#endregion
//#region node_modules/bits-ui/dist/internal/dom-typeahead.svelte.js
var DOMTypeahead = class {
	#opts;
	#search;
	#onMatch = derived$1(() => {
		if (this.#opts.onMatch) return this.#opts.onMatch;
		return (node) => node.focus();
	});
	#getCurrentItem = derived$1(() => {
		if (this.#opts.getCurrentItem) return this.#opts.getCurrentItem;
		return this.#opts.getActiveElement;
	});
	constructor(opts) {
		this.#opts = opts;
		this.#search = boxAutoReset("", {
			afterMs: 1e3,
			getWindow: opts.getWindow
		});
		this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this);
		this.resetTypeahead = this.resetTypeahead.bind(this);
	}
	handleTypeaheadSearch(key, candidates) {
		if (!candidates.length) return;
		this.#search.current = this.#search.current + key;
		const currentItem = this.#getCurrentItem()();
		const currentMatch = candidates.find((item) => item === currentItem)?.textContent?.trim() ?? "";
		const nextMatch = getNextMatch(candidates.map((item) => item.textContent?.trim() ?? ""), this.#search.current, currentMatch);
		const newItem = candidates.find((item) => item.textContent?.trim() === nextMatch);
		if (newItem) this.#onMatch()(newItem);
		return newItem;
	}
	resetTypeahead() {
		this.#search.current = "";
	}
	get search() {
		return this.#search.current;
	}
};
//#endregion
//#region node_modules/bits-ui/dist/bits/menu/menu.svelte.js
var CONTEXT_MENU_TRIGGER_ATTR = "data-context-menu-trigger";
var CONTEXT_MENU_CONTENT_ATTR = "data-context-menu-content";
var MenuRootContext = new Context("Menu.Root");
var MenuMenuContext = new Context("Menu.Root | Menu.Sub");
var MenuContentContext = new Context("Menu.Content");
var MenuGroupContext = new Context("Menu.Group | Menu.RadioGroup");
new Context("Menu.RadioGroup");
new Context("Menu.CheckboxGroup");
var MenuOpenEvent = new CustomEventDispatcher("bitsmenuopen", {
	bubbles: false,
	cancelable: true
});
var menuAttrs = createBitsAttrs({
	component: "menu",
	parts: [
		"trigger",
		"content",
		"sub-trigger",
		"item",
		"group",
		"group-heading",
		"checkbox-group",
		"checkbox-item",
		"radio-group",
		"radio-item",
		"separator",
		"sub-content",
		"arrow"
	]
});
var MenuSubmenuIntent = class {
	#opts;
	#cleanupDocMove = null;
	#fallbackTimer = null;
	#active = false;
	#target = null;
	#apex = null;
	#pointerPoint = null;
	#launchPoint = null;
	constructor(opts) {
		this.#opts = opts;
		watch([
			opts.triggerNode,
			opts.contentNode,
			opts.enabled
		], ([triggerNode, contentNode, enabled]) => {
			this.#reset();
			if (!triggerNode || !contentNode || !enabled) return;
			const onTriggerMove = (e) => {
				if (!isMouseEvent(e)) return;
				this.#launchPoint = {
					x: e.clientX,
					y: e.clientY
				};
				if (!this.#active) this.#preview(e, "content");
			};
			const onTriggerLeave = (e) => {
				if (!isMouseEvent(e)) return;
				this.#engage(e, "content");
			};
			const onContentMove = (e) => {
				if (!isMouseEvent(e)) return;
				if (!this.#active) this.#preview(e, "trigger");
			};
			const onContentLeave = (e) => {
				if (!isMouseEvent(e)) return;
				if (isElement(e.relatedTarget)) {
					const selector = this.#opts.subContentSelector();
					const matchedSubContent = e.relatedTarget.closest(selector);
					if (matchedSubContent && matchedSubContent !== contentNode && matchedSubContent.id) {
						if (!!contentNode.querySelector(`[aria-controls="${matchedSubContent.id}"]`)) return;
					}
				}
				this.#engage(e, "trigger");
			};
			const onTriggerEnter = (e) => {
				if (!isMouseEvent(e)) return;
				this.#disengage();
			};
			const onContentEnter = (e) => {
				if (!isMouseEvent(e)) return;
				this.#disengage();
			};
			triggerNode.addEventListener("pointermove", onTriggerMove);
			triggerNode.addEventListener("pointerleave", onTriggerLeave);
			triggerNode.addEventListener("pointerenter", onTriggerEnter);
			contentNode.addEventListener("pointermove", onContentMove);
			contentNode.addEventListener("pointerleave", onContentLeave);
			contentNode.addEventListener("pointerenter", onContentEnter);
			return () => {
				triggerNode.removeEventListener("pointermove", onTriggerMove);
				triggerNode.removeEventListener("pointerleave", onTriggerLeave);
				triggerNode.removeEventListener("pointerenter", onTriggerEnter);
				contentNode.removeEventListener("pointermove", onContentMove);
				contentNode.removeEventListener("pointerleave", onContentLeave);
				contentNode.removeEventListener("pointerenter", onContentEnter);
				this.#reset();
			};
		});
	}
	#parentTargetRect() {
		const parent = this.#opts.parentContentNode();
		if (parent) return parent.getBoundingClientRect();
		return this.#opts.triggerNode()?.getBoundingClientRect() ?? null;
	}
	#computePolygons(pointerPt, target) {
		const triggerNode = this.#opts.triggerNode();
		const contentNode = this.#opts.contentNode();
		if (!triggerNode || !contentNode) return null;
		const triggerRect = triggerNode.getBoundingClientRect();
		const contentRect = contentNode.getBoundingClientRect();
		const side = getSide$1(triggerRect, contentRect);
		let apex;
		let targetRect;
		let sourceRect;
		if (target === "content") {
			apex = this.#active ? this.#apex ?? pointerPt : pointerPt;
			targetRect = contentRect;
		} else {
			apex = this.#launchPoint ?? pointerPt;
			targetRect = this.#parentTargetRect() ?? triggerRect;
			sourceRect = contentRect;
		}
		this.#apex = apex;
		return {
			corridor: getCorridorPolygon(triggerRect, contentRect, side),
			intent: getIntentPolygon(apex, targetRect, side, target, sourceRect),
			targetRect,
			side
		};
	}
	#isInSafeZone(pt, corridor, intent) {
		return isPointInPolygon$1(pt, corridor) || isPointInPolygon$1(pt, intent);
	}
	#preview(e, target) {
		const pt = {
			x: e.clientX,
			y: e.clientY
		};
		if (!this.#computePolygons(pt, target)) return;
		this.#target = target;
		this.#pointerPoint = pt;
	}
	#engage(e, target) {
		if (!this.#opts.enabled()) return;
		const triggerNode = this.#opts.triggerNode();
		const contentNode = this.#opts.contentNode();
		if (!triggerNode || !contentNode) return;
		const related = e.relatedTarget;
		if (isElement(related)) {
			if (target === "content" && contentNode.contains(related)) return;
			if (target === "trigger" && triggerNode.contains(related)) return;
		}
		const pt = {
			x: e.clientX,
			y: e.clientY
		};
		const geo = this.#computePolygons(pt, target);
		if (!geo) return;
		if (!isInsideRect$1(pt, geo.targetRect) && !this.#isInSafeZone(pt, geo.corridor, geo.intent)) {
			this.#clearVisuals();
			return;
		}
		this.#active = true;
		this.#target = target;
		this.#pointerPoint = pt;
		this.#opts.setIsPointerInTransit(true);
		this.#attachDocMove();
		this.#startFallback();
	}
	#disengageTimer = null;
	#disengage() {
		if (!this.#active) return;
		const wasReturning = this.#target === "trigger";
		this.#detachDocMove();
		this.#clearFallback();
		this.#active = false;
		this.#clearVisuals();
		if (wasReturning) {
			this.#clearDisengageTimer();
			this.#disengageTimer = setTimeout(() => {
				this.#disengageTimer = null;
				this.#opts.setIsPointerInTransit(false);
			}, 100);
		} else this.#opts.setIsPointerInTransit(false);
	}
	#clearDisengageTimer() {
		if (this.#disengageTimer === null) return;
		clearTimeout(this.#disengageTimer);
		this.#disengageTimer = null;
	}
	#intentExit() {
		const pointerPoint = this.#pointerPoint;
		this.#detachDocMove();
		this.#clearFallback();
		this.#clearDisengageTimer();
		this.#active = false;
		this.#opts.setIsPointerInTransit(false);
		this.#clearVisuals();
		this.#opts.onIntentExit(pointerPoint);
	}
	#reset() {
		this.#detachDocMove();
		this.#clearFallback();
		this.#clearDisengageTimer();
		if (this.#active) this.#opts.setIsPointerInTransit(false);
		this.#active = false;
		this.#target = null;
		this.#apex = null;
		this.#pointerPoint = null;
		this.#launchPoint = null;
	}
	#isPointerInDescendantSubContent(pt) {
		const contentNode = this.#opts.contentNode();
		if (!contentNode) return false;
		const el = contentNode.ownerDocument.elementFromPoint(pt.x, pt.y);
		if (!el) return false;
		const selector = this.#opts.subContentSelector();
		const subContent = el.closest(selector);
		if (!subContent || subContent === contentNode) return false;
		if (subContent.id) return !!contentNode.querySelector(`[aria-controls="${subContent.id}"]`);
		return false;
	}
	#onDocMove = (e) => {
		if (!this.#active || !this.#target) return;
		if (!isMouseEvent(e)) return;
		const triggerNode = this.#opts.triggerNode();
		const contentNode = this.#opts.contentNode();
		if (!triggerNode || !contentNode) {
			this.#intentExit();
			return;
		}
		this.#clearFallback();
		const pt = {
			x: e.clientX,
			y: e.clientY
		};
		this.#pointerPoint = pt;
		const triggerRect = triggerNode.getBoundingClientRect();
		const contentRect = contentNode.getBoundingClientRect();
		if (this.#target === "content" && isInsideRect$1(pt, contentRect)) {
			this.#disengage();
			return;
		}
		if (this.#target === "trigger" && isInsideInsetRect(pt, triggerRect, 4)) {
			this.#disengage();
			return;
		}
		if (this.#isPointerInDescendantSubContent(pt)) {
			this.#startFallback();
			return;
		}
		const geo = this.#computePolygons(pt, this.#target);
		if (!geo) {
			this.#intentExit();
			return;
		}
		if (this.#isInSafeZone(pt, geo.corridor, geo.intent)) {
			this.#startFallback();
			return;
		}
		this.#intentExit();
	};
	#attachDocMove() {
		if (this.#cleanupDocMove) return;
		const doc = getDocument(this.#opts.triggerNode() ?? this.#opts.contentNode());
		if (!doc) return;
		doc.addEventListener("pointermove", this.#onDocMove, true);
		this.#cleanupDocMove = () => {
			doc.removeEventListener("pointermove", this.#onDocMove, true);
			this.#cleanupDocMove = null;
		};
	}
	#detachDocMove() {
		this.#cleanupDocMove?.();
	}
	#startFallback() {
		this.#clearFallback();
		this.#fallbackTimer = setTimeout(() => {
			this.#fallbackTimer = null;
			if (this.#active) this.#intentExit();
		}, 500);
	}
	#clearFallback() {
		if (this.#fallbackTimer === null) return;
		clearTimeout(this.#fallbackTimer);
		this.#fallbackTimer = null;
	}
	#clearVisuals() {
		this.#target = null;
		this.#apex = null;
		this.#pointerPoint = null;
	}
};
function isPointInPolygon$1(point, polygon) {
	const { x, y } = point;
	let inside = false;
	for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
		const xi = polygon[i].x;
		const yi = polygon[i].y;
		const xj = polygon[j].x;
		const yj = polygon[j].y;
		if (yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
	}
	return inside;
}
function isInsideRect$1(point, rect) {
	return point.x >= rect.left && point.x <= rect.right && point.y >= rect.top && point.y <= rect.bottom;
}
function isInsideInsetRect(point, rect, inset) {
	return point.x >= rect.left + inset && point.x <= rect.right - inset && point.y >= rect.top + inset && point.y <= rect.bottom - inset;
}
function getSide$1(triggerRect, contentRect) {
	const triggerCenterX = triggerRect.left + triggerRect.width / 2;
	const triggerCenterY = triggerRect.top + triggerRect.height / 2;
	const contentCenterX = contentRect.left + contentRect.width / 2;
	const contentCenterY = contentRect.top + contentRect.height / 2;
	const deltaX = contentCenterX - triggerCenterX;
	const deltaY = contentCenterY - triggerCenterY;
	if (Math.abs(deltaX) > Math.abs(deltaY)) return deltaX > 0 ? "right" : "left";
	return deltaY > 0 ? "bottom" : "top";
}
function getCorridorPolygon(triggerRect, contentRect, side) {
	const buffer = 2;
	switch (side) {
		case "top": return [
			{
				x: Math.min(triggerRect.left, contentRect.left) - buffer,
				y: triggerRect.top
			},
			{
				x: Math.min(triggerRect.left, contentRect.left) - buffer,
				y: contentRect.bottom
			},
			{
				x: Math.max(triggerRect.right, contentRect.right) + buffer,
				y: contentRect.bottom
			},
			{
				x: Math.max(triggerRect.right, contentRect.right) + buffer,
				y: triggerRect.top
			}
		];
		case "bottom": return [
			{
				x: Math.min(triggerRect.left, contentRect.left) - buffer,
				y: triggerRect.bottom
			},
			{
				x: Math.min(triggerRect.left, contentRect.left) - buffer,
				y: contentRect.top
			},
			{
				x: Math.max(triggerRect.right, contentRect.right) + buffer,
				y: contentRect.top
			},
			{
				x: Math.max(triggerRect.right, contentRect.right) + buffer,
				y: triggerRect.bottom
			}
		];
		case "left": return [
			{
				x: triggerRect.left,
				y: Math.min(triggerRect.top, contentRect.top) - buffer
			},
			{
				x: contentRect.right,
				y: Math.min(triggerRect.top, contentRect.top) - buffer
			},
			{
				x: contentRect.right,
				y: Math.max(triggerRect.bottom, contentRect.bottom) + buffer
			},
			{
				x: triggerRect.left,
				y: Math.max(triggerRect.bottom, contentRect.bottom) + buffer
			}
		];
		case "right": return [
			{
				x: triggerRect.right,
				y: Math.min(triggerRect.top, contentRect.top) - buffer
			},
			{
				x: contentRect.left,
				y: Math.min(triggerRect.top, contentRect.top) - buffer
			},
			{
				x: contentRect.left,
				y: Math.max(triggerRect.bottom, contentRect.bottom) + buffer
			},
			{
				x: triggerRect.right,
				y: Math.max(triggerRect.bottom, contentRect.bottom) + buffer
			}
		];
	}
}
function getIntentPolygon(exitPoint, targetRect, side, target, sourceRect) {
	const edgeBuffer = 8;
	const effectiveSide = target === "trigger" ? flipSide(side) : side;
	const top = sourceRect ? Math.min(targetRect.top, sourceRect.top) - edgeBuffer : targetRect.top - edgeBuffer;
	const bottom = sourceRect ? Math.max(targetRect.bottom, sourceRect.bottom) + edgeBuffer : targetRect.bottom + edgeBuffer;
	const left = sourceRect ? Math.min(targetRect.left, sourceRect.left) - edgeBuffer : targetRect.left - edgeBuffer;
	const right = sourceRect ? Math.max(targetRect.right, sourceRect.right) + edgeBuffer : targetRect.right + edgeBuffer;
	switch (effectiveSide) {
		case "right": return [
			exitPoint,
			{
				x: targetRect.left,
				y: top
			},
			{
				x: targetRect.left,
				y: bottom
			}
		];
		case "left": return [
			exitPoint,
			{
				x: targetRect.right,
				y: top
			},
			{
				x: targetRect.right,
				y: bottom
			}
		];
		case "bottom": return [
			exitPoint,
			{
				x: left,
				y: targetRect.top
			},
			{
				x: right,
				y: targetRect.top
			}
		];
		case "top": return [
			exitPoint,
			{
				x: left,
				y: targetRect.bottom
			},
			{
				x: right,
				y: targetRect.bottom
			}
		];
	}
}
function flipSide(side) {
	switch (side) {
		case "top": return "bottom";
		case "bottom": return "top";
		case "left": return "right";
		case "right": return "left";
	}
}
var MenuRootState = class MenuRootState {
	static create(opts) {
		const root = new MenuRootState(opts);
		return MenuRootContext.set(root);
	}
	opts;
	isUsingKeyboard = new IsUsingKeyboard();
	ignoreCloseAutoFocus = false;
	isPointerInTransit = false;
	constructor(opts) {
		this.opts = opts;
	}
	getBitsAttr = (part) => {
		return menuAttrs.getAttr(part, this.opts.variant.current);
	};
};
var MenuMenuState = class MenuMenuState {
	static create(opts, root) {
		return MenuMenuContext.set(new MenuMenuState(opts, root, null));
	}
	opts;
	root;
	parentMenu;
	contentId = boxWith(() => "");
	contentNode = null;
	contentPresence;
	triggerNode = null;
	constructor(opts, root, parentMenu) {
		this.opts = opts;
		this.root = root;
		this.parentMenu = parentMenu;
		this.contentPresence = new PresenceManager({
			ref: boxWith(() => this.contentNode),
			open: this.opts.open,
			onComplete: () => {
				this.opts.onOpenChangeComplete.current(this.opts.open.current);
			},
			shouldSkipExitAnimation: () => {
				if (this.root.opts.variant.current !== "menubar" || this.parentMenu !== null) return false;
				return this.root.opts.shouldSkipExitAnimation?.() ?? false;
			}
		});
		if (parentMenu) watch(() => parentMenu.opts.open.current, () => {
			if (parentMenu.opts.open.current) return;
			this.opts.open.current = false;
		});
	}
	toggleOpen() {
		this.opts.open.current = !this.opts.open.current;
	}
	onOpen() {
		this.opts.open.current = true;
	}
	onClose() {
		this.opts.open.current = false;
	}
};
var MenuContentState = class MenuContentState {
	static create(opts) {
		return MenuContentContext.set(new MenuContentState(opts, MenuMenuContext.get()));
	}
	opts;
	parentMenu;
	rovingFocusGroup;
	domContext;
	attachment;
	search = "";
	#timer = 0;
	#handleTypeaheadSearch;
	mounted = false;
	#isSub;
	constructor(opts, parentMenu) {
		this.opts = opts;
		this.parentMenu = parentMenu;
		this.domContext = new DOMContext(opts.ref);
		this.attachment = attachRef(this.opts.ref, (v) => {
			if (this.parentMenu.contentNode !== v) this.parentMenu.contentNode = v;
		});
		parentMenu.contentId = opts.id;
		this.#isSub = opts.isSub ?? false;
		this.onkeydown = this.onkeydown.bind(this);
		this.onblur = this.onblur.bind(this);
		this.onfocus = this.onfocus.bind(this);
		this.handleInteractOutside = this.handleInteractOutside.bind(this);
		new MenuSubmenuIntent({
			contentNode: () => this.parentMenu.contentNode,
			triggerNode: () => this.parentMenu.triggerNode,
			parentContentNode: () => this.parentMenu.parentMenu?.contentNode ?? null,
			subContentSelector: () => `[${this.parentMenu.root.getBitsAttr("sub-content")}]`,
			enabled: () => this.parentMenu.opts.open.current && Boolean(this.parentMenu.triggerNode?.hasAttribute(this.parentMenu.root.getBitsAttr("sub-trigger"))),
			onIntentExit: (pointerPoint) => {
				this.parentMenu.opts.open.current = false;
				this.#dispatchPointerMoveToHoveredSubTrigger(pointerPoint);
			},
			setIsPointerInTransit: (value) => {
				this.parentMenu.root.isPointerInTransit = value;
			}
		});
		this.#handleTypeaheadSearch = new DOMTypeahead({
			getActiveElement: () => this.domContext.getActiveElement(),
			getWindow: () => this.domContext.getWindow()
		}).handleTypeaheadSearch;
		this.rovingFocusGroup = new RovingFocusGroup({
			rootNode: boxWith(() => this.parentMenu.contentNode),
			candidateAttr: this.parentMenu.root.getBitsAttr("item"),
			loop: this.opts.loop,
			orientation: boxWith(() => "vertical")
		});
		watch(() => this.parentMenu.contentNode, (contentNode) => {
			if (!contentNode) return;
			const handler = () => {
				afterTick(() => {
					if (!this.parentMenu.root.isUsingKeyboard.current) return;
					this.rovingFocusGroup.focusFirstCandidate();
				});
			};
			return MenuOpenEvent.listen(contentNode, handler);
		});
	}
	#getCandidateNodes() {
		const node = this.parentMenu.contentNode;
		if (!node) return [];
		return Array.from(node.querySelectorAll(`[${this.parentMenu.root.getBitsAttr("item")}]:not([data-disabled])`));
	}
	#isPointerMovingToSubmenu() {
		return this.parentMenu.root.isPointerInTransit;
	}
	#dispatchPointerMoveToHoveredSubTrigger(pointerPoint) {
		if (!pointerPoint) return;
		const parentContentNode = this.parentMenu.parentMenu?.contentNode;
		if (!parentContentNode) return;
		const hoveredNode = this.domContext.getDocument().elementFromPoint(pointerPoint.x, pointerPoint.y);
		if (!isElement(hoveredNode)) return;
		const hoveredSubTrigger = hoveredNode.closest(`[${this.parentMenu.root.getBitsAttr("sub-trigger")}]`);
		if (!hoveredSubTrigger || !parentContentNode.contains(hoveredSubTrigger)) return;
		if (hoveredSubTrigger === this.parentMenu.triggerNode) return;
		hoveredSubTrigger.dispatchEvent(new PointerEvent("pointermove", {
			bubbles: true,
			cancelable: true,
			pointerType: "mouse",
			clientX: pointerPoint.x,
			clientY: pointerPoint.y
		}));
	}
	onCloseAutoFocus = (e) => {
		this.opts.onCloseAutoFocus.current?.(e);
		if (e.defaultPrevented || this.#isSub) return;
		if (this.parentMenu.root.ignoreCloseAutoFocus) {
			e.preventDefault();
			return;
		}
		if (this.parentMenu.triggerNode && isTabbable(this.parentMenu.triggerNode)) {
			e.preventDefault();
			this.parentMenu.triggerNode.focus();
		}
	};
	handleTabKeyDown(e) {
		/**
		* We locate the root `menu`'s trigger by going up the tree until
		* we find a menu that has no parent. This will allow us to focus the next
		* tabbable element before/after the root trigger.
		*/
		let rootMenu = this.parentMenu;
		while (rootMenu.parentMenu !== null) rootMenu = rootMenu.parentMenu;
		if (!rootMenu.triggerNode) return;
		e.preventDefault();
		const nodeToFocus = getTabbableFrom(rootMenu.triggerNode, e.shiftKey ? "prev" : "next");
		if (nodeToFocus) {
			/**
			* We set a flag to ignore the `onCloseAutoFocus` event handler
			* as well as the fallbacks inside the focus scope to prevent
			* race conditions causing focus to fall back to the body even
			* though we're trying to focus the next tabbable element.
			*/
			this.parentMenu.root.ignoreCloseAutoFocus = true;
			rootMenu.onClose();
			afterTick(() => {
				nodeToFocus.focus();
				afterTick(() => {
					this.parentMenu.root.ignoreCloseAutoFocus = false;
				});
			});
		} else this.domContext.getDocument().body.focus();
	}
	onkeydown(e) {
		if (e.defaultPrevented) return;
		if (e.key === "Tab") {
			this.handleTabKeyDown(e);
			return;
		}
		const target = e.target;
		const currentTarget = e.currentTarget;
		if (!isHTMLElement(target) || !isHTMLElement(currentTarget)) return;
		const isKeydownInside = target.closest(`[${this.parentMenu.root.getBitsAttr("content")}]`)?.id === this.parentMenu.contentId.current;
		const isModifierKey = e.ctrlKey || e.altKey || e.metaKey;
		const isCharacterKey = e.key.length === 1;
		if (this.rovingFocusGroup.handleKeydown(target, e)) return;
		if (e.code === "Space") return;
		const candidateNodes = this.#getCandidateNodes();
		if (isKeydownInside) {
			if (!isModifierKey && isCharacterKey) this.#handleTypeaheadSearch(e.key, candidateNodes);
		}
		if (e.target?.id !== this.parentMenu.contentId.current) return;
		if (!FIRST_LAST_KEYS.includes(e.key)) return;
		e.preventDefault();
		if (LAST_KEYS.includes(e.key)) candidateNodes.reverse();
		focusFirst(candidateNodes, { select: false }, () => this.domContext.getActiveElement());
	}
	onblur(e) {
		if (!isElement(e.currentTarget)) return;
		if (!isElement(e.target)) return;
		if (!e.currentTarget.contains?.(e.target)) {
			this.domContext.getWindow().clearTimeout(this.#timer);
			this.search = "";
		}
	}
	onfocus(_) {
		if (!this.parentMenu.root.isUsingKeyboard.current) return;
		afterTick(() => this.rovingFocusGroup.focusFirstCandidate());
	}
	onItemEnter() {
		return this.#isPointerMovingToSubmenu();
	}
	onItemLeave(e) {
		if (e.currentTarget.hasAttribute(this.parentMenu.root.getBitsAttr("sub-trigger"))) return;
		if (this.#isPointerMovingToSubmenu() || this.parentMenu.root.isUsingKeyboard.current) return;
		this.parentMenu.contentNode?.focus({ preventScroll: true });
		this.rovingFocusGroup.setCurrentTabStopId("");
	}
	onTriggerLeave() {
		if (this.#isPointerMovingToSubmenu()) return true;
		return false;
	}
	handleInteractOutside(e) {
		if (!isElementOrSVGElement(e.target)) return;
		const triggerId = this.parentMenu.triggerNode?.id;
		if (e.target.id === triggerId) {
			e.preventDefault();
			return;
		}
		if (e.target.closest(`#${triggerId}`)) {
			e.preventDefault();
			return;
		}
		/**
		* when the menu closes due to an outside pointer interaction (for example,
		* clicking another dropdown trigger), avoid focusing this menu's trigger
		* to prevent stealing focus from the new interaction target.
		*/
		this.parentMenu.root.ignoreCloseAutoFocus = true;
		afterTick(() => {
			this.parentMenu.root.ignoreCloseAutoFocus = false;
		});
	}
	get shouldRender() {
		return this.parentMenu.contentPresence.shouldRender;
	}
	#snippetProps = derived$1(() => ({ open: this.parentMenu.opts.open.current }));
	get snippetProps() {
		return this.#snippetProps();
	}
	set snippetProps($$value) {
		return this.#snippetProps($$value);
	}
	#props = derived$1(() => ({
		id: this.opts.id.current,
		role: "menu",
		"aria-orientation": "vertical",
		[this.parentMenu.root.getBitsAttr("content")]: "",
		"data-state": getDataOpenClosed(this.parentMenu.opts.open.current),
		...getDataTransitionAttrs(this.parentMenu.contentPresence.transitionStatus),
		onkeydown: this.onkeydown,
		onblur: this.onblur,
		onfocus: this.onfocus,
		dir: this.parentMenu.root.opts.dir.current,
		style: {
			pointerEvents: "auto",
			contain: "layout style"
		},
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
	popperProps = { onCloseAutoFocus: (e) => this.onCloseAutoFocus(e) };
};
var MenuItemSharedState = class {
	opts;
	content;
	attachment;
	#isFocused = false;
	constructor(opts, content) {
		this.opts = opts;
		this.content = content;
		this.attachment = attachRef(this.opts.ref);
		this.onpointermove = this.onpointermove.bind(this);
		this.onpointerleave = this.onpointerleave.bind(this);
		this.onfocus = this.onfocus.bind(this);
		this.onblur = this.onblur.bind(this);
	}
	onpointermove(e) {
		if (e.defaultPrevented) return;
		if (!isMouseEvent(e)) return;
		if (this.opts.disabled.current) this.content.onItemLeave(e);
		else {
			if (this.content.onItemEnter()) return;
			const item = e.currentTarget;
			if (!isHTMLElement(item)) return;
			item.focus({ preventScroll: true });
		}
	}
	onpointerleave(e) {
		if (e.defaultPrevented) return;
		if (!isMouseEvent(e)) return;
		this.content.onItemLeave(e);
	}
	onfocus(e) {
		afterTick(() => {
			if (e.defaultPrevented || this.opts.disabled.current) return;
			this.#isFocused = true;
		});
	}
	onblur(e) {
		afterTick(() => {
			if (e.defaultPrevented) return;
			this.#isFocused = false;
		});
	}
	#props = derived$1(() => ({
		id: this.opts.id.current,
		tabindex: -1,
		role: "menuitem",
		"aria-disabled": boolToStr(this.opts.disabled.current),
		"data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
		"data-highlighted": this.#isFocused ? "" : void 0,
		[this.content.parentMenu.root.getBitsAttr("item")]: "",
		onpointermove: this.onpointermove,
		onpointerleave: this.onpointerleave,
		onfocus: this.onfocus,
		onblur: this.onblur,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var MenuItemState = class MenuItemState {
	static create(opts) {
		const item = new MenuItemSharedState(opts, MenuContentContext.get());
		return new MenuItemState(opts, item);
	}
	opts;
	item;
	root;
	#isPointerDown = false;
	constructor(opts, item) {
		this.opts = opts;
		this.item = item;
		this.root = item.content.parentMenu.root;
		this.onkeydown = this.onkeydown.bind(this);
		this.onclick = this.onclick.bind(this);
		this.onpointerdown = this.onpointerdown.bind(this);
		this.onpointerup = this.onpointerup.bind(this);
	}
	#handleSelect() {
		if (this.item.opts.disabled.current) return;
		const selectEvent = new CustomEvent("menuitemselect", {
			bubbles: true,
			cancelable: true
		});
		this.opts.onSelect.current(selectEvent);
		if (selectEvent.defaultPrevented) {
			this.item.content.parentMenu.root.isUsingKeyboard.current = false;
			return;
		}
		if (this.opts.closeOnSelect.current) this.item.content.parentMenu.root.opts.onClose();
	}
	onkeydown(e) {
		const isTypingAhead = this.item.content.search !== "";
		if (this.item.opts.disabled.current || isTypingAhead && e.key === " ") return;
		if (SELECTION_KEYS.includes(e.key)) {
			if (!isHTMLElement(e.currentTarget)) return;
			e.currentTarget.click();
			/**
			* We prevent default browser behavior for selection keys as they should trigger
			* a selection only:
			* - prevents space from scrolling the page.
			* - if keydown causes focus to move, prevents keydown from firing on the new target.
			*/
			e.preventDefault();
		}
	}
	onclick(_) {
		if (this.item.opts.disabled.current) return;
		this.#handleSelect();
	}
	onpointerup(e) {
		if (e.defaultPrevented) return;
		if (!this.#isPointerDown) {
			if (!isHTMLElement(e.currentTarget)) return;
			e.currentTarget?.click();
		}
	}
	onpointerdown(_) {
		this.#isPointerDown = true;
	}
	#props = derived$1(() => mergeProps(this.item.props, {
		onclick: this.onclick,
		onpointerdown: this.onpointerdown,
		onpointerup: this.onpointerup,
		onkeydown: this.onkeydown
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var MenuGroupState = class MenuGroupState {
	static create(opts) {
		return MenuGroupContext.set(new MenuGroupState(opts, MenuRootContext.get()));
	}
	opts;
	root;
	attachment;
	groupHeadingId = void 0;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref);
	}
	#props = derived$1(() => ({
		id: this.opts.id.current,
		role: "group",
		"aria-labelledby": this.groupHeadingId,
		[this.root.getBitsAttr("group")]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var MenuSeparatorState = class MenuSeparatorState {
	static create(opts) {
		return new MenuSeparatorState(opts, MenuRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref);
	}
	#props = derived$1(() => ({
		id: this.opts.id.current,
		role: "group",
		[this.root.getBitsAttr("separator")]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var DropdownMenuTriggerState = class DropdownMenuTriggerState {
	static create(opts) {
		return new DropdownMenuTriggerState(opts, MenuMenuContext.get());
	}
	opts;
	parentMenu;
	attachment;
	constructor(opts, parentMenu) {
		this.opts = opts;
		this.parentMenu = parentMenu;
		this.attachment = attachRef(this.opts.ref, (v) => this.parentMenu.triggerNode = v);
	}
	onclick = (e) => {
		/**
		* MacOS VoiceOver sends a click in Safari/Firefox bypassing the keydown event
		* when V0+Space is pressed. Since we already handle the keydown event and the
		* pointerdown events separately, we ignore it if the detail is not 0.
		*/
		if (this.opts.disabled.current || e.detail !== 0) return;
		this.parentMenu.toggleOpen();
		e.preventDefault();
	};
	onpointerdown = (e) => {
		if (this.opts.disabled.current) return;
		if (e.pointerType === "touch") return e.preventDefault();
		if (e.button === 0 && e.ctrlKey === false) {
			this.parentMenu.toggleOpen();
			if (!this.parentMenu.opts.open.current) e.preventDefault();
		}
	};
	onpointerup = (e) => {
		if (this.opts.disabled.current) return;
		if (e.pointerType === "touch") {
			e.preventDefault();
			this.parentMenu.toggleOpen();
		}
	};
	onkeydown = (e) => {
		if (this.opts.disabled.current) return;
		if (e.key === " " || e.key === "Enter") {
			this.parentMenu.toggleOpen();
			e.preventDefault();
			return;
		}
		if (e.key === "ArrowDown") {
			this.parentMenu.onOpen();
			e.preventDefault();
		}
	};
	#ariaControls = derived$1(() => {
		if (this.parentMenu.opts.open.current && this.parentMenu.contentId.current) return this.parentMenu.contentId.current;
	});
	#props = derived$1(() => ({
		id: this.opts.id.current,
		disabled: this.opts.disabled.current,
		"aria-haspopup": "menu",
		"aria-expanded": boolToStr(this.parentMenu.opts.open.current),
		"aria-controls": this.#ariaControls(),
		"data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
		"data-state": getDataOpenClosed(this.parentMenu.opts.open.current),
		[this.parentMenu.root.getBitsAttr("trigger")]: "",
		onclick: this.onclick,
		onpointerdown: this.onpointerdown,
		onpointerup: this.onpointerup,
		onkeydown: this.onkeydown,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/dismissible-layer/use-dismissable-layer.svelte.js
globalThis.bitsDismissableLayers ??= /* @__PURE__ */ new Map();
var DismissibleLayerState = class DismissibleLayerState {
	static create(opts) {
		return new DismissibleLayerState(opts);
	}
	opts;
	#interactOutsideProp;
	#behaviorType;
	#interceptedEvents = { pointerdown: false };
	#isResponsibleLayer = false;
	#isFocusInsideDOMTree = false;
	#documentObj = void 0;
	#onFocusOutside;
	#unsubClickListener = noop;
	constructor(opts) {
		this.opts = opts;
		this.#behaviorType = opts.interactOutsideBehavior;
		this.#interactOutsideProp = opts.onInteractOutside;
		this.#onFocusOutside = opts.onFocusOutside;
		let unsubEvents = noop;
		let pendingTimer = null;
		const clearPendingTimer = () => {
			if (pendingTimer != null) {
				clearTimeout(pendingTimer);
				pendingTimer = null;
			}
		};
		const cleanup = () => {
			clearPendingTimer();
			this.#resetState();
			globalThis.bitsDismissableLayers.delete(this);
			this.#handleInteractOutside.destroy();
			unsubEvents();
		};
		watch([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
			if (!this.opts.enabled.current || !this.opts.ref.current) return;
			clearPendingTimer();
			pendingTimer = afterSleep(1, () => {
				pendingTimer = null;
				if (!this.opts.ref.current) return;
				globalThis.bitsDismissableLayers.set(this, this.#behaviorType);
				unsubEvents();
				unsubEvents = this.#addEventListeners();
			});
			return cleanup;
		});
	}
	#handleFocus = (event) => {
		if (event.defaultPrevented) return;
		if (!this.opts.ref.current) return;
		afterTick(() => {
			if (!this.opts.ref.current || this.#isTargetWithinLayer(event.target)) return;
			if (event.target && !this.#isFocusInsideDOMTree) this.#onFocusOutside.current?.(event);
		});
	};
	#addEventListeners() {
		return executeCallbacks(
			/**
			* CAPTURE INTERACTION START
			* mark interaction-start event as intercepted.
			* mark responsible layer during interaction start
			* to avoid checking if is responsible layer during interaction end
			* when a new floating element may have been opened.
			*/
			on(this.#documentObj, "pointerdown", executeCallbacks(this.#markInterceptedEvent, this.#markResponsibleLayer), { capture: true }),
			/**
			* BUBBLE INTERACTION START
			* Mark interaction-start event as non-intercepted. Debounce `onInteractOutsideStart`
			* to avoid prematurely checking if other events were intercepted.
			*/
			on(this.#documentObj, "pointerdown", executeCallbacks(this.#markNonInterceptedEvent, this.#handleInteractOutside)),
			/**
			* HANDLE FOCUS OUTSIDE
			*/
			on(this.#documentObj, "focusin", this.#handleFocus)
		);
	}
	#handleDismiss = (e) => {
		let event = e;
		if (event.defaultPrevented) event = createWrappedEvent(e);
		this.#interactOutsideProp.current(e);
	};
	#handleInteractOutside = debounce((e) => {
		if (!this.opts.ref.current) {
			this.#unsubClickListener();
			return;
		}
		const isEventValid = this.opts.isValidEvent.current(e, this.opts.ref.current) || isValidEvent(e, this.opts.ref.current);
		if (!this.#isResponsibleLayer || this.#isAnyEventIntercepted() || !isEventValid) {
			this.#unsubClickListener();
			return;
		}
		let event = e;
		if (event.defaultPrevented) event = createWrappedEvent(event);
		if (this.#behaviorType.current !== "close" && this.#behaviorType.current !== "defer-otherwise-close") {
			this.#unsubClickListener();
			return;
		}
		if (e.pointerType === "touch") {
			this.#unsubClickListener();
			this.#unsubClickListener = on(this.#documentObj, "click", this.#handleDismiss, { once: true });
		} else this.#interactOutsideProp.current(event);
	}, 10);
	#markInterceptedEvent = (e) => {
		this.#interceptedEvents[e.type] = true;
	};
	#markNonInterceptedEvent = (e) => {
		this.#interceptedEvents[e.type] = false;
	};
	#markResponsibleLayer = () => {
		if (!this.opts.ref.current) return;
		this.#isResponsibleLayer = isResponsibleLayer(this.opts.ref.current);
	};
	#isTargetWithinLayer = (target) => {
		if (!this.opts.ref.current) return false;
		return isOrContainsTarget(this.opts.ref.current, target);
	};
	#resetState = debounce(() => {
		for (const eventType in this.#interceptedEvents) this.#interceptedEvents[eventType] = false;
		this.#isResponsibleLayer = false;
	}, 20);
	#isAnyEventIntercepted() {
		return Object.values(this.#interceptedEvents).some(Boolean);
	}
	#onfocuscapture = () => {
		this.#isFocusInsideDOMTree = true;
	};
	#onblurcapture = () => {
		this.#isFocusInsideDOMTree = false;
	};
	props = {
		onfocuscapture: this.#onfocuscapture,
		onblurcapture: this.#onblurcapture
	};
};
function getTopMostDismissableLayer(layersArr = [...globalThis.bitsDismissableLayers]) {
	return layersArr.findLast(([_, { current: behaviorType }]) => behaviorType === "close" || behaviorType === "ignore");
}
function isResponsibleLayer(node) {
	const layersArr = [...globalThis.bitsDismissableLayers];
	/**
	* We first check if we can find a top layer with `close` or `ignore`.
	* If that top layer was found and matches the provided node, then the node is
	* responsible for the outside interaction. Otherwise, we know that all layers defer so
	* the first layer is the responsible one.
	*/
	const topMostLayer = getTopMostDismissableLayer(layersArr);
	if (topMostLayer) return topMostLayer[0].opts.ref.current === node;
	const [firstLayerNode] = layersArr[0];
	return firstLayerNode.opts.ref.current === node;
}
function isValidEvent(e, node) {
	const target = e.target;
	if (!isElementOrSVGElement(target)) return false;
	const targetIsContextMenuTrigger = Boolean(target.closest(`[${CONTEXT_MENU_TRIGGER_ATTR}]`));
	const nodeIsContextMenu = Boolean(node.closest(`[${CONTEXT_MENU_CONTENT_ATTR}]`));
	if ("button" in e && e.button > 0 && !targetIsContextMenuTrigger) return false;
	if ("button" in e && e.button === 0 && targetIsContextMenuTrigger && nodeIsContextMenu) return true;
	if (targetIsContextMenuTrigger && nodeIsContextMenu) return false;
	return getOwnerDocument(target).documentElement.contains(target) && !isOrContainsTarget(node, target) && isClickTrulyOutside(e, node);
}
function createWrappedEvent(e) {
	const capturedCurrentTarget = e.currentTarget;
	const capturedTarget = e.target;
	let newEvent;
	if (e instanceof PointerEvent) newEvent = new PointerEvent(e.type, e);
	else newEvent = new PointerEvent("pointerdown", e);
	let isPrevented = false;
	return new Proxy(newEvent, { get: (target, prop) => {
		if (prop === "currentTarget") return capturedCurrentTarget;
		if (prop === "target") return capturedTarget;
		if (prop === "preventDefault") return () => {
			isPrevented = true;
			if (typeof target.preventDefault === "function") target.preventDefault();
		};
		if (prop === "defaultPrevented") return isPrevented;
		if (prop in target) return target[prop];
		return e[prop];
	} });
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/dismissible-layer/dismissible-layer.svelte
function Dismissible_layer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { interactOutsideBehavior = "close", onInteractOutside = noop, onFocusOutside = noop, id, children, enabled, isValidEvent = () => false, ref } = $$props;
		const dismissibleLayerState = DismissibleLayerState.create({
			id: boxWith(() => id),
			interactOutsideBehavior: boxWith(() => interactOutsideBehavior),
			onInteractOutside: boxWith(() => onInteractOutside),
			enabled: boxWith(() => enabled),
			onFocusOutside: boxWith(() => onFocusOutside),
			isValidEvent: boxWith(() => isValidEvent),
			ref
		});
		children?.($$renderer, { props: dismissibleLayerState.props });
		$$renderer.push(`<!---->`);
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/escape-layer/use-escape-layer.svelte.js
globalThis.bitsEscapeLayers ??= /* @__PURE__ */ new Map();
var EscapeLayerState = class EscapeLayerState {
	static create(opts) {
		return new EscapeLayerState(opts);
	}
	opts;
	domContext;
	constructor(opts) {
		this.opts = opts;
		this.domContext = new DOMContext(this.opts.ref);
		let unsubEvents = noop;
		watch(() => opts.enabled.current, (enabled) => {
			if (enabled) {
				globalThis.bitsEscapeLayers.set(this, opts.escapeKeydownBehavior);
				unsubEvents = this.#addEventListener();
			}
			return () => {
				unsubEvents();
				globalThis.bitsEscapeLayers.delete(this);
			};
		});
	}
	#addEventListener = () => {
		return on(this.domContext.getDocument(), "keydown", this.#onkeydown, { passive: false });
	};
	#onkeydown = (e) => {
		if (e.key !== "Escape" || !isResponsibleEscapeLayer(this)) return;
		const clonedEvent = new KeyboardEvent(e.type, e);
		e.preventDefault();
		const behaviorType = this.opts.escapeKeydownBehavior.current;
		if (behaviorType !== "close" && behaviorType !== "defer-otherwise-close") return;
		this.opts.onEscapeKeydown.current(clonedEvent);
	};
};
function isResponsibleEscapeLayer(instance) {
	const layersArr = [...globalThis.bitsEscapeLayers];
	/**
	* We first check if we can find a top layer with `close` or `ignore`.
	* If that top layer was found and matches the provided node, then the node is
	* responsible for the escape. Otherwise, we know that all layers defer so
	* the first layer is the responsible one.
	*/
	const topMostLayer = layersArr.findLast(([_, { current: behaviorType }]) => behaviorType === "close" || behaviorType === "ignore");
	if (topMostLayer) return topMostLayer[0] === instance;
	const [firstLayerNode] = layersArr[0];
	return firstLayerNode === instance;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/escape-layer/escape-layer.svelte
function Escape_layer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { escapeKeydownBehavior = "close", onEscapeKeydown = noop, children, enabled, ref } = $$props;
		EscapeLayerState.create({
			escapeKeydownBehavior: boxWith(() => escapeKeydownBehavior),
			onEscapeKeydown: boxWith(() => onEscapeKeydown),
			enabled: boxWith(() => enabled),
			ref
		});
		children?.($$renderer);
		$$renderer.push(`<!---->`);
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/focus-scope/focus-scope-manager.js
var FocusScopeManager = class FocusScopeManager {
	static instance;
	#scopeStack = simpleBox([]);
	#focusHistory = /* @__PURE__ */ new WeakMap();
	#preFocusHistory = /* @__PURE__ */ new WeakMap();
	static getInstance() {
		if (!this.instance) this.instance = new FocusScopeManager();
		return this.instance;
	}
	register(scope) {
		const current = this.getActive();
		if (current && current !== scope) current.pause();
		const activeElement = document.activeElement;
		if (activeElement && activeElement !== document.body) this.#preFocusHistory.set(scope, activeElement);
		this.#scopeStack.current = this.#scopeStack.current.filter((s) => s !== scope);
		this.#scopeStack.current.unshift(scope);
	}
	unregister(scope) {
		this.#scopeStack.current = this.#scopeStack.current.filter((s) => s !== scope);
		const next = this.getActive();
		if (next) next.resume();
	}
	getActive() {
		return this.#scopeStack.current[0];
	}
	setFocusMemory(scope, element) {
		this.#focusHistory.set(scope, element);
	}
	getFocusMemory(scope) {
		return this.#focusHistory.get(scope);
	}
	isActiveScope(scope) {
		return this.getActive() === scope;
	}
	setPreFocusMemory(scope, element) {
		this.#preFocusHistory.set(scope, element);
	}
	getPreFocusMemory(scope) {
		return this.#preFocusHistory.get(scope);
	}
	clearPreFocusMemory(scope) {
		this.#preFocusHistory.delete(scope);
	}
};
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/focus-scope/focus-scope.svelte.js
var FocusScope = class FocusScope {
	#paused = false;
	#container = null;
	#manager = FocusScopeManager.getInstance();
	#cleanupFns = [];
	#opts;
	constructor(opts) {
		this.#opts = opts;
	}
	get paused() {
		return this.#paused;
	}
	pause() {
		this.#paused = true;
	}
	resume() {
		this.#paused = false;
	}
	#cleanup() {
		for (const fn of this.#cleanupFns) fn();
		this.#cleanupFns = [];
	}
	mount(container) {
		if (this.#container) this.unmount();
		this.#container = container;
		this.#manager.register(this);
		this.#setupEventListeners();
		this.#handleOpenAutoFocus();
	}
	unmount() {
		if (!this.#container) return;
		this.#cleanup();
		this.#handleCloseAutoFocus();
		this.#manager.unregister(this);
		this.#manager.clearPreFocusMemory(this);
		this.#container = null;
	}
	#handleOpenAutoFocus() {
		if (!this.#container) return;
		const event = new CustomEvent("focusScope.onOpenAutoFocus", {
			bubbles: false,
			cancelable: true
		});
		this.#opts.onOpenAutoFocus.current(event);
		if (!event.defaultPrevented) requestAnimationFrame(() => {
			if (!this.#container) return;
			const firstTabbable = this.#getFirstTabbable();
			if (firstTabbable) {
				firstTabbable.focus();
				this.#manager.setFocusMemory(this, firstTabbable);
			} else this.#container.focus();
		});
	}
	#handleCloseAutoFocus() {
		const event = new CustomEvent("focusScope.onCloseAutoFocus", {
			bubbles: false,
			cancelable: true
		});
		this.#opts.onCloseAutoFocus.current?.(event);
		if (!event.defaultPrevented) {
			const preFocusedElement = this.#manager.getPreFocusMemory(this);
			if (preFocusedElement && document.contains(preFocusedElement)) try {
				preFocusedElement.focus();
			} catch {
				document.body.focus();
			}
		}
	}
	#setupEventListeners() {
		if (!this.#container || !this.#opts.trap.current) return;
		const container = this.#container;
		const doc = container.ownerDocument;
		const handleFocus = (e) => {
			if (this.#paused || !this.#manager.isActiveScope(this)) return;
			const target = e.target;
			if (!target) return;
			if (container.contains(target)) this.#manager.setFocusMemory(this, target);
			else {
				const lastFocused = this.#manager.getFocusMemory(this);
				if (lastFocused && container.contains(lastFocused) && isFocusable(lastFocused)) {
					e.preventDefault();
					lastFocused.focus();
				} else {
					const firstTabbable = this.#getFirstTabbable();
					const firstFocusable = this.#getAllFocusables()[0];
					(firstTabbable || firstFocusable || container).focus();
				}
			}
		};
		const handleKeydown = (e) => {
			if (!this.#opts.loop || this.#paused || e.key !== "Tab") return;
			if (!this.#manager.isActiveScope(this)) return;
			const tabbables = this.#getTabbables();
			if (tabbables.length === 0) return;
			const first = tabbables[0];
			const last = tabbables[tabbables.length - 1];
			if (!e.shiftKey && doc.activeElement === last) {
				e.preventDefault();
				first.focus();
			} else if (e.shiftKey && doc.activeElement === first) {
				e.preventDefault();
				last.focus();
			}
		};
		this.#cleanupFns.push(on(doc, "focusin", handleFocus, { capture: true }), on(container, "keydown", handleKeydown));
		const observer = new MutationObserver(() => {
			const lastFocused = this.#manager.getFocusMemory(this);
			if (lastFocused && !container.contains(lastFocused)) {
				const firstTabbable = this.#getFirstTabbable();
				const firstFocusable = this.#getAllFocusables()[0];
				const elementToFocus = firstTabbable || firstFocusable;
				if (elementToFocus) {
					elementToFocus.focus();
					this.#manager.setFocusMemory(this, elementToFocus);
				} else container.focus();
			}
		});
		observer.observe(container, {
			childList: true,
			subtree: true
		});
		this.#cleanupFns.push(() => observer.disconnect());
	}
	#getTabbables() {
		if (!this.#container) return [];
		return tabbable(this.#container, {
			includeContainer: false,
			getShadowRoot: true
		});
	}
	#getFirstTabbable() {
		return this.#getTabbables()[0] || null;
	}
	#getAllFocusables() {
		if (!this.#container) return [];
		return focusable(this.#container, {
			includeContainer: false,
			getShadowRoot: true
		});
	}
	static use(opts) {
		let scope = null;
		watch([() => opts.ref.current, () => opts.enabled.current], ([ref, enabled]) => {
			if (ref && enabled) {
				if (!scope) scope = new FocusScope(opts);
				scope.mount(ref);
			} else if (scope) {
				scope.unmount();
				scope = null;
			}
		});
		return { get props() {
			return { tabindex: -1 };
		} };
	}
};
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/focus-scope/focus-scope.svelte
function Focus_scope($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { enabled = false, trapFocus = false, loop = false, onCloseAutoFocus = noop, onOpenAutoFocus = noop, focusScope, ref } = $$props;
		const focusScopeState = FocusScope.use({
			enabled: boxWith(() => enabled),
			trap: boxWith(() => trapFocus),
			loop,
			onCloseAutoFocus: boxWith(() => onCloseAutoFocus),
			onOpenAutoFocus: boxWith(() => onOpenAutoFocus),
			ref
		});
		focusScope?.($$renderer, { props: focusScopeState.props });
		$$renderer.push(`<!---->`);
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/text-selection-layer/use-text-selection-layer.svelte.js
var noopPointer = () => {};
globalThis.bitsTextSelectionLayers ??= /* @__PURE__ */ new Map();
var TextSelectionLayerState = class TextSelectionLayerState {
	static create(opts) {
		return new TextSelectionLayerState(opts);
	}
	opts;
	domContext;
	#unsubSelectionLock = noop;
	#enabledSnapshot = false;
	#onPointerDownSnapshot = noopPointer;
	#onPointerUpSnapshot = noopPointer;
	constructor(opts) {
		this.opts = opts;
		this.domContext = new DOMContext(opts.ref);
		let unsubEvents = noop;
		watch(() => [
			this.opts.enabled.current,
			this.opts.onPointerDown.current,
			this.opts.onPointerUp.current
		], ([enabled, onPointerDown, onPointerUp]) => {
			this.#enabledSnapshot = enabled;
			this.#onPointerDownSnapshot = onPointerDown;
			this.#onPointerUpSnapshot = onPointerUp;
			if (enabled) {
				globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled);
				unsubEvents();
				unsubEvents = this.#addEventListeners();
			}
			return () => {
				this.#enabledSnapshot = false;
				unsubEvents();
				this.#resetSelectionLock();
				globalThis.bitsTextSelectionLayers.delete(this);
			};
		});
	}
	#addEventListeners() {
		return executeCallbacks(on(this.domContext.getDocument(), "pointerdown", this.#pointerdown), on(this.domContext.getDocument(), "pointerup", composeHandlers(this.#resetSelectionLock, this.#pointerupUserHandler)));
	}
	#pointerupUserHandler = (e) => {
		this.#onPointerUpSnapshot(e);
	};
	#pointerdown = (e) => {
		if (!this.#enabledSnapshot) return;
		const node = this.opts.ref.current;
		const target = e.target;
		if (!isHTMLElement(node) || !isHTMLElement(target)) return;
		/**
		* We only lock user-selection overflow if layer is the top most layer and
		* pointerdown occurred inside the node. You are still allowed to select text
		* outside the node provided pointerdown occurs outside the node.
		*/
		if (!isHighestLayer(this) || !contains(node, target)) return;
		this.#onPointerDownSnapshot(e);
		if (e.defaultPrevented) return;
		this.#unsubSelectionLock = preventTextSelectionOverflow(node, this.domContext.getDocument().body);
	};
	#resetSelectionLock = () => {
		this.#unsubSelectionLock();
		this.#unsubSelectionLock = noop;
	};
};
var getUserSelect = (node) => node.style.userSelect || node.style.webkitUserSelect;
function preventTextSelectionOverflow(node, body) {
	const originalBodyUserSelect = getUserSelect(body);
	const originalNodeUserSelect = getUserSelect(node);
	setUserSelect(body, "none");
	setUserSelect(node, "text");
	return () => {
		setUserSelect(body, originalBodyUserSelect);
		setUserSelect(node, originalNodeUserSelect);
	};
}
function setUserSelect(node, value) {
	node.style.userSelect = value;
	node.style.webkitUserSelect = value;
}
function isHighestLayer(instance) {
	const layersArr = [...globalThis.bitsTextSelectionLayers];
	if (!layersArr.length) return false;
	const highestLayer = layersArr.at(-1);
	if (!highestLayer) return false;
	return highestLayer[0] === instance;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/text-selection-layer/text-selection-layer.svelte
function Text_selection_layer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { preventOverflowTextSelection = true, onPointerDown = noop, onPointerUp = noop, id, children, enabled, ref } = $$props;
		TextSelectionLayerState.create({
			id: boxWith(() => id),
			onPointerDown: boxWith(() => onPointerDown),
			onPointerUp: boxWith(() => onPointerUp),
			enabled: boxWith(() => enabled && preventOverflowTextSelection),
			ref
		});
		children?.($$renderer);
		$$renderer.push(`<!---->`);
	});
}
//#endregion
//#region node_modules/bits-ui/dist/internal/use-id.js
globalThis.bitsIdCounter ??= { current: 0 };
/**
* Generates a unique ID based on a global counter.
*/
function useId(prefix = "bits") {
	globalThis.bitsIdCounter.current++;
	return `${prefix}-${globalThis.bitsIdCounter.current}`;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/shared-state.svelte.js
var SharedState = class {
	#factory;
	#subscribers = 0;
	#state;
	#scope;
	constructor(factory) {
		this.#factory = factory;
	}
	#dispose() {
		this.#subscribers -= 1;
		if (this.#scope && this.#subscribers <= 0) {
			this.#scope();
			this.#state = void 0;
			this.#scope = void 0;
		}
	}
	get(...args) {
		this.#subscribers += 1;
		if (this.#state === void 0) this.#scope = () => {};
		return this.#state;
	}
};
//#endregion
//#region node_modules/bits-ui/dist/internal/body-scroll-lock.svelte.js
var lockMap = new SvelteMap();
var initialBodyStyle = null;
var cleanupTimeoutId = null;
var isInCleanupTransition = false;
var anyLocked = boxWith(() => {
	for (const value of lockMap.values()) if (value) return true;
	return false;
});
/**
* We track the time we scheduled the cleanup to prevent race conditions
* when multiple locks are created/destroyed in the same tick, ensuring
* only the last one to schedule the cleanup will run.
*
* reference: https://github.com/huntabyte/bits-ui/issues/1639
*/
var cleanupScheduledAt = null;
var bodyLockStackCount = new SharedState(() => {
	function resetBodyStyle() {}
	function cancelPendingCleanup() {
		if (cleanupTimeoutId === null) return;
		window.clearTimeout(cleanupTimeoutId);
		cleanupTimeoutId = null;
	}
	function scheduleCleanupIfNoNewLocks(delay, callback) {
		cancelPendingCleanup();
		isInCleanupTransition = true;
		cleanupScheduledAt = Date.now();
		const currentCleanupId = cleanupScheduledAt;
		/**
		* We schedule the cleanup to run after a delay to allow new locks to register
		* that might have been added in the same tick as the current cleanup.
		*
		* If a new lock is added in the same tick, the cleanup will be cancelled and
		* a new cleanup will be scheduled.
		*
		* This is to prevent the cleanup from running too early and resetting the body
		* style before the new lock has had a chance to apply its styles.
		*/
		const cleanupFn = () => {
			cleanupTimeoutId = null;
			if (cleanupScheduledAt !== currentCleanupId) return;
			if (!isAnyLocked(lockMap)) {
				isInCleanupTransition = false;
				callback();
			} else isInCleanupTransition = false;
		};
		const actualDelay = delay === null ? 24 : delay;
		cleanupTimeoutId = window.setTimeout(cleanupFn, actualDelay);
	}
	function ensureInitialStyleCaptured() {
		if (initialBodyStyle === null && lockMap.size === 0 && !isInCleanupTransition) initialBodyStyle = document.body.getAttribute("style");
	}
	watch(() => anyLocked.current, () => {
		if (!anyLocked.current) return;
		ensureInitialStyleCaptured();
		isInCleanupTransition = false;
		const htmlStyle = getComputedStyle(document.documentElement);
		const bodyStyle = getComputedStyle(document.body);
		const hasStableGutter = htmlStyle.scrollbarGutter?.includes("stable") || bodyStyle.scrollbarGutter?.includes("stable");
		const verticalScrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
		const config = {
			padding: Number.parseInt(bodyStyle.paddingRight ?? "0", 10) + verticalScrollbarWidth,
			margin: Number.parseInt(bodyStyle.marginRight ?? "0", 10)
		};
		if (verticalScrollbarWidth > 0 && !hasStableGutter) {
			document.body.style.paddingRight = `${config.padding}px`;
			document.body.style.marginRight = `${config.margin}px`;
			document.body.style.setProperty("--scrollbar-width", `${verticalScrollbarWidth}px`);
		}
		document.body.style.overflow = "hidden";
		if (isIOS) on(document, "touchmove", (e) => {
			if (e.target !== document.documentElement) return;
			if (e.touches.length > 1) return;
			e.preventDefault();
		}, { passive: false });
		/**
		* We ensure pointer-events: none is applied _after_ DOM updates, so that any focus/
		* interaction changes from opening overlays/menus complete _before_ we block pointer
		* events.
		*
		* this avoids race conditions where pointer-events could be set too early and break
		* focus/interaction.
		*/
		afterTick(() => {
			document.body.style.pointerEvents = "none";
			document.body.style.overflow = "hidden";
		});
	});
	return {
		get lockMap() {
			return lockMap;
		},
		resetBodyStyle,
		scheduleCleanupIfNoNewLocks,
		cancelPendingCleanup,
		ensureInitialStyleCaptured
	};
});
var BodyScrollLock = class {
	#id = useId();
	#initialState;
	#restoreScrollDelay = () => null;
	#countState;
	locked;
	constructor(initialState, restoreScrollDelay = () => null) {
		this.#initialState = initialState;
		this.#restoreScrollDelay = restoreScrollDelay;
		this.#countState = bodyLockStackCount.get();
		if (!this.#countState) return;
		/**
		* Since a new lock is being created, we cancel any pending cleanup to
		* prevent the cleanup from running too early and resetting the body style
		* before the new lock has had a chance to apply its styles.
		*
		* reference: https://github.com/huntabyte/bits-ui/issues/1639
		*/
		this.#countState.cancelPendingCleanup();
		this.#countState.ensureInitialStyleCaptured();
		this.#countState.lockMap.set(this.#id, this.#initialState ?? false);
		this.locked = boxWith(() => this.#countState.lockMap.get(this.#id) ?? false, (v) => this.#countState.lockMap.set(this.#id, v));
	}
};
function isAnyLocked(map) {
	for (const [_, value] of map) if (value) return true;
	return false;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/scroll-lock/scroll-lock.svelte
function Scroll_lock($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { preventScroll = true, restoreScrollDelay = null } = $$props;
		if (preventScroll) new BodyScrollLock(preventScroll, () => restoreScrollDelay);
	});
}
//#endregion
//#region node_modules/bits-ui/dist/internal/date-time/announcer.js
/**
* Creates or gets an announcer element which is used to announce messages to screen readers.
* Within the date components, we use this to announce when the values of the individual segments
* change, as without it we get inconsistent behavior across screen readers.
*/
function initAnnouncer(doc) {
	if (!isBrowser || !doc) return null;
	let el = doc.querySelector("[data-bits-announcer]");
	/**
	* Creates a log element for assertive or polite announcements.
	*/
	const createLog = (kind) => {
		const log = doc.createElement("div");
		log.role = "log";
		log.ariaLive = kind;
		log.setAttribute("aria-relevant", "additions");
		return log;
	};
	if (!isHTMLElement(el)) {
		const div = doc.createElement("div");
		div.style.cssText = srOnlyStylesString;
		div.setAttribute("data-bits-announcer", "");
		div.appendChild(createLog("assertive"));
		div.appendChild(createLog("polite"));
		el = div;
		doc.body.insertBefore(el, doc.body.firstChild);
	}
	/**
	* Retrieves the log element for assertive or polite announcements.
	*/
	const getLog = (kind) => {
		if (!isHTMLElement(el)) return null;
		const log = el.querySelector(`[aria-live="${kind}"]`);
		if (!isHTMLElement(log)) return null;
		return log;
	};
	return { getLog };
}
/**
* Creates an announcer object that can be used to make `aria-live` announcements to screen readers.
*/
function getAnnouncer(doc) {
	const announcer = initAnnouncer(doc);
	/**
	* Announces a message to screen readers using the specified kind of announcement.
	*/
	function announce(value, kind = "assertive", timeout = 7500) {
		if (!announcer || !isBrowser || !doc) return;
		const log = announcer.getLog(kind);
		const content = doc.createElement("div");
		if (typeof value === "number") value = value.toString();
		else if (value === null) value = "Empty";
		else value = value.trim();
		content.innerText = value;
		if (kind === "assertive") log?.replaceChildren(content);
		else log?.appendChild(content);
		return setTimeout(() => {
			content.remove();
		}, timeout);
	}
	return { announce };
}
//#endregion
//#region node_modules/bits-ui/dist/internal/date-time/utils.js
var defaultDateDefaults = {
	defaultValue: void 0,
	granularity: "day"
};
/**
* A helper function used throughout the various date builders
* to generate a default `DateValue` using the `defaultValue`,
* `defaultPlaceholder`, `minValue`, `maxValue`, and `granularity` props.
*
* It's important to match the `DateValue` type being used
* elsewhere in the builder, so they behave according to the
* behavior the user expects based on the props they've provided.
*
*/
function getDefaultDate(opts) {
	const { defaultValue, granularity, minValue, maxValue } = {
		...defaultDateDefaults,
		...opts
	};
	if (Array.isArray(defaultValue) && defaultValue.length) return defaultValue[defaultValue.length - 1];
	if (defaultValue && !Array.isArray(defaultValue)) return defaultValue;
	else {
		let date = /* @__PURE__ */ new Date();
		if (minValue && date < minValue.toDate(getLocalTimeZone())) date = minValue.toDate(getLocalTimeZone());
		else if (maxValue && date > maxValue.toDate(getLocalTimeZone())) date = maxValue.toDate(getLocalTimeZone());
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();
		if ([
			"hour",
			"minute",
			"second"
		].includes(granularity ?? "day")) return new CalendarDateTime(year, month, day, 0, 0, 0);
		return new CalendarDate(year, month, day);
	}
}
/**
* Given a date string and a reference `DateValue` object, parse the
* string to the same type as the reference object.
*
* Useful for parsing strings from data attributes, which are always
* strings, to the same type being used by the date component.
*/
function parseStringToDateValue(dateStr, referenceVal) {
	let dateValue;
	if (referenceVal instanceof ZonedDateTime) dateValue = parseZonedDateTime(dateStr);
	else if (referenceVal instanceof CalendarDateTime) dateValue = parseDateTime(dateStr);
	else dateValue = parseDate(dateStr);
	return dateValue.calendar !== referenceVal.calendar ? toCalendar(dateValue, referenceVal.calendar) : dateValue;
}
/**
* Given a `DateValue` object, convert it to a native `Date` object.
* If a timezone is provided, the date will be converted to that timezone.
* If no timezone is provided, the date will be converted to the local timezone.
*/
function toDate(dateValue, tz = getLocalTimeZone()) {
	if (dateValue instanceof ZonedDateTime) return dateValue.toDate();
	else return dateValue.toDate(tz);
}
function getDateValueType(date) {
	if (date instanceof CalendarDate) return "date";
	if (date instanceof CalendarDateTime) return "datetime";
	if (date instanceof ZonedDateTime) return "zoneddatetime";
	throw new Error("Unknown date type");
}
function parseAnyDateValue(value, type) {
	switch (type) {
		case "date": return parseDate(value);
		case "datetime": return parseDateTime(value);
		case "zoneddatetime": return parseZonedDateTime(value);
		default: throw new Error(`Unknown date type: ${type}`);
	}
}
function isCalendarDateTime(dateValue) {
	return dateValue instanceof CalendarDateTime;
}
function isZonedDateTime(dateValue) {
	return dateValue instanceof ZonedDateTime;
}
function hasTime(dateValue) {
	return isCalendarDateTime(dateValue) || isZonedDateTime(dateValue);
}
/**
* Given a date, return the number of days in the month.
*/
function getDaysInMonth(date) {
	if (date instanceof Date) {
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		/**
		* By using zero as the day, we get the
		* last day of the previous month, which
		* is the month we originally passed in.
		*/
		return new Date(year, month, 0).getDate();
	} else return date.set({ day: 100 }).day;
}
/**
* Determine if a date is before the reference date.
* @param dateToCompare - is this date before the `referenceDate`
* @param referenceDate - is the `dateToCompare` before this date
*
* @see {@link isBeforeOrSame} for inclusive
*/
function isBefore(dateToCompare, referenceDate) {
	return dateToCompare.compare(referenceDate) < 0;
}
/**
* Determine if a date is after the reference date.
* @param dateToCompare - is this date after the `referenceDate`
* @param referenceDate - is the `dateToCompare` after this date
*
* @see {@link isAfterOrSame} for inclusive
*/
function isAfter(dateToCompare, referenceDate) {
	return dateToCompare.compare(referenceDate) > 0;
}
function getLastFirstDayOfWeek(date, firstDayOfWeek, locale) {
	const day = getDayOfWeek(date, locale);
	if (firstDayOfWeek > day) return date.subtract({ days: day + 7 - firstDayOfWeek });
	if (firstDayOfWeek === day) return date;
	return date.subtract({ days: day - firstDayOfWeek });
}
function getNextLastDayOfWeek(date, firstDayOfWeek, locale) {
	const day = getDayOfWeek(date, locale);
	const lastDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
	if (day === lastDayOfWeek) return date;
	if (day > lastDayOfWeek) return date.add({ days: 7 - day + lastDayOfWeek });
	return date.add({ days: lastDayOfWeek - day });
}
//#endregion
//#region node_modules/bits-ui/dist/internal/date-time/formatter.js
var defaultPartOptions = {
	year: "numeric",
	month: "numeric",
	day: "numeric",
	hour: "numeric",
	minute: "numeric",
	second: "numeric"
};
/**
* Creates a wrapper around the `DateFormatter`, which is
* an improved version of the {@link Intl.DateTimeFormat} API,
* that is used internally by the various date builders to
* easily format dates in a consistent way.
*
* @see [DateFormatter](https://react-spectrum.adobe.com/internationalized/date/DateFormatter.html)
*/
function createFormatter(opts) {
	let locale = opts.initialLocale;
	function setLocale(newLocale) {
		locale = newLocale;
	}
	function getLocale() {
		return locale;
	}
	function custom(date, options) {
		return new DateFormatter(locale, options).format(date);
	}
	function selectedDate(date, includeTime = true) {
		if (hasTime(date) && includeTime) return custom(toDate(date), {
			dateStyle: "long",
			timeStyle: "long"
		});
		else return custom(toDate(date), { dateStyle: "long" });
	}
	function fullMonthAndYear(date) {
		if (typeof opts.monthFormat.current !== "function" && typeof opts.yearFormat.current !== "function") return new DateFormatter(locale, {
			month: opts.monthFormat.current,
			year: opts.yearFormat.current
		}).format(date);
		return `${typeof opts.monthFormat.current === "function" ? opts.monthFormat.current(date.getMonth() + 1) : new DateFormatter(locale, { month: opts.monthFormat.current }).format(date)} ${typeof opts.yearFormat.current === "function" ? opts.yearFormat.current(date.getFullYear()) : new DateFormatter(locale, { year: opts.yearFormat.current }).format(date)}`;
	}
	function fullMonth(date) {
		return new DateFormatter(locale, { month: "long" }).format(date);
	}
	function fullYear(date) {
		return new DateFormatter(locale, { year: "numeric" }).format(date);
	}
	function toParts(date, options) {
		if (isZonedDateTime(date)) return new DateFormatter(locale, {
			...options,
			timeZone: date.timeZone
		}).formatToParts(toDate(date));
		else return new DateFormatter(locale, options).formatToParts(toDate(date));
	}
	function dayOfWeek(date, length = "narrow") {
		return new DateFormatter(locale, { weekday: length }).format(date);
	}
	function dayPeriod(date, hourCycle = void 0) {
		if (new DateFormatter(locale, {
			hour: "numeric",
			minute: "numeric",
			hourCycle: hourCycle === 24 ? "h23" : void 0
		}).formatToParts(date).find((p) => p.type === "dayPeriod")?.value === "PM") return "PM";
		return "AM";
	}
	function part(dateObj, type, options = {}) {
		const part = toParts(dateObj, {
			...defaultPartOptions,
			...options
		}).find((p) => p.type === type);
		return part ? part.value : "";
	}
	return {
		setLocale,
		getLocale,
		fullMonth,
		fullYear,
		fullMonthAndYear,
		toParts,
		custom,
		part,
		dayPeriod,
		selectedDate,
		dayOfWeek
	};
}
//#endregion
//#region node_modules/bits-ui/dist/internal/date-time/calendar-helpers.svelte.js
function isCalendarDayNode(node) {
	if (!isHTMLElement(node)) return false;
	if (!node.hasAttribute("data-bits-day")) return false;
	return true;
}
/**
* Retrieves an array of date values representing the days between
* the provided start and end dates.
*/
function getDaysBetween(start, end) {
	const days = [];
	let dCurrent = start.add({ days: 1 });
	const dEnd = end;
	while (dCurrent.compare(dEnd) < 0) {
		days.push(dCurrent);
		dCurrent = dCurrent.add({ days: 1 });
	}
	return days;
}
/**
* Creates a calendar month object.
*
* @remarks
* Given a date, this function returns an object containing
* the necessary values to render a calendar month, including
* the month's date (the first day of that month), which can be
* used to render the name of the month, an array of all dates
* in that month, and an array of weeks. Each week is an array
* of dates, useful for rendering an accessible calendar grid
* using a loop and table elements.
*
*/
function createMonth(props) {
	const { dateObj, weekStartsOn, fixedWeeks, locale } = props;
	const daysInMonth = getDaysInMonth(dateObj);
	const datesArray = Array.from({ length: daysInMonth }, (_, i) => dateObj.set({ day: i + 1 }));
	const firstDayOfMonth = startOfMonth(dateObj);
	const lastDayOfMonth = endOfMonth(dateObj);
	const lastSunday = weekStartsOn !== void 0 ? getLastFirstDayOfWeek(firstDayOfMonth, weekStartsOn, "en-US") : getLastFirstDayOfWeek(firstDayOfMonth, 0, locale);
	const nextSaturday = weekStartsOn !== void 0 ? getNextLastDayOfWeek(lastDayOfMonth, weekStartsOn, "en-US") : getNextLastDayOfWeek(lastDayOfMonth, 0, locale);
	const lastMonthDays = getDaysBetween(lastSunday.subtract({ days: 1 }), firstDayOfMonth);
	const nextMonthDays = getDaysBetween(lastDayOfMonth, nextSaturday.add({ days: 1 }));
	const totalDays = lastMonthDays.length + datesArray.length + nextMonthDays.length;
	if (fixedWeeks && totalDays < 42) {
		const extraDays = 42 - totalDays;
		let startFrom = nextMonthDays[nextMonthDays.length - 1];
		if (!startFrom) startFrom = dateObj.add({ months: 1 }).set({ day: 1 });
		let length = extraDays;
		if (nextMonthDays.length === 0) {
			length = extraDays - 1;
			nextMonthDays.push(startFrom);
		}
		const extraDaysArray = Array.from({ length }, (_, i) => {
			const incr = i + 1;
			return startFrom.add({ days: incr });
		});
		nextMonthDays.push(...extraDaysArray);
	}
	const allDays = lastMonthDays.concat(datesArray, nextMonthDays);
	return {
		value: dateObj,
		dates: allDays,
		weeks: chunk(allDays, 7)
	};
}
function createMonths(props) {
	const { numberOfMonths, dateObj, ...monthProps } = props;
	const months = [];
	if (!numberOfMonths || numberOfMonths === 1) {
		months.push(createMonth({
			...monthProps,
			dateObj
		}));
		return months;
	}
	months.push(createMonth({
		...monthProps,
		dateObj
	}));
	for (let i = 1; i < numberOfMonths; i++) {
		const nextMonth = dateObj.add({ months: i });
		months.push(createMonth({
			...monthProps,
			dateObj: nextMonth
		}));
	}
	return months;
}
function getSelectableCells(calendarNode) {
	if (!calendarNode) return [];
	return Array.from(calendarNode.querySelectorAll(`[data-bits-day]:not([data-disabled]):not([data-outside-visible-months])`)).filter((el) => isHTMLElement(el));
}
/**
* A helper function to extract the date from the `data-value`
* attribute of a date cell and set it as the placeholder value.
*
* Shared between the calendar and range calendar builders.
*
* @param node - The node to extract the date from.
* @param placeholder - The placeholder value store which will be set to the extracted date.
*/
function setPlaceholderToNodeValue(node, placeholder) {
	const cellValue = node.getAttribute("data-value");
	if (!cellValue) return;
	placeholder.current = parseStringToDateValue(cellValue, placeholder.current);
}
/**
* Shared logic for shifting focus between cells in the
* calendar and range calendar.
*/
function shiftCalendarFocus({ node, add, placeholder, calendarNode, isPrevButtonDisabled, isNextButtonDisabled, months, numberOfMonths }) {
	const candidateCells = getSelectableCells(calendarNode);
	if (!candidateCells.length) return;
	const nextIndex = candidateCells.indexOf(node) + add;
	/**
	* If the next cell is within the bounds of the displayed cells,
	* easy day, we just focus it.
	*/
	if (isValidIndex(nextIndex, candidateCells)) {
		const nextCell = candidateCells[nextIndex];
		setPlaceholderToNodeValue(nextCell, placeholder);
		return nextCell.focus();
	}
	/**
	* When the next cell falls outside the displayed cells range,
	* we update the focus to the previous or next month based on the
	* direction, and then focus on the relevant cell.
	*/
	if (nextIndex < 0) {
		/**
		* To handle negative indices, we rewind by one month,
		* retrieve candidate cells for that month, and shift focus
		* by the difference between the nextIndex starting from the end
		* of the array.
		*/
		if (isPrevButtonDisabled) return;
		const firstMonth = months[0]?.value;
		if (!firstMonth) return;
		placeholder.current = firstMonth.subtract({ months: numberOfMonths });
		afterTick(() => {
			const newCandidateCells = getSelectableCells(calendarNode);
			if (!newCandidateCells.length) return;
			/**
			* Starting at the end of the array, shift focus by the diff
			* between the nextIndex and the length of the array, since the
			* nextIndex is negative.
			*/
			const newIndex = newCandidateCells.length - Math.abs(nextIndex);
			if (isValidIndex(newIndex, newCandidateCells)) {
				const newCell = newCandidateCells[newIndex];
				setPlaceholderToNodeValue(newCell, placeholder);
				return newCell.focus();
			}
		});
	}
	if (nextIndex >= candidateCells.length) {
		/**
		* Since we're in the positive index range, we need to go forward
		* a month, refetch the candidate cells within that month, and then
		* starting at the beginning of the array, shift focus by the nextIndex
		* amount.
		*/
		if (isNextButtonDisabled) return;
		const firstMonth = months[0]?.value;
		if (!firstMonth) return;
		placeholder.current = firstMonth.add({ months: numberOfMonths });
		afterTick(() => {
			const newCandidateCells = getSelectableCells(calendarNode);
			if (!newCandidateCells.length) return;
			/**
			* We need to determine how far into the next month we need to go
			* to get the next index. So if we only went over the previous month
			* by one, we need to go into the next month by 1 to get the right index.
			*/
			const newIndex = nextIndex - candidateCells.length;
			if (isValidIndex(newIndex, newCandidateCells)) return newCandidateCells[newIndex].focus();
		});
	}
}
var ARROW_KEYS = [
	ARROW_DOWN,
	ARROW_UP,
	ARROW_LEFT,
	ARROW_RIGHT
];
var SELECT_KEYS = [ENTER, " "];
/**
* Shared keyboard event handler for the calendar and range calendar.
*/
function handleCalendarKeydown({ event, handleCellClick, shiftFocus, placeholderValue }) {
	const currentCell = event.target;
	if (!isCalendarDayNode(currentCell)) return;
	if (!ARROW_KEYS.includes(event.key) && !SELECT_KEYS.includes(event.key)) return;
	event.preventDefault();
	const kbdFocusMap = {
		[ARROW_DOWN]: 7,
		[ARROW_UP]: -7,
		[ARROW_LEFT]: -1,
		[ARROW_RIGHT]: 1
	};
	if (ARROW_KEYS.includes(event.key)) {
		const add = kbdFocusMap[event.key];
		if (add !== void 0) shiftFocus(currentCell, add);
	}
	if (SELECT_KEYS.includes(event.key)) {
		const cellValue = currentCell.getAttribute("data-value");
		if (!cellValue) return;
		handleCellClick(event, parseStringToDateValue(cellValue, placeholderValue));
	}
}
function handleCalendarNextPage({ months, setMonths, numberOfMonths, pagedNavigation, weekStartsOn, locale, fixedWeeks, setPlaceholder }) {
	const firstMonth = months[0]?.value;
	if (!firstMonth) return;
	if (pagedNavigation) setPlaceholder(firstMonth.add({ months: numberOfMonths }));
	else {
		const targetDate = firstMonth.add({ months: 1 });
		const newMonths = createMonths({
			dateObj: targetDate,
			weekStartsOn,
			locale,
			fixedWeeks,
			numberOfMonths
		});
		setPlaceholder(targetDate);
		setMonths(newMonths);
	}
}
function handleCalendarPrevPage({ months, setMonths, numberOfMonths, pagedNavigation, weekStartsOn, locale, fixedWeeks, setPlaceholder }) {
	const firstMonth = months[0]?.value;
	if (!firstMonth) return;
	if (pagedNavigation) setPlaceholder(firstMonth.subtract({ months: numberOfMonths }));
	else {
		const targetDate = firstMonth.subtract({ months: 1 });
		const newMonths = createMonths({
			dateObj: targetDate,
			weekStartsOn,
			locale,
			fixedWeeks,
			numberOfMonths
		});
		setPlaceholder(targetDate);
		setMonths(newMonths);
	}
}
function getWeekdays({ months, formatter, weekdayFormat }) {
	if (!months.length) return [];
	const firstWeek = months[0].weeks[0];
	if (!firstWeek) return [];
	return firstWeek.map((date) => formatter.dayOfWeek(toDate(date), weekdayFormat));
}
function useMonthViewPlaceholderSync({ placeholder, getVisibleMonths, weekStartsOn, locale, fixedWeeks, numberOfMonths, setMonths }) {
	/**
	* If the placeholder's month is already in this visible months,
	* we don't need to do anything.
	*/
}
function getIsNextButtonDisabled({ maxValue, months, disabled }) {
	if (!maxValue || !months.length) return false;
	if (disabled) return true;
	const lastMonthInView = months[months.length - 1]?.value;
	if (!lastMonthInView) return false;
	return isAfter(lastMonthInView.add({ months: 1 }).set({ day: 1 }), maxValue);
}
function getIsPrevButtonDisabled({ minValue, months, disabled }) {
	if (!minValue || !months.length) return false;
	if (disabled) return true;
	const firstMonthInView = months[0]?.value;
	if (!firstMonthInView) return false;
	return isBefore(firstMonthInView.subtract({ months: 1 }).set({ day: 35 }), minValue);
}
function getCalendarHeadingValue({ months, locale, formatter }) {
	if (!months.length) return "";
	if (locale !== formatter.getLocale()) formatter.setLocale(locale);
	if (months.length === 1) {
		const month = toDate(months[0].value);
		return `${formatter.fullMonthAndYear(month)}`;
	}
	const startMonth = toDate(months[0].value);
	const endMonth = toDate(months[months.length - 1].value);
	const startMonthName = formatter.fullMonth(startMonth);
	const endMonthName = formatter.fullMonth(endMonth);
	const startMonthYear = formatter.fullYear(startMonth);
	const endMonthYear = formatter.fullYear(endMonth);
	return startMonthYear === endMonthYear ? `${startMonthName} - ${endMonthName} ${endMonthYear}` : `${startMonthName} ${startMonthYear} - ${endMonthName} ${endMonthYear}`;
}
function getCalendarElementProps({ fullCalendarLabel, id, isInvalid, disabled, readonly }) {
	return {
		id,
		role: "application",
		"aria-label": fullCalendarLabel,
		"data-invalid": boolToEmptyStrOrUndef(isInvalid),
		"data-disabled": boolToEmptyStrOrUndef(disabled),
		"data-readonly": boolToEmptyStrOrUndef(readonly)
	};
}
function getFirstNonDisabledDateInView(calendarRef) {
	if (!isBrowser) return;
	const daysInView = Array.from(calendarRef.querySelectorAll("[data-bits-day]:not([aria-disabled=true])"));
	if (daysInView.length === 0) return;
	const element = daysInView[0];
	const value = element?.getAttribute("data-value");
	const type = element?.getAttribute("data-type");
	if (!value || !type) return;
	return parseAnyDateValue(value, type);
}
/**
* Ensures the placeholder is not set to a disabled date,
* which would prevent the user from entering the Calendar
* via the keyboard.
*/
function useEnsureNonDisabledPlaceholder({ ref, placeholder, defaultPlaceholder, minValue, maxValue, isDateDisabled }) {
	function isDisabled(date) {
		if (isDateDisabled.current(date)) return true;
		if (minValue.current && isBefore(date, minValue.current)) return true;
		if (maxValue.current && isBefore(maxValue.current, date)) return true;
		return false;
	}
	watch(() => ref.current, () => {
		if (!ref.current) return;
		/**
		* If the placeholder is still the default placeholder and it's a disabled date, find
		* the first available date in the calendar view and set it as the placeholder.
		*
		* This prevents the placeholder from being a disabled date and no date being tabbable
		* preventing the user from entering the Calendar. If all dates in the view are
		* disabled, currently that is considered an error on the developer's part and should
		* be handled by them.
		*
		* Perhaps in the future we can introduce a dev-only log message to prevent this from
		* being a silent error.
		*/
		if (placeholder.current && isSameDay(placeholder.current, defaultPlaceholder) && isDisabled(defaultPlaceholder)) placeholder.current = getFirstNonDisabledDateInView(ref.current) ?? defaultPlaceholder;
	});
}
function getDateWithPreviousTime(date, prev) {
	if (!date || !prev) return date;
	if (hasTime(date) && hasTime(prev)) return date.set({
		hour: prev.hour,
		minute: prev.minute,
		millisecond: prev.millisecond,
		second: prev.second
	});
	return date;
}
var calendarAttrs = createBitsAttrs({
	component: "calendar",
	parts: [
		"root",
		"grid",
		"cell",
		"next-button",
		"prev-button",
		"day",
		"grid-body",
		"grid-head",
		"grid-row",
		"head-cell",
		"header",
		"heading",
		"month-select",
		"year-select"
	]
});
function getDefaultYears(opts) {
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
	const latestYear = Math.max(opts.placeholderYear, currentYear);
	let minYear;
	let maxYear;
	if (opts.minValue) minYear = opts.minValue.year;
	else {
		const initialMinYear = latestYear - 100;
		minYear = opts.placeholderYear < initialMinYear ? opts.placeholderYear - 10 : initialMinYear;
	}
	if (opts.maxValue) maxYear = opts.maxValue.year;
	else maxYear = latestYear + 10;
	if (minYear > maxYear) minYear = maxYear;
	const totalYears = maxYear - minYear + 1;
	return Array.from({ length: totalYears }, (_, i) => minYear + i);
}
//#endregion
//#region node_modules/bits-ui/dist/bits/calendar/calendar.svelte.js
var CalendarRootContext = new Context("Calendar.Root | RangeCalender.Root");
var CalendarRootState = class CalendarRootState {
	static create(opts) {
		return CalendarRootContext.set(new CalendarRootState(opts));
	}
	opts;
	#visibleMonths = derived$1(() => this.months.map((month) => month.value));
	get visibleMonths() {
		return this.#visibleMonths();
	}
	set visibleMonths($$value) {
		return this.#visibleMonths($$value);
	}
	formatter;
	accessibleHeadingId = useId();
	domContext;
	attachment;
	months = [];
	announcer;
	constructor(opts) {
		this.opts = opts;
		this.attachment = attachRef(this.opts.ref);
		this.domContext = new DOMContext(opts.ref);
		this.announcer = getAnnouncer(null);
		this.formatter = createFormatter({
			initialLocale: this.opts.locale.current,
			monthFormat: this.opts.monthFormat,
			yearFormat: this.opts.yearFormat
		});
		this.setMonths = this.setMonths.bind(this);
		this.nextPage = this.nextPage.bind(this);
		this.prevPage = this.prevPage.bind(this);
		this.prevYear = this.prevYear.bind(this);
		this.nextYear = this.nextYear.bind(this);
		this.setYear = this.setYear.bind(this);
		this.setMonth = this.setMonth.bind(this);
		this.isOutsideVisibleMonths = this.isOutsideVisibleMonths.bind(this);
		this.isDateDisabled = this.isDateDisabled.bind(this);
		this.isDateSelected = this.isDateSelected.bind(this);
		this.shiftFocus = this.shiftFocus.bind(this);
		this.handleCellClick = this.handleCellClick.bind(this);
		this.handleMultipleUpdate = this.handleMultipleUpdate.bind(this);
		this.handleSingleUpdate = this.handleSingleUpdate.bind(this);
		this.onkeydown = this.onkeydown.bind(this);
		this.getBitsAttr = this.getBitsAttr.bind(this);
		this.months = createMonths({
			dateObj: this.opts.placeholder.current,
			weekStartsOn: this.opts.weekStartsOn.current,
			locale: this.opts.locale.current,
			fixedWeeks: this.opts.fixedWeeks.current,
			numberOfMonths: this.opts.numberOfMonths.current
		});
		this.#setupInitialFocusEffect();
		this.#setupAccessibleHeadingEffect();
		this.#setupFormatterEffect();
		/**
		* Updates the displayed months based on changes in the placeholder value.
		*/
		useMonthViewPlaceholderSync({
			placeholder: this.opts.placeholder,
			getVisibleMonths: () => this.visibleMonths,
			weekStartsOn: this.opts.weekStartsOn,
			locale: this.opts.locale,
			fixedWeeks: this.opts.fixedWeeks,
			numberOfMonths: this.opts.numberOfMonths,
			setMonths: (months) => this.months = months
		});
		/**
		* Updates the displayed months based on changes in the options values,
		* which determines the month to show in the calendar.
		*/
		this.opts.fixedWeeks, this.opts.locale, this.opts.numberOfMonths, this.opts.placeholder, this.setMonths, this.opts.weekStartsOn;
		/**
		* Update the accessible heading's text content when the `fullCalendarLabel`
		* changes.
		*/
		watch(() => this.fullCalendarLabel, (label) => {
			const node = this.domContext.getElementById(this.accessibleHeadingId);
			if (!node) return;
			node.textContent = label;
		});
		/**
		* Synchronize the placeholder value with the current value.
		*/
		watch(() => this.opts.value.current, () => {
			const value = this.opts.value.current;
			if (Array.isArray(value) && value.length) {
				const lastValue = value[value.length - 1];
				if (lastValue && this.opts.placeholder.current !== lastValue) this.opts.placeholder.current = lastValue;
			} else if (!Array.isArray(value) && value && this.opts.placeholder.current !== value) this.opts.placeholder.current = value;
		});
		useEnsureNonDisabledPlaceholder({
			placeholder: opts.placeholder,
			defaultPlaceholder: opts.defaultPlaceholder,
			isDateDisabled: opts.isDateDisabled,
			maxValue: opts.maxValue,
			minValue: opts.minValue,
			ref: opts.ref
		});
	}
	setMonths(months) {
		this.months = months;
	}
	#weekdays = derived$1(
		/**
		* This derived state holds an array of localized day names for the current
		* locale and calendar view. It dynamically syncs with the 'weekStartsOn' option,
		* updating its content when the option changes. Using this state to render the
		* calendar's days of the week is strongly recommended, as it guarantees that
		* the days are correctly formatted for the current locale and calendar view.
		*/
		() => {
			return getWeekdays({
				months: this.months,
				formatter: this.formatter,
				weekdayFormat: this.opts.weekdayFormat.current
			});
		}
	);
	get weekdays() {
		return this.#weekdays();
	}
	set weekdays($$value) {
		return this.#weekdays($$value);
	}
	#initialPlaceholderYear = derived$1(() => run(() => this.opts.placeholder.current.year));
	get initialPlaceholderYear() {
		return this.#initialPlaceholderYear();
	}
	set initialPlaceholderYear($$value) {
		return this.#initialPlaceholderYear($$value);
	}
	#defaultYears = derived$1(() => {
		return getDefaultYears({
			minValue: this.opts.minValue.current,
			maxValue: this.opts.maxValue.current,
			placeholderYear: this.initialPlaceholderYear
		});
	});
	get defaultYears() {
		return this.#defaultYears();
	}
	set defaultYears($$value) {
		return this.#defaultYears($$value);
	}
	#setupInitialFocusEffect() {}
	#setupAccessibleHeadingEffect() {}
	#setupFormatterEffect() {}
	/**
	* Navigates to the next page of the calendar.
	*/
	nextPage() {
		handleCalendarNextPage({
			fixedWeeks: this.opts.fixedWeeks.current,
			locale: this.opts.locale.current,
			numberOfMonths: this.opts.numberOfMonths.current,
			pagedNavigation: this.opts.pagedNavigation.current,
			setMonths: this.setMonths,
			setPlaceholder: (date) => this.opts.placeholder.current = date,
			weekStartsOn: this.opts.weekStartsOn.current,
			months: this.months
		});
	}
	/**
	* Navigates to the previous page of the calendar.
	*/
	prevPage() {
		handleCalendarPrevPage({
			fixedWeeks: this.opts.fixedWeeks.current,
			locale: this.opts.locale.current,
			numberOfMonths: this.opts.numberOfMonths.current,
			pagedNavigation: this.opts.pagedNavigation.current,
			setMonths: this.setMonths,
			setPlaceholder: (date) => this.opts.placeholder.current = date,
			weekStartsOn: this.opts.weekStartsOn.current,
			months: this.months
		});
	}
	nextYear() {
		this.opts.placeholder.current = this.opts.placeholder.current.add({ years: 1 });
	}
	prevYear() {
		this.opts.placeholder.current = this.opts.placeholder.current.subtract({ years: 1 });
	}
	setYear(year) {
		this.opts.placeholder.current = this.opts.placeholder.current.set({ year });
	}
	setMonth(month) {
		this.opts.placeholder.current = this.opts.placeholder.current.set({ month });
	}
	#isNextButtonDisabled = derived$1(() => {
		return getIsNextButtonDisabled({
			maxValue: this.opts.maxValue.current,
			months: this.months,
			disabled: this.opts.disabled.current
		});
	});
	get isNextButtonDisabled() {
		return this.#isNextButtonDisabled();
	}
	set isNextButtonDisabled($$value) {
		return this.#isNextButtonDisabled($$value);
	}
	#isPrevButtonDisabled = derived$1(() => {
		return getIsPrevButtonDisabled({
			minValue: this.opts.minValue.current,
			months: this.months,
			disabled: this.opts.disabled.current
		});
	});
	get isPrevButtonDisabled() {
		return this.#isPrevButtonDisabled();
	}
	set isPrevButtonDisabled($$value) {
		return this.#isPrevButtonDisabled($$value);
	}
	#isInvalid = derived$1(() => {
		const value = this.opts.value.current;
		const isDateDisabled = this.opts.isDateDisabled.current;
		const isDateUnavailable = this.opts.isDateUnavailable.current;
		if (Array.isArray(value)) {
			if (!value.length) return false;
			for (const date of value) {
				if (isDateDisabled(date)) return true;
				if (isDateUnavailable(date)) return true;
			}
		} else {
			if (!value) return false;
			if (isDateDisabled(value)) return true;
			if (isDateUnavailable(value)) return true;
		}
		return false;
	});
	get isInvalid() {
		return this.#isInvalid();
	}
	set isInvalid($$value) {
		return this.#isInvalid($$value);
	}
	#headingValue = derived$1(() => {
		this.opts.monthFormat.current;
		this.opts.yearFormat.current;
		return getCalendarHeadingValue({
			months: this.months,
			formatter: this.formatter,
			locale: this.opts.locale.current
		});
	});
	get headingValue() {
		return this.#headingValue();
	}
	set headingValue($$value) {
		return this.#headingValue($$value);
	}
	#fullCalendarLabel = derived$1(() => {
		return `${this.opts.calendarLabel.current} ${this.headingValue}`;
	});
	get fullCalendarLabel() {
		return this.#fullCalendarLabel();
	}
	set fullCalendarLabel($$value) {
		return this.#fullCalendarLabel($$value);
	}
	isOutsideVisibleMonths(date) {
		return !this.visibleMonths.some((month) => isSameMonth(date, month));
	}
	isDateDisabled(date) {
		if (this.opts.isDateDisabled.current(date) || this.opts.disabled.current) return true;
		const minValue = this.opts.minValue.current;
		const maxValue = this.opts.maxValue.current;
		if (minValue && isBefore(date, minValue)) return true;
		if (maxValue && isBefore(maxValue, date)) return true;
		return false;
	}
	isDateSelected(date) {
		const value = this.opts.value.current;
		if (Array.isArray(value)) return value.some((d) => isSameDay(d, date));
		else if (!value) return false;
		return isSameDay(value, date);
	}
	shiftFocus(node, add) {
		return shiftCalendarFocus({
			node,
			add,
			placeholder: this.opts.placeholder,
			calendarNode: this.opts.ref.current,
			isPrevButtonDisabled: this.isPrevButtonDisabled,
			isNextButtonDisabled: this.isNextButtonDisabled,
			months: this.months,
			numberOfMonths: this.opts.numberOfMonths.current
		});
	}
	#isMultipleSelectionValid(selectedDates) {
		if (this.opts.type.current !== "multiple") return true;
		if (!this.opts.maxDays.current) return true;
		const selectedCount = selectedDates.length;
		if (this.opts.maxDays.current && selectedCount > this.opts.maxDays.current) return false;
		return true;
	}
	handleCellClick(_, date) {
		if (this.opts.readonly.current || this.opts.isDateDisabled.current?.(date) || this.opts.isDateUnavailable.current?.(date)) return;
		const prev = this.opts.value.current;
		if (this.opts.type.current === "multiple") {
			if (Array.isArray(prev) || prev === void 0) this.opts.value.current = this.handleMultipleUpdate(prev, date);
		} else if (!Array.isArray(prev)) {
			const next = this.handleSingleUpdate(prev, date);
			if (!next) this.announcer.announce("Selected date is now empty.", "polite", 5e3);
			else this.announcer.announce(`Selected Date: ${this.formatter.selectedDate(next, false)}`, "polite");
			this.opts.value.current = getDateWithPreviousTime(next, prev);
			if (next !== void 0) this.opts.onDateSelect?.current?.();
		}
	}
	handleMultipleUpdate(prev, date) {
		if (!prev) {
			const newSelection = [date];
			return this.#isMultipleSelectionValid(newSelection) ? newSelection : [date];
		}
		if (!Array.isArray(prev)) return;
		const index = prev.findIndex((d) => isSameDay(d, date));
		const preventDeselect = this.opts.preventDeselect.current;
		if (index === -1) {
			const newSelection = [...prev, date];
			if (this.#isMultipleSelectionValid(newSelection)) return newSelection;
			else return [date];
		} else if (preventDeselect) return prev;
		else {
			const next = prev.filter((d) => !isSameDay(d, date));
			if (!next.length) {
				this.opts.placeholder.current = date;
				return;
			}
			return next;
		}
	}
	handleSingleUpdate(prev, date) {
		if (Array.isArray(prev)) {}
		if (!prev) return date;
		if (!this.opts.preventDeselect.current && isSameDay(prev, date)) {
			this.opts.placeholder.current = date;
			return;
		}
		return date;
	}
	onkeydown(event) {
		handleCalendarKeydown({
			event,
			handleCellClick: this.handleCellClick,
			shiftFocus: this.shiftFocus,
			placeholderValue: this.opts.placeholder.current
		});
	}
	#snippetProps = derived$1(() => ({
		months: this.months,
		weekdays: this.weekdays
	}));
	get snippetProps() {
		return this.#snippetProps();
	}
	set snippetProps($$value) {
		return this.#snippetProps($$value);
	}
	getBitsAttr = (part) => {
		return calendarAttrs.getAttr(part);
	};
	#props = derived$1(() => ({
		...getCalendarElementProps({
			fullCalendarLabel: this.fullCalendarLabel,
			id: this.opts.id.current,
			isInvalid: this.isInvalid,
			disabled: this.opts.disabled.current,
			readonly: this.opts.readonly.current
		}),
		[this.getBitsAttr("root")]: "",
		onkeydown: this.onkeydown,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var CalendarCellContext = new Context("Calendar.Cell | RangeCalendar.Cell");
var CalendarCellState = class CalendarCellState {
	static create(opts) {
		return CalendarCellContext.set(new CalendarCellState(opts, CalendarRootContext.get()));
	}
	opts;
	root;
	#cellDate = derived$1(() => toDate(this.opts.date.current));
	get cellDate() {
		return this.#cellDate();
	}
	set cellDate($$value) {
		return this.#cellDate($$value);
	}
	#isUnavailable = derived$1(() => this.root.opts.isDateUnavailable.current(this.opts.date.current));
	get isUnavailable() {
		return this.#isUnavailable();
	}
	set isUnavailable($$value) {
		return this.#isUnavailable($$value);
	}
	#isDateToday = derived$1(() => isToday(this.opts.date.current, getLocalTimeZone()));
	get isDateToday() {
		return this.#isDateToday();
	}
	set isDateToday($$value) {
		return this.#isDateToday($$value);
	}
	#isOutsideMonth = derived$1(() => !isSameMonth(this.opts.date.current, this.opts.month.current));
	get isOutsideMonth() {
		return this.#isOutsideMonth();
	}
	set isOutsideMonth($$value) {
		return this.#isOutsideMonth($$value);
	}
	#isOutsideVisibleMonths = derived$1(() => this.root.isOutsideVisibleMonths(this.opts.date.current));
	get isOutsideVisibleMonths() {
		return this.#isOutsideVisibleMonths();
	}
	set isOutsideVisibleMonths($$value) {
		return this.#isOutsideVisibleMonths($$value);
	}
	#isDisabled = derived$1(() => this.root.isDateDisabled(this.opts.date.current) || this.isOutsideMonth && this.root.opts.disableDaysOutsideMonth.current);
	get isDisabled() {
		return this.#isDisabled();
	}
	set isDisabled($$value) {
		return this.#isDisabled($$value);
	}
	#isFocusedDate = derived$1(() => isSameDay(this.opts.date.current, this.root.opts.placeholder.current));
	get isFocusedDate() {
		return this.#isFocusedDate();
	}
	set isFocusedDate($$value) {
		return this.#isFocusedDate($$value);
	}
	#isSelectedDate = derived$1(() => this.root.isDateSelected(this.opts.date.current));
	get isSelectedDate() {
		return this.#isSelectedDate();
	}
	set isSelectedDate($$value) {
		return this.#isSelectedDate($$value);
	}
	#labelText = derived$1(() => this.root.formatter.custom(this.cellDate, {
		weekday: "long",
		month: "long",
		day: "numeric",
		year: "numeric"
	}));
	get labelText() {
		return this.#labelText();
	}
	set labelText($$value) {
		return this.#labelText($$value);
	}
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref);
	}
	#snippetProps = derived$1(() => ({
		disabled: this.isDisabled,
		unavailable: this.isUnavailable,
		selected: this.isSelectedDate,
		day: `${this.opts.date.current.day}`
	}));
	get snippetProps() {
		return this.#snippetProps();
	}
	set snippetProps($$value) {
		return this.#snippetProps($$value);
	}
	#ariaDisabled = derived$1(() => {
		return this.isDisabled || this.isOutsideMonth && this.root.opts.disableDaysOutsideMonth.current || this.isUnavailable;
	});
	get ariaDisabled() {
		return this.#ariaDisabled();
	}
	set ariaDisabled($$value) {
		return this.#ariaDisabled($$value);
	}
	#sharedDataAttrs = derived$1(() => ({
		"data-unavailable": boolToEmptyStrOrUndef(this.isUnavailable),
		"data-today": this.isDateToday ? "" : void 0,
		"data-outside-month": this.isOutsideMonth ? "" : void 0,
		"data-outside-visible-months": this.isOutsideVisibleMonths ? "" : void 0,
		"data-focused": this.isFocusedDate ? "" : void 0,
		"data-selected": boolToEmptyStrOrUndef(this.isSelectedDate),
		"data-value": this.opts.date.current.toString(),
		"data-type": getDateValueType(this.opts.date.current),
		"data-disabled": boolToEmptyStrOrUndef(this.isDisabled || this.isOutsideMonth && this.root.opts.disableDaysOutsideMonth.current)
	}));
	get sharedDataAttrs() {
		return this.#sharedDataAttrs();
	}
	set sharedDataAttrs($$value) {
		return this.#sharedDataAttrs($$value);
	}
	#props = derived$1(() => ({
		id: this.opts.id.current,
		role: "gridcell",
		"aria-selected": boolToStr(this.isSelectedDate),
		"aria-disabled": boolToStr(this.ariaDisabled),
		...this.sharedDataAttrs,
		[this.root.getBitsAttr("cell")]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var CalendarDayState = class CalendarDayState {
	static create(opts) {
		return new CalendarDayState(opts, CalendarCellContext.get());
	}
	opts;
	cell;
	attachment;
	constructor(opts, cell) {
		this.opts = opts;
		this.cell = cell;
		this.onclick = this.onclick.bind(this);
		this.attachment = attachRef(this.opts.ref);
	}
	#tabindex = derived$1(() => this.cell.isOutsideMonth && this.cell.root.opts.disableDaysOutsideMonth.current || this.cell.isDisabled ? void 0 : this.cell.isFocusedDate ? 0 : -1);
	onclick(e) {
		if (this.cell.isDisabled) return;
		this.cell.root.handleCellClick(e, this.cell.opts.date.current);
	}
	#snippetProps = derived$1(() => ({
		disabled: this.cell.isDisabled,
		unavailable: this.cell.isUnavailable,
		selected: this.cell.isSelectedDate,
		day: `${this.cell.opts.date.current.day}`
	}));
	get snippetProps() {
		return this.#snippetProps();
	}
	set snippetProps($$value) {
		return this.#snippetProps($$value);
	}
	#props = derived$1(() => ({
		id: this.opts.id.current,
		role: "button",
		"aria-label": this.cell.labelText,
		"aria-disabled": boolToStr(this.cell.ariaDisabled),
		...this.cell.sharedDataAttrs,
		tabindex: this.#tabindex(),
		[this.cell.root.getBitsAttr("day")]: "",
		"data-bits-day": "",
		onclick: this.onclick,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var CalendarNextButtonState = class CalendarNextButtonState {
	static create(opts) {
		return new CalendarNextButtonState(opts, CalendarRootContext.get());
	}
	opts;
	root;
	#isDisabled = derived$1(() => this.root.isNextButtonDisabled);
	get isDisabled() {
		return this.#isDisabled();
	}
	set isDisabled($$value) {
		return this.#isDisabled($$value);
	}
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.onclick = this.onclick.bind(this);
		this.attachment = attachRef(this.opts.ref);
	}
	onclick(_) {
		if (this.isDisabled) return;
		this.root.nextPage();
	}
	#props = derived$1(() => ({
		id: this.opts.id.current,
		role: "button",
		type: "button",
		"aria-label": "Next",
		"aria-disabled": boolToStr(this.isDisabled),
		"data-disabled": boolToEmptyStrOrUndef(this.isDisabled),
		disabled: this.isDisabled,
		[this.root.getBitsAttr("next-button")]: "",
		onclick: this.onclick,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var CalendarPrevButtonState = class CalendarPrevButtonState {
	static create(opts) {
		return new CalendarPrevButtonState(opts, CalendarRootContext.get());
	}
	opts;
	root;
	#isDisabled = derived$1(() => this.root.isPrevButtonDisabled);
	get isDisabled() {
		return this.#isDisabled();
	}
	set isDisabled($$value) {
		return this.#isDisabled($$value);
	}
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.onclick = this.onclick.bind(this);
		this.attachment = attachRef(this.opts.ref);
	}
	onclick(_) {
		if (this.isDisabled) return;
		this.root.prevPage();
	}
	#props = derived$1(() => ({
		id: this.opts.id.current,
		role: "button",
		type: "button",
		"aria-label": "Previous",
		"aria-disabled": boolToStr(this.isDisabled),
		"data-disabled": boolToEmptyStrOrUndef(this.isDisabled),
		disabled: this.isDisabled,
		[this.root.getBitsAttr("prev-button")]: "",
		onclick: this.onclick,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var CalendarGridState = class CalendarGridState {
	static create(opts) {
		return new CalendarGridState(opts, CalendarRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref);
	}
	#props = derived$1(() => ({
		id: this.opts.id.current,
		tabindex: -1,
		role: "grid",
		"aria-readonly": boolToStr(this.root.opts.readonly.current),
		"aria-disabled": boolToStr(this.root.opts.disabled.current),
		"data-readonly": boolToEmptyStrOrUndef(this.root.opts.readonly.current),
		"data-disabled": boolToEmptyStrOrUndef(this.root.opts.disabled.current),
		[this.root.getBitsAttr("grid")]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var CalendarGridBodyState = class CalendarGridBodyState {
	static create(opts) {
		return new CalendarGridBodyState(opts, CalendarRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref);
	}
	#props = derived$1(() => ({
		id: this.opts.id.current,
		"data-disabled": boolToEmptyStrOrUndef(this.root.opts.disabled.current),
		"data-readonly": boolToEmptyStrOrUndef(this.root.opts.readonly.current),
		[this.root.getBitsAttr("grid-body")]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var CalendarGridHeadState = class CalendarGridHeadState {
	static create(opts) {
		return new CalendarGridHeadState(opts, CalendarRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref);
	}
	#props = derived$1(() => ({
		id: this.opts.id.current,
		"data-disabled": boolToEmptyStrOrUndef(this.root.opts.disabled.current),
		"data-readonly": boolToEmptyStrOrUndef(this.root.opts.readonly.current),
		[this.root.getBitsAttr("grid-head")]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var CalendarGridRowState = class CalendarGridRowState {
	static create(opts) {
		return new CalendarGridRowState(opts, CalendarRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref);
	}
	#props = derived$1(() => ({
		id: this.opts.id.current,
		"data-disabled": boolToEmptyStrOrUndef(this.root.opts.disabled.current),
		"data-readonly": boolToEmptyStrOrUndef(this.root.opts.readonly.current),
		[this.root.getBitsAttr("grid-row")]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var CalendarHeadCellState = class CalendarHeadCellState {
	static create(opts) {
		return new CalendarHeadCellState(opts, CalendarRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref);
	}
	#props = derived$1(() => ({
		id: this.opts.id.current,
		"data-disabled": boolToEmptyStrOrUndef(this.root.opts.disabled.current),
		"data-readonly": boolToEmptyStrOrUndef(this.root.opts.readonly.current),
		[this.root.getBitsAttr("head-cell")]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var CalendarHeaderState = class CalendarHeaderState {
	static create(opts) {
		return new CalendarHeaderState(opts, CalendarRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref);
	}
	#props = derived$1(() => ({
		id: this.opts.id.current,
		"data-disabled": boolToEmptyStrOrUndef(this.root.opts.disabled.current),
		"data-readonly": boolToEmptyStrOrUndef(this.root.opts.readonly.current),
		[this.root.getBitsAttr("header")]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var CalendarMonthSelectState = class CalendarMonthSelectState {
	static create(opts) {
		return new CalendarMonthSelectState(opts, CalendarRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.onchange = this.onchange.bind(this);
		this.attachment = attachRef(this.opts.ref);
	}
	#monthItems = derived$1(() => {
		this.root.opts.locale.current;
		const monthNumbers = this.opts.months.current;
		const monthFormat = this.opts.monthFormat.current;
		const months = [];
		for (const month of monthNumbers) {
			const date = this.root.opts.placeholder.current.set({ month });
			let label;
			if (typeof monthFormat === "function") label = monthFormat(month);
			else label = this.root.formatter.custom(toDate(date), { month: monthFormat });
			months.push({
				value: month,
				label
			});
		}
		return months;
	});
	get monthItems() {
		return this.#monthItems();
	}
	set monthItems($$value) {
		return this.#monthItems($$value);
	}
	#currentMonth = derived$1(() => this.root.opts.placeholder.current.month);
	get currentMonth() {
		return this.#currentMonth();
	}
	set currentMonth($$value) {
		return this.#currentMonth($$value);
	}
	#isDisabled = derived$1(() => this.root.opts.disabled.current || this.opts.disabled.current);
	get isDisabled() {
		return this.#isDisabled();
	}
	set isDisabled($$value) {
		return this.#isDisabled($$value);
	}
	#snippetProps = derived$1(() => {
		return {
			monthItems: this.monthItems,
			selectedMonthItem: this.monthItems.find((month) => month.value === this.currentMonth)
		};
	});
	get snippetProps() {
		return this.#snippetProps();
	}
	set snippetProps($$value) {
		return this.#snippetProps($$value);
	}
	onchange(event) {
		if (this.isDisabled) return;
		const target = event.target;
		const month = parseInt(target.value, 10);
		if (!isNaN(month)) this.root.opts.placeholder.current = this.root.opts.placeholder.current.set({ month });
	}
	#props = derived$1(() => ({
		id: this.opts.id.current,
		value: this.currentMonth,
		disabled: this.isDisabled,
		"data-disabled": boolToEmptyStrOrUndef(this.isDisabled),
		[this.root.getBitsAttr("month-select")]: "",
		onchange: this.onchange,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var CalendarYearSelectState = class CalendarYearSelectState {
	static create(opts) {
		return new CalendarYearSelectState(opts, CalendarRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.onchange = this.onchange.bind(this);
		this.attachment = attachRef(this.opts.ref);
	}
	#years = derived$1(() => {
		if (this.opts.years.current && this.opts.years.current.length) return this.opts.years.current;
		return this.root.defaultYears;
	});
	get years() {
		return this.#years();
	}
	set years($$value) {
		return this.#years($$value);
	}
	#yearItems = derived$1(() => {
		this.root.opts.locale.current;
		const yearFormat = this.opts.yearFormat.current;
		const localYears = [];
		for (const year of this.years) {
			const date = this.root.opts.placeholder.current.set({ year });
			let label;
			if (typeof yearFormat === "function") label = yearFormat(year);
			else label = this.root.formatter.custom(toDate(date), { year: yearFormat });
			localYears.push({
				value: year,
				label
			});
		}
		return localYears;
	});
	get yearItems() {
		return this.#yearItems();
	}
	set yearItems($$value) {
		return this.#yearItems($$value);
	}
	#currentYear = derived$1(() => this.root.opts.placeholder.current.year);
	get currentYear() {
		return this.#currentYear();
	}
	set currentYear($$value) {
		return this.#currentYear($$value);
	}
	#isDisabled = derived$1(() => this.root.opts.disabled.current || this.opts.disabled.current);
	get isDisabled() {
		return this.#isDisabled();
	}
	set isDisabled($$value) {
		return this.#isDisabled($$value);
	}
	#snippetProps = derived$1(() => {
		return {
			yearItems: this.yearItems,
			selectedYearItem: this.yearItems.find((year) => year.value === this.currentYear)
		};
	});
	get snippetProps() {
		return this.#snippetProps();
	}
	set snippetProps($$value) {
		return this.#snippetProps($$value);
	}
	onchange(event) {
		if (this.isDisabled) return;
		const target = event.target;
		const year = parseInt(target.value, 10);
		if (!isNaN(year)) this.root.opts.placeholder.current = this.root.opts.placeholder.current.set({ year });
	}
	#props = derived$1(() => ({
		id: this.opts.id.current,
		value: this.currentYear,
		disabled: this.isDisabled,
		"data-disabled": boolToEmptyStrOrUndef(this.isDisabled),
		[this.root.getBitsAttr("year-select")]: "",
		onchange: this.onchange,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
//#endregion
//#region node_modules/bits-ui/dist/bits/calendar/components/calendar.svelte
function Calendar$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { child, children, id = useId(), ref = null, value = void 0, onValueChange = noop, placeholder = void 0, onPlaceholderChange = noop, weekdayFormat = "narrow", weekStartsOn, pagedNavigation = false, isDateDisabled = () => false, isDateUnavailable = () => false, fixedWeeks = false, numberOfMonths = 1, locale, calendarLabel = "Event", disabled = false, readonly = false, minValue = void 0, maxValue = void 0, preventDeselect = false, type, disableDaysOutsideMonth = true, initialFocus = false, maxDays, monthFormat = "long", yearFormat = "numeric", $$slots, $$events, ...restProps } = $$props;
		const defaultPlaceholder = getDefaultDate({
			defaultValue: value,
			minValue,
			maxValue
		});
		function handleDefaultPlaceholder() {
			if (placeholder !== void 0) return;
			placeholder = defaultPlaceholder;
		}
		handleDefaultPlaceholder();
		watch.pre(() => placeholder, () => {
			handleDefaultPlaceholder();
		});
		function handleDefaultValue() {
			if (value !== void 0) return;
			value = type === "single" ? void 0 : [];
		}
		handleDefaultValue();
		watch.pre(() => value, () => {
			handleDefaultValue();
		});
		const rootState = CalendarRootState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v),
			weekdayFormat: boxWith(() => weekdayFormat),
			weekStartsOn: boxWith(() => weekStartsOn),
			pagedNavigation: boxWith(() => pagedNavigation),
			isDateDisabled: boxWith(() => isDateDisabled),
			isDateUnavailable: boxWith(() => isDateUnavailable),
			fixedWeeks: boxWith(() => fixedWeeks),
			numberOfMonths: boxWith(() => numberOfMonths),
			locale: resolveLocaleProp(() => locale),
			calendarLabel: boxWith(() => calendarLabel),
			readonly: boxWith(() => readonly),
			disabled: boxWith(() => disabled),
			minValue: boxWith(() => minValue),
			maxValue: boxWith(() => maxValue),
			disableDaysOutsideMonth: boxWith(() => disableDaysOutsideMonth),
			initialFocus: boxWith(() => initialFocus),
			maxDays: boxWith(() => maxDays),
			placeholder: boxWith(() => placeholder, (v) => {
				placeholder = v;
				onPlaceholderChange(v);
			}),
			preventDeselect: boxWith(() => preventDeselect),
			value: boxWith(() => value, (v) => {
				value = v;
				onValueChange(v);
			}),
			type: boxWith(() => type),
			monthFormat: boxWith(() => monthFormat),
			yearFormat: boxWith(() => yearFormat),
			defaultPlaceholder
		});
		const mergedProps = derived$1(() => mergeProps(restProps, rootState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, {
				props: mergedProps(),
				...rootState.snippetProps
			});
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer, rootState.snippetProps);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, {
			ref,
			value,
			placeholder
		});
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/calendar/components/calendar-day.svelte
function Calendar_day$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { children, child, ref = null, id = createId(uid), $$slots, $$events, ...restProps } = $$props;
		const dayState = CalendarDayState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived$1(() => mergeProps(restProps, dayState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, {
				props: mergedProps(),
				...dayState.snippetProps
			});
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div${attributes({ ...mergedProps() })}>`);
			if (children) {
				$$renderer.push("<!--[0-->");
				children?.($$renderer, dayState.snippetProps);
				$$renderer.push(`<!---->`);
			} else {
				$$renderer.push("<!--[-1-->");
				$$renderer.push(`${escape_html(dayState.cell.opts.date.current.day)}`);
			}
			$$renderer.push(`<!--]--></div>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/calendar/components/calendar-grid.svelte
function Calendar_grid$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { children, child, ref = null, id = createId(uid), $$slots, $$events, ...restProps } = $$props;
		const gridState = CalendarGridState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived$1(() => mergeProps(restProps, gridState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<table${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></table>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/calendar/components/calendar-grid-body.svelte
function Calendar_grid_body$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { children, child, ref = null, id = createId(uid), $$slots, $$events, ...restProps } = $$props;
		const gridBodyState = CalendarGridBodyState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived$1(() => mergeProps(restProps, gridBodyState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<tbody${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></tbody>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/calendar/components/calendar-cell.svelte
function Calendar_cell$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { children, child, ref = null, id = createId(uid), date, month, $$slots, $$events, ...restProps } = $$props;
		const cellState = CalendarCellState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v),
			date: boxWith(() => date),
			month: boxWith(() => month)
		});
		const mergedProps = derived$1(() => mergeProps(restProps, cellState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, {
				props: mergedProps(),
				...cellState.snippetProps
			});
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<td${attributes({ ...mergedProps() })}>`);
			children?.($$renderer, cellState.snippetProps);
			$$renderer.push(`<!----></td>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/calendar/components/calendar-grid-head.svelte
function Calendar_grid_head$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { children, child, ref = null, id = createId(uid), $$slots, $$events, ...restProps } = $$props;
		const gridHeadState = CalendarGridHeadState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived$1(() => mergeProps(restProps, gridHeadState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<thead${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></thead>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/calendar/components/calendar-head-cell.svelte
function Calendar_head_cell$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { children, child, ref = null, id = createId(uid), $$slots, $$events, ...restProps } = $$props;
		const headCellState = CalendarHeadCellState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived$1(() => mergeProps(restProps, headCellState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<th${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></th>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/calendar/components/calendar-grid-row.svelte
function Calendar_grid_row$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { children, child, ref = null, id = createId(uid), $$slots, $$events, ...restProps } = $$props;
		const gridRowState = CalendarGridRowState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived$1(() => mergeProps(restProps, gridRowState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<tr${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></tr>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/calendar/components/calendar-header.svelte
function Calendar_header$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { children, child, ref = null, id = createId(uid), $$slots, $$events, ...restProps } = $$props;
		const headerState = CalendarHeaderState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived$1(() => mergeProps(restProps, headerState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<header${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></header>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/calendar/components/calendar-month-select.svelte
function Calendar_month_select$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { children, child, ref = null, id = createId(uid), months = [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12
		], monthFormat = "long", disabled = false, "aria-label": ariaLabel = "Select a month", $$slots, $$events, ...restProps } = $$props;
		const monthSelectState = CalendarMonthSelectState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v),
			months: boxWith(() => months),
			monthFormat: boxWith(() => monthFormat),
			disabled: boxWith(() => Boolean(disabled))
		});
		const mergedProps = derived$1(() => mergeProps(restProps, monthSelectState.props, { "aria-label": ariaLabel }));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, {
				props: mergedProps(),
				...monthSelectState.snippetProps
			});
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.select({ ...mergedProps() }, ($$renderer) => {
				if (children) {
					$$renderer.push("<!--[0-->");
					children?.($$renderer, monthSelectState.snippetProps);
					$$renderer.push(`<!---->`);
				} else {
					$$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--[-->`);
					const each_array = ensure_array_like(monthSelectState.monthItems);
					for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
						let month = each_array[$$index];
						$$renderer.option({
							value: month.value,
							selected: month.value === monthSelectState.currentMonth
						}, ($$renderer) => {
							$$renderer.push(`${escape_html(month.label)}`);
						});
					}
					$$renderer.push(`<!--]-->`);
				}
				$$renderer.push(`<!--]-->`);
			}, void 0, void 0, void 0, void 0, true);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/calendar/components/calendar-next-button.svelte
function Calendar_next_button$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { children, child, id = createId(uid), ref = null, tabindex = 0, $$slots, $$events, ...restProps } = $$props;
		const nextButtonState = CalendarNextButtonState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived$1(() => mergeProps(restProps, nextButtonState.props, { tabindex }));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<button${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></button>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/calendar/components/calendar-prev-button.svelte
function Calendar_prev_button$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { children, child, id = createId(uid), ref = null, tabindex = 0, $$slots, $$events, ...restProps } = $$props;
		const prevButtonState = CalendarPrevButtonState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived$1(() => mergeProps(restProps, prevButtonState.props, { tabindex }));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<button${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></button>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/calendar/components/calendar-year-select.svelte
function Calendar_year_select$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { children, child, ref = null, id = createId(uid), years, yearFormat = "numeric", disabled = false, "aria-label": ariaLabel = "Select a year", $$slots, $$events, ...restProps } = $$props;
		const yearSelectState = CalendarYearSelectState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v),
			years: boxWith(() => years),
			yearFormat: boxWith(() => yearFormat),
			disabled: boxWith(() => Boolean(disabled))
		});
		const mergedProps = derived$1(() => mergeProps(restProps, yearSelectState.props, { "aria-label": ariaLabel }));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, {
				props: mergedProps(),
				...yearSelectState.snippetProps
			});
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.select({ ...mergedProps() }, ($$renderer) => {
				if (children) {
					$$renderer.push("<!--[0-->");
					children?.($$renderer, yearSelectState.snippetProps);
					$$renderer.push(`<!---->`);
				} else {
					$$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--[-->`);
					const each_array = ensure_array_like(yearSelectState.yearItems);
					for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
						let year = each_array[$$index];
						$$renderer.option({
							value: year.value,
							selected: year.value === yearSelectState.currentYear
						}, ($$renderer) => {
							$$renderer.push(`${escape_html(year.label)}`);
						});
					}
					$$renderer.push(`<!--]-->`);
				}
				$$renderer.push(`<!--]-->`);
			}, void 0, void 0, void 0, void 0, true);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/hidden-input.svelte
function Hidden_input($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { value = void 0, $$slots, $$events, ...restProps } = $$props;
		const mergedProps = derived$1(() => mergeProps(restProps, {
			"aria-hidden": "true",
			tabindex: -1,
			style: {
				...srOnlyStyles,
				position: "absolute",
				top: "0",
				left: "0"
			}
		}));
		if (mergedProps().type === "checkbox") {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<input${attributes({
				...mergedProps(),
				value
			}, void 0, void 0, void 0, 4)}/>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<input${attributes({
				value,
				...mergedProps()
			}, void 0, void 0, void 0, 4)}/>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { value });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/internal/floating-svelte/floating-utils.svelte.js
function get(valueOrGetValue) {
	return typeof valueOrGetValue === "function" ? valueOrGetValue() : valueOrGetValue;
}
function getDPR(element) {
	if (typeof window === "undefined") return 1;
	return (element.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function roundByDPR(element, value) {
	const dpr = getDPR(element);
	return Math.round(value * dpr) / dpr;
}
function getFloatingContentCSSVars(name) {
	return {
		[`--bits-${name}-content-transform-origin`]: `var(--bits-floating-transform-origin)`,
		[`--bits-${name}-content-available-width`]: `var(--bits-floating-available-width)`,
		[`--bits-${name}-content-available-height`]: `var(--bits-floating-available-height)`,
		[`--bits-${name}-anchor-width`]: `var(--bits-floating-anchor-width)`,
		[`--bits-${name}-anchor-height`]: `var(--bits-floating-anchor-height)`
	};
}
//#endregion
//#region node_modules/bits-ui/dist/internal/floating-svelte/use-floating.svelte.js
function useFloating(options) {
	options.whileElementsMounted;
	const openOption = derived$1(() => get(options.open) ?? true);
	const middlewareOption = derived$1(() => get(options.middleware));
	const transformOption = derived$1(() => get(options.transform) ?? true);
	const placementOption = derived$1(() => get(options.placement) ?? "bottom");
	const strategyOption = derived$1(() => get(options.strategy) ?? "absolute");
	const sideOffsetOption = derived$1(() => get(options.sideOffset) ?? 0);
	const alignOffsetOption = derived$1(() => get(options.alignOffset) ?? 0);
	const reference = options.reference;
	/** State */
	let x = 0;
	let y = 0;
	const floating = simpleBox(null);
	let strategy = strategyOption();
	let placement = placementOption();
	let middlewareData = {};
	let isPositioned = false;
	let updateRequestId = 0;
	const floatingStyles = derived$1(() => {
		const xVal = floating.current ? roundByDPR(floating.current, x) : x;
		const yVal = floating.current ? roundByDPR(floating.current, y) : y;
		if (transformOption()) return {
			position: strategy,
			left: "0",
			top: "0",
			transform: `translate(${xVal}px, ${yVal}px)`,
			...floating.current && getDPR(floating.current) >= 1.5 && { willChange: "transform" }
		};
		return {
			position: strategy,
			left: `${xVal}px`,
			top: `${yVal}px`
		};
	});
	function update() {
		if (reference.current === null || floating.current === null) return;
		const referenceNode = reference.current;
		const floatingNode = floating.current;
		const requestId = ++updateRequestId;
		computePosition(referenceNode, floatingNode, {
			middleware: middlewareOption(),
			placement: placementOption(),
			strategy: strategyOption()
		}).then((position) => {
			if (requestId !== updateRequestId) return;
			if (reference.current !== referenceNode || floating.current !== floatingNode) return;
			if (isReferenceHidden(referenceNode)) {
				middlewareData = {
					...middlewareData,
					hide: {
						...middlewareData.hide,
						referenceHidden: true
					}
				};
				return;
			}
			if (!openOption() && x !== 0 && y !== 0) {
				const maxExpectedOffset = Math.max(Math.abs(sideOffsetOption()), Math.abs(alignOffsetOption()), 15);
				if (position.x <= maxExpectedOffset && position.y <= maxExpectedOffset) return;
			}
			x = position.x;
			y = position.y;
			strategy = position.strategy;
			placement = position.placement;
			middlewareData = position.middlewareData;
			isPositioned = true;
		});
	}
	return {
		floating,
		reference,
		get strategy() {
			return strategy;
		},
		get placement() {
			return placement;
		},
		get middlewareData() {
			return middlewareData;
		},
		get isPositioned() {
			return isPositioned;
		},
		get floatingStyles() {
			return floatingStyles();
		},
		get update() {
			return update;
		}
	};
}
function isReferenceHidden(node) {
	if (!(node instanceof Element)) return false;
	if (!node.isConnected) return true;
	if (node instanceof HTMLElement && node.hidden) return true;
	return node.getClientRects().length === 0;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/use-floating-layer.svelte.js
var OPPOSITE_SIDE = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
};
var FloatingRootContext = new Context("Floating.Root");
var FloatingContentContext = new Context("Floating.Content");
var FloatingTooltipRootContext = new Context("Floating.Root");
var FloatingRootState = class FloatingRootState {
	static create(tooltip = false) {
		return tooltip ? FloatingTooltipRootContext.set(new FloatingRootState()) : FloatingRootContext.set(new FloatingRootState());
	}
	anchorNode = simpleBox(null);
	customAnchorNode = simpleBox(null);
	triggerNode = simpleBox(null);
	constructor() {}
};
var FloatingContentState = class FloatingContentState {
	static create(opts, tooltip = false) {
		return tooltip ? FloatingContentContext.set(new FloatingContentState(opts, FloatingTooltipRootContext.get())) : FloatingContentContext.set(new FloatingContentState(opts, FloatingRootContext.get()));
	}
	opts;
	root;
	contentRef = simpleBox(null);
	wrapperRef = simpleBox(null);
	arrowRef = simpleBox(null);
	contentAttachment = attachRef(this.contentRef);
	wrapperAttachment = attachRef(this.wrapperRef);
	arrowAttachment = attachRef(this.arrowRef);
	arrowId = simpleBox(useId());
	#transformedStyle = derived$1(() => {
		if (typeof this.opts.style === "string") return cssToStyleObj(this.opts.style);
		if (!this.opts.style) return {};
	});
	#updatePositionStrategy = void 0;
	#arrowSize = new ElementSize(() => this.arrowRef.current ?? void 0);
	#arrowWidth = derived$1(() => this.#arrowSize?.width ?? 0);
	#arrowHeight = derived$1(() => this.#arrowSize?.height ?? 0);
	#desiredPlacement = derived$1(() => this.opts.side?.current + (this.opts.align.current !== "center" ? `-${this.opts.align.current}` : ""));
	#boundary = derived$1(() => Array.isArray(this.opts.collisionBoundary.current) ? this.opts.collisionBoundary.current : [this.opts.collisionBoundary.current]);
	#hasExplicitBoundaries = derived$1(() => this.#boundary().length > 0);
	get hasExplicitBoundaries() {
		return this.#hasExplicitBoundaries();
	}
	set hasExplicitBoundaries($$value) {
		return this.#hasExplicitBoundaries($$value);
	}
	#detectOverflowOptions = derived$1(() => ({
		padding: this.opts.collisionPadding.current,
		boundary: this.#boundary().filter(isNotNull),
		altBoundary: this.hasExplicitBoundaries
	}));
	get detectOverflowOptions() {
		return this.#detectOverflowOptions();
	}
	set detectOverflowOptions($$value) {
		return this.#detectOverflowOptions($$value);
	}
	#availableWidth = void 0;
	#availableHeight = void 0;
	#anchorWidth = void 0;
	#anchorHeight = void 0;
	#middleware = derived$1(() => [
		offset({
			mainAxis: this.opts.sideOffset.current + this.#arrowHeight(),
			alignmentAxis: this.opts.alignOffset.current
		}),
		this.opts.avoidCollisions.current && shift({
			mainAxis: true,
			crossAxis: false,
			limiter: this.opts.sticky.current === "partial" ? limitShift() : void 0,
			...this.detectOverflowOptions
		}),
		this.opts.avoidCollisions.current && flip({ ...this.detectOverflowOptions }),
		size({
			...this.detectOverflowOptions,
			apply: ({ rects, availableWidth, availableHeight }) => {
				const { width: anchorWidth, height: anchorHeight } = rects.reference;
				this.#availableWidth = availableWidth;
				this.#availableHeight = availableHeight;
				this.#anchorWidth = anchorWidth;
				this.#anchorHeight = anchorHeight;
			}
		}),
		this.arrowRef.current && arrow({
			element: this.arrowRef.current,
			padding: this.opts.arrowPadding.current
		}),
		transformOrigin({
			arrowWidth: this.#arrowWidth(),
			arrowHeight: this.#arrowHeight()
		}),
		this.opts.hideWhenDetached.current && hide({
			strategy: "referenceHidden",
			...this.detectOverflowOptions
		})
	].filter(Boolean));
	get middleware() {
		return this.#middleware();
	}
	set middleware($$value) {
		return this.#middleware($$value);
	}
	floating;
	#placedSide = derived$1(() => getSideFromPlacement(this.floating.placement));
	get placedSide() {
		return this.#placedSide();
	}
	set placedSide($$value) {
		return this.#placedSide($$value);
	}
	#placedAlign = derived$1(() => getAlignFromPlacement(this.floating.placement));
	get placedAlign() {
		return this.#placedAlign();
	}
	set placedAlign($$value) {
		return this.#placedAlign($$value);
	}
	#arrowX = derived$1(() => this.floating.middlewareData.arrow?.x ?? 0);
	get arrowX() {
		return this.#arrowX();
	}
	set arrowX($$value) {
		return this.#arrowX($$value);
	}
	#arrowY = derived$1(() => this.floating.middlewareData.arrow?.y ?? 0);
	get arrowY() {
		return this.#arrowY();
	}
	set arrowY($$value) {
		return this.#arrowY($$value);
	}
	#cannotCenterArrow = derived$1(() => this.floating.middlewareData.arrow?.centerOffset !== 0);
	get cannotCenterArrow() {
		return this.#cannotCenterArrow();
	}
	set cannotCenterArrow($$value) {
		return this.#cannotCenterArrow($$value);
	}
	contentZIndex;
	#arrowBaseSide = derived$1(() => OPPOSITE_SIDE[this.placedSide]);
	get arrowBaseSide() {
		return this.#arrowBaseSide();
	}
	set arrowBaseSide($$value) {
		return this.#arrowBaseSide($$value);
	}
	#wrapperProps = derived$1(() => ({
		id: this.opts.wrapperId.current,
		"data-bits-floating-content-wrapper": "",
		style: {
			...this.floating.floatingStyles,
			transform: this.floating.isPositioned ? this.floating.floatingStyles.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: this.contentZIndex,
			"--bits-floating-transform-origin": `${this.floating.middlewareData.transformOrigin?.x} ${this.floating.middlewareData.transformOrigin?.y}`,
			"--bits-floating-available-width": `${this.#availableWidth}px`,
			"--bits-floating-available-height": `${this.#availableHeight}px`,
			"--bits-floating-anchor-width": `${this.#anchorWidth}px`,
			"--bits-floating-anchor-height": `${this.#anchorHeight}px`,
			...this.floating.middlewareData.hide?.referenceHidden && {
				visibility: "hidden",
				"pointer-events": "none"
			},
			...this.#transformedStyle()
		},
		dir: this.opts.dir.current,
		...this.wrapperAttachment
	}));
	get wrapperProps() {
		return this.#wrapperProps();
	}
	set wrapperProps($$value) {
		return this.#wrapperProps($$value);
	}
	#props = derived$1(() => ({
		"data-side": this.placedSide,
		"data-align": this.placedAlign,
		style: styleToString({ ...this.#transformedStyle() }),
		...this.contentAttachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
	#arrowStyle = derived$1(() => ({
		position: "absolute",
		left: this.arrowX ? `${this.arrowX}px` : void 0,
		top: this.arrowY ? `${this.arrowY}px` : void 0,
		[this.arrowBaseSide]: 0,
		"transform-origin": {
			top: "",
			right: "0 0",
			bottom: "center 0",
			left: "100% 0"
		}[this.placedSide],
		transform: {
			top: "translateY(100%)",
			right: "translateY(50%) rotate(90deg) translateX(-50%)",
			bottom: "rotate(180deg)",
			left: "translateY(50%) rotate(-90deg) translateX(50%)"
		}[this.placedSide],
		visibility: this.cannotCenterArrow ? "hidden" : void 0
	}));
	get arrowStyle() {
		return this.#arrowStyle();
	}
	set arrowStyle($$value) {
		return this.#arrowStyle($$value);
	}
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.#updatePositionStrategy = opts.updatePositionStrategy;
		if (opts.customAnchor) this.root.customAnchorNode.current = opts.customAnchor.current;
		watch(() => opts.customAnchor.current, (customAnchor) => {
			this.root.customAnchorNode.current = customAnchor;
		});
		this.floating = useFloating({
			strategy: () => this.opts.strategy.current,
			placement: () => this.#desiredPlacement(),
			middleware: () => this.middleware,
			reference: this.root.anchorNode,
			whileElementsMounted: (...args) => {
				return autoUpdate(...args, { animationFrame: this.#updatePositionStrategy?.current === "always" });
			},
			open: () => this.opts.enabled.current,
			sideOffset: () => this.opts.sideOffset.current,
			alignOffset: () => this.opts.alignOffset.current
		});
		watch(() => this.contentRef.current, (contentNode) => {
			if (!contentNode || !this.opts.enabled.current) return;
			const win = getWindow(contentNode);
			const rafId = win.requestAnimationFrame(() => {
				if (this.contentRef.current !== contentNode || !this.opts.enabled.current) return;
				const zIndex = win.getComputedStyle(contentNode).zIndex;
				if (zIndex !== this.contentZIndex) this.contentZIndex = zIndex;
			});
			return () => {
				win.cancelAnimationFrame(rafId);
			};
		});
	}
};
var FloatingAnchorState = class FloatingAnchorState {
	static create(opts, tooltip = false) {
		return tooltip ? new FloatingAnchorState(opts, FloatingTooltipRootContext.get()) : new FloatingAnchorState(opts, FloatingRootContext.get());
	}
	opts;
	root;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		if (opts.virtualEl && opts.virtualEl.current) root.triggerNode = boxFrom(opts.virtualEl.current);
		else root.triggerNode = opts.ref;
	}
};
function transformOrigin(options) {
	return {
		name: "transformOrigin",
		options,
		fn(data) {
			const { placement, rects, middlewareData } = data;
			const isArrowHidden = middlewareData.arrow?.centerOffset !== 0;
			const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
			const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
			const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
			const noArrowAlign = {
				start: "0%",
				center: "50%",
				end: "100%"
			}[placedAlign];
			const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
			const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
			let x = "";
			let y = "";
			if (placedSide === "bottom") {
				x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
				y = `${-arrowHeight}px`;
			} else if (placedSide === "top") {
				x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
				y = `${rects.floating.height + arrowHeight}px`;
			} else if (placedSide === "right") {
				x = `${-arrowHeight}px`;
				y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
			} else if (placedSide === "left") {
				x = `${rects.floating.width + arrowHeight}px`;
				y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
			}
			return { data: {
				x,
				y
			} };
		}
	};
}
function getSideAndAlignFromPlacement(placement) {
	const [side, align = "center"] = placement.split("-");
	return [side, align];
}
function getSideFromPlacement(placement) {
	return getSideAndAlignFromPlacement(placement)[0];
}
function getAlignFromPlacement(placement) {
	return getSideAndAlignFromPlacement(placement)[1];
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer.svelte
function Floating_layer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { children, tooltip = false } = $$props;
		FloatingRootState.create(tooltip);
		children?.($$renderer);
		$$renderer.push(`<!---->`);
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-anchor.svelte
function Floating_layer_anchor($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { id, children, virtualEl, ref, tooltip = false } = $$props;
		FloatingAnchorState.create({
			id: boxWith(() => id),
			virtualEl: boxWith(() => virtualEl),
			ref
		}, tooltip);
		children?.($$renderer);
		$$renderer.push(`<!---->`);
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-content.svelte
function Floating_layer_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { content, side = "bottom", sideOffset = 0, align = "center", alignOffset = 0, id, arrowPadding = 0, avoidCollisions = true, collisionBoundary = [], collisionPadding = 0, hideWhenDetached = false, onPlaced = () => {}, sticky = "partial", updatePositionStrategy = "optimized", strategy = "fixed", dir = "ltr", style = {}, wrapperId = useId(), customAnchor = null, enabled, tooltip = false } = $$props;
		const contentState = FloatingContentState.create({
			side: boxWith(() => side),
			sideOffset: boxWith(() => sideOffset),
			align: boxWith(() => align),
			alignOffset: boxWith(() => alignOffset),
			id: boxWith(() => id),
			arrowPadding: boxWith(() => arrowPadding),
			avoidCollisions: boxWith(() => avoidCollisions),
			collisionBoundary: boxWith(() => collisionBoundary),
			collisionPadding: boxWith(() => collisionPadding),
			hideWhenDetached: boxWith(() => hideWhenDetached),
			onPlaced: boxWith(() => onPlaced),
			sticky: boxWith(() => sticky),
			updatePositionStrategy: boxWith(() => updatePositionStrategy),
			strategy: boxWith(() => strategy),
			dir: boxWith(() => dir),
			style: boxWith(() => style),
			enabled: boxWith(() => enabled),
			wrapperId: boxWith(() => wrapperId),
			customAnchor: boxWith(() => customAnchor)
		}, tooltip);
		const mergedProps = derived$1(() => mergeProps(contentState.wrapperProps, { style: { pointerEvents: "auto" } }));
		content?.($$renderer, {
			props: contentState.props,
			wrapperProps: mergedProps()
		});
		$$renderer.push(`<!---->`);
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-content-static.svelte
function Floating_layer_content_static($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { content, onPlaced } = $$props;
		content?.($$renderer, {
			props: {},
			wrapperProps: {}
		});
		$$renderer.push(`<!---->`);
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-content.svelte
function Popper_content($$renderer, $$props) {
	let { content, isStatic = false, onPlaced, $$slots, $$events, ...restProps } = $$props;
	if (isStatic) {
		$$renderer.push("<!--[0-->");
		Floating_layer_content_static($$renderer, {
			content,
			onPlaced
		});
	} else {
		$$renderer.push("<!--[-1-->");
		Floating_layer_content($$renderer, spread_props([{
			content,
			onPlaced
		}, restProps]));
	}
	$$renderer.push(`<!--]-->`);
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-layer-inner.svelte
function Popper_layer_inner($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { popper, onEscapeKeydown, escapeKeydownBehavior, preventOverflowTextSelection, id, onPointerDown, onPointerUp, side, sideOffset, align, alignOffset, arrowPadding, avoidCollisions, collisionBoundary, collisionPadding, sticky, hideWhenDetached, updatePositionStrategy, strategy, dir, preventScroll, wrapperId, style, onPlaced, onInteractOutside, onCloseAutoFocus, onOpenAutoFocus, onFocusOutside, interactOutsideBehavior = "close", loop, trapFocus = true, isValidEvent = () => false, customAnchor = null, isStatic = false, enabled, ref, tooltip = false, contentPointerEvents = "auto", $$slots, $$events, ...restProps } = $$props;
		const resolvedPreventScroll = derived$1(() => preventScroll ?? true);
		const effectiveStrategy = derived$1(() => strategy ?? (resolvedPreventScroll() ? "fixed" : "absolute"));
		{
			function content($$renderer, { props: floatingProps, wrapperProps }) {
				if (restProps.forceMount && enabled) {
					$$renderer.push("<!--[0-->");
					Scroll_lock($$renderer, { preventScroll: resolvedPreventScroll() });
				} else if (!restProps.forceMount) {
					$$renderer.push("<!--[1-->");
					Scroll_lock($$renderer, { preventScroll: resolvedPreventScroll() });
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--> `);
				{
					function focusScope($$renderer, { props: focusScopeProps }) {
						Escape_layer($$renderer, {
							onEscapeKeydown,
							escapeKeydownBehavior,
							enabled,
							ref,
							children: ($$renderer) => {
								{
									function children($$renderer, { props: dismissibleProps }) {
										Text_selection_layer($$renderer, {
											id,
											preventOverflowTextSelection,
											onPointerDown,
											onPointerUp,
											enabled,
											ref,
											children: ($$renderer) => {
												popper?.($$renderer, {
													props: mergeProps(restProps, floatingProps, dismissibleProps, focusScopeProps, { style: { pointerEvents: contentPointerEvents } }),
													wrapperProps
												});
												$$renderer.push(`<!---->`);
											},
											$$slots: { default: true }
										});
									}
									Dismissible_layer($$renderer, {
										id,
										onInteractOutside,
										onFocusOutside,
										interactOutsideBehavior,
										isValidEvent,
										enabled,
										ref,
										children,
										$$slots: { default: true }
									});
								}
							},
							$$slots: { default: true }
						});
					}
					Focus_scope($$renderer, {
						onOpenAutoFocus,
						onCloseAutoFocus,
						loop,
						enabled,
						trapFocus,
						forceMount: restProps.forceMount,
						ref,
						focusScope,
						$$slots: { focusScope: true }
					});
				}
				$$renderer.push(`<!---->`);
			}
			Popper_content($$renderer, {
				isStatic,
				id,
				side,
				sideOffset,
				align,
				alignOffset,
				arrowPadding,
				avoidCollisions,
				collisionBoundary,
				collisionPadding,
				sticky,
				hideWhenDetached,
				updatePositionStrategy,
				strategy: effectiveStrategy(),
				dir,
				wrapperId,
				style,
				onPlaced,
				customAnchor,
				enabled,
				tooltip,
				content,
				$$slots: { content: true }
			});
		}
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-layer.svelte
function Popper_layer($$renderer, $$props) {
	let { popper, open, onEscapeKeydown, escapeKeydownBehavior, preventOverflowTextSelection, id, onPointerDown, onPointerUp, side, sideOffset, align, alignOffset, arrowPadding, avoidCollisions, collisionBoundary, collisionPadding, sticky, hideWhenDetached, updatePositionStrategy, strategy, dir, preventScroll, wrapperId, style, onPlaced, onInteractOutside, onCloseAutoFocus, onOpenAutoFocus, onFocusOutside, interactOutsideBehavior = "close", loop, trapFocus = true, isValidEvent = () => false, customAnchor = null, isStatic = false, ref, shouldRender, $$slots, $$events, ...restProps } = $$props;
	if (shouldRender) {
		$$renderer.push("<!--[0-->");
		Popper_layer_inner($$renderer, spread_props([{
			popper,
			onEscapeKeydown,
			escapeKeydownBehavior,
			preventOverflowTextSelection,
			id,
			onPointerDown,
			onPointerUp,
			side,
			sideOffset,
			align,
			alignOffset,
			arrowPadding,
			avoidCollisions,
			collisionBoundary,
			collisionPadding,
			sticky,
			hideWhenDetached,
			updatePositionStrategy,
			strategy,
			dir,
			preventScroll,
			wrapperId,
			style,
			onPlaced,
			customAnchor,
			isStatic,
			enabled: open,
			onInteractOutside,
			onCloseAutoFocus,
			onOpenAutoFocus,
			interactOutsideBehavior,
			loop,
			trapFocus,
			isValidEvent,
			onFocusOutside,
			forceMount: false,
			ref
		}, restProps]));
	} else $$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]-->`);
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-layer-force-mount.svelte
function Popper_layer_force_mount($$renderer, $$props) {
	let { popper, onEscapeKeydown, escapeKeydownBehavior, preventOverflowTextSelection, id, onPointerDown, onPointerUp, side, sideOffset, align, alignOffset, arrowPadding, avoidCollisions, collisionBoundary, collisionPadding, sticky, hideWhenDetached, updatePositionStrategy, strategy, dir, preventScroll, wrapperId, style, onPlaced, onInteractOutside, onCloseAutoFocus, onOpenAutoFocus, onFocusOutside, interactOutsideBehavior = "close", loop, trapFocus = true, isValidEvent = () => false, customAnchor = null, isStatic = false, enabled, $$slots, $$events, ...restProps } = $$props;
	Popper_layer_inner($$renderer, spread_props([
		{
			popper,
			onEscapeKeydown,
			escapeKeydownBehavior,
			preventOverflowTextSelection,
			id,
			onPointerDown,
			onPointerUp,
			side,
			sideOffset,
			align,
			alignOffset,
			arrowPadding,
			avoidCollisions,
			collisionBoundary,
			collisionPadding,
			sticky,
			hideWhenDetached,
			updatePositionStrategy,
			strategy,
			dir,
			preventScroll,
			wrapperId,
			style,
			onPlaced,
			customAnchor,
			isStatic,
			enabled,
			onInteractOutside,
			onCloseAutoFocus,
			onOpenAutoFocus,
			interactOutsideBehavior,
			loop,
			trapFocus,
			isValidEvent,
			onFocusOutside
		},
		restProps,
		{ forceMount: true }
	]));
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/mounted.svelte
function Mounted($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { mounted = false, onMountedChange = noop } = $$props;
		bind_props($$props, { mounted });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/menu/components/menu-item.svelte
function Menu_item($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { child, children, ref = null, id = createId(uid), disabled = false, onSelect = noop, closeOnSelect = true, $$slots, $$events, ...restProps } = $$props;
		const itemState = MenuItemState.create({
			id: boxWith(() => id),
			disabled: boxWith(() => disabled),
			onSelect: boxWith(() => onSelect),
			ref: boxWith(() => ref, (v) => ref = v),
			closeOnSelect: boxWith(() => closeOnSelect)
		});
		const mergedProps = derived$1(() => mergeProps(restProps, itemState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/menu/components/menu-group.svelte
function Menu_group($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { children, child, ref = null, id = createId(uid), $$slots, $$events, ...restProps } = $$props;
		const groupState = MenuGroupState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived$1(() => mergeProps(restProps, groupState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/menu/components/menu-separator.svelte
function Menu_separator($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { ref = null, id = createId(uid), child, children, $$slots, $$events, ...restProps } = $$props;
		const separatorState = MenuSeparatorState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived$1(() => mergeProps(restProps, separatorState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/internal/safe-polygon.svelte.js
function isPointInPolygon(point, polygon) {
	const [x, y] = point;
	let isInside = false;
	const length = polygon.length;
	for (let i = 0, j = length - 1; i < length; j = i++) {
		const [xi, yi] = polygon[i] ?? [0, 0];
		const [xj, yj] = polygon[j] ?? [0, 0];
		if (yi >= y !== yj >= y && x <= (xj - xi) * (y - yi) / (yj - yi) + xi) isInside = !isInside;
	}
	return isInside;
}
function isInsideRect(point, rect) {
	return point[0] >= rect.left && point[0] <= rect.right && point[1] >= rect.top && point[1] <= rect.bottom;
}
function getSide(triggerRect, contentRect) {
	const triggerCenterX = triggerRect.left + triggerRect.width / 2;
	const triggerCenterY = triggerRect.top + triggerRect.height / 2;
	const contentCenterX = contentRect.left + contentRect.width / 2;
	const contentCenterY = contentRect.top + contentRect.height / 2;
	const deltaX = contentCenterX - triggerCenterX;
	const deltaY = contentCenterY - triggerCenterY;
	if (Math.abs(deltaX) > Math.abs(deltaY)) return deltaX > 0 ? "right" : "left";
	return deltaY > 0 ? "bottom" : "top";
}
/**
* Creates a safe polygon area that allows users to move their cursor between
* the trigger and floating content without closing it.
*/
var SafePolygon = class {
	#opts;
	#buffer;
	#transitIntentTimeout;
	#exitPoint = null;
	#exitTarget = null;
	#transitTargets = [];
	#trackedTriggerNode = null;
	#leaveFallbackRafId = null;
	#transitIntentTimeoutId = null;
	#cancelLeaveFallback() {
		if (this.#leaveFallbackRafId !== null) {
			cancelAnimationFrame(this.#leaveFallbackRafId);
			this.#leaveFallbackRafId = null;
		}
	}
	#scheduleLeaveFallback() {
		this.#cancelLeaveFallback();
		this.#leaveFallbackRafId = requestAnimationFrame(() => {
			this.#leaveFallbackRafId = null;
			if (!this.#exitPoint || !this.#exitTarget) return;
			this.#clearTracking();
			this.#opts.onPointerExit();
		});
	}
	#cancelTransitIntentTimeout() {
		if (this.#transitIntentTimeoutId !== null) {
			clearTimeout(this.#transitIntentTimeoutId);
			this.#transitIntentTimeoutId = null;
		}
	}
	#scheduleTransitIntentTimeout() {
		if (this.#transitIntentTimeout === null) return;
		this.#cancelTransitIntentTimeout();
		this.#transitIntentTimeoutId = window.setTimeout(() => {
			this.#transitIntentTimeoutId = null;
			if (!this.#exitPoint || !this.#exitTarget) return;
			this.#clearTracking();
			this.#opts.onPointerExit();
		}, this.#transitIntentTimeout);
	}
	constructor(opts) {
		this.#opts = opts;
		this.#buffer = opts.buffer ?? 1;
		const transitIntentTimeout = opts.transitIntentTimeout;
		this.#transitIntentTimeout = typeof transitIntentTimeout === "number" && transitIntentTimeout > 0 ? transitIntentTimeout : null;
		watch([
			opts.triggerNode,
			opts.contentNode,
			opts.enabled
		], ([triggerNode, contentNode, enabled]) => {
			if (!triggerNode || !contentNode || !enabled) {
				this.#trackedTriggerNode = null;
				this.#clearTracking();
				return;
			}
			if (this.#trackedTriggerNode && this.#trackedTriggerNode !== triggerNode) this.#clearTracking();
			this.#trackedTriggerNode = triggerNode;
			const doc = getDocument(triggerNode);
			const handlePointerMove = (e) => {
				this.#onPointerMove([e.clientX, e.clientY], triggerNode, contentNode);
			};
			const handleTriggerLeave = (e) => {
				const target = e.relatedTarget;
				if (isElement(target) && contentNode.contains(target)) return;
				const ignoredTargets = this.#opts.ignoredTargets?.() ?? [];
				if (isElement(target) && ignoredTargets.some((n) => n === target || n.contains(target))) return;
				this.#transitTargets = isElement(target) && ignoredTargets.length > 0 ? ignoredTargets.filter((n) => target.contains(n)) : [];
				this.#exitPoint = [e.clientX, e.clientY];
				this.#exitTarget = "content";
				this.#scheduleLeaveFallback();
			};
			const handleTriggerEnter = () => {
				this.#clearTracking();
			};
			const handleContentEnter = () => {
				this.#clearTracking();
			};
			const handleContentLeave = (e) => {
				const target = e.relatedTarget;
				if (isElement(target) && triggerNode.contains(target)) return;
				this.#exitPoint = [e.clientX, e.clientY];
				this.#exitTarget = "trigger";
				this.#scheduleLeaveFallback();
			};
			return [
				on(doc, "pointermove", handlePointerMove),
				on(triggerNode, "pointerleave", handleTriggerLeave),
				on(triggerNode, "pointerenter", handleTriggerEnter),
				on(contentNode, "pointerenter", handleContentEnter),
				on(contentNode, "pointerleave", handleContentLeave)
			].reduce((acc, cleanup) => () => {
				acc();
				cleanup();
			}, () => {});
		});
	}
	#onPointerMove(clientPoint, triggerNode, contentNode) {
		if (!this.#exitPoint || !this.#exitTarget) return;
		this.#cancelLeaveFallback();
		this.#scheduleTransitIntentTimeout();
		const triggerRect = triggerNode.getBoundingClientRect();
		const contentRect = contentNode.getBoundingClientRect();
		if (this.#exitTarget === "content" && isInsideRect(clientPoint, contentRect)) {
			this.#clearTracking();
			return;
		}
		if (this.#exitTarget === "trigger" && isInsideRect(clientPoint, triggerRect)) {
			this.#clearTracking();
			return;
		}
		if (this.#exitTarget === "content" && this.#transitTargets.length > 0) for (const transitTarget of this.#transitTargets) {
			const transitRect = transitTarget.getBoundingClientRect();
			if (isInsideRect(clientPoint, transitRect)) return;
			const transitSide = getSide(triggerRect, transitRect);
			const transitCorridor = this.#getCorridorPolygon(triggerRect, transitRect, transitSide);
			if (transitCorridor && isPointInPolygon(clientPoint, transitCorridor)) return;
		}
		const side = getSide(triggerRect, contentRect);
		const corridorPoly = this.#getCorridorPolygon(triggerRect, contentRect, side);
		if (corridorPoly && isPointInPolygon(clientPoint, corridorPoly)) return;
		const targetRect = this.#exitTarget === "content" ? contentRect : triggerRect;
		if (isPointInPolygon(clientPoint, this.#getSafePolygon(this.#exitPoint, targetRect, side, this.#exitTarget))) return;
		this.#clearTracking();
		this.#opts.onPointerExit();
	}
	#clearTracking() {
		this.#exitPoint = null;
		this.#exitTarget = null;
		this.#transitTargets = [];
		this.#cancelLeaveFallback();
		this.#cancelTransitIntentTimeout();
	}
	/**
	* Creates a rectangular corridor between trigger and content
	* This prevents closing when cursor is in the gap between them
	*/
	#getCorridorPolygon(triggerRect, contentRect, side) {
		const buffer = this.#buffer;
		switch (side) {
			case "top": return [
				[Math.min(triggerRect.left, contentRect.left) - buffer, triggerRect.top],
				[Math.min(triggerRect.left, contentRect.left) - buffer, contentRect.bottom],
				[Math.max(triggerRect.right, contentRect.right) + buffer, contentRect.bottom],
				[Math.max(triggerRect.right, contentRect.right) + buffer, triggerRect.top]
			];
			case "bottom": return [
				[Math.min(triggerRect.left, contentRect.left) - buffer, triggerRect.bottom],
				[Math.min(triggerRect.left, contentRect.left) - buffer, contentRect.top],
				[Math.max(triggerRect.right, contentRect.right) + buffer, contentRect.top],
				[Math.max(triggerRect.right, contentRect.right) + buffer, triggerRect.bottom]
			];
			case "left": return [
				[triggerRect.left, Math.min(triggerRect.top, contentRect.top) - buffer],
				[contentRect.right, Math.min(triggerRect.top, contentRect.top) - buffer],
				[contentRect.right, Math.max(triggerRect.bottom, contentRect.bottom) + buffer],
				[triggerRect.left, Math.max(triggerRect.bottom, contentRect.bottom) + buffer]
			];
			case "right": return [
				[triggerRect.right, Math.min(triggerRect.top, contentRect.top) - buffer],
				[contentRect.left, Math.min(triggerRect.top, contentRect.top) - buffer],
				[contentRect.left, Math.max(triggerRect.bottom, contentRect.bottom) + buffer],
				[triggerRect.right, Math.max(triggerRect.bottom, contentRect.bottom) + buffer]
			];
		}
	}
	/**
	* Creates a triangular/trapezoidal safe zone from the exit point to the target
	*/
	#getSafePolygon(exitPoint, targetRect, side, exitTarget) {
		const buffer = this.#buffer * 4;
		const [x, y] = exitPoint;
		switch (exitTarget === "trigger" ? this.#flipSide(side) : side) {
			case "top": return [
				[x - buffer, y + buffer],
				[x + buffer, y + buffer],
				[targetRect.right + buffer, targetRect.bottom],
				[targetRect.right + buffer, targetRect.top],
				[targetRect.left - buffer, targetRect.top],
				[targetRect.left - buffer, targetRect.bottom]
			];
			case "bottom": return [
				[x - buffer, y - buffer],
				[x + buffer, y - buffer],
				[targetRect.right + buffer, targetRect.top],
				[targetRect.right + buffer, targetRect.bottom],
				[targetRect.left - buffer, targetRect.bottom],
				[targetRect.left - buffer, targetRect.top]
			];
			case "left": return [
				[x + buffer, y - buffer],
				[x + buffer, y + buffer],
				[targetRect.right, targetRect.bottom + buffer],
				[targetRect.left, targetRect.bottom + buffer],
				[targetRect.left, targetRect.top - buffer],
				[targetRect.right, targetRect.top - buffer]
			];
			case "right": return [
				[x - buffer, y - buffer],
				[x - buffer, y + buffer],
				[targetRect.left, targetRect.bottom + buffer],
				[targetRect.right, targetRect.bottom + buffer],
				[targetRect.right, targetRect.top - buffer],
				[targetRect.left, targetRect.top - buffer]
			];
		}
	}
	#flipSide(side) {
		switch (side) {
			case "top": return "bottom";
			case "bottom": return "top";
			case "left": return "right";
			case "right": return "left";
		}
	}
};
//#endregion
//#region node_modules/bits-ui/dist/bits/popover/popover.svelte.js
var popoverAttrs = createBitsAttrs({
	component: "popover",
	parts: [
		"root",
		"trigger",
		"content",
		"close",
		"overlay"
	]
});
var PopoverRootContext = new Context("Popover.Root");
var PopoverRootState = class PopoverRootState {
	static create(opts) {
		return PopoverRootContext.set(new PopoverRootState(opts));
	}
	opts;
	contentNode = null;
	contentPresence;
	triggerNode = null;
	overlayNode = null;
	overlayPresence;
	openedViaHover = false;
	hasInteractedWithContent = false;
	hoverCooldown = false;
	closeDelay = 0;
	#closeTimeout = null;
	#domContext = null;
	constructor(opts) {
		this.opts = opts;
		this.contentPresence = new PresenceManager({
			ref: boxWith(() => this.contentNode),
			open: this.opts.open,
			onComplete: () => {
				this.opts.onOpenChangeComplete.current(this.opts.open.current);
			}
		});
		this.overlayPresence = new PresenceManager({
			ref: boxWith(() => this.overlayNode),
			open: this.opts.open
		});
		watch(() => this.opts.open.current, (isOpen) => {
			if (!isOpen) {
				this.openedViaHover = false;
				this.hasInteractedWithContent = false;
				this.#clearCloseTimeout();
			}
		});
	}
	setDomContext(ctx) {
		this.#domContext = ctx;
	}
	#clearCloseTimeout() {
		if (this.#closeTimeout !== null && this.#domContext) {
			this.#domContext.clearTimeout(this.#closeTimeout);
			this.#closeTimeout = null;
		}
	}
	toggleOpen() {
		this.#clearCloseTimeout();
		this.opts.open.current = !this.opts.open.current;
	}
	handleClose() {
		this.#clearCloseTimeout();
		if (!this.opts.open.current) return;
		this.opts.open.current = false;
	}
	handleHoverOpen() {
		this.#clearCloseTimeout();
		if (this.opts.open.current) return;
		this.openedViaHover = true;
		this.opts.open.current = true;
	}
	handleHoverClose() {
		if (!this.opts.open.current) return;
		if (this.openedViaHover && !this.hasInteractedWithContent) this.opts.open.current = false;
	}
	handleDelayedHoverClose() {
		if (!this.opts.open.current) return;
		if (!this.openedViaHover || this.hasInteractedWithContent) return;
		this.#clearCloseTimeout();
		if (this.closeDelay <= 0) this.opts.open.current = false;
		else if (this.#domContext) this.#closeTimeout = this.#domContext.setTimeout(() => {
			if (this.openedViaHover && !this.hasInteractedWithContent) this.opts.open.current = false;
			this.#closeTimeout = null;
		}, this.closeDelay);
	}
	cancelDelayedClose() {
		this.#clearCloseTimeout();
	}
	markInteraction() {
		this.hasInteractedWithContent = true;
		this.#clearCloseTimeout();
	}
};
var PopoverTriggerState = class PopoverTriggerState {
	static create(opts) {
		return new PopoverTriggerState(opts, PopoverRootContext.get());
	}
	opts;
	root;
	attachment;
	domContext;
	#openTimeout = null;
	#closeTimeout = null;
	#isHovering = false;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref, (v) => this.root.triggerNode = v);
		this.domContext = new DOMContext(opts.ref);
		this.root.setDomContext(this.domContext);
		this.onclick = this.onclick.bind(this);
		this.onkeydown = this.onkeydown.bind(this);
		this.onpointerenter = this.onpointerenter.bind(this);
		this.onpointerleave = this.onpointerleave.bind(this);
		watch(() => this.opts.closeDelay.current, (delay) => {
			this.root.closeDelay = delay;
		});
	}
	#clearOpenTimeout() {
		if (this.#openTimeout !== null) {
			this.domContext.clearTimeout(this.#openTimeout);
			this.#openTimeout = null;
		}
	}
	#clearCloseTimeout() {
		if (this.#closeTimeout !== null) {
			this.domContext.clearTimeout(this.#closeTimeout);
			this.#closeTimeout = null;
		}
	}
	#clearAllTimeouts() {
		this.#clearOpenTimeout();
		this.#clearCloseTimeout();
	}
	onpointerenter(e) {
		if (this.opts.disabled.current) return;
		if (!this.opts.openOnHover.current) return;
		if (isTouch(e)) return;
		this.#isHovering = true;
		this.#clearCloseTimeout();
		this.root.cancelDelayedClose();
		if (this.root.opts.open.current || this.root.hoverCooldown) return;
		const delay = this.opts.openDelay.current;
		if (delay <= 0) this.root.handleHoverOpen();
		else this.#openTimeout = this.domContext.setTimeout(() => {
			this.root.handleHoverOpen();
			this.#openTimeout = null;
		}, delay);
	}
	onpointerleave(e) {
		if (this.opts.disabled.current) return;
		if (!this.opts.openOnHover.current) return;
		if (isTouch(e)) return;
		this.#isHovering = false;
		this.#clearOpenTimeout();
		this.root.hoverCooldown = false;
	}
	onclick(e) {
		if (this.opts.disabled.current) return;
		if (e.button !== 0) return;
		this.#clearAllTimeouts();
		if (this.#isHovering && this.root.opts.open.current && this.root.openedViaHover) {
			this.root.openedViaHover = false;
			this.root.hasInteractedWithContent = true;
			return;
		}
		if (this.#isHovering && this.opts.openOnHover.current && this.root.opts.open.current) this.root.hoverCooldown = true;
		if (this.root.hoverCooldown && !this.root.opts.open.current) this.root.hoverCooldown = false;
		this.root.toggleOpen();
	}
	onkeydown(e) {
		if (this.opts.disabled.current) return;
		if (!(e.key === "Enter" || e.key === " ")) return;
		e.preventDefault();
		this.#clearAllTimeouts();
		this.root.toggleOpen();
	}
	#getAriaControls() {
		if (this.root.opts.open.current && this.root.contentNode?.id) return this.root.contentNode?.id;
	}
	#props = derived$1(() => ({
		id: this.opts.id.current,
		"aria-haspopup": "dialog",
		"aria-expanded": boolToStr(this.root.opts.open.current),
		"data-state": getDataOpenClosed(this.root.opts.open.current),
		"aria-controls": this.#getAriaControls(),
		[popoverAttrs.trigger]: "",
		disabled: this.opts.disabled.current,
		onkeydown: this.onkeydown,
		onclick: this.onclick,
		onpointerenter: this.onpointerenter,
		onpointerleave: this.onpointerleave,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var PopoverContentState = class PopoverContentState {
	static create(opts) {
		return new PopoverContentState(opts, PopoverRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref, (v) => this.root.contentNode = v);
		this.onpointerdown = this.onpointerdown.bind(this);
		this.onfocusin = this.onfocusin.bind(this);
		this.onpointerenter = this.onpointerenter.bind(this);
		this.onpointerleave = this.onpointerleave.bind(this);
		new SafePolygon({
			triggerNode: () => this.root.triggerNode,
			contentNode: () => this.root.contentNode,
			enabled: () => this.root.opts.open.current && this.root.openedViaHover && !this.root.hasInteractedWithContent,
			onPointerExit: () => {
				this.root.handleDelayedHoverClose();
			}
		});
	}
	onpointerdown(_) {
		this.root.markInteraction();
	}
	onfocusin(e) {
		const target = e.target;
		if (isElement(target) && isTabbable(target)) this.root.markInteraction();
	}
	onpointerenter(e) {
		if (isTouch(e)) return;
		this.root.cancelDelayedClose();
	}
	onpointerleave(e) {
		if (isTouch(e)) return;
	}
	onInteractOutside = (e) => {
		this.opts.onInteractOutside.current(e);
		if (e.defaultPrevented) return;
		if (!isElement(e.target)) return;
		const closestTrigger = e.target.closest(popoverAttrs.selector("trigger"));
		if (closestTrigger && closestTrigger === this.root.triggerNode) return;
		if (this.opts.customAnchor.current) {
			if (isElement(this.opts.customAnchor.current)) {
				if (this.opts.customAnchor.current.contains(e.target)) return;
			} else if (typeof this.opts.customAnchor.current === "string") {
				const el = document.querySelector(this.opts.customAnchor.current);
				if (el && el.contains(e.target)) return;
			}
		}
		this.root.handleClose();
	};
	onEscapeKeydown = (e) => {
		this.opts.onEscapeKeydown.current(e);
		if (e.defaultPrevented) return;
		this.root.handleClose();
	};
	get shouldRender() {
		return this.root.contentPresence.shouldRender;
	}
	get shouldTrapFocus() {
		if (this.root.openedViaHover && !this.root.hasInteractedWithContent) return false;
		return true;
	}
	#snippetProps = derived$1(() => ({ open: this.root.opts.open.current }));
	get snippetProps() {
		return this.#snippetProps();
	}
	set snippetProps($$value) {
		return this.#snippetProps($$value);
	}
	#props = derived$1(() => ({
		id: this.opts.id.current,
		tabindex: -1,
		"data-state": getDataOpenClosed(this.root.opts.open.current),
		...getDataTransitionAttrs(this.root.contentPresence.transitionStatus),
		[popoverAttrs.content]: "",
		style: {
			pointerEvents: "auto",
			contain: "layout style"
		},
		onpointerdown: this.onpointerdown,
		onfocusin: this.onfocusin,
		onpointerenter: this.onpointerenter,
		onpointerleave: this.onpointerleave,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
	popperProps = {
		onInteractOutside: this.onInteractOutside,
		onEscapeKeydown: this.onEscapeKeydown
	};
};
//#endregion
//#region node_modules/bits-ui/dist/bits/popover/components/popover-content.svelte
function Popover_content$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { child, children, ref = null, id = createId(uid), forceMount = false, onOpenAutoFocus = noop, onCloseAutoFocus = noop, onEscapeKeydown = noop, onInteractOutside = noop, trapFocus = true, preventScroll = false, customAnchor = null, style, $$slots, $$events, ...restProps } = $$props;
		const contentState = PopoverContentState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v),
			onInteractOutside: boxWith(() => onInteractOutside),
			onEscapeKeydown: boxWith(() => onEscapeKeydown),
			customAnchor: boxWith(() => customAnchor)
		});
		const mergedProps = derived$1(() => mergeProps(restProps, contentState.props));
		const effectiveTrapFocus = derived$1(() => trapFocus && contentState.shouldTrapFocus);
		function handleOpenAutoFocus(e) {
			if (!contentState.shouldTrapFocus) e.preventDefault();
			onOpenAutoFocus(e);
		}
		if (forceMount) {
			$$renderer.push("<!--[0-->");
			{
				function popper($$renderer, { props, wrapperProps }) {
					const finalProps = mergeProps(props, { style: getFloatingContentCSSVars("popover") }, { style });
					if (child) {
						$$renderer.push("<!--[0-->");
						child($$renderer, {
							props: finalProps,
							wrapperProps,
							...contentState.snippetProps
						});
						$$renderer.push(`<!---->`);
					} else {
						$$renderer.push("<!--[-1-->");
						$$renderer.push(`<div${attributes({ ...wrapperProps })}><div${attributes({ ...finalProps })}>`);
						children?.($$renderer);
						$$renderer.push(`<!----></div></div>`);
					}
					$$renderer.push(`<!--]-->`);
				}
				Popper_layer_force_mount($$renderer, spread_props([
					mergedProps(),
					contentState.popperProps,
					{
						ref: contentState.opts.ref,
						enabled: contentState.root.opts.open.current,
						id,
						trapFocus: effectiveTrapFocus(),
						preventScroll,
						loop: true,
						forceMount: true,
						customAnchor,
						onOpenAutoFocus: handleOpenAutoFocus,
						onCloseAutoFocus,
						shouldRender: contentState.shouldRender,
						popper,
						$$slots: { popper: true }
					}
				]));
			}
		} else if (!forceMount) {
			$$renderer.push("<!--[1-->");
			{
				function popper($$renderer, { props, wrapperProps }) {
					const finalProps = mergeProps(props, { style: getFloatingContentCSSVars("popover") }, { style });
					if (child) {
						$$renderer.push("<!--[0-->");
						child($$renderer, {
							props: finalProps,
							wrapperProps,
							...contentState.snippetProps
						});
						$$renderer.push(`<!---->`);
					} else {
						$$renderer.push("<!--[-1-->");
						$$renderer.push(`<div${attributes({ ...wrapperProps })}><div${attributes({ ...finalProps })}>`);
						children?.($$renderer);
						$$renderer.push(`<!----></div></div>`);
					}
					$$renderer.push(`<!--]-->`);
				}
				Popper_layer($$renderer, spread_props([
					mergedProps(),
					contentState.popperProps,
					{
						ref: contentState.opts.ref,
						open: contentState.root.opts.open.current,
						id,
						trapFocus: effectiveTrapFocus(),
						preventScroll,
						loop: true,
						forceMount: false,
						customAnchor,
						onOpenAutoFocus: handleOpenAutoFocus,
						onCloseAutoFocus,
						shouldRender: contentState.shouldRender,
						popper,
						$$slots: { popper: true }
					}
				]));
			}
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/popover/components/popover-trigger.svelte
function Popover_trigger$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { children, child, id = createId(uid), ref = null, type = "button", disabled = false, openOnHover = false, openDelay = 700, closeDelay = 300, $$slots, $$events, ...restProps } = $$props;
		const triggerState = PopoverTriggerState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v),
			disabled: boxWith(() => Boolean(disabled)),
			openOnHover: boxWith(() => openOnHover),
			openDelay: boxWith(() => openDelay),
			closeDelay: boxWith(() => closeDelay)
		});
		const mergedProps = derived$1(() => mergeProps(restProps, triggerState.props, { type }));
		Floating_layer_anchor($$renderer, {
			id,
			ref: triggerState.opts.ref,
			children: ($$renderer) => {
				if (child) {
					$$renderer.push("<!--[0-->");
					child($$renderer, { props: mergedProps() });
					$$renderer.push(`<!---->`);
				} else {
					$$renderer.push("<!--[-1-->");
					$$renderer.push(`<button${attributes({ ...mergedProps() })}>`);
					children?.($$renderer);
					$$renderer.push(`<!----></button>`);
				}
				$$renderer.push(`<!--]-->`);
			},
			$$slots: { default: true }
		});
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/menu/components/menu.svelte
function Menu($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { open = false, dir = "ltr", onOpenChange = noop, onOpenChangeComplete = noop, _internal_variant: variant = "dropdown-menu", _internal_should_skip_exit_animation: shouldSkipExitAnimation = void 0, children } = $$props;
		const root = MenuRootState.create({
			variant: boxWith(() => variant),
			dir: boxWith(() => dir),
			onClose: () => {
				open = false;
				onOpenChange(false);
			},
			shouldSkipExitAnimation: () => shouldSkipExitAnimation?.() ?? false
		});
		MenuMenuState.create({
			open: boxWith(() => open, (v) => {
				open = v;
				onOpenChange(v);
			}),
			onOpenChangeComplete: boxWith(() => onOpenChangeComplete)
		}, root);
		Floating_layer($$renderer, {
			children: ($$renderer) => {
				children?.($$renderer);
				$$renderer.push(`<!---->`);
			},
			$$slots: { default: true }
		});
		bind_props($$props, { open });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/dropdown-menu/components/dropdown-menu-content.svelte
function Dropdown_menu_content$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { id = createId(uid), child, children, ref = null, loop = true, onInteractOutside = noop, onEscapeKeydown = noop, onCloseAutoFocus = noop, forceMount = false, trapFocus = false, style, $$slots, $$events, ...restProps } = $$props;
		const contentState = MenuContentState.create({
			id: boxWith(() => id),
			loop: boxWith(() => loop),
			ref: boxWith(() => ref, (v) => ref = v),
			onCloseAutoFocus: boxWith(() => onCloseAutoFocus)
		});
		const mergedProps = derived$1(() => mergeProps(restProps, contentState.props));
		function handleInteractOutside(e) {
			contentState.handleInteractOutside(e);
			if (e.defaultPrevented) return;
			onInteractOutside(e);
			if (e.defaultPrevented) return;
			if (e.target && e.target instanceof Element) {
				const subContentSelector = `[${contentState.parentMenu.root.getBitsAttr("sub-content")}]`;
				if (e.target.closest(subContentSelector)) return;
			}
			contentState.parentMenu.onClose();
		}
		function handleEscapeKeydown(e) {
			onEscapeKeydown(e);
			if (e.defaultPrevented) return;
			contentState.parentMenu.onClose();
		}
		if (forceMount) {
			$$renderer.push("<!--[0-->");
			{
				function popper($$renderer, { props, wrapperProps }) {
					const finalProps = mergeProps(props, { style: getFloatingContentCSSVars("dropdown-menu") }, { style });
					if (child) {
						$$renderer.push("<!--[0-->");
						child($$renderer, {
							props: finalProps,
							wrapperProps,
							...contentState.snippetProps
						});
						$$renderer.push(`<!---->`);
					} else {
						$$renderer.push("<!--[-1-->");
						$$renderer.push(`<div${attributes({ ...wrapperProps })}><div${attributes({ ...finalProps })}>`);
						children?.($$renderer);
						$$renderer.push(`<!----></div></div>`);
					}
					$$renderer.push(`<!--]-->`);
				}
				Popper_layer_force_mount($$renderer, spread_props([
					mergedProps(),
					contentState.popperProps,
					{
						ref: contentState.opts.ref,
						enabled: contentState.parentMenu.opts.open.current,
						onInteractOutside: handleInteractOutside,
						onEscapeKeydown: handleEscapeKeydown,
						trapFocus,
						loop,
						forceMount: true,
						id,
						shouldRender: contentState.shouldRender,
						popper,
						$$slots: { popper: true }
					}
				]));
			}
		} else if (!forceMount) {
			$$renderer.push("<!--[1-->");
			{
				function popper($$renderer, { props, wrapperProps }) {
					const finalProps = mergeProps(props, { style: getFloatingContentCSSVars("dropdown-menu") }, { style });
					if (child) {
						$$renderer.push("<!--[0-->");
						child($$renderer, {
							props: finalProps,
							wrapperProps,
							...contentState.snippetProps
						});
						$$renderer.push(`<!---->`);
					} else {
						$$renderer.push("<!--[-1-->");
						$$renderer.push(`<div${attributes({ ...wrapperProps })}><div${attributes({ ...finalProps })}>`);
						children?.($$renderer);
						$$renderer.push(`<!----></div></div>`);
					}
					$$renderer.push(`<!--]-->`);
				}
				Popper_layer($$renderer, spread_props([
					mergedProps(),
					contentState.popperProps,
					{
						ref: contentState.opts.ref,
						open: contentState.parentMenu.opts.open.current,
						onInteractOutside: handleInteractOutside,
						onEscapeKeydown: handleEscapeKeydown,
						trapFocus,
						loop,
						forceMount: false,
						id,
						shouldRender: contentState.shouldRender,
						popper,
						$$slots: { popper: true }
					}
				]));
			}
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/menu/components/menu-trigger.svelte
function Menu_trigger($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { id = createId(uid), ref = null, child, children, disabled = false, type = "button", $$slots, $$events, ...restProps } = $$props;
		const triggerState = DropdownMenuTriggerState.create({
			id: boxWith(() => id),
			disabled: boxWith(() => disabled ?? false),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived$1(() => mergeProps(restProps, triggerState.props, { type }));
		Floating_layer_anchor($$renderer, {
			id,
			ref: triggerState.opts.ref,
			children: ($$renderer) => {
				if (child) {
					$$renderer.push("<!--[0-->");
					child($$renderer, { props: mergedProps() });
					$$renderer.push(`<!---->`);
				} else {
					$$renderer.push("<!--[-1-->");
					$$renderer.push(`<button${attributes({ ...mergedProps() })}>`);
					children?.($$renderer);
					$$renderer.push(`<!----></button>`);
				}
				$$renderer.push(`<!--]-->`);
			},
			$$slots: { default: true }
		});
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/label/label.svelte.js
var labelAttrs = createBitsAttrs({
	component: "label",
	parts: ["root"]
});
var LabelRootState = class LabelRootState {
	static create(opts) {
		return new LabelRootState(opts);
	}
	opts;
	attachment;
	constructor(opts) {
		this.opts = opts;
		this.attachment = attachRef(this.opts.ref);
		this.onmousedown = this.onmousedown.bind(this);
	}
	onmousedown(e) {
		if (e.detail > 1) e.preventDefault();
	}
	#props = derived$1(() => ({
		id: this.opts.id.current,
		[labelAttrs.root]: "",
		onmousedown: this.onmousedown,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
//#endregion
//#region node_modules/bits-ui/dist/bits/label/components/label.svelte
function Label$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { children, child, id = createId(uid), ref = null, for: forProp, $$slots, $$events, ...restProps } = $$props;
		const rootState = LabelRootState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived$1(() => mergeProps(restProps, rootState.props, { for: forProp }));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<label${attributes({
				...mergedProps(),
				for: forProp
			})}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></label>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/link-preview/link-preview.svelte.js
var linkPreviewAttrs = createBitsAttrs({
	component: "link-preview",
	parts: ["content", "trigger"]
});
var LinkPreviewRootContext = new Context("LinkPreview.Root");
var LinkPreviewRootState = class LinkPreviewRootState {
	static create(opts) {
		return LinkPreviewRootContext.set(new LinkPreviewRootState(opts));
	}
	opts;
	hasSelection = false;
	isPointerDownOnContent = false;
	containsSelection = false;
	timeout = null;
	contentNode = null;
	contentMounted = false;
	contentPresence;
	triggerNode = null;
	isOpening = false;
	domContext = new DOMContext(() => null);
	constructor(opts) {
		this.opts = opts;
		this.contentPresence = new PresenceManager({
			ref: boxWith(() => this.contentNode),
			open: this.opts.open,
			onComplete: () => {
				this.opts.onOpenChangeComplete.current(this.opts.open.current);
			}
		});
		watch(() => this.opts.open.current, (isOpen) => {
			if (!isOpen) {
				this.hasSelection = false;
				return;
			}
			if (!this.domContext) return;
			const handlePointerUp = () => {
				this.containsSelection = false;
				this.isPointerDownOnContent = false;
				afterSleep(1, () => {
					if (this.domContext.getDocument().getSelection()?.toString() !== "") this.hasSelection = true;
					else this.hasSelection = false;
				});
			};
			const unsubListener = on(this.domContext.getDocument(), "pointerup", handlePointerUp);
			if (!this.contentNode) return;
			const tabCandidates = getTabbableCandidates(this.contentNode);
			for (const candidate of tabCandidates) candidate.setAttribute("tabindex", "-1");
			return () => {
				unsubListener();
				this.hasSelection = false;
				this.isPointerDownOnContent = false;
			};
		});
	}
	clearTimeout() {
		if (this.timeout) {
			this.domContext.clearTimeout(this.timeout);
			this.timeout = null;
		}
	}
	handleOpen() {
		this.clearTimeout();
		if (this.opts.open.current || this.opts.disabled.current) return;
		this.isOpening = true;
		this.timeout = this.domContext.setTimeout(() => {
			if (this.isOpening) {
				this.opts.open.current = true;
				this.isOpening = false;
			}
		}, this.opts.openDelay.current);
	}
	immediateClose() {
		this.clearTimeout();
		this.isOpening = false;
		this.opts.open.current = false;
	}
	handleClose() {
		this.isOpening = false;
		this.clearTimeout();
		if (!this.isPointerDownOnContent && !this.hasSelection) this.timeout = this.domContext.setTimeout(() => {
			this.opts.open.current = false;
		}, this.opts.closeDelay.current);
	}
};
var LinkPreviewTriggerState = class LinkPreviewTriggerState {
	static create(opts) {
		return new LinkPreviewTriggerState(opts, LinkPreviewRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref, (v) => this.root.triggerNode = v);
		this.root.domContext = new DOMContext(opts.ref);
		this.onpointerenter = this.onpointerenter.bind(this);
		this.onpointerleave = this.onpointerleave.bind(this);
		this.onfocus = this.onfocus.bind(this);
		this.onblur = this.onblur.bind(this);
	}
	onpointerenter(e) {
		if (isTouch(e)) return;
		this.root.handleOpen();
	}
	onpointerleave(e) {
		if (isTouch(e)) return;
		if (!this.root.contentMounted || !this.root.opts.open.current) this.root.immediateClose();
	}
	onfocus(e) {
		if (!isFocusVisible(e.currentTarget)) return;
		this.root.handleOpen();
	}
	onblur(_) {
		this.root.handleClose();
	}
	#props = derived$1(() => ({
		id: this.opts.id.current,
		"aria-haspopup": "dialog",
		"aria-expanded": boolToStr(this.root.opts.open.current),
		"data-state": getDataOpenClosed(this.root.opts.open.current),
		"aria-controls": this.root.contentNode?.id,
		role: "button",
		[linkPreviewAttrs.trigger]: "",
		onpointerenter: this.onpointerenter,
		onfocus: this.onfocus,
		onblur: this.onblur,
		onpointerleave: this.onpointerleave,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var LinkPreviewContentState = class LinkPreviewContentState {
	static create(opts) {
		return new LinkPreviewContentState(opts, LinkPreviewRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref, (v) => this.root.contentNode = v);
		this.root.domContext = new DOMContext(opts.ref);
		this.onpointerdown = this.onpointerdown.bind(this);
		this.onpointerenter = this.onpointerenter.bind(this);
		this.onfocusout = this.onfocusout.bind(this);
		new SafePolygon({
			triggerNode: () => this.root.triggerNode,
			contentNode: () => this.opts.ref.current,
			enabled: () => this.root.opts.open.current,
			onPointerExit: () => {
				this.root.handleClose();
			}
		});
	}
	onpointerdown(e) {
		const target = e.target;
		if (!isElement(target)) return;
		if (e.currentTarget.contains(target)) this.root.containsSelection = true;
		this.root.hasSelection = true;
		this.root.isPointerDownOnContent = true;
	}
	onpointerenter(e) {
		if (isTouch(e)) return;
		this.root.handleOpen();
	}
	onfocusout(e) {
		e.preventDefault();
	}
	onInteractOutside = (e) => {
		this.opts.onInteractOutside.current(e);
		if (e.defaultPrevented) return;
		this.root.handleClose();
	};
	onEscapeKeydown = (e) => {
		this.opts.onEscapeKeydown.current?.(e);
		if (e.defaultPrevented) return;
		this.root.handleClose();
	};
	onOpenAutoFocus = (e) => {
		e.preventDefault();
	};
	onCloseAutoFocus = (e) => {
		e.preventDefault();
	};
	get shouldRender() {
		return this.root.contentPresence.shouldRender;
	}
	#snippetProps = derived$1(() => ({ open: this.root.opts.open.current }));
	get snippetProps() {
		return this.#snippetProps();
	}
	set snippetProps($$value) {
		return this.#snippetProps($$value);
	}
	#props = derived$1(() => ({
		id: this.opts.id.current,
		tabindex: -1,
		"data-state": getDataOpenClosed(this.root.opts.open.current),
		...getDataTransitionAttrs(this.root.contentPresence.transitionStatus),
		[linkPreviewAttrs.content]: "",
		onpointerdown: this.onpointerdown,
		onpointerenter: this.onpointerenter,
		onfocusout: this.onfocusout,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
	popperProps = {
		onInteractOutside: this.onInteractOutside,
		onEscapeKeydown: this.onEscapeKeydown,
		onOpenAutoFocus: this.onOpenAutoFocus,
		onCloseAutoFocus: this.onCloseAutoFocus
	};
};
//#endregion
//#region node_modules/bits-ui/dist/bits/link-preview/components/link-preview.svelte
function Link_preview($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { disabled = false, open = false, onOpenChange = noop, onOpenChangeComplete = noop, openDelay = 700, closeDelay = 300, children } = $$props;
		LinkPreviewRootState.create({
			disabled: boxWith(() => disabled),
			open: boxWith(() => open, (v) => {
				open = v;
				onOpenChange(v);
			}),
			openDelay: boxWith(() => openDelay),
			closeDelay: boxWith(() => closeDelay),
			onOpenChangeComplete: boxWith(() => onOpenChangeComplete)
		});
		if (Floating_layer) {
			$$renderer.push("<!--[-->");
			Floating_layer($$renderer, {
				children: ($$renderer) => {
					children?.($$renderer);
					$$renderer.push(`<!---->`);
				},
				$$slots: { default: true }
			});
			$$renderer.push("<!--]-->");
		} else {
			$$renderer.push("<!--[!-->");
			$$renderer.push("<!--]-->");
		}
		bind_props($$props, { open });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/link-preview/components/link-preview-content.svelte
function Link_preview_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { children, child, id = createId(uid), ref = null, side = "top", sideOffset = 0, align = "center", avoidCollisions = true, arrowPadding = 0, sticky = "partial", hideWhenDetached = false, collisionPadding = 0, onInteractOutside = noop, onEscapeKeydown = noop, forceMount = false, style, $$slots, $$events, ...restProps } = $$props;
		const contentState = LinkPreviewContentState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v),
			onInteractOutside: boxWith(() => onInteractOutside),
			onEscapeKeydown: boxWith(() => onEscapeKeydown)
		});
		const floatingProps = derived$1(() => ({
			side,
			sideOffset,
			align,
			avoidCollisions,
			arrowPadding,
			sticky,
			hideWhenDetached,
			collisionPadding
		}));
		const mergedProps = derived$1(() => mergeProps(restProps, floatingProps(), contentState.props));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (forceMount) {
				$$renderer.push("<!--[0-->");
				{
					function popper($$renderer, { props, wrapperProps }) {
						const finalProps = mergeProps(props, { style: getFloatingContentCSSVars("link-preview") }, { style });
						if (child) {
							$$renderer.push("<!--[0-->");
							child($$renderer, {
								props: finalProps,
								wrapperProps,
								...contentState.snippetProps
							});
							$$renderer.push(`<!---->`);
						} else {
							$$renderer.push("<!--[-1-->");
							$$renderer.push(`<div${attributes({ ...wrapperProps })}><div${attributes({ ...finalProps })}>`);
							children?.($$renderer);
							$$renderer.push(`<!----></div></div>`);
						}
						$$renderer.push(`<!--]--> `);
						Mounted($$renderer, {
							get mounted() {
								return contentState.root.contentMounted;
							},
							set mounted($$value) {
								contentState.root.contentMounted = $$value;
								$$settled = false;
							}
						});
						$$renderer.push(`<!---->`);
					}
					Popper_layer_force_mount($$renderer, spread_props([
						mergedProps(),
						contentState.popperProps,
						{
							ref: contentState.opts.ref,
							enabled: contentState.root.opts.open.current,
							id,
							trapFocus: false,
							loop: false,
							preventScroll: false,
							forceMount: true,
							shouldRender: contentState.shouldRender,
							popper,
							$$slots: { popper: true }
						}
					]));
				}
			} else if (!forceMount) {
				$$renderer.push("<!--[1-->");
				{
					function popper($$renderer, { props, wrapperProps }) {
						const finalProps = mergeProps(props, { style: getFloatingContentCSSVars("link-preview") }, { style });
						if (child) {
							$$renderer.push("<!--[0-->");
							child($$renderer, {
								props: finalProps,
								wrapperProps,
								...contentState.snippetProps
							});
							$$renderer.push(`<!---->`);
						} else {
							$$renderer.push("<!--[-1-->");
							$$renderer.push(`<div${attributes({ ...wrapperProps })}><div${attributes({ ...finalProps })}>`);
							children?.($$renderer);
							$$renderer.push(`<!----></div></div>`);
						}
						$$renderer.push(`<!--]--> `);
						Mounted($$renderer, {
							get mounted() {
								return contentState.root.contentMounted;
							},
							set mounted($$value) {
								contentState.root.contentMounted = $$value;
								$$settled = false;
							}
						});
						$$renderer.push(`<!---->`);
					}
					Popper_layer($$renderer, spread_props([
						mergedProps(),
						contentState.popperProps,
						{
							ref: contentState.opts.ref,
							open: contentState.root.opts.open.current,
							id,
							trapFocus: false,
							loop: false,
							preventScroll: false,
							forceMount: false,
							shouldRender: contentState.shouldRender,
							popper,
							$$slots: { popper: true }
						}
					]));
				}
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]-->`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/link-preview/components/link-preview-trigger.svelte
function Link_preview_trigger($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { ref = null, id = createId(uid), child, children, $$slots, $$events, ...restProps } = $$props;
		const triggerState = LinkPreviewTriggerState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived$1(() => mergeProps(restProps, triggerState.props));
		if (Floating_layer_anchor) {
			$$renderer.push("<!--[-->");
			Floating_layer_anchor($$renderer, {
				id,
				ref: triggerState.opts.ref,
				children: ($$renderer) => {
					if (child) {
						$$renderer.push("<!--[0-->");
						child($$renderer, { props: mergedProps() });
						$$renderer.push(`<!---->`);
					} else {
						$$renderer.push("<!--[-1-->");
						$$renderer.push(`<a${attributes({ ...mergedProps() })}>`);
						children?.($$renderer);
						$$renderer.push(`<!----></a>`);
					}
					$$renderer.push(`<!--]-->`);
				},
				$$slots: { default: true }
			});
			$$renderer.push("<!--]-->");
		} else {
			$$renderer.push("<!--[!-->");
			$$renderer.push("<!--]-->");
		}
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/popover/components/popover.svelte
function Popover$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { open = false, onOpenChange = noop, onOpenChangeComplete = noop, children } = $$props;
		PopoverRootState.create({
			open: boxWith(() => open, (v) => {
				open = v;
				onOpenChange(v);
			}),
			onOpenChangeComplete: boxWith(() => onOpenChangeComplete)
		});
		Floating_layer($$renderer, {
			children: ($$renderer) => {
				children?.($$renderer);
				$$renderer.push(`<!---->`);
			},
			$$slots: { default: true }
		});
		bind_props($$props, { open });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/radio-group/radio-group.svelte.js
var radioGroupAttrs = createBitsAttrs({
	component: "radio-group",
	parts: ["root", "item"]
});
var RadioGroupRootContext = new Context("RadioGroup.Root");
var RadioGroupRootState = class RadioGroupRootState {
	static create(opts) {
		return RadioGroupRootContext.set(new RadioGroupRootState(opts));
	}
	opts;
	#hasValue = derived$1(() => this.opts.value.current !== "");
	get hasValue() {
		return this.#hasValue();
	}
	set hasValue($$value) {
		return this.#hasValue($$value);
	}
	rovingFocusGroup;
	attachment;
	isKeyboardNavigating = false;
	constructor(opts) {
		this.opts = opts;
		this.attachment = attachRef(this.opts.ref);
		this.rovingFocusGroup = new RovingFocusGroup({
			rootNode: this.opts.ref,
			candidateAttr: radioGroupAttrs.item,
			loop: this.opts.loop,
			orientation: this.opts.orientation
		});
	}
	isChecked(value) {
		return this.opts.value.current === value;
	}
	setValue(value) {
		this.opts.value.current = value;
	}
	#props = derived$1(() => ({
		id: this.opts.id.current,
		role: "radiogroup",
		"aria-required": boolToStr(this.opts.required.current),
		"aria-disabled": boolToStr(this.opts.disabled.current),
		"aria-readonly": this.opts.readonly.current ? "true" : void 0,
		"data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
		"data-readonly": boolToEmptyStrOrUndef(this.opts.readonly.current),
		"data-orientation": this.opts.orientation.current,
		[radioGroupAttrs.root]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var RadioGroupItemState = class RadioGroupItemState {
	static create(opts) {
		return new RadioGroupItemState(opts, RadioGroupRootContext.get());
	}
	opts;
	root;
	attachment;
	#checked = derived$1(() => this.root.opts.value.current === this.opts.value.current);
	get checked() {
		return this.#checked();
	}
	set checked($$value) {
		return this.#checked($$value);
	}
	#isDisabled = derived$1(() => this.opts.disabled.current || this.root.opts.disabled.current);
	#isReadonly = derived$1(() => this.root.opts.readonly.current);
	#isChecked = derived$1(() => this.root.isChecked(this.opts.value.current));
	#tabIndex = -1;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref);
		if (this.opts.value.current === this.root.opts.value.current) {
			this.root.rovingFocusGroup.setCurrentTabStopId(this.opts.id.current);
			this.#tabIndex = 0;
		} else if (!this.root.opts.value.current) this.#tabIndex = 0;
		watch([() => this.opts.value.current, () => this.root.opts.value.current], () => {
			if (this.opts.value.current === this.root.opts.value.current) {
				this.root.rovingFocusGroup.setCurrentTabStopId(this.opts.id.current);
				this.#tabIndex = 0;
			}
		});
		this.onclick = this.onclick.bind(this);
		this.onkeydown = this.onkeydown.bind(this);
		this.onfocus = this.onfocus.bind(this);
	}
	onclick(_) {
		if (this.opts.disabled.current || this.#isReadonly()) return;
		this.root.setValue(this.opts.value.current);
	}
	onfocus(_) {
		if (!this.root.hasValue || this.#isReadonly()) return;
		if (!this.root.isKeyboardNavigating) return;
		this.root.setValue(this.opts.value.current);
	}
	onkeydown(e) {
		if (this.#isDisabled()) return;
		if (e.key === " ") {
			e.preventDefault();
			if (!this.#isReadonly()) this.root.setValue(this.opts.value.current);
			return;
		}
		this.root.isKeyboardNavigating = true;
		try {
			this.root.rovingFocusGroup.handleKeydown(this.opts.ref.current, e, true);
		} finally {
			this.root.isKeyboardNavigating = false;
		}
	}
	#snippetProps = derived$1(() => ({ checked: this.#isChecked() }));
	get snippetProps() {
		return this.#snippetProps();
	}
	set snippetProps($$value) {
		return this.#snippetProps($$value);
	}
	#props = derived$1(() => ({
		id: this.opts.id.current,
		disabled: this.#isDisabled() ? true : void 0,
		"data-value": this.opts.value.current,
		"data-orientation": this.root.opts.orientation.current,
		"data-disabled": boolToEmptyStrOrUndef(this.#isDisabled()),
		"data-readonly": boolToEmptyStrOrUndef(this.#isReadonly()),
		"data-state": this.#isChecked() ? "checked" : "unchecked",
		"aria-checked": getAriaChecked(this.#isChecked(), false),
		[radioGroupAttrs.item]: "",
		type: "button",
		role: "radio",
		tabindex: this.#tabIndex,
		onkeydown: this.onkeydown,
		onfocus: this.onfocus,
		onclick: this.onclick,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var RadioGroupInputState = class RadioGroupInputState {
	static create() {
		return new RadioGroupInputState(RadioGroupRootContext.get());
	}
	root;
	#shouldRender = derived$1(() => this.root.opts.name.current !== void 0);
	get shouldRender() {
		return this.#shouldRender();
	}
	set shouldRender($$value) {
		return this.#shouldRender($$value);
	}
	constructor(root) {
		this.root = root;
		this.onfocus = this.onfocus.bind(this);
	}
	onfocus(_) {
		this.root.rovingFocusGroup.focusCurrentTabStop();
	}
	#props = derived$1(() => ({
		name: this.root.opts.name.current,
		value: this.root.opts.value.current,
		required: this.root.opts.required.current,
		disabled: this.root.opts.disabled.current,
		onfocus: this.onfocus
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
//#endregion
//#region node_modules/bits-ui/dist/bits/radio-group/components/radio-group-input.svelte
function Radio_group_input($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const inputState = RadioGroupInputState.create();
		if (inputState.shouldRender) {
			$$renderer.push("<!--[0-->");
			Hidden_input($$renderer, spread_props([inputState.props]));
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/radio-group/components/radio-group.svelte
function Radio_group$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { disabled = false, children, child, value = "", ref = null, orientation = "vertical", loop = true, name = void 0, required = false, readonly = false, id = createId(uid), onValueChange = noop, $$slots, $$events, ...restProps } = $$props;
		const rootState = RadioGroupRootState.create({
			orientation: boxWith(() => orientation),
			disabled: boxWith(() => disabled),
			loop: boxWith(() => loop),
			name: boxWith(() => name),
			required: boxWith(() => required),
			readonly: boxWith(() => readonly),
			id: boxWith(() => id),
			value: boxWith(() => value, (v) => {
				if (v === value) return;
				value = v;
				onValueChange?.(v);
			}),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived$1(() => mergeProps(restProps, rootState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]--> `);
		Radio_group_input($$renderer, {});
		$$renderer.push(`<!---->`);
		bind_props($$props, {
			value,
			ref
		});
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/radio-group/components/radio-group-item.svelte
function Radio_group_item$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { id = createId(uid), children, child, value, disabled = false, ref = null, $$slots, $$events, ...restProps } = $$props;
		const itemState = RadioGroupItemState.create({
			value: boxWith(() => value),
			disabled: boxWith(() => disabled ?? false),
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived$1(() => mergeProps(restProps, itemState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, {
				props: mergedProps(),
				...itemState.snippetProps
			});
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<button${attributes({ ...mergedProps() })}>`);
			children?.($$renderer, itemState.snippetProps);
			$$renderer.push(`<!----></button>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/tabs/tabs.svelte.js
var tabsAttrs = createBitsAttrs({
	component: "tabs",
	parts: [
		"root",
		"list",
		"trigger",
		"content"
	]
});
var TabsRootContext = new Context("Tabs.Root");
var TabsRootState = class TabsRootState {
	static create(opts) {
		return TabsRootContext.set(new TabsRootState(opts));
	}
	opts;
	attachment;
	rovingFocusGroup;
	triggerIds = [];
	valueToTriggerId = new SvelteMap();
	valueToContentId = new SvelteMap();
	constructor(opts) {
		this.opts = opts;
		this.attachment = attachRef(opts.ref);
		this.rovingFocusGroup = new RovingFocusGroup({
			candidateAttr: tabsAttrs.trigger,
			rootNode: this.opts.ref,
			loop: this.opts.loop,
			orientation: this.opts.orientation
		});
	}
	registerTrigger(id, value) {
		this.triggerIds.push(id);
		this.valueToTriggerId.set(value, id);
		return () => {
			this.triggerIds = this.triggerIds.filter((triggerId) => triggerId !== id);
			this.valueToTriggerId.delete(value);
		};
	}
	registerContent(id, value) {
		this.valueToContentId.set(value, id);
		return () => {
			this.valueToContentId.delete(value);
		};
	}
	setValue(v) {
		this.opts.value.current = v;
	}
	#props = derived$1(() => ({
		id: this.opts.id.current,
		"data-orientation": this.opts.orientation.current,
		[tabsAttrs.root]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var TabsListState = class TabsListState {
	static create(opts) {
		return new TabsListState(opts, TabsRootContext.get());
	}
	opts;
	root;
	attachment;
	#isDisabled = derived$1(() => this.root.opts.disabled.current);
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(opts.ref);
	}
	#props = derived$1(() => ({
		id: this.opts.id.current,
		role: "tablist",
		"aria-orientation": this.root.opts.orientation.current,
		"data-orientation": this.root.opts.orientation.current,
		[tabsAttrs.list]: "",
		"data-disabled": boolToEmptyStrOrUndef(this.#isDisabled()),
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var TabsTriggerState = class TabsTriggerState {
	static create(opts) {
		return new TabsTriggerState(opts, TabsRootContext.get());
	}
	opts;
	root;
	attachment;
	#tabIndex = 0;
	#isActive = derived$1(() => this.root.opts.value.current === this.opts.value.current);
	#isDisabled = derived$1(() => this.opts.disabled.current || this.root.opts.disabled.current);
	#ariaControls = derived$1(() => this.root.valueToContentId.get(this.opts.value.current));
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(opts.ref);
		watch([() => this.opts.id.current, () => this.opts.value.current], ([id, value]) => {
			return this.root.registerTrigger(id, value);
		});
		this.onfocus = this.onfocus.bind(this);
		this.onclick = this.onclick.bind(this);
		this.onkeydown = this.onkeydown.bind(this);
	}
	#activate() {
		if (this.root.opts.value.current === this.opts.value.current) return;
		this.root.setValue(this.opts.value.current);
	}
	onfocus(_) {
		if (this.root.opts.activationMode.current !== "automatic" || this.#isDisabled()) return;
		this.#activate();
	}
	onclick(_) {
		if (this.#isDisabled()) return;
		this.#activate();
	}
	onkeydown(e) {
		if (this.#isDisabled()) return;
		if (e.key === " " || e.key === "Enter") {
			e.preventDefault();
			this.#activate();
			return;
		}
		this.root.rovingFocusGroup.handleKeydown(this.opts.ref.current, e);
	}
	#props = derived$1(() => ({
		id: this.opts.id.current,
		role: "tab",
		"data-state": getTabDataState(this.#isActive()),
		"data-value": this.opts.value.current,
		"data-orientation": this.root.opts.orientation.current,
		"data-disabled": boolToEmptyStrOrUndef(this.#isDisabled()),
		"aria-selected": boolToStr(this.#isActive()),
		"aria-controls": this.#ariaControls(),
		[tabsAttrs.trigger]: "",
		disabled: boolToTrueOrUndef(this.#isDisabled()),
		tabindex: this.#tabIndex,
		onclick: this.onclick,
		onfocus: this.onfocus,
		onkeydown: this.onkeydown,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var TabsContentState = class TabsContentState {
	static create(opts) {
		return new TabsContentState(opts, TabsRootContext.get());
	}
	opts;
	root;
	attachment;
	#isActive = derived$1(() => this.root.opts.value.current === this.opts.value.current);
	#ariaLabelledBy = derived$1(() => this.root.valueToTriggerId.get(this.opts.value.current));
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(opts.ref);
		watch([() => this.opts.id.current, () => this.opts.value.current], ([id, value]) => {
			return this.root.registerContent(id, value);
		});
	}
	#props = derived$1(() => ({
		id: this.opts.id.current,
		role: "tabpanel",
		hidden: boolToTrueOrUndef(!this.#isActive()),
		tabindex: 0,
		"data-value": this.opts.value.current,
		"data-state": getTabDataState(this.#isActive()),
		"aria-labelledby": this.#ariaLabelledBy(),
		"data-orientation": this.root.opts.orientation.current,
		[tabsAttrs.content]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
function getTabDataState(condition) {
	return condition ? "active" : "inactive";
}
//#endregion
//#region node_modules/bits-ui/dist/bits/tabs/components/tabs.svelte
function Tabs$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { id = createId(uid), ref = null, value = "", onValueChange = noop, orientation = "horizontal", loop = true, activationMode = "automatic", disabled = false, children, child, $$slots, $$events, ...restProps } = $$props;
		const rootState = TabsRootState.create({
			id: boxWith(() => id),
			value: boxWith(() => value, (v) => {
				value = v;
				onValueChange(v);
			}),
			orientation: boxWith(() => orientation),
			loop: boxWith(() => loop),
			activationMode: boxWith(() => activationMode),
			disabled: boxWith(() => disabled),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived$1(() => mergeProps(restProps, rootState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, {
			ref,
			value
		});
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/tabs/components/tabs-content.svelte
function Tabs_content$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { children, child, id = createId(uid), ref = null, value, $$slots, $$events, ...restProps } = $$props;
		const contentState = TabsContentState.create({
			value: boxWith(() => value),
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived$1(() => mergeProps(restProps, contentState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/tabs/components/tabs-list.svelte
function Tabs_list$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { child, children, id = createId(uid), ref = null, $$slots, $$events, ...restProps } = $$props;
		const listState = TabsListState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived$1(() => mergeProps(restProps, listState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/bits-ui/dist/bits/tabs/components/tabs-trigger.svelte
function Tabs_trigger$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { child, children, disabled = false, id = createId(uid), type = "button", value, ref = null, $$slots, $$events, ...restProps } = $$props;
		const triggerState = TabsTriggerState.create({
			id: boxWith(() => id),
			disabled: boxWith(() => disabled ?? false),
			value: boxWith(() => value),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived$1(() => mergeProps(restProps, triggerState.props, { type }));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<button${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></button>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/lib/components/ui/dropdown-menu/dropdown-menu-portal.svelte
function Dropdown_menu_portal($$renderer, $$props) {
	let { $$slots, $$events, ...restProps } = $$props;
	if (Portal) {
		$$renderer.push("<!--[-->");
		Portal($$renderer, spread_props([restProps]));
		$$renderer.push("<!--]-->");
	} else {
		$$renderer.push("<!--[!-->");
		$$renderer.push("<!--]-->");
	}
}
//#endregion
//#region src/lib/components/ui/dropdown-menu/dropdown-menu-content.svelte
function Dropdown_menu_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, sideOffset = 4, align = "start", portalProps, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Dropdown_menu_portal($$renderer, spread_props([portalProps, {
				children: ($$renderer) => {
					if (Dropdown_menu_content$1) {
						$$renderer.push("<!--[-->");
						Dropdown_menu_content$1($$renderer, spread_props([
							{
								"data-slot": "dropdown-menu-content",
								sideOffset,
								align,
								class: cn("min-w-32 rounded-md bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 z-50 w-(--bits-dropdown-menu-anchor-width) overflow-x-hidden overflow-y-auto outline-none data-closed:overflow-hidden", className)
							},
							restProps,
							{
								get ref() {
									return ref;
								},
								set ref($$value) {
									ref = $$value;
									$$settled = false;
								}
							}
						]));
						$$renderer.push("<!--]-->");
					} else {
						$$renderer.push("<!--[!-->");
						$$renderer.push("<!--]-->");
					}
				},
				$$slots: { default: true }
			}]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/dropdown-menu/dropdown-menu-group.svelte
function Dropdown_menu_group($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Menu_group) {
				$$renderer.push("<!--[-->");
				Menu_group($$renderer, spread_props([
					{ "data-slot": "dropdown-menu-group" },
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/dropdown-menu/dropdown-menu-item.svelte
function Dropdown_menu_item($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, inset, variant = "default", $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Menu_item) {
				$$renderer.push("<!--[-->");
				Menu_item($$renderer, spread_props([
					{
						"data-slot": "dropdown-menu-item",
						"data-inset": inset,
						"data-variant": variant,
						class: cn("gap-2 rounded-sm px-2 py-1.5 text-sm focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive group/dropdown-menu-item relative flex cursor-default items-center outline-hidden select-none data-[inset]:pl-8 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", className)
					},
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/dropdown-menu/dropdown-menu-label.svelte
function Dropdown_menu_label($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, inset, children, $$slots, $$events, ...restProps } = $$props;
		$$renderer.push(`<div${attributes({
			"data-slot": "dropdown-menu-label",
			"data-inset": inset,
			class: clsx$1(cn("px-2 py-1.5 text-xs font-medium text-muted-foreground data-inset:pl-8 data-[inset]:pl-8", className)),
			...restProps
		})}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/dropdown-menu/dropdown-menu-separator.svelte
function Dropdown_menu_separator($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Menu_separator) {
				$$renderer.push("<!--[-->");
				Menu_separator($$renderer, spread_props([
					{
						"data-slot": "dropdown-menu-separator",
						class: cn("-mx-1 my-1 h-px bg-border", className)
					},
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/@lucide/svelte/dist/icons/chevron-right.svelte
function Chevron_right($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "chevron-right" },
		props,
		{ iconNode: [["path", { "d": "m9 18 6-6-6-6" }]] }
	]));
}
//#endregion
//#region src/lib/components/ui/dropdown-menu/dropdown-menu-trigger.svelte
function Dropdown_menu_trigger($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Menu_trigger) {
				$$renderer.push("<!--[-->");
				Menu_trigger($$renderer, spread_props([
					{ "data-slot": "dropdown-menu-trigger" },
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/dropdown-menu/dropdown-menu.svelte
function Dropdown_menu($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { open = false, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Menu) {
				$$renderer.push("<!--[-->");
				Menu($$renderer, spread_props([restProps, {
					get open() {
						return open;
					},
					set open($$value) {
						open = $$value;
						$$settled = false;
					}
				}]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { open });
	});
}
//#endregion
//#region src/lib/components/WeatherChart.svelte
function WeatherChart($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		const { data, latitude, longitude, units, selectedCropPestLabel, chart_temperature_labels } = $$props;
		derived$1(() => chart_temperature_labels.chart_dark);
		function downloadPNG() {}
		function exportHighResJpg() {}
		function exportToCsv() {
			if (data.length === 0) return;
			const headers = Object.keys(data[0]);
			const rows = data.map((obj) => headers.map((header) => {
				let val = obj[header] === null || obj[header] === void 0 ? "" : obj[header];
				val = String(val).replace(/"/g, "");
				return `${val}`;
			}).join(","));
			const csvContent = [headers.join(","), ...rows].join("\n");
			const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
			const url = URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.setAttribute("href", url);
			link.setAttribute("download", `weatherSite_data_${latitude}_${longitude}_${selectedCropPestLabel}.csv`);
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			URL.revokeObjectURL(url);
		}
		function exportToTxt() {
			if (data.length === 0) return;
			const headers = Object.keys(data[0]);
			const rows = data.map((obj) => headers.map((header) => {
				let val = obj[header] === null || obj[header] === void 0 ? "" : obj[header];
				val = String(val).replace(/"/g, "");
				return `${val}`;
			}).join("	"));
			const csvContent = [headers.join("	"), ...rows].join("\n");
			const blob = new Blob([csvContent], { type: "text/txt;charset=utf-8;" });
			const url = URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.setAttribute("href", url);
			link.setAttribute("download", `weatherSite_data_${latitude}_${longitude}_${selectedCropPestLabel}.txt`);
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			URL.revokeObjectURL(url);
		}
		function getDayOfYear(date = /* @__PURE__ */ new Date()) {
			const diffInMs = date - new Date(date.getFullYear(), 0, 1);
			return Math.floor(diffInMs / 864e5) + 1;
		}
		function getJulianDay(date) {
			const targetDate = new Date(date);
			targetDate.setHours(0, 0, 0, 0);
			return `${targetDate.getFullYear().toString().slice(-2)}${String(getDayOfYear(targetDate)).padStart(3, "0")}`;
		}
		function exportToDSSAT() {
			if (data.length === 0) return;
			const Tn = data.map((gdd) => gdd.Tn);
			const Tavg = data.map((gdd) => gdd.Ta);
			const Tx = data.map((gdd) => gdd.Tx);
			const getAverage = (arr) => arr.length ? arr.reduce((sum, num) => sum + num, 0) / arr.length : 0;
			getAverage(Tn);
			const TAV = getAverage(Tavg);
			getAverage(Tx);
			const AMP = Math.max(...Tavg) - Math.min(...Tavg);
			let dssatData = [];
			for (let i = 0; i < data.length; i++) {
				const date_el = getJulianDay(data[i].timestamp);
				const Tn_el = data[i].Tn.toFixed(1);
				const Tx_el = data[i].Tx.toFixed(1);
				const Prec_el = data[i].Prec.toFixed(1);
				const Srad_el = data[i].Srad.toFixed(1);
				const Wind_el = (data[i].Wind * 86.4).toFixed(1);
				dssatData.push({
					"DATE": date_el,
					"SRAD": Srad_el,
					"TMAX": Tx_el,
					"TMIN": Tn_el,
					"RAIN": Prec_el,
					"DEWP": -99,
					"WIND": Wind_el
				});
			}
			const headers = Object.keys(dssatData[0]);
			const rows = dssatData.map((obj) => headers.map((header) => {
				let val = obj[header] === null || obj[header] === void 0 ? "" : obj[header];
				if (header !== "DATE") {
					val = String(parseFloat(val).toFixed(1)).replace(/"/g, "");
					if (header == "DEWP") val = String(-99).replace(/"/g, "");
					val = `${String(val).padStart(7, " ")}`;
				} else val = String(val).replace(/"/g, "");
				return `${val}`;
			}).join(""));
			const formatter = new Intl.NumberFormat("en-US", {
				minimumFractionDigits: 3,
				maximumFractionDigits: 3
			});
			const line1 = [`*WEATHER DATA : STAT\n`];
			const line2 = [`@ INSI      LAT     LONG  ELEV   TAV   AMP REFHT WNDHT`];
			const line3 = [`  STAT${String(formatter.format(+latitude)).padStart(9, " ")}${String(formatter.format(+longitude)).padStart(9, " ")}${String(-99).padStart(6, " ")}${String(+TAV.toFixed(1)).padStart(6, " ")}${String(+AMP.toFixed(1)).padStart(6, " ")} -99.0 -99.0`];
			const line4 = [`@DATE   SRAD   TMAX   TMIN   RAIN   DEWP   WIND   PAR   EVAP   RHUM`];
			const csvContent = [...[
				...line1,
				...line2,
				...line3,
				...line4
			], ...rows].join("\n");
			const blob = new Blob([csvContent], { type: "text/txt;charset=utf-8;" });
			const url = URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.setAttribute("href", url);
			link.setAttribute("download", `STATGDD0.WTH`);
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			URL.revokeObjectURL(url);
		}
		function exportToAPSIM() {
			if (data.length === 0) return;
			const Tn = data.map((gdd) => gdd.Tn);
			const Tavg = data.map((gdd) => gdd.Ta);
			const Tx = data.map((gdd) => gdd.Tx);
			const getAverage = (arr) => arr.length ? arr.reduce((sum, num) => sum + num, 0) / arr.length : 0;
			getAverage(Tn);
			const TAV = getAverage(Tavg);
			getAverage(Tx);
			const AMP = Math.max(...Tavg) - Math.min(...Tavg);
			let dssatData = [];
			for (let i = 0; i < data.length; i++) {
				const date_el = new Date(data[i].timestamp);
				const jday = getDayOfYear(date_el);
				const Tn_el = data[i].Tn.toFixed(1);
				const Tx_el = data[i].Tx.toFixed(1);
				const Prec_el = data[i].Prec.toFixed(1);
				const Srad_el = data[i].Srad.toFixed(1);
				(data[i].Wind * 86.4).toFixed(1);
				dssatData.push({
					"year": date_el.getFullYear(),
					"day": jday,
					"radn": Srad_el,
					"maxt": Tx_el,
					"mint": Tn_el,
					"rain": Prec_el
				});
			}
			const headers = Object.keys(dssatData[0]);
			const rows = dssatData.map((obj) => headers.map((header) => {
				let val = obj[header] === null || obj[header] === void 0 ? "" : obj[header];
				if (header !== "year" && header !== "day") {
					val = String(parseFloat(val).toFixed(1)).replace(/"/g, "");
					if (header == "evap" || header == "vp") val = String(-99).replace(/"/g, "");
					val = `${String(val).padStart(7, " ")}`;
				} else if (header == "day") val = `${String(val).padStart(7, " ")}`;
				else val = String(val).replace(/"/g, "");
				return `${val}`;
			}).join(""));
			const formatter = new Intl.NumberFormat("en-US", {
				minimumFractionDigits: 4,
				maximumFractionDigits: 4
			});
			const line1 = [`[weather.met.weather]\n`];
			const line2 = [`latitude = ${formatter.format(+latitude)} (DECIMAL DEGREES)`];
			const line3 = [`longitude = ${formatter.format(+longitude)} (DECIMAL DEGREES)`];
			const line4 = [`tav = ${+TAV.toFixed(1)} (oC) !annual average ambient temperature in oC`];
			const line5 = [`amp = ${+AMP.toFixed(1)} (oC) !annual amplitude of mean monthly temperature in oC\n`];
			const line6 = [`year    day   radn   maxt   mint   rain`];
			const line7 = ["()      ()   (MJ/m2) (oC)   (oC)   (mm)"];
			const csvContent = [...[
				...line1,
				...line2,
				...line3,
				...line4,
				...line5,
				...line6,
				...line7
			], ...rows].join("\n");
			const blob = new Blob([csvContent], { type: "text/txt;charset=utf-8;" });
			const url = URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.setAttribute("href", url);
			link.setAttribute("download", `STATGDDweather.met`);
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			URL.revokeObjectURL(url);
		}
		function exportToXLSX() {
			const worksheet = XLSX.utils.json_to_sheet(data);
			const workbook = XLSX.utils.book_new();
			XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
			XLSX.writeFile(workbook, `weatherSite_data_${latitude}_${longitude}_${selectedCropPestLabel}.xlsx`);
		}
		$$renderer.push(`<div><div class="absolute right-0 top-0 pt-2 text-[0.75rem] text-right justify-end items-center gap-2">`);
		if (Dropdown_menu) {
			$$renderer.push("<!--[-->");
			Dropdown_menu($$renderer, {
				children: ($$renderer) => {
					if (Dropdown_menu_trigger) {
						$$renderer.push("<!--[-->");
						Dropdown_menu_trigger($$renderer, {
							children: ($$renderer) => {
								Ellipsis_vertical($$renderer, {});
							},
							$$slots: { default: true }
						});
						$$renderer.push("<!--]-->");
					} else {
						$$renderer.push("<!--[!-->");
						$$renderer.push("<!--]-->");
					}
					$$renderer.push(` `);
					if (Dropdown_menu_content) {
						$$renderer.push("<!--[-->");
						Dropdown_menu_content($$renderer, {
							class: "w-55",
							align: "end",
							children: ($$renderer) => {
								if (Dropdown_menu_group) {
									$$renderer.push("<!--[-->");
									Dropdown_menu_group($$renderer, {
										children: ($$renderer) => {
											if (Dropdown_menu_label) {
												$$renderer.push("<!--[-->");
												Dropdown_menu_label($$renderer, {
													children: ($$renderer) => {
														$$renderer.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("chart.export_menu_header"))}`);
													},
													$$slots: { default: true }
												});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
											$$renderer.push(` `);
											if (Dropdown_menu_separator) {
												$$renderer.push("<!--[-->");
												Dropdown_menu_separator($$renderer, {});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
											$$renderer.push(` `);
											if (Dropdown_menu_item) {
												$$renderer.push("<!--[-->");
												Dropdown_menu_item($$renderer, {
													onclick: exportHighResJpg,
													children: ($$renderer) => {
														Image_down($$renderer, {});
														$$renderer.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("chart.export_figure_toJPG"))}`);
													},
													$$slots: { default: true }
												});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
											$$renderer.push(` `);
											if (Dropdown_menu_item) {
												$$renderer.push("<!--[-->");
												Dropdown_menu_item($$renderer, {
													onclick: downloadPNG,
													children: ($$renderer) => {
														Image_down($$renderer, {});
														$$renderer.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("chart.export_figure_toPNG"))}`);
													},
													$$slots: { default: true }
												});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
											$$renderer.push(` `);
											if (Dropdown_menu_separator) {
												$$renderer.push("<!--[-->");
												Dropdown_menu_separator($$renderer, {});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
											$$renderer.push(` `);
											if (Dropdown_menu_item) {
												$$renderer.push("<!--[-->");
												Dropdown_menu_item($$renderer, {
													onclick: exportToCsv,
													children: ($$renderer) => {
														File_down($$renderer, {});
														$$renderer.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("chart.export_data_toCSV"))}`);
													},
													$$slots: { default: true }
												});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
											$$renderer.push(` `);
											if (Dropdown_menu_item) {
												$$renderer.push("<!--[-->");
												Dropdown_menu_item($$renderer, {
													onclick: exportToTxt,
													children: ($$renderer) => {
														File_down($$renderer, {});
														$$renderer.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("chart.export_data_toTXT"))}`);
													},
													$$slots: { default: true }
												});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
											$$renderer.push(` `);
											if (Dropdown_menu_item) {
												$$renderer.push("<!--[-->");
												Dropdown_menu_item($$renderer, {
													onclick: exportToXLSX,
													children: ($$renderer) => {
														File_down($$renderer, {});
														$$renderer.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("chart.export_data_toXLSX"))}`);
													},
													$$slots: { default: true }
												});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
											$$renderer.push(` `);
											if (Dropdown_menu_separator) {
												$$renderer.push("<!--[-->");
												Dropdown_menu_separator($$renderer, {});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
											$$renderer.push(` `);
											if (Dropdown_menu_item) {
												$$renderer.push("<!--[-->");
												Dropdown_menu_item($$renderer, {
													onclick: exportToDSSAT,
													children: ($$renderer) => {
														Folder_down($$renderer, {});
														$$renderer.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("chart.export_data_toDSSAT"))}`);
													},
													$$slots: { default: true }
												});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
											$$renderer.push(` `);
											if (Dropdown_menu_item) {
												$$renderer.push("<!--[-->");
												Dropdown_menu_item($$renderer, {
													onclick: exportToAPSIM,
													children: ($$renderer) => {
														Folder_down($$renderer, {});
														$$renderer.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("chart.export_data_toAPSIM"))}`);
													},
													$$slots: { default: true }
												});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
										},
										$$slots: { default: true }
									});
									$$renderer.push("<!--]-->");
								} else {
									$$renderer.push("<!--[!-->");
									$$renderer.push("<!--]-->");
								}
							},
							$$slots: { default: true }
						});
						$$renderer.push("<!--]-->");
					} else {
						$$renderer.push("<!--[!-->");
						$$renderer.push("<!--]-->");
					}
				},
				$$slots: { default: true }
			});
			$$renderer.push("<!--]-->");
		} else {
			$$renderer.push("<!--[!-->");
			$$renderer.push("<!--]-->");
		}
		$$renderer.push(`</div> <div class="w-full h-75 min-h-60"><canvas></canvas></div></div>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
//#region src/lib/components/GDDChart.svelte
function GDDChart($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		const { api = {}, data, latitude, longitude, Tbase, Tcutoff, gddTarget, maturityGDDThreshold, daystoMaturityThreshold, units, selectedCropPestLabel, harvestYear, chart_GDD_labels, theme_mode } = $$props;
		derived$1(() => theme_mode === "dark" ? true : false);
		window.addEventListener("beforeprint", () => {});
		window.addEventListener("afterprint", () => {});
		function downloadPNG() {}
		function exportHighResJpg() {}
		function exportToCsv() {
			if (data.length === 0) return;
			const headers = Object.keys(data[0]);
			const rows = data.map((obj) => headers.map((header) => {
				let val = obj[header] === null || obj[header] === void 0 ? "" : obj[header];
				val = String(val).replace(/"/g, "");
				return `${val}`;
			}).join(","));
			const csvContent = [headers.join(","), ...rows].join("\n");
			const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
			const url = URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.setAttribute("href", url);
			link.setAttribute("download", `weatherSite_data_${latitude}_${longitude}_${selectedCropPestLabel}.csv`);
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			URL.revokeObjectURL(url);
		}
		function exportToTxt() {
			if (data.length === 0) return;
			const headers = Object.keys(data[0]);
			const rows = data.map((obj) => headers.map((header) => {
				let val = obj[header] === null || obj[header] === void 0 ? "" : obj[header];
				val = String(val).replace(/"/g, "");
				return `${val}`;
			}).join("	"));
			const csvContent = [headers.join("	"), ...rows].join("\n");
			const blob = new Blob([csvContent], { type: "text/txt;charset=utf-8;" });
			const url = URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.setAttribute("href", url);
			link.setAttribute("download", `weatherSite_data_${latitude}_${longitude}_${selectedCropPestLabel}.txt`);
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			URL.revokeObjectURL(url);
		}
		function getDayOfYear(date = /* @__PURE__ */ new Date()) {
			const diffInMs = date - new Date(date.getFullYear(), 0, 1);
			return Math.floor(diffInMs / 864e5) + 1;
		}
		function getJulianDay(date) {
			const targetDate = new Date(date);
			targetDate.setHours(0, 0, 0, 0);
			return `${targetDate.getFullYear().toString().slice(-2)}${String(getDayOfYear(targetDate)).padStart(3, "0")}`;
		}
		function exportToDSSAT() {
			if (data.length === 0) return;
			const Tavg = data.map((gdd) => gdd.Ta);
			const getAverage = (arr) => arr.length ? arr.reduce((sum, num) => sum + num, 0) / arr.length : 0;
			const TAV = getAverage(Tavg);
			const AMP = Math.max(...Tavg) - Math.min(...Tavg);
			let dssatData = [];
			for (let i = 0; i < data.length; i++) {
				const date_el = getJulianDay(data[i].timestamp);
				const Tn_el = data[i].Tn.toFixed(1);
				const Tx_el = data[i].Tx.toFixed(1);
				const Prec_el = data[i].Prec.toFixed(1);
				const Srad_el = data[i].Srad.toFixed(1);
				const Wind_el = (data[i].Wind * 86.4).toFixed(1);
				dssatData.push({
					"DATE": date_el,
					"SRAD": Srad_el,
					"TMAX": Tx_el,
					"TMIN": Tn_el,
					"RAIN": Prec_el,
					"DEWP": -99,
					"WIND": Wind_el
				});
			}
			const headers = Object.keys(dssatData[0]);
			const rows = dssatData.map((obj) => headers.map((header) => {
				let val = obj[header] === null || obj[header] === void 0 ? "" : obj[header];
				if (header !== "DATE") {
					val = String(parseFloat(val).toFixed(1)).replace(/"/g, "");
					if (header == "DEWP") val = String(-99).replace(/"/g, "");
					val = `${String(val).padStart(7, " ")}`;
				} else val = String(val).replace(/"/g, "");
				return `${val}`;
			}).join(""));
			const formatter = new Intl.NumberFormat("en-US", {
				minimumFractionDigits: 3,
				maximumFractionDigits: 3
			});
			const line1 = [`*WEATHER DATA : STAT\n`];
			const line2 = [`@ INSI      LAT     LONG  ELEV   TAV   AMP REFHT WNDHT`];
			const line3 = [`  STAT${String(formatter.format(+latitude)).padStart(9, " ")}${String(formatter.format(+longitude)).padStart(9, " ")}${String(-99).padStart(6, " ")}${String(+TAV.toFixed(1)).padStart(6, " ")}${String(+AMP.toFixed(1)).padStart(6, " ")} -99.0 -99.0`];
			const line4 = [`@DATE   SRAD   TMAX   TMIN   RAIN   DEWP   WIND   PAR   EVAP   RHUM`];
			const csvContent = [...[
				...line1,
				...line2,
				...line3,
				...line4
			], ...rows].join("\n");
			const blob = new Blob([csvContent], { type: "text/txt;charset=utf-8;" });
			const url = URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.setAttribute("href", url);
			link.setAttribute("download", `STATGDD0.WTH`);
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			URL.revokeObjectURL(url);
		}
		function exportToAPSIM() {
			if (data.length === 0) return;
			const Tavg = data.map((gdd) => gdd.Ta);
			const getAverage = (arr) => arr.length ? arr.reduce((sum, num) => sum + num, 0) / arr.length : 0;
			const TAV = getAverage(Tavg);
			const AMP = Math.max(...Tavg) - Math.min(...Tavg);
			let dssatData = [];
			for (let i = 0; i < data.length; i++) {
				const date_el = new Date(data[i].timestamp);
				const jday = getDayOfYear(date_el);
				const Tn_el = data[i].Tn.toFixed(1);
				const Tx_el = data[i].Tx.toFixed(1);
				const Prec_el = data[i].Prec.toFixed(1);
				const Srad_el = data[i].Srad.toFixed(1);
				dssatData.push({
					"year": date_el.getFullYear(),
					"day": jday,
					"radn": Srad_el,
					"maxt": Tx_el,
					"mint": Tn_el,
					"rain": Prec_el
				});
			}
			const headers = Object.keys(dssatData[0]);
			const rows = dssatData.map((obj) => headers.map((header) => {
				let val = obj[header] === null || obj[header] === void 0 ? "" : obj[header];
				if (header !== "year" && header !== "day") {
					val = String(parseFloat(val).toFixed(1)).replace(/"/g, "");
					if (header == "evap" || header == "vp") val = String(-99).replace(/"/g, "");
					val = `${String(val).padStart(7, " ")}`;
				} else if (header == "day") val = `${String(val).padStart(7, " ")}`;
				else val = String(val).replace(/"/g, "");
				return `${val}`;
			}).join(""));
			const formatter = new Intl.NumberFormat("en-US", {
				minimumFractionDigits: 4,
				maximumFractionDigits: 4
			});
			const line1 = [`[weather.met.weather]\n`];
			const line2 = [`latitude = ${formatter.format(+latitude)} (DECIMAL DEGREES)`];
			const line3 = [`longitude = ${formatter.format(+longitude)} (DECIMAL DEGREES)`];
			const line4 = [`tav = ${+TAV.toFixed(1)} (oC) !annual average ambient temperature in oC`];
			const line5 = [`amp = ${+AMP.toFixed(1)} (oC) !annual amplitude of mean monthly temperature in oC\n`];
			const line6 = [`year    day   radn   maxt   mint   rain`];
			const line7 = ["()      ()   (MJ/m2) (oC)   (oC)   (mm)"];
			const csvContent = [...[
				...line1,
				...line2,
				...line3,
				...line4,
				...line5,
				...line6,
				...line7
			], ...rows].join("\n");
			const blob = new Blob([csvContent], { type: "text/txt;charset=utf-8;" });
			const url = URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.setAttribute("href", url);
			link.setAttribute("download", `STATGDDweather.met`);
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			URL.revokeObjectURL(url);
		}
		function exportToXLSX() {
			const worksheet = XLSX.utils.json_to_sheet(data);
			const workbook = XLSX.utils.book_new();
			XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
			XLSX.writeFile(workbook, `weatherSite_data_${latitude}_${longitude}_${selectedCropPestLabel}.xlsx`);
		}
		$$renderer.push(`<div><div class="absolute right-0 top-0 pt-2 text-[0.75rem] text-right justify-end items-center gap-2">`);
		if (Dropdown_menu) {
			$$renderer.push("<!--[-->");
			Dropdown_menu($$renderer, {
				children: ($$renderer) => {
					if (Dropdown_menu_trigger) {
						$$renderer.push("<!--[-->");
						Dropdown_menu_trigger($$renderer, {
							children: ($$renderer) => {
								Ellipsis_vertical($$renderer, {});
							},
							$$slots: { default: true }
						});
						$$renderer.push("<!--]-->");
					} else {
						$$renderer.push("<!--[!-->");
						$$renderer.push("<!--]-->");
					}
					$$renderer.push(` `);
					if (Dropdown_menu_content) {
						$$renderer.push("<!--[-->");
						Dropdown_menu_content($$renderer, {
							class: "w-55",
							align: "end",
							children: ($$renderer) => {
								if (Dropdown_menu_group) {
									$$renderer.push("<!--[-->");
									Dropdown_menu_group($$renderer, {
										children: ($$renderer) => {
											if (Dropdown_menu_label) {
												$$renderer.push("<!--[-->");
												Dropdown_menu_label($$renderer, {
													children: ($$renderer) => {
														$$renderer.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("chart.export_menu_header"))}`);
													},
													$$slots: { default: true }
												});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
											$$renderer.push(` `);
											if (Dropdown_menu_separator) {
												$$renderer.push("<!--[-->");
												Dropdown_menu_separator($$renderer, {});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
											$$renderer.push(` `);
											if (Dropdown_menu_item) {
												$$renderer.push("<!--[-->");
												Dropdown_menu_item($$renderer, {
													onclick: exportHighResJpg,
													children: ($$renderer) => {
														Image_down($$renderer, {});
														$$renderer.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("chart.export_figure_toJPG"))}`);
													},
													$$slots: { default: true }
												});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
											$$renderer.push(` `);
											if (Dropdown_menu_item) {
												$$renderer.push("<!--[-->");
												Dropdown_menu_item($$renderer, {
													onclick: downloadPNG,
													children: ($$renderer) => {
														Image_down($$renderer, {});
														$$renderer.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("chart.export_figure_toPNG"))}`);
													},
													$$slots: { default: true }
												});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
											$$renderer.push(` `);
											if (Dropdown_menu_separator) {
												$$renderer.push("<!--[-->");
												Dropdown_menu_separator($$renderer, {});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
											$$renderer.push(` `);
											if (Dropdown_menu_item) {
												$$renderer.push("<!--[-->");
												Dropdown_menu_item($$renderer, {
													onclick: exportToCsv,
													children: ($$renderer) => {
														File_down($$renderer, {});
														$$renderer.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("chart.export_data_toCSV"))}`);
													},
													$$slots: { default: true }
												});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
											$$renderer.push(` `);
											if (Dropdown_menu_item) {
												$$renderer.push("<!--[-->");
												Dropdown_menu_item($$renderer, {
													onclick: exportToTxt,
													children: ($$renderer) => {
														File_down($$renderer, {});
														$$renderer.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("chart.export_data_toTXT"))}`);
													},
													$$slots: { default: true }
												});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
											$$renderer.push(` `);
											if (Dropdown_menu_item) {
												$$renderer.push("<!--[-->");
												Dropdown_menu_item($$renderer, {
													onclick: exportToXLSX,
													children: ($$renderer) => {
														File_down($$renderer, {});
														$$renderer.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("chart.export_data_toXLSX"))}`);
													},
													$$slots: { default: true }
												});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
											$$renderer.push(` `);
											if (Dropdown_menu_separator) {
												$$renderer.push("<!--[-->");
												Dropdown_menu_separator($$renderer, {});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
											$$renderer.push(` `);
											if (Dropdown_menu_item) {
												$$renderer.push("<!--[-->");
												Dropdown_menu_item($$renderer, {
													onclick: exportToDSSAT,
													children: ($$renderer) => {
														Folder_down($$renderer, {});
														$$renderer.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("chart.export_data_toDSSAT"))}`);
													},
													$$slots: { default: true }
												});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
											$$renderer.push(` `);
											if (Dropdown_menu_item) {
												$$renderer.push("<!--[-->");
												Dropdown_menu_item($$renderer, {
													onclick: exportToAPSIM,
													children: ($$renderer) => {
														Folder_down($$renderer, {});
														$$renderer.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("chart.export_data_toAPSIM"))}`);
													},
													$$slots: { default: true }
												});
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
										},
										$$slots: { default: true }
									});
									$$renderer.push("<!--]-->");
								} else {
									$$renderer.push("<!--[!-->");
									$$renderer.push("<!--]-->");
								}
							},
							$$slots: { default: true }
						});
						$$renderer.push("<!--]-->");
					} else {
						$$renderer.push("<!--[!-->");
						$$renderer.push("<!--]-->");
					}
				},
				$$slots: { default: true }
			});
			$$renderer.push("<!--]-->");
		} else {
			$$renderer.push("<!--[!-->");
			$$renderer.push("<!--]-->");
		}
		$$renderer.push(`</div> <div class="w-full h-75 min-h-60"><canvas id="chartGDD"></canvas></div></div>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
//#region src/lib/components/ui/tabs/tabs-content.svelte
function Tabs_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Tabs_content$1) {
				$$renderer.push("<!--[-->");
				Tabs_content$1($$renderer, spread_props([
					{
						"data-slot": "tabs-content",
						class: cn("text-sm flex-1 outline-none", className)
					},
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/tabs/tabs-trigger.svelte
function Tabs_trigger($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Tabs_trigger$1) {
				$$renderer.push("<!--[-->");
				Tabs_trigger$1($$renderer, spread_props([
					{
						"data-slot": "tabs-trigger",
						class: cn("gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg:not([class*='size-'])]:size-4 relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent", "data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground", "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100", className)
					},
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/tabs/tabs.svelte
function Tabs($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, value = "", class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Tabs$1) {
				$$renderer.push("<!--[-->");
				Tabs$1($$renderer, spread_props([
					{
						"data-slot": "tabs",
						class: cn("gap-2 group/tabs flex data-[orientation=horizontal]:flex-col", className)
					},
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						},
						get value() {
							return value;
						},
						set value($$value) {
							value = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, {
			ref,
			value
		});
	});
}
//#endregion
//#region src/lib/components/ui/tabs/tabs-list.svelte
var tabsListVariants = tv({
	base: "rounded-lg p-[3px] group-data-horizontal/tabs:h-9 data-[variant=line]:rounded-none group/tabs-list inline-flex w-fit items-center justify-center text-muted-foreground group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col",
	variants: { variant: {
		default: "cn-tabs-list-variant-default bg-muted",
		line: "cn-tabs-list-variant-line gap-1 bg-transparent"
	} },
	defaultVariants: { variant: "default" }
});
function Tabs_list($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, variant = "default", class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Tabs_list$1) {
				$$renderer.push("<!--[-->");
				Tabs_list$1($$renderer, spread_props([
					{
						"data-slot": "tabs-list",
						"data-variant": variant,
						class: cn(tabsListVariants({ variant }), className)
					},
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/input/input.svelte
function Input($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, value = void 0, type, files = void 0, class: className, "data-slot": dataSlot = "input", $$slots, $$events, ...restProps } = $$props;
		if (type === "file") {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<input${attributes({
				"data-slot": dataSlot,
				class: clsx$1(cn("h-9 rounded-md border border-input bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", className)),
				type: "file",
				...restProps
			}, void 0, void 0, void 0, 4)}/>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<input${attributes({
				"data-slot": dataSlot,
				class: clsx$1(cn("h-9 rounded-md border border-input bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", className)),
				type,
				value,
				...restProps
			}, void 0, void 0, void 0, 4)}/>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, {
			ref,
			value,
			files
		});
	});
}
//#endregion
//#region src/lib/components/ui/native-select/native-select-opt-group.svelte
function Native_select_opt_group($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, children, $$slots, $$events, ...restProps } = $$props;
		$$renderer.push(`<optgroup${attributes({
			"data-slot": "native-select-opt-group",
			...restProps
		})}>`);
		children?.($$renderer);
		$$renderer.push(`<!----><!></optgroup>`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/native-select/native-select-option.svelte
function Native_select_option($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		$$renderer.option({
			this: ref,
			"data-slot": "native-select-option",
			class: cn("bg-[Canvas] text-[CanvasText]", className),
			...restProps
		}, ($$renderer) => {
			children?.($$renderer);
			$$renderer.push(`<!---->`);
		}, void 0, void 0, void 0, void 0, true);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/@lucide/svelte/dist/icons/chevron-down.svelte
function Chevron_down($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "chevron-down" },
		props,
		{ iconNode: [["path", { "d": "m6 9 6 6 6-6" }]] }
	]));
}
//#endregion
//#region src/lib/components/ui/native-select/native-select.svelte
function Native_select($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, value = void 0, class: className, size = "default", children, $$slots, $$events, ...restProps } = $$props;
		$$renderer.push(`<div${attr_class(clsx$1(cn("cn-native-select-wrapper group/native-select relative w-fit has-[select:disabled]:opacity-50", className)))} data-slot="native-select-wrapper"${attr("data-size", size)}>`);
		$$renderer.select({
			value,
			this: ref,
			"data-slot": "native-select",
			"data-size": size,
			class: "h-9 w-full min-w-0 appearance-none rounded-md border border-input bg-transparent py-1 pr-8 pl-2.5 text-sm shadow-xs transition-[color,box-shadow] select-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=sm]:h-8 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 outline-none disabled:pointer-events-none disabled:cursor-not-allowed",
			...restProps
		}, ($$renderer) => {
			children?.($$renderer);
			$$renderer.push(`<!---->`);
		}, void 0, void 0, void 0, void 0, true);
		$$renderer.push(` `);
		Chevron_down($$renderer, {
			class: "top-1/2 right-2.5 size-4 -translate-y-1/2 text-muted-foreground pointer-events-none absolute select-none",
			"aria-hidden": true,
			"data-slot": "native-select-icon"
		});
		$$renderer.push(`<!----></div>`);
		bind_props($$props, {
			ref,
			value
		});
	});
}
//#endregion
//#region src/lib/components/ui/button/button.svelte
var buttonVariants = tv({
	base: "rounded-md border border-transparent bg-clip-padding text-sm font-medium focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/80",
			outline: "border-border bg-background shadow-xs hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
			ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
			destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			xs: "h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
			sm: "h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
			lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			icon: "size-9",
			"icon-xs": "size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3",
			"icon-sm": "size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md",
			"icon-lg": "size-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { class: className, variant = "default", size = "default", ref = null, href = void 0, type = "button", disabled, children, $$slots, $$events, ...restProps } = $$props;
		if (href) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<a${attributes({
				"data-slot": "button",
				class: clsx$1(cn(buttonVariants({
					variant,
					size
				}), className)),
				href: disabled ? void 0 : href,
				"aria-disabled": disabled,
				role: disabled ? "link" : void 0,
				tabindex: disabled ? -1 : void 0,
				...restProps
			})}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></a>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<button${attributes({
				"data-slot": "button",
				class: clsx$1(cn(buttonVariants({
					variant,
					size
				}), className)),
				type,
				disabled,
				...restProps
			})}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></button>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/@lucide/svelte/dist/icons/loader-circle.svelte
function Loader_circle($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "loader-circle" },
		props,
		{ iconNode: [["path", { "d": "M21 12a9 9 0 1 1-6.219-8.56" }]] }
	]));
}
//#endregion
//#region src/lib/components/ui/spinner/spinner.svelte
function Spinner($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { class: className, role = "status", name, color, stroke, "aria-label": ariaLabel = "Loading", $$slots, $$events, ...restProps } = $$props;
		Loader_circle($$renderer, spread_props([{
			role,
			name: name === null ? void 0 : name,
			color: color === null ? void 0 : color,
			stroke: stroke === null ? void 0 : stroke,
			"aria-label": ariaLabel,
			class: cn("size-4 animate-spin", className)
		}, restProps]));
	});
}
//#endregion
//#region src/lib/components/Accordion.svelte
function Accordion($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		const { $$slots, $$events, ...props } = $$props;
		let open = derived$1(() => props.open ?? false);
		let localHeader = derived$1(() => props.header);
		let localDetails = derived$1(() => props.details);
		let localCrops = derived$1(() => props.crops ?? null);
		let localPests = derived$1(() => props.pests ?? null);
		let localselectedCropPest = derived$1(() => props.selectedCropPest ?? "");
		let localmaturityGDDThreshold = derived$1(() => props.maturityGDDThreshold ?? null);
		let localDaystoMaturityThreshold = derived$1(() => props.daystoMaturityThreshold ?? null);
		function handleCropsPestChange(event) {
			props.handleCropsPestChange?.(event);
		}
		function handleMaturityGDDThresholdChange(event) {
			props.handleMaturityGDDThresholdChange?.(localmaturityGDDThreshold());
		}
		function handleDaystoMaturityThresholdChange(event) {
			props.handleDaystoMaturityThresholdChange?.(localDaystoMaturityThreshold());
		}
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			$$renderer.push(`<div class="accordion svelte-13t9qfq"><div class="header svelte-13t9qfq"><div class="text svelte-13t9qfq"><header><p class="text-[0.9rem] font-bold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.crop"))} (<span class="text-[0.65rem] text-gray-400 italic">${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.optional"))}</span>):</p> `);
			localHeader()?.($$renderer);
			$$renderer.push(`<!----></header></div> <button${attr("aria-expanded", open())} class="svelte-13t9qfq"><svg class="svelte-13t9qfq" width="20" height="20" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7"></path></svg></button></div> `);
			if (open()) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div class="details svelte-13t9qfq">`);
				if (localDetails()) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<p class="text-[0.75rem] text-gray-500 dark:text-white">${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.crop_desc"))}</p> <div class="p-1">`);
					if (Native_select) {
						$$renderer.push("<!--[-->");
						Native_select($$renderer, {
							"aria-label": "Choose a threshold by",
							id: "cropspests",
							onchange: handleCropsPestChange,
							class: "w-full",
							get value() {
								return localselectedCropPest();
							},
							set value($$value) {
								localselectedCropPest($$value);
								$$settled = false;
							},
							children: ($$renderer) => {
								if (Native_select_option) {
									$$renderer.push("<!--[-->");
									Native_select_option($$renderer, {
										value: "other",
										children: ($$renderer) => {
											$$renderer.push(`<!---->Select threshold by`);
										},
										$$slots: { default: true }
									});
									$$renderer.push("<!--]-->");
								} else {
									$$renderer.push("<!--[!-->");
									$$renderer.push("<!--]-->");
								}
								$$renderer.push(` `);
								if (Native_select_opt_group) {
									$$renderer.push("<!--[-->");
									Native_select_opt_group($$renderer, {
										label: store_get($$store_subs ??= {}, "$t", t)("settings.crop"),
										children: ($$renderer) => {
											$$renderer.push(`<!--[-->`);
											const each_array = ensure_array_like(localCrops());
											for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
												let crop = each_array[$$index];
												if (Native_select_option) {
													$$renderer.push("<!--[-->");
													Native_select_option($$renderer, {
														value: crop.id,
														children: ($$renderer) => {
															$$renderer.push(`<!---->${escape_html(crop.name)}`);
														},
														$$slots: { default: true }
													});
													$$renderer.push("<!--]-->");
												} else {
													$$renderer.push("<!--[!-->");
													$$renderer.push("<!--]-->");
												}
											}
											$$renderer.push(`<!--]-->`);
										},
										$$slots: { default: true }
									});
									$$renderer.push("<!--]-->");
								} else {
									$$renderer.push("<!--[!-->");
									$$renderer.push("<!--]-->");
								}
								$$renderer.push(` `);
								if (Native_select_opt_group) {
									$$renderer.push("<!--[-->");
									Native_select_opt_group($$renderer, {
										label: store_get($$store_subs ??= {}, "$t", t)("settings.insects_and_diseases"),
										children: ($$renderer) => {
											$$renderer.push(`<!--[-->`);
											const each_array_1 = ensure_array_like(localPests());
											for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
												let pest = each_array_1[$$index_1];
												if (Native_select_option) {
													$$renderer.push("<!--[-->");
													Native_select_option($$renderer, {
														value: pest.id,
														children: ($$renderer) => {
															$$renderer.push(`<!---->${escape_html(pest.name)}`);
														},
														$$slots: { default: true }
													});
													$$renderer.push("<!--]-->");
												} else {
													$$renderer.push("<!--[!-->");
													$$renderer.push("<!--]-->");
												}
											}
											$$renderer.push(`<!--]-->`);
										},
										$$slots: { default: true }
									});
									$$renderer.push("<!--]-->");
								} else {
									$$renderer.push("<!--[!-->");
									$$renderer.push("<!--]-->");
								}
							},
							$$slots: { default: true }
						});
						$$renderer.push("<!--]-->");
					} else {
						$$renderer.push("<!--[!-->");
						$$renderer.push("<!--]-->");
					}
					$$renderer.push(`</div> <div class="mt-2"><p class="text-[0.8rem] font-bold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.crop_maturity"))}</p> <div class="rounded-[5px] border border-gray-300 p-2"><div class="justify-content flex h-10 flex-row items-center gap-x-4"><label for="maturityGDDThreshold" class="svelte-13t9qfq">${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.crop_maturity_gdd"))}</label> `);
					Input($$renderer, {
						type: "number",
						id: "maturityGDDThreshold",
						placeholder: "Maturity GDD threshold",
						onkeyup: handleMaturityGDDThresholdChange,
						min: "0",
						step: "1",
						class: "max-w-xs [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
						get value() {
							return localmaturityGDDThreshold();
						},
						set value($$value) {
							localmaturityGDDThreshold($$value);
							$$settled = false;
						}
					});
					$$renderer.push(`<!----> <label for="daystoMaturityThreshold" class="svelte-13t9qfq">${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.crop_daystomaturity"))}</label> `);
					Input($$renderer, {
						type: "number",
						id: "daystoMaturityThreshold",
						placeholder: "Days to Maturity threshold",
						onkeyup: handleDaystoMaturityThresholdChange,
						min: "0",
						step: "1",
						class: "max-w-xs [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
						get value() {
							return localDaystoMaturityThreshold();
						},
						set value($$value) {
							localDaystoMaturityThreshold($$value);
							$$settled = false;
						}
					});
					$$renderer.push(`<!----></div></div></div> `);
					localDetails()($$renderer);
					$$renderer.push(`<!---->`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--></div>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div>`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
//#region node_modules/@lucide/svelte/dist/icons/calendar.svelte
function Calendar($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "calendar" },
		props,
		{ iconNode: [
			["path", { "d": "M8 2v3" }],
			["path", { "d": "M16 2v3" }],
			["rect", {
				"x": "3",
				"y": "3",
				"width": "18",
				"height": "18",
				"rx": "2"
			}],
			["path", { "d": "M3 9h18" }]
		] }
	]));
}
//#endregion
//#region src/lib/components/ui/popover/popover-portal.svelte
function Popover_portal($$renderer, $$props) {
	let { $$slots, $$events, ...restProps } = $$props;
	if (Portal) {
		$$renderer.push("<!--[-->");
		Portal($$renderer, spread_props([restProps]));
		$$renderer.push("<!--]-->");
	} else {
		$$renderer.push("<!--[!-->");
		$$renderer.push("<!--]-->");
	}
}
//#endregion
//#region src/lib/components/ui/popover/popover-content.svelte
function Popover_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, sideOffset = 4, align = "center", portalProps, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Popover_portal($$renderer, spread_props([portalProps, {
				children: ($$renderer) => {
					if (Popover_content$1) {
						$$renderer.push("<!--[-->");
						Popover_content$1($$renderer, spread_props([
							{
								"data-slot": "popover-content",
								sideOffset,
								align,
								class: cn("flex flex-col gap-4 rounded-md bg-popover p-4 text-sm text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 z-50 w-72 origin-(--transform-origin) outline-hidden", className)
							},
							restProps,
							{
								get ref() {
									return ref;
								},
								set ref($$value) {
									ref = $$value;
									$$settled = false;
								}
							}
						]));
						$$renderer.push("<!--]-->");
					} else {
						$$renderer.push("<!--[!-->");
						$$renderer.push("<!--]-->");
					}
				},
				$$slots: { default: true }
			}]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/popover/popover-trigger.svelte
function Popover_trigger($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Popover_trigger$1) {
				$$renderer.push("<!--[-->");
				Popover_trigger$1($$renderer, spread_props([
					{
						"data-slot": "popover-trigger",
						class: cn("", className)
					},
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/popover/popover.svelte
function Popover($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { open = false, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Popover$1) {
				$$renderer.push("<!--[-->");
				Popover$1($$renderer, spread_props([restProps, {
					get open() {
						return open;
					},
					set open($$value) {
						open = $$value;
						$$settled = false;
					}
				}]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { open });
	});
}
//#endregion
//#region src/lib/components/ui/calendar/calendar-month-select.svelte
function Calendar_month_select($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, value, onchange, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			$$renderer.push(`<span${attr_class(clsx$1(cn("relative flex rounded-md border border-input shadow-xs has-focus:border-ring has-focus:ring-[3px] has-focus:ring-ring/50", className)))}>`);
			{
				function child($$renderer, { props, monthItems, selectedMonthItem }) {
					$$renderer.select({
						...props,
						value,
						onchange
					}, ($$renderer) => {
						$$renderer.push(`<!--[-->`);
						const each_array = ensure_array_like(monthItems);
						for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
							let monthItem = each_array[$$index];
							$$renderer.option({
								value: monthItem.value,
								selected: value !== void 0 ? monthItem.value === value : monthItem.value === selectedMonthItem.value
							}, ($$renderer) => {
								$$renderer.push(`${escape_html(monthItem.label)}`);
							});
						}
						$$renderer.push(`<!--]-->`);
					});
					$$renderer.push(` <span class="flex h-(--cell-size) items-center gap-1 rounded-md ps-2 pe-1 text-sm font-medium select-none [&amp;>svg]:size-3.5 [&amp;>svg]:text-muted-foreground" aria-hidden="true">${escape_html(monthItems.find((item) => item.value === value)?.label || selectedMonthItem.label)} `);
					Chevron_down($$renderer, { class: cn("size-4", className) });
					$$renderer.push(`<!----></span>`);
				}
				if (Calendar_month_select$1) {
					$$renderer.push("<!--[-->");
					Calendar_month_select$1($$renderer, spread_props([
						{ class: "absolute inset-0 bg-background opacity-0 dark:bg-popover dark:text-popover-foreground" },
						restProps,
						{
							get ref() {
								return ref;
							},
							set ref($$value) {
								ref = $$value;
								$$settled = false;
							},
							child,
							$$slots: { child: true }
						}
					]));
					$$renderer.push("<!--]-->");
				} else {
					$$renderer.push("<!--[!-->");
					$$renderer.push("<!--]-->");
				}
			}
			$$renderer.push(`</span>`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/calendar/calendar-year-select.svelte
function Calendar_year_select($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, value, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			$$renderer.push(`<span${attr_class(clsx$1(cn("relative flex rounded-md border border-input shadow-xs has-focus:border-ring has-focus:ring-[3px] has-focus:ring-ring/50", className)))}>`);
			{
				function child($$renderer, { props, yearItems, selectedYearItem }) {
					$$renderer.select({
						...props,
						value
					}, ($$renderer) => {
						$$renderer.push(`<!--[-->`);
						const each_array = ensure_array_like(yearItems);
						for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
							let yearItem = each_array[$$index];
							$$renderer.option({
								value: yearItem.value,
								selected: value !== void 0 ? yearItem.value === value : yearItem.value === selectedYearItem.value
							}, ($$renderer) => {
								$$renderer.push(`${escape_html(yearItem.label)}`);
							});
						}
						$$renderer.push(`<!--]-->`);
					});
					$$renderer.push(` <span class="flex h-(--cell-size) items-center gap-1 rounded-md ps-2 pe-1 text-sm font-medium select-none [&amp;>svg]:size-3.5 [&amp;>svg]:text-muted-foreground" aria-hidden="true">${escape_html(yearItems.find((item) => item.value === value)?.label || selectedYearItem.label)} `);
					Chevron_down($$renderer, { class: cn("size-4", className) });
					$$renderer.push(`<!----></span>`);
				}
				if (Calendar_year_select$1) {
					$$renderer.push("<!--[-->");
					Calendar_year_select$1($$renderer, spread_props([
						{ class: "absolute inset-0 opacity-0 dark:bg-popover dark:text-popover-foreground" },
						restProps,
						{
							get ref() {
								return ref;
							},
							set ref($$value) {
								ref = $$value;
								$$settled = false;
							},
							child,
							$$slots: { child: true }
						}
					]));
					$$renderer.push("<!--]-->");
				} else {
					$$renderer.push("<!--[!-->");
					$$renderer.push("<!--]-->");
				}
			}
			$$renderer.push(`</span>`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/calendar/calendar-caption.svelte
function Calendar_caption($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { captionLayout, months, monthFormat, years, yearFormat, month, locale, placeholder = void 0, monthIndex = 0 } = $$props;
		function formatYear(date) {
			const dateObj = date.toDate(getLocalTimeZone());
			if (typeof yearFormat === "function") return yearFormat(dateObj.getFullYear());
			return new DateFormatter(locale, { year: yearFormat }).format(dateObj);
		}
		function formatMonth(date) {
			const dateObj = date.toDate(getLocalTimeZone());
			if (typeof monthFormat === "function") return monthFormat(dateObj.getMonth() + 1);
			return new DateFormatter(locale, { month: monthFormat }).format(dateObj);
		}
		function MonthSelect($$renderer) {
			Calendar_month_select($$renderer, {
				months,
				monthFormat,
				value: month.month,
				onchange: (e) => {
					if (!placeholder) return;
					const v = Number.parseInt(e.currentTarget.value);
					placeholder = placeholder.set({ month: v }).subtract({ months: monthIndex });
				}
			});
		}
		function YearSelect($$renderer) {
			Calendar_year_select($$renderer, {
				years,
				yearFormat,
				value: month.year
			});
		}
		if (captionLayout === "dropdown") {
			$$renderer.push("<!--[0-->");
			MonthSelect($$renderer);
			$$renderer.push(`<!----> `);
			YearSelect($$renderer);
			$$renderer.push(`<!---->`);
		} else if (captionLayout === "dropdown-months") {
			$$renderer.push("<!--[1-->");
			MonthSelect($$renderer);
			$$renderer.push(`<!----> `);
			if (placeholder) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`${escape_html(formatYear(placeholder))}`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]-->`);
		} else if (captionLayout === "dropdown-years") {
			$$renderer.push("<!--[2-->");
			if (placeholder) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`${escape_html(formatMonth(placeholder))}`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> `);
			YearSelect($$renderer);
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`${escape_html(formatMonth(month))} ${escape_html(formatYear(month))}`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { placeholder });
	});
}
//#endregion
//#region src/lib/components/ui/calendar/calendar-cell.svelte
function Calendar_cell($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Calendar_cell$1) {
				$$renderer.push("<!--[-->");
				Calendar_cell$1($$renderer, spread_props([
					{ class: cn("relative size-(--cell-size) p-0 text-center text-sm focus-within:z-20 [&:first-child[data-selected]_[data-bits-day]]:rounded-s-(--cell-radius) [&:last-child[data-selected]_[data-bits-day]]:rounded-e-(--cell-radius)", className) },
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/calendar/calendar-day.svelte
function Calendar_day($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Calendar_day$1) {
				$$renderer.push("<!--[-->");
				Calendar_day$1($$renderer, spread_props([
					{ class: cn("flex size-(--cell-size) flex-col items-center justify-center gap-1 rounded-(--cell-radius) p-0 leading-none font-normal whitespace-nowrap select-none", "[&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius)", "not-data-selected:hover:bg-accent/50 not-data-selected:hover:text-accent-foreground", "[&[data-today]:not([data-selected])]:bg-accent [&[data-today]:not([data-selected])]:text-accent-foreground [&[data-today][data-disabled]]:text-muted-foreground", "data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selected]:hover:text-foreground", "[&[data-outside-month]:not([data-selected])]:text-muted-foreground [&[data-outside-month]:not([data-selected])]:hover:text-accent-foreground", "data-[disabled]:pointer-events-none data-[disabled]:text-muted-foreground data-[disabled]:opacity-50", "data-[unavailable]:text-muted-foreground data-[unavailable]:line-through", "focus:relative focus:border-ring focus:ring-ring/50", "[&>span]:text-xs [&>span]:opacity-70", className) },
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/calendar/calendar-grid-body.svelte
function Calendar_grid_body($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Calendar_grid_body$1) {
				$$renderer.push("<!--[-->");
				Calendar_grid_body$1($$renderer, spread_props([
					{ class: cn(className) },
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/calendar/calendar-grid-head.svelte
function Calendar_grid_head($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Calendar_grid_head$1) {
				$$renderer.push("<!--[-->");
				Calendar_grid_head$1($$renderer, spread_props([
					{ class: cn(className) },
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/calendar/calendar-grid-row.svelte
function Calendar_grid_row($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Calendar_grid_row$1) {
				$$renderer.push("<!--[-->");
				Calendar_grid_row$1($$renderer, spread_props([
					{ class: cn("flex", className) },
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/calendar/calendar-grid.svelte
function Calendar_grid($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Calendar_grid$1) {
				$$renderer.push("<!--[-->");
				Calendar_grid$1($$renderer, spread_props([
					{ class: cn("flex w-full border-collapse flex-col", className) },
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/calendar/calendar-head-cell.svelte
function Calendar_head_cell($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Calendar_head_cell$1) {
				$$renderer.push("<!--[-->");
				Calendar_head_cell$1($$renderer, spread_props([
					{ class: cn("w-(--cell-size) rounded-md text-[0.8rem] font-normal text-muted-foreground", className) },
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/calendar/calendar-header.svelte
function Calendar_header($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Calendar_header$1) {
				$$renderer.push("<!--[-->");
				Calendar_header$1($$renderer, spread_props([
					{ class: cn("flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium", className) },
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/calendar/calendar-month.svelte
function Calendar_month($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		$$renderer.push(`<div${attributes({
			...restProps,
			class: clsx$1(cn("flex w-full flex-col gap-4", className))
		})}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/calendar/calendar-months.svelte
function Calendar_months($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		$$renderer.push(`<div${attributes({
			class: clsx$1(cn("relative flex flex-col gap-4 md:flex-row", className)),
			...restProps
		})}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/calendar/calendar-nav.svelte
function Calendar_nav($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		$$renderer.push(`<nav${attributes({
			...restProps,
			class: clsx$1(cn("absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1", className))
		})}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></nav>`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/calendar/calendar-next-button.svelte
function Calendar_next_button($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, children, variant = "ghost", $$slots, $$events, ...restProps } = $$props;
		function Fallback($$renderer) {
			Chevron_right($$renderer, { class: cn("size-4", className) });
		}
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Calendar_next_button$1) {
				$$renderer.push("<!--[-->");
				Calendar_next_button$1($$renderer, spread_props([
					{ class: cn(buttonVariants({ variant }), "size-(--cell-size) bg-transparent p-0 select-none disabled:opacity-50 rtl:rotate-180", className) },
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						},
						children: ($$renderer) => {
							if (children) {
								$$renderer.push("<!--[0-->");
								children?.($$renderer);
								$$renderer.push(`<!---->`);
							} else {
								$$renderer.push("<!--[-1-->");
								Fallback($$renderer);
							}
							$$renderer.push(`<!--]-->`);
						},
						$$slots: { default: true }
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/@lucide/svelte/dist/icons/chevron-left.svelte
function Chevron_left($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "chevron-left" },
		props,
		{ iconNode: [["path", { "d": "m15 18-6-6 6-6" }]] }
	]));
}
//#endregion
//#region src/lib/components/ui/calendar/calendar-prev-button.svelte
function Calendar_prev_button($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, children, variant = "ghost", $$slots, $$events, ...restProps } = $$props;
		function Fallback($$renderer) {
			Chevron_left($$renderer, { class: cn("size-4", className) });
		}
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Calendar_prev_button$1) {
				$$renderer.push("<!--[-->");
				Calendar_prev_button$1($$renderer, spread_props([
					{ class: cn(buttonVariants({ variant }), "size-(--cell-size) bg-transparent p-0 select-none disabled:opacity-50 rtl:rotate-180", className) },
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						},
						children: ($$renderer) => {
							if (children) {
								$$renderer.push("<!--[0-->");
								children?.($$renderer);
								$$renderer.push(`<!---->`);
							} else {
								$$renderer.push("<!--[-1-->");
								Fallback($$renderer);
							}
							$$renderer.push(`<!--]-->`);
						},
						$$slots: { default: true }
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/calendar/calendar.svelte
function Calendar_1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, value = void 0, placeholder = void 0, class: className, weekdayFormat = "short", buttonVariant = "ghost", captionLayout = "label", locale = "en-US", months: monthsProp, years, monthFormat: monthFormatProp, yearFormat = "numeric", day, disableDaysOutsideMonth = false, $$slots, $$events, ...restProps } = $$props;
		const monthFormat = derived$1(() => {
			if (monthFormatProp) return monthFormatProp;
			if (captionLayout.startsWith("dropdown")) return "short";
			return "long";
		});
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			{
				function children($$renderer, { months, weekdays }) {
					if (Calendar_months) {
						$$renderer.push("<!--[-->");
						Calendar_months($$renderer, {
							children: ($$renderer) => {
								if (Calendar_nav) {
									$$renderer.push("<!--[-->");
									Calendar_nav($$renderer, {
										children: ($$renderer) => {
											if (Calendar_prev_button) {
												$$renderer.push("<!--[-->");
												Calendar_prev_button($$renderer, { variant: buttonVariant });
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
											$$renderer.push(` `);
											if (Calendar_next_button) {
												$$renderer.push("<!--[-->");
												Calendar_next_button($$renderer, { variant: buttonVariant });
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
										},
										$$slots: { default: true }
									});
									$$renderer.push("<!--]-->");
								} else {
									$$renderer.push("<!--[!-->");
									$$renderer.push("<!--]-->");
								}
								$$renderer.push(` <!--[-->`);
								const each_array = ensure_array_like(months);
								for (let monthIndex = 0, $$length = each_array.length; monthIndex < $$length; monthIndex++) {
									let month = each_array[monthIndex];
									if (Calendar_month) {
										$$renderer.push("<!--[-->");
										Calendar_month($$renderer, {
											children: ($$renderer) => {
												if (Calendar_header) {
													$$renderer.push("<!--[-->");
													Calendar_header($$renderer, {
														children: ($$renderer) => {
															if (Calendar_caption) {
																$$renderer.push("<!--[-->");
																Calendar_caption($$renderer, {
																	captionLayout,
																	months: monthsProp,
																	monthFormat: monthFormat(),
																	years,
																	yearFormat,
																	month: month.value,
																	locale,
																	monthIndex,
																	get placeholder() {
																		return placeholder;
																	},
																	set placeholder($$value) {
																		placeholder = $$value;
																		$$settled = false;
																	}
																});
																$$renderer.push("<!--]-->");
															} else {
																$$renderer.push("<!--[!-->");
																$$renderer.push("<!--]-->");
															}
														},
														$$slots: { default: true }
													});
													$$renderer.push("<!--]-->");
												} else {
													$$renderer.push("<!--[!-->");
													$$renderer.push("<!--]-->");
												}
												$$renderer.push(` `);
												if (Calendar_grid) {
													$$renderer.push("<!--[-->");
													Calendar_grid($$renderer, {
														children: ($$renderer) => {
															if (Calendar_grid_head) {
																$$renderer.push("<!--[-->");
																Calendar_grid_head($$renderer, {
																	children: ($$renderer) => {
																		if (Calendar_grid_row) {
																			$$renderer.push("<!--[-->");
																			Calendar_grid_row($$renderer, {
																				class: "select-none",
																				children: ($$renderer) => {
																					$$renderer.push(`<!--[-->`);
																					const each_array_1 = ensure_array_like(weekdays);
																					for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
																						let weekday = each_array_1[i];
																						if (Calendar_head_cell) {
																							$$renderer.push("<!--[-->");
																							Calendar_head_cell($$renderer, {
																								children: ($$renderer) => {
																									$$renderer.push(`<!---->${escape_html(weekday.slice(0, 2))}`);
																								},
																								$$slots: { default: true }
																							});
																							$$renderer.push("<!--]-->");
																						} else {
																							$$renderer.push("<!--[!-->");
																							$$renderer.push("<!--]-->");
																						}
																					}
																					$$renderer.push(`<!--]-->`);
																				},
																				$$slots: { default: true }
																			});
																			$$renderer.push("<!--]-->");
																		} else {
																			$$renderer.push("<!--[!-->");
																			$$renderer.push("<!--]-->");
																		}
																	},
																	$$slots: { default: true }
																});
																$$renderer.push("<!--]-->");
															} else {
																$$renderer.push("<!--[!-->");
																$$renderer.push("<!--]-->");
															}
															$$renderer.push(` `);
															if (Calendar_grid_body) {
																$$renderer.push("<!--[-->");
																Calendar_grid_body($$renderer, {
																	children: ($$renderer) => {
																		$$renderer.push(`<!--[-->`);
																		const each_array_2 = ensure_array_like(month.weeks);
																		for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
																			let weekDates = each_array_2[$$index_2];
																			if (Calendar_grid_row) {
																				$$renderer.push("<!--[-->");
																				Calendar_grid_row($$renderer, {
																					class: "mt-2 w-full",
																					children: ($$renderer) => {
																						$$renderer.push(`<!--[-->`);
																						const each_array_3 = ensure_array_like(weekDates);
																						for (let $$index_1 = 0, $$length = each_array_3.length; $$index_1 < $$length; $$index_1++) {
																							let date = each_array_3[$$index_1];
																							if (Calendar_cell) {
																								$$renderer.push("<!--[-->");
																								Calendar_cell($$renderer, {
																									date,
																									month: month.value,
																									children: ($$renderer) => {
																										if (day) {
																											$$renderer.push("<!--[0-->");
																											day($$renderer, {
																												day: date,
																												outsideMonth: !isEqualMonth(date, month.value)
																											});
																											$$renderer.push(`<!---->`);
																										} else {
																											$$renderer.push("<!--[-1-->");
																											if (Calendar_day) {
																												$$renderer.push("<!--[-->");
																												Calendar_day($$renderer, {});
																												$$renderer.push("<!--]-->");
																											} else {
																												$$renderer.push("<!--[!-->");
																												$$renderer.push("<!--]-->");
																											}
																										}
																										$$renderer.push(`<!--]-->`);
																									},
																									$$slots: { default: true }
																								});
																								$$renderer.push("<!--]-->");
																							} else {
																								$$renderer.push("<!--[!-->");
																								$$renderer.push("<!--]-->");
																							}
																						}
																						$$renderer.push(`<!--]-->`);
																					},
																					$$slots: { default: true }
																				});
																				$$renderer.push("<!--]-->");
																			} else {
																				$$renderer.push("<!--[!-->");
																				$$renderer.push("<!--]-->");
																			}
																		}
																		$$renderer.push(`<!--]-->`);
																	},
																	$$slots: { default: true }
																});
																$$renderer.push("<!--]-->");
															} else {
																$$renderer.push("<!--[!-->");
																$$renderer.push("<!--]-->");
															}
														},
														$$slots: { default: true }
													});
													$$renderer.push("<!--]-->");
												} else {
													$$renderer.push("<!--[!-->");
													$$renderer.push("<!--]-->");
												}
											},
											$$slots: { default: true }
										});
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
								}
								$$renderer.push(`<!--]-->`);
							},
							$$slots: { default: true }
						});
						$$renderer.push("<!--]-->");
					} else {
						$$renderer.push("<!--[!-->");
						$$renderer.push("<!--]-->");
					}
				}
				if (Calendar$1) {
					$$renderer.push("<!--[-->");
					Calendar$1($$renderer, spread_props([
						{
							weekdayFormat,
							disableDaysOutsideMonth,
							class: cn("p-3 [--cell-radius:var(--radius-md)] [--cell-size:--spacing(8)] group/calendar bg-background in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent", className),
							locale,
							monthFormat: monthFormat(),
							yearFormat
						},
						restProps,
						{
							get value() {
								return value;
							},
							set value($$value) {
								value = $$value;
								$$settled = false;
							},
							get ref() {
								return ref;
							},
							set ref($$value) {
								ref = $$value;
								$$settled = false;
							},
							get placeholder() {
								return placeholder;
							},
							set placeholder($$value) {
								placeholder = $$value;
								$$settled = false;
							},
							children,
							$$slots: { default: true }
						}
					]));
					$$renderer.push("<!--]-->");
				} else {
					$$renderer.push("<!--[!-->");
					$$renderer.push("<!--]-->");
				}
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, {
			ref,
			value,
			placeholder
		});
	});
}
//#endregion
//#region src/lib/components/ui/label/label.svelte
function Label($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Label$1) {
				$$renderer.push("<!--[-->");
				Label$1($$renderer, spread_props([
					{
						"data-slot": "label",
						class: cn("gap-2 text-sm leading-none font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed", className)
					},
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/date-picker.svelte
function Date_picker($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const { id, label, locale, initVal, onStartDateChange, onEndDateChange } = $$props;
		let open = false;
		let value = void 0;
		const lang = derived$1(() => locale ?? "en");
		derived$1(() => new DateFormatter(lang(), { dateStyle: "short" }));
		function onValidateDaterange(value) {
			if (onStartDateChange) onStartDateChange?.(value.toDate(getLocalTimeZone()).toLocaleDateString());
			if (onEndDateChange) onEndDateChange?.(value.toDate(getLocalTimeZone()).toLocaleDateString());
		}
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			$$renderer.push(`<div class="flex flex-col gap-1 w-full">`);
			Label($$renderer, {
				for: `${stringify(id)}-date`,
				class: "px-1 text-[0.8rem]",
				children: ($$renderer) => {
					$$renderer.push(`<!---->${escape_html(label)}`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----> `);
			if (Popover) {
				$$renderer.push("<!--[-->");
				Popover($$renderer, {
					get open() {
						return open;
					},
					set open($$value) {
						open = $$value;
						$$settled = false;
					},
					children: ($$renderer) => {
						{
							function child($$renderer, { props }) {
								Button($$renderer, spread_props([props, {
									variant: "outline",
									class: "w-auto justify-between font-normal",
									children: ($$renderer) => {
										$$renderer.push(`<!---->${escape_html(value ? value.toDate(getLocalTimeZone()).toLocaleDateString() : new Date(initVal).toLocaleDateString())} `);
										Calendar($$renderer, { class: "size-4" });
										$$renderer.push(`<!---->`);
									},
									$$slots: { default: true }
								}]));
							}
							if (Popover_trigger) {
								$$renderer.push("<!--[-->");
								Popover_trigger($$renderer, {
									id: `${stringify(id)}-date`,
									child,
									$$slots: { child: true }
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
						}
						$$renderer.push(` `);
						if (Popover_content) {
							$$renderer.push("<!--[-->");
							Popover_content($$renderer, {
								class: "w-auto overflow-hidden p-0",
								align: "start",
								children: ($$renderer) => {
									Calendar_1($$renderer, {
										type: "single",
										locale: lang(),
										captionLayout: "dropdown",
										onValueChange: (v) => {
											open = false;
											onValidateDaterange(v);
										},
										maxValue: today(getLocalTimeZone()),
										get value() {
											return value;
										},
										set value($$value) {
											value = $$value;
											$$settled = false;
										}
									});
								},
								$$slots: { default: true }
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
					},
					$$slots: { default: true }
				});
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
			$$renderer.push(`</div>`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
	});
}
//#endregion
//#region node_modules/@lucide/svelte/dist/icons/moon.svelte
function Moon($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "moon" },
		props,
		{ iconNode: [["path", { "d": "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" }]] }
	]));
}
//#endregion
//#region node_modules/@lucide/svelte/dist/icons/sun.svelte
function Sun($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "sun" },
		props,
		{ iconNode: [
			["circle", {
				"cx": "12",
				"cy": "12",
				"r": "4"
			}],
			["path", { "d": "M12 2v2" }],
			["path", { "d": "M12 20v2" }],
			["path", { "d": "m4.93 4.93 1.41 1.41" }],
			["path", { "d": "m17.66 17.66 1.41 1.41" }],
			["path", { "d": "M2 12h2" }],
			["path", { "d": "M20 12h2" }],
			["path", { "d": "m6.34 17.66-1.41 1.41" }],
			["path", { "d": "m19.07 4.93-1.41 1.41" }]
		] }
	]));
}
//#endregion
//#region node_modules/@lucide/svelte/dist/icons/trash-2.svelte
function Trash_2($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "trash-2" },
		props,
		{ iconNode: [
			["path", { "d": "M10 11v6" }],
			["path", { "d": "M14 11v6" }],
			["path", { "d": "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }],
			["path", { "d": "M3 6h18" }],
			["path", { "d": "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }]
		] }
	]));
}
//#endregion
//#region node_modules/@lucide/svelte/dist/icons/calendar-days.svelte
function Calendar_days($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "calendar-days" },
		props,
		{ iconNode: [
			["path", { "d": "M8 2v3" }],
			["path", { "d": "M16 2v3" }],
			["rect", {
				"x": "3",
				"y": "3",
				"width": "18",
				"height": "18",
				"rx": "2"
			}],
			["path", { "d": "M3 9h18" }],
			["path", { "d": "M8 13h.01" }],
			["path", { "d": "M12 13h.01" }],
			["path", { "d": "M16 13h.01" }],
			["path", { "d": "M8 17h.01" }],
			["path", { "d": "M12 17h.01" }],
			["path", { "d": "M16 17h.01" }]
		] }
	]));
}
//#endregion
//#region src/lib/components/ui/empty/empty-content.svelte
function Empty_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		$$renderer.push(`<div${attributes({
			"data-slot": "empty-content",
			class: clsx$1(cn("gap-4 text-sm flex w-full max-w-sm min-w-0 flex-col items-center text-balance", className)),
			...restProps
		})}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/empty/empty-description.svelte
function Empty_description($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		$$renderer.push(`<div${attributes({
			"data-slot": "empty-description",
			class: clsx$1(cn("text-sm/relaxed text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary", className)),
			...restProps
		})}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/empty/empty-header.svelte
function Empty_header($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		$$renderer.push(`<div${attributes({
			"data-slot": "empty-header",
			class: clsx$1(cn("gap-2 flex max-w-sm flex-col items-center", className)),
			...restProps
		})}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/empty/empty-media.svelte
var emptyMediaVariants = tv({
	base: "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
	variants: { variant: {
		default: "bg-transparent",
		icon: "flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-6"
	} },
	defaultVariants: { variant: "default" }
});
function Empty_media($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, children, variant = "default", $$slots, $$events, ...restProps } = $$props;
		$$renderer.push(`<div${attributes({
			"data-slot": "empty-icon",
			"data-variant": variant,
			class: clsx$1(cn(emptyMediaVariants({ variant }), className)),
			...restProps
		})}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/empty/empty-title.svelte
function Empty_title($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		$$renderer.push(`<div${attributes({
			"data-slot": "empty-title",
			class: clsx$1(cn("text-lg font-medium tracking-tight", className)),
			...restProps
		})}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/empty/empty.svelte
function Empty($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		$$renderer.push(`<div${attributes({
			"data-slot": "empty",
			class: clsx$1(cn("gap-4 rounded-lg border-dashed p-12 flex w-full min-w-0 flex-1 flex-col items-center justify-center text-center text-balance", className)),
			...restProps
		})}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/field/field-content.svelte
function Field_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		$$renderer.push(`<div${attributes({
			"data-slot": "field-content",
			class: clsx$1(cn("gap-1 group/field-content flex flex-1 flex-col leading-snug", className)),
			...restProps
		})}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/field/field-description.svelte
function Field_description($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		$$renderer.push(`<p${attributes({
			"data-slot": "field-description",
			class: clsx$1(cn("text-left text-sm text-muted-foreground [[data-variant=legend]+&]:-mt-1.5 leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance", "last:mt-0 nth-last-2:-mt-1", "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary", className)),
			...restProps
		})}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></p>`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/field/field-group.svelte
function Field_group($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		$$renderer.push(`<div${attributes({
			"data-slot": "field-group",
			class: clsx$1(cn("gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 group/field-group @container/field-group flex w-full flex-col", className)),
			...restProps
		})}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/field/field-label.svelte
function Field_label($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Label($$renderer, spread_props([
				{
					"data-slot": "field-label",
					class: cn("gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border *:data-[slot=field]:p-3 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 group/field-label peer/field-label flex w-fit leading-snug", "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col", className)
				},
				restProps,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer) => {
						children?.($$renderer);
						$$renderer.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/field/field-set.svelte
function Field_set($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		$$renderer.push(`<fieldset${attributes({
			"data-slot": "field-set",
			class: clsx$1(cn("gap-6 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3 flex flex-col", className)),
			...restProps
		})}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></fieldset>`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/field/field-title.svelte
function Field_title($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		$$renderer.push(`<div${attributes({
			"data-slot": "field-label",
			class: clsx$1(cn("gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50 flex w-fit items-center leading-snug", className)),
			...restProps
		})}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/field/field.svelte
var fieldVariants = tv({
	base: "gap-3 data-[invalid=true]:text-destructive group/field flex w-full",
	variants: { orientation: {
		vertical: "cn-field-orientation-vertical flex-col [&>*]:w-full [&>.sr-only]:w-auto",
		horizontal: "cn-field-orientation-horizontal flex-row items-center has-[>[data-slot=field-content]]:items-start [&>[data-slot=field-label]]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
		responsive: "cn-field-orientation-responsive flex-col @md/field-group:flex-row @md/field-group:items-center @md/field-group:has-[>[data-slot=field-content]]:items-start [&>*]:w-full @md/field-group:[&>*]:w-auto [&>.sr-only]:w-auto @md/field-group:[&>[data-slot=field-label]]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
	} },
	defaultVariants: { orientation: "vertical" }
});
function Field($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, orientation = "vertical", children, $$slots, $$events, ...restProps } = $$props;
		$$renderer.push(`<div${attributes({
			role: "group",
			"data-slot": "field",
			"data-orientation": orientation,
			class: clsx$1(cn(fieldVariants({ orientation }), className)),
			...restProps
		})}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/@lucide/svelte/dist/icons/circle.svelte
function Circle($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "circle" },
		props,
		{ iconNode: [["circle", {
			"cx": "12",
			"cy": "12",
			"r": "10"
		}]] }
	]));
}
//#endregion
//#region src/lib/components/ui/radio-group/radio-group-item.svelte
function Radio_group_item($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			{
				function children($$renderer, { checked }) {
					$$renderer.push(`<div data-slot="radio-group-indicator" class="flex size-4 items-center justify-center">`);
					if (checked) {
						$$renderer.push("<!--[0-->");
						Circle($$renderer, { class: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-foreground" });
					} else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]--></div>`);
				}
				if (Radio_group_item$1) {
					$$renderer.push("<!--[-->");
					Radio_group_item$1($$renderer, spread_props([
						{
							"data-slot": "radio-group-item",
							class: cn("flex size-4 rounded-full border-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary group/radio-group-item peer relative aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50", className)
						},
						restProps,
						{
							get ref() {
								return ref;
							},
							set ref($$value) {
								ref = $$value;
								$$settled = false;
							},
							children,
							$$slots: { default: true }
						}
					]));
					$$renderer.push("<!--]-->");
				} else {
					$$renderer.push("<!--[!-->");
					$$renderer.push("<!--]-->");
				}
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/radio-group/radio-group.svelte
function Radio_group($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, value = "", $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Radio_group$1) {
				$$renderer.push("<!--[-->");
				Radio_group$1($$renderer, spread_props([
					{
						"data-slot": "radio-group",
						class: cn("grid gap-3 w-full", className)
					},
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						},
						get value() {
							return value;
						},
						set value($$value) {
							value = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, {
			ref,
			value
		});
	});
}
//#endregion
//#region src/lib/components/ui/hover-card/hover-card-portal.svelte
function Hover_card_portal($$renderer, $$props) {
	let { $$slots, $$events, ...restProps } = $$props;
	if (Portal) {
		$$renderer.push("<!--[-->");
		Portal($$renderer, spread_props([restProps]));
		$$renderer.push("<!--]-->");
	} else {
		$$renderer.push("<!--[!-->");
		$$renderer.push("<!--]-->");
	}
}
//#endregion
//#region src/lib/components/ui/hover-card/hover-card-content.svelte
function Hover_card_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, align = "center", sideOffset = 4, portalProps, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Hover_card_portal($$renderer, spread_props([portalProps, {
				children: ($$renderer) => {
					if (Link_preview_content) {
						$$renderer.push("<!--[-->");
						Link_preview_content($$renderer, spread_props([
							{
								"data-slot": "hover-card-content",
								align,
								sideOffset,
								class: cn("w-64 rounded-lg bg-popover p-4 text-sm text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 z-50 origin-(--transform-origin) outline-hidden", className)
							},
							restProps,
							{
								get ref() {
									return ref;
								},
								set ref($$value) {
									ref = $$value;
									$$settled = false;
								}
							}
						]));
						$$renderer.push("<!--]-->");
					} else {
						$$renderer.push("<!--[!-->");
						$$renderer.push("<!--]-->");
					}
				},
				$$slots: { default: true }
			}]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/hover-card/hover-card-trigger.svelte
function Hover_card_trigger($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Link_preview_trigger) {
				$$renderer.push("<!--[-->");
				Link_preview_trigger($$renderer, spread_props([
					{ "data-slot": "hover-card-trigger" },
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/hover-card/hover-card.svelte
function Hover_card($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { open = false, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Link_preview) {
				$$renderer.push("<!--[-->");
				Link_preview($$renderer, spread_props([restProps, {
					get open() {
						return open;
					},
					set open($$value) {
						open = $$value;
						$$settled = false;
					}
				}]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { open });
	});
}
//#endregion
//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let msg = store_get($$store_subs ??= {}, "$t", t)("app.message");
		derived$1(() => msg);
		let errorMessage = null;
		let loadingChart = true;
		let theme_mode = derived$1(() => derivedMode.current);
		let chart_GDD_labels = derived$1(() => ({
			"chart_locale": store_get($$store_subs ??= {}, "$locale", locale),
			"chart_dark": theme_mode() === "dark" ? true : false,
			"chart_gdd_title": store_get($$store_subs ??= {}, "$t", t)("chart.gdd_title"),
			"chart_gdd_xlabel": store_get($$store_subs ??= {}, "$t", t)("chart.gdd_xlabel"),
			"chart_gdd_ylabel": store_get($$store_subs ??= {}, "$t", t)("chart.gdd_ylabel"),
			"chart_gdd_legend_label": store_get($$store_subs ??= {}, "$t", t)("chart.gdd_legend_label"),
			"chart_gdd_verticalline_label1": store_get($$store_subs ??= {}, "$t", t)("chart.gdd_verticalline_label_1"),
			"chart_gdd_verticalline_label2": store_get($$store_subs ??= {}, "$t", t)("chart.gdd_verticalline_label_2")
		}));
		let chart_temperature_labels = derived$1(() => ({
			"chart_locale": store_get($$store_subs ??= {}, "$locale", locale),
			"chart_dark": theme_mode() === "dark" ? true : false,
			"chart_temperature_title": store_get($$store_subs ??= {}, "$t", t)("chart.temperature_title"),
			"chart_temperature_xlabel": store_get($$store_subs ??= {}, "$t", t)("chart.temperature_xlabel"),
			"chart_temperature_ylabel": store_get($$store_subs ??= {}, "$t", t)("chart.temperature_ylabel"),
			"chart_temperature_y1label": store_get($$store_subs ??= {}, "$t", t)("chart.temperature_y1label"),
			"chart_temperature_legend_label1": store_get($$store_subs ??= {}, "$t", t)("chart.temperature_legend_label_1"),
			"chart_temperature_legend_label2": store_get($$store_subs ??= {}, "$t", t)("chart.temperature_legend_label_2"),
			"chart_temperature_legend_label3": store_get($$store_subs ??= {}, "$t", t)("chart.temperature_legend_label_3"),
			"chart_temperature_legend_label4": store_get($$store_subs ??= {}, "$t", t)("chart.temperature_legend_label_4")
		}));
		let historicalData = [];
		let today = /* @__PURE__ */ new Date();
		const oneYearAgo = new Date(today);
		oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
		let startDateString = (/* @__PURE__ */ new Date(oneYearAgo.getTime() - oneYearAgo.getTimezoneOffset() * 6e4)).toISOString().split("T")[0];
		let endDateString = (/* @__PURE__ */ new Date(today.getTime() - today.getTimezoneOffset() * 6e4)).toISOString().split("T")[0];
		let gddThreshold = 10;
		let maxTemperatureThreshold = 30;
		let maturityGDDThreshold = null;
		let daystoMaturityThreshold = null;
		let units = "C";
		let Latitude = 3.5;
		let Longitude = -76.5;
		const unitsOptions = ["C", "F"];
		function convertFtoC(value) {
			return +(5 / 9 * (+value - 32)).toFixed(1);
		}
		let crops = derived$1(() => [
			{
				id: "corn",
				name: store_get($$store_subs ??= {}, "$t", t)("settings.crops_corn"),
				tbase: 50,
				tcutoff: 86
			},
			{
				id: "sorghum",
				name: store_get($$store_subs ??= {}, "$t", t)("settings.crops_sorghum"),
				tbase: 50,
				tcutoff: null
			},
			{
				id: "soybeans",
				name: store_get($$store_subs ??= {}, "$t", t)("settings.crops_soybeans"),
				tbase: 50,
				tcutoff: null
			},
			{
				id: "tomato",
				name: store_get($$store_subs ??= {}, "$t", t)("settings.crops_tomato"),
				tbase: 50,
				tcutoff: null
			},
			{
				id: "sunflower",
				name: store_get($$store_subs ??= {}, "$t", t)("settings.crops_sunflower"),
				tbase: 46,
				tcutoff: null
			},
			{
				id: "potato",
				name: store_get($$store_subs ??= {}, "$t", t)("settings.crops_potato"),
				tbase: 46,
				tcutoff: null
			},
			{
				id: "wheat",
				name: store_get($$store_subs ??= {}, "$t", t)("settings.crops_wheat"),
				tbase: 42,
				tcutoff: null
			},
			{
				id: "barley",
				name: store_get($$store_subs ??= {}, "$t", t)("settings.crops_barley"),
				tbase: 42,
				tcutoff: null
			},
			{
				id: "rye",
				name: store_get($$store_subs ??= {}, "$t", t)("settings.crops_rye"),
				tbase: 42,
				tcutoff: null
			},
			{
				id: "oats",
				name: store_get($$store_subs ??= {}, "$t", t)("settings.crops_oats"),
				tbase: 42,
				tcutoff: null
			},
			{
				id: "flaxseed",
				name: store_get($$store_subs ??= {}, "$t", t)("settings.crops_flaxseed"),
				tbase: 42,
				tcutoff: null
			},
			{
				id: "lettuce",
				name: store_get($$store_subs ??= {}, "$t", t)("settings.crops_lettuce"),
				tbase: 42,
				tcutoff: null
			},
			{
				id: "asparagus",
				name: store_get($$store_subs ??= {}, "$t", t)("settings.crops_asparagus"),
				tbase: 42,
				tcutoff: null
			}
		]);
		let pests = derived$1(() => [
			{
				id: "Green Cloverworm",
				name: store_get($$store_subs ??= {}, "$t", t)("settings.pests_green_cloverworm"),
				tbase: 52,
				tcutoff: null
			},
			{
				id: "Codling moth, Apple maggot",
				name: store_get($$store_subs ??= {}, "$t", t)("settings.pests_codling_moth"),
				tbase: 50,
				tcutoff: null
			},
			{
				id: "Alfalfa weevil",
				name: store_get($$store_subs ??= {}, "$t", t)("settings.pests_alfalfa_weevil"),
				tbase: 48,
				tcutoff: null
			},
			{
				id: "Corn rootworm, Oriental fruit moth",
				name: store_get($$store_subs ??= {}, "$t", t)("settings.pests_corn_rootworm"),
				tbase: 45,
				tcutoff: null
			},
			{
				id: "Stalk borer",
				name: store_get($$store_subs ??= {}, "$t", t)("settings.pests_stalk_borer"),
				tbase: 43,
				tcutoff: null
			},
			{
				id: "Onion maggot",
				name: store_get($$store_subs ??= {}, "$t", t)("settings.pests_onion_maggot"),
				tbase: 40,
				tcutoff: null
			},
			{
				id: "Cabbage maggot",
				name: store_get($$store_subs ??= {}, "$t", t)("settings.pests_cabbage_maggot"),
				tbase: 39,
				tcutoff: null
			},
			{
				id: "Apple scab",
				name: store_get($$store_subs ??= {}, "$t", t)("settings.pests_apple_scab"),
				tbase: 32,
				tcutoff: null
			}
		]);
		let selectedCropPest = "corn";
		let selectedCropPestLabel = derived$1(() => store_get($$store_subs ??= {}, "$t", t)("settings.crops_selected"));
		function handleCropsPestChange(event) {
			if (event.target) {
				const _Id = event.target.value || null;
				const result = [...crops(), ...pests()].find((item) => item.id === _Id);
				selectedCropPest = result?.id;
				if (units == "C") {
					gddThreshold = result?.tbase != null ? convertFtoC(result?.tbase) : 0;
					maxTemperatureThreshold = result?.tcutoff != null ? convertFtoC(+result.tcutoff) : null;
				} else if (units == "F") {
					gddThreshold = result?.tbase != null ? result.tbase : 0;
					maxTemperatureThreshold = result?.tcutoff != null ? +result.tcutoff : null;
				}
				if (selectedCropPest === "wheat") showCoordsList = true;
				else showCoordsList = false;
				selectedCropPestLabel(result?.name);
			}
		}
		let showCoordsList = false;
		let selectedNurserySite = "";
		let weatherStation = {};
		async function quickHash(str) {
			let hash = 5381;
			for (let i = 0; i < str.length; i++) hash = hash * 33 ^ str.charCodeAt(i);
			return (hash >>> 0).toString(16);
		}
		let loadedSites = false;
		let cacheSitesData = [];
		async function validateCacheSite(params) {
			let data = null;
			if (params) {
				const cachedGDDData = localStorage.getItem("GDD_Cache");
				if (cachedGDDData) {
					cacheSitesData = JSON.parse(cachedGDDData);
					const hash = await quickHash(JSON.stringify(params));
					const cachedData = cacheSitesData.filter((s) => s.hash === hash);
					if (cachedData && cachedData.length > 0) {
						data = cachedData[0];
						loadedSites = true;
					}
				}
			}
			return data;
		}
		async function saveCache(parameters) {
			const hash = await quickHash(JSON.stringify(parameters));
			const lastupdate = (/* @__PURE__ */ new Date(today.getTime() - today.getTimezoneOffset() * 6e4)).toISOString();
			cacheSitesData.push({
				"hash": hash,
				"params": parameters,
				"weatherdata": historicalData,
				"lastupdate": lastupdate
			});
			localStorage.setItem("GDD_Cache", JSON.stringify(cacheSitesData));
			loadedSites = true;
			loadingChart = false;
		}
		async function applySettings() {
			loadingChart = true;
			const parameters = {
				units,
				startDate: startDateString,
				endDate: endDateString,
				gddThreshold: gddThreshold || 0,
				maxTemperatureThreshold,
				maturityGDDThreshold,
				daystoMaturityThreshold,
				latitude: Latitude,
				longitude: Longitude,
				croppest: selectedCropPest,
				nurserysite: selectedNurserySite
			};
			let dataCache = await validateCacheSite(parameters);
			const isEmpty = Object.keys(weatherStation).length === 0 && weatherStation.constructor === Object;
			if (dataCache === null && isEmpty) try {
				const results = await era5_getData(Latitude, Longitude, units, startDateString, endDateString, gddThreshold, maxTemperatureThreshold);
				if (results) {
					historicalData = [];
					if (results.length > 0) {
						historicalData = results;
						await saveCache(parameters);
					}
				}
			} catch (error) {
				errorMessage = store_get($$store_subs ??= {}, "$t", t)("app.failmsg");
				console.error(error);
			}
			else if (dataCache === null && weatherStation != {}) {
				await updateGDDData();
				loadingChart = false;
			} else {
				historicalData = dataCache.weatherdata;
				loadingChart = false;
			}
		}
		function handleMaturityGDDThresholdChange(value) {
			maturityGDDThreshold = value;
		}
		function handleDaystoMaturityThresholdChange(value) {
			daystoMaturityThreshold = value;
		}
		async function updateGDDData() {
			childTabWeatherRef?.processWeatherFile();
		}
		let childTabWeatherRef = void 0;
		function toTitleCase(str) {
			return str.toLowerCase().split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
		}
		let currentSite = "";
		function onSiteChange(s) {
			startDateString = s.startDate;
			endDateString = s.endDate;
			gddThreshold = s.gddThreshold;
			maxTemperatureThreshold = s.maxTemperatureThreshold;
			maturityGDDThreshold = s.maturityGDDThreshold;
			daystoMaturityThreshold = s.daystoMaturityThreshold;
			units = s.units;
			Latitude = s.latitude;
			Longitude = s.longitude;
			selectedCropPest = s.croppest;
			selectedCropPestLabel(toTitleCase(s.croppest));
			selectedNurserySite = s.nurserysite || "";
			if (selectedCropPest === "wheat");
			applySettings();
		}
		async function onSiteDelete(e, h) {
			e.stopPropagation();
			const fdata = cacheSitesData.filter((s) => s.hash !== h);
			localStorage.setItem("GDD_Cache", JSON.stringify(fdata));
			cacheSitesData = fdata;
		}
		let error_date_range = false;
		let harvestYear = derived$1(() => today.getFullYear());
		function onStartDateChange(value) {
			const sd = new Date(value);
			startDateString = (/* @__PURE__ */ new Date(sd.getTime() - sd.getTimezoneOffset() * 6e4)).toISOString().split("T")[0];
			validateDaterange();
		}
		function onEndDateChange(value) {
			const ed = new Date(value);
			endDateString = (/* @__PURE__ */ new Date(ed.getTime() - ed.getTimezoneOffset() * 6e4)).toISOString().split("T")[0];
			validateDaterange();
		}
		function validateDaterange() {
			const d1 = new Date(startDateString);
			const d2 = new Date(endDateString);
			if (Math.floor(Math.abs(d2 - d1) / 864e5) > 550) error_date_range = true;
			else {
				error_date_range = false;
				harvestYear(d2.getFullYear());
			}
		}
		let childApi = {};
		function callChild_UpdateThemeMode(theme_mode) {
			if (childApi.updateThemeMode) childApi.updateThemeMode(theme_mode);
		}
		function updateThemeMode() {
			toggleMode();
			if (derivedMode) theme_mode(derivedMode.current);
			callChild_UpdateThemeMode(theme_mode());
		}
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			$$renderer.push(`<main class="container mt-0 p-2 pt-0 svelte-1uha8ag"><div class="dashboard-grid svelte-1uha8ag"><div class="grid grid-cols-3 border border-gray-300 p-2 rounded-[5px] span-3 sm:max-w-77.5 md:max-w-full lg:max-w-full svelte-1uha8ag"><div></div> <div class="text-left items-center justify-items-center"><h1 class="text-[1.5rem] text-center font-extrabold text-[#327500] dark:text-gray-100">${escape_html(store_get($$store_subs ??= {}, "$t", t)("app.title"))}</h1> <p class="text-[0.75rem] text-center font-thin p-0 mt-0 text-gray-400 dark:text-orange-400">${escape_html(store_get($$store_subs ??= {}, "$t", t)("app.subtitle"))}</p></div> <div class="relative top-2 block sm:hidden md:block"><div class="flex flex-row gap-x-2 justify-end">`);
			Button($$renderer, {
				onclick: updateThemeMode,
				variant: "outline",
				size: "icon",
				children: ($$renderer) => {
					Sun($$renderer, { class: "h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90" });
					$$renderer.push(`<!----> `);
					Moon($$renderer, { class: "absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0" });
					$$renderer.push(`<!----> <span class="sr-only">Toggle theme</span>`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----> `);
			if (Native_select) {
				$$renderer.push("<!--[-->");
				Native_select($$renderer, {
					"aria-label": "Choose your preferred language",
					class: "",
					get value() {
						return store_get($$store_subs ??= {}, "$locale", locale);
					},
					set value($$value) {
						store_set(locale, $$value);
						$$settled = false;
					},
					children: ($$renderer) => {
						$$renderer.push(`<!--[-->`);
						const each_array = ensure_array_like(locales);
						for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
							let l = each_array[$$index];
							if (Native_select_option) {
								$$renderer.push("<!--[-->");
								Native_select_option($$renderer, {
									value: l,
									children: ($$renderer) => {
										$$renderer.push(`<!---->${escape_html(l)}`);
									},
									$$slots: { default: true }
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
						}
						$$renderer.push(`<!--]-->`);
					},
					$$slots: { default: true }
				});
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
			$$renderer.push(`</div></div></div> <div class="card max-w-95 svelte-1uha8ag">`);
			if (Tabs) {
				$$renderer.push("<!--[-->");
				Tabs($$renderer, {
					value: "settings",
					class: "w-full",
					children: ($$renderer) => {
						if (Tabs_list) {
							$$renderer.push("<!--[-->");
							Tabs_list($$renderer, {
								children: ($$renderer) => {
									if (Tabs_trigger) {
										$$renderer.push("<!--[-->");
										Tabs_trigger($$renderer, {
											value: "settings",
											children: ($$renderer) => {
												$$renderer.push(`<p class="text-[0.9rem] font-bold text-blue-800 dark:text-white">${escape_html(store_get($$store_subs ??= {}, "$t", t)("app.tabs_label_settings"))}</p>`);
											},
											$$slots: { default: true }
										});
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
									$$renderer.push(` `);
									if (Tabs_trigger) {
										$$renderer.push("<!--[-->");
										Tabs_trigger($$renderer, {
											value: "sites",
											children: ($$renderer) => {
												$$renderer.push(`<p class="text-[0.9rem] font-bold text-blue-800 dark:text-white">${escape_html(store_get($$store_subs ??= {}, "$t", t)("app.tabs_label_sites"))}</p>`);
											},
											$$slots: { default: true }
										});
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
								},
								$$slots: { default: true }
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
						$$renderer.push(` `);
						if (Tabs_content) {
							$$renderer.push("<!--[-->");
							Tabs_content($$renderer, {
								value: "settings",
								children: ($$renderer) => {
									$$renderer.push(`<div class="cardSettings max-w-95 svelte-1uha8ag"><div class="setting-group svelte-1uha8ag"><p class="text-[0.9rem] font-bold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.growing_season"))}:</p> <div class="rounded-[5px] border border-gray-300 p-2"><div class="flex gap-x-2">`);
									Date_picker($$renderer, {
										id: "start_date",
										label: store_get($$store_subs ??= {}, "$t", t)("settings.start_date"),
										locale: store_get($$store_subs ??= {}, "$locale", locale),
										initVal: startDateString,
										onStartDateChange
									});
									$$renderer.push(`<!----> `);
									Date_picker($$renderer, {
										id: "end_date",
										label: store_get($$store_subs ??= {}, "$t", t)("settings.end_date"),
										locale: store_get($$store_subs ??= {}, "$locale", locale),
										initVal: endDateString,
										onEndDateChange
									});
									$$renderer.push(`<!----></div> <div>`);
									if (error_date_range) {
										$$renderer.push("<!--[0-->");
										$$renderer.push(`<p><span class="text-[0.75rem] font-light text-red-700">${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.error_date_range_message"))}</span></p>`);
									} else $$renderer.push("<!--[-1-->");
									$$renderer.push(`<!--]--></div></div></div> <div class="setting-group svelte-1uha8ag"><p class="text-[0.9rem] font-bold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.crop_threshold_temperature"))} ${escape_html(units == "C" ? "(°C)" : "(°F)")}:</p> <div class="rounded-[5px] border border-gray-300 pr-2 pl-2"><fieldset class="flex flex-row gap-2 pt-2"><p class="text-[0.9rem]">${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.units"))}:</p> <!--[-->`);
									const each_array_1 = ensure_array_like(unitsOptions);
									for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
										let option = each_array_1[$$index_1];
										$$renderer.push(`<input type="radio"${attr("id", option)} name="units"${attr("value", option)}${attr("checked", units === option, true)}/> <label${attr("for", option)} class="svelte-1uha8ag">°${escape_html(option)}</label>`);
									}
									$$renderer.push(`<!--]--></fieldset> <div class="justify-content flex h-10 flex-row items-center gap-x-4"><label for="gddThreshold" title="The base temperature is the lowest temperature at which a crop will grow" class="svelte-1uha8ag">Min</label> `);
									Input($$renderer, {
										type: "number",
										id: "gddThreshold",
										placeholder: "TBase threshold",
										class: "max-w-xs",
										min: "0",
										max: "100",
										step: "0.5",
										get value() {
											return gddThreshold;
										},
										set value($$value) {
											gddThreshold = $$value;
											$$settled = false;
										}
									});
									$$renderer.push(`<!----> <label for="maxTemperatureThreshold" title="Maximum temperature above which growth slows" class="svelte-1uha8ag">Max</label> `);
									Input($$renderer, {
										type: "number",
										id: "maxTemperatureThreshold",
										placeholder: "TMax threshold",
										class: "max-w-xs",
										min: "0",
										max: "100",
										step: "0.5",
										get value() {
											return maxTemperatureThreshold;
										},
										set value($$value) {
											maxTemperatureThreshold = $$value;
											$$settled = false;
										}
									});
									$$renderer.push(`<!----></div></div></div> `);
									{
										function details($$renderer) {
											$$renderer.push(`<div></div>`);
										}
										Accordion($$renderer, {
											open: false,
											crops: crops(),
											pests: pests(),
											selectedCropPest,
											handleCropsPestChange: (value) => handleCropsPestChange(value),
											maturityGDDThreshold,
											daystoMaturityThreshold,
											handleMaturityGDDThresholdChange: (value) => handleMaturityGDDThresholdChange(value),
											handleDaystoMaturityThresholdChange: (value) => handleDaystoMaturityThresholdChange(value),
											details,
											$$slots: { details: true }
										});
									}
									$$renderer.push(`<!----> <p class="text-[0.85rem] font-thin">${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.location_desc"))}</p> `);
									$$renderer.push("<!--[0-->");
									$$renderer.push(`<div class="flex items-center gap-4">`);
									Button($$renderer, {
										variant: "secondary",
										children: ($$renderer) => {
											Spinner($$renderer, { class: "text-red-500 size-4" });
											$$renderer.push(`<!----> <p class="text-[0.75rem] text-red-500">${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.estimating_coord_msg"))}</p>`);
										},
										$$slots: { default: true }
									});
									$$renderer.push(`<!----></div>`);
									$$renderer.push(`<!--]--> <div class="flex flex-row justify-around gap-2"><button class="buttonReset svelte-1uha8ag">${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.btn_reset"))}</button> <button class="buttonApply svelte-1uha8ag"${attr("disabled", error_date_range, true)}>${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.btn_apply"))}</button></div> <div>`);
									if (errorMessage) {
										$$renderer.push("<!--[0-->");
										$$renderer.push(`<p><span class="text-[0.85rem] text-red-700">${escape_html(errorMessage)}</span></p>`);
									} else $$renderer.push("<!--[-1-->");
									$$renderer.push(`<!--]--></div></div>`);
								},
								$$slots: { default: true }
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
						$$renderer.push(` `);
						if (Tabs_content) {
							$$renderer.push("<!--[-->");
							Tabs_content($$renderer, {
								value: "sites",
								children: ($$renderer) => {
									$$renderer.push(`<div class="cardSettings w-full max-h-130 overflow-auto svelte-1uha8ag">`);
									if (loadedSites) {
										$$renderer.push("<!--[0-->");
										$$renderer.push(`<div class="w-full max-w-md">`);
										if (Field_group) {
											$$renderer.push("<!--[-->");
											Field_group($$renderer, {
												children: ($$renderer) => {
													if (Field_set) {
														$$renderer.push("<!--[-->");
														Field_set($$renderer, {
															children: ($$renderer) => {
																if (Radio_group) {
																	$$renderer.push("<!--[-->");
																	Radio_group($$renderer, {
																		class: "gap-1.5!",
																		get value() {
																			return currentSite;
																		},
																		set value($$value) {
																			currentSite = $$value;
																			$$settled = false;
																		},
																		children: ($$renderer) => {
																			$$renderer.push(`<!--[-->`);
																			const each_array_2 = ensure_array_like(cacheSitesData);
																			for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
																				let s = each_array_2[i];
																				if (Hover_card) {
																					$$renderer.push("<!--[-->");
																					Hover_card($$renderer, {
																						children: ($$renderer) => {
																							if (Hover_card_trigger) {
																								$$renderer.push("<!--[-->");
																								Hover_card_trigger($$renderer, {
																									children: ($$renderer) => {
																										if (Field_label) {
																											$$renderer.push("<!--[-->");
																											Field_label($$renderer, {
																												for: s.hash,
																												class: "hover:border hover:border-blue-500 hover:shadow max-h-18",
																												children: ($$renderer) => {
																													if (Field) {
																														$$renderer.push("<!--[-->");
																														Field($$renderer, {
																															orientation: "horizontal",
																															children: ($$renderer) => {
																																if (Field_content) {
																																	$$renderer.push("<!--[-->");
																																	Field_content($$renderer, {
																																		children: ($$renderer) => {
																																			if (Field_title) {
																																				$$renderer.push("<!--[-->");
																																				Field_title($$renderer, {
																																					children: ($$renderer) => {
																																						$$renderer.push(`<span class="text-0.85rem font-bold pr-4">${escape_html(store_get($$store_subs ??= {}, "$t", t)("siteitem.label"))} ${escape_html(i + 1)}</span> <span class="text-[0.7rem] font-thin text-gray-500">(Lat: ${escape_html(s.params.latitude)}, Lng: ${escape_html(s.params.longitude)})</span>`);
																																					},
																																					$$slots: { default: true }
																																				});
																																				$$renderer.push("<!--]-->");
																																			} else {
																																				$$renderer.push("<!--[!-->");
																																				$$renderer.push("<!--]-->");
																																			}
																																			$$renderer.push(` `);
																																			if (Field_description) {
																																				$$renderer.push("<!--[-->");
																																				Field_description($$renderer, {
																																					children: ($$renderer) => {
																																						$$renderer.push(`<div class="flex flex-row">`);
																																						Calendar_days($$renderer, { class: "me-2 size-4 opacity-70" });
																																						$$renderer.push(`<!----> <span class="text-[0.65rem] font-thin text-gray-400">${escape_html(store_get($$store_subs ??= {}, "$t", t)("siteitem.label_last_update"))} ${escape_html(s.lastupdate)}</span></div>`);
																																					},
																																					$$slots: { default: true }
																																				});
																																				$$renderer.push("<!--]-->");
																																			} else {
																																				$$renderer.push("<!--[!-->");
																																				$$renderer.push("<!--]-->");
																																			}
																																		},
																																		$$slots: { default: true }
																																	});
																																	$$renderer.push("<!--]-->");
																																} else {
																																	$$renderer.push("<!--[!-->");
																																	$$renderer.push("<!--]-->");
																																}
																																$$renderer.push(` <div class="flex flex-row gap-0.5 align-middle">`);
																																if (Radio_group_item) {
																																	$$renderer.push("<!--[-->");
																																	Radio_group_item($$renderer, {
																																		value: s.hash,
																																		id: s.hash,
																																		onclick: () => onSiteChange(s.params)
																																	});
																																	$$renderer.push("<!--]-->");
																																} else {
																																	$$renderer.push("<!--[!-->");
																																	$$renderer.push("<!--]-->");
																																}
																																$$renderer.push(` `);
																																Button($$renderer, {
																																	onclick: (e) => onSiteDelete(e, s.hash),
																																	variant: "outline",
																																	size: "icon",
																																	class: "h-4.5! border-0 m-0 border-white shadow-none bg-(var(--primary))",
																																	children: ($$renderer) => {
																																		Trash_2($$renderer, { class: "size-4" });
																																	},
																																	$$slots: { default: true }
																																});
																																$$renderer.push(`<!----></div>`);
																															},
																															$$slots: { default: true }
																														});
																														$$renderer.push("<!--]-->");
																													} else {
																														$$renderer.push("<!--[!-->");
																														$$renderer.push("<!--]-->");
																													}
																												},
																												$$slots: { default: true }
																											});
																											$$renderer.push("<!--]-->");
																										} else {
																											$$renderer.push("<!--[!-->");
																											$$renderer.push("<!--]-->");
																										}
																									},
																									$$slots: { default: true }
																								});
																								$$renderer.push("<!--]-->");
																							} else {
																								$$renderer.push("<!--[!-->");
																								$$renderer.push("<!--]-->");
																							}
																							$$renderer.push(` `);
																							if (Hover_card_content) {
																								$$renderer.push("<!--[-->");
																								Hover_card_content($$renderer, {
																									children: ($$renderer) => {
																										$$renderer.push(`<div class="w-full flex flex-col text-[0.75rem]">`);
																										if (s.params.nurserysite) {
																											$$renderer.push("<!--[0-->");
																											$$renderer.push(`<div class="relative h-4 w-full flex text-[0.8rem] justify-around"><span class="absolute left-0 text-[0.75rem] text-gray-500 dark:text-white font-thin mr-4 text-left">${escape_html(store_get($$store_subs ??= {}, "$t", t)("site.hoovercard_site"))}</span><span class="absolute right-0 text-right text-[0.75rem]">${escape_html(s.params.nurserysite || "")}</span></div>`);
																										} else $$renderer.push("<!--[-1-->");
																										$$renderer.push(`<!--]--> `);
																										if (s.params.croppest) {
																											$$renderer.push("<!--[0-->");
																											$$renderer.push(`<div class="relative h-4 w-full flex text-[0.8rem] justify-around"><span class="absolute left-0 text-[0.75rem] text-gray-500 dark:text-white font-thin mr-4 text-left">${escape_html(store_get($$store_subs ??= {}, "$t", t)("site.hoovercard_croppest"))}</span><span class="absolute right-0 text-right text-[0.75rem]">${escape_html(toTitleCase(s.params.croppest) || "")}</span></div>`);
																										} else $$renderer.push("<!--[-1-->");
																										$$renderer.push(`<!--]-->  <div class="relative h-4 w-full flex text-[0.8rem] justify-around"><span class="absolute left-0 text-[0.75rem] text-gray-500 dark:text-white font-thin mr-4 text-left">${escape_html(store_get($$store_subs ??= {}, "$t", t)("site.hoovercard_startdate"))}</span><span class="absolute right-0 text-right text-[0.75rem]">${escape_html(s.params.startDate || "")}</span></div> <div class="relative h-4 w-full flex text-[0.8rem] justify-around"><span class="absolute left-0 text-[0.75rem] text-gray-500 dark:text-white font-thin mr-4 text-left">${escape_html(store_get($$store_subs ??= {}, "$t", t)("site.hoovercard_enddate"))}</span><span class="absolute right-0 text-right text-[0.75rem]">${escape_html(s.params.endDate || "")}</span></div> `);
																										if (s.params.gddThreshold) {
																											$$renderer.push("<!--[0-->");
																											$$renderer.push(`<div class="relative h-4 w-full flex text-[0.8rem] justify-around"><span class="absolute left-0 text-[0.75rem] text-gray-500 dark:text-white font-thin mr-4 text-left">${escape_html(store_get($$store_subs ??= {}, "$t", t)("site.hoovercard_tbase"))}</span><span class="absolute right-0 text-right text-[0.75rem]">${escape_html(s.params.gddThreshold || "")} °${escape_html(s.params.units || "")}</span></div>`);
																										} else $$renderer.push("<!--[-1-->");
																										$$renderer.push(`<!--]--> `);
																										if (s.params.maxTemperatureThreshold) {
																											$$renderer.push("<!--[0-->");
																											$$renderer.push(`<div class="relative h-4 w-full flex text-[0.8rem] justify-around"><span class="absolute left-0 text-[0.75rem] text-gray-500 dark:text-white font-thin mr-4 text-left">${escape_html(store_get($$store_subs ??= {}, "$t", t)("site.hoovercard_tmaxthreshold"))}</span><span class="absolute right-0 text-right text-[0.75rem]">${escape_html(s.params.maxTemperatureThreshold || "")} °${escape_html(s.params.units || "")}</span></div>`);
																										} else $$renderer.push("<!--[-1-->");
																										$$renderer.push(`<!--]--> `);
																										if (s.params.maturityGDDThreshold) {
																											$$renderer.push("<!--[0-->");
																											$$renderer.push(`<div class="relative h-4 w-full flex text-[0.8rem] justify-around"><span class="absolute left-0 text-[0.75rem] text-gray-500 dark:text-white font-thin mr-4 text-left">${escape_html(store_get($$store_subs ??= {}, "$t", t)("site.hoovercard_maturityGDDthreshold"))}</span><span class="absolute right-0 text-right text-[0.75rem]">${escape_html(s.params.maturityGDDThreshold || "")}</span></div>`);
																										} else $$renderer.push("<!--[-1-->");
																										$$renderer.push(`<!--]--> `);
																										if (s.params.daystoMaturityThreshold) {
																											$$renderer.push("<!--[0-->");
																											$$renderer.push(`<div class="relative h-4 w-full flex text-[0.8rem] justify-around"><span class="absolute left-0 text-[0.75rem] text-gray-500 dark:text-white font-thin mr-4 text-left">${escape_html(store_get($$store_subs ??= {}, "$t", t)("site.hoovercard_daysmaturitythreshold"))}</span><span class="absolute right-0 text-right text-[0.75rem]">${escape_html(s.params.daystoMaturityThreshold || "")}</span></div>`);
																										} else $$renderer.push("<!--[-1-->");
																										$$renderer.push(`<!--]--></div>`);
																									},
																									$$slots: { default: true }
																								});
																								$$renderer.push("<!--]-->");
																							} else {
																								$$renderer.push("<!--[!-->");
																								$$renderer.push("<!--]-->");
																							}
																						},
																						$$slots: { default: true }
																					});
																					$$renderer.push("<!--]-->");
																				} else {
																					$$renderer.push("<!--[!-->");
																					$$renderer.push("<!--]-->");
																				}
																			}
																			$$renderer.push(`<!--]-->`);
																		},
																		$$slots: { default: true }
																	});
																	$$renderer.push("<!--]-->");
																} else {
																	$$renderer.push("<!--[!-->");
																	$$renderer.push("<!--]-->");
																}
															},
															$$slots: { default: true }
														});
														$$renderer.push("<!--]-->");
													} else {
														$$renderer.push("<!--[!-->");
														$$renderer.push("<!--]-->");
													}
												},
												$$slots: { default: true }
											});
											$$renderer.push("<!--]-->");
										} else {
											$$renderer.push("<!--[!-->");
											$$renderer.push("<!--]-->");
										}
										$$renderer.push(`</div>`);
									} else {
										$$renderer.push("<!--[-1-->");
										$$renderer.push(`<div>Sites not found</div>`);
									}
									$$renderer.push(`<!--]--></div>`);
								},
								$$slots: { default: true }
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
					},
					$$slots: { default: true }
				});
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
			$$renderer.push(`</div> <div class="card span-2 svelte-1uha8ag">`);
			if (loadingChart) {
				$$renderer.push("<!--[0-->");
				if (Empty) {
					$$renderer.push("<!--[-->");
					Empty($$renderer, {
						class: "w-full border md:p-6",
						children: ($$renderer) => {
							if (Empty_header) {
								$$renderer.push("<!--[-->");
								Empty_header($$renderer, {
									children: ($$renderer) => {
										if (Empty_media) {
											$$renderer.push("<!--[-->");
											Empty_media($$renderer, {
												children: ($$renderer) => {
													Wave($$renderer, {
														size: "40",
														color: "#FF3E00",
														unit: "px",
														duration: "1s"
													});
												},
												$$slots: { default: true }
											});
											$$renderer.push("<!--]-->");
										} else {
											$$renderer.push("<!--[!-->");
											$$renderer.push("<!--]-->");
										}
										$$renderer.push(` `);
										if (Empty_title) {
											$$renderer.push("<!--[-->");
											Empty_title($$renderer, {
												children: ($$renderer) => {
													$$renderer.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.calculating_processing_request_msg"))}`);
												},
												$$slots: { default: true }
											});
											$$renderer.push("<!--]-->");
										} else {
											$$renderer.push("<!--[!-->");
											$$renderer.push("<!--]-->");
										}
										$$renderer.push(` `);
										if (Empty_description) {
											$$renderer.push("<!--[-->");
											Empty_description($$renderer, {
												children: ($$renderer) => {
													$$renderer.push(`<p class="text-[0.85rem] font-thin text-orange-500">${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.calculating_msg"))}</p>`);
												},
												$$slots: { default: true }
											});
											$$renderer.push("<!--]-->");
										} else {
											$$renderer.push("<!--[!-->");
											$$renderer.push("<!--]-->");
										}
									},
									$$slots: { default: true }
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
							$$renderer.push(` `);
							if (Empty_content) {
								$$renderer.push("<!--[-->");
								Empty_content($$renderer, {
									children: ($$renderer) => {
										$$renderer.push(`<p class="text-[0.85rem] font-thin text-gray-500 dark:text-white">${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.calculating_loading_norefresh"))}</p>`);
									},
									$$slots: { default: true }
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
						},
						$$slots: { default: true }
					});
					$$renderer.push("<!--]-->");
				} else {
					$$renderer.push("<!--[!-->");
					$$renderer.push("<!--]-->");
				}
			} else {
				$$renderer.push("<!--[-1-->");
				$$renderer.push(`<div class="mt-0 mb-4 rounded-[5px] border border-gray-300 p-2 pt-0"><div class="relative m-auto min-h-75 w-full">`);
				GDDChart($$renderer, {
					api: childApi,
					data: historicalData,
					latitude: Latitude,
					longitude: Longitude,
					Tbase: gddThreshold,
					Tcutoff: maxTemperatureThreshold,
					gddTarget: maturityGDDThreshold,
					daystoMaturityThreshold,
					maturityGDDThreshold,
					units,
					selectedCropPestLabel: selectedCropPestLabel(),
					harvestYear: harvestYear(),
					chart_GDD_labels: chart_GDD_labels(),
					theme_mode: theme_mode()
				});
				$$renderer.push(`<!----></div></div> <div class="mt-0 rounded-[5px] border border-gray-300 p-2 pt-0"><div class="relative m-auto min-h-75 w-full">`);
				WeatherChart($$renderer, {
					data: historicalData,
					latitude: Latitude,
					longitude: Longitude,
					units,
					selectedCropPestLabel: selectedCropPestLabel(),
					chart_temperature_labels: chart_temperature_labels()
				});
				$$renderer.push(`<!----></div></div> <p class="flex justify-end select-none"><span class="text-[0.6rem] text-gray-400 italic" title="Agrometeorological indicators from 1979 to present derived from reanalysis. Copernicus Climate Change Service (C3S) Climate Data Store (CDS). DOI: 10.24381/cds.6c68c9bb">${escape_html(store_get($$store_subs ??= {}, "$t", t)("app.chart.source"))}</span></p> <div class="w-full"><p class="mt-2 p-2 text-justify text-[0.65rem] text-gray-300 italic"><span class="text-[0.75rem] font-bold">Disclaimer:</span> <span class="text-justify">The content on this website is provided on an 'as is' basis without warranties of any kind, either express or implied.
                            The users thereof use the information at their sole risk and liability. For the avoidance of all doubt,
                            CIMMYT assumes no responsibility or liability for any errors or omissions in the content of this site. 
                            The views and opinions expressed on this website are those of the authors and do not necessarily reflect the official policy or position of CIMMYT.</span></p></div> <div class="relative mt-1 h-20 w-full p-1"><div class="absolute right-0 bottom-0 z-1 m-1 w-45 max-w-45"><span><svg version="1.1" id="Layer_1" x="0" y="0" viewBox="0 0 523 62.3" style="enable-background:new 0 0 523 62.3" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">`);
				$$renderer.push(`<style type="text/css" id="style2">.st1{fill:#487629}.st2{fill:#77bc43}</style>`);
				$$renderer.push(`<g id="g6"><path transform="matrix(.00431 -1 1 .00431 401.018 462.509)" id="rect4" style="fill:#231f20" d="M405.7 29.3h54.2v1.1h-54.2z"></path></g><g id="g32"><path class="st1" d="M495.2 20.1c-.5-.7-1.7-1.7-2.4-2.4-.9-1.1-1.2-1.3-1.2-3V7.6c0-1.1-1.6-.9-1.6 0 0 0-.1 12.5 0 13.6s-.4 1.8 1.3 3c1.8 1.2 4.6 2 4.6 2s0-2.8.1-3.8c0-1.1-.3-1.6-.8-2.3m-.8 3.8c-2.6-1.1-3-.9-2.8-4.9 3.1 2 3 2.7 2.8 4.9" id="path8"></path><path class="st1" d="M497.4 22.3v3.8s2.8-.8 4.6-2c1.7-1.1 1.2-1.8 1.3-2.9s0-13.6 0-13.6c0-.9-1.6-1.1-1.6 0V15c0 1.7-.3 2-1.3 2.9-.7.7-1.8 1.7-2.4 2.4-.3.5-.6 1-.6 2m4.4-3.1c.3 3.9-.1 3.8-2.8 4.9-.1-2.3-.4-3.1 2.8-4.9" id="path10"></path><path class="st1" d="M498.8 12.9c-.9-1.6 0 0-1.3-2.1V2.9c0-1.2-1.6-1.2-1.6 0v7.9s-1.3 2.2-1.7 3.2c-.4.9-.9 2 .4 3.4.1.1.3.4 2.1 2.1l1.6-1.6c2.2-2.1 1.4-3.5.5-5m-2 4.4c-3-1.6-.8-3.8 0-5.3l.1.1c2.1 3.5 1.6 4.1-.1 5.2" id="path12"></path><path class="st1" d="M495.7 29.7c-.1-1.6-.7-2.9-3.8-4.1-2.6-1.1-6.5-1.3-9.2-1.7-2.8-.4-7.2-1.2-9.6-3.4 1.7 5.7 5.9 8 10.3 9.1 4.9 1.1 9.3 1.6 12 3.4l.3.1c-.1-1.3.2-1.8 0-3.4m-1.3.8c-2.4-.9-3.9-1.2-8.2-2-4.2-.9-6.7-1.7-9.1-4.1 3.7 1.4 9.6 2 12.8 2.6 3.3.7 4.1 1.7 4.5 3.5z" id="path14"></path><path class="st1" d="m497.4 33.1.3-.1c2.6-1.8 7.1-2.2 12.1-3.3 4.3-.9 8.7-3.3 10.4-9-2.2 2.1-6.8 2.9-9.6 3.3-2.8.4-6.6.7-9.2 1.6-3.2 1.2-3.8 2.5-3.8 4.1-.2 1.6 0 2.1-.2 3.4m1.5-2.6c.4-2 1.2-2.8 4.5-3.4 3.2-.7 9.1-1.2 12.8-2.5-2.2 2.4-4.9 3.2-9.1 3.9-4.3 1-5.8 1.1-8.2 2z" id="path16"></path><path class="st1" d="M495.6 37c0-3-1.7-3.9-4.3-4.6-2.6-.7-6.2-1.2-9.3-2.1-3-.9-4.7-1.4-6.8-3.8.4 4.5 3.6 7.6 7.4 9 3.8 1.3 3.6 1.1 5.7 1.6s2.4 1.3 2.4 2.5v2.6h5.1c-.1-5.9-.3-2.1-.2-5.2m-1.6 3.5h-2.1s0-.9-.1-2.4c-.1-2-2.5-2.1-6.2-3.2-2.6-.8-5.9-1.7-7.4-4.2.9.4 2.8 1.2 5.8 1.8 2.9.7 4.5.9 7.1 1.4 2.5.5 3 2.1 2.9 3.7v2.9z" id="path18"></path><path class="st1" d="M497.6 42.2h5.1v-2.6c0-1.3.4-2 2.5-2.5s1.8-.3 5.7-1.6c3.8-1.3 7-4.5 7.4-8.8-2.1 2.2-3.8 2.9-7 3.7-3 .9-6.7 1.3-9.3 2.1-2.6.7-4.3 1.6-4.3 4.6-.1 3-.3-.8-.1 5.1m1.4-4.5c0-1.7.5-3.2 3-3.7 2.6-.5 4.2-.9 7.1-1.4 3-.7 4.9-1.3 5.8-1.7-1.4 2.6-4.9 3.4-7.5 4.2-3.8 1.1-6.1 1.2-6.2 3.2-.1 1.4-.1 2.4-.1 2.4H499v-3z" id="path20"></path><path class="st1" d="M485.1 56.4c-.7.1-1.3.3-2.1.3-2.9 0-4.9-1.4-4.9-4.5 0-3 1.8-4.7 5-4.7.5 0 1.3.1 2.1.4l-.1 1.6c-.7-.4-1.3-.5-2-.5-1.8 0-3 1.4-3 3.3 0 1.8 1.2 3.2 3 3.2.7 0 1.6-.1 2-.4v1.3z" id="path22"></path><path class="st1" d="M493.5 49.3c-.7-.3-1.6-.5-2.4-.5-2.1 0-3.3 1.4-3.3 3.3 0 1.8 1.2 3.2 3 3.2.5 0 .9 0 1.2-.1v-2.4h-2v-1.4h3.7v4.9c-.9.3-2 .4-2.9.4-2.9 0-4.9-1.4-4.9-4.5s1.8-4.7 5-4.7c1.1 0 1.8.1 2.6.4v1.4z" id="path24"></path><path transform="matrix(.00482 -1 1 .00482 442.115 548.322)" class="st1" id="rect26" d="M492 51.1h9v1.8h-9z"></path><path class="st1" d="M504.2 53.1h-2.6l1.3-3.7 1.3 3.7zm-5.8 3.5h1.8l.8-2.1h3.7l.8 2.1h2l-3.6-9h-2l-3.5 9z" id="path28"></path><path class="st1" d="M510.3 49.1h.5c.9 0 2 .1 1.8 1.2 0 1.2-1.1 1.3-2 1.2h-.5l.2-2.4zm-1.8 7.6h1.8V53h.5c.8 0 1.1.3 1.3.9l1.1 2.8h2l-1.4-3.6c-.1-.4-.4-.9-.9-.9 1.2-.1 1.8-1.1 1.8-2.1 0-2.5-2.2-2.5-4.2-2.5h-2v9.1z" id="path30"></path></g><g id="g380"><g id="g366"><g id="g364"><path class="st2" d="M85.7 54.1c-4.1 2.4-8.8 3.2-13.6 3.2-6.1 0-12.2-1.3-16.7-5.4-4.6-3.9-6.6-9.6-6.6-15.5 0-13 10.9-19.6 23.6-19.6 4.9 0 8.7.7 13.4 2.1.5.1 1.1.3.9 1.2-.4 1.8-.8 6.2-.9 8.8h-2.2c0-1.7-.1-3.3-.4-4.9-2.8-3-6.6-4-10.6-4-4.3 0-8.6 1.6-11.5 4.7-2.6 2.9-3.4 7.1-3.4 10.9 0 4.7 1.2 9.3 4.6 12.9 3.6 3.7 7.5 5 12.6 5 3.4 0 8.3-1.2 11.2-2.9l.7.7-1.1 2.8" id="path34"></path><path class="st2" d="M100.8 24.3c0-4.1-.3-4.6-5-4.5v-2.4c3.9.1 6.8.3 9.2.3 2.4 0 5.3-.1 9.1-.3v2.4c-4.7-.1-5 .3-5 4.3v25.5c0 4.1.3 4.6 5 4.3v2.6c-3.9-.1-6.8-.3-9.1-.3-2.2 0-5.3.1-9.2.3v-2.4c4.7.1 5-.4 5-4.5V24.3" id="path36"></path><path class="st2" d="m165 25.2-6.3 12.4-8.7 18-.7 1.3h-2c-.1-.5-1.3-3.2-2.1-4.7l-13.6-27.1v24.6c0 4.1.3 4.6 5 4.3v2.6c-2.8-.1-5-.3-6.6-.3s-3.9.1-6.8.3v-2.5c4.7.1 5-.3 5-4.3V24.3c0-4.1-.3-4.6-5-4.3v-2.5c3.4.1 5.7.3 7.4.3s3.8-.1 6.7-.3c1.1 2.5 3 6.8 4.3 9.3l9.3 18.8c.9-1.6 1.7-3.3 2.6-5 4.3-9 9.5-19.5 11.1-23 2.9.1 5 .3 6.7.3s3.9-.1 6.8-.3v2.5c-4.7-.1-5 .3-5 4.3V50c0 4.1.3 4.6 5 4.3v2.4c-3.9-.1-6.8-.3-9.1-.3-2.2 0-5.3.1-9.2.3v-2.4c4.7.1 4.9-.4 5-4.5l.2-24.6" id="path38"></path><path class="st2" d="m228.8 25.2-6.3 12.4-8.7 18-.7 1.3h-2c-.1-.5-1.3-3.2-2.1-4.7l-13.6-27.1v24.6c0 4.1.3 4.6 5 4.3v2.6c-2.8-.1-5-.3-6.6-.3-1.7 0-3.9.1-6.8.3v-2.5c4.7.1 5-.3 5-4.3V24.3c0-4.1-.3-4.6-5-4.3v-2.5c3.4.1 5.7.3 7.4.3s3.9-.1 6.7-.3c1.1 2.5 3 6.8 4.3 9.3l9.3 18.8c.9-1.6 1.7-3.3 2.6-5 4.3-9 9.5-19.5 11.1-23 2.9.1 5 .3 6.7.3s3.9-.1 6.8-.3v2.5c-4.7-.1-5 .3-5 4.3V50c0 4.1.3 4.6 5 4.3v2.4c-3.9-.1-6.8-.3-9.1-.3-2.2 0-5.3.1-9.2.3v-2.4c4.7.1 4.9-.4 5-4.5l.2-24.6" id="path40"></path><path class="st2" d="M272.1 36.2c4.6-7.4 8.8-13.7 11.1-18.3h4.5V19l-2.4 3.3-6.2 9.2-2.6 4.1-1.8 3.7c-.4.8-.4 1.7-.4 2.6v8c0 4.1.3 4.6 5 4.3v2.5c-3.9-.1-6.8-.3-9.1-.3-2.2 0-5.3.1-9.2.3v-2.4c4.7.1 5-.4 5-4.5v-7.1c0-1.2-.3-2.4-.5-3-.7-1.3-1.3-2.5-2.1-3.7l-5.9-9.3c-.9-1.2-2.1-2.8-3-3.8-1.3-1.4-3-1.8-4.6-1.8V19l9.3-2c3.3 1.7 5 4.7 6.7 7.8l6.2 11.4" id="path42"></path><path class="st2" d="M317 49.9c0 4.1.3 4.6 5 4.3v2.5c-3.9-.1-6.8-.3-9.1-.3s-5.3.1-9.2.3v-2.4c4.7.1 5-.4 5-4.5V21.3H300c-1.4.1-2 .5-2.6 1.8-.1.9-.1 2.4-.3 3.8h-2.4c.1-2.8-.3-6.5-.1-9.5 7.9.1 13.8.3 18.4.3s10.5-.1 18.6-.3c-.1 2.5-.5 6.1-.8 9.5h-2.2c0-.8 0-1.6-.1-2.4-.4-2.9.1-3.2-3-3.3h-8.3l-.2 28.7" id="path44"></path><g id="g354"><g id="g48"><path class="st2" d="M29.7 22.6c.3.1.8.3 1.1.7.1.1.3.4.3.7.1.7.1 1.1-.3 1.4-.3.4-.7.5-1.1.4-.5 0-.8-.1-1.1-.3-.4-.1-.5-.3-.8-.4s-.4-.4-.4-.8c-.1-.4 0-.8 0-1.1 0-.4.1-.5.4-.7.3-.1.5-.3.9-.1.1 0 .4 0 .5.1l.5.1z" id="path46"></path></g><g id="g52"><path class="st2" d="M23.9 17.3c0 .4.1.8.1 1.3.1.8.3 1.2.3 1.4 0 .3 0 .4-.3.5-.1.1-.1.1-.1 0-.1 0-.3-.1-.4-.5 0-.4-.1-.9-.1-1.3v-1.2c0-.3 0-.4.1-.5 0 0 0-.1.1 0 .2.2.3.2.3.3" id="path50"></path></g><g id="g56"><path class="st2" d="M23.9 13.3v.4c0 .4 0 .9.1 1.4.1.8.3 1.2.1 1.6 0 .1-.1.1-.1.3-.1.1-.3.1-.4 0s-.3-.5-.3-.9l-.1-.7c-.1-.7 0-1.2 0-1.6 0-.3 0-.5.1-.7 0 0 .1-.1.1 0 .5-.2.5-.1.5.2" id="path54"></path></g><g id="g60"><path class="st2" d="M23.9 21c0 .4.1.8.1 1.3.1.8.3 1.2.3 1.4 0 .3 0 .4-.3.5-.1.1-.1.1-.3 0-.1 0-.3-.1-.3-.5s-.1-.8-.1-1.3v-1.2c0-.3 0-.4.1-.5h.1c.3.2.3.2.4.3" id="path58"></path></g><g id="g64"><path class="st2" d="M29.7 19.1c.3.1.8.3 1.1.7.1.1.3.4.3.7.1.5.1.9-.3 1.4-.3.4-.7.5-1.1.4-.5 0-.8-.1-1.1-.3-.4-.1-.5-.3-.8-.4s-.4-.4-.4-.8c-.1-.5 0-.8 0-1.1 0-.4.1-.5.4-.7.3-.1.5-.3.9-.1.1 0 .4 0 .5.1l.5.1z" id="path62"></path></g><g id="g68"><path class="st2" d="M29.7 29.7c.3.1.8.3 1.1.7.1.1.3.4.3.7.1.7.1 1.1-.3 1.4-.3.5-.7.5-1.1.5-.5 0-.8-.1-1.1-.3-.4-.1-.5-.3-.8-.4-.3-.1-.4-.4-.4-.9-.1-.5 0-.8 0-1.1 0-.4.1-.5.4-.7.3-.1.5-.3.9-.1.1 0 .4 0 .5.1h.5v.1z" id="path66"></path></g><g id="g72"><path class="st2" d="M29.7 26.2c.3.1.8.4 1.1.7.1.1.3.4.3.7.1.5.1 1.1-.3 1.4-.3.4-.7.5-1.1.4-.5 0-.8-.1-1.1-.3-.4 0-.5-.3-.8-.4s-.4-.4-.4-.9c-.1-.4 0-.8 0-1.1 0-.4.1-.5.4-.7.3-.1.5-.3.9-.1.1 0 .4 0 .5.1l.5.2z" id="path70"></path></g><g id="g76"><path class="st2" d="M29.7 36.8c.3.1.8.4 1.1.7.1.1.3.4.3.7.1.7.1.9-.3 1.4-.3.4-.7.5-1.1.5-.5 0-.8-.1-1.1-.3-.4 0-.5-.3-.8-.4-.3-.1-.4-.4-.4-.8-.1-.5 0-.8 0-1.1 0-.4.1-.5.4-.7.3-.1.5-.3.9-.1.1 0 .4 0 .5.1h.5z" id="path74"></path></g><g id="g80"><path class="st2" d="M29.7 33.3c.3.1.8.4 1.1.7.1.1.3.4.3.7.1.5.1.9-.3 1.4-.3.4-.7.5-1.1.4-.5 0-.8-.1-1.1-.3-.4-.1-.5-.3-.8-.4-.3-.1-.4-.4-.4-.9-.1-.4 0-.8 0-1.1 0-.4.1-.5.4-.7.3-.1.5-.3.9-.1.1 0 .4 0 .5.1l.5.2z" id="path78"></path></g><g id="g84"><path class="st2" d="M29.7 44.1c.3.1.8.3 1.1.7.1.1.3.4.3.7.1.5.1 1.1-.3 1.4-.3.4-.7.5-1.1.5-.5 0-.8-.1-1.1-.3-.4-.1-.7-.3-.8-.4-.3-.1-.4-.4-.4-.9-.1-.4 0-.8 0-1.1 0-.4.1-.5.4-.7.3-.1.5-.3.9-.1.1 0 .4 0 .5.1l.5.1z" id="path82"></path></g><g id="g88"><path class="st2" d="M29.7 40.5c.3.1.8.3 1.1.7.1.1.3.4.3.7.1.5.1.9-.3 1.4-.3.4-.7.5-1.1.4-.5 0-.8-.1-1.1-.3-.4 0-.5-.3-.8-.4-.3-.1-.4-.4-.4-.8-.1-.5 0-.8 0-1.1 0-.4.1-.5.4-.7.3-.1.5-.3.9-.1.1 0 .4 0 .5.1l.5.1z" id="path86"></path></g><g id="g92"><path class="st2" d="M29.7 51.2c.3.1.8.3 1.1.7.1.1.3.4.3.7.1.7.1 1.1-.3 1.4-.3.4-.7.5-1.1.5-.5 0-.8-.1-1.1-.3-.4 0-.5-.3-.8-.4-.3-.1-.4-.4-.4-.9-.1-.4 0-.8 0-1.1 0-.4.1-.5.4-.7.3-.1.5-.3.9-.1.1 0 .4 0 .5.1l.5.1z" id="path90"></path></g><g id="g96"><path class="st2" d="M29.7 47.6c.3.1.8.3 1.1.7.1.1.3.4.3.7.1.7.1.9-.3 1.4-.3.4-.7.5-1.1.4-.5 0-.8-.1-1.1-.3-.4-.1-.5-.3-.8-.4-.3-.1-.4-.4-.4-.8-.1-.5 0-.8 0-1.1 0-.4.1-.5.4-.7.3-.1.5-.3.9-.1.1 0 .4 0 .5.1l.5.1z" id="path94"></path></g><g id="g100"><path class="st2" d="M29.7 54.7c.3.1.8.3 1.1.7.1.1.3.4.3.7.1.7.1 1.1-.3 1.4-.3.5-.7.5-1.1.5-.5 0-.8-.1-1.1-.3-.4-.1-.5-.3-.8-.4-.3-.1-.4-.4-.4-.8-.1-.5 0-.8 0-1.2s.1-.5.4-.7c.3-.1.5-.3.9-.1.1 0 .4 0 .5.1h.5v.1z" id="path98"></path></g><g id="g104"><path class="st2" d="M27.1 23.1c-.1.3-.3.4-.5.5-.3 0-.5 0-.8-.1s-.5-.3-.7-.5c-.1-.3-.4-.4-.7-.9-.1-.4-.4-.9-.3-1.3s.4-.7.7-.7.7.1.9.3c.3.3.5.4.7.7.3.4.7 1.1.7 1.7.1.1 0 .2 0 .3" id="path102"></path></g><g id="g108"><path class="st2" d="M27.1 26.8c-.1.3-.3.4-.5.5-.3 0-.5 0-.8-.1s-.5-.3-.7-.5c-.1-.3-.4-.4-.7-.9-.1-.4-.4-.9-.3-1.3s.4-.7.7-.7.7 0 .9.3.5.4.7.7c.3.4.7 1.1.7 1.7.1-.1 0 .2 0 .3" id="path106"></path></g><g id="g112"><path class="st2" d="M27.1 30.5c-.1.3-.3.5-.5.5-.3 0-.5 0-.8-.1s-.5-.3-.7-.5c-.1-.3-.4-.4-.7-.9-.1-.4-.4-.9-.3-1.3s.4-.7.7-.7.7 0 .9.3.5.4.7.7c.1.1.3.5.5.8.1.3.1.7.1.9.2-.1.1 0 .1.3" id="path110"></path></g><g id="g116"><path class="st2" d="M27.1 34.1c-.1.3-.3.4-.5.5-.3 0-.5 0-.8-.1s-.5-.3-.7-.5c-.1-.3-.4-.4-.7-.9-.1-.4-.4-.9-.3-1.3.1-.4.4-.7.7-.7s.7 0 .9.3.5.4.7.7c.3.4.7 1.1.7 1.7.1 0 0 .1 0 .3" id="path114"></path></g><g id="g120"><path class="st2" d="M27.1 37.7c-.1.3-.3.4-.5.5-.3 0-.5 0-.8-.1s-.5-.3-.7-.5c-.1-.3-.4-.4-.7-.9-.1-.4-.4-.9-.3-1.3.1-.4.4-.7.7-.7s.7 0 .9.3.5.4.7.7c.3.4.7 1.1.7 1.7.1-.1 0 .1 0 .3" id="path118"></path></g><g id="g124"><path class="st2" d="M27.1 41.3c-.1.3-.3.4-.5.5-.3 0-.5 0-.8-.1s-.5-.3-.7-.5c-.1-.1-.4-.4-.7-.9-.1-.4-.4-.9-.3-1.3.1-.4.4-.7.7-.7s.7 0 .9.3.5.4.7.7c.3.4.7 1.1.7 1.7.1 0 0 .2 0 .3" id="path122"></path></g><g id="g128"><path class="st2" d="M27.1 45c-.1.3-.3.4-.5.5-.3 0-.5 0-.8-.1s-.5-.3-.7-.5c-.1-.1-.4-.4-.7-.9-.1-.4-.4-.9-.3-1.3.1-.4.4-.7.7-.7s.7 0 .9.3.5.4.7.7c.3.4.7 1.1.7 1.7.1-.1 0 .2 0 .3" id="path126"></path></g><g id="g132"><path class="st2" d="M27.1 48.5c-.1.3-.3.5-.5.5-.3 0-.5 0-.8-.1s-.5-.3-.7-.5c-.1-.3-.4-.4-.7-.9-.1-.4-.4-.9-.3-1.4.1-.4.4-.7.7-.7s.7 0 .9.3c.3.3.5.4.7.7.1.1.3.5.5.8.1.3.1.7.1.9.2.2.1.3.1.4" id="path130"></path></g><g id="g136"><path class="st2" d="M27.1 52.2c-.1.3-.3.4-.5.5-.3 0-.5 0-.8-.1s-.5-.3-.7-.5c-.1-.3-.4-.4-.7-.9-.1-.4-.4-.9-.3-1.3.1-.4.4-.7.7-.7s.7.1.9.3c.3.3.5.4.7.7.1.1.3.5.5.8.1.3.1.7.1.9.2.1.1.2.1.3" id="path134"></path></g><g id="g140"><path class="st2" d="M27.1 55.6c-.1.3-.3.4-.5.5-.3 0-.5 0-.8-.1s-.5-.3-.7-.5c-.1-.3-.4-.4-.7-.9-.1-.4-.4-.9-.3-1.3.1-.4.4-.7.7-.7s.8 0 .9.3l.7.7c.1.1.3.5.5.8.1.3.3.7.1.9.1.1.1.2.1.3" id="path138"></path></g><g id="g144"><path class="st2" d="M23.9 24.6c0 .4.1.8.1 1.3.1.8.3 1.2.3 1.4 0 .3 0 .4-.3.5h-.3c-.1 0-.3-.1-.3-.5s-.1-.8-.1-1.3v-1.2c0-.3 0-.4.1-.5h.1c.3.1.3.1.4.3" id="path142"></path></g><g id="g148"><path class="st2" d="M23.8 28.3c0 .4.1.8.1 1.3.1.7.3 1.2.3 1.4 0 .3 0 .4-.3.5h-.3c-.1 0-.3-.1-.3-.5s-.1-.9-.1-1.3v-1.2c0-.3 0-.4.1-.5h.1c.4 0 .4.1.4.3" id="path146"></path></g><g id="g152"><path class="st2" d="M23.8 31.8c0 .4.1.8.1 1.3.1.8.3 1.2.3 1.4 0 .3 0 .4-.3.5-.1.1-.1.1-.3 0-.1 0-.3-.1-.3-.5s-.1-.9-.1-1.3V32c0-.3 0-.4.1-.5 0 0 0-.1.1 0 .4.1.4.2.4.3" id="path150"></path></g><g id="g156"><path class="st2" d="M23.9 35.4c0 .4.1.8.1 1.3.1.8.3 1.2.3 1.4 0 .3 0 .4-.3.5-.1.1-.1.1-.3 0-.1 0-.3-.1-.3-.5s-.1-.8-.1-1.3v-1.2c0-.3 0-.4.1-.5h.1c.3.1.3.1.4.3" id="path154"></path></g><g id="g160"><path class="st2" d="M23.8 39.1c0 .4.1.8.1 1.2.1.8.3 1.2.3 1.4 0 .3 0 .4-.3.5-.1.1-.1.1-.3 0-.1 0-.3-.1-.3-.5s-.1-.9-.1-1.3v-1.2c0-.3 0-.4.1-.5 0 0 0-.1.1 0 .4.1.4.2.4.4" id="path158"></path></g><g id="g164"><path class="st2" d="M23.9 42.6c0 .4.1.8.1 1.2.1.7.3 1.2.3 1.4 0 .3 0 .4-.3.5-.1.1-.1.1-.1 0-.1 0-.3-.1-.4-.5 0-.4-.1-.9-.1-1.3v-1.2c0-.3 0-.4.1-.5h.1c.2.3.3.3.3.4" id="path162"></path></g><g id="g168"><path class="st2" d="M23.9 46.3c0 .4.1.8.1 1.2.1.8.3 1.2.3 1.4s0 .4-.3.5c-.1.1-.1.1-.3 0-.1 0-.3-.1-.3-.5s-.1-.8-.1-1.3v-1.2c0-.3 0-.4.1-.5h.1l.4.4" id="path166"></path></g><g id="g172"><path class="st2" d="M23.9 50c0 .4.1.8.1 1.3.1.7.3 1.2.3 1.4 0 .3 0 .4-.3.5-.1.1-.1.1-.3 0-.1 0-.3-.1-.3-.5s-.1-.8-.1-1.3v-1.2c0-.3 0-.4.1-.5h.1c.3.2.3.2.4.3" id="path170"></path></g><g id="g176"><path class="st2" d="M27.1 19.7c-.1.3-.3.4-.5.5-.3.1-.5 0-.8-.1s-.5-.3-.7-.5c-.1-.3-.4-.4-.7-.9-.1-.4-.4-.9-.3-1.3s.4-.7.7-.7.7.1.9.3c.3.3.5.4.7.7.1.1.3.5.5.8.1.3.1.7.1.9.2-.1.1 0 .1.3" id="path174"></path></g><g id="g180"><path class="st2" d="M33.1 22.3c.4-.1.8-.1 1.1 0 .3 0 .5.3.7.4.1.3.1.7.3.9v.5c-.1.4-.3.7-.4.9-.3.1-.5.4-.8.4-.4.1-.7.1-1.1.3-.4 0-.8 0-1.1-.4-.3-.4-.3-.8-.3-1.4.1-.7.4-.9.8-1.2.1-.1.4-.3.5-.3l.3-.1z" id="path178"></path></g><g id="g184"><path class="st2" d="M38.8 16.9c.3-.1.4.1.4.7v1.2c0 .4-.1.9-.1 1.3s-.3.5-.4.7c-.1 0-.5-.1-.5-.4-.1-.3 0-.5 0-.8.1-.3.1-.7.1-1.1s.1-.9.1-1.2c.1-.2.1-.4.4-.4" id="path182"></path></g><g id="g188"><path class="st2" d="M38.8 13c.1 0 .1 0 0 0 .2.1.2.4.4.7 0 .4.1.9 0 1.6l-.1.7c0 .4-.1.8-.3.9-.1.1-.3.1-.4 0-.1-.1-.3-.4-.3-.5 0-.3 0-.7.1-1.2s.1-1.2.1-1.4v-.4c.2-.3.2-.4.5-.4" id="path186"></path></g><g id="g192"><path class="st2" d="M38.8 20.8c.1 0 .1 0 0 0 .1.1.2.3.2.5v1.2c0 .4-.1.9-.1 1.3s-.1.4-.3.5h-.1c-.1-.1-.3-.4-.3-.5.1-.5.1-1.1.3-1.4 0-.4.1-.9.1-1.3-.1-.2.1-.3.2-.3" id="path190"></path></g><g id="g196"><path class="st2" d="M33.1 18.8c.4-.1.8-.1 1.1-.1s.5.3.7.4c.1.3.1.7.3.9v.5c-.1.4-.3.7-.4.8-.3.1-.5.4-.8.4s-.7.1-1.1.3c-.4 0-.8 0-1.1-.4-.3-.4-.3-.8-.3-1.4.1-.7.4-.9.8-1.2.1-.1.4-.3.5-.3l.3.1z" id="path194"></path></g><g id="g200"><path class="st2" d="M33.1 29.6c.4-.1.8-.1 1.1-.1s.5.3.7.4c.1.3.1.7.3.9v.5c-.1.4-.3.7-.4.8-.3.1-.5.4-.8.4-.4.1-.7.1-1.1.3-.4 0-.8 0-1.1-.4-.3-.4-.3-.8-.3-1.4.1-.5.4-.9.8-1.2.1-.1.4-.1.5-.3l.3.1z" id="path198"></path></g><g id="g204"><path class="st2" d="M33.1 26c.4-.1.8-.1 1.1 0 .3 0 .5.3.7.4.1.3.1.7.3.9v.5c-.1.4-.3.7-.4.9-.3.1-.5.4-.8.4s-.7.1-1.1.3c-.4 0-.8 0-1.1-.4-.3-.4-.3-.8-.3-1.4.1-.7.4-.9.8-1.2.1-.1.4-.1.5-.3l.3-.1z" id="path202"></path></g><g id="g208"><path class="st2" d="M33.1 36.7c.4-.1.8-.1 1.1-.1s.5.3.7.4c.1.3.1.7.3.9v.5c-.1.4-.3.7-.4.9-.3.1-.5.4-.8.4-.3.1-.7.1-1.1.3-.4 0-.8 0-1.1-.4-.3-.4-.3-.8-.3-1.4.1-.7.4-.9.8-1.2.1-.1.4-.1.5-.3h.3z" id="path206"></path></g><g id="g212"><path class="st2" d="M33.1 33.1c.4-.1.8-.1 1.1-.1s.5.3.7.4c.1.3.1.7.3.9v.5c-.1.4-.3.7-.4.8-.3.1-.5.4-.8.4s-.7.1-1.1.3c-.4 0-.8 0-1.1-.4-.3-.4-.3-.8-.3-1.4.1-.7.4-.9.8-1.2.1-.1.4-.1.5-.3l.3.1z" id="path210"></path></g><g id="g216"><path class="st2" d="M33.1 43.8c.4-.1.8-.1 1.1-.1s.5.3.7.4c.1.3.1.7.3.9v.5c-.1.4-.3.7-.4.8-.3.1-.5.4-.8.4s-.7.1-1.1.3c-.4 0-.8 0-1.1-.5-.3-.4-.3-.8-.3-1.4.1-.7.4-.9.8-1.2.1-.1.4-.1.5-.3l.3.2z" id="path214"></path></g><g id="g220"><path class="st2" d="M33.1 40.2c.4-.1.8-.1 1.1 0 .3 0 .5.3.7.4.1.3.1.7.3.9v.5c-.1.4-.3.7-.4.9-.3.1-.5.4-.8.4-.4.1-.7.3-1.1.3-.4 0-.8 0-1.1-.4-.3-.4-.3-.8-.3-1.4.1-.7.4-.9.8-1.2.1-.1.4-.1.5-.3l.3-.1z" id="path218"></path></g><g id="g224"><path class="st2" d="M33.1 51c.4-.1.8-.1 1.1 0 .3 0 .5.3.7.4.1.3.1.7.3.9v.5c-.1.4-.3.7-.4.8-.3.1-.5.4-.8.4s-.7.1-1.1.3c-.4 0-.8 0-1.1-.4-.3-.4-.3-.8-.3-1.4.1-.7.4-.9.8-1.2.1-.1.4-.1.5-.3h.3z" id="path222"></path></g><g id="g228"><path class="st2" d="M33.1 47.5c.4-.1.8-.1 1.1 0 .3 0 .5.3.7.4.1.3.1.7.3.9v.5c-.1.4-.3.7-.4.8-.3.1-.5.4-.8.4-.4.1-.7.1-1.1.3-.4 0-.8 0-1.1-.4-.3-.4-.3-.8-.3-1.4.1-.5.4-.9.8-1.2.1-.1.4-.3.5-.3h.3z" id="path226"></path></g><g id="g232"><path class="st2" d="M33.1 54.6c.4-.1.8-.1 1.1-.1s.5.3.7.4c.1.3.1.7.3.9v.5c-.1.4-.3.7-.4.8-.3.1-.5.4-.8.4-.4.1-.7.1-1.1.3-.4 0-.8 0-1.1-.5-.3-.4-.3-.8-.3-1.4.1-.7.4-.9.8-1.2.1-.1.4-.1.5-.3l.3.2z" id="path230"></path></g><g id="g236"><path class="st2" d="M35.2 22.7c0-.4.1-.9.4-1.3.1-.3.3-.4.5-.7.3-.3.4-.4.8-.5.4-.1.7 0 .9.1.3.3.4.7.3 1.2-.1.5-.3.9-.5 1.2-.3.4-.5.7-.9.9-.3.1-.4.1-.8.1-.3 0-.5-.1-.5-.5-.2-.2-.2-.3-.2-.5" id="path234"></path></g><g id="g240"><path class="st2" d="M35.2 26.3c0-.4.1-.9.4-1.3.1-.3.3-.4.5-.7.3-.3.4-.4.8-.5.4-.1.7 0 .9.1.3.3.4.7.3 1.2-.1.5-.3.9-.5 1.2-.4.4-.5.7-.9.9-.3.1-.4.1-.8.1-.3 0-.5-.3-.5-.5-.2-.2-.2-.4-.2-.5" id="path238"></path></g><g id="g244"><path class="st2" d="M35.2 30c0-.4.1-.9.4-1.3.1-.3.3-.4.5-.7.3-.3.4-.4.8-.5.4-.1.7 0 .9.1.3.3.4.7.3 1.2-.1.5-.3.9-.5 1.2-.4.4-.5.7-.9.9-.3.1-.4.1-.8.1-.3 0-.5-.1-.5-.5-.2-.3-.2-.4-.2-.5" id="path242"></path></g><g id="g248"><path class="st2" d="M35.2 33.5c0-.4.1-.9.4-1.3.1-.3.3-.4.5-.7.3-.3.4-.4.8-.5.4-.1.7 0 .9.1.3.3.4.7.3 1.2-.1.5-.3.9-.5 1.2-.4.4-.5.7-.9.9-.3.1-.4.1-.8.1-.3 0-.5-.3-.5-.5-.2-.2-.2-.3-.2-.5" id="path246"></path></g><g id="g252"><path class="st2" d="M35.2 37.2c0-.4.1-.9.4-1.3.1-.3.3-.4.5-.7.3-.3.4-.4.8-.5.4-.1.7 0 .9.1.3.3.4.7.3 1.2-.1.5-.3.9-.5 1.2-.4.4-.5.7-.9.9-.3.1-.4.1-.8.1-.3 0-.5-.1-.5-.5-.2-.2-.2-.4-.2-.5" id="path250"></path></g><g id="g256"><path class="st2" d="M35.2 40.8c0-.4.1-.9.4-1.3.1-.3.3-.4.5-.7.3-.3.4-.4.8-.5.4-.1.7 0 .9.1.3.3.4.7.3 1.2-.1.5-.3.9-.5 1.2-.4.4-.5.7-.9.9-.3.1-.4.1-.8.1-.3 0-.5-.1-.5-.5-.2-.1-.2-.4-.2-.5" id="path254"></path></g><g id="g260"><path class="st2" d="M35.2 44.5c0-.4.1-.9.4-1.3.1-.3.3-.4.5-.7.3-.3.4-.4.8-.5.4-.1.7 0 .9.1.3.3.4.7.3 1.2-.1.5-.3.9-.5 1.2-.4.4-.5.7-.9.9-.3.1-.4.1-.8.1-.3 0-.5-.3-.5-.5-.2-.3-.2-.4-.2-.5" id="path258"></path></g><g id="g264"><path class="st2" d="M35.2 48c0-.4.1-.9.4-1.3.1-.3.3-.4.5-.7.3-.3.4-.4.8-.5.4-.1.7 0 .9.1.3.3.4.7.3 1.2-.1.5-.3.9-.5 1.2-.4.4-.5.7-.9.9-.3.1-.4.1-.8.1-.3 0-.5-.1-.5-.5-.2-.1-.2-.2-.2-.5" id="path262"></path></g><g id="g268"><path class="st2" d="M35.2 51.7c0-.4.1-.9.4-1.3.1-.3.3-.4.5-.7.3-.3.4-.4.8-.5.4-.1.7 0 .9.1.3.3.4.7.3 1.2-.1.5-.3.9-.5 1.2-.4.4-.5.7-.9.9-.4.1-.5.1-.8.1s-.5-.3-.5-.5c-.2-.2-.2-.4-.2-.5" id="path266"></path></g><g id="g272"><path class="st2" d="M35.2 55.1c0-.4.1-.9.4-1.3.1-.3.3-.4.5-.7.3-.3.4-.4.8-.5.4-.1.7 0 .9.1.3.3.4.7.3 1.2-.1.5-.3.9-.5 1.2-.4.4-.5.7-.9.9-.3.1-.4.1-.8.1-.3 0-.5-.3-.5-.5-.2-.1-.2-.3-.2-.5" id="path270"></path></g><g id="g276"><path class="st2" d="M38.7 24.3c.1 0 .1 0 0 0 .1.1.2.3.2.5V26c0 .4-.1.9-.1 1.3s-.1.5-.4.5h-.1c-.1-.1-.3-.4-.3-.5.1-.5.3-1.1.3-1.4 0-.4.1-.9.1-1.2.1-.3.3-.4.3-.4" id="path274"></path></g><g id="g280"><path class="st2" d="M38.7 28c.1 0 .1 0 0 0 .1.1.2.3.2.5v1.2c0 .4-.1.9-.1 1.3s-.1.4-.3.5h-.3c-.1-.1-.2-.3-.2-.5.1-.5.1-1.1.3-1.4 0-.4.1-.9.1-1.2.1-.3.1-.3.3-.4" id="path278"></path></g><g id="g284"><path class="st2" d="M38.8 31.6c.1 0 .1 0 0 0 .1.1.2.3.2.5v1.2c0 .4-.1.9-.1 1.3s-.1.5-.3.5h-.1c-.1-.1-.3-.4-.3-.5.1-.5.1-1.1.3-1.4 0-.4.1-.9.1-1.3-.1-.2.1-.3.2-.3" id="path282"></path></g><g id="g288"><path class="st2" d="M38.8 35.2c.1 0 .1 0 0 0 .1.1.2.3.2.5v1.2c0 .4-.1.9-.1 1.3s-.1.4-.3.5h-.1c-.1-.1-.3-.3-.3-.5.1-.5.1-1.1.3-1.4 0-.4.1-.9.1-1.2-.1-.4.1-.4.2-.4" id="path286"></path></g><g id="g292"><path class="st2" d="M38.8 38.7c.1 0 .1 0 0 0 .1.1.2.3.2.5v1.2c0 .4-.1.9-.1 1.3s-.1.5-.3.5h-.1c-.1-.1-.3-.4-.3-.5.1-.5.1-1.1.3-1.4 0-.4.1-.9.1-1.3-.1-.2.1-.2.2-.3" id="path290"></path></g><g id="g296"><path class="st2" d="M38.8 42.5c.1 0 .1 0 0 0 .1.1.2.3.2.5v1.2c0 .4-.1.9-.1 1.3s-.1.4-.3.5h-.1c-.1-.1-.3-.4-.3-.5.1-.5.1-1.1.3-1.4 0-.4.1-.9.1-1.2-.1-.4.1-.4.2-.4" id="path294"></path></g><g id="g300"><path class="st2" d="M38.8 46c.1 0 .1 0 0 0 .1.1.2.3.2.5v1.2c0 .4-.1.9-.1 1.3s-.1.4-.3.5h-.1c-.1-.1-.3-.3-.3-.5.1-.5.1-1.1.3-1.4 0-.4.1-.9.1-1.3-.1-.1.1-.3.2-.3" id="path298"></path></g><g id="g304"><path class="st2" d="M38.8 49.6c.1 0 .1 0 0 0 .1.1.2.3.2.5v1.2c0 .4-.1.9-.1 1.3s-.1.4-.3.5h-.1c-.1-.1-.3-.4-.3-.5.1-.5.1-1.1.3-1.4 0-.4.1-.9.1-1.2-.1-.3.1-.3.2-.4" id="path302"></path></g><g id="g308"><path class="st2" d="M35.2 19.2c0-.4.1-.9.4-1.3.1-.3.3-.4.5-.7.3-.3.4-.4.8-.5.4-.1.7 0 .9.1.3.3.4.7.3 1.2-.1.5-.3.9-.5 1.2-.3.4-.5.7-.9.9-.3.1-.4.1-.8.1-.3 0-.5-.3-.5-.5-.2-.3-.2-.4-.2-.5" id="path306"></path></g><g id="g312"><path class="st2" d="M27.5 10.9c0 .3-.3.5-.4.7-.5.5-1.6 1.1-2.8 1.3-.3 0-.7-.3-.8-.5-.4-.8-.4-2-.1-2.6.1-.5.5-.9.9-.9 1.2.3 2.4.9 2.8 1.3s.4.6.4.7" id="path310"></path></g><g id="g316"><path class="st2" d="M32.3 14.4c.3 0 .5 0 .8.3.7.4 1.6 1.2 2.1 2.2.1.3-.1.7-.3.9-.7.7-1.7 1.1-2.5.9-.5 0-1.1-.3-1.1-.7-.1-1.2.3-2.5.4-3l.6-.6" id="path314"></path></g><g id="g320"><path class="st2" d="M30.1 14.4c.3.1.4.4.5.7.3.7.5 1.8.4 3 0 .3-.5.5-.8.5-.9.1-2-.3-2.5-.7-.4-.3-.7-.8-.5-1.2.7-1.1 1.6-2 2.1-2.2.4-.1.5-.1.8-.1" id="path318"></path></g><g id="g324"><path class="st2" d="M28.4 13c.1.1.1.5 0 .8-.3.8-.7 1.8-1.4 2.8-.3.3-.7.1-.9 0-.8-.4-1.4-1.3-1.6-2.1-.1-.5-.1-1.1.3-1.2 1.1-.5 2.5-.7 3-.5.3.1.5.1.6.2" id="path322"></path></g><g id="g328"><path class="st2" d="M34.8 11c0-.3.3-.5.4-.7.7-.5 1.6-1 2.8-1.3.3 0 .7.3.8.5.4.8.4 2 .1 2.6-.1.5-.5.9-.9.8-1.2-.3-2.4-1.1-2.8-1.4-.2-.2-.4-.3-.4-.5" id="path326"></path></g><g id="g332"><path class="st2" d="M32.3 7.6c-.3-.1-.4-.4-.5-.7-.3-.7-.5-2-.4-3 0-.3.5-.5.8-.5.9-.1 2 .3 2.5.7.4.3.7.8.5 1.2-.7 1.1-1.7 2-2.1 2.2-.4.1-.5.1-.8.1" id="path330"></path></g><g id="g336"><path class="st2" d="M30.1 7.6c-.3.1-.5 0-.8-.1-.7-.4-1.6-1.2-2.1-2.2-.1-.3.1-.7.3-.9.7-.7 1.7-1.1 2.4-.9.5 0 1.1.3 1.1.7.1 1.2-.1 2.5-.4 3-.2.1-.2.3-.5.4" id="path334"></path></g><g id="g340"><path class="st2" d="M34.2 8.8c-.1-.1-.1-.5 0-.8.3-.8.7-1.8 1.4-2.6.1-.1.7-.1.9 0 .8.4 1.4 1.3 1.6 2.1.1.5.1 1.1-.3 1.2-1.1.5-2.5.5-3 .5-.3-.2-.5-.2-.6-.4" id="path338"></path></g><g id="g344"><path class="st2" d="M34.2 13.1c.1-.1.5-.3.8-.3.8 0 2 .1 3 .5.3.1.3.7.3.9-.1.9-.8 1.8-1.4 2.2-.4.3-1.1.4-1.2.1-.8-.9-1.3-2.2-1.4-2.8-.2-.3-.2-.4-.1-.6" id="path342"></path></g><g id="g348"><path class="st2" d="M28.3 8.8c-.2.1-.6.2-.8.2-.8 0-2 0-3-.5-.3-.1-.4-.7-.3-.9.1-.9.8-1.8 1.4-2.2.4-.3 1.1-.4 1.2-.2.8.9 1.3 2.2 1.4 2.8.2.5.2.7.1.8" id="path346"></path></g><g id="g352"><path class="st2" d="M31.3 14.4c1.8 0 3.4-1.6 3.4-3.4s-1.6-3.4-3.4-3.4-3.4 1.6-3.4 3.4 1.4 3.4 3.4 3.4" id="path350"></path></g></g><g id="g362"><g id="g360"><g id="g358"><path class="st2" d="M15.2 27.9V3.3h1.2v25s.1 5.5.1 7.1-.3 3-.3 3-.3 2.1-1.6 3.3c0 0-.8 1.1-1.7 1.7-.9.8-1.1 1.3-1.2 1.7-.1.5-.3 1.7-.3 1.7s5.5-6.2 5.8-9.1V3.1h1.2V38.7s-.1 4.9-2 9.1L15 50.6c-1.1 1.6-3.3 3.6-3.4 5 0 .8-.1 1.7-.1 1.7h-1.4l-.1-3.6s0-1.2-.3-2c-.3-1.1-.5-1.6-.9-2.1S8 48.5 7.6 48C2.5 41.2 3 36.2 3 35.8V2.9h1V33.3s-.1 2.4 1.6 4.2c1.2 1.3 1.3 1.2 2.2 2.4.9 1.1 1.6 2.5 1.6 2.5s.1 0 0-1.3c0-1.3-1.3-2.4-1.3-2.4C4.8 35.8 5 31.8 5 31.8L4.8 2.7h.9v20.1s0 .9.4 2c.3 1.1.8 2.1 1.4 3.9 1.3 3 2.2 4.9 2.2 4.9s-.1-2.5-.5-3c-.4-.7-.9-2.1-.9-2.1-.8-2-1.1-3-1.2-3.6-.4-1.7-.4-2.6-.4-2.6V3h1.1v12.5c0 2.4.5 3.2.9 4.1s.8 2.5.8 2.5.3-.9-.4-3.8c-.1-.8-.4-3.6-.4-3.6V3.1h.9v7.6s.3 3.3.7 2.4.4-1.8.4-1.8V3.1h1.1v17.5s-.1 2.2-.5 3.6c-.5 1.6-.3 2.6-.3 2.6l1.1-2.2c.8-1.7.8-3 .8-3V3.3H14v24.2c0 1.3-.3 2-1.3 5-.7 2-1.1 2.4-1.2 3.2-.3 1.1-.1 2.1-.1 2.1l1.6-3.2c.8-1.8 1.1-2.6 1.6-4.1.1-.1.6-1.2.6-2.6z" id="path356"></path></g></g></g></g></g><g id="g378"><g id="g370"><path class="st2" d="M369.9 38.4c-1.4-.1-3.6-.4-5.5-.7-1.3-.3-2.4-.9-3.4-2-1.8-1.8-2.2-4.5-2-7h1.7c.5 5.9 4.3 7 6.3 6.8.3-3.9.5-6.5.7-11.1.1-2.4-1.4-2.4-3.4-2.6-1.8-.3-7.9-.5-9.6-.7-.1 1.2-.4 10.5-.5 13.8 0 1.3-.1 2.6.5 3.4s1.7.8 2.8.8c1.6.1 12.6.8 13.3.8l-.9-1.5z" id="path368"></path></g><g id="g374"><path d="M371.9 30.8c.8-1.2 2.1-2.9 3.3-4.3.8-1.1 2-1.6 3.4-2 2.5-.7 5 .4 7.1 1.7-.3.5-.4.7-.9 1.4-5.4-2.5-8.3.3-9.1 2.1 3.3 2.1 5.3 3.7 9.2 6.1 2 1.3 2.8 0 3.9-1.7 1.1-1.4 4.5-6.6 5.4-7.9-1.1-.7-9-5.7-11.6-7.4-1.1-.7-2.2-1.4-3.2-1.2-1.1.3-1.6 1.2-2.1 2-.9 1.3-7 10.5-7.4 11.1l2 .1z" id="path372" style="fill:#8ec1cb"></path></g><path d="M384.5 46.6c-.7-1.4-5.7-11.3-5.9-11.8l-1.1 1.6c.7 1.3 1.4 3.3 2.2 5 .5 1.2.5 2.5.1 3.9-.7 2.5-2.8 4.2-5 5.3-.3-.5-.4-.7-.9-1.6 4.9-3.4 3.8-7.2 2.6-9-3.4 1.7-5.8 2.8-9.9 5.1-2.1 1.1-1.3 2.4-.5 4.3.8 1.7 3.6 7.1 4.2 8.6 1.1-.5 9.3-5 12.1-6.5 1.1-.7 2.4-1.2 2.6-2.2.6-.9 0-1.8-.5-2.7z" id="path376" style="fill:#fdbe50"></path></g></g></svg></span></div></div>`);
			}
			$$renderer.push(`<!--]--></div></div> <div class="mt-0.5 p-2"><p class="text-left text-[0.65rem] text-gray-400">${escape_html(store_get($$store_subs ??= {}, "$t", t)("app.copyright"))}</p></div></main>`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
export { _page as default };
