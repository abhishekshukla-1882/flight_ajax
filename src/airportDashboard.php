<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style> <? include 'style.css' ?></style>
    <title>Airport Dashboard</title>
</head>

<body>
    <h1>Airport Dashboard</h1>
    <hr>

    <form>
        <div class='search'>
            <div><span>Flight No.</span> <input type="text" id='fnum'>
                <input type="button" value="search" id='search'>
            </div>
            <div id='searchFlights'></div>
        </div>
        <div class=' details'>
            <span>From:</span><input type="text" id="from" />
            <span>To: </span><input type="text" id="to">
        </div>
        <div class='details'>
            <span>Estimated Arrival</span>
            <input type="datetime-local" id="arr">

        </div>
        <div class='details'>
            <span>Estimated Departure</span>
            <input type="datetime-local" id="dep">
        </div>
        <div class='details'>
            <span>Status</span>
            <select name="status" id="status">
                <option name="status" value="On Time">On Time</option>
                <option name="status" value="Arriving Late by 30 mins">Arriving Late by 30 mins</option>
                <option name="status" value="Arriving Early by 30 mins">Arriving Early by 30 mins</option>
                <option name="status" value="Departing Late by 30 mins">Departing Late by 30 mins</option>
                <option name="status" value="Departing Early by 30 mins">Departing Early by 30 mins</option>
                <option name="status" value="Departed">Departed</option>

            </select>

        </div>
        <input type="button" class='details' data-num="0" value='update' id="btn">
    </form>
    <h2 id='success'>Updated Successfully</h2>
    <a href="/">
        <h3 id='sucess'>Go to Flight Dashboard</h3>
    </a>

</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"> </script>
<script src='airport.js'>

</script>

</html>