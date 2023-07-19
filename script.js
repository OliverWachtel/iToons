
$(document).ready(function() {
  $('select').niceSelect();

  $("#go").click(function() {
    var artist = $("#artist").val();
    var songNum = $("#songNum").val();
    $.ajax({
      url: 'https://itunes.apple.com/search?media=music' + '&limit=' + songNum + '&term=' + artist,
      dataType: "jsonp",
      success: process
    });    
  });

});

function process(data) {
  var t = "";
  console.log(data);
  for(var i = 0; i < data.results.length; i++){
    var rank= i+1;
    // console.log(data.results[i].trackName);
    t += "<tr>";
    if(rank==1){
      t += "<td id='first'>" + rank + "</td>"
    }
    if(rank==2){
      t += "<td id='second'>" + rank + "</td>"
    }
    if(rank==3){
      t += "<td id='third'>" + rank + "</td>"
    }
    if(rank>3){
      t += "<td id='placement'>" + rank + "</td>";
    }
    t += "<td>" + data.results[i].artistName + "</td>";
    t += "<td>" + data.results[i].trackName + "</td>";
    t += "<td>" + data.results[i].collectionName + "</td>";
    t += "<td><img src='" + data.results[i].artworkUrl100 + "''></td>";
    t += "<td><audio controls src='" + data.results[i].previewUrl + "'></td>";
    t += "</tr>";
    $("tbody").html(t);
    console.log(data.results[i].previewUrl);
  }
  
}

