const skillKeywords = ["Python", "JavaScript", "Digital Marketing", "Data Analysis"];

function detectSkills() {
  const pageText = document.body.innerText;
  const detectedSkills = skillKeywords.filter(skill => pageText.includes(skill));
  return detectedSkills;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getSkills") {
    sendResponse({ skills: detectSkills() });
  }
});