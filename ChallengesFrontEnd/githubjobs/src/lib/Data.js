export function getYear(data){
    const date = new Date(data);
    const year = date.getFullYear();
    return year
}

export function getMonth(data){
    const date = new Date(data);
    const month = date.getMonth();
    let monthString;
    switch(month) {
        case 0:
            monthString = 'Jan';
            break;
        case 1:
            monthString = 'Feb';
            break;
        case 2:
            monthString = 'Mar';
            break;
        case 3:
            monthString = 'Apr';
            break;
        case 4:
            monthString = 'May';
            break;
        case 5:
            monthString = 'Jun';
            break;
        case 6:
            monthString = 'Jul';
            break;
        case 7:
            monthString = 'Aug';
            break;
        case 8:
            monthString = 'Sep';
            break;
        case 9:
            monthString = 'Oct';
            break;
        case 10:
            monthString = 'Nov';
            break;
        case 11:
            monthString = 'Dec';
            break;
        default:
            monthString = '';
            break;
    }
    return monthString
}