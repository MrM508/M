/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

document.addEventListener("click", event => {
    if (
        navLinks.classList.contains("open") &&
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    }
});

/* =========================
   FAQ ACCORDION
========================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    if (item.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
    }

    question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        faqItems.forEach(otherItem => {
            otherItem.classList.remove("active");
            const otherAnswer = otherItem.querySelector(".faq-answer");
            otherAnswer.style.maxHeight = null;
        });

        if (!isActive) {
            item.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});

/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealElements.forEach(element => observer.observe(element));
} else {
    revealElements.forEach(element => element.classList.add("visible"));
}

/* =========================
   LANGUAGE SYSTEM
========================= */

const translations = {
    ar: {
        navHome: "الرئيسية", 
        navAbout: "من نحن", 
        navServices: "خدماتنا", 
        navFaq: "الأسئلة",
        navContact: "تواصل معنا",
        navButton: "ابدأ مشروعك",
        heroBadge: "نحوّل أفكارك إلى واقع رقمي",
        heroTitle: 'نصنع مواقع<br><span class="gold">تترك انطباعاً.</span>',
        heroDescription: "نصمم ونبرمج مواقع إلكترونية عصرية تجمع بين الجمال والسرعة وتجربة المستخدم الاستثنائية.",
        heroButton: "ابدأ مشروعك الآن", 
        heroSecondary: "اكتشف خدماتنا", 
        heroTrust: "نحو حضور رقمي أكثر احترافية",
        floatingResponsive: "متجاوب", 
        floatingDesign: "تصميم عصري", 
        scrollText: "اكتشف ما يمكننا تقديمه لك",
        aboutTag: "من نحن", 
        aboutTitle: 'أكثر من مجرد موقع،<br><span class="gold">إنها هويتك الرقمية.</span>',
        aboutDescription: "نؤمن بأن الموقع الإلكتروني هو واجهتك الأولى أمام العالم. لذلك نعمل على تقديم حلول رقمية تجمع بين التصميم المدروس والتطوير التقني وتجربة الاستخدام المميزة.",
        featureOneTitle: "تصميم مميز", 
        featureOneText: "تصاميم عصرية تعكس هوية مشروعك وتمنحه حضوراً مختلفاً.",
        featureTwoTitle: "تطوير احترافي", 
        featureTwoText: "برمجة منظمة وأداء سريع وتجربة استخدام سلسة.",
        featureThreeTitle: "توافق كامل", 
        featureThreeText: "مواقع تعمل بكفاءة على الهواتف والأجهزة اللوحية والحواسيب.",
        servicesTag: "خدماتنا", 
        servicesTitle: 'حلول رقمية<br><span class="gold">مصممة لنجاحك.</span>', servicesDescription: "نوفر لك كل ما تحتاجه لبناء حضور رقمي احترافي.",
        serviceOneTitle: "إصلاح المواقع", 
        serviceOneText: "نعالج أخطاء المواقع ونحسّن أداءها لضمان تجربة استخدام سلسة ومستقرة.",
        serviceTwoTitle: "صفحات الهبوط", 
        serviceTwoText: "نصمم صفحات هبوط احترافية تبرز خدماتك وتعزز فرص تحويل الزوار إلى عملاء.",
        serviceThreeTitle: "لوحات التحكم والمنظومات", 
        serviceThreeText: "نطور لوحات تحكم ومنظومات ذكية لإدارة أعمالك وتنظيم عملياتك بكفاءة.",
        serviceFourTitle: "مواقع كاملة مخصصة", 
        serviceFourText: "نبني مواقع إلكترونية متكاملة بتصاميم مخصصة تلبي احتياجات مشروعك.",
        serviceLink: "اطلب الخدمة", 
        ctaTag: "لديك فكرة؟", 
        ctaTitle: 'دعنا نحول فكرتك<br>إلى <span class="gold">شيء استثنائي.</span>',
        ctaText: "كل مشروع رائع يبدأ بخطوة. أخبرنا عن فكرتك ولنبدأ معاً.", 
        ctaButton: "تحدث معنا",
        faqTag: "الأسئلة الشائعة", 
        faqTitle: 'هل لديك<br><span class="gold">استفسار؟</span>', 
        faqDescription: "إليك إجابات عن بعض الأسئلة التي قد تدور في ذهنك.",
        faqOneQuestion: "كم يستغرق إنشاء الموقع؟", 
        faqOneAnswer: "تختلف المدة حسب حجم المشروع ومتطلباته، ويتم تحديد الجدول الزمني بعد الاتفاق على التفاصيل.",
        faqTwoQuestion: "هل يعمل الموقع على الهاتف؟", 
        faqTwoAnswer: "نعم، نحرص على أن تكون المواقع متجاوبة مع الهواتف والأجهزة اللوحية والحواسيب.",
        faqThreeQuestion: "هل يمكنني طلب تعديلات؟", 
        faqThreeAnswer: "بالتأكيد، يمكن مناقشة التعديلات المطلوبة وتحديدها ضمن نطاق المشروع المتفق عليه.",
        faqFourQuestion: "كيف أبدأ مشروعي؟", 
        faqFourAnswer: "أرسل لنا تفاصيل فكرتك من خلال نموذج التواصل وسنتواصل معك لمناقشة الخطوات التالية.",
        contactTag: "تواصل معنا", contactTitle: 'لنبدأ مشروعك<br><span class="gold">القادم.</span>', contactDescription: "أخبرنا عن فكرتك، وسنساعدك في تحويلها إلى تجربة رقمية مميزة.",
        // emailLabel: "البريد الإلكتروني", 
        locationLabel: "الموقع", 
        locationValue: "نعمل مع عملائنا أينما كانوا",
        formTitle: "أرسل لنا رسالة", 
        formDescription: "املأ البيانات التالية وسنتواصل معك.", 
        nameLabel: "الاسم", 
        namePlaceholder: "اسمك الكامل",
        emailFieldLabel: "البريد الإلكتروني", 
        serviceLabel: "الخدمة المطلوبة", 
        servicePlaceholder: "اختر الخدمة",
        optionDesign: " إصلاح المواقع", 
        optionDevelopment: "صفحات الهبوط", 
        optionEcommerce: "لوحات التحكم والمنظومات", 
        optionOther: "موقع مخصص",
        messageLabel: "تفاصيل المشروع", 
        messagePlaceholder: "أخبرنا عن فكرتك...", 
        submitButton: "إرسال الرسالة",
        footerText: "نصنع تجارب رقمية تترك أثراً.", 
        rights: "جميع الحقوق محفوظة.", 
        formSuccess: "تم التحقق من بياناتك. اربط النموذج بخدمة إرسال الرسائل لاستقبال الطلبات."
    },
    en: {
        navHome: "Home", 
        navAbout: "About", 
        navServices: "Services", 
        navFaq: "FAQ", 
        navContact: "Contact", 
        navButton: "Start a Project",
        heroBadge: "Turning ideas into digital reality", 
        heroTitle: 'We Build Websites<br><span class="gold">That Make an Impact.</span>',
        heroDescription: "We design and develop modern websites that combine beauty, speed, and exceptional user experience.",
        heroButton: "Start Your Project", 
        heroSecondary: "Explore Services", 
        heroTrust: "Building a stronger digital presence",
        floatingResponsive: "Responsive", 
        floatingDesign: "Modern Design", 
        scrollText: "Discover what we can do for you",
        aboutTag: "About Us", 
        aboutTitle: 'More Than a Website,<br><span class="gold">Your Digital Identity.</span>',
        aboutDescription: "We believe your website is your first impression. We create digital solutions combining thoughtful design, technical development, and excellent user experience.",
        featureOneTitle: "Distinctive Design", 
        featureOneText: "Modern designs that reflect your brand identity.",
        featureTwoTitle: "Professional Development", 
        featureTwoText: "Clean code, fast performance, and smooth experiences.",
        featureThreeTitle: "Fully Responsive", 
        featureThreeText: "Websites that work across phones, tablets, and computers.",
        servicesTag: "Our Services", 
        servicesTitle: 'Digital Solutions<br><span class="gold">Built for Your Success.</span>', 
        servicesDescription: "Everything you need to build a professional digital presence.",
        serviceOneTitle: "Website Fixes", 
        serviceOneText: "We resolve website issues and optimize performance for a smooth and reliable user experience.",
        serviceTwoTitle: "Landing Pages", 
        serviceTwoText: "We create professional landing pages that showcase your services and turn visitors into customers.",
        serviceThreeTitle: "Dashboards & Web Systems", 
        serviceThreeText: "We develop smart dashboards and web systems to manage your business and streamline operations.",
        serviceFourTitle: "Custom Websites", 
        serviceFourText: "We build complete websites with tailored designs that meet your project's unique needs.",
        serviceLink: "Request Service", 
        ctaTag: "Have an Idea?", 
        ctaTitle: 'Let’s Turn Your Idea<br>Into <span class="gold">Something Exceptional.</span>',
        ctaText: "Every great project starts with one step. Tell us about your idea.", 
        ctaButton: "Talk to Us",
        faqTag: "FAQ", 
        faqTitle: 'Have Any<br><span class="gold">Questions?</span>', 
        faqDescription: "Here are answers to some common questions.",
        faqOneQuestion: "How long does a website take?", 
        faqOneAnswer: "The timeline depends on the project's size and requirements. We agree on a schedule after discussing the details.",
        faqTwoQuestion: "Will the website work on phones?", 
        faqTwoAnswer: "Yes. We make sure our websites work smoothly on phones, tablets, and computers.",
        faqThreeQuestion: "Can I request changes?", 
        faqThreeAnswer: "Of course. Requested changes can be discussed and included in the agreed project scope.",
        faqFourQuestion: "How can I start my project?", 
        faqFourAnswer: "Send us your idea through the contact form, and we will discuss the next steps.",
        contactTag: "Contact Us", 
        contactTitle: 'Let`s Start Your<br><span class="gold">Next Project.</span>', 
        contactDescription: "Tell us about your idea, and we will help turn it into a great digital experience.",
        emailLabel: "Email", 
        locationLabel: "Location", 
        locationValue: "Working with clients everywhere",
        formTitle: "Send Us a Message",
        formDescription: "Fill in the details below and we will get back to you.", 
        nameLabel: "Name", 
        namePlaceholder: "Your full name",
        emailFieldLabel: "Email Address", 
        serviceLabel: "Required Service", 
        servicePlaceholder: "Choose a service",
        optionDesign: "Website Fixes", 
        optionDevelopment: "Landing Pages", 
        optionEcommerce: "Dashboards & Web Systems", 
        optionOther: "Custom Websites",
        messageLabel: "Project Details", 
        messagePlaceholder: "Tell us about your idea...", 
        submitButton: "Send Message",
        footerText: "Creating digital experiences that matter.",
        rights: "All rights reserved.", 
        formSuccess: "Your details have been validated. Connect the form to a messaging service to receive submissions."
    },
    fr: {
        navHome: "Accueil", 
        navAbout: "À propos", 
        navServices: "Services", 
        navFaq: "FAQ", 
        navContact: "Contact", 
        navButton: "Démarrer un projet",
        heroBadge: "Nous transformons vos idées en réalité numérique", 
        heroTitle: 'Nous créons des sites<br><span class="gold">qui marquent les esprits.</span>',
        heroDescription: "Nous concevons des sites modernes qui allient beauté, rapidité et expérience utilisateur exceptionnelle.",
        heroButton: "Démarrer votre projet", 
        heroSecondary: "Découvrir nos services", 
        heroTrust: "Pour une présence numérique professionnelle",
        floatingResponsive: "Adaptatif", 
        floatingDesign: "Design moderne", 
        scrollText: "Découvrez nos services",
        aboutTag: "À propos", 
        aboutTitle: 'Plus qu’un site web,<br><span class="gold">votre identité numérique.</span>',
        aboutDescription: "Nous croyons que votre site web est votre première impression. Nous créons des solutions numériques alliant design réfléchi, développement technique et expérience utilisateur.",
        featureOneTitle: "Design distinctif", 
        featureOneText: "Des designs modernes qui reflètent votre identité.",
        featureTwoTitle: "Développement professionnel", 
        featureTwoText: "Un code propre, rapide et une expérience fluide.",
        featureThreeTitle: "Entièrement adaptatif", 
        featureThreeText: "Des sites adaptés aux téléphones, tablettes et ordinateurs.",
        servicesTag: "Nos services", 
        servicesTitle: 'Solutions numériques<br><span class="gold">pour votre réussite.</span>',
        servicesDescription: "Tout ce dont vous avez besoin pour votre présence numérique.",
        serviceOneTitle: "Correction de Sites Web", 
        serviceOneText: "Nous corrigeons les erreurs et optimisons les performances pour une expérience fluide et fiable.",
        serviceTwoTitle: "Pages d'Atterrissage", 
        serviceTwoText: "Nous concevons des pages professionnelles qui valorisent vos services et convertissent vos visiteurs en clients.",
        serviceThreeTitle: "Tableaux de Bord & Systèmes Web", 
        serviceThreeText: "Nous développons des tableaux de bord et des systèmes web pour gérer votre activité efficacement.",
        serviceFourTitle: "Sites Web sur Mesure", 
        serviceFourText: "Nous créons des sites web complets avec des designs personnalisés adaptés aux besoins de votre projet.",
        serviceLink: "Demander le service", 
        ctaTag: "Une idée ?", 
        ctaTitle: 'Transformons votre idée<br>en <span class="gold">quelque chose d’exceptionnel.</span>',
        ctaText: "Chaque grand projet commence par une étape. Parlons de votre idée.", 
        ctaButton: "Contactez-nous",
        faqTag: "Questions fréquentes", 
        faqTitle: 'Avez-vous des<br><span class="gold">questions ?</span>', 
        faqDescription: "Voici les réponses à quelques questions fréquentes.",
        faqOneQuestion: "Combien de temps faut-il pour créer un site ?", 
        faqOneAnswer: "Le délai dépend de la taille et des besoins du projet. Nous définissons un calendrier après discussion.",
        faqTwoQuestion: "Le site fonctionnera-t-il sur téléphone ?", 
        faqTwoAnswer: "Oui, nos sites sont adaptés aux téléphones, tablettes et ordinateurs.",
        faqThreeQuestion: "Puis-je demander des modifications ?", faqThreeAnswer: "Bien sûr. Les modifications peuvent être discutées dans le cadre du projet convenu.",
        faqFourQuestion: "Comment démarrer mon projet ?", faqFourAnswer: "Envoyez-nous votre idée via le formulaire et nous discuterons des prochaines étapes.",
        contactTag: "Contactez-nous", contactTitle: 'Commençons votre<br><span class="gold">prochain projet.</span>', contactDescription: "Parlez-nous de votre idée et nous vous aiderons à la concrétiser.",
        emailLabel: "E-mail", locationLabel: "Localisation", locationValue: "Nous travaillons avec des clients partout",
        formTitle: "Envoyez-nous un message", formDescription: "Remplissez les informations ci-dessous.", nameLabel: "Nom", namePlaceholder: "Votre nom complet",
        emailFieldLabel: "Adresse e-mail", serviceLabel: "Service souhaité", servicePlaceholder: "Choisir un service",
        optionDesign: "Correction de Sites Web", 
        optionDevelopment: "Pages d'Atterrissage", 
        optionEcommerce: "Tableaux de Bord & Systèmes Web", 
        optionOther: "Sites Web sur Mesure",
        messageLabel: "Détails du projet", messagePlaceholder: "Parlez-nous de votre idée...", submitButton: "Envoyer le message",
        footerText: "Nous créons des expériences numériques mémorables.", rights: "Tous droits réservés.", formSuccess: "Vos informations ont été vérifiées. Connectez le formulaire à un service d'envoi pour recevoir les demandes."
    }
};

const languageSelect = document.getElementById("languageSelect");

function changeLanguage(language) {
    const dictionary = translations[language];
    if (!dictionary) return;

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        if (dictionary[key]) element.innerHTML = dictionary[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.dataset.i18nPlaceholder;
        if (dictionary[key]) element.placeholder = dictionary[key];
    });

    localStorage.setItem("goldenLanguage", language);
    document.title = language === "ar" ? "GOLDEN | تصميم وتطوير المواقع" : language === "fr" ? "GOLDEN | Création de sites web" : "GOLDEN | Web Design & Development";

    requestAnimationFrame(() => {
        document.querySelectorAll(".faq-item.active .faq-answer").forEach(answer => {
            answer.style.maxHeight = answer.scrollHeight + "px";
        });
    });
}

const savedLanguage = localStorage.getItem("goldenLanguage") || "ar";
languageSelect.value = savedLanguage;
changeLanguage(savedLanguage);

languageSelect.addEventListener("change", event => changeLanguage(event.target.value));

/* =========================
   CONTACT FORM
========================= */

/* =========================
   CONTACT FORM (Web3Forms)
========================= */

/* =========================
   CONTACT FORM (Formspree Official)
========================= */

// ضع الـ ID الخاص بك هنا
const FORMSPREE_ID = "mwllgvjw"; 

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    const submitBtn = contactForm.querySelector(".submit-btn");
    const originalText = submitBtn.innerHTML;
    const lang = document.documentElement.lang;

    // تعطيل الزر
    submitBtn.disabled = true;
    submitBtn.innerHTML = lang === "ar" ? "جاري الإرسال..." : "Sending...";
    formMessage.textContent = "";

    try {
        // استخدام مكتبة Formspree الرسمية
        const response = await window.fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
            method: "POST",
            body: new FormData(contactForm), // إرسال النموذج كـ FormData
            headers: {
                "Accept": "application/json"
            }
        });

        const result = await response.json();

        if (response.ok) {
            const successMessages = {
                ar: "✅ تم إرسال رسالتك بنجاح، سنتواصل معك قريباً.",
                en: "✅ Your message was sent successfully.",
                fr: "✅ Votre message a été envoyé avec succès."
            };
            formMessage.textContent = successMessages[lang] || successMessages.ar;
            formMessage.style.color = "#4ade80";
            contactForm.reset();
        } else {
            throw new Error(result.errors ? result.errors[0].message : "Error");
        }
    } catch (error) {
        const errorMessages = {
            ar: "❌ حدث خطأ أثناء الإرسال. حاول مرة أخرى.",
            en: "❌ An error occurred. Please try again.",
            fr: "❌ Une erreur est survenue."
        };
        formMessage.textContent = errorMessages[lang] || errorMessages.ar;
        formMessage.style.color = "#ef4444";
        console.error("Formspree Error:", error);
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    }
});

/* =========================
   RESIZE FIX
========================= */

window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    }
});