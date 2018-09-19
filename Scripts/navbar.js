window.onload = function() {
  var home = document.getElementById("homePage");
  var proc = document.getElementById("process");
  var about = document.getElementById("about");
  var resume = document.getElementById("resume");
  var projects = document.getElementById("projects");

  document.getElementById("processBtn").addEventListener("click", function(){
    proc.style.display="block";
    home.style.display="none";
    about.style.display="none";
    projects.style.display="none";
    resume.style.display="none";
    processBtn.style.color="pink";
  });

  document.getElementById("projectsBtn").addEventListener("click", function(){
    proc.style.display="none";
    home.style.display="none";
    about.style.display="none";
    projects.style.display="block";
    resume.style.display="none";
  });

  document.getElementById("experiencesBtn").addEventListener("click", function(){
    proc.style.display="none";
    home.style.display="none";
    about.style.display="none";
    projects.style.display="none";
    resume.style.display="block";
  });

  document.getElementById("aboutBtn").addEventListener("click", function(){
    proc.style.display="none";
    home.style.display="none";
    about.style.display="block";
    projects.style.display="none";
    resume.style.display="none";
  });

  document.getElementById("homeIcon").addEventListener("click", function(){
    proc.style.display="none";
    home.style.display="block";
    about.style.display="none";
    projects.style.display="none";
    resume.style.display="none";
  });

};
