import * as LANGUAGES from "../i18n/languages.json";

export function downloadFile(language) {
  const linkHeader = document.getElementById("download-file-header");

  setElementHref(linkHeader, language);
}

function setElementHref(element, language) {
  switch (language) {
    case LANGUAGES.japanese: {
      element.setAttribute("href", "/files/CV_Rodrigo_Diaz_jap.pdf");
      element.style.setProperty("--content", "'履歴書をダウンロード'");

      break;
    }
    case LANGUAGES.spanish: {
      element.setAttribute("href", "/files/CV_Rodrigo_Diaz_es.pdf");
      element.style.setProperty("--content", "'Mi Curriculum'");
      break;
    }
    default: {
      element.setAttribute("href", "/files/CV_Rodrigo_Diaz_eng.pdf");
      element.style.setProperty("--content", "'My Curriculum'");
    }
  }
}
