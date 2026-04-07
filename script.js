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
        nav_projects     : 'Projects',
        nav_contact      : 'Contact',
        hero_subtitle    : 'MOHAMED ALLAM',
        hero_title       : 'Software<br>Engineering',
<<<<<<< HEAD
        hero_desc        : "My story didn’t begin with just writing scattered lines of code; it started with a deep curiosity to understand how screens pulse with life and how complex problems are solved. As a Software Engineer specializing in Full-Stack Development, I transform this curiosity into reality by crafting interactive interfaces with React.js and building robust systems with Node.js. To me, every project is a narrative where code simplifies the human experience. Beyond development, I leverage my technical precision to help others succeed, engineering ATS-optimized CVs and professional portfolios that tell a compelling career story. By integrating expert solutions in Word, Excel, and PowerPoint, I turn complex data into clear, high-impact assets. I don’t just build software; I engineer pathways to growth, turning technical complexity into your greatest professional advantage. Let's build your next success story together.",
=======
        hero_desc        : "I'm a Frontend Developer based in Mansoura, Egypt. Passionate about web development and building software that improves the lives of those around me.",
>>>>>>> d3e5947d8b822252b267b2c7859113503b425909
        btn_portfolio    : 'Latest Portfolio',
        services_title   : 'My Services',
        services_subtitle: 'Empowering businesses through web development and tailored solutions that bring value to your workflows & operations.',
        serv_1_title     : 'Web Development',
        serv_1_desc      : 'Building modern, scalable & secure web applications tailored to your specific business needs with cutting-edge technologies.',
        serv_2_title     : 'UI / UX Design',
        serv_2_desc      : 'Crafting intuitive, engaging, and accessible user experiences that delight your customers.',
        serv_3_title     : 'Other Services',
        serv_3_desc      : 'Providing expert assistance with CV and portfolio creation, along with professional formatting and solutions in Microsoft Word, Excel, and PowerPoint.',
        tech_title       : 'Tech Stack /<br>Architecture',
        tech_card_title  : 'Modern JS Ecosystem',
        tech_card_desc   : 'Building high-performance, dynamic, and SEO-friendly applications using modern open-source web frameworks.',
        career_title     : 'Career /<br>Chronicles',
        car_1_date       : 'November 2025 - Present',
        car_1_title      : 'Full-stack development (React.js, Node.js)',
        car_1_desc       : 'Offered by DEPI in partnership with Harvest. Mastered end-to-end application development, from designing responsive UIs to architecting scalable backend services.',
        car_2_date       : 'Jul 2025 - September 2025',
        car_2_title      : 'Machine Learning',
        car_2_desc       : 'Offered by NTI. Learned core machine learning algorithms, data preprocessing, and applied predictive modeling using Python libraries.',
        car_3_date       : 'Jul 2022 - October 2022',
        car_3_title      : 'Digital Marketing',
        car_3_desc       : 'Offered by Mansoura University Engineering. Explored SEO optimization and social media strategies, gaining hands-on experience in driving user engagement and analyzing metrics.',
        projects_title   : 'Projects',
        projects_desc    : 'A showcase of my recent works.',
        proj_1_title     : 'Login-Register-Page project',
        proj_2_title     : 'Full-Stack Marketplace project',
        proj_3_title     : 'My Portfolio project (containing my CV)',
        proj_link        : 'View Project',
        contact_title    : "Let's Build<br>This Play Real.",
        contact_desc     : "Got a project in mind? Let's discuss how we can work together to bring your ideas to life.",
        contact_location : 'Mansoura, Egypt',
        form_name        : 'Your Name',
        form_email       : 'Your Email',
        form_phone       : 'Your Phone Number',
        form_msg         : 'Tell me about your project...',
        form_btn         : 'Send Message',
        footer_copy      : '&copy; 2026 Mohamed Allam. All rights reserved.',
    },
    ar: {
        brand            : 'محمد علام',
        nav_services     : 'الخدمات',
        nav_tech         : 'التقنيات',
        nav_career       : 'الخبرات',
        nav_projects     : 'المشاريع',
        nav_contact      : 'تواصل معي',
        hero_subtitle    : 'محمد علام',
        hero_title       : 'مهندس<br>برمجيات',
<<<<<<< HEAD
        hero_desc        : "قصتي لم تبدأ مجرد كتابة سطور متناثرة من التعليمات البرمجية؛ بل بدأت بفضول عميق لفهم كيف تنبض الشاشات بالحياة وكيف تُحل المشكلات المعقدة. بصفتي مهندس برمجيات متخصصاً في التطوير الشامل، أقوم بتحويل هذا الفضول إلى واقع من خلال بناء واجهات تفاعلية باستخدام React.js وأنظمة قوية باستخدام Node.js. بالنسبة لي، كل مشروع هو قصة تساهم فيها البرمجة في تبسيط التجربة الإنسانية. وخارج مجال التطوير، أستفيد من دقتّي التقنية لمساعدة الآخرين على النجاح، من خلال صياغة سير ذاتية (CVs) متوافقة مع أنظمة تتبع المتقدمين (ATS) وتصميم معارض أعمال احترافية تروي قصة مهنية مقنعة. من خلال دمج حلول متخصصة في Word و Excel و PowerPoint، أقوم بتحويل البيانات المعقدة إلى أصول واضحة وعالية التأثير. أنا لا أكتفي ببناء البرمجيات؛ بل أصمم مسارات للنمو، محولاً التعقيد التقني إلى أكبر ميزة مهنية لك. دعنا نبني قصة نجاحك التالية معاً.",
=======
        hero_desc        : 'أنا مطور واجهات أمامية مقيم في المنصورة، مصر. شغوف بتطوير الويب وبناء البرمجيات التي تحسن حياة من حولي.',
>>>>>>> d3e5947d8b822252b267b2c7859113503b425909
        btn_portfolio    : 'أحدث أعمالي',
        services_title   : 'خدماتي',
        services_subtitle: 'تمكين الشركات من خلال تطوير الويب والحلول المخصصة التي تضيف قيمة إلى سير عملك وعملياتك.',
        serv_1_title     : 'تطوير الويب',
        serv_1_desc      : 'بناء تطبيقات ويب حديثة وقابلة للتطوير وآمنة مصممة خصيصًا لتلبية احتياجات عملك باستخدام أحدث التقنيات.',
        serv_2_title     : 'تصميم واجهات المستخدم',
        serv_2_desc      : 'صياغة تجارب مستخدم بديهية وجذابة ويمكن الوصول إليها لتسعد عملائك.',
        serv_3_title     : 'خدمات أخرى',
        serv_3_desc      : 'تقديم مساعدة متخصصة في إنشاء السير الذاتية (CVs) ومعارض الأعمال (Portfolios)، بالإضافة إلى توفير حلول وتنسيقات احترافية في Word و Excel و PowerPoint.',
        tech_title       : 'التقنيات /<br>البنية التحتية',
        tech_card_title  : 'منظومة جافاسكربت الحديثة',
        tech_card_desc   : 'بناء تطبيقات عالية الأداء وديناميكية ومتوافقة مع محركات البحث باستخدام أطر عمل الويب الحديثة والمفتوحة المصدر.',
        career_title     : 'الخبرات /<br>المسيرة المهنية',
        car_1_date       : 'نوفمبر ٢٠٢٥ — الحاضر',
        car_1_title      : 'تطوير شامل (React.js, Node.js)',
        car_1_desc       : 'مقدمة من DEPI بالشراكة مع Harvest. أتقنت التطوير الشامل، بدءاً من تصميم واجهات المستخدم التفاعلية وحتى تصميم وبناء خدمات خلفية قوية وقابلة للتطوير.',
        car_2_date       : 'يوليو ٢٠٢٥ — سبتمبر ٢٠٢٥',
        car_2_title      : 'تعلم الآلة (Machine Learning)',
        car_2_desc       : 'مقدمة من NTI. تعلمت خوارزميات تعلم الآلة الأساسية ومعالجة البيانات وتطبيق النماذج التنبؤية باستخدام مكتبات بايثون.',
        car_3_date       : 'يوليو ٢٠٢٢ — أكتوبر ٢٠٢٢',
        car_3_title      : 'التسويق الرقمي (Digital Marketing)',
        car_3_desc       : 'مقدمة من هندسة جامعة المنصورة. استكشفت تحسين محركات البحث واستراتيجيات التواصل الاجتماعي، واكتسبت خبرة في زيادة التفاعل وتحليل البيانات.',
        projects_title   : 'المشاريع',
        projects_desc    : 'عرض لأحدث أعمالي.',
        proj_1_title     : 'مشروع صفحة تسجيل الدخول والاشتراك',
        proj_2_title     : 'مشروع متجر إلكتروني متكامل (Full-Stack)',
        proj_3_title     : 'مشروع معرض أعمالي (يحتوي على سيرتي الذاتية)',
        proj_link        : 'عرض المشروع',
        contact_title    : 'دعنا نبني<br>شيئاً حقيقياً.',
        contact_desc     : 'هل لديك مشروع في ذهنك؟ دعنا نناقش كيف يمكننا العمل معاً لتحويل أفكارك إلى واقع.',
        contact_location : 'المنصورة، مصر',
        form_name        : 'الاسم',
        form_email       : 'البريد الإلكتروني',
        form_phone       : 'رقم الهاتف',
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


/* ─── 5. CONTACT FORM & EMAILJS INTEGRATION ─────────────────── */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS with your Public Key
    if (typeof emailjs !== 'undefined') {
        emailjs.init("QBkkgyEAz_1BVmzmg");
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent page reload

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = currentLang === 'en' ? 'Sending...' : 'جاري الإرسال...';

            // 1. Extract data from fields (using IDs from our HTML)
            const name = document.getElementById('sender-name').value;
            const email = document.getElementById('sender-email').value;
            const phone = document.getElementById('sender-phone').value;
            const message = document.getElementById('sender-message').value;

            // 2. Prepare data for EmailJS
            const templateParams = {
                name: name,
                email: email,
                phone: phone,
                message: message
            };

            // 3. Prepare WhatsApp message properties ahead of time
            const phoneNumber = "201283831438"; 
            
            const whatsappText = currentLang === 'en' 
                ? `Hello Mr. Mohamed, I am ${name}.\nPhone: ${phone}\nEmail: ${email}\n\nProject Details:\n${message}`
                : `مرحباً أستاذ محمد، أنا ${name}.\nرقم الهاتف: ${phone}\nبريدي الإلكتروني: ${email}\n\nتفاصيل المشروع:\n${message}`;
            
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappText)}`;

            // 4. Send email to backend (uses 1 credit)
            if (typeof emailjs !== 'undefined') {
                emailjs.send('mo7amedallam', 'template_xrddd1q', templateParams)
                    .then(function() {
                        console.log('Email sent successfully!');
                        
                        // 5. Replace form with success message & WhatsApp Link (free step)
                        if (currentLang === 'en') {
                            contactForm.innerHTML = `
                                <div style="text-align: center; padding: 40px; background: rgba(255, 193, 7, 0.1); border: 1px solid #ffc107; border-radius: 10px;">
                                    <h2 style="color: #ffc107; margin-bottom: 15px;">Thank You, ${name}!</h2>
                                    <p style="color: #fff; font-size: 16px; line-height: 1.5; margin-bottom: 25px;">
                                        Thank you for contacting us. We will get back to you soon.
                                    </p>
                                    <a href="${whatsappURL}" target="_blank" style="display: inline-flex; align-items: center; justify-content: center; gap: 10px; background: #25D366; color: #fff; padding: 12px 24px; border-radius: 5px; text-decoration: none; font-weight: bold; margin-bottom: 15px; width: 100%; max-width: 250px;">
                                        <i class="fab fa-whatsapp" style="font-size: 1.3rem;"></i> Whatsapp Me
                                    </a>
                                    <br>
                                    <button onclick="location.reload()" style="padding: 10px 20px; background: transparent; color: #ffc107; border: 1px solid #ffc107; border-radius: 5px; cursor: pointer; font-weight: bold;">
                                        Send Another Message
                                    </button>
                                </div>
                            `;
                        } else {
                            contactForm.innerHTML = `
                                <div style="text-align: center; padding: 40px; background: rgba(255, 193, 7, 0.1); border: 1px solid #ffc107; border-radius: 10px;">
                                    <h2 style="color: #ffc107; margin-bottom: 15px;">شكراً لك يا ${name}!</h2>
                                    <p style="color: #fff; font-size: 16px; line-height: 1.5; margin-bottom: 25px;">
                                        شكراً لتواصلك معنا. سنقوم بالرد عليك في أقرب وقت.
                                    </p>
                                    <a href="${whatsappURL}" target="_blank" style="display: inline-flex; align-items: center; justify-content: center; gap: 10px; background: #25D366; color: #fff; padding: 12px 24px; border-radius: 5px; text-decoration: none; font-weight: bold; margin-bottom: 15px; width: 100%; max-width: 250px;">
                                        <i class="fab fa-whatsapp" style="font-size: 1.3rem;"></i> تواصل عبر الواتساب
                                    </a>
                                    <br>
                                    <button onclick="location.reload()" style="padding: 10px 20px; background: transparent; color: #ffc107; border: 1px solid #ffc107; border-radius: 5px; cursor: pointer; font-weight: bold;">
                                        إرسال رسالة أخرى
                                    </button>
                                </div>
                            `;
                        }
                    })
                    .catch(function(error) {
                        console.log('Failed to send email...', error);
                        submitBtn.innerText = originalBtnText; // Revert button
                        alert(currentLang === 'en' ? 'Sorry, something went wrong. Please try again.' : 'عذراً، حدث خطأ ما. يرجى المحاولة مرة أخرى.');
                    });
            }
        });
    }
});

