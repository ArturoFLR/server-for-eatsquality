const barChartData = [
	{
		"country": "AD",
		"hot dog": 94,
		"hot dogColor": "hsl(285, 70%, 50%)",
		"burger": 75,
		"burgerColor": "hsl(118, 70%, 50%)",
		"sandwich": 139,
		"sandwichColor": "hsl(211, 70%, 50%)",
		"kebab": 138,
		"kebabColor": "hsl(285, 70%, 50%)",
		"fries": 124,
		"friesColor": "hsl(347, 70%, 50%)",
		"donut": 191,
		"donutColor": "hsl(358, 70%, 50%)"
	},
	{
		"country": "AE",
		"hot dog": 37,
		"hot dogColor": "hsl(351, 70%, 50%)",
		"burger": 104,
		"burgerColor": "hsl(277, 70%, 50%)",
		"sandwich": 34,
		"sandwichColor": "hsl(16, 70%, 50%)",
		"kebab": 111,
		"kebabColor": "hsl(130, 70%, 50%)",
		"fries": 41,
		"friesColor": "hsl(247, 70%, 50%)",
		"donut": 90,
		"donutColor": "hsl(140, 70%, 50%)"
	},
	{
		"country": "AF",
		"hot dog": 160,
		"hot dogColor": "hsl(320, 70%, 50%)",
		"burger": 188,
		"burgerColor": "hsl(317, 70%, 50%)",
		"sandwich": 26,
		"sandwichColor": "hsl(316, 70%, 50%)",
		"kebab": 78,
		"kebabColor": "hsl(250, 70%, 50%)",
		"fries": 130,
		"friesColor": "hsl(106, 70%, 50%)",
		"donut": 18,
		"donutColor": "hsl(14, 70%, 50%)"
	},
	{
		"country": "AG",
		"hot dog": 120,
		"hot dogColor": "hsl(300, 70%, 50%)",
		"burger": 159,
		"burgerColor": "hsl(87, 70%, 50%)",
		"sandwich": 117,
		"sandwichColor": "hsl(205, 70%, 50%)",
		"kebab": 1,
		"kebabColor": "hsl(101, 70%, 50%)",
		"fries": 163,
		"friesColor": "hsl(218, 70%, 50%)",
		"donut": 109,
		"donutColor": "hsl(314, 70%, 50%)"
	},
	{
		"country": "AI",
		"hot dog": 86,
		"hot dogColor": "hsl(148, 70%, 50%)",
		"burger": 5,
		"burgerColor": "hsl(28, 70%, 50%)",
		"sandwich": 78,
		"sandwichColor": "hsl(300, 70%, 50%)",
		"kebab": 26,
		"kebabColor": "hsl(35, 70%, 50%)",
		"fries": 73,
		"friesColor": "hsl(114, 70%, 50%)",
		"donut": 108,
		"donutColor": "hsl(163, 70%, 50%)"
	}
];



const lineChartData = [
	{
		"id": "japan",
		"color": "hsl(18, 70%, 50%)",
		"data": [
			{
				"x": "plane",
				"y": 128
			},
			{
				"x": "helicopter",
				"y": 45
			},
			{
				"x": "boat",
				"y": 158
			},
			{
				"x": "train",
				"y": 206
			},
			{
				"x": "subway",
				"y": 29
			},
			{
				"x": "bus",
				"y": 80
			},
			{
				"x": "car",
				"y": 237
			},
			{
				"x": "moto",
				"y": 2
			}
		]
	},
	{
		"id": "france",
		"color": "hsl(183, 70%, 50%)",
		"data": [
			{
				"x": "plane",
				"y": 4
			},
			{
				"x": "helicopter",
				"y": 174
			},
			{
				"x": "boat",
				"y": 196
			},
			{
				"x": "train",
				"y": 38
			},
			{
				"x": "subway",
				"y": 217
			},
			{
				"x": "bus",
				"y": 220
			},
			{
				"x": "car",
				"y": 57
			},
			{
				"x": "moto",
				"y": 195
			}
		]
	},
	{
		"id": "us",
		"color": "hsl(88, 70%, 50%)",
		"data": [
			{
				"x": "plane",
				"y": 280
			},
			{
				"x": "helicopter",
				"y": 159
			},
			{
				"x": "boat",
				"y": 162
			},
			{
				"x": "train",
				"y": 203
			},
			{
				"x": "subway",
				"y": 237
			},
			{
				"x": "bus",
				"y": 276
			},
			{
				"x": "car",
				"y": 146
			},
			{
				"x": "moto",
				"y": 59
			}
		]
	}
];

const mapChartData = [
	{
		"id": "AFG",
		"value": 609072
	},
	{
		"id": "AGO",
		"value": 612914
	},
	{
		"id": "ALB",
		"value": 586514
	},
	{
		"id": "ARE",
		"value": 168624
	},
	{
		"id": "ARG",
		"value": 558294
	},
	{
		"id": "ARM",
		"value": 644344
	},
	{
		"id": "ATA",
		"value": 940894
	},
	{
		"id": "ATF",
		"value": 427003
	},
	{
		"id": "AUT",
		"value": 865937
	},
	{
		"id": "AZE",
		"value": 879326
	},
	{
		"id": "BDI",
		"value": 346383
	},
	{
		"id": "BEL",
		"value": 185402
	},
	{
		"id": "BEN",
		"value": 39940
	},
	{
		"id": "BFA",
		"value": 928523
	},
	{
		"id": "BGD",
		"value": 469607
	},
	{
		"id": "BGR",
		"value": 843297
	},
	{
		"id": "BHS",
		"value": 544985
	},
	{
		"id": "BIH",
		"value": 534098
	},
	{
		"id": "BLR",
		"value": 160201
	},
	{
		"id": "BLZ",
		"value": 581842
	},
	{
		"id": "BOL",
		"value": 452645
	},
	{
		"id": "BRN",
		"value": 895112
	},
	{
		"id": "BTN",
		"value": 842861
	},
	{
		"id": "BWA",
		"value": 130538
	},
	{
		"id": "CAF",
		"value": 756519
	},
	{
		"id": "CAN",
		"value": 527733
	},
	{
		"id": "CHE",
		"value": 631544
	},
	{
		"id": "CHL",
		"value": 156265
	},
	{
		"id": "CHN",
		"value": 109623
	},
	{
		"id": "CIV",
		"value": 438624
	},
	{
		"id": "CMR",
		"value": 27384
	},
	{
		"id": "COG",
		"value": 965877
	},
	{
		"id": "COL",
		"value": 634661
	},
	{
		"id": "CRI",
		"value": 662499
	},
	{
		"id": "CUB",
		"value": 953225
	},
	{
		"id": "-99",
		"value": 827211
	},
	{
		"id": "CYP",
		"value": 487973
	},
	{
		"id": "CZE",
		"value": 515606
	},
	{
		"id": "DEU",
		"value": 323359
	},
	{
		"id": "DJI",
		"value": 709176
	},
	{
		"id": "DNK",
		"value": 407372
	},
	{
		"id": "DOM",
		"value": 131905
	},
	{
		"id": "DZA",
		"value": 466107
	},
	{
		"id": "ECU",
		"value": 322567
	},
	{
		"id": "EGY",
		"value": 443581
	},
	{
		"id": "ERI",
		"value": 135654
	},
	{
		"id": "ESP",
		"value": 522170
	},
	{
		"id": "EST",
		"value": 155389
	},
	{
		"id": "ETH",
		"value": 303434
	},
	{
		"id": "FIN",
		"value": 625977
	},
	{
		"id": "FJI",
		"value": 173458
	},
	{
		"id": "FLK",
		"value": 990535
	},
	{
		"id": "FRA",
		"value": 447836
	},
	{
		"id": "GAB",
		"value": 43243
	},
	{
		"id": "GBR",
		"value": 665132
	},
	{
		"id": "GEO",
		"value": 113810
	},
	{
		"id": "GHA",
		"value": 752719
	},
	{
		"id": "GIN",
		"value": 809546
	},
	{
		"id": "GMB",
		"value": 591939
	},
	{
		"id": "GNB",
		"value": 481380
	},
	{
		"id": "GNQ",
		"value": 577915
	},
	{
		"id": "GRC",
		"value": 868332
	},
	{
		"id": "GTM",
		"value": 682290
	},
	{
		"id": "GUY",
		"value": 920577
	},
	{
		"id": "HND",
		"value": 881485
	},
	{
		"id": "HRV",
		"value": 415422
	},
	{
		"id": "HTI",
		"value": 528140
	},
	{
		"id": "HUN",
		"value": 220294
	},
	{
		"id": "IDN",
		"value": 626028
	},
	{
		"id": "IND",
		"value": 550880
	},
	{
		"id": "IRL",
		"value": 145231
	},
	{
		"id": "IRN",
		"value": 121009
	},
	{
		"id": "IRQ",
		"value": 128189
	},
	{
		"id": "ISL",
		"value": 321767
	},
	{
		"id": "ISR",
		"value": 167222
	},
	{
		"id": "ITA",
		"value": 577165
	},
	{
		"id": "JAM",
		"value": 5526
	},
	{
		"id": "JOR",
		"value": 36924
	},
	{
		"id": "JPN",
		"value": 612889
	},
	{
		"id": "KAZ",
		"value": 122859
	},
	{
		"id": "KEN",
		"value": 647870
	},
	{
		"id": "KGZ",
		"value": 676445
	},
	{
		"id": "KHM",
		"value": 323010
	},
	{
		"id": "OSA",
		"value": 284927
	},
	{
		"id": "KWT",
		"value": 951135
	},
	{
		"id": "LAO",
		"value": 876060
	},
	{
		"id": "LBN",
		"value": 425310
	},
	{
		"id": "LBR",
		"value": 772445
	},
	{
		"id": "LBY",
		"value": 161472
	},
	{
		"id": "LKA",
		"value": 497693
	},
	{
		"id": "LSO",
		"value": 743419
	},
	{
		"id": "LTU",
		"value": 36550
	},
	{
		"id": "LUX",
		"value": 305119
	},
	{
		"id": "LVA",
		"value": 623347
	},
	{
		"id": "MAR",
		"value": 892017
	},
	{
		"id": "MDA",
		"value": 888335
	},
	{
		"id": "MDG",
		"value": 741973
	},
	{
		"id": "MEX",
		"value": 575121
	},
	{
		"id": "MKD",
		"value": 709891
	},
	{
		"id": "MLI",
		"value": 358424
	},
	{
		"id": "MMR",
		"value": 731296
	},
	{
		"id": "MNE",
		"value": 336311
	},
	{
		"id": "MNG",
		"value": 496554
	},
	{
		"id": "MOZ",
		"value": 317159
	},
	{
		"id": "MRT",
		"value": 713641
	},
	{
		"id": "MWI",
		"value": 741929
	},
	{
		"id": "MYS",
		"value": 925931
	},
	{
		"id": "NAM",
		"value": 459132
	},
	{
		"id": "NCL",
		"value": 33364
	},
	{
		"id": "NER",
		"value": 338963
	},
	{
		"id": "NGA",
		"value": 938665
	},
	{
		"id": "NIC",
		"value": 932391
	},
	{
		"id": "NLD",
		"value": 134115
	},
	{
		"id": "NOR",
		"value": 997583
	},
	{
		"id": "NPL",
		"value": 864268
	},
	{
		"id": "NZL",
		"value": 380537
	},
	{
		"id": "OMN",
		"value": 417451
	},
	{
		"id": "PAK",
		"value": 260342
	},
	{
		"id": "PAN",
		"value": 93289
	},
	{
		"id": "PER",
		"value": 383769
	},
	{
		"id": "PHL",
		"value": 473209
	},
	{
		"id": "PNG",
		"value": 268762
	},
	{
		"id": "POL",
		"value": 824828
	},
	{
		"id": "PRI",
		"value": 892592
	},
	{
		"id": "PRT",
		"value": 6327
	},
	{
		"id": "PRY",
		"value": 152009
	},
	{
		"id": "QAT",
		"value": 13466
	},
	{
		"id": "ROU",
		"value": 909208
	},
	{
		"id": "RUS",
		"value": 261659
	},
	{
		"id": "RWA",
		"value": 664945
	},
	{
		"id": "ESH",
		"value": 185769
	},
	{
		"id": "SAU",
		"value": 895934
	},
	{
		"id": "SDN",
		"value": 118015
	},
	{
		"id": "SDS",
		"value": 315522
	},
	{
		"id": "SEN",
		"value": 983771
	},
	{
		"id": "SLB",
		"value": 610224
	},
	{
		"id": "SLE",
		"value": 982816
	},
	{
		"id": "SLV",
		"value": 501553
	},
	{
		"id": "ABV",
		"value": 327423
	},
	{
		"id": "SOM",
		"value": 722269
	},
	{
		"id": "SRB",
		"value": 37451
	},
	{
		"id": "SUR",
		"value": 722530
	},
	{
		"id": "SVK",
		"value": 779087
	},
	{
		"id": "SVN",
		"value": 867166
	},
	{
		"id": "SWZ",
		"value": 193316
	},
	{
		"id": "SYR",
		"value": 541516
	},
	{
		"id": "TCD",
		"value": 677781
	},
	{
		"id": "TGO",
		"value": 670532
	},
	{
		"id": "THA",
		"value": 881709
	},
	{
		"id": "TJK",
		"value": 652724
	},
	{
		"id": "TKM",
		"value": 474924
	},
	{
		"id": "TLS",
		"value": 937770
	},
	{
		"id": "TTO",
		"value": 642874
	},
	{
		"id": "TUN",
		"value": 374248
	},
	{
		"id": "TUR",
		"value": 930264
	},
	{
		"id": "TWN",
		"value": 342496
	},
	{
		"id": "TZA",
		"value": 101258
	},
	{
		"id": "UGA",
		"value": 453014
	},
	{
		"id": "UKR",
		"value": 162636
	},
	{
		"id": "URY",
		"value": 302359
	},
	{
		"id": "USA",
		"value": 692103
	},
	{
		"id": "UZB",
		"value": 829664
	},
	{
		"id": "VEN",
		"value": 528963
	},
	{
		"id": "VNM",
		"value": 226630
	},
	{
		"id": "VUT",
		"value": 343919
	},
	{
		"id": "PSE",
		"value": 590327
	},
	{
		"id": "YEM",
		"value": 990461
	},
	{
		"id": "ZAF",
		"value": 932114
	},
	{
		"id": "ZMB",
		"value": 926656
	},
	{
		"id": "ZWE",
		"value": 873096
	},
	{
		"id": "KOR",
		"value": 17664
	}
];

module.exports = {
	barChartData: barChartData,
	lineChartData: lineChartData,
	mapChartData: mapChartData,
};