export function getDate(){
    const date = new Date();
    const dayNumber = date.getDate()
    const day = date.getDay()
    const month = date.getMonth();
    let dayWeek, monthString;
    switch (day) {
        case 0:
            dayWeek = 'Sun'
            break;
        case 1:
            dayWeek = 'Mon'
            break;
        case 2:
            dayWeek = 'Tue'
            break;
        case 3:
            dayWeek = 'Wed'
            break;
        case 4:
            dayWeek = 'Thu'
            break;
        case 5:
            dayWeek = 'Fri'
            break;
        case 6:
            dayWeek = 'Sat'
            break;
        case 7:
            dayWeek = 'Sun'
            break;
        default:
            dayWeek = ''
    }
    switch (month) {
        case 0:
            monthString = 'Jan'
            break;
        case 1:
            monthString = 'Feb'
            break;
        case 2:
            monthString = 'Mar'
            break;
        case 3:
            monthString = 'Apr'
            break;
        case 4:
            monthString = 'May'
            break;
        case 5:
            monthString = 'Jun'
            break;
        case 6:
            monthString = 'Jul'
            break;
        case 7:
            monthString = 'Aug'
            break;
        case 8:
            monthString = 'Sep'
            break;
        case 9:
            monthString = 'Oct'
            break;
        case 10:
            monthString = 'Nov'
            break;
        case 11:
            monthString = 'Dec'
            break;
        default:
            monthString = ''
    }
    return { dayWeek, dayNumber, monthString}
}