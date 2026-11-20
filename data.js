var APP_DATA = {
  "scenes": [
    {
      "id": "0-sitout",
      "name": "SITOUT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.06651916632307397,
          "pitch": 0.3308078309226694,
          "rotation": 0,
          "target": "1-living-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-1",
      "name": "LIVING 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.06651761603158235,
          "pitch": 0.5648128968673412,
          "rotation": 0,
          "target": "2-living-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living-2",
      "name": "LIVING 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.2830838242715483,
          "pitch": 0.30761229451188044,
          "rotation": 0,
          "target": "3-dining-1"
        },
        {
          "yaw": 1.3117607966915514,
          "pitch": 0.649774526779213,
          "rotation": 0,
          "target": "0-sitout"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dining-1",
      "name": "DINING 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.36484113476297253,
          "pitch": 0.5400565952707872,
          "rotation": 0,
          "target": "4-dining-2"
        },
        {
          "yaw": -2.2820938579709935,
          "pitch": 0.7174983405966575,
          "rotation": 0,
          "target": "1-living-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dining-2",
      "name": "DINING 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.5658194846183822,
          "pitch": 0.22482261597198416,
          "rotation": 0,
          "target": "5-wash-area"
        },
        {
          "yaw": 0.7737973755125225,
          "pitch": 0.3875459590071664,
          "rotation": 1.5707963267948966,
          "target": "7-stair-area"
        },
        {
          "yaw": 2.8942773858406152,
          "pitch": 0.6076595092836925,
          "rotation": 0,
          "target": "1-living-1"
        },
        {
          "yaw": 0.38407525713884105,
          "pitch": 0.34763264680933936,
          "rotation": 0,
          "target": "14-kitchen-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-wash-area",
      "name": "WASH AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.02101815959176,
          "pitch": 0.2757480372912475,
          "rotation": 4.71238898038469,
          "target": "14-kitchen-1"
        },
        {
          "yaw": 1.7865474296170598,
          "pitch": 0.33832451174678724,
          "rotation": 0,
          "target": "3-dining-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-prayer--room-",
      "name": "PRAYER  ROOM ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.0928176518956363,
          "pitch": 0.5784893264316295,
          "rotation": 0,
          "target": "14-kitchen-1"
        },
        {
          "yaw": 2.370460239478766,
          "pitch": 0.8653200315706968,
          "rotation": 0,
          "target": "3-dining-1"
        },
        {
          "yaw": 1.5615119434261953,
          "pitch": 0.3877940766460508,
          "rotation": 0,
          "target": "1-living-1"
        },
        {
          "yaw": -0.5351792761197487,
          "pitch": 0.32430609521788867,
          "rotation": 0,
          "target": "7-stair-area"
        },
        {
          "yaw": 0.6136540259410808,
          "pitch": 0.6903311708883191,
          "rotation": 1.5707963267948966,
          "target": "21-bedroom-2"
        },
        {
          "yaw": -2.6838984825953975,
          "pitch": 0.568575674493971,
          "rotation": 0,
          "target": "5-wash-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-stair-area",
      "name": "STAIR AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.09739648920286825,
          "pitch": 0.2633634208296982,
          "rotation": 0,
          "target": "8-passage-"
        },
        {
          "yaw": -1.189428336291673,
          "pitch": 0.9666363749109905,
          "rotation": 11.780972450961727,
          "target": "18-bedroom-1"
        },
        {
          "yaw": 1.4352870771820472,
          "pitch": 0.6284100490428628,
          "rotation": 4.71238898038469,
          "target": "6-prayer--room-"
        },
        {
          "yaw": 2.071955018185645,
          "pitch": 0.5996706392712969,
          "rotation": 1.5707963267948966,
          "target": "3-dining-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-passage-",
      "name": "PASSAGE ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.221938322156646,
          "pitch": 0.546705997269882,
          "rotation": 0,
          "target": "9-courtyard-1"
        },
        {
          "yaw": 3.066592460784359,
          "pitch": 0.37371650579883386,
          "rotation": 0,
          "target": "7-stair-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-courtyard-1",
      "name": "COURTYARD 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.015542829375942091,
          "pitch": 0.41232694103118384,
          "rotation": 0,
          "target": "10-courtyard-2"
        },
        {
          "yaw": -1.0904149392407803,
          "pitch": 0.7464520149460299,
          "rotation": 0,
          "target": "8-passage-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-courtyard-2",
      "name": "COURTYARD 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.09299532472926586,
          "pitch": 0.43104311841630505,
          "rotation": 0,
          "target": "9-courtyard-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-stair-landing",
      "name": "STAIR LANDING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.16070448137148574,
          "pitch": 0.1134923059286237,
          "rotation": 0,
          "target": "12-upper-living"
        },
        {
          "yaw": 0.12590398860519159,
          "pitch": 0.6155168605951893,
          "rotation": 0,
          "target": "7-stair-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-upper-living",
      "name": "UPPER LIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -2.9972690065480396,
          "pitch": 0.3717590690629393,
          "rotation": 0,
          "target": "13-study-area"
        },
        {
          "yaw": -0.8342001427781263,
          "pitch": 0.6867947390326368,
          "rotation": 5.497787143782138,
          "target": "26-bedroom-4"
        },
        {
          "yaw": 1.5648990337871878,
          "pitch": 0.6781734644247681,
          "rotation": 0,
          "target": "23-bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-study-area",
      "name": "STUDY AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.7457891317739467,
          "pitch": 0.4257224935484025,
          "rotation": 0,
          "target": "11-stair-landing"
        },
        {
          "yaw": -2.805438340953451,
          "pitch": 0.53220536884049,
          "rotation": 0,
          "target": "12-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-kitchen-1",
      "name": "KITCHEN 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.1948905791236584,
          "pitch": 0.6974021367146541,
          "rotation": 0,
          "target": "3-dining-1"
        },
        {
          "yaw": 0.12371760330800718,
          "pitch": 0.5670685418228807,
          "rotation": 0,
          "target": "15-kitchen-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-kitchen-2",
      "name": "KITCHEN 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.3334738053215922,
          "pitch": 0.4814557246086917,
          "rotation": 0,
          "target": "16-work-area-1"
        },
        {
          "yaw": 2.3722190534070506,
          "pitch": 0.9806991360651853,
          "rotation": 0,
          "target": "14-kitchen-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-work-area-1",
      "name": "WORK AREA 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.08540948851839758,
          "pitch": 0.602766014472417,
          "rotation": 0,
          "target": "17-work-area-2"
        },
        {
          "yaw": -1.8303885446116581,
          "pitch": 1.0427624758516512,
          "rotation": 0,
          "target": "14-kitchen-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-work-area-2",
      "name": "WORK AREa 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.3334735126203121,
          "pitch": 0.5542598930807223,
          "rotation": 0,
          "target": "16-work-area-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-bedroom-1",
      "name": "BEDROOM 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2712618452653097
      },
      "linkHotspots": [
        {
          "yaw": -0.34653305840045334,
          "pitch": 0.544164231079689,
          "rotation": 0,
          "target": "19-bedroom-11"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-bedroom-11",
      "name": "BEDROOM 1.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.3413822819930026,
          "pitch": 0.6000598771485404,
          "rotation": 0,
          "target": "20-bedroom-12"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-bedroom-12",
      "name": "BEDROOM 1.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.1734825191309024
      },
      "linkHotspots": [
        {
          "yaw": -0.5951247340815176,
          "pitch": 0.45510947429261783,
          "rotation": 5.497787143782138,
          "target": "7-stair-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-bedroom-2",
      "name": "BEDROOM 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.20790651894848722,
          "pitch": 0.6162861181490307,
          "rotation": 0,
          "target": "22-bedroom-21"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-bedroom-21",
      "name": "BEDROOM 2.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.007015537758973
      },
      "linkHotspots": [
        {
          "yaw": 0.6233596220894135,
          "pitch": 0.38490588173491247,
          "rotation": 1.5707963267948966,
          "target": "7-stair-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-bedroom-3",
      "name": "BEDROOM 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.1018385725078872
      },
      "linkHotspots": [
        {
          "yaw": 0.3946434124171816,
          "pitch": 0.4682172535105984,
          "rotation": 0,
          "target": "24-bedroom-31"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-bedroom-31",
      "name": "BEDROOM 3.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.5101736378109702,
          "pitch": 0.47440387185327637,
          "rotation": 0,
          "target": "25-bedroom-32"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-bedroom-32",
      "name": "BEDROOM 3.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 2.322634202085438,
          "pitch": 0.37336257984743426,
          "rotation": 0,
          "target": "12-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-bedroom-4",
      "name": "BEDROOM 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.1764665107854029
      },
      "linkHotspots": [
        {
          "yaw": 0.22502387136999857,
          "pitch": 0.4674676278040284,
          "rotation": 0,
          "target": "27-bedroom-41"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-bedroom-41",
      "name": "BEDROOM 4.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.3954757583237303,
          "pitch": 0.301949374765222,
          "rotation": 0,
          "target": "28-bedroom-42"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-bedroom-42",
      "name": "BEDROOM 4.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.45621919500396046,
          "pitch": 0.2795421953224757,
          "rotation": 0,
          "target": "12-upper-living"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "BAIJU 112023",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
