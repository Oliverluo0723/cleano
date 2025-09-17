function dateFormat(dateStr) {
    const dt = new Date(dateStr);

    const year = dt.getFullYear();
    const month = padZero(dt.getMonth() + 1);
    const day = padZero(dt.getDate()); // ✅ 原本寫 getDay() 是星期幾，應該改成 getDate()

    const hh = padZero(dt.getHours());
    const mm = padZero(dt.getMinutes());
    const ss = padZero(dt.getSeconds());

    return `${year}-${month}-${day} ${hh}:${mm}:${ss}`;
}

function padZero(n) {
    return n > 9 ? n : "0" + n;
}

export { dateFormat };
