const Years = [];
const Months = [];
const Dates = [];

function createYear() {
  for (let y = 2020; y > 1920; y--) {
    if (y > 2018) {
      Years.push({ defalutYear: y, label: `${y} (令和${y - 2018}年)` });
    } else if (y > 1988) {
      Years.push({ defalutYear: y, label: `${y} (平成${y - 1988}年)` });
    } else if (y > 1925) {
      Years.push({ defalutYear: y, label: `${y} (昭和${y - 1925}年)` });
    } else if (y > 1911) {
      Years.push({ defalutYear: y, label: `${y} (大正${y - 1911}年)` });
    }
  }
  return Years;
}

function createMonth(){
  for (let m = 1; m < 13; m++) {
    Months.push({defaultMonth:m,label:`${m}`})
  }
  return Months;
}

function createDate(){
  for (let d = 1; d < 32; d++) {
    Dates.push({defaultDate:d,label:`${d}`})
  }
  return Dates;
}
createYear()
createMonth()
createDate()

export { Years,Months,Dates}