export function formatedDate(date) {
    if(date === '') {
        return date
    }
    
    const [year, mounth, day] = date.split('-')
    return `${day}.${mounth}.${year}`
}