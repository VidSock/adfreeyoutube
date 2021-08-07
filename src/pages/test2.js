import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
// import { ProductListing } from "../components/product-listing"
// import GoBack from "../components/goBack"
import styled from "styled-components"
// import ShareSocial from '../components/share' 
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import { Seo } from "../components/seo"
// import { RiSendPlane2Line } from "react-icons/ri"

import SVG from "../../static/assets/crude-addiction.svg"
// import ScrollAnimation from 'react-animate-on-scroll'
// import GiftShop from "../components/giftshop"
import PhotoMenu from "../components/animated-photos-menu"
// import CommentBox from "../components/commentbox"
const CustomBox = styled.div`

@media (max-width: 48em) {

}

@media (min-width: 58em) {

}

`



// export const query = graphql`
//   query {
//     shopifyCollection(handle: { eq: "feature" }) {
//       products {
//         ...ProductCard
//       }
//     }
//   }
// `

       // export default function nftPage({ data: { products } }) {
  

        

        
        export default class IndexPage extends React.Component {
          
          state = {
            youtubelink: "",
          }
          handleInputChange = event => {
            const target = event.target
            const value = target.value
            const name = target.name
            this.setState({
              [name]: value,
            })
          }
          handleSubmit = event => {
            event.preventDefault()
            // alert(`Welcome ${this.state.youtubelink}!`)
          }

          
          render() {
            const Url = "https://www.youtube.com/embed/" + this.state.youtubelink + "?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=" + this.state.youtubelink + ""
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






 


      


{/* <ScrollAnimation className="signup" animateIn="bounceInUp" delay={18000} duration="5" initiallyVisible={false} animateOnce={false} animatePreScroll={true} style={{position:'absolute', top:'50vh',
right:'0', border:'0px solid yellow', justifyContent:'center', width:'100%', textAlign:'center', display:'flex', borderRadius:'12px', justifyContent:'center'}}>


<ScrollAnimation  animateIn="fadeOut" delay={28000} duration="1" initiallyVisible={true} animateOnce={true} animatePreScroll={true} >
  <GiftShop />
</ScrollAnimation>

</ScrollAnimation> */}



<div className="vidbox" style={{maxHeight:'90vh', overflow:'hidden'}}>
  
<div className="video-background" style={{width:'100vw'}}>




{/* <div style={{width:'100%', height:'100%',  position:'absolute', bottom:'0', left:'0', right:'0', zIndex:'0', backgroundSize:'cover'}}><StaticImage src="../img/trolley-test.png" alt="Twilightscapes" className="layer1" style={{height:'100vh'}} /></div> */}

  {/* <SVG style={{width:'100%', height:'100%', position:'absolute', bottom:'0', left:'0', right:'0', zIndex:'0', backgroundSize:'cover'}} /> */}

  <div className="video-foreground" style={{position:'absolute', zIndex:'-1'}}>
  <iframe id="youtube" className="video" width="100%" height="350" src={Url} frameBorder="0" allowFullScreen playsInline></iframe>
  </div>
  {/* zomZywCAPTA */}
  {/* YpcJ6jJlz6o */}
</div>
{/*  */}
</div>


{/* <div className="audio">
  <strong>FULL Experience:</strong> &nbsp; <audio controls="controls" autoplay="false" src={Audio} style={{}}> 
    Your browser does not support the HTML5 Audio element.
</audio>
</div> */}


<div className="fluff outerpanel" style={{borderLeft:'none', padding:'2rem 12%'}}>


<form onSubmit={this.handleSubmit}>
        <label>
          YouTube Url:
          <input
            type="text"
            name="youtubelink"
            value={this.state.youtubelink}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>



    <StaticImage src="../img/interactive-photo-banner-alien-egg-farm.jpg" alt="Twilightscapes" className="pop" />



 {/* <ShareSocial />
<br /><br /><br />

<div style={{textAlign:'center', fontSize:'2rem', padding:'0', margin:'10px 0 1rem 0'}}>WANT THE PHOTO? <br /> TWILIGHTCAPES ARE ONLY $29</div>

<div className="nft"><ProductListing products={data.shopifyCollection.products} />
</div>
<br /><br />


<div style={{padding:'5vh 5vw', borderTop:'0px solid', marginTop:'3rem'}}>
    <CommentBox />
 </div>
     */}












</div>
<PhotoMenu />
       </Layout>
     </CustomBox>
     </>

    )
    }
}
