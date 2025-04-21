const tabs = document.querySelector("#tabs");
const tabsAnchors = tabs.querySelectorAll("a");
tabsAnchors.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let tabList = tabs.querySelectorAll("li");
    tabList.forEach((tab) => tab.classList.remove("tab-active"));
    e.currentTarget.parentElement.classList.add("tab-active");
    let href = e.currentTarget.getAttribute("href");
    let allContentTabs = document.querySelectorAll(".tab-content>div");
    if (href === "#all") {
      allContentTabs.forEach((tab) => {
        tab.classList.remove("hidden");
      });
    } else {
      let currentTab = document.querySelector(href);
      allContentTabs.forEach((tab) => {
        tab.classList.add("hidden");
      });
      currentTab.classList.remove("hidden");
    }
  });
});
