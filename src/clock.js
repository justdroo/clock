function timeNow(){
  let now = new Date()
  //{Fri Dec 02 2016 19:02:45 GMT-0500 (EST)}
  return now
}



function clock(timeNow) {
  //divide and bundle timeNow in readable chunks

  //pass chunks through a parser to spit back english version of the time
  function parseHour(timeNow){
    let english = []

    h = timeNow.getHours()
    switch (h) {
      case 1||13:
        return english.push("one")
      case 2||14:
        return "two"
      case 3||15:
        return "three"
      case 4||16:
        return "four"
      case 5||17:
        return "five"
      case 6||18:
        return "six"
      case 7||19:
        return "seven"
      case 8||20:
        return "eight"
      case 9||21:
        return "nine"
      case 10||22:
        return "ten"
      case 11||23:
        return "eleven"
      case 12:
        return "noon"
      case 24:
        return "midnight"
      default:
        return "DN: NaN"
    }
  }

  return timeInEnglish
}
