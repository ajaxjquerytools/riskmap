function drawGenderVisualization() {
	// Create and populate the data table.
	var data = google.visualization.arrayToDataTable([
	  ['�����', '�i���i��� �����'],
	  ['�����i��', 42000],
	  ['�i���', 78000]
	]);

	// Create and draw the visualization.
	new google.visualization.PieChart(document.getElementById('visualization')).
	draw(data, {title: "�i���i��� ������������ �i� ����i��i ������ � 1990 �."});
}