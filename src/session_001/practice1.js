(function() {
  // Todo
var date = new Date();
var currentMonth = date.getMonth();
var currentDate = date.getDate();
if(currentMonth<10)
{
  currentMonth= '0'+currentMonth;
}
if(currentDate<10)
{
  currentDate= '0'+currentDate;
}
document.write(date.getFullYear()+'-'+currentMonth+'-'+currentDate+'  '+date.getHours() + ":"
+ date.getMinutes() + ":" + date.getSeconds());

})();
