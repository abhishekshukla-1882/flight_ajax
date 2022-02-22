$(document).ready(function () {
  setTimeout(function () {
    location.reload(true);
  }, 5000);

  //   initial load
  $.ajax({
    url: "operation.php",
    method: "post",
    data: { file: "flightdata.json", action: "get" },
    dataType: "json",
  }).done(function (data) {
    var flightData = JSON.parse(data);
    display(flightData.flightData);
  });

  //   displaying list of flights
  function display(data) {
    var html = "";
    var color;
    for (let i = 0; i < data.length; i++) {
      if (data[i].details.status[0] == "O") {
        color = "#2EB086";
      } else if (
        data[i].details.status[10] == "E" ||
        data[i].details.status[9] == "E"
      ) {
        color = "blue";
      } else {
        color = "#B33030";
      }
      html += `<tr>
      <td>${data[i].flightNo}</td>
      <td>${data[i].details.from}</td>
      <td>${data[i].details.to}</td>
      <td>${data[i].details.arrTime}</td>
      <td>${data[i].details.depTime}</td>
      <td style="background-color:${color}; color:white">${data[i].details.status}</td>
      </tr>
      `;
      color = "";
      console.log(data[i].details.status[10]);
    }
    $("tbody").html(html);
  }
});

window.onload = function () {

  var getInfo = localStorage.getItem("close");
  if (getInfo == "0") {
    window.location.replace("http://localhost:8080/airportDashboard.php");
  } else {
    localStorage.setItem("close", "0");
  }
};

window.onbeforeunload = function () {
  localStorage.setItem("close", "1");
};
