import React from "react";
import eisfrauHeader from "../images/eisfrau-branding-header.jpg";
import eisfrauDetails from "../images/eisfrau_detail_slide.jpg";
import eisfrauSlide from "../images/Doku_Slides_02.png";

import { motion } from "framer-motion";

function Project02() {
  return (
    <motion.div
      className="projectContainer marginTopEis"
      initial={{
        opacity: 0,
        x: "-20vw",
        transition: { delay: 0.2, duration: 0.2, easings: "easeIn" },
      }}
      animate={{
        opacity: 1,
        x: "0vw",
        transition: { delay: 0.2, duration: 0.2, easings: "easeIn" },
      }}
      exit={{
        opacity: 0,
        x: window.innerWidth,
        transition: { duration: 0.2, easings: "easeOut" },
      }}
    >
      <img
        className="projectHeader_Eisfrau"
        src={eisfrauHeader}
        alt="Teaser for the Eisfrau Branding"
      />
      <h2>Corporate Identity</h2>
      <h1>Rebranding „Die Eisfrau“</h1>
      <p>
        In a course at FH Potsdam, we individually developed visual identities
        for the ice cream manufactory "Die Eisfrau". This family-owned business
        currently operates two ice cream parlors in Potsdam. Our task was to
        create a comprehensive corporate identity that reflects the values of
        the manufactory and works in a multimedia context.
      </p>
      <br></br>
      <h3>Conceptual preliminary work</h3>
      <p>
        From the initial client contact, the basis for the later design could be
        derived. Various characteristics and arguments became apparent and could
        be formed into a cohesive concept. They spoke of their connection to
        nature and how this was one of the reasons why Potsdam was a suitable
        location for them. One of their goals is to create a social space for
        families, particularly children, that promotes fun and interpersonal
        exchange during leisure time. They wanted to reward children for their
        independence in shopping by offering them a discount.
        <br></br>
        <br></br>
        We discovered that the Lisboas are overall very warm, open, and honest
        people who bring a positive and appreciative worldview. It seemed like
        they wanted to pursue their craft with passion. For them, sustainable
        and high-quality ice cream, offering delicate enjoyment, is a priority.
        They do not use stabilizers or other additives, use real fruits, and
        rely on local products for their production. They aim to keep everything
        as simple as possible, focus on the essentials, and not make a big fuss
        about their commitment to quality. I wanted to incorporate this human
        and down-to-earth attitude as a common thread in my design, in line with
        the values of "natural, honest, handmade."
        <br></br>
        <br></br>
        In this process, I drew inspiration from the models of "Corporate
        Identity" (Birkigt/Stadler/Funck, 1980) and "Identity 2.0" (Beyrow,
        2013) (Birkigt/Stadler/Funck, 1988) and "Identity-Based Brand
        Development" (Burmann/Halascovich/Hemmann, 2012).
      </p>
      <br></br>
      <div className="projects-img-container">
        <img
          className="eisfrauImg"
          src={eisfrauDetails}
          alt="first details for the Eisfrau Branding"
        />
      </div>
      <h3> Three Scoops of Natural, Honest, and Handmade Values</h3>
      <p>
        The fundamental idea of this design is to show three imperfectly round
        ice cream scoops from a top-down perspective, stacking them on top of
        each other. Each scoop represents one of the values: "natural, honest,
        handmade." By combining these three ingredients, the brand identity of
        Eisfrau is formed. Through a simple multiplication, they create a color
        palette of seven harmonious colors. While green represents
        sustainability, naturalness, and health, red signifies warmth and a
        sincerely welcoming atmosphere. To connect with the ice cream parlor, I
        chose a creamy almond color as the third color, giving it a pleasantly
        calm feeling and combining with the other colors to create a soft
        vanilla shade.
        <br></br>
        <br></br>
        To highlight the typography, I chose a warmer, very dark purple that
        forms a light-dark contrast against the background of the three stacked
        scoops.
        <br></br>
        <br></br>
        For the fonts, I selected two handwritten fonts that capture the
        craftsmanship and self-made aspect of the manufactory. Firstly, the
        Amatic for legible body text, and secondly, I opted for the Kaushan
        Script, which has a slight calligraphic touch and adds a more premium
        look. It served as the basis for the lettering in the logo. To harmonize
        it with the round shape of the scoops, I rounded all corners and
        connected the individual letters in a cursive manner. This gave the
        wordmark more character and evokes the image of melting ice. As a dot
        for the letter "i," I used a heart to symbolize the friendly and playful
        atmosphere of leisure time. Subconsciously, it also resembles the
        silhouette of a waffle cone.
        <br></br>
        <br></br>I incorporated the secondary tagline "100% Natur" (100%
        Natural) to emphasize the ice cream's exceptional quality and to enhance
        recognition from the previous corporate design. I also retained the
        broader strokes from the old ice cream cup design, rounding them
        slightly and not letting them extend fully to the edge, reminiscent of
        melting ice cream running down the cup. Overall, I aimed to keep the
        menu, product labels, info flyers, and everything else as simple and
        clear as possible, following the principle of "less is more," allowing
        everyone from young to old to comfortably choose and decide. This was
        further supported by adding a small legend for sorbet or milk ice cream
        on the price tags. For the kids, I designed stickers that they can take
        home or stick on their parents' phone cameras. These strengthen customer
        loyalty through interaction and serve as advertising media in other
        spaces.
      </p>
      <img
        className="eisfrauSlide"
        src={eisfrauSlide}
        alt="first details for the Eisfrau Branding"
      />

      <div className="spaceHolder"></div>
    </motion.div>
  );
}

export default Project02;
