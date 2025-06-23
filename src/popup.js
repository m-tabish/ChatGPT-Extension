document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("button");
    const p = document.getElementById("display");
    const user_ul = document.getElementById('user-ul')
    const response_ul = document.getElementById('response-ul')


    chrome.storage.local.get(["userMessages", "systemMessages"], ({ userMessages, systemMessages }) => {


        if (userMessages.length == 0 || systemMessages.length === 0) {
            user_ul.innerHTML = "<li class = 'text-light'>No user messages found</li>"
            response_ul.innerHTML = "<li class = 'text-light'>No responses found</li>"
        } else {

            // userMessages.forEach(msg => {
            //     const li = document.createElement('li')
            //     li.textContent = msg.slice(0, 20);
            //     li.classList.add("text-light");
            //     li.classList.add("border");
            //     li.classList.add("text-xs");
            //     user_ul.appendChild(li);
            // })

            systemMessages.forEach(msg => {
                const li = document.createElement('li')
                li.textContent = msg.slice(0, 20);
                li.classList.add("text-light");
                li.classList.add("border");
                li.classList.add("text-xs");
                response_ul.appendChild(li);
            })
        }


    })


});

