import axios from 'axios';

const farePortal = {

  api: function (body) {
    var encodedURI = window.encodeURI('https://api-dev.fareportallabs.com/air/api/search/searchflightavailability');

    var headers = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic anVzdGlubWNsYXJlbjYzQGdtYWlsLmNvbTpTd29yZGZpc2gx'
      }
    }

    return axios
      .post(encodedURI, body, headers)
      .then(function (response) {

        const priceArrayUnsort = response.data.FlightResponse.FpSearch_AirLowFaresRS.SegmentReference.RefDetails;
        const flightArrayOutUnsort = response.data.FlightResponse.FpSearch_AirLowFaresRS.OriginDestinationOptions.OutBoundOptions.OutBoundOption;


        const mergedData = [priceArrayUnsort, flightArrayOutUnsort].reduce((a, b) => a.map((c, i) => Object.assign({}, c, b[i])));
        console.log("mergedData", mergedData);

        //loop through each array the data paths run into.
        //first, get the price from the fare path...
        const adultFares = mergedData.map(e => e.PTC_FareBreakdown.Adult.TotalAdultFare);
        console.log("adultFares", adultFares)
        //...and the code from the fare path
        const codeFaresArrays = mergedData.map(e => e.OutBoundOptionId);
        const codeFares = mergedData.map(e => `${e}`);
        //second, get the code from the outbound segmentid path
        const codeFlights = mergedData.map(e => e.Segmentid);
        //third, get all the information in the OutBoundOption object
        const flightDepartTime = mergedData.map(e => e.FlightSegment);
        const departTime = [];
        const arriveTime = [];
        const departAirport = [];
        const arriveAirport = [];
        const duration = [];
        const flightNum = [];
        flightDepartTime.map(e => e).forEach(x => {
          departTime.push(x[0].DepartureDateTime);
          arriveTime.push(x[0].ArrivalDateTime);
          departAirport.push(x[0].DepartureAirport.LocationCode);
          arriveAirport.push(x[0].ArrivalAirport.LocationCode);
          duration.push(x[0].FlightDuration);
          flightNum.push(x[0].FlightNumber);
        });

        //use insertion sort to organize from lowest to highest price
        function insertionSort(adultFares) {
          for (var i = 0; i < adultFares.length; i++) {
            var temp = adultFares[i];
            var j = i - 1;
            while (j >= 0 && adultFares[j] > temp) {
              adultFares[j + 1] = adultFares[j];
              j--;
            }
            adultFares[j + 1] = temp;
          }


          return adultFares;
        };
        insertionSort(adultFares);
        console.log("adultFares", adultFares)
        response = mergedData.slice(0, 10);
        return response;
      });
  }
}

export default farePortal;