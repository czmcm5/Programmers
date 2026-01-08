const days = ['SUN','MON','TUE','WED','THU','FRI','SAT']

function solution(a, b) {
  const date = new Date(`2016-${a}-${b}`);
  const i = date.getDay()
    
return days[i];
}