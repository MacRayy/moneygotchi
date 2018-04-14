'use strict'

const DonutBasic = (function() {

	let incData = 1;


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
					value: incData,
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



	const addButton = document.querySelector('.btn-plus')
  const subtractButton = document.querySelector('.btn-minus')
  const inputField = document.getElementById('input-field')
  const pieDom = document.getElementById('pieChart')
  console.log('piedom', pieDom);

console.log('d3', pie);
  const handleIncome = () => {
		  console.log(pie.options.data.content[0].value)
		  incData = pie.options.data.content[0].value += parseInt(inputField.value)
		  console.log(pie.options.data.content[0].value)
		  // pie.updateProp("pie.data.content[0].value", incData)
		  pieDom.remove();
		
  } 
  
  const handleExpense = () => pie.options.data.content[1].value += parseInt(inputField.value)

  subtractButton.addEventListener('click', handleExpense)
  addButton.addEventListener('click', handleIncome)

	return {
	  pie,
	  handleIncome,
	  handleExpense
	}
})()

export default DonutBasic

// DONUT CHART WITH PRECENTAGE
// var data = [
//   {name: 'car service', count: 5, percentage: 2, color: '#FB1'},
//   {name: 'gift', count: 10, percentage: 8, color: '#C0FFEE'},
//   {name: 'furniture', count: 17, percentage: 15, color: 'pink'},
//   {name: 'tution fee', count: 47, percentage: 41, color: '#BADA55'},
//   {name: 'food', count: 35, percentage: 31, color: 'orange'},
// ];

// var width = 1000,
// height = 1000,
// radius = 250;

// // const renderPie = function(){

// 	var arc = d3.svg.arc()
// 	  .outerRadius(radius - 40)
// 	  .innerRadius(140);

// 	var pie = d3.layout.pie()
// 	  .sort(null)
// 	  .value(function(d) {
// 	      return d.count;
// 	  });

// 	var svg = d3.select('body').append("svg")
// 	  .attr("width", width)
// 	  .attr("height", height)
// 	  .append("g")
// 	  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// 	var g = svg.selectAll(".arc")
// 	  .data(pie(data))
// 	  .enter().append("g");    

// 	g.append("path")
// 	  .attr("d", arc)
// 	  .style("fill", function(d,i) {
// 	    return d.data.color;
// 	  });

// 	g.append("text")
// 	  .attr("transform", function(d) {
// 	    var _d = arc.centroid(d);
// 	    _d[0] *= 1.5; //multiply by a constant factor
// 	    _d[1] *= 1.4; //multiply by a constant factor
// 	    return "translate(" + _d + ")";
// 	  })
// 	  .attr("dy", ".9em")
// 	  .style("text-anchor", "middle")
// 	  .text(function(d) {
// 	    // if(d.data.percentage < 8) {
// 	    //   return '';
// 	    // }
// 	    return  d.data.name + " " + d.data.percentage + '%';
// 	  });
// }

// renderPie()

// const addButton = document.querySelector('.btn-plus')
// const subtractButton = document.querySelector('.btn-minus')
// const inputField = document.getElementById('input-field')

// const handleIncome = () => {
// 	  console.log(data[0].count)
// 	  data[0].count += parseInt(inputField.value)
// 	  console.log(data[0].count)
// 	  // renderPie()
// 	  // pie.updateProp(pie.options.data.content[0].value, parseInt(inputField.value))
// 		pie.redraw()  
// } 

// const handleExpense = () => pie.options.data.content[1].value += parseInt(inputField.value)

// subtractButton.addEventListener('click', handleExpense)
// addButton.addEventListener('click', handleIncome)
