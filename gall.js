<!-- ፎቶዎችን ለማንቀሳቀስ የሚረዳ JavaScript ኮድ -->
// የእያንዳንዱን ሴክሽን የአሁኑን የፎቶ ኢንዴክስ (ቁጥር) መያዣ
const slideIndices = {
    home: 0,
    about: 0,
    services: 0,
    portfolio: 0,
    contact: 0
};

function moveSlide(sectionId, direction) {
    const slider = document.getElementById(`${sectionId}-slider`);
    const totalSlides = slider.querySelectorAll('.slide-img').length;
    
    // የአሁኑን ኢንዴክስ ማሻሻል
    slideIndices[sectionId] += direction;

    // ከቀኝ ጫፍ ካለፈ ወደ መጀመሪያው ይመልሰዋል
    if (slideIndices[sectionId] >= totalSlides) {
        slideIndices[sectionId] = 0;
    }
    // ከግራ ጫፍ ካለፈ ወደ መጨረሻው ፎቶ ይወስደዋል
    if (slideIndices[sectionId] < 0) {
        slideIndices[sectionId] = totalSlides - 1;
    }

    // ፎቶውን በስክሪኑ ላይ ማንሸራተት (Shift ማድረግ)
    const offset = -slideIndices[sectionId] * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

// በየ 4 ሰከንዱ ፎቶዎቹ ራሳቸው በራሳቸው እንዲቀያየሩ (Auto-play) ማድረግ ከፈለግክ ይህንን ተጠቀም፡
setInterval(() => { moveSlide('home', 1); }, 4000);
setInterval(() => { moveSlide('about', 1); }, 4500);
setInterval(() => { moveSlide('services', 1); }, 5000);
setInterval(() => { moveSlide('portfolio', 1); }, 5500);
setInterval(() => { moveSlide('contact', 1); }, 6000);