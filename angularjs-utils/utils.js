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

    this.ceToRoc = function (d) {
        var result = "",
            date   = new Date(d),
            yr,
            mm,
            dd;

        if (d !== null && date !== "Invalid Date") {
            yr = date.getFullYear() - 1911;
            mm = date.getMonth() + 1;
            dd = date.getDate();

            result = yr + "/" + (mm > 9 ? mm : ("0" + mm)) + "/" + (dd > 9 ? dd : ("0" + dd));
        }

        return result;
    };
});