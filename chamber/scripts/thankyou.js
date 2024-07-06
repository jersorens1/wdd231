const currentUrl = window.location.href;
const everything = currentUrl.split('?')

let formData = everything[1].split('&')

function show(cup) {
    formData.forEach((element) => {
        if (element.startsWith(cup)) {
            result = element.split('=')[1].replace("%40", "@")
        }
    })
    return(result)
};

const encodedDateStr = show('timestamp');
const decodedDateStr = decodeURIComponent(encodedDateStr);
const dateObj = new Date(decodedDateStr);
const formattedDate = dateObj.toLocaleString();

const showInfo = document.querySelector('#results')
showInfo.innerHTML = `
<p><strong>Membership Level:</strong> ${show("membership-level")}</p>
<p><strong>Member:</strong> ${show("first")} ${show("last")}</p>
<p><strong>Title:</strong> ${show("org-title")} at ${show("organization")}</p>
<p><strong>Your Phone:</strong> ${show("phone")}</p>
<p><strong>Your Email:</strong> <a href="mailto:${show("email")}">${show("email")}</p>

<p><strong>Time Submitted:</strong> ${formattedDate}</p>`