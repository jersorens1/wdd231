function updatePageVisitsCount() {
    const msToDays = 84600000;
    let lastVisit = window.localStorage.getItem("numDiscoverPage");
    const visitsDisplay = document.querySelector("#visits");
    // Calculate time difference
    let currentTime = new Date();
    let previousVisit = new Date(lastVisit);
    let timeDifference = currentTime.getTime() - previousVisit.getTime();
    let daysDifference = timeDifference / msToDays;
    console.log(daysDifference)
    if (lastVisit != null) {
      if (daysDifference > 0 && daysDifference < 1) {
        visitsDisplay.textContent = `Back So Soon? Awesome!`;
      } else if (Math.floor(daysDifference) === 1) {
        visitsDisplay.textContent = `You Last Visited ${Math.floor(
          daysDifference
        )} Days Ago`;
        console.log(daysDifference)
      }
    } else {
      visitsDisplay.textContent = `Hey there!`;
    }
    localStorage.setItem("numDiscoverPage", new Date());
  }
  updatePageVisitsCount();