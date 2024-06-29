document.addEventListener('DOMContentLoaded', fetchMembers);

async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displayRandomMembers(data.members);
    } catch (error) {
        console.error('Error fetching the member data:', error);
    }
}

function displayRandomMembers(members) {
// Filter members with membershipLevel 1 and 2
const eligibleMembers = members.filter(member => member.membershipLevel === "1" || member.membershipLevel === "2");
    
// Shuffle the filtered members array
const shuffledMembers = shuffleArray(eligibleMembers);

// Select the first 3 members from the shuffled array
const selectedMembers = shuffledMembers.slice(0, 3);

// Display the selected members
const memberContainer = document.getElementById('advertisements');
memberContainer.innerHTML = '';

selectedMembers.forEach(member => {
    const memberCard = document.createElement('div');
    memberCard.className = 'member-card';
    memberCard.innerHTML = `
            <h3>${member.name}</h3> 
            <h6>${member.tagLine}</h6>   
            <img src="${member.imageFileName}" alt="${member.name}">
            <p><strong>Email: </strong>${member.email}</p>
            <p><strong>Phone: </strong>${member.phoneNumber}</p>
            <p><strong>URL: </strong><a href="${member.websiteUrl}" target="_blank">${member.websiteUrl}</a></p>
        `;
        memberContainer.appendChild(memberCard);
    });
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}