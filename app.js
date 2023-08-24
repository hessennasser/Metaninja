const form = document.getElementById('meta-tag-form');
const generatedTagsTextarea = document.getElementById('generated-tags');
const copyButton = document.getElementById('copy-button');

function generateMetaTags() {
    const metaTags = [];

    const title = document.getElementById('title').value;
    if (title) metaTags.push(`<title>${title}</title>`);

    const description = document.getElementById('description').value;
    if (description) metaTags.push(`<meta name="description" content="${description}">`);

    const image = document.getElementById('image').value;
    if (image) metaTags.push(`<meta property="og:image" content="${image}">`);

    const favicon = document.getElementById('favicon').value;
    if (favicon) metaTags.push(`<link rel="icon" type="image/png" href="${favicon}"/>`);

    const keywords = document.getElementById('keywords').value;
    if (keywords) metaTags.push(`<meta name="keywords" content="${keywords}">`);

    const author = document.getElementById('author').value;
    if (author) metaTags.push(`<meta name="author" content="${author}">`);

    const lang = document.getElementById('lang').value;
    if (lang) metaTags.push(`<meta http-equiv="content-language" content="${lang}">`);

    const charset = document.getElementById('charset').value;
    if (charset) metaTags.push(`<meta http-equiv="Content-Type" content="text/html; charset=${charset}">`);

    const robots = document.getElementById('robots').value;
    if (robots) metaTags.push(`<meta name="robots" content="${robots}">`);

    const canonical = document.getElementById('canonical').value;
    if (canonical) metaTags.push(`<link rel="canonical" href="${canonical}">`);

    const ogTitle = document.getElementById('ogTitle').value;
    if (ogTitle) metaTags.push(`<meta property="og:title" content="${ogTitle}">`);

    const twitterCard = document.getElementById('twitterCard').value;
    if (twitterCard) metaTags.push(`<meta name="twitter:card" content="${twitterCard}">`);

    const metaGeoRegion = document.getElementById('metaGeoRegion').value;
    if (metaGeoRegion) metaTags.push(`<meta name="geo.region" content="${metaGeoRegion}">`);

    const verificationGoogle = document.getElementById('verificationGoogle').value;
    if (verificationGoogle) metaTags.push(`<meta name="google-site-verification" content="${verificationGoogle}">`);

    const verificationMicrosoft = document.getElementById('verificationMicrosoft').value;
    if (verificationMicrosoft) metaTags.push(`<meta name="msvalidate.01" content="${verificationMicrosoft}">`);

    generatedTagsTextarea.value = metaTags.join('\n');
    if (generatedTagsTextarea.value.length > 1) {
        copyButton.disabled = false;
    } else {
        copyButton.disabled = true;
    }
}


form.addEventListener('submit', function (event) {
    event.preventDefault();
    generateMetaTags();
});

form.addEventListener("reset", () => {
    generatedTagsTextarea.value = ""
})

// Add an input change event listener for each input field
const inputFields = form.querySelectorAll('input, textarea, select');
inputFields.forEach(input => {
    input.addEventListener('input', generateMetaTags);
});

// copy button
if (generatedTagsTextarea.value.length < 1) {
    copyButton.disabled = true;
}

copyButton.addEventListener('click', function () {
    generatedTagsTextarea.select();
    navigator.clipboard.writeText(generatedTagsTextarea.value);
    copyButton.innerText = 'Copied!';
    setTimeout(() => {
        copyButton.innerText = 'Copy Generated Meta Tags';
    }, 3000);
});

// CopyWrite  
const copyWriteDate = document.getElementById("date");
const date = new Date; 
const year = date.getFullYear();
copyWriteDate.innerText = year;