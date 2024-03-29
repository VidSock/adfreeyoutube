/** @jsx jsx */
// import React from "react"
import { jsx } from "theme-ui"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"
// import { FaHandPointDown } from "react-icons/fa"
// import ScrollAnimation from 'react-animate-on-scroll'
import CommentBox from "../components/commentbox"
import { StaticImage } from "gatsby-plugin-image"
// import SVG from "../../static/assets/crude-addiction.svg"
import ReactPlayer from 'react-player/lazy'
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
import ShareSocial from '../components/share' 
import GoBack from "../components/goBack"
import { ImPlay } from "react-icons/im"
import TimeAgo from 'react-timeago'
const styles = {
  "article blockquote": {
    "background-color": "cardBg",
  },
  pagination: {
    a: {
      color: "inherit",
      "&.is-active": {
        color: "text",
      },
      "&:hover": {
        color: "inherit",
      },
    },
  },
}






const Pagination = props => (




  
  <div className="pagination -post" sx={styles.pagination}>
    <ul>
      {props.previous && props.previous.frontmatter.template === "blog-post" && (
        <li>
          <Link to={props.previous.frontmatter.slug} rel="prev">
            <p
              style={{
                color: "inherit",
              }}
            >
              <span className="icon -left">
                <RiArrowLeftLine />
              </span>{" "}
              Previous
            </p>
            <span className="page-title">
              {props.previous.frontmatter.title}
            </span>
          </Link>
        </li>
      )}
      {props.next && props.next.frontmatter.template === "blog-post" && (
        <li>
          <Link to={props.next.frontmatter.slug} rel="next">
            <p
              style={{
                color: "inherit",
              }}
            >
              Next{" "}
              <span className="icon -right">
                <RiArrowRightLine />
              </span>
            </p>
            <span className="page-title">{props.next.frontmatter.title}</span>
          </Link>
        </li>
      )}
    </ul>
  </div>
)



const Post = ({ data, pageContext }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark



  function refreshPage() {
    window.location.reload(true)
  }



  const YouTube = frontmatter.youtuber
  const Url = "https://www.youtube.com/embed/" + frontmatter.youtuber + "?controls=" + frontmatter.youtubecontrols + "&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;start=" + frontmatter.youtubestart + "&amp;end=" + frontmatter.youtubeend + "&amp;loop=1&amp;mute=" + frontmatter.youtubemute + "&amp;playsinline=1&amp;playlist=" + frontmatter.youtuber + ""
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
          playIcon={
            <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'5', top:'0', border:'0px solid red', width:'100vw', height:'100vh', background:'#111', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'columh', verticalAlign:'center', justifyContent:'center', paddingTop:'10%'}}>
              
      
      
      
        <div className="" style={{ textAlign:'center', animation:'fadeIn 3s'}}>
          <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
      
          <span style={{fontWeight:'bold', padding:'0 0 0 1rem', fontSize:'60px'}}>Click To Play</span>
          
          </div>
          </button>}
      
      
      
            light="../static/assets/transparent.png"
          />

      // <iframe title="AdFree YouTube" id="youtube2" className="blog-video" width="100%" height="400" src={Url} frameBorder="0" playsInline  style={{position:'absolute', top:'-15vh', left:'0', right:'0', width:'100vw', height:'122vh',   }} />

    )
  }



  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""

  // const OverlayImage = frontmatter.overlayImage
  //   ? frontmatter.overlayImage.childImageSharp.gatsbyImageData
  //   : ""

  const UnderlayImage = frontmatter.underlayImage
    ? frontmatter.underlayImage.childImageSharp.gatsbyImageData
    : ""


  const { previous, next } = pageContext

  let props = {
    previous,
    next,
  }

//   const Svg2 = frontmatter.overlayImage
 
//   if (!Svg2) {
    
//   }
//   else{
//     <AddSvg2 />
//   }
// function AddSvg2(){
//   const svg2Url = "../assets/" + frontmatter.overlayImage.relativePath + ""
//   return (
//     <object id="svg1" data={svg2Url} type="image/svg+xml" style={{position:'absolute', bottom:'0', overflow:'hidden', border:'0px solid red', zIndex:'3', width:'', height:'',  }} >You need a new browser</object>
//   )
// }


//   const Svg = frontmatter.svgImage
//   const svgZindex = frontmatter.svgzindex
//   if (!Svg) {
    
//   }
//   else{
//     <AddSvg />
//   }
// function AddSvg(){
//   const svgUrl = "../assets/" + frontmatter.svgImage.relativePath + ""
//   return (
//     <object className={svgZindex + " " + svgZindex} id="svg1" data={svgUrl} type="image/svg+xml" style={{position:'absolute', top:'', left:'0', right:'0', bottom:'', overflow:'hidden', border:'0px solid red', zIndex:'10', width:'100vw', height:'auto',  }} >You need a new browser</object>
//   )
// }

  return (
    
    <Layout className="page">
      <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
        image={"https://adfreeyt.com" + getSrc(frontmatter.featuredImage) }
        article={true}
      />


  
{/* <div className="video-background1" style={{position:'absolute', top:'0', right:'0', left:'0', zIndex:'0', height:'100vh', overflow:'hidden', display:'flex', flexDirection:'column', justifyContent:'flex-end'}}> */}



<div className='player-wrapper' style={{position:'relative', top:'0', zIndex:'0', height:'', overflow:'hidden', filter: 'drop-shadow(0 0 20px #000)' }}>



<div style={{display:'block', width:'100vw', height:'100vh', overflow:'hidden', position:'absolute', top:'0', display:''}}>
{Image ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image1 layer1"
              style={{height:'auto', width:'100vw', maxHeight:'100vh', position:'absolute', top:'0', zIndex:'0', objectFit:'contain', overflow:'hidden', border:'0px solid red !important'}}
            />
            
          ) : (

       
            <StaticImage src="../../static/default-og-image.jpg" alt="AdFree Default Image" style={{height:'auto', maxHeight:'60vh', position:'absolute', zIndex:'0', bottom:'0',border:'0px solid !important', objectFit:'contain',}} />
  
          )}
</div>






 

  {/* {Svg ? (
            <AddSvg />
       
          ) : (
            ""
          )} */}



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
              style={{height:'auto', width:'100vw', maxHeight:'100vh', position:'absolute', bottom:'-2px', zIndex:'2',
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


  {/* </div> */}





{/* <br />

<GoBack /> */}




      <article className="blog-post">
        <header>
          <section className="article-header" style={{textAlign:'center', margin:'0 4%', height:'auto', color:''}}>
            <h1>{frontmatter.title}</h1>
            {/* <time sx={{color: "muted"}}>{frontmatter.date}</time> */}
            <TimeAgo date={frontmatter.date} style={{color:'#fff !important'}} />
          </section>
        </header>



        {/* <svg id="erPaIC0hF4R1" viewBox="0 0 1600 1200" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><text id="erPaIC0hF4R2" dx="0" dy="0" font-family="&quot;Roboto&quot;" font-size="70" transform="matrix(1 0 0 1 403.511685 343.101198)" fill="rgb(0,0,0)" stroke="none" stroke-width="0"><tspan id="erPaIC0hF4R3" font-family="Roboto" font-size="70" stroke="none" stroke-width="0">{svgUrl}</tspan></text></svg> */}


      
        

        
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />      
        

        
      </article>



      <div style={{padding:'0 5vw', color:'inherit !important'}}>
      {(previous || next) && <Pagination {...props} />}
      </div>

   <ShareSocial />
      <div style={{padding:'1vh 5vw', borderTop:'0px solid', marginTop:'3rem', textAlign:'center', fontSize:'1.5rem'}}>
        Always love to read your comments!
<CommentBox />
     </div>
    
   
   <br />
   <GoBack />
   <br />
   <br />

    </Layout>




  )
}



export default Post

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
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

        underlayImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
