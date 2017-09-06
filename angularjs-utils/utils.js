app.service("utils", function () {
    this.isDate = function () {
        var isDate = _.isDate(s),
            result;

        if (!isDate) {
            result = new Date(s);        
            isDate = (result !== "Invalid Date" && !isNaN(result));        
        }

        return isDate;    
    };
});