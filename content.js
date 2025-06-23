(() => {


  const observer = new MutationObserver(() => {
    try {
      const urlPath = window.location.pathname;

      // Only proceed if on a chat page (URL contains /c/)
      if (urlPath.split('/')[1] !== 'c' && urlPath.split('/')[1] !== 'popup.html') {
        console.log("Not a chat page.");

        alert("No Chats Found!");
        console.log(url)
        observer.disconnect(); // Stop watching if you know the page has no chats
        return;
      }

      const user = document.getElementsByClassName("whitespace-pre-wrap");
      const system = document.getElementsByClassName("group/conversation-turn");



      // ✅ If chats are found, process them
      let userMessages = [];
      let systemMessages = [];

      for (let i = 0; i < user.length; i++) {
        userMessages.push(user[i].innerText);
        console.log("User:", userMessages[i].slice(0, 20));
      }

      for (let i = 0; i < system.length; i++) {
        systemMessages.push(system[i].innerText);
        console.log("System:", systemMessages[i].slice(0, 20));
      }

      console.log("Collected Messages:", userMessages, systemMessages);
      observer.disconnect(); // ✅ Stop observing after successful capture

    } catch (e) {
      console.error("Error:", e);
      observer.disconnect();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
})();
