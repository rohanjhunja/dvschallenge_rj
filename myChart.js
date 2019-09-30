function renderChart(data, labels) {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: labels,
            datasets: [{
                data: data,
            }]
        },
    });
}

$("#renderBtn").click(
    d3.csv('https://github.com/rohanjhunja/dvschallenge_rj/blob/master/test.csv')
  .then(makeChart);

function makeChart(dams) {
  // dams is an array of objects where each object represents a dam
    var damLabels = dams.map(function(d) {return d.Dam});
    var volData = dams.map(function(d) {return d.Volume});
    //renderChart(volData,damLabels);
    /*var chart = new Chart('chart', {
    type: 'horizontalBar',
    data: {
      labels: playerLabels,
      datasets: [
        {
          data: weeksData
        }
      ]
    }
  });*/
}
    function () {
        
        data = volData;
        labels =  damLabels;
        renderChart(data, labels);
    }
    
    /*function () {
        
        data = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
        labels =  ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        renderChart(data, labels);
    }*/
);
