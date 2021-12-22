function clearHomePage() {
  const homePageContainer = document.querySelector(
    'ytd-browse[page-subtype="home"]'
  );
  homePageContainer.innerHTML = "";
  window.location.replace("https://www.youtube.com/feed/subscriptions");
}
clearHomePage();
