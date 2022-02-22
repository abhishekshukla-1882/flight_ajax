$(document).ready(function () {
  $(".details").hide();

  //   search button
  $("#search").click(function () {
    var search = $("#fnum").val();
    if (search) {
      // getting data
      $.ajax({
        url: "operation.php",
        method: "post",
        data: {
          file: "flightdata.json",
          action: "get",
        },
        dataType: "json",
      }).done(function (data) {
        var flightData = JSON.parse(data);

        var index = flightData.flightData.filter((x) => x.flightNo == search);

        // populating data
        if (index.length > 0) {
          $("#searchFlights").html("");
          $("#fnum").attr("disabled", "disabled");
          $("#search").attr("disabled", "disabled");
          $(".details").show();
          $("#from").val(index[0].details.from);
          $("#to").val(index[0].details.to);
          $("#arr").val(index[0].details.arrTime);
          $("#dep").val(index[0].details.depTime);
          $("#btn").data({ num: index[0].flightNo });
        } else {
          $("#searchFlights").html("*No flights available with this No.");
        }
      });
    } else {
      $("#searchFlights").html("*enter something");
    }
  });

  //   update button
  $("#btn").click(function (e) {
    var temp;
    e.preventDefault();
    var flight = $(this).data("num");
    var from = $("#from").val();
    var to = $("#to").val();
    var arrTime = $("#arr").val();
    var depTime = $("#dep").val();
    var status = $("#status").val();
    $.ajax({
      url: "operation.php",
      method: "post",
      data: {
        file: "flightdata.json",
        action: "get",
      },
      dataType: "json",
    }).done(function (data) {
      var flightData = JSON.parse(data);
      temp = flightData;
      var index = getIndex(temp.flightData, flight);

      //   replacing values
      temp.flightData.splice(index, 1, {
        flightNo: flight,
        details: {
          arrTime: arrTime,
          depTime: depTime,
          from: from,
          status: status,
          to: to,
        },
      });
      temp = JSON.stringify(temp);

      //   ajax to write
      $.ajax({
        url: "operation.php",
        method: "post",
        data: {
          file: "flightdata.json",
          details: temp,
          action: "update",
        },
        dataType: "json",
      }).done(function (data) {
        console.log("success");
        $("#success").show();
      });
    });
  });

  function getIndex(arr, flight) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].flightNo == flight) {
        return i;
      }
    }
  }
});
