/**
 * Government Boys High School (GBHS) Gulyal Kalan, Tehsil Jand
 * Interactive Web Application Engine
 */

const ACADEMIC_DIVISIONS = {
  primary: {
    tag: 'Classes 1st to 5th • Primary Section',
    title: 'Primary Wing: Foundational Learning & Discipline',
    summary: 'Our primary wing provides fundamental literacy, basic mathematics, General Knowledge, and Nazra Quran according to the Single National Curriculum (SNC) set by Govt of the Punjab.',
    features: [
      'Single National Curriculum (SNC) certified textbooks',
      'Focus on Urdu, English Reading, Writing & Basic Arithmetic',
      'Morning physical training (PT), discipline & assembly prayers',
      '100% Free textbooks provided by Punjab Textbook Board'
    ],
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80'
  },
  middle: {
    tag: 'Classes 6th to 8th • Middle Section',
    title: 'Middle Wing: Core Sciences & Analytical Thinking',
    summary: 'Preparing young boys for secondary school with dedicated classes in General Science, Mathematics, Computer Education, English, Urdu, Islamiyat, and Pakistan Studies.',
    features: [
      'Comprehensive preparation for 8th Grade Middle Standard exams',
      'Basic practical experiments in Science & Introduction to IT',
      'School scout troop & Inter-house sports competitions',
      'Dedicated mentoring by experienced Elementary School Teachers (ESTs)'
    ],
    image: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=800&auto=format&fit=crop&q=80'
  },
  matricBio: {
    tag: 'Classes 9th & 10th • BISE Rawalpindi Science Group',
    title: 'Secondary Science Wing: Biology & Pre-Medical Group',
    summary: 'Focused academic preparation for Matriculation under the Board of Intermediate and Secondary Education (BISE) Rawalpindi with intensive laboratory practicals.',
    features: [
      'Physics, Chemistry, Biology & Mathematics curriculum',
      'Regular practical laboratory sessions with certified apparatus',
      'Past paper test sessions & monthly evaluation exams',
      'Proven track record of high A+ grades in BISE Rawalpindi'
    ],
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80'
  },
  matricComp: {
    tag: 'Classes 9th & 10th • BISE Rawalpindi IT Group',
    title: 'Secondary Science Wing: Computer Science & IT',
    summary: 'Designed for students eager to pursue modern information technology, software, and engineering disciplines with practical lab training in computer programming.',
    features: [
      'Hands-on training in Computer Science, C++ & Web fundamentals',
      'Air-conditioned computer lab with high-speed internet',
      'Preparation for future ICS, BS Computer Science & Software Engineering',
      'Coaching by specialized Computer Science SST educators'
    ],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80'
  },
  arts: {
    tag: 'Classes 9th & 10th • General / Humanities',
    title: 'Humanities & General Arts Group',
    summary: 'Balanced curriculum offering General Science, General Mathematics, Civics, Islamic Studies, and Education for versatile career prospects.',
    features: [
      'Focus on language proficiency, social sciences & civic ethics',
      'Comprehensive textbook revision and board exam coaching',
      'Full preparation for FA, Law, Civil Services & Armed Forces',
      'Free textbooks and career guidance workshops'
    ],
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop&q=80'
  }
};

const FACILITIES_DATA = [
  {
    id: 1,
    category: 'stem',
    tag: 'Computer & IT',
    title: 'Quaid-e-Azam IT Computer Laboratory',
    desc: 'Modern networked computer systems offering practical training in programming, typing, and digital literacy.',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=700&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    category: 'stem',
    tag: 'Science Lab',
    title: 'Physics & Chemistry Practical Lab',
    desc: 'Fully equipped experimental tables with chemical reagents, optical benches, and biological microscopes.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=700&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    category: 'sports',
    tag: 'Athletics & Ground',
    title: 'Main Cricket & Football Sports Ground',
    desc: 'Spacious natural grass ground hosting annual Tehsil Jand sports tournaments, cricket matches, and PT drills.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=700&auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    category: 'campus',
    tag: 'Library',
    title: 'Allama Iqbal School Library',
    desc: 'Collection of reference encyclopedias, Islamic history, general knowledge books, and daily newspapers.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=700&auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    category: 'campus',
    tag: 'Health & Facility',
    title: 'Clean RO Water Filtration Plant',
    desc: 'Purified drinking water facility ensuring health and hydration for all students and staff.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=700&auto=format&fit=crop&q=80'
  },
  {
    id: 6,
    category: 'campus',
    tag: 'Assembly Hall',
    title: 'School Examination & Assembly Hall',
    desc: 'Multi-purpose hall for morning assemblies, board examination center, and Milad-un-Nabi gatherings.',
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=700&auto=format&fit=crop&q=80'
  }
];

const TESTIMONIALS = [
  {
    quote: "GBHS Gulyal Kalan provided me with the solid science base that enabled me to score 1020+ in BISE Rawalpindi Matric. Today I am studying engineering at UET Taxila. Heartfelt gratitude to all our honorable teachers!",
    name: "Muhammad Rizwan",
    role: "Matric Board Topper • UET Taxila Engineer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
  },
  {
    quote: "The teachers at Gulyal Kalan High School treat students like their own children. The discipline, sports ground, and free government textbooks make it the top high school in our rural area of Tehsil Jand.",
    name: "Haji Malik Tariq",
    role: "Resident of Gulyal Kalan & Parent",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
  },
  {
    quote: "Attending GBHS Gulyal Kalan was the turning point in my career. The computer lab and English teachers helped me clear the armed forces ISSB test on my first attempt.",
    name: "Sub-Inspector Bilal Khan",
    role: "Alumnus (Batch 2018)",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
  }
];

// ==========================================================================
// School Application Engine
// ==========================================================================
class ApexSchoolApp {
  constructor() {
    this.init();
  }

  init() {
    this.bindEvents();
    this.renderAcademicTab('middle');
    this.renderFacilities('all');
    this.renderTestimonials();
    this.calculateFee();
    this.initNavbarScroll();
  }

  bindEvents() {
    // Academic Tabs
    document.querySelectorAll('.acad-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.acad-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const tab = btn.getAttribute('data-tab');
        this.renderAcademicTab(tab);
      });
    });

    // Facility Gallery Filter
    document.querySelectorAll('.filter-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        this.renderFacilities(filter);
      });
    });

    // Mobile Drawer Toggle
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const drawerClose = document.getElementById('drawerCloseBtn');
    const backdrop = document.getElementById('drawerBackdrop');

    if (mobileBtn) mobileBtn.addEventListener('click', () => this.openMobileDrawer());
    if (drawerClose) drawerClose.addEventListener('click', () => this.closeMobileDrawer());
    if (backdrop) backdrop.addEventListener('click', () => this.closeMobileDrawer());
  }

  initNavbarScroll() {
    const navbar = document.getElementById('mainHeader');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  openMobileDrawer() {
    document.getElementById('mobileDrawer').classList.add('show');
    document.getElementById('drawerBackdrop').classList.add('show');
  }

  closeMobileDrawer() {
    document.getElementById('mobileDrawer').classList.remove('show');
    document.getElementById('drawerBackdrop').classList.remove('show');
  }

  // ==========================================================================
  // Academics Tab Renderer
  // ==========================================================================
  renderAcademicTab(key) {
    const data = ACADEMIC_DIVISIONS[key] || ACADEMIC_DIVISIONS.middle;
    const container = document.getElementById('acadDisplay');

    container.innerHTML = `
      <div class="acad-grid-inner">
        <div>
          <span class="acad-tag-pill">${data.tag}</span>
          <h3 class="acad-title">${data.title}</h3>
          <p class="acad-summary">${data.summary}</p>
          <ul class="feature-check-list">
            ${data.features.map(f => `<li><i class="ri-checkbox-circle-fill"></i> <span>${f}</span></li>`).join('')}
          </ul>
          <div style="display: flex; gap: 12px;">
            <button class="btn btn-primary" onclick="schoolApp.openAdmissionModal()">
              <i class="ri-file-text-line"></i> Inquire for Admission
            </button>
            <button class="btn btn-outline" onclick="schoolApp.openTourModal()">
              <i class="ri-image-line"></i> View Facilities
            </button>
          </div>
        </div>
        <div class="acad-img-box">
          <img src="${data.image}" alt="${data.title}">
        </div>
      </div>
    `;
  }

  // ==========================================================================
  // Facilities Filter Renderer
  // ==========================================================================
  renderFacilities(filter) {
    const container = document.getElementById('facilitiesGrid');
    const filtered = filter === 'all' ? FACILITIES_DATA : FACILITIES_DATA.filter(f => f.category === filter);

    container.innerHTML = filtered.map(item => `
      <div class="facility-card">
        <div class="facility-img-wrap">
          <img src="${item.image}" alt="${item.title}">
          <span class="facility-tag">${item.tag}</span>
        </div>
        <div class="facility-body">
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // ==========================================================================
  // Government Welfare & Free Education Estimator
  // ==========================================================================
  calculateFee() {
    const grade = document.getElementById('feeGradeSelect').value;
    const discountVal = document.getElementById('feeDiscountSelect').value;

    let stipendText = 'Free Education (No Tuition Charged)';
    let studentGrant = 0;

    if (discountVal === 'stipend') {
      studentGrant = 1000;
      stipendText = 'Govt Monthly Stipend: +₨ 1,000 / month to student';
    } else if (discountVal === 'orphan') {
      studentGrant = 2000;
      stipendText = 'Bait-ul-Maal Welfare Assistance: +₨ 2,000 / month grant';
    } else if (discountVal === 'topper') {
      stipendText = 'Special Cash Award on BISE Board Position';
    }

    document.getElementById('calcTotalAmount').innerText = '0';

    const breakdownList = document.getElementById('feeBreakdownList');
    breakdownList.innerHTML = `
      <div class="breakdown-row">
        <span>Monthly Tuition Fee:</span>
        <strong style="color: #34d399;">100% FREE (Govt of Punjab)</strong>
      </div>
      <div class="breakdown-row">
        <span>Punjab Textbook Board Set:</span>
        <strong style="color: #34d399;">100% FREE (Provided on enrollment)</strong>
      </div>
      <div class="breakdown-row">
        <span>Science & Computer Lab Practical:</span>
        <strong style="color: #34d399;">FREE OF COST</strong>
      </div>
      ${studentGrant > 0 ? `
        <div class="breakdown-row" style="color: #fbbf24; font-weight: 700;">
          <span>Student Stipend Grant:</span>
          <strong>+₨ ${studentGrant.toLocaleString()} / month</strong>
        </div>
      ` : ''}
    `;
  }

  openAdmissionModalWithGrade() {
    const grade = document.getElementById('feeGradeSelect').value;
    const gradeMap = {
      primary: 'Class 1st to 5th',
      middle: 'Class 6th',
      matricBio: '9th Science (Biology)',
      matricComp: '9th Science (Computer)',
      arts: '9th Arts'
    };
    if (gradeMap[grade]) {
      document.getElementById('appGrade').value = gradeMap[grade];
    }
    this.openAdmissionModal();
  }

  // ==========================================================================
  // Testimonials / Alumni
  // ==========================================================================
  renderTestimonials() {
    const container = document.getElementById('testimonialGrid');

    container.innerHTML = TESTIMONIALS.map(t => `
      <div class="testimonial-card">
        <div class="t-stars">
          <i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i>
        </div>
        <blockquote class="t-quote">"${t.quote}"</blockquote>
        <div class="t-author">
          <img src="${t.avatar}" alt="${t.name}" class="t-avatar">
          <div>
            <span class="t-name">${t.name}</span>
            <span class="t-role">${t.role}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  // ==========================================================================
  // Form Handlers & LocalStorage
  // ==========================================================================
  handleAdmissionSubmit(e) {
    e.preventDefault();
    const student = document.getElementById('appStudentName').value.trim();
    const grade = document.getElementById('appGrade').value;
    const phone = document.getElementById('appPhone').value.trim();
    const refCode = 'GBHS-ADM-' + Math.floor(1000 + Math.random() * 9000);

    const appRecord = {
      refCode,
      student,
      grade,
      phone,
      school: 'GBHS Gulyal Kalan, Jand',
      date: new Date().toLocaleDateString('en-GB')
    };

    const existing = JSON.parse(localStorage.getItem('gbhs_admissions') || '[]');
    existing.unshift(appRecord);
    localStorage.setItem('gbhs_admissions', JSON.stringify(existing));

    this.closeModal('admissionModal');
    document.getElementById('admissionForm').reset();

    alert(`🎉 Admission Application Registered!\n\nReference Roll Number: ${refCode}\nCandidate Name: ${student}\nClass: ${grade}\nSchool: Govt Boys High School Gulyal Kalan, Jand\n\nPlease bring your B-Form and Father's CNIC to the school office for document verification and free textbook issuance.`);
    this.showToast(`Application #${refCode} saved!`, 'success');
  }

  handleContactSubmit(e) {
    e.preventDefault();
    const parent = document.getElementById('contactParent').value.trim();
    this.showToast(`Shukriya ${parent}! School office will contact you soon.`, 'success');
    document.getElementById('quickContactForm').reset();
  }

  handlePortalLogin(e) {
    e.preventDefault();
    const id = document.getElementById('portalId').value.trim();
    this.closeModal('portalModal');
    alert(`Welcome to GBHS Gulyal Kalan Student Portal!\n\nStudent Roll #: ${id}\nStudent Name: Muhammad Usman\nClass: 9th Science (Computer Group)\nAttendance: 96.5%\nTerm Assessment: 88% Marks (Grade A)`);
    this.showToast(`Logged into GBHS Portal`, 'success');
  }

  showAllNotices() {
    alert(`📢 GBHS Gulyal Kalan (Jand) Notice Board:\n\n1. Admissions for 6th Class and 9th Class (Bio/Computer) open for session 2026-27.\n2. Govt 100% Free Textbooks are distributed at the school office.\n3. Congratulations to School Cricket Team on winning the Tehsil Jand Tournament!\n4. Summer camp and science practical demonstrations schedule will be announced soon.`);
  }

  // ==========================================================================
  // Modals & Toast Helpers
  // ==========================================================================
  openAdmissionModal() {
    this.openModal('admissionModal');
  }

  openPortalModal() {
    this.openModal('portalModal');
  }

  openTourModal() {
    this.openModal('tourModal');
  }

  openModal(modalId) {
    const el = document.getElementById(modalId);
    if (el) el.classList.add('show');
  }

  closeModal(modalId) {
    const el = document.getElementById(modalId);
    if (el) el.classList.remove('show');
  }

  showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icon = type === 'success' ? 'ri-checkbox-circle-fill text-emerald' : 'ri-information-fill text-cyan';
    toast.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px;">
        <i class="${icon}" style="font-size: 1.25rem;"></i>
        <strong>${message}</strong>
      </div>
      <button style="background:none; border:none; color:inherit; cursor:pointer;" onclick="this.parentElement.remove()">
        <i class="ri-close-line"></i>
      </button>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
}

// Global App Instance
let schoolApp;
window.addEventListener('DOMContentLoaded', () => {
  schoolApp = new ApexSchoolApp();
});
