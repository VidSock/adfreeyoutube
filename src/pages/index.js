import React from "react"
// import { graphql } from "gatsby"
import { Layout } from "../components/layout"
// import { ProductListing } from "../components/product-listing"
// import GoBack from "../components/goBack"
import styled from "styled-components"
// import ShareSocial from '../components/share' 
// import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import { Seo } from "../components/seo"
// import { RiSendPlane2Line } from "react-icons/ri"
// import Install from "../components/install-discount"
// import SVG from "../../static/assets/crude-addiction.svg"
// import ScrollAnimation from 'react-animate-on-scroll'
// import GiftShop from "../components/giftshop"
// import PhotoMenu from "../components/animated-photos-menu"
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
            // alert(`Your Url ${this.state.youtubelink}!`)
            
          }


          
          render() {


            const Url = this.state.youtubelink

            const urlNoProtocol = Url.replace(/^.*((youtu.be\/))/i, "")
            const FinalUrl = "https://www.youtube.com/embed/" + urlNoProtocol + "?controls=1&amp;showinfo=1&amp;color=white&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=0&amp;playlist=" + urlNoProtocol + ""



            
            function Iframer() {
  
              return (
          
                <iframe title="AdFree YouTube" id="youtube" className="blog-video" width="100%" height="400" src={FinalUrl} frameBorder="0" playsInline />
              )
            }

            
            return (


<>


    <CustomBox style={{}}>
    <Layout className="thanks-page">
    <Helmet>
  <body className="homepage" />
</Helmet>

<Seo
          title={`Clicking Skip, Sucks`}
          description={`Sometimes you just need a break from the ads, that's why there is AdFree`}
          image={'https://adfreeyoutube.com/default-og-image.jpg'}
        />






 


      


{/* <ScrollAnimation className="signup" animateIn="bounceInUp" delay={18000} duration="5" initiallyVisible={false} animateOnce={false} animatePreScroll={true} style={{position:'absolute', top:'50vh',
right:'0', border:'0px solid yellow', justifyContent:'center', width:'100%', textAlign:'center', display:'flex', borderRadius:'12px', justifyContent:'center'}}>


<ScrollAnimation  animateIn="fadeOut" delay={28000} duration="1" initiallyVisible={true} animateOnce={true} animatePreScroll={true} >
  <GiftShop />
</ScrollAnimation>

</ScrollAnimation> */}



<div className="vidbox" style={{maxHeight:'90vh', overflow:'hidden'}}>
  
<div className="video-background" style={{width:'100vw', overflow:'hidden'}}>




{/* <div style={{width:'100%', height:'100%',  position:'absolute', bottom:'0', left:'0', right:'0', zIndex:'0', backgroundSize:'cover'}}><StaticImage src="../img/trolley-test.png" alt="Twilightscapes" className="layer1" style={{height:'100vh'}} /></div> */}

  {/* <SVG style={{width:'100%', height:'100%', position:'absolute', bottom:'0', left:'0', right:'0', zIndex:'0', backgroundSize:'cover'}} /> */}

  <div className="video-foreground" style={{position:'absolute', zIndex:'-1', overflow:'hidden'}}>

  



  {urlNoProtocol ? (
            
       <Iframer />
          ) : (
            "Todd was here"
          )}
          
  {/* <iframe title="AdFree YouTube" id="youtube2" className="video" width="100%" height="350" src={FinalUrl} frameBorder="0" allowFullScreen ></iframe> */}

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
<div style={{display:'flex', justifyContent:'center', width:'90%', margin:'0 auto',}}>
<form className="contact-form" onSubmit={this.handleSubmit} style={{margin:'0', padding:'0', display:'flex', width:'100%', justifyContent:'center', alignItems:'center'}}>
        <label htmlFor="youtubelink" style={{minWidth:'220px', width:'220px', textAlign:'right', border:'0px solid red', paddingRight:'20px'}}>
          Click "Share" and copy Url<br />Then paste Url here:</label>
          
          <input
            id="youtubelink"
            type="text"
            name="youtubelink"
            value={this.state.youtubelink}
            onChange={this.handleInputChange}
            onclick="paste(this)"
            // placeholder="example: https://youtu.be/cVsQLlk-T0s"
            autoFocus
          />
          
        {/* <button onClick={Iframer} /> */}
        {/* <button type="submit">Submit</button> */}
      </form></div>
{/* <div className="fluff outerpanel" style={{borderLeft:'none', padding:'2rem 12%'}}> */}






    {/* <StaticImage src="../img/interactive-photo-banner-alien-egg-farm.jpg" alt="Twilightscapes" className="pop" /> */}



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












{/* </div> */}
{/* <PhotoMenu /> */}
       </Layout>
     </CustomBox>
     </>

    )
    }
}
