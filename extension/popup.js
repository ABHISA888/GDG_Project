document.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "getSkills" }, (response) => {
      const skills = response?.skills || [];
      const suggestionsDiv = document.getElementById("suggestions");

      if (skills.length === 0) {
        suggestionsDiv.innerText = "No relevant skills found on this page.";
        return;
      }

      suggestionsDiv.innerHTML = "";
      skills.forEach(skill => {
        const skillElement = document.createElement("p");
        skillElement.innerHTML = `<strong>${skill}</strong> - <a href="https://skill-swap.com/search?q=${skill}" target="_blank">Find SkillSwap matches</a>`;
        suggestionsDiv.appendChild(skillElement);
      });
    });
  });
});