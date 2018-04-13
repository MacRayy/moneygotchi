'use strict'

const DonutBasic = (function() {

	const pie = new d3pie("pieChart", {
		"header": {
			"title": {
				"text": "MoneyGotchi",
				"fontSize": 40,
				"font": "courier"
			},
			"subtitle": {
				"text": "How your MoneyGotchi is feeling today?",
				"color": "#999999",
				"fontSize": 17,
				"font": "courier"
			},
			"location": "pie-center",
			"titleSubtitlePadding": 50
		},
		"footer": {
			"color": "#999999",
			"fontSize": 10,
			"font": "open sans",
			"location": "bottom-left"
		},
		"size": {
			"canvasHeight": 1000,
			"canvasWidth": 1500,
			"pieInnerRadius": "65%",
			"pieOuterRadius": "67%"
		},
		"data": {
			"sortOrder": "value-asc",
			"content": [
				{
					"label": "Income",
					"value": 1,
					"color": "#a5fbe3"
				},
				{
					"label": "Expense",
					"value": 1,
					"color": "#f6c73c"
				}
			]
		},
		"labels": {
			"outer": {
				"format": "label-percentage1",
				"pieDistance": 20
			},
			"inner": {
				"format": "none"
			},
			"mainLabel": {
				"fontSize": 11
			},
			"percentage": {
				"color": "#999999",
				"fontSize": 11,
				"decimalPlaces": 0
			},
			"value": {
				"color": "#cccc43",
				"fontSize": 11
			},
			"lines": {
				"enabled": true,
				"color": "#777777"
			},
			"truncation": {
				"enabled": true
			}
		},
		"effects": {
			"pullOutSegmentOnClick": {
				"effect": "linear",
				"speed": 400,
				"size": 8
			}
		},
		"misc": {
			"colors": {
				"segmentStroke": "#e6d6e2"
			}
		}
	})

	let handleIncome = function() {

	}

	let handleExpense = function() {

	}

	return {
	  pie
	}
})()

export default DonutBasic