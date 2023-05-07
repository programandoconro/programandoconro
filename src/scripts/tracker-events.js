import { logAnalyticEvent } from "./firebase-analytics";

const githubProfile = document.getElementById("github-profile");
githubProfile.addEventListener("click", () => {
  logAnalyticEvent("github-profile");
});
const stackoverflowProfile = document.getElementById("stackoverflow-profile");
stackoverflowProfile.addEventListener("click", () => {
  logAnalyticEvent("stackoverflow-profile");
});
const wordpressProfile = document.getElementById("wordpress-profile");
wordpressProfile.addEventListener("click", () => {
  logAnalyticEvent("wordpress-profile");
});
const linkedinProfile = document.getElementById("linkedin-profile");
linkedinProfile.addEventListener("click", () => {
  logAnalyticEvent("linkedin-profile");
});
const flickrProfile = document.getElementById("flickr-profile");
flickrProfile.addEventListener("click", () => {
  logAnalyticEvent("flickr-profile");
});

const nakagawaactivityProject = document.getElementById(
  "nakagawaactivity-project"
);
nakagawaactivityProject.addEventListener("click", () => {
  logAnalyticEvent("nakagawaactivity-project");
});
const kanjiholicsProject = document.getElementById("kanjiholics-project");
kanjiholicsProject.addEventListener("click", () => {
  logAnalyticEvent("kanjiholics-project");
});
const rustyChessProject = document.getElementById("rusty-chess-project");
rustyChessProject.addEventListener("click", () => {
  logAnalyticEvent("rusty-chess-project");
});

const profileAvatar = document.getElementById("profile-avatar");
profileAvatar.addEventListener("mouseover", () => {
  logAnalyticEvent("profile-avatar");
});
