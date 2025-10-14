export function ageCounter(date) {
    const now = new Date()
    const birthday = new Date(date)

    if(birthday > now) {
        console.log('похоже, ребенок ещё не родился...')
        return
    }

    let years = now.getFullYear() - birthday.getFullYear()
    let months = now.getMonth() - birthday.getMonth()
    let days = now.getDate() - birthday.getDate()
    
    // если день рождения еще не наступил в этом году
    if (days < 0) {
        months--
        // Получаем количество дней в предыдущем месяце
        const lastDayOfMonth = new Date(
            now.getFullYear(),
            now.getMonth(),
            0
        ).getDate()
        days += lastDayOfMonth
    }
    
    // Корректировка если месяцы отрицательные
    if (months < 0) {
        years--
        months += 12
    }
    
    return {
        years: years,
        months: months,
        days: days,
    }
}