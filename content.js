(() => {
  console.log("hello world")
  const observer = new MutationObserver(() => {
    try {
      const user = document.getElementsByClassName("whitespace-pre-wrap");
      const system = document.getElementsByClassName("group/conversation-turn")

      let userMessages = [], system_res = [];

      if (user.length > 0 && system.length > 0) {
        // pushing usermessages in array
        for (let i = 0; i < user.length; i++) {
          userMessages.push(user[i].innerText);
          // console.log(userMessages[i].slice(0, 20) + "\n");
        }



        // pushing ai responses in array

        for (let i = 0; i < system.length; i++) {
          system_res.push(system[i].innerText);
          // console.log(system_res[i].slice(0, 20) + "\n");
        }
      }

      else {
        throw new Error("No Chats found")
      }
    }
    catch (error) {
      alert(error)
    }
    observer.disconnect();
  });


  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
})();