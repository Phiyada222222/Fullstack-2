function getDayName(dateString) {
    let day;
    switch (dayNaumber) {
        case 1: day= 'sunday'; break;
        case 2: day= 'monday'; break;
        case 3: day= 'tuesday'; break;
        case 4: day= 'wednesday'; break;
        case 5: day= 'thursday'; break;
        case 6: day= 'friday'; break;
        case 7: day= 'saturday'; break;
        default: day= 'invalid day'; break;
    }
    return day;
}