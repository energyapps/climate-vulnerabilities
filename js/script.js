
// initates pym!
var pymChild = new pym.Child();

var map = L.map('map', {
      zoomControl: false
})
    .setView([40.908, -101.525], 4)
    .addLayer(L.mapbox.tileLayer('energy.map-lfsh1c5j',{
      detectRetina: true,    
    }));
map.scrollWheelZoom.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();

map.addControl( L.control.zoom({position: 'bottomright'}) )

var geoJson = [
{
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-72.16886",
                    "41.311146"
                ]
            },
            "properties": {
                "id": "1",
                "cat": "inctemp",
                "icon": "nuke",
                "icon2": "Nuclear Facility",
                "time": "August 2012",
                "place": "New London, Connecticut",
                "information": " Dominion Resources' Millstone Nuclear Power Station in Connecticut shut down one reactor because the temperature of the intake cooling water, withdrawn from the Long Island Sound, was too high and exceeded technical specifications of the reactor. Water temperatures were the warmest since operations began in 1970. While no power outages were reported, the two-week shutdown resulted in the loss of 255,000 megawatt hours of power, worth several million dollars. "
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-87.97873",
                    "41.750824"
                ]
            },
            "properties": {
                "id": "2",
                "cat": "inctemp",
                "icon": "fact",
                "icon2": "Power Plant",
                "time": "July 2012",
                "place": "Illinois",
                "information": " Four coal-fired power plants and four nuclear power plants in Illinois requested permission to exceed their permitted water temperature discharge levels because the temperature of their cooling water pond is regulated to prevent adverse ecological impacts. The Illinois Environmental Protection Agency granted special exceptions to the eight power plants, allowing them to discharge water that was hotter than allowed by federal Clean Water Act permits."
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-114.523201",
                    "32.805745"
                ]
            },
            "properties": {
                "id": "3",
                "cat": "inctemp",
                "icon": "grid",
                "icon2": "Power Grid",
                "time": "September 2011",
                "place": "Yuma, Arizona",
                "information": " High temperatures and high electricity demand-related loading tripped a transformer and transmission line near Yuma, Arizona, starting a chain of events that led to shutting down the San Onofre nuclear power plant with power lost to the entire San Diego County distribution system, totaling approximately 2.7 million power customers, with outages as long as 12 hours."
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-101.163826",
                    "32.694866"
                ]
            },
            "properties": {
                "id": "4",
                "cat": "inctemp",
                "icon": "fact",
                "icon2": "Power Plant",
                "time": "Summer 2011",
                "place": "Texas",
                "information": " Consecutive days of triple-digit heat and record drought in Texas resulted in the Electric Reliability Council of Texas declaring power emergencies due to a large number of unplanned power plant outages and at least one power plant reducing its output ."
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-75.59186",
                    "40.22083"
                ]
            },
            "properties": {
                "id": "5",
                "cat": "inctemp",
                "icon": "nuke",
                "icon2": "Nuclear Facility",
                "time": "Summer 2010",
                "place": "Limerick, Pennsylvania",
                "information": " The Hope Creek Nuclear Generating Station in New Jersey and Exelon's Limerick Generating Station in Pennsylvania had to reduce power because the temperatures of the intake cooling water, withdrawn from the Delaware and the Schuylkill Rivers, respectively, were too high and did not provide sufficient cooling for full power operations. "
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-87.118109",
                    "34.703694"
                ]
            },
            "properties": {
                "id": "6",
                "cat": "inctemp",
                "icon": "nuke",
                "icon2": "Nuclear Facility",
                "time": "2007, 2010, and 2011",
                "place": "Athens, Alabama",
                "information": " The Tennessee Valley Authority's (TVA) Browns Ferry Nuclear Plant in Athens, Alabama, had to reduce power output because the temperature of the Tennessee River, the body of water into which the plant discharges, was too high to discharge heated cooling water from the reactor without risking ecological harm to the river. TVA was forced to curtail the power production of its nuclear reactors, in some cases for nearly two months. While no power outages were reported, the cost of replacement power was estimated at $50 million."
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-117.224336",
                    "32.754942"
                ]
            },
            "properties": {
                "id": "7",
                "cat": "inctemp",
                "icon": "grid",
                "icon2": "Power Grid",
                "time": "October 2007",
                "place": "San Diego, California",
                "information": " The California Independent System Operator declared an emergency due to wildfire damage to the Southwest Power link transmission system, including more than two dozen transmission lines out of service with damage to 35 miles of wire and nearly 80,000 customers in San Diego losing power, some for several weeks. "
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-80.916023",
                    "35.173808"
                ]
            },
            "properties": {
                "id": "8",
                "cat": "inctemp",
                "icon": "fact",
                "icon2": "Power Plant",
                "time": "August 2007",
                "place": "Charlotte, North Carolina",
                "information": " Drought, heat waves, and elevated water temperatures forced Duke Energy to curtail operations at two coal-fired power plants (Riverbend Steam Station and Allen Steam Station) causing scattered power outages."
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-86.56408",
                    "41.97353"
                ]
            },
            "properties": {
                "id": "9",
                "cat": "inctemp",
                "icon": "nuke",
                "icon2": "Nuclear Facility",
                "time": "July 2006",
                "place": "Michigan",
                "information": " One unit at American Electric Power's D.C. Cook Nuclear Plant was shut down because the high summer temperatures raised the air temperature inside the containment building above 120¡F (48.9¡C), and the temperature of the cooling water from Lake Michigan was too high to intake for cooling. The plant could only be returned to full power after five days, once the heat wave had passed."
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-90.671883",
                    "41.533254"
                ]
            },
            "properties": {
                "id": "10",
                "cat": "inctemp",
                "icon": "nuke",
                "icon2": "Nuclear Facility",
                "time": "August 2006",
                "place": "Illinois",
                "information": " Two units at Exelon's Quad Cities Generating Station in Illinois had to reduce electricity production to less than 60% electricity capacity because the temperature of the Mississippi River was too high to discharge heated cooling water from the reactors."
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-95.628433",
                    "37.282795"
                ]
            },
            "properties": {
                "id": "11",
                "cat": "decwater",
                "icon": "well",
                "icon2": "Oil Wells and Refineries",
                "time": "July 2012",
                "place": "Kansas",
                "information": " In the midst of one of the worst droughts in American history, certain companies that extract natural gas and oil via hydraulic fracturing faced higher water costs or were denied access to water for 6 weeks or more in several states, including Kansas, Texas, Pennsylvania, and North Dakota."
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-91.325226",
                    "32.879587"
                ]
            },
            "properties": {
                "id": "12",
                "cat": "decwater",
                "icon": "port",
                "icon2": "Barges and Ports",
                "time": "Summer 2012",
                "place": "Mississippi River",
                "information": " Drought and low river water depths disrupted the transportation of commodities, such as petroleum and coal, delivered by barges. The U.S. Army Corps of Engineers reported grounding of traffic along the Mississippi River."
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-119.214363",
                    "37.544577"
                ]
            },
            "properties": {
                "id": "13",
                "cat": "decwater",
                "icon": "hydro",
                "icon2": "Hydroelectric Facility",
                "time": "Summer 2012",
                "place": "Sierra Nevada Mountains, California",
                "information": " Reduced snowpack in the mountains of the Sierra Nevada reduced California's hydroelectric power generation by about 38% compared to the prior summer. "
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-96.89435",
                    "32.752633"
                ]
            },
            "properties": {
                "id": "14",
                "cat": "decwater",
                "icon": "well",
                "icon2": "Oil Wells and Refineries",
                "time": "Fall 2011",
                "place": "Grand Prarie, Texas",
                "information": " Due to extreme drought conditions, the city of Grand Prairie, Texas, became the first municipality to ban the use of city water for hydraulic fracturing. Other local water districts in Texas followed suit by implementing similar restrictions limiting city water use during drought conditions."
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-119.8423",
                    "45.9053"
                ]
            },
            "properties": {
                "id": "15",
                "cat": "decwater",
                "icon": "hydro",
                "icon2": "Hydroelectric Facility",
                "time": "Summer 2010",
                "place": "Columbia River, Washington",
                "information": " Below normal precipitation and streamflows in the Columbia River basin resulted in insufficient hydropower generation to fulfill load obligations for the Bonneville Power Administration. As a result, BPA experienced a net loss of $164 million in fiscal year 2010, largely due to low water volumes."
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-113.294449",
                    "34.615127"
                ]
            },
            "properties": {
                "id": "16",
                "cat": "decwater",
                "icon": "solar",
                "icon2": "Solar Facility",
                "time": "2010",
                "place": "Mohave County, Arizona",
                "information": " The Arizona Corporation Commission ruled that Hualapai Valley Solar LLC would have to use dry cooling or treated wastewater rather than groundwater as a condition of its certificate of environmental compatibility for a proposed 340 MW solar power plant in Mohave County, Arizona, due to concerns about the effects of the power plant on water availability from the Hualapai Valley aquifer."
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-114.466982",
                    "36.117909"
                ]
            },
            "properties": {
                "id": "17",
                "cat": "decwater",
                "icon": "hydro",
                "icon2": "Hydroelectric Facility",
                "time": "September 2010",
                "place": "Lake Mead, Nevada",
                "information": " Water levels in Nevada's Lake Mead dropped to levels not seen since 1956, prompting the Bureau of Reclamation to reduce Hoover Dam's generating capacity by 23%. As water levels continued to drop, dam operators were concerned that reductions in generating capacity would destabilize energy markets in the Southwest."
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-115.118179",
                    "40.279526"
                ]
            },
            "properties": {
                "id": "18",
                "cat": "decwater",
                "icon": "fact",
                "icon2": "Power Plant",
                "time": "2009",
                "place": "Nevada",
                "information": " NV Energy abandoned a proposed plan for a 1,500 MW coal-fired power plant (Ely Energy Center) that would have used more than 7.1 million gallons of water per hour, which raised concerns of local residents and environmental groups."
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-85.037613",
                    "33.413102"
                ]
            },
            "properties": {
                "id": "19",
                "cat": "decwater",
                "icon": "hydro",
                "icon2": "Hydroelectric Facility",
                "time": "2007",
                "place": "Chattahoochee River, Georgia",
                "information": " Severe drought in the Southeast caused the Chattahoochee River, which supports more than 10,000 MW of power generation, to drop to one-fifth of its normal flow. Overall, hydroelectric power generation in the Southeast declined by 45%."
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-103.910408",
                    "41.244772"
                ]
            },
            "properties": {
                "id": "20",
                "cat": "decwater",
                "icon": "hydro",
                "icon2": "Hydroelectric Facility",
                "time": "2006",
                "place": "North Platte, Nebraska",
                "information": " Power production of the North Platte Project (a series of hydropower plants along the North Platte River) was reduced by about half as a result of multi-year drought."
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-71.808357",
                    "43.012681"
                ]
            },
            "properties": {
                "id": "21",
                "cat": "incstorm",
                "icon": "grid",
                "icon2": "Power Grid",
                "time": "February 2013",
                "place": "Massachusetts",
                "information": " Over 660,000 customers lost power across eight states in the Northeast affected by a winter storm bringing snow, heavy winds, and coastal flooding to the region and resulting in significant damage to the electric transmission system."
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-74.148445",
                    "39.968701"
                ]
            },
            "properties": {
                "id": "22",
                "cat": "incstorm",
                "icon": "grid",
                "icon2": "Power Grid",
                "time": "October 2012",
                "place": "New York, New Jersey, Connecticut",
                "information": " Ports and power plants in the Northeast, as well as oil refineries, fuel pipelines, and petroleum terminals, were either damaged or experienced shutdowns as a result of Hurricane Sandy. More than 8 million customers lost power in 21 affected states."
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-89.507332",
                    "29.046566"
                ]
            },
            "properties": {
                "id": "23",
                "cat": "incstorm",
                "icon": "well",
                "icon2": "Oil Wells and Refineries",
                "time": "August 2012",
                "place": "Mississippi River Delta",
                "information": " Oil production in the U.S. Gulf of Mexico declined and coastal refineries shut down in anticipation of Hurricane Isaac. Although the closures were precautionary, offshore oil output was reduced by more than 13 million barrels over an 18 day period, and offshore Gulf natural gas output was curtailed by 28 billion cubic feet (BSEE 2012a)."
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-77.279549",
                    "39.13006"
                ]
            },
            "properties": {
                "id": "24",
                "cat": "incstorm",
                "icon": "grid",
                "icon2": "Power Grid",
                "time": "June 2012",
                "place": "Maryland",
                "information": " Almost three million people and businesses lost power due to the complexes of thunderstorms coupled with strong winds, also known as a derecho, that swept across the Midwest to the Mid-Atlantic coast on June 29, 2012. In addition, damage to water filtration facilities in Maryland caused the imposition of water restrictions."
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-106.295686",
                    "35.844535"
                ]
            },
            "properties": {
                "id": "25",
                "cat": "incstorm",
                "icon": "grid",
                "icon2": "Power Grid",
                "time": "Summer 2011",
                "place": "New Mexico, Arizona",
                "information": " Severe drought and record wildfires in Arizona and New Mexico burned more than one million acres and threatened the U.S. Department of Energy's Los Alamos National Laboratory as well as two high voltage lines transmitting electricity from Arizona to approximately 400,000 customers in New Mexico and Texas."
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-109.515152",
                    "46.362093"
                ]
            },
            "properties": {
                "id": "26",
                "cat": "incstorm",
                "icon": "pipe",
                "icon2": "Pipeline",
                "time": "July 2011",
                "place": "Yellowstone River, Montana",
                "information": " ExxonMobil's Silvertip pipeline, buried beneath the Yellowstone River in Montana, was torn apart by flood-caused debris, spilling oil into the river and disrupting crude oil transport in the region. The property damage cost was $135 million."
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-96.037416",
                    "41.459195"
                ]
            },
            "properties": {
                "id": "27",
                "cat": "incstorm",
                "icon": "nuke",
                "icon2": "Nuclear Facility",
                "time": "June 2011",
                "place": "Omaha, Nebraska",
                "information": " Missouri River floodwaters surrounded Fort Calhoun Nuclear Power plant in Nebraska. The nuclear reactor had been shut down in April 2011 for scheduled refueling, but the plant remained closed during the summer due to persistent flood waters."
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-87.72171",
                    "37.71859"
                ]
            },
            "properties": {
                "id": "28",
                "cat": "incstorm",
                "icon": "port",
                "icon2": "Barges and Ports",
                "time": "May 2011",
                "place": "Ohio River, Kentucky",
                "information": " Nearly 20% of barge terminals along the Ohio River were closed due to flooding, impacting coal and petroleum transport. Flooding along the Ohio and Mississippi rivers also threatened oil refineries and infrastructure from Tennessee to Louisiana."
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-91.660652",
                    "29.468297"
                ]
            },
            "properties": {
                "id": "29",
                "cat": "incstorm",
                "icon": "well",
                "icon2": "Oil Wells and Refineries",
                "time": "2005",
                "place": "Gulf Coast",
                "information": " Hurricanes Katrina and Rita inflicted significant damage on the Gulf Coast, destroying 115 offshore platforms and damaging 52 others, damaging 535 pipeline segments, and causing a near total shut-down of the Gulf's offshore oil and gas production for several weeks. Nine months after the hurricanes, 22% of oil production and 13% of gas production remained shut-in, equating to the loss of 150 million barrels of oil and 730 billion cubic feet of gas from domestic supplies."
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-81.641121",
                    "28.516969"
                ]
            },
            "properties": {
                "id": "30",
                "cat": "incstorm",
                "icon": "fact",
                "icon2": "Power Plant",
                "time": "September 2004",
                "place": "Florida",
                "information": " Hurricane Jeanne shut down several power plants and damaged power lines resulting in nearly 2.6 million customers losing electrical service in northeast, central, and southwest Florida. Accompanying hot and humid weather forced voluntary, pre-arranged load control programs for customers to reduce power consumption during peak usage."
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-103.121109",
                    "47.650588"
                ]
            },
            "properties": {
                "id": "31",
                "cat": "decwater",
                "icon": "well",
                "icon2": "Oil Wells and Refineries",
                "time": "July 2012",
                "place": "North Dakota",
                "information": " In the midst of one of the worst droughts in American history, certain companies that extract natural gas and oil via hydraulic fracturing faced higher water costs or were denied access to water for 6 weeks or more in several states, including Kansas, Texas, Pennsylvania, and North Dakota."
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    "-80.137711",
                    "41.52503"
                ]
            },
            "properties": {
                "id": "32",
                "cat": "decwater",
                "icon": "well",
                "icon2": "Oil Wells and Refineries",
                "time": "July 2012",
                "place": "Pennsylvania",
                "information": " In the midst of one of the worst droughts in American history, certain companies that extract natural gas and oil via hydraulic fracturing faced higher water costs or were denied access to water for 6 weeks or more in several states, including Kansas, Texas, Pennsylvania, and North Dakota."
            }
        }
    ]
}
];
/*create array:*/
var marker = new Array();

//Create empty variable to store "this" DOM element in
var t;

function buildMap() {

//create empty array to push into
	var raw = [];

//create array of values
	var iconvalue = [];
if (t != undefined) {
//for each point, push if it is the right type and if that has been clicked
	for (var i = 0; i < geoJson[0].features.length; i++) {
		if (t.id === "b1" && geoJson[0].features[i].properties.cat === "inctemp") {
			raw.push(geoJson[0].features[i])
			iconvalue.push(geoJson[0].features[i].infomation);
		} 
		else if (t.id === "b2" && geoJson[0].features[i].properties.cat === "decwater") {
			raw.push(geoJson[0].features[i])
			iconvalue.push(geoJson[0].features[i].properties.information);
		}
		else if (t.id === "b3" && geoJson[0].features[i].properties.cat === "incstorm") {
			raw.push(geoJson[0].features[i])
			iconvalue.push(geoJson[0].features[i].properties.information);
		}
		else if (t.id === "b4") {
			raw.push(geoJson[0].features[i])
			iconvalue.push(geoJson[0].features[i].properties.information);
		}
		else if (t.id === "b5" && geoJson[0].features[i].properties.net_prem_1 != null) {
			raw.push(geoJson[0].features[i])
			iconvalue.push(geoJson[0].features[i].properties.information);
		}
		else if (t.id === "b6" && geoJson[0].features[i].properties.perc_sol_1 != null) {
			raw.push(geoJson[0].features[i])
			iconvalue.push(geoJson[0].features[i].properties.information);
		};
	};
} else {
	for (var i = 0; i < geoJson[0].features.length; i++) {
		//for the first load, load the first set of information
		if (geoJson[0].features[i].properties.cat != null) {
			raw.push(geoJson[0].features[i])
			iconvalue.push(geoJson[0].features[i].properties.information);
		};
	};
};
     


	for (var i = 0; i < raw.length; i++) {
	 //create a the "iconic" url for the icon, from the mapbox api.
	  var iconic;

	  if (raw[i].properties.icon === "nuke") {iconic = 'https://energy.gov/sites/prod/files/atom.png';}
	  else if (raw[i].properties.icon === "fact") {iconic = 'https://energy.gov/sites/prod/files/fact.png';}
	  else if (raw[i].properties.icon === "grid") {iconic = 'https://energy.gov/sites/prod/files/grid.png';}
	  else if (raw[i].properties.icon === "hydro") {iconic = 'https://energy.gov/sites/prod/files/hydro.png';}
	  else if (raw[i].properties.icon === "pipe") {iconic = 'https://energy.gov/sites/prod/files/pipe.png';}
	  else if (raw[i].properties.icon === "well") {iconic = 'https://energy.gov/sites/prod/files/well.png';}
	  else if (raw[i].properties.icon === "solar") {iconic = 'https://energy.gov/sites/prod/files/solar.png';}
	  else if (raw[i].properties.icon === "port") {iconic = 'https://energy.gov/sites/prod/files/port.png';}
	  	;

	  // Create custom popup content
        var popupContent =  '<div><h2><strong><center>' + raw[i].properties.icon2 + '</center></strong></h2>' +
        					'<div><p><strong>' + raw[i].properties.place + '</strong></p>' + 
        					'<p><i>' + raw[i].properties.time + '</i></p>' + 
        					'<p>' + raw[i].properties.information + '</p></div>'; 

	  /*pushing items into array each by each and then add markers*/
	  var LamMarker = new L.marker([raw[i].geometry.coordinates[1],raw[i].geometry.coordinates[0]], {
	    icon: L.icon({
	        iconUrl: iconic,
	        iconSize:     [45, 45], // size of the icon
	        iconAnchor:   [22, 22], // point of the icon which will correspond to marker's location
	        popupAnchor:  [1, -23]  // point from which the popup should open relative to the iconAnchor
		    })
		}).bindPopup(popupContent, {closeButton:false});
		  marker.push(LamMarker);
		  map.addLayer(marker[i]);

	};
};

function removal() {
	for (var i = 0; i < marker.length; i++) {
    	map.removeLayer(marker[i]);
	};
	marker = [];
};

(function ($) {

	$(document).ready(function() { 
			buildMap();				


		$('.button').click(function (e) {
	      $('.button').removeClass('active');
	      $(this).addClass('active');
			removal();
			t = this;
			buildMap();
		});

//turn on off pull tab
$('#tab-close-text').click(function (e) {
       e.preventDefault();
       $('#tab-close-text').removeClass('active');
       $('.about-data').addClass('active');
       $('a.closed').addClass('active');

   });

$('a.closed').click(function (e) {
       e.preventDefault();
       $('.about-data').removeClass('active');
       $('a.closed').removeClass('active');
       $('#tab-close-text').addClass('active');
   });       
	});

}(jQuery));