import React from 'react'
import { useStaticQuery } from "gatsby"

import BackgroundSlider from 'gatsby-image-background-slider'

const Swapper = () => (


  <>

    <BackgroundSlider 
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile (filter: {sourceInstanceName: {eq: "backgrounds"}}){
            nodes {
              relativePath
              childImageSharp {
                fluid (maxWidth: 4000, quality: 100){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `)}
      initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
      transition={4} // transition duration between images
      duration={8} // how long an image is shown
      // specify images to include (and their order) according to `relativePath`
      images={["Sacrifice-Tonight.jpg", "DSC03010.jpg", "4B4A8256.jpg", "2010-05-15-fragments-297.jpg", "2010-12-26-cisco-5769.jpg", "DSC02372.jpg", "4B4A7672.jpg", "DSC03034.jpg", "life-in-the-fastlane.jpg", "night-court.jpg", "ray-of-light.jpg"]} 

      // pass down standard element props
      style={{
        transform: "rotate(-2deg) scale(.9)",
      }}           
    > 
      {/* Captions in sync with background images*/}
      <div>Woof</div>
      <div>Meow</div>
      <>{/* Giraffes don't talk; [they aren't real](https://chivomengro.com/2017/10/23/the-truth-comes-out-giraffes-are-a-hoax/) */}</>
      <a href="https://en.wikipedia.org/wiki/Tasmanian_devil#Conservation_status">
        I could use a hand
      </a>
      <div>I need to find better hobbies</div>
    </BackgroundSlider>
  </>
)

export default Swapper
