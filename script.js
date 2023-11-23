// Service Program
const services_data = [
  {
    icon: "",
    title: "BlueSlag-Clone",
    description:
      "With our Performance Marketing services, we optimize your store to drive targeted traffic, increase conversions, and achieve higher sales. Experience measurable results and growth for your Shopify store",
    link: "#",
  },
  {
    icon: "",
    title: "BlueSlag-Clone",
    description:
      "With our Performance Marketing services, we optimize your store to drive targeted traffic, increase conversions, and achieve higher sales. Experience measurable results and growth for your Shopify store",
    link: "#",
  },
  {
    icon: "",
    title: "BlueSlag-Clone",
    description:
      "With our Performance Marketing services, we optimize your store to drive targeted traffic, increase conversions, and achieve higher sales. Experience measurable results and growth for your Shopify store",
    link: "#",
  },
  {
    icon: "",
    title: "BlueSlag-Clone",
    description:
      "With our Performance Marketing services, we optimize your store to drive targeted traffic, increase conversions, and achieve higher sales. Experience measurable results and growth for your Shopify store",
    link: "#",
  },
  {
    icon: "",
    title: "BlueSlag-Clone",
    description:
      "With our Performance Marketing services, we optimize your store to drive targeted traffic, increase conversions, and achieve higher sales. Experience measurable results and growth for your Shopify store",
    link: "#",
  },
  {
    icon: "",
    title: "BlueSlag-Clone",
    description:
      "With our Performance Marketing services, we optimize your store to drive targeted traffic, increase conversions, and achieve higher sales. Experience measurable results and growth for your Shopify store",
    link: "#",
  },
];

const services_container = document.querySelector(".services");

services_data.forEach((service) => {
  var service_box = document.createElement("div");
  service_box.classList = "triple-card service-tile";
  service_box.innerHTML =
    `
    <div class="icon">` +
    service.icon +
    `</div>
    <div class="title">` +
    service.title +
    `</div>
    <div class="description">
    ` +
    service.description +
    `
    </div>
    <a href="` +
    service.link +
    `" class="anchor-link">Read more-></a>
    `;
  services_container.appendChild(service_box);
});

// Succes Stories
const Success_Stories_data = [
  {
    img: "https://blueslag.com/wp-content/uploads/2023/06/Mockup-Twitter-post-mockup-Instagram-post-mockup-computer-phone-mockup-Song-playing-mockup-chat-mockup-browser-mockup.jpg",
    logo: "https://blueslag.com/wp-content/uploads/2022/05/commnsense-300x49.png",
    description:
      "I liked the approachability, professionalism, and commitment at Blueslag.",
    name: "Priyanka Putti",
    position: "Founder, CommnSens",
    link: "#",
  },
  {
    img: "https://blueslag.com/wp-content/uploads/2023/06/Mockup-Twitter-post-mockup-Instagram-post-mockup-computer-phone-mockup-Song-playing-mockup-chat-mockup-browser-mockup.jpg",
    logo: "https://blueslag.com/wp-content/uploads/2022/05/commnsense-300x49.png",
    description:
      "I liked the approachability, professionalism, and commitment at Blueslag.",
    name: "Priyanka Putti",
    position: "Founder, CommnSens",
    link: "#",
  },
  {
    img: "https://blueslag.com/wp-content/uploads/2023/06/Mockup-Twitter-post-mockup-Instagram-post-mockup-computer-phone-mockup-Song-playing-mockup-chat-mockup-browser-mockup.jpg",
    logo: "https://blueslag.com/wp-content/uploads/2022/05/commnsense-300x49.png",
    description:
      "I liked the approachability, professionalism, and commitment at Blueslag.",
    name: "Priyanka Putti",
    position: "Founder, CommnSens",
    link: "#",
  },
  {
    img: "https://blueslag.com/wp-content/uploads/2023/06/Mockup-Twitter-post-mockup-Instagram-post-mockup-computer-phone-mockup-Song-playing-mockup-chat-mockup-browser-mockup.jpg",
    logo: "https://blueslag.com/wp-content/uploads/2022/05/commnsense-300x49.png",
    description:
      "I liked the approachability, professionalism, and commitment at Blueslag.",
    name: "Priyanka Putti",
    position: "Founder, CommnSens",
    link: "#",
  },
];

const Success_Stories_container = document.querySelector(".Success-Stories");

Success_Stories_data.forEach((story) => {
  var Success_box = document.createElement("div");
  Success_box.classList = "dual-container";
  Success_box.innerHTML =
    `
  
  <img src="` +
    story.img +
    `" alt="` +
    story.name +
    `"/>
            <div class="success-storie-content">
              <img
                src="` +
    story.logo +
    `"
                alt=""
              />
              <p>
              ` +
    story.description +
    `
              </p>
              <div>
                <h3>` +
    story.name +
    `</h3>
                <p>` +
    story.position +
    `s</p>
              </div>
              <div class="btn-container">
                <a href="` +
    story.link +
    `">Click here</a>
              </div>
  `;
  Success_Stories_container.appendChild(Success_box)
});



ScrollReveal().reveal('.dual-container', { delay: 1000 });
ScrollReveal().reveal('.triple-card');
ScrollReveal({ reset: true });