let savollar = [
  {
    savol: " shtat qaysi davlatda bor ?",
    variant: [
      "A. Amerika",
      "B. Tojikiston",
      "C. Yaponiya",
      "D. Rossiya federatsiyasi ",
    ],
    javobi: "A",
  },
  {
    savol: "Termiz shahri qaysi viloyat markazi ?",
    variant: ["A. Farg`ona ", "B. Andijon", "C. Toshkent", "D. Surhondaryo"],
    javobi: "D",
  },
  {
    savol: "htmlning vazifasi nima qiladi ?",
    variant: [
      "A. sikletni vazifasini bajaradi",
      "B. funksiya vazifasini bajaradi",
      "C. hech qanday vazifa bajarmaydi",
      "D. proyektni boshlang'ich vazifasini tuzub beradi ",
    ],
    javobi: "A",
  },
  {
    savol: "8x3 ?",
    variant: ["A. 13", "B. 24", "C. 16", "D. 12"],
    javobi: "B",
  },
];

let togriJavoblar = 0;
//  alert(" Variantni tanlashdan oldin 'Caps Lock ' tugmasini bosing.");

for (let i = 0; i < savollar.length; i++) {
  const userJavobi = prompt(
    savollar[i].savol + "\nVariant:\n " + savollar[i].variant.join("\n")
  );

  if (userJavobi == savollar[i].javobi) {
    togriJavoblar++;
  } else if (userJavobi == "quit") {
    break;
  } else if (userJavobi == "next") {
    continue;
  } else if (userJavobi == "" || userJavobi == null) {
    alert("Siz variant belgilamadingiz");
  }
}

alert(
  "Siz " +
    savollar.length +
    " ta savoldan " +
    togriJavoblar +
    " ta to'gri bajardingiz."
);

if (togriJavoblar >= savollar.length - 3) {
  alert(" Siz bu testni to'g'ri bajardingiz");
} else if (togriJavoblar == savollar.length - 5 < savollar.length - 3) {
  alert("  Siz  bu testni 50% bajardingiz.");
} else {
  alert(" Siz bu testni bajara olmadingiz");
}
