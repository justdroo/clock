export const timeNow = function(){
  let now = new Date()
  //{Fri Dec 02 2016 19:02:45 GMT-0500 (EST)}
  return now
}

export const parseHour = function(timeNow){
  let h = timeNow.getHours()

  if (timeNow.getMinutes() > 30) {
    h += 1
  }

  switch (h) {
    case 1:
    case 13:
    case 25:
      return "one";
    case 2:
    case 14:
      return "two"
    case 3:
    case 15:
      return "three"
    case 4:
    case 16:
      return "four"
    case 5:
    case 17:
      return "five"
    case 6:
    case 18:
      return "six"
    case 7:
    case 19:
      return "seven"
    case 8:
    case 20:
      return "eight"
    case 9:
    case 21:
      return "nine"
    case 10:
    case 22:
      return "ten"
    case 11:
    case 23:
      return "eleven"
    case 12:
      return "noon"
    case 24:
      return "midnight"
    default:
      console.log("in the default")
      return "pizzaatyme"
  }
}

export const parseMinutes = (timeNow) => {
  let m = timeNow.getMinutes()

  if (m < 5) {
    return "exactly"
  } else if ((m < 10)||(m >=55)) {
    return "five"
  } else if (((m < 15)&& (m >=10))||((m >= 50)&&(m < 55))) {
    return "ten"
  } else if (((m >= 15)&&(m <= 29))||(m >= 45)&&(m < 50)) {
    return "quarter"
  }else if ((m >= 30)&&(m < 45)) {
    return "half"
  } else {
    return "Naw dawg, it ain't working"
  }
}


export const pastOrTo = (timeNow) => {
  let m = timeNow.getMinutes();

  if (m < 5){
    return ""
  } else if (m < 45) {
    return "past"
  } else if (m >=45){
    return "to"
  } else {
    return "sorry man, didn't pop anything out"
  }
}
