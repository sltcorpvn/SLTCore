/*
* create on 23/09/2017
*/
module.exports = {
/*convert yyyy/mm/dd hh:ii:ss or now() to dd/mm/yyyy */
    formatToFrontDate: function(date){
        var d = new Date(date || Date.now()),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [day, month, year].join('/');
    },

/*convert yyyy/mm/dd hh:ii:ss or now() to dd/mm/yyyy hh:ii:ss*/
    formatToFrontDateTime: function(date){
        var opt = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        var d = new Date(date || Date.now()),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = '' + d.getFullYear(),
            h = '' + d.getHours(),
            i = '' + d.getMinutes(),
            s = '' + d.getSeconds();

        if(month.length < 2) month = '0' + month;
        if(day.length < 2) day = '0' + day;
        if(h.length < 2) h = '0' + h;
        if(i.length < 2) i = '0' + i;
        if(s.length < 2) s = '0' + s;

        return [day, month, year].join('/') + ' ' + [h, i, s].join(':');
    },

/*convert dd/mm/yyyy to mm/dd/yyyy hh:ii:ss */
    formatToDBDate: function(date){
        if(date == "" || date == null)
            return date;

        var tmp = date.split(" ");
        var tmp = tmp[0].split("/");
        return [tmp[1], tmp[0], tmp[2]].join('/') + ' 00:00:00';
    },

/*generate date time current to db: yyyy/mm/dd hh:ii:ss */
    genDBDateTime: function(){
        var opt = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        var date = new Date(Date.now());

        var month = '' + (date.getMonth() + 1),
            day = '' + date.getDate(),
            year = '' + date.getFullYear(),
            h = '' + date.getHours(),
            i = '' + date.getMinutes(),
            s = '' + date.getSeconds();

        if(month.length < 2) month = '0' + month;
        if(day.length < 2) day = '0' + day;
        if(h.length < 2) h = '0' + h;
        if(i.length < 2) i = '0' + i;
        if(s.length < 2) s = '0' + s;

        return [year, month, day].join('/') + ' ' + [h, i, s].join(':');
    },

/* generate date time current to db */
    genDBDate: function(){
        var opt = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric',minute:'numeric',second:'numeric' };
        var date = new Date(Date.now());

        var month = '' + date.getMonth(),
            day = '' + date.getDate(),
            year = '' + date.getFullYear();

        return new Date(year, month, day);
    },

/* check email format */
    isEmailFormat: function(str){
        var emailFormat = /^[\w\.]+\@[\w\.]+$/;
        if(emailFormat.test(str)){
            return true;
        }
        return false;
    }
}
/*
module.exports = {
    frontDateFormat     : frontDateFormat,
    frontDateTimeFormat : frontDateTimeFormat,
    dbDateFormat        : dbDateFormat,
    genDBDateTime       : genDBDateTime,
    genDBDate           : genDBDate,
    isEmailFormat       : isEmailFormat
};
*/