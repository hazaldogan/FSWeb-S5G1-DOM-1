const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */
const navLinks = document.querySelectorAll("nav a");
navLinks[0].textContent = "Servisler";
navLinks[1].textContent = "Ürünler";
navLinks[2].textContent = "Vizyon";
navLinks[3].textContent = "Özellikler";
navLinks[4].textContent = "Hakkımızda";
navLinks[5].textContent = "İletişim";

const ctaElement1 = document.querySelector(".cta-text h1");
ctaElement1.textContent = "Bu DOM Mükemmel";

const ctaElement2 = document.querySelector(".cta-text button");
ctaElement2.textContent = "Başlayın";

const ozellikler = document.querySelector(
  ".top-content .text-content:nth-of-type(1) h4"
);
ozellikler.textContent = "Özellikler";

const hakkinda = document.querySelector(
  ".top-content .text-content:nth-of-type(2) h4"
);
hakkinda.textContent = "Hakkında";

const ozelliklerP = document.querySelector(
  ".top-content .text-content:nth-of-type(1) p"
);
ozelliklerP.textContent = "Özellikler içeriği elementum magna eros";

const hakkindaP = document.querySelector(
  ".top-content .text-content:nth-of-type(2) p"
);
hakkindaP.textContent = "Hakkında içeriği elementum magna eros";

const basliklar = document.querySelectorAll(".bottom-content .text-content h4");
basliklar[0].textContent = "Servisler";
basliklar[1].textContent = "Ürünler";
basliklar[2].textContent = "Vizyon";

const basliklarP = document.querySelectorAll(".bottom-content .text-content p");
basliklarP[0].textContent = "Servisler içeriği elementum magna eros";
basliklarP[1].textContent = "Ürünler içeriği elementum magna eros";
basliklarP[2].textContent = "Vizyon içeriği elementum magna eros";

const iletisim = document.querySelector("section.contact h4");
iletisim.textContent = "İletişim";

const iletisimList = document.querySelectorAll("section.contact p");
iletisimList[0].textContent =
  "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye";
iletisimList[1].textContent = "+90 (123) 456-7899";
iletisimList[2].textContent = "satis@birsirketsitesi.com.tr";

const cpr = document.querySelector("footer a");
cpr.textContent = "Copyright Bir Şirket Sitesi 2022";

const imagesrc = document.querySelectorAll("img");
imagesrc[0].setAttribute("src", "http://localhost:9000/img/logo.png");
imagesrc[1].setAttribute("src", "http://localhost:9000/img/cta.png");
imagesrc[2].setAttribute("src", "http://localhost:9000/img/accent.png");

const italik = document.querySelectorAll("nav a");
italik.forEach((element) => {
  element.setAttribute("class", "italic");
});

const italik2 = document.querySelector("footer a");
italik2.getAttribute("class", "italic");

const bold = document.querySelector("footer a");
bold.setAttribute("class", "bold");

const bold2 = document.querySelectorAll("nav a");
bold2.forEach((element) => {
  element.getAttribute("class", "bold");
});
