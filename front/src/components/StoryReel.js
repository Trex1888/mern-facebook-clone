import React from "react";
import "../styles/StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://tse4.mm.bing.net/th?id=OIP.DPtMIyhygBWj0MnvpYT8UwHaFD&pid=Api&P=0&w=232&h=159"
        profileSrc=" https://tse1.mm.bing.net/th?id=OIP.bQjltKRF5Hde1fOtHyNpaQHaGq&pid=Api&P=0&w=195&h=177"
        title="Lights"
      />
      <Story
        image="https://phish.com/wp-content/uploads/2018/12/webcast1.jpg"
        profileSrc="https://phish.com/wp-content/uploads/2020/07/19940708ph_great_woods_trey_narration_VHS_screenshot_02_crop.jpg"
        title="Ticket Stub"
      />
      <Story
        image="https://www.pollstar.com/Image/Photos/2018/09/5ca56a7d-e64c-4839-8856-7e0f9777939f-Phish.jpg"
        profileSrc="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/colorful-phish-logo-dan-sproul.jpg"
        title="Mike & Trey"
      />
      <Story
        image="https://i1.wp.com/liveforlivemusic.com/wp-content/uploads/2019/12/Screen-Shot-2019-12-30-at-9.54.17-AM.png?resize=740%2C390&ssl=1"
        profileSrc="https://phish.com/wp-content/uploads/2020/07/19940708ph_great_woods_trey_narration_VHS_screenshot_02_crop.jpg"
        title="New Years 2018"
      />
      <Story
        image="http://seminoletribune.org/wp-content/uploads/2020/01/phish1-2019.jpg"
        profileSrc="https://1.bp.blogspot.com/-0wv6Qm5sbBE/V3A88o-ojtI/AAAAAAAAQ-0/nGmrpOw2-84Je1p-vRGL2tKyVygP0yexACLcB/s1600/deer_ART.jpg"
        title="New Years 1999"
      />
    </div>
  );
}

export default StoryReel;
