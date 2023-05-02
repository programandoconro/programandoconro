import * as introductionText from "../../i18n/introdution.json";
import * as profilesText from "../../i18n/profiles.json";
import * as timelineText from "../../i18n/timeline.json";
import * as LANGUAGES from "../../i18n/languages.json";

const intro = document.getElementById("intro");
const profileTitle = document.getElementById("profile-title");

const githubProfile = document.getElementById("github-profile");
const stackoverflowProfile = document.getElementById("stackoverflow-profile");
const hackerrankProfile = document.getElementById("hackerrank-profile");
const wordpressProfile = document.getElementById("wordpress-profile");
const linkedinProfile = document.getElementById("linkedin-profile");
const flickrProfile = document.getElementById("flickr-profile");

const ucTimeline = document.getElementById("uc-timeline");
const ivicTimeline = document.getElementById("ivic-timeline");
const freelancerTimeline = document.getElementById("freelancer-timeline");
const lateralTimeline = document.getElementById("lateral-timeline");
const rakutenTimeline = document.getElementById("rakuten-timeline");

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

  ucTimeline.innerText = joinText(timelineText.uc[language]);
  ivicTimeline.innerText = joinText(timelineText.ivic[language]);
  freelancerTimeline.innerText = joinText(timelineText.freelancer[language]);
  lateralTimeline.innerText = joinText(timelineText.lateral[language]);
  rakutenTimeline.innerText = joinText(timelineText.rakuten[language]);
};
const getLanguage = () => {
  const language = localStorage.getItem("language");
  if (["es", "ja", "en"].includes(language)) {
    return language;
  }
  return navigator.language.startsWith("es")
    ? "es"
    : navigator.language.startsWith("ja")
    ? "ja"
    : "en";
};
const language = getLanguage();
const input = document.getElementsByTagName("input");

if (language === "es") {
  input[0].checked = true;
  setContent(LANGUAGES.spanish);
} else if (language === "ja") {
  input[2].checked = true;
  setContent(LANGUAGES.japanese);
} else {
  input[1].checked = true;
  setContent(LANGUAGES.english);
}
const switches = document.getElementsByTagName("input");
const [spanishButton, englishButton, japaneseButton] = switches;

spanishButton.addEventListener("click", () => {
  setContent("spanish");
  localStorage.setItem("language", "es");
});
englishButton.addEventListener("click", () => {
  setContent("english");
  localStorage.setItem("language", "en");
});
japaneseButton.addEventListener("click", () => {
  setContent("japanese");
  localStorage.setItem("language", "ja");
});
