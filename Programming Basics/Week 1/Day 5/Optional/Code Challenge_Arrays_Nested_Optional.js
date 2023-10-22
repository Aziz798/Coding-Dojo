function optimalTacoTruckLocation(customerCoordinates) {
       var sumX = 0;
       var sumY = 0;
       for (var i = 0; i < customerCoordinates.length; i++) {
           sumX += customerCoordinates[i][0];
           sumY += customerCoordinates[i][1];
       }
       var averageX = sumX / customerCoordinates.length;
       var averageY = sumY / customerCoordinates.length;
       var roundedX = Math.round(averageX / 2) * 2;
       var roundedY = Math.round(averageY / 2) * 2;
       return [roundedX, roundedY];
   
}