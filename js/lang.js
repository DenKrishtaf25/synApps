var arrLang = {
    "ru-lang": {
      "about": "О НАС",
      "services": "УСЛУГИ",
      "solutions": "РЕШЕНИЯ",
      "why_us": "ПОЧЕМУ МЫ?",
      "contacts": "КОНТАКТЫ",
    },
    "en-lang": {
        "about": "ABOUT",
        "services": "SERVICES",
        "solutions": "SOLUTIONS",
        "why_us": "WHY US",
        "contacts": "CONTACTS",
    },
    "az-lang": {
        "about": "ABOUT",
        "services": "SERVICES",
        "solutions": "SOLUTIONS",
        "why_us": "WHY US",
        "contacts": "CONTACTS",
    }
  };

  $(document).ready(function() {
    // The default language is English
    var lang = "ru-lang";
    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });

  // get/set the selected language
  $(".translate").click(function() {
    var lang = $(this).attr("id");

    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });
