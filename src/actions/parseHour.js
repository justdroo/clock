export default const parseHour = function(timeNow){
  let h = timeNow.getHours()

  switch (h) {
    case 1:
    case 13:
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
