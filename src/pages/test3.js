import React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
// import { ProductListing } from "../components/product-listing"
// import BlogListing from "../components/blog-list-home"
// import GoBack from "../components/goBack"
import styled from "styled-components"
// import ShareSocial from '../components/share' 
// import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import { Seo } from "../components/seo"
// import { RiSendPlane2Line } from "react-icons/ri"

import Fullscreen from "../components/FullScreen"
import Svg from "../../static/assets/starsandbars-1.svg"
import FullScreen from "../components/FullScreen"
// import ScrollAnimation from 'react-animate-on-scroll'
// import GiftShop from "../components/giftshop"
// import PhotoMenu from "../components/animated-photos-menu"
// import CommentBox from "../components/commentbox"
import ReactPlayer from "../components/react-player"
const CustomBox = styled.div`

@media (max-width: 48em) {

}

@media (min-width: 58em) {

}

`






// var elem = document.documentElement;
// function openFullscreen() {
//   if (elem.requestFullscreen) {
//     elem.requestFullscreen();
//   } else if (elem.webkitRequestFullscreen) { /* Safari */
//     elem.webkitRequestFullscreen();
//   } else if (elem.msRequestFullscreen) { /* IE11 */
//     elem.msRequestFullscreen();
//   }
// }


// function closeFullscreen() {
//   if (document.exitFullscreen) {
//     document.exitFullscreen();
//   } else if (document.webkitExitFullscreen) { /* Safari */
//     document.webkitExitFullscreen();
//   } else if (document.msExitFullscreen) { /* IE11 */
//     document.msExitFullscreen();
//   }
// }


// export const query = graphql`
//   query {
//     shopifyCollection(handle: { eq: "feature" }) {
//       products {
//         ...ProductCard
//       }
//     }
//   }
// `

      //  export default function nftPage({ data: { products } }) {

        export default class Test3 extends React.Component {
          state = {
            firstName: "",
            lastName: "",
          }
          handleInputChange = event => {
            const target = event.target
            const value = target.value
            const name = target.name
            this.setState({
              [name]: value,
            })
          }
          render() {
            return (
<>


    <CustomBox style={{}}>
    <Layout className="thanks-page">
    <Helmet>
  <body className="spaceport1" />
</Helmet>

<Seo
          title={`Time Trolley - Animated Photo Experience by Todd Lambert`}
          description={`Experiences are a new melding of visual, audio and interactive together in a new medium for art`}
          image={'https://twilightscapes.com/twilight-promo-time-trolley.jpg'}
        />






 


      

<ReactPlayer />

   














       </Layout>
     </CustomBox>
     </>

    )
    }
}
