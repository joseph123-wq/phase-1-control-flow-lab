function scuberGreetingForFeet(distanceInFeet) {
  if (distanceInFeet <= 400) {
    return 'This one is on me!';
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (distanceInFeet > 2500) {
    return 'No can do.';
  }
}
function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
  if (tip === 'generous') {
    return 'Thank you so much.';
  } else if (tip === 'not as generous') {
    return 'Thank you.';
  } else {
    return 'Bye.';
  }
}


