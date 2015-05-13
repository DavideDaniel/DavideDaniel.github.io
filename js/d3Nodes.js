console.log('loaded graph.js')
var renderGraph = function() {
		// Data JSON file
		var data = {
			"name": "languages",
			"children": [
			{
				"name": "Javascript",
				"children": [
					{"name": "Javascript", "size": 600},
					{"name": "Angular.js", "size": 200},
					{"name": "BackboneJS", "size": 180},
					{"name": "D3.js", "size": 220},
					{"name": "Three.js", "size": 60},
					{"name": "jQuery", "size": 380},
					{"name": "AJAX", "size": 420},
					{"name": "Mocha", "size": 160},
				]
			},
			{
				"name": "Ruby",
				"children": [
					{"name": "Ruby on Rails", "size": 360},
					{"name": "Sinatra", "size": 100},
					{"name": "RSPEC", "size": 80},
					{"name": "Action Mailer", "size": 180},
				]
			},
			{
				"name": "Misc",
				"children": [
					{"name": "HTML5", "size": 500},
					{"name": "CSS3", "size": 500},
					{"name": "PostgreSQL", "size": 150},
					{"name": "Bootstrap", "size": 160},	
					{"name": "Git", "size": 170},	
					{"name": "Materialize", "size": 140},	
					{"name": "Creative Suite", "size": 240}	
					]
				}
			]
		}

		var width = window.innerWidth,
				height = window.innerHeight + 50;
		
		// canvas creation
		var canvas = d3.select('.svg')
				.append('svg')
				.attr('width', width)
				.attr('height', height)
				.attr('class', 'graph')
				.append('g')
		
		var flattened = (classes(data))

		// define pack layout
		var pack = d3.layout.pack()
				.sort(null)
		    .size([width, height])
		    .padding(10)

		var color = d3.scale.linear()
				.domain([60, 500])
				.range(['#C9E4E7', '#3C8386']) 
		
		var nodes = pack.nodes(flattened)

		// node creation
		var node = canvas.selectAll(".node")
				.data(nodes.filter(function(d) { return !d.children; }))

				.enter()
			  .append("g")
	      		.attr("class", "node")
	      		.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

	  // appending circle geometry to each node
	  node.append('circle')
	  		.attr('fill', function(d){ return color(d.value) })
	  		.attr('r', 0)
	  		.transition()
	  		.ease('sin')
	  		.delay(function(d, i) { return i * 60; })
	  		.attr('r', function(d) { return d.r })

	  node.append('text')
	  		.transition()
	  		.attr("dy", ".25em")
	      .style("text-anchor", "middle")
	  		.text(function(d) { return d.className })

	  // colors for hover effect
	  var colorArray = [
	  	'#8B80F9',
	  	'#48A9A6',
	  	'#B6F6BC',
	  	'#C0B9DD',
	  	'#CDCDCD',
	  	'#808F85',
	  	'#7798AB',
	  	'#C0D6DF',
	  	'#4F6D7A'
	  ]

	  // hover effect
	  d3.selectAll('circle')
	  		.on('mouseover', function(d){
						d3.select(this)
						.attr('fill', colorArray[ Math.floor(Math.random() * 9) ])
					})

	  // flatten all children
	  function classes(root) {
	  var classes = [];

		  function recurse(name, node) {
		    if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
		    else classes.push({packageName: name, className: node.name, value: node.size});
		  }

	  recurse(null, root);
	  return {children: classes};
	}
}