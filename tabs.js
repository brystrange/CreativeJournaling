
// Tab scripts

function openTab(evt, tabName) {
  var i, tabcontent1, tabcontent2, tablinks;
  tabcontent1 = document.getElementsByClassName("tabcontent1");
  tabcontent2 = document.getElementsByClassName("tabcontent2");
  for (i = 0; i < tabcontent1.length; i++) {
    tabcontent1[i].style.display = "none";
  }
  for (i = 0; i < tabcontent2.length; i++) {
    tabcontent2[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

}
