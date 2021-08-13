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
import { FaRegPlusSquare } from 'react-icons/fa';
import { IoShareOutline } from 'react-icons/io5';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { StaticImage } from "gatsby-plugin-image"
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
            isActive:false
          }
          handleInputChange = event => {
            const target = event.target
            const value = target.value
            const name = target.name
            this.setState({
              [name]: value,
            })
   
          
 
          }

        handleShow = ()=>{
            this.setState({
                isActive: true
            })
        }
      
        handleHide = () =>{
            this.setState({
                isActive: false
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




<div className="vidbox" style={{maxHeight:'100vh', overflow:'hidden'}}>
  <div className="video-background" style={{width:'100vw', overflow:'hidden'}}>
  <div className="video-foreground" style={{position:'absolute', zIndex:'-1', overflow:'hidden'}}>

{!this.state.isActive ? 
<>
<div className="" style={{position:'relative', top:'0', right:'0', left:'0', zIndex:'0', width:'100vw',}}>

<div className="homepage-bg">
<StaticImage src="../../static/assets/in-the-sky-with-diamonds.jpg" alt="Twilightscapes" />
</div>

  {/* <div className=" fluff" style={{padding:'0 12%', margin:'0 auto', textAlign:'center', position:'absolute', zIndex:'1', maxWidth:'800px', top:'30vh', color:'#fff'}}> */}

<div style={{position:'absolute', zIndex:'1', width:'100vw', top:'30vh', color:'#fff', display:'flex', justifyContent:'center'}}>

  <form className="youtubeform frontdrop" onSubmit={this.handleSubmit} style={{ padding:'2rem', border:'1px solid #333', borderRadius:'12px', height:'auto', width:'800px', margin:'0 auto'}}>
<p style={{fontSize:'18px', textAlign:'center'}}>Paste YouTube Link Here:
</p>
<input
            id=""
            type="text"
            name="youtubelink"
            value={this.state.youtubelink}
            onChange={this.handleShow}
            onInput={this.handleInputChange}
            onclick="paste(this)"
            placeholder="example: https://youtu.be/cVsQLlk-T0s"
            autoFocus
            className="youtubelinker"
          />
</form>
   
</div>

{/* </div> */}

</div>

</>
  : "" }



  {urlNoProtocol ? (
       <Iframer />
          ) : (
            ""
          )}
  </div>
</div>
{/*  */}
</div>

<div className="" style={{display:'flex', justifyContent:'center', width:'90%', margin:'0 auto',}}>
<form className="contact-form backdrop" onSubmit={this.handleSubmit} style={{margin:'0', padding:'0', display:'flex', width:'100%', justifyContent:'center', alignItems:'center'}}>
        <label htmlFor="youtubelink" style={{minWidth:'220px', width:'220px', textAlign:'right', border:'0px solid red', paddingRight:'20px'}}>
          Click "Share" and copy Url<br />Then paste Url here:</label>
          
          <input
            id=""
            type="text"
            name="youtubelink"
            value={this.state.youtubelink}
            onInput={this.handleInputChange}
            onChange={this.handleHide}
            onclick="paste(this)"
            placeholder="example: https://youtu.be/cVsQLlk-T0s"
            // autoFocus
            className="youtubelinker"
          />

      </form></div>











{/* </div> */}
{/* <PhotoMenu /> */}
       </Layout>
     </CustomBox>
     </>

    )
    }
}
