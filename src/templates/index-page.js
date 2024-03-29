/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { RiArrowRightSLine } from "react-icons/ri"
// import Intro from '../components/Intro'
import Intro2 from '../components/Intro2'
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import ReactPlayer from 'react-player/lazy'
import { ImPlay } from "react-icons/im"
import styled from "styled-components"
import { FaHandPointDown } from "react-icons/fa"
import ScrollAnimation from 'react-animate-on-scroll'
import Newsignup from "../components/newssign"
// import Trumpy from '../../static/assets/trump-family-board.svg'

import BlogListHome from "../components/blog-list-home"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
// import PhotoMenu from "../components/animated-photos-menu"
const CustomBox = styled.div`


`



export const pageQuery = graphql`
  query HomeQuery($id: String!) {
    site {
      siteMetadata {
        siteTitle
        siteTitleDefault
        siteUrl
        hrefLang
        siteDescription
        siteImage
        twitter
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "YYYY-MM-DD-HH-MM-SS")
        slug
        title
        description
        youtuber
        youtubestart
        youtubeend
        youtubemute
        youtubecontrols
        svgzindex
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        secondaryImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        underlayImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        cta {
          ctaText
          ctaLink
        }
        svgImage{
          relativePath
        }
      }
    }





    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: 3
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY-MM-DD-HH-MM-SS")
            slug
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 345, height: 260)
              }
            }
          }
        }
      }
    }
  }
`



const HomePage = ({ data }) => {
  const { markdownRemark, posts } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""

    const SecondaryImage = frontmatter.secondaryImage
    ? frontmatter.secondaryImage.childImageSharp.gatsbyImageData
    : ""
  
    const UnderlayImage = frontmatter.underlayImage
    ? frontmatter.underlayImage.childImageSharp.gatsbyImageData
    : ""

  const Svg = frontmatter.svgImage
  const svgZindex = frontmatter.svgzindex
  if (!Svg) {
    
  }
  else{
    <AddSvg />
  }
function AddSvg(){
  const svgUrl = "../assets/" + frontmatter.svgImage.relativePath + ""
  return (
    <object className={svgZindex + " " + svgZindex} id="svg1" data={svgUrl} type="image/svg+xml" style={{position:'absolute', top:'', left:'0', right:'0', bottom:'0', overflow:'hidden', border:'0px solid red', zIndex:'2', width:'100vw', height:'auto',  }} >You need a new browser</object>
  )
}



const YouTube = frontmatter.youtuber

  if (!YouTube) {

  }
  else{
    
    <Iframer />
  }

  function Iframer() {
    const Url = "https://www.youtube.com/embed/" + frontmatter.youtuber + "?controls=" + frontmatter.youtubecontrols + "&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;start=" + frontmatter.youtubestart + "&amp;end=" + frontmatter.youtubeend + "&amp;loop=1&amp;mute=" + frontmatter.youtubemute + "&amp;playsinline=1&amp;playlist=" + frontmatter.youtuber + ""
    return (

 
      <ReactPlayer
          className='react-player'
          url={Url}
          width="100%"
          height="100%"
     
 
          autoplay={true}
          background={true}
          loop
          playing
          playsinline
          muted={true}
          showPortrait
        //   playIcon={
        //     <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'5', top:'0', border:'0px solid red', width:'100vw', height:'100vh', background:'#111', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'columh', verticalAlign:'center', justifyContent:'center', paddingTop:'10%'}}>
              
      
      
      
        // <div className="" style={{ textAlign:'center', animation:'fadeIn 3s'}}>
        //   <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
      
        //   <span style={{fontWeight:'bold', padding:'0 0 0 1rem', fontSize:'60px'}}>Click To Play</span>
          
        //   </div>
        //   </button>}
      
      
      
        //     light="../static/assets/transparent.png"
          />

      // <iframe title="AdFree YouTube" id="youtube2" className="blog-video" width="100%" height="400" src={Url} frameBorder="0" playsInline  style={{position:'absolute', top:'-15vh', left:'0', right:'0', width:'100vw', height:'122vh',   }} />

    )
  }




  return (
    <CustomBox style={{}}>
    <Layout>
    <Helmet>
  <body className="homepage" />
</Helmet>
<Seo
          title={`Night Photo Galleries`}
          description={`Twilightscapes night photography`}
          image={'https://twilightscapes.com/default-og-image-blank.jpg'}
        />
      
      


      {/* <Intro /> */}


      





      <div className='player-wrapper' style={{position:'relative', top:'0', zIndex:'0', height:'', overflow:'hidden', filter: 'drop-shadow(0 0 20px #000)' }}>



     



<div style={{display:'block', width:'100vw', height:'100vh', overflow:'hidden', position:'absolute', top:'0', display:''}}>
{Image ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image1 layer1"
              style={{height:'auto', width:'100vw', maxHeight:'100vh', position:'absolute', top:'', zIndex:'0', objectFit:'contain', overflow:'hidden', border:'0px solid red !important'}}
            />
            
          ) : (

       
            <StaticImage src="../../static/default-og-image.jpg" alt="AdFree Default Image" style={{height:'auto', maxHeight:'60vh', position:'absolute', zIndex:'0', bottom:'0',border:'0px solid !important', objectFit:'contain',}} />
  
          )}
</div>






 

  {Svg ? (
            <AddSvg />
       
          ) : (
            ""
          )}



{/* {Svg2 ? (
            <AddSvg2 />
       
          ) : (
            ""
          )} */}

  {/* {OverlayImage ? (
            <GatsbyImage
              image={OverlayImage}
              alt={frontmatter.title + " - image"}
              className="layer2"
              style={{height:'100vh', zIndex:'1', postion:'absolute', bottom:'0', left:'0', objectFit:'contain' }}
            />
          ) : (
            ""
          )} */}

{UnderlayImage ? (
            <GatsbyImage
              image={UnderlayImage}
              alt={frontmatter.title + " - image"}
              className="mcboaty"
              style={{height:'auto', width:'100vw', maxHeight:'100vh', position:'absolute', bottom:'-2px', zIndex:'1',
             objectFit:'contain', border:'0px solid red !important'}}
            />
            
          ) : (
            ""
          )}


  
{YouTube ? (
            <Iframer />
       
          ) : (
            ""
          )}




      </div>






      <div className="flexbutt" style={{display:'flex', gap:'30px'}}>
      <div className="flexcheek seotext" style={{padding:'0 3% 3rem 3%',}}>


          <h1 className="title1 neonText">{frontmatter.title}</h1>
          <p
            className="tagline1"
            sx={{
              color: "",
            }}
          >
            {frontmatter.tagline}
          </p>

          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: html }}
          />
  
          <Link
            to={frontmatter.cta.ctaLink}
            className="actionJackson txtshadow"
            style={{
              cursor:'pointer',
              width:'70%',
              margin:'0 auto'

            }}
          >
            {frontmatter.cta.ctaText}
            <span className="icon -right">
              <RiArrowRightSLine />
            </span>
          </Link>


          


      </div>



        


 <div className="flexcheek" style={{position:'relative', overflow:'hidden'}}>
 
 


 <div style={{margin:'3% 5% 3% 3%', zIndex:'-1', borderRadius:'12px', overflow:'hidden'}}>
   
 <ScrollAnimation className="signup" animateIn="bounceInUp" delay={950} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'absolute',
top:'50vh', border:'0px solid yellow', justifyContent:'', width:'100%', zIndex:'2', textAlign:'center', display:'flex', borderRadius:'12px'}}>
  <Newsignup />
</ScrollAnimation>

          {SecondaryImage ? (
            <GatsbyImage
              image={SecondaryImage}
              alt={frontmatter.title + " - Featured image"}
              className="post-card"
              style={{border:'1px solid transparent',  borderRadius:'12px !important' }}
            />
          ) : (
            ""
          )}


<div className="abcontent" style={{position:'absolute', height:'', width:'100%', top:'50px', right:'0', display:'flex', justifyContent:'center', flexDirection:'column', zIndex:'0'}}>

<ScrollAnimation animateIn="bounceInDown" delay={1350} offset={0}  initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'0px', paddingRight:'10%', border:'0px solid yellow', zIndex:'1'}}>
<h2
  className="letter normal txtshadow-header hit-the-floor"
  style={{
    color: '#fff',
    fontSize: '60px',
   position: 'relative',
//            top: '100px',
//            right: '1%',
//            backgroundColor: '#ff0000',
    textAlign: 'right', 
    float: 'none',
    margin:'0',
    padding:'0',
  }}
>
  Follow me
</h2>
</ScrollAnimation>


<ScrollAnimation animateIn="bounceInRight" delay={1400} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'', paddingRight:'10%', border:'0px solid red', zIndex:'0'}}>
<h2
  className="letter narrow txtshadow mobile-txt"
  style={{
   fontSize:'40px',
   color: 'white',
   position: 'relative',
    textAlign: 'right', 
    margin:'0',
    padding:'0',
  }}
>
  into the
</h2>
</ScrollAnimation>


<ScrollAnimation animateIn="bounceInUp" delay={1450} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'', paddingRight:'10%', border:'0px solid blue', zIndex:'1'}}>
<h2
  className="letter narrow txtshadow mobile-txt"
  style={{
   fontSize:'80px',
   color: 'white',
   position: 'relative',
//            top: '230px',
    textAlign: 'right',
    textTransform: 'uppercase', 
    margin:'0',
    padding:'0',
  }}
>
  Night
</h2>
</ScrollAnimation>



</div>
</div>

      
      







      </div> 
</div>

        


        {/* <PhotoMenu /> */}


      <div style={{padding:'0 3%'}}>
        <BlogListHome data={posts} />
        </div>




      
      



<ScrollAnimation animateIn="bounce" duration={1} animateOnce={false} animatePreScroll={false} >
<FaHandPointDown className="bounce" style={{fontSize:'80px', textAlign:'center', width:'100%', margin:'1rem auto'}} />
</ScrollAnimation>

    </Layout>
    </CustomBox>
  )
}

export default HomePage