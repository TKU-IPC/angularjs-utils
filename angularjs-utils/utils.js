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

    this.toStrArr = function (arr, pname, predicate) {
        var result;

        if (predicate) {
            result = _.filter(arr, predicate);
        }
        
        result = _.uniq(result, function (m) { 
            return m[pname]; 
        });

        return _.pluck(result, pname);
    };
});