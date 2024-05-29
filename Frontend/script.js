document.addEventListener("DOMContentLoaded", () => {
  const channels = document.querySelectorAll(".channels ul li");
  const channelName = document.getElementById("channel-name");
  const channelDescription = document.getElementById("channel-description");
  const joinButton = document.getElementById("join-button");
  const exploreButton = document.getElementById("explore-button");
  const createCommunityButton = document.getElementById(
    "create-community-button"
  );
  const communityForm = document.getElementById("community-form");
  const exploreSection = document.getElementById("explore-section");
  const communityList = document.getElementById("community-list");
  const createCommunityForm = document.getElementById("create-community-form");
  const mainContent = document.querySelector(".main-content");
  const channelContent = document.querySelector(".channel-content");

  const sampleCommunities = [
    {
      name: "Photography Club",
      description: "Share and learn photography skills.",
    },
    { name: "Book Club", description: "Discuss and recommend books." },
    { name: "Gaming Group", description: "Play and discuss video games." },
    {
      name: "Cooking Enthusiasts",
      description: "Share recipes and cooking tips.",
    },
    {
      name: "Fitness Freaks",
      description: "Discuss workouts and healthy living.",
    },
    { name: "Music Lovers", description: "Share and discuss music." },
    {
      name: "Reading Club",
      description: "Join and discuss your favorite books.",
    },
    { name: "Food Club", description: "Explore and share food recipes." },
    { name: "Study Club", description: "Collaborate and study together." },
  ];

  const userCommunities = ["Study Club"];

  function renderCommunityList() {
    communityList.innerHTML = "";
    sampleCommunities.forEach((community) => {
      const communityDiv = document.createElement("div");
      communityDiv.textContent = community.name;
      communityDiv.addEventListener("click", () => {
        channelName.textContent = community.name;
        channelDescription.textContent = community.description;
        joinButton.style.display = "none";
        communityForm.classList.add("hidden");
        exploreSection.classList.add("hidden");
        mainContent.classList.add("show-content");
        channelContent.classList.remove("hidden");
      });
      communityList.appendChild(communityDiv);
    });
  }

  function showSection(section) {
    communityForm.classList.add("hidden");
    exploreSection.classList.add("hidden");
    channelContent.classList.add("hidden");
    section.classList.remove("hidden");
  }

  // Add user's communities to the sidebar
  const textChannelsUl = document.querySelector(".channels ul");
  userCommunities.forEach((community) => {
    const communityLi = document.createElement("li");
    communityLi.textContent = community;
    communityLi.addEventListener("click", () => {
      const communityDetails = sampleCommunities.find(
        (c) => c.name === community
      );
      channelName.textContent = communityDetails.name;
      channelDescription.textContent = communityDetails.description;
      joinButton.style.display = "none";
      showSection(channelContent);
    });
    textChannelsUl.appendChild(communityLi);
  });

  channels.forEach((channel) => {
    channel.addEventListener("click", () => {
      const channelText = channel.textContent.trim();
      channelName.textContent = channelText;
      channelDescription.textContent = `You are viewing the ${channelText} channel.`;
      joinButton.style.display = channelText.includes("Voice")
        ? "block"
        : "none";
      showSection(channelContent);
    });
  });

  joinButton.addEventListener("click", () => {
    alert(`Joining ${channelName.textContent}...`);
  });

  exploreButton.addEventListener("click", () => {
    renderCommunityList();
    showSection(exploreSection);
    mainContent.classList.add("show-content");
  });

  createCommunityButton.addEventListener("click", () => {
    showSection(communityForm);
    mainContent.classList.add("show-content");
  });

  createCommunityForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const communityNameInput = document.getElementById("community-name");
    const communityDescriptionInput = document.getElementById(
      "community-description"
    );
    const newCommunity = {
      name: communityNameInput.value,
      description: communityDescriptionInput.value,
    };
    sampleCommunities.push(newCommunity);
    communityNameInput.value = "";
    communityDescriptionInput.value = "";
    showSection(channelContent);
    mainContent.classList.add("show-content");
  });

  // Initial render of community list
  renderCommunityList();
});
