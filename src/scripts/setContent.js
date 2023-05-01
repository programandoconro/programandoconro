import * as introductionText from "../../i18n/introdution.json";
import * as profilesText from "../../i18n/profiles.json";

const intro = document.getElementById("intro");
const profileTitle = document.getElementById("profile-title");
const githubProfile = document.getElementById("github-profile");
const stackoverflowProfile = document.getElementById("stackoverflow-profile");
const hackerrankProfile = document.getElementById("hackerrank-profile");
const wordpressProfile = document.getElementById("wordpress-profile");
const linkedinProfile = document.getElementById("linkedin-profile");
const flickrProfile = document.getElementById("flickr-profile");
const button = document.getElementById("language");
const joinText = (text) => {
  return text.join(" ");
};

const setContent = (language) => {
  intro.innerText = joinText(introductionText[language]);
  profileTitle.innerText = joinText(profilesText.title[language]);
  githubProfile.innerText = joinText(profilesText.github[language]);
  stackoverflowProfile.innerText = joinText(
    profilesText.stackoverflow[language]
  );
  hackerrankProfile.innerText = joinText(profilesText.hackerrank[language]);
  wordpressProfile.innerText = joinText(profilesText.wordpress[language]);
  linkedinProfile.innerText = joinText(profilesText.linkedin[language]);
  flickrProfile.innerText = joinText(profilesText.flickr[language]);
};

if (button.innerText === "Español") {
  setContent("spanish");
} else if (button.innerText === "English") {
  setContent("english");
} else if (button.innerText === "日本語") {
  setContent("japanese");
}

button.addEventListener("click", () => {
  if (button.innerText === "Español") {
    button.innerText = "English";
    setContent("english");
  } else if (button.innerText === "English") {
    button.innerText = "日本語";
    setContent("japanese");
  } else {
    button.innerText = "Español";
    setContent("spanish");
  }
});
