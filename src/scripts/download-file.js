import * as LANGUAGES from "../i18n/languages.json";

export function downloadFile(language) {
  const linkHeader = document.getElementById("download-file-header");
  const linkFooter = document.getElementById("download-file-footer");

  setElementHref(linkHeader, language);
  setElementHref(linkFooter, language);
}

function setElementHref(element, language) {
  switch (language) {
    case LANGUAGES.japanese: {
      element.setAttribute("href", "/files/CV_Rodrigo_Diaz_jap.pdf");
      break;
    }
    case LANGUAGES.spanish: {
      element.setAttribute("href", "/files/CV_Rodrigo_Diaz_es.pdf");
      break;
    }
    default: {
      element.setAttribute("href", "/files/CV_Rodrigo_Diaz_eng.pdf");
    }
  }
}
