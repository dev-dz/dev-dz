// Dev-DZ Main JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle Logic
  const themeToggleBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';

  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeToggleBtn) themeToggleBtn.textContent = '☀️ المظهر الفاتح';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    if (themeToggleBtn) themeToggleBtn.textContent = '🌙 المظهر الداكن';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      let theme = document.documentElement.getAttribute('data-theme');
      if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggleBtn.textContent = '🌙 المظهر الداكن';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.textContent = '☀️ المظهر الفاتح';
      }
    });
  }
});

// JSON Formatter Tool
function formatJSON() {
  const input = document.getElementById('json-input').value;
  const output = document.getElementById('json-output');
  try {
    const parsed = JSON.parse(input);
    output.style.color = 'var(--text-color)';
    output.textContent = JSON.stringify(parsed, null, 2);
  } catch (e) {
    output.style.color = '#dc3545';
    output.textContent = 'خطأ في تنسيق JSON: ' + e.message;
  }
}

function minifyJSON() {
  const input = document.getElementById('json-input').value;
  const output = document.getElementById('json-output');
  try {
    const parsed = JSON.parse(input);
    output.style.color = 'var(--text-color)';
    output.textContent = JSON.stringify(parsed);
  } catch (e) {
    output.style.color = '#dc3545';
    output.textContent = 'خطأ في تنسيق JSON: ' + e.message;
  }
}

// Base64 Tool
function encodeBase64() {
  const input = document.getElementById('base64-input').value;
  const output = document.getElementById('base64-output');
  try {
    output.style.color = 'var(--text-color)';
    output.textContent = btoa(unescape(encodeURIComponent(input)));
  } catch (e) {
    output.style.color = '#dc3545';
    output.textContent = 'خطأ أثناء التشفير: ' + e.message;
  }
}

function decodeBase64() {
  const input = document.getElementById('base64-input').value;
  const output = document.getElementById('base64-output');
  try {
    output.style.color = 'var(--text-color)';
    output.textContent = decodeURIComponent(escape(atob(input)));
  } catch (e) {
    output.style.color = '#dc3545';
    output.textContent = 'خطأ أثناء فك التشفير: ' + e.message;
  }
}

// SHA-256 Hash Generator Tool
async function generateSHA256() {
  const input = document.getElementById('hash-input').value;
  const output = document.getElementById('hash-output');
  if (!input) {
    output.textContent = '';
    return;
  }
  try {
    const msgUint8 = new TextEncoder().encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    output.style.color = 'var(--text-color)';
    output.textContent = hashHex;
  } catch (e) {
    output.style.color = '#dc3545';
    output.textContent = 'خطأ أثناء توليد الهاش: ' + e.message;
  }
}
