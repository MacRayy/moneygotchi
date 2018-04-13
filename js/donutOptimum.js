'use strict'

const DonutOptimum = (function() {

  const number = [20, 4, 5]

  const pie = new d3pie("pieChart", {
    "header": {
      "title": {
        "text": "MoneyGotchi",
        "fontSize": 40,
        "font": "courier"
      },
      "subtitle": {
        "text": "How your MoneyGotchi feels itself?",
        "color": "#999999",
        "fontSize": 20,
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
      "canvasWidth": 1500,
      "canvasHeight": 1000,
      "pieInnerRadius": "65%",
      "pieOuterRadius": "67%"
    },
    "data": {
      "sortOrder": "value-asc",
      "content": [
        {
          "label": "Food",
          "value": number[0],
          "color": "#cafd6a"
        },
        {
          "label": "Furniture",
          "value": 10,
          "color": "#f8bcdb"
        },
        {
          "label": "Car",
          "value": 8,
          "color": "#a5fbe3"
        },
        {
          "label": "Travel",
          "value": 18,
          "color": "#f6c73c"
        },
        {
          "label": "Gift",
          "value": 5,
          "color": "#f89227"
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

  return {
    pie
  }
})()

export default DonutOptimum