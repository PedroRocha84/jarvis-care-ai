export function render() {

    const main = document.getElementById('main-content');

    const heroSection = document.createElement('div');
    heroSection.className = 'hero-section';

    const heroContent = document.createElement('div');
    heroContent.className = 'hero-content';

    const heading1 = document.createElement('h1');
    heading1.textContent = 'CARE AI';
    heroContent.appendChild(heading1);

    const heading2 = document.createElement('h2');
    heading2.textContent = 'Your Personal Health Companion';
    heroContent.appendChild(heading2);

    const heroDescription = document.createElement('p');
    heroDescription.className = 'hero-description';
    heroDescription.textContent = 'AI-powered healthcare solutions for better well-being';
    heroContent.appendChild(heroDescription);

    const ctaButtons = document.createElement('div');
    ctaButtons.className = 'cta-buttons';

    const signInBtn = document.createElement('a');
    signInBtn.href = '/signin';
    signInBtn.className = 'btn btn-primary';
    signInBtn.textContent = 'Sign In';
    ctaButtons.appendChild(signInBtn);

    const learnMoreBtn = document.createElement('a');
    learnMoreBtn.href = '#learn-more';
    learnMoreBtn.className = 'btn btn-secondary';
    learnMoreBtn.textContent = 'Learn More';
    ctaButtons.appendChild(learnMoreBtn);

    heroContent.appendChild(ctaButtons);

    const heroImage = document.createElement('div');
    heroImage.className = 'hero-image';

    const image = document.createElement('img');
    image.src = '/images/home-logo.jpeg';
    image.alt = 'Image home';
    heroImage.appendChild(image);

    heroSection.appendChild(heroContent);
    heroSection.appendChild(heroImage);

    const featuresSection = document.createElement('div');
    featuresSection.className = 'features-section';
    featuresSection.id = 'learn-more';

    const featuresHeading = document.createElement('h3');
    featuresHeading.textContent = 'How CARE AI Helps You';
    featuresSection.appendChild(featuresHeading);

    const featureCards = document.createElement('div');
    featureCards.className = 'feature-cards';

    const featureCard1 = document.createElement('div');
    featureCard1.className = 'feature-card';
    const icon1 = document.createElement('i');
    icon1.className = 'fas fa-calendar-check';
    const cardTitle1 = document.createElement('h4');
    cardTitle1.textContent = 'Appointment Management';
    const cardDesc1 = document.createElement('p');
    cardDesc1.textContent = 'Easily schedule and track your medical appointments';
    featureCard1.append(icon1, cardTitle1, cardDesc1);

    const featureCard2 = document.createElement('div');
    featureCard2.className = 'feature-card';
    const icon2 = document.createElement('i');
    icon2.className = 'fas fa-heartbeat';
    const cardTitle2 = document.createElement('h4');
    cardTitle2.textContent = 'Health Monitoring';
    const cardDesc2 = document.createElement('p');
    cardDesc2.textContent = 'Track your vital signs and health metrics';
    featureCard2.append(icon2, cardTitle2, cardDesc2);

    const featureCard3 = document.createElement('div');
    featureCard3.className = 'feature-card';
    const icon3 = document.createElement('i');
    icon3.className = 'fas fa-robot';
    const cardTitle3 = document.createElement('h4');
    cardTitle3.textContent = 'AI Assistance';
    const cardDesc3 = document.createElement('p');
    cardDesc3.textContent = 'Get personalized health recommendations';
    featureCard3.append(icon3, cardTitle3, cardDesc3);

    featureCards.append(featureCard1, featureCard2, featureCard3);
    featuresSection.appendChild(featureCards);

    const awarenessSection = document.createElement('div');
    awarenessSection.className = 'awareness-section';

    const awarenessContent = document.createElement('div');
    awarenessContent.className = 'awareness-content';

    const awarenessHeading = document.createElement('h3');
    awarenessHeading.textContent = 'Health Awareness';
    const awarenessTitle = document.createElement('h2');
    awarenessTitle.textContent = 'Early Detection Saves Lives';
    const awarenessDesc = document.createElement('p');
    awarenessDesc.textContent = 'Learn how to monitor your health and recognize early warning signs with our AI-powered tools.';
    const awarenessLink = document.createElement('a');
    awarenessLink.href = '/signin';
    awarenessLink.className = 'btn btn-outline';
    awarenessLink.textContent = 'Check Your Health';

    awarenessContent.append(awarenessHeading, awarenessTitle, awarenessDesc, awarenessLink);
    awarenessSection.appendChild(awarenessContent);

    main.appendChild(heroSection);
    main.appendChild(featuresSection);
    main.appendChild(awarenessSection);

}