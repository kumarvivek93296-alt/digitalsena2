// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255,255,255,0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255,255,255,0.95)';
        navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    }
});

// Dashboard Functions
function showDashboard(type) {
    const dashboardId = type === 'client' ? 'clientDashboard' : 'employeeDashboard';
    const modal = document.getElementById(dashboardId);
    
    // Dummy authentication logic
    const isAuthenticated = confirm(`Demo: ${type === 'client' ? 'Client' : 'Employee'} Login?\nClick OK to continue to dashboard.`);
    
    if (isAuthenticated) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeDashboard() {
    document.querySelectorAll('.dashboard-modal').forEach(modal => {
        modal.classList.remove('active');
    });
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.querySelectorAll('.dashboard-modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeDashboard();
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: contactForm.querySelector('input[type="text"]').value,
            email: contactForm.querySelector('input[type="email"]').value,
            phone: contactForm.querySelector('input[type="tel"]').value,
            message: contactForm.querySelector('textarea').value
        };
        
        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Show success message (demo)
        alert('Thank you for contacting us! We will get back to you soon.\n\nDemo: This is a dummy form submission.');
        contactForm.reset();
    });
}

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section:not(.hero)').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// Package cards hover effect
document.querySelectorAll('.package-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// WhatsApp button functionality
document.querySelector('.whatsapp-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    const phoneNumber = '919876543210'; // Replace with actual number
    const message = 'Hello Tricolor Trends! I would like to know more about your services.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
});

// Counter animation for stats
function animateCounter(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + '+';
    }, 16);
}

// Start counter animation when stats are in view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statCards = entry.target.querySelectorAll('.stat-card h3');
            statCards.forEach(card => {
                const value = parseInt(card.textContent);
                animateCounter(card, 0, value, 2000);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// Dropdown menu for mobile
document.querySelectorAll('.dropdown > a').forEach(dropdownToggle => {
    dropdownToggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dropdown = dropdownToggle.parentElement;
            dropdown.classList.toggle('active');
        }
    });
});

// Prevent default for login dropdown in mobile
document.querySelector('.login-btn').addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        e.preventDefault();
    }
});

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Tricolor Trends website loaded successfully!');
    
    // Check for hash in URL and scroll to section
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }
});
// ========== LOGIN SYSTEM ==========

// Dummy users database (in real app, this would be a backend)
const usersDB = [
  // Client accounts
  { email: 'client@test.com', password: 'client123', name: 'Rahul Sharma', role: 'client' },
  { email: 'rahul@gmail.com', password: 'rahul123', name: 'Rahul Client', role: 'client' },
  { email: 'priya@test.com', password: 'priya123', name: 'Priya Singh', role: 'client' },
  
  // Employee accounts
  { email: 'employee@test.com', password: 'worker123', name: 'Amit Kumar', role: 'employee' },
  { email: 'vikram@gmail.com', password: 'vikram123', name: 'Vikram Worker', role: 'employee' },
  { email: 'neha@test.com', password: 'neha123', name: 'Neha Patel', role: 'employee' },
  
  // Admin account
  { email: 'admin@tricolor.com', password: 'admin123', name: 'Admin User', role: 'admin' }
];

// Store registered users (localStorage mein save hoga)
let registeredUsers = [];

// Load registered users from localStorage
try {
  const saved = localStorage.getItem('tricolor_users');
  if (saved) {
    registeredUsers = JSON.parse(saved);
  }
} catch(e) {
  console.log('No saved users found');
}

// Function to save users
function saveUsers() {
  localStorage.setItem('tricolor_users', JSON.stringify(registeredUsers));
}

// ========== MODAL FUNCTIONS ==========

function openLoginModal() {
  document.getElementById('loginModal').classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeLoginModal() {
  document.getElementById('loginModal').classList.remove('active');
  document.body.style.overflow = 'auto';
  
  // Clear forms
  document.getElementById('loginEmail').value = '';
  document.getElementById('loginPassword').value = '';
  document.getElementById('signupName').value = '';
  document.getElementById('signupEmail').value = '';
  document.getElementById('signupPassword').value = '';
  
  // Clear messages
  document.getElementById('loginMessage').innerHTML = '';
  document.getElementById('signupMessage').innerHTML = '';
}

function showLoginTab() {
  document.getElementById('loginFormContainer').classList.add('active');
  document.getElementById('signupFormContainer').classList.remove('active');
  document.getElementById('loginTabBtn').classList.add('active');
  document.getElementById('signupTabBtn').classList.remove('active');
}

function showSignupTab() {
  document.getElementById('signupFormContainer').classList.add('active');
  document.getElementById('loginFormContainer').classList.remove('active');
  document.getElementById('signupTabBtn').classList.add('active');
  document.getElementById('loginTabBtn').classList.remove('active');
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('loginModal');
  if (event.target == modal) {
    closeLoginModal();
  }
}

// ========== AUTH FUNCTIONS ==========

function handleLogin() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const role = document.getElementById('loginRole').value;
  
  const messageEl = document.getElementById('loginMessage');
  
  // Validate
  if (!email || !password) {
    messageEl.style.color = 'red';
    messageEl.innerHTML = 'Please fill all fields';
    return;
  }
  
  // Check in dummy DB first
  let user = usersDB.find(u => u.email === email && u.password === password);
  
  // If not found, check registered users
  if (!user) {
    user = registeredUsers.find(u => u.email === email && u.password === password);
  }
  
  if (user) {
    // Check if role matches
    if (user.role !== role) {
      messageEl.style.color = 'red';
      messageEl.innerHTML = `Invalid role. You are registered as ${user.role}`;
      return;
    }
    
    // Login successful
    messageEl.style.color = 'green';
    messageEl.innerHTML = 'Login successful! Redirecting...';
    
    // Save session
    localStorage.setItem('currentUser', JSON.stringify({
      email: user.email,
      name: user.name,
      role: user.role
    }));
    
    // Close modal after 1 second
    setTimeout(() => {
      closeLoginModal();
      updateUIAfterLogin(user);
    }, 1000);
  } else {
    messageEl.style.color = 'red';
    messageEl.innerHTML = 'Invalid email or password';
  }
}

function handleSignup() {
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  const role = document.getElementById('signupRole').value;
  
  const messageEl = document.getElementById('signupMessage');
  
  // Validate
  if (!name || !email || !password) {
    messageEl.style.color = 'red';
    messageEl.innerHTML = 'Please fill all fields';
    return;
  }
  
  if (password.length < 6) {
    messageEl.style.color = 'red';
    messageEl.innerHTML = 'Password must be at least 6 characters';
    return;
  }
  
  // Check if user already exists
  const existingUser = usersDB.find(u => u.email === email) || 
                      registeredUsers.find(u => u.email === email);
  
  if (existingUser) {
    messageEl.style.color = 'red';
    messageEl.innerHTML = 'Email already registered';
    return;
  }
  
  // Create new user
  const newUser = {
    email: email,
    password: password,
    name: name,
    role: role
  };
  
  registeredUsers.push(newUser);
  saveUsers();
  
  messageEl.style.color = 'green';
  messageEl.innerHTML = 'Account created successfully! Please login.';
  
  // Clear signup form
  document.getElementById('signupName').value = '';
  document.getElementById('signupEmail').value = '';
  document.getElementById('signupPassword').value = '';
  
  // Switch to login tab after 2 seconds
  setTimeout(() => {
    showLoginTab();
  }, 2000);
}

function logout() {
  localStorage.removeItem('currentUser');
  
  // Hide user badge
  document.querySelector('.user-profile-badge')?.classList.remove('active');
  
  // Show login button again
  const loginBtn = document.querySelector('.login-btn');
  if (loginBtn) {
    loginBtn.style.display = 'inline-block';
  }
  
  // Close any open dashboards
  document.querySelectorAll('.dashboard-modal').forEach(modal => {
    modal.classList.remove('active');
  });
  
  // Show success message
  alert('Logged out successfully!');
  
  // Reload to reset state
  location.reload();
}

function updateUIAfterLogin(user) {
  // Hide login button
  const loginBtn = document.querySelector('.login-btn');
  if (loginBtn) {
    loginBtn.style.display = 'none';
  }
  
  // Show user profile badge
  const navbar = document.querySelector('.nav-menu');
  if (navbar && !document.querySelector('.user-profile-badge')) {
    const badge = document.createElement('li');
    badge.className = 'user-profile-badge active';
    badge.innerHTML = `
      <i class="fas fa-user-circle"></i>
      <span>${user.name.split(' ')[0]}</span>
      <button class="logout-btn" onclick="logout()">Logout</button>
    `;
    navbar.appendChild(badge);
  }
  
  // Show appropriate dashboard
  if (user.role === 'client') {
    showClientDashboard();
  } else if (user.role === 'employee') {
    showEmployeeDashboard();
  } else if (user.role === 'admin') {
    alert('Admin dashboard coming soon!');
  }
}

// Check if user is already logged in on page load
document.addEventListener('DOMContentLoaded', function() {
  const savedUser = localStorage.getItem('currentUser');
  if (savedUser) {
    try {
      const user = JSON.parse(savedUser);
      updateUIAfterLogin(user);
    } catch(e) {
      console.log('Error parsing saved user');
    }
  }
});

// Dashboard functions
function showClientDashboard() {
  const modal = document.getElementById('clientDashboard');
  if (modal) {
    // Add user info to dashboard
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    
    // Clear and add header
    const content = modal.querySelector('.dashboard-content');
    const existingHeader = content.querySelector('.dashboard-header');
    if (!existingHeader) {
      const header = document.createElement('div');
      header.className = 'dashboard-header';
      header.innerHTML = `
        <h2>Client Dashboard</h2>
        <div class="user-info">Welcome, ${user.name || 'Client'}!</div>
        <button class="dashboard-logout-btn" onclick="logout()">Logout</button>
      `;
      content.insertBefore(header, content.querySelector('.dashboard-grid'));
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function showEmployeeDashboard() {
  const modal = document.getElementById('employeeDashboard');
  if (modal) {
    // Add user info to dashboard
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    
    // Clear and add header
    const content = modal.querySelector('.dashboard-content');
    const existingHeader = content.querySelector('.dashboard-header');
    if (!existingHeader) {
      const header = document.createElement('div');
      header.className = 'dashboard-header';
      header.innerHTML = `
        <h2>Employee Dashboard</h2>
        <div class="user-info">Welcome, ${user.name || 'Employee'}!</div>
        <button class="dashboard-logout-btn" onclick="logout()">Logout</button>
      `;
      content.insertBefore(header, content.querySelector('.dashboard-grid'));
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

// Close dashboard function (update karo)
function closeDashboard() {
  document.querySelectorAll('.dashboard-modal').forEach(modal => {
    modal.classList.remove('active');
  });
  document.body.style.overflow = 'auto';
}

// Close modal on escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeLoginModal();
    closeDashboard();
  }
});

// Add click handlers for close buttons
document.addEventListener('DOMContentLoaded', function() {
  // Close buttons for dashboards
  document.querySelectorAll('.dashboard-modal .close').forEach(btn => {
    btn.addEventListener('click', closeDashboard);
  });
  
  // Close when clicking outside dashboard
  document.querySelectorAll('.dashboard-modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeDashboard();
      }
    });
  });
});

// ========== EXISTING CODE ==========
// Tumhara purana code yahan se continue hai...
// Mobile menu, animations, etc. wahi rahega

// Mobile Menu Toggle (already exists in your code)
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}

// Smooth scroll (already exists)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navbar scroll effect (already exists)
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(255,255,255,0.98)';
      navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
      navbar.style.background = 'rgba(255,255,255,0.95)';
      navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    }
  }
});

// Rest of your existing JavaScript code...
// (animations, counter, etc. jo
