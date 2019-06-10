var firstAndPike = {
    name: 'First and Pike',
    min: 23,
    max: 65, 
    AverCookies: 6.3,
    
     cookiesPerHourFn: function () {
        var cookiesPerHour = [];
        for(var i = 0; i < 15; i++ ){
            var cookiesNumber = this.AverCookies * Math.floor(Math.random * (max -min) + min);
        cookiesPerHour.push(cookiesNumber);
        }
       
        return cookiesPerHour;
    }
};