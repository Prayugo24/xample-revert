class Helper{
    public static formatDate = (date: Date, isStringMonth: boolean = false) => {
        if (date) {
        const localDate = new Date(date).toString();
        let d = new Date(localDate),
            month = '' + d.getMonth(),
            day = '' + d.getDate(),
            year = d.getFullYear(),
            hours = d.getHours().toString(),
            minutes = d.getMinutes().toString();
    
        const stringMonth = [
            'Jan',
            'Febr',
            'Mar',
            'Apr',
            'Mei',
            'Jun',
            'Jul',
            'Agu',
            'Sep',
            'Okt',
            'Nov',
            'Des',
        ];
    
        if (Number(hours) < 10) {
            hours = '0' + hours;
        }
        if (Number(minutes) < 10) {
            minutes = '0' + minutes;
        }
        if (day.length < 2) {
            day = '0' + day;
        }
        if (isStringMonth) {
            month = stringMonth[month];
        } else {
            month = month.length < 2 ? '0' + month : month;
        }
    
        return isStringMonth
            ? [day, month, year].join(' ') + ` ${hours}:${minutes}`
            : [year, month, day].join('-');
        } else {
        return '-';
        }
    };
}