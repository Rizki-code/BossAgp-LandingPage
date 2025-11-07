  // Animate on scroll
    function checkScroll() {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible && !el.classList.contains('animated')) {
          el.classList.add('animated');
        }
      });
    }

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll);

    // Mobile menu toggle
    function toggleMenu() {
      const menu = document.getElementById('mobileMenu');
      menu.classList.toggle('active');
    }

    // Menu description toggle
    function toggleDescription(button) {
      const description = button.nextElementSibling;
      const icon = button.querySelector('svg');
      description.classList.toggle('active');
      icon.style.transform = description.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0)';
    }

    // Testimonial carousel
    let currentTestimonial = 0;
    const testimonialTrack = document.getElementById('testimonialTrack');
    const dots = document.querySelectorAll('.dot');

    function updateTestimonial() {
      testimonialTrack.style.transform = `translateX(-${currentTestimonial * 100}%)`;
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTestimonial);
      });
    }

    function nextTestimonial() {
      currentTestimonial = (currentTestimonial + 1) % 4;
      updateTestimonial();
    }

    function prevTestimonial() {
      currentTestimonial = (currentTestimonial - 1 + 4) % 4;
      updateTestimonial();
    }

    function goToTestimonial(index) {
      currentTestimonial = index;
      updateTestimonial();
    }

    // Auto-rotate testimonials
    setInterval(nextTestimonial, 5000);

    // Subscribe form
    async function handleSubscribe(e) {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const submitText = document.getElementById('submitText');
      const successMessage = document.getElementById('successMessage');

      submitText.textContent = 'Mengirim...';

      try {
        await fetch('https://script.google.com/macros/s/AKfycbyoTKJsZ-BuzNh3_xonsF1vfaRzideQFlBr6Og6jjfLRtIccsgQOBdu-qSXKhdSikLU/exec', {
          method: 'POST',
          body: JSON.stringify({ email }),
          headers: { 'Content-Type': 'application/json' }
        });
        
        successMessage.style.display = 'block';
        form.reset();
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 5000);
      } catch (error) {
        console.error('Gagal mengirim data:', error);
      } finally {
        submitText.textContent = 'Langganan';
      }
    }

    // Scroll to subscribe
    function scrollToSubscribe() {
      document.getElementById('subscribe').scrollIntoView({ behavior: 'smooth' });
    }

    // WhatsApp function
    function openWhatsApp() {
      const message = encodeURIComponent('Halo Boss AGP, saya pengunjung web, ingin menanyakan terkait pemesanan nasi kotak.');
      window.open(`https://wa.me/6281511393257?text=${message}`, '_blank');
    }

    // Download menu
    function downloadMenu() {
      const link = document.createElement('a');
      link.href = 'assets/menu.pdf';
      link.download = 'menu.pdf';
      link.click();
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });