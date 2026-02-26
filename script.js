// script.js
const PHONE = "0550000000";
const WHATS = "0550000000";
const COUNTRY_CODE = "966";

const MAP_LAT = 24.668161;
const MAP_LNG = 46.729610;

function normalizeNumber(num){
  return (num || "").replace(/[^\d]/g, "");
}
function buildWhatsAppLink(){
  const n = normalizeNumber(WHATS);
  const full = n.startsWith("0") ? (COUNTRY_CODE + n.slice(1)) : n;
  return `https://wa.me/${full}`;
}
function buildTelLink(){
  return `tel:${normalizeNumber(PHONE)}`;
}
function buildMapsLink(){
  return `https://maps.google.com/?q=${MAP_LAT},${MAP_LNG}`;
}

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const toTop = document.getElementById("toTop");
const year = document.getElementById("year");

const whatsBtn = document.getElementById("whatsBtn");
const callBtn = document.getElementById("callBtn");
const waLink = document.getElementById("waLink");
const callLink = document.getElementById("callLink");
const mapsLink = document.getElementById("mapsLink");

document.getElementById("phoneText").textContent = PHONE;
document.getElementById("waText").textContent = WHATS;

const waUrl = buildWhatsAppLink();
const telUrl = buildTelLink();
const mapsUrl = buildMapsLink();

[whatsBtn, waLink].forEach(a => a && (a.href = waUrl));
[callBtn, callLink].forEach(a => a && (a.href = telUrl));
if (mapsLink) mapsLink.href = mapsUrl;

menuBtn?.addEventListener("click", () => {
  const isOpen = nav.style.display === "flex";
  nav.style.display = isOpen ? "none" : "flex";
});
nav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    if (window.innerWidth <= 720) nav.style.display = "none";
  });
});

window.addEventListener("scroll", () => {
  toTop.style.display = window.scrollY > 400 ? "block" : "none";
});
toTop?.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));
if (year) year.textContent = new Date().getFullYear();

const langBtn = document.getElementById("langBtn");

const i18n = {
  ar: {
    dir: "rtl",
    lang: "ar",
    label: "🌐 English",
    values: {
      "top.location":"📍 الصناعيه - الرياض",
      "top.hours":"⏰ الدوام: يوميًا 9 ص - 10 م",

      "brand.name":"الورشه الحديثه",
      "brand.tagline":"ديزل • كهرباء شاحنات • صيانة معدات ثقيلة",

      "nav.about":"نبذة",
      "nav.services":"الخدمات",
      "nav.gallery":"الصور",
      "nav.contact":"تواصل",

      "hero.title":"صيانة ديزل للشاحنات والمعدات الثقيلة داخل الرياض",
      "hero.desc":"فحص وتشخيص أعطال، ميكانيكا ديزل، كهرباء شاحنات، وصيانة دورية. شغل واضح وتسعيرة قبل البدء.",
      "hero.cta1":"اطلب تسعيرة",
      "hero.cta2":"واتساب",
      "hero.cta3":"اتصال",
      "hero.b1":"تشخيص دقيق",
      "hero.b2":"قطع موثوقة",
      "hero.b3":"التزام بالوقت",
      "hero.quickTitle":"أبرز الخدمات",
      "hero.q1":"فحص كمبيوتر وتشخيص أعطال",
      "hero.q2":"تيربو وبخاخات وطرمبة ديزل",
      "hero.q3":"كهرباء شاحنات وبطاريات",
      "hero.q4":"زيوت وفلاتر وصيانة دورية",
      "hero.q5":"فرامل وعفشة وميزان",
      "hero.m1t":"داخل الرياض",
      "hero.m1d":"استقبال يومي",
      "hero.m2t":"خدمة أساطيل",
      "hero.m2d":"شركات ونقل",

      "about.title":"نبذة",
      "about.subtitle":"تعريف مختصر عن الورشه الحديثه",
      "about.c1t":"عن الورشة",
      "about.c1d":"الورشه الحديثه مركز متخصص في صيانة وإصلاح أنظمة الديزل للشاحنات والمعدات الثقيلة. نبدأ بتشخيص واضح، وبعدها تنفيذ الشغل حسب الحالة.",
      "about.t1":"فحص",
      "about.t2":"ميكانيكا ديزل",
      "about.t3":"كهرباء شاحنات",
      "about.t4":"صيانة دورية",
      "about.c2t":"نستقبل",
      "about.l1":"شاحنات نقل ثقيل وتريلات",
      "about.l2":"قلابـات ومعدات ثقيلة",
      "about.l3":"مولدات ديزل",
      "about.l4":"أساطيل شركات (حسب الاتفاق)",

      "services.title":"الخدمات",
      "services.subtitle":"الخدمات المتوفرة في الورشه الحديثه",
      "services.s1t":"فحص وتشخيص",
      "services.s1d":"فحص كمبيوتر + فحص شامل للأعطال.",
      "services.s2t":"ميكانيكا ديزل",
      "services.s2d":"طرمبة/بخاخات/تيربو/تبريد/تسريبات.",
      "services.s3t":"كهرباء شاحنات",
      "services.s3d":"دينامو وسلف وبطاريات وضفيرة وحساسات.",
      "services.s4t":"زيوت وفلاتر",
      "services.s4d":"صيانة دورية بزيوت وفلاتر مناسبة.",
      "services.s5t":"فرامل وعفشة",
      "services.s5d":"تيل/طنابير/مساعدات/جلب/ميزان.",
      "services.s6t":"أساطيل شركات",
      "services.s6d":"متابعة وصيانة حسب جدول واتفاق.",

      "gallery.title":"صور من الورشة",
      "gallery.subtitle":"جزء من بيئة العمل في الورشه الحديثه",

      "contact.title":"تواصل",
      "contact.subtitle":"اتصال، واتساب، أو رسالة",
      "contact.infoTitle":"بيانات الورشه الحديثه",
      "contact.phoneLabel":"📞 الجوال:",
      "contact.waLabel":"💬 واتساب:",
      "contact.addrLabel":"📍 العنوان:",
      "contact.addrText":"الصناعيه - الرياض",
      "contact.waBtn":"واتساب",
      "contact.callBtn":"اتصال",
      "contact.mapsBtn":"الموقع على الخريطة",

      "contact.formTitle":"أرسل رسالة",
      "form.name":"الاسم",
      "form.phone":"رقم الجوال",
      "form.service":"الخدمة",
      "form.msg":"الرسالة",
      "form.send":"إرسال",

      "footer.rights":"جميع الحقوق محفوظة",
      "footer.note":"خدمة العملاء: اتصال / واتساب"
    }
  },
  en: {
    dir: "ltr",
    lang: "en",
    label: "🌐 عربي",
    values: {
      "top.location":"📍 Riyadh — Industrial Area",
      "top.hours":"⏰ Hours: Daily 9 AM – 10 PM",

      "brand.name":"Al Warsha Al Haditha",
      "brand.tagline":"Diesel • Truck Electrical • Heavy Equipment",

      "nav.about":"About",
      "nav.services":"Services",
      "nav.gallery":"Gallery",
      "nav.contact":"Contact",

      "hero.title":"Diesel service for trucks & heavy equipment in Riyadh",
      "hero.desc":"Diagnostics, diesel mechanics, truck electrical, and routine maintenance. Clear pricing before work starts.",
      "hero.cta1":"Get a quote",
      "hero.cta2":"WhatsApp",
      "hero.cta3":"Call",
      "hero.b1":"Accurate diagnosis",
      "hero.b2":"Trusted parts",
      "hero.b3":"On-time delivery",
      "hero.quickTitle":"Key services",
      "hero.q1":"Computer diagnostics",
      "hero.q2":"Turbo / injectors / diesel pump",
      "hero.q3":"Truck electrical & batteries",
      "hero.q4":"Oil, filters & routine maintenance",
      "hero.q5":"Brakes, suspension & alignment",
      "hero.m1t":"Riyadh",
      "hero.m1d":"Daily reception",
      "hero.m2t":"Fleet service",
      "hero.m2d":"Companies & transport",

      "about.title":"About",
      "about.subtitle":"A brief overview of Al Warsha Al Haditha",
      "about.c1t":"About the workshop",
      "about.c1d":"Al Warsha Al Haditha is a specialized diesel workshop for trucks and heavy equipment. We start with clear diagnostics, then proceed based on the vehicle condition.",
      "about.t1":"Diagnostics",
      "about.t2":"Diesel mechanics",
      "about.t3":"Truck electrical",
      "about.t4":"Maintenance",
      "about.c2t":"We service",
      "about.l1":"Heavy trucks & trailers",
      "about.l2":"Tippers & heavy equipment",
      "about.l3":"Diesel generators",
      "about.l4":"Company fleets (by agreement)",

      "services.title":"Services",
      "services.subtitle":"Services available at Al Warsha Al Haditha",
      "services.s1t":"Diagnostics",
      "services.s1d":"Scan tools + full inspection.",
      "services.s2t":"Diesel Mechanics",
      "services.s2d":"Pump/injectors/turbo/cooling/leaks.",
      "services.s3t":"Truck Electrical",
      "services.s3d":"Alternator, starter, batteries, wiring, sensors.",
      "services.s4t":"Oil & Filters",
      "services.s4d":"Routine service with proper fluids and filters.",
      "services.s5t":"Brakes & Suspension",
      "services.s5d":"Pads/discs/shocks/bushings/alignment.",
      "services.s6t":"Fleet Service",
      "services.s6d":"Maintenance based on schedule and agreement.",

      "gallery.title":"Workshop photos",
      "gallery.subtitle":"A look inside Al Warsha Al Haditha",

      "contact.title":"Contact",
      "contact.subtitle":"Call, WhatsApp, or message",
      "contact.infoTitle":"Contact info",
      "contact.phoneLabel":"📞 Phone:",
      "contact.waLabel":"💬 WhatsApp:",
      "contact.addrLabel":"📍 Address:",
      "contact.addrText":"Riyadh — Industrial Area",
      "contact.waBtn":"WhatsApp",
      "contact.callBtn":"Call",
      "contact.mapsBtn":"Open in Maps",

      "contact.formTitle":"Send a message",
      "form.name":"Name",
      "form.phone":"Phone",
      "form.service":"Service",
      "form.msg":"Message",
      "form.send":"Send",

      "footer.rights":"All rights reserved",
      "footer.note":"Customer service: Call / WhatsApp"
    }
  }
};

function applyLanguage(code){
  const pack = i18n[code] || i18n.ar;
  document.documentElement.lang = pack.lang;
  document.documentElement.dir = pack.dir;

  if (langBtn) langBtn.textContent = pack.label;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = pack.values[key];
    if (val) el.textContent = val;
  });

  const serviceSelect = document.getElementById("serviceSelect");
  if (serviceSelect && code === "en") {
    serviceSelect.innerHTML = `
      <option>Diagnostics</option>
      <option>Diesel Mechanics</option>
      <option>Truck Electrical</option>
      <option>Oil & Filters</option>
      <option>Brakes & Suspension</option>
      <option>Fleet Service</option>
    `;
  }
  if (serviceSelect && code === "ar") {
    serviceSelect.innerHTML = `
      <option>فحص وتشخيص</option>
      <option>ميكانيكا ديزل</option>
      <option>كهرباء شاحنات</option>
      <option>زيوت وفلاتر</option>
      <option>فرامل وعفشة</option>
      <option>أساطيل شركات</option>
    `;
  }

  localStorage.setItem("site_lang", code);
}

const savedLang = localStorage.getItem("site_lang") || "ar";
applyLanguage(savedLang);

langBtn?.addEventListener("click", () => {
  const current = localStorage.getItem("site_lang") || "ar";
  applyLanguage(current === "ar" ? "en" : "ar");
});

const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = (data.get("name") || "").toString().trim();
  const phone = (data.get("phone") || "").toString().trim();
  const service = (data.get("service") || "").toString().trim();
  const message = (data.get("message") || "").toString().trim();

  const lang = localStorage.getItem("site_lang") || "ar";
  const header = lang === "en" ? "Hello, I want to request a service" : "السلام عليكم، أبي أطلب خدمة";

  const text =
    `${header}%0A` +
    `${lang === "en" ? "Name" : "الاسم"}: ${encodeURIComponent(name)}%0A` +
    `${lang === "en" ? "Phone" : "الجوال"}: ${encodeURIComponent(phone)}%0A` +
    `${lang === "en" ? "Service" : "الخدمة"}: ${encodeURIComponent(service)}%0A` +
    `${lang === "en" ? "Message" : "الرسالة"}: ${encodeURIComponent(message)}%0A` +
    `${lang === "en" ? "Location" : "الموقع"}: ${encodeURIComponent(mapsUrl)}`;

  window.open(`${waUrl}?text=${text}`, "_blank");

  if (formNote){
    formNote.textContent = lang === "en"
      ? "Opened WhatsApp with your message ✅"
      : "تم فتح الواتساب برسالتك ✅";
  }

  form.reset();
});