function showTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
      content.classList.remove('active');
    });
  
    const activeContent = document.getElementById(tabId);
    if (activeContent) {
      activeContent.classList.add('active');
    }
  
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
      button.classList.remove('active');
    });
  
    const activeButton = Array.from(buttons).find(button => button.innerText.toLowerCase().includes(tabId.split('-')[0]));
    if (activeButton) {
      activeButton.classList.add('active');
    }
  }

document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('banner');

    function checkBannerVisibility() {
        const bannerRect = banner.getBoundingClientRect();
        const lastSectionRect = document.getElementById('last-section').getBoundingClientRect();

        if (bannerRect.top < window.innerHeight && lastSectionRect.bottom < bannerRect.top) {
            banner.classList.add('visible');
        } else {
            banner.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', checkBannerVisibility);
    checkBannerVisibility(); // Initial check
});

function showSidebar() {
    document.querySelector('.sidebar').classList.add('visible');
}

function hideSidebar() {
    document.querySelector('.sidebar').classList.remove('visible');
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".content").style.display = "block";
  }, 2000);
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var form = this;
    var formResponse = document.getElementById('formResponse');

    // Send the form data using fetch API
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(response) {
        if (response.ok) {
            // Success feedback
            form.style.border = '2px solid green';
            formResponse.innerHTML = '<p style="color: green; border: 2px solid green; background-color: white; padding: 1rem; text-align: center;">Message Sent</p>';
            formResponse.style.display = 'block';

            // Reset the form
            form.reset();
        } else {
            formResponse.innerHTML = '<p style="color: red;">Something went wrong. Please try again later.</p>';
            formResponse.style.display = 'block';
        }
    }).catch(function(error) {
        formResponse.innerHTML = '<p style="color: red;">Something went wrong. Please try again later.</p>';
        formResponse.style.display = 'block';
    });
});

