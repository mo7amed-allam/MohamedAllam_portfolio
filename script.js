/* ============================================================
   PORTFOLIO – MAIN JAVASCRIPT
   Author : Mohamed Allam
   File   : script.js
   ============================================================ */


/* ─── 1. THEME TOGGLER ──────────────────────────────────────── */

/**
 * Toggles between dark and light Bootstrap theme.
 * Updates the theme icon button accordingly.
 */
function toggleTheme() {
    const htmlRoot    = document.getElementById('html-root');
    const iconBtn     = document.getElementById('theme-icon');
    const currentTheme = htmlRoot.getAttribute('data-bs-theme');

    if (currentTheme === 'dark') {
        htmlRoot.setAttribute('data-bs-theme', 'light');
        iconBtn.innerHTML = '🌙';
    } else {
        htmlRoot.setAttribute('data-bs-theme', 'dark');
        iconBtn.innerHTML = '☀️';
    }
}


/* ─── 2. TRANSLATIONS ───────────────────────────────────────── */

const translations = {
    en: {
        brand            : 'MOHAMED ALLAM',
        nav_services     : 'Services',
        nav_tech         : 'Tech Stack',
        nav_career       : 'Career',
        nav_contact      : 'Contact',
        hero_subtitle    : 'MOHAMED ALLAM',
        hero_title       : 'Software<br>Engineering',
        hero_desc        : "I'm a Frontend Developer based in Cairo, Egypt. Passionate about web development and building software that improves the lives of those around me.",
        btn_portfolio    : 'Latest Portfolio',
        services_title   : 'My Services',
        services_subtitle: 'Empowering businesses through web development and tailored solutions that bring value to your workflows & operations.',
        serv_1_title     : 'Web Development',
        serv_1_desc      : 'Building modern, scalable & secure web applications tailored to your specific business needs with cutting-edge technologies.',
        serv_2_title     : 'UI / UX Design',
        serv_2_desc      : 'Crafting intuitive, engaging, and accessible user experiences that delight your customers.',
        serv_3_title     : 'Administrative & Technical Support Specialist',
        serv_3_desc      : 'Administrative & Technical Support Specialist and Virtual Assistant specializing in creating CVs, Portfolios, PowerPoint, Excel, and Word documents.',
        tech_title       : 'Tech Stack /<br>Architecture',
        tech_card_title  : 'Modern JS Ecosystem',
        tech_card_desc   : 'Building high-performance, dynamic, and SEO-friendly applications using modern open-source web frameworks.',
        career_title     : 'Career /<br>Chronicles',
        car_1_date       : '2025 — PRESENT',
        car_1_title      : 'Full Stack Developer',
        car_1_desc       : 'Leading end-to-end development of web applications, managing databases, backend logic, and frontend user interfaces.',
        car_2_date       : '(Nov) 2025 — Present',
        car_2_title      : 'Frontend Developer',
        car_2_desc       : 'Specialized in building responsive SPAs using React.js and integrating with complex RESTful APIs.',
        car_3_date       : '2025 — Present',
        car_3_title      : 'UI/UX Designer',
        car_3_desc       : 'Prototyped user interfaces and conducted user research to guide the product development lifecycle.',
        contact_title    : "Let's Build<br>This Play Real.",
        contact_desc     : "Got a project in mind? Let's discuss how we can work together to bring your ideas to life.",
        contact_location : 'Mansoura, Egypt',
        form_name        : 'Your Name',
        form_email       : 'Your Email',
        form_msg         : 'Tell me about your project...',
        form_btn         : 'Send Message',
        footer_copy      : '&copy; 2026 Mohamed Allam. All rights reserved.',
    },
    ar: {
        brand            : 'محمد علام',
        nav_services     : 'الخدمات',
        nav_tech         : 'التقنيات',
        nav_career       : 'الخبرات',
        nav_contact      : 'تواصل معي',
        hero_subtitle    : 'محمد علام',
        hero_title       : 'مهندس<br>برمجيات',
        hero_desc        : 'أنا مطور واجهات أمامية مقيم في القاهرة، مصر. شغوف بتطوير الويب وبناء البرمجيات التي تحسن حياة من حولي.',
        btn_portfolio    : 'أحدث أعمالي',
        services_title   : 'خدماتي',
        services_subtitle: 'تمكين الشركات من خلال تطوير الويب والحلول المخصصة التي تضيف قيمة إلى سير عملك وعملياتك.',
        serv_1_title     : 'تطوير الويب',
        serv_1_desc      : 'بناء تطبيقات ويب حديثة وقابلة للتطوير وآمنة مصممة خصيصًا لتلبية احتياجات عملك باستخدام أحدث التقنيات.',
        serv_2_title     : 'تصميم واجهات المستخدم',
        serv_2_desc      : 'صياغة تجارب مستخدم بديهية وجذابة ويمكن الوصول إليها لتسعد عملائك.',
        serv_3_title     : 'أخصائي دعم إداري وفني',
        serv_3_desc      : 'أخصائي دعم إداري وفني ومساعد افتراضي متخصص في إعداد السير الذاتية، ومعارض الأعمال (بورتفوليو)، وعروض الباوربوينت، وملفات الإكسيل، ومستندات الوورد.',
        tech_title       : 'التقنيات /<br>البنية التحتية',
        tech_card_title  : 'منظومة جافاسكربت الحديثة',
        tech_card_desc   : 'بناء تطبيقات عالية الأداء وديناميكية ومتوافقة مع محركات البحث باستخدام أطر عمل الويب الحديثة والمفتوحة المصدر.',
        career_title     : 'الخبرات /<br>المسيرة المهنية',
        car_1_date       : '٢٠٢٥ — الحاضر',
        car_1_title      : 'مطور ويب شامل (Full Stack)',
        car_1_desc       : 'قيادة التطوير الشامل لتطبيقات الويب، إدارة قواعد البيانات، والمنطق الخلفي، وواجهات المستخدم.',
        car_2_date       : 'نوفمبر ٢٠٢٥ — الحاضر',
        car_2_title      : 'مطور واجهات أمامية',
        car_2_desc       : 'متخصص في بناء تطبيقات الويب ذات الصفحة الواحدة باستخدام React.js وربطها مع واجهات برمجة التطبيقات المعقدة.',
        car_3_date       : '٢٠٢٥ — الحاضر',
        car_3_title      : 'مصمم واجهات وتجربة مستخدم',
        car_3_desc       : 'تصميم نماذج واجهات المستخدم وإجراء أبحاث المستخدمين لتوجيه دورة حياة تطوير المنتجات.',
        contact_title    : 'دعنا نبني<br>شيئاً حقيقياً.',
        contact_desc     : 'هل لديك مشروع في ذهنك؟ دعنا نناقش كيف يمكننا العمل معاً لتحويل أفكارك إلى واقع.',
        contact_location : 'المنصورة، مصر',
        form_name        : 'الاسم',
        form_email       : 'البريد الإلكتروني',
        form_msg         : 'أخبرني عن مشروعك...',
        form_btn         : 'إرسال الرسالة',
        footer_copy      : '© ٢٠٢٦ محمد علام. جميع الحقوق محفوظة.',
    },
};

let currentLang = 'en';

/* ─── 3. LANGUAGE TOGGLER ───────────────────────────────────── */

/**
 * Switches between English (LTR) and Arabic (RTL).
 * Applies all translated strings via data-i18n attributes.
 */
function toggleLanguage() {
    const htmlRoot = document.getElementById('html-root');
    const langBtn  = document.getElementById('lang-btn');

    currentLang = currentLang === 'en' ? 'ar' : 'en';

    // Update document direction & lang attribute
    if (currentLang === 'ar') {
        htmlRoot.setAttribute('lang', 'ar');
        htmlRoot.setAttribute('dir', 'rtl');
        langBtn.innerText = 'English';
    } else {
        htmlRoot.setAttribute('lang', 'en');
        htmlRoot.setAttribute('dir', 'ltr');
        langBtn.innerText = 'عربي';
    }

    // Apply translated strings
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key   = el.getAttribute('data-i18n');
        const prop  = el.getAttribute('data-i18n-prop');
        const value = translations[currentLang][key];

        if (!value) return;

        if (prop === 'placeholder') {
            el.setAttribute('placeholder', value);
        } else {
            el.innerHTML = value;
        }
    });
}


/* ─── 4. CV VIEWER ──────────────────────────────────────────── */

/**
 * Shows the inline CV viewer below the hero section
 * and triggers the PDF download simultaneously.
 * If the viewer is already open the download still proceeds.
 */
function toggleCvViewer(event) {
    const section = document.getElementById('cv-viewer-section');

    if (section.classList.contains('visible')) {
        // Already open – just let the download happen (default anchor behaviour)
        return;
    }

    // Show viewer with animation
    section.classList.add('visible');

    // Smooth-scroll to viewer after animation starts
    setTimeout(() => {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

/**
 * Hides the CV viewer and resets its animation
 * so it plays again the next time it is opened.
 */
function closeCvViewer() {
    const section = document.getElementById('cv-viewer-section');
    section.classList.remove('visible');

    // Reset animation for next open
    section.style.animation = 'none';
    setTimeout(() => { section.style.animation = ''; }, 10);
}
