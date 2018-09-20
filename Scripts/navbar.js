window.onload = function() {
  var home = document.getElementById("homePage");
  var proc = document.getElementById("process");
  var about = document.getElementById("about");
  var resume = document.getElementById("resume");
  var projects = document.getElementById("projects");

  //projects
  var lesFemmesPage = document.getElementById("lesFemmes");
  var orchidsPage = document.getElementById("Orchids");
  var fashionPage = document.getElementById("fashion");

  document.getElementById("processBtn").addEventListener("click", function(){
    proc.style.display="block";
    home.style.display="none";
    about.style.display="none";
    projects.style.display="none";
    resume.style.display="none";
    processBtn.style.color="pink";
    lesFemmesPage.style.display="none";
    orchidsPage.style.display="none";
    fashionPage.style.display="none";

  });

  document.getElementById("projectsBtn").addEventListener("click", function(){
    proc.style.display="none";
    home.style.display="none";
    about.style.display="none";
    projects.style.display="block";
    resume.style.display="none";
    lesFemmesPage.style.display="none";
    orchidsPage.style.display="none";
    fashionPage.style.display="none";

  });

  document.getElementById("experiencesBtn").addEventListener("click", function(){
    proc.style.display="none";
    home.style.display="none";
    about.style.display="none";
    projects.style.display="none";
    resume.style.display="block";
    lesFemmesPage.style.display="none";
    orchidsPage.style.display="none";
    fashionPage.style.display="none";

  });

  document.getElementById("aboutBtn").addEventListener("click", function(){
    proc.style.display="none";
    home.style.display="none";
    about.style.display="block";
    projects.style.display="none";
    resume.style.display="none";
    lesFemmesPage.style.display="none";
    orchidsPage.style.display="none";
    fashionPage.style.display="none";

  });

  document.getElementById("homeIcon").addEventListener("click", function(){
    proc.style.display="none";
    home.style.display="block";
    about.style.display="none";
    projects.style.display="none";
    resume.style.display="none";
    lesFemmesPage.style.display="none";
    orchidsPage.style.display="none";
    fashionPage.style.display="none";

  });

  //project projectListeners

  document.getElementById("lesFemmesBtn").addEventListener("click", function(){
    lesFemmesPage.style.display="block";
    proc.style.display="none";
    home.style.display="none";
    about.style.display="none";
    projects.style.display="none";
    resume.style.display="none";
    orchidsPage.style.display="none";
    fashionPage.style.display="none";

  });

  document.getElementById("orchidsBtn").addEventListener("click", function(){
    orchidsPage.style.display="block";
    lesFemmesPage.style.display="none";
    proc.style.display="none";
    home.style.display="none";
    about.style.display="none";
    projects.style.display="none";
    resume.style.display="none";
    fashionPage.style.display="none";

  });

  document.getElementById("fashionBtn").addEventListener("click", function() {
    fashionPage.style.display="block";
    lesFemmesPage.style.display="none";
    proc.style.display="none";
    home.style.display="none";
    about.style.display="none";
    projects.style.display="none";
    resume.style.display="none";
  });

};
