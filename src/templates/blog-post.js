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
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
import ShareSocial from '../components/share' 
import GoBack from "../components/goBack"
import TimeAgo from 'react-timeago'
const styles = {
  "article blockquote": {
    "background-color": "cardBg",
  },
  pagination: {
    a: {
      color: "muted",
      "&.is-active": {
        color: "text",
      },
      "&:hover": {
        color: "text",
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
              sx={{
                color: "muted",
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
              sx={{
                color: "muted",
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

      <iframe title="AdFree YouTube" id="youtube2" className="blog-video" width="100%" height="400" src={Url} frameBorder="0" playsInline  style={{position:'absolute', top:'-15vh', left:'0', right:'0', width:'100vw', height:'122vh',   }} />
    )
  }



  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""

  const OverlayImage = frontmatter.overlayImage
    ? frontmatter.overlayImage.childImageSharp.gatsbyImageData
    : ""


  const { previous, next } = pageContext

  let props = {
    previous,
    next,
  }


  const Svg = frontmatter.svgImage2
  const svgZindex = frontmatter.svgzindex
  if (!Svg) {
    
  }
  else{
    <AddSvg />
  }
function AddSvg(){
  const svgUrl = "../assets/" + frontmatter.svgImage2.relativePath + ""
  return (
    <object className={svgZindex + " " + svgZindex} id="svg1" data={svgUrl} type="image/svg+xml" style={{position:'absolute', overflow:'hidden', border:'0px solid red', zIndex:'3', width:'100vw', height:'100vh',  }} >You need a new browser</object>
  )
}

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

<div className="vidbox1" style={{overflow:'hidden', position:'relative', width:'100%', height:'90vh', borderBottom:'0px solid red', boxShadow:'0 0 20px red'}}>
  
<div className="video-background1" style={{position:'absolute', top:'0', right:'0', left:'0', zIndex:'0', height:'100vh', overflow:'hidden'}}>









{Image ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image layer1"
              style={{height:'auto', width:'100vw', maxHeight:'100vh', position:'absolute', zIndex:'0', objectFit:'cover'}}
            />
          ) : (
            // <div style={{display:'block', height:'30vh', marginTop:'-500px', border:'1px solid red'}}>sdsd</div>
            <StaticImage src="../../static/default-og-image.jpg" alt="AdFree Default Image" style={{height:'auto', maxHeight:'60vh', position:'absolute', zIndex:'1', bottom:'10vh'}} />
          )}







  <div className="video-foreground" style={{position:'absolute', zIndex:'0', top:'0', left:'0', right:'0', width:'100%', height:'fit-content'}}>

  {Svg ? (
            <AddSvg />
       
          ) : (
            ""
          )}


  {OverlayImage ? (
            <GatsbyImage
              image={OverlayImage}
              alt={frontmatter.title + " - image"}
              className="layer2"
              style={{height:'100vh', zIndex:'1', postion:'absolute', bottom:'0', left:'0', objectFit:'contain' }}
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


</div></div>


{/* <br />

<GoBack /> */}



      <article className="blog-post">
        <header>
          <section className="article-header" style={{textAlign:'center', margin:'0 4%', height:'auto'}}>
            <h1>{frontmatter.title}</h1>
            {/* <time sx={{color: "muted"}}>{frontmatter.date}</time> */}
            <TimeAgo date={frontmatter.date}/>
          </section>
        </header>



        {/* <svg id="erPaIC0hF4R1" viewBox="0 0 1600 1200" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><text id="erPaIC0hF4R2" dx="0" dy="0" font-family="&quot;Roboto&quot;" font-size="70" transform="matrix(1 0 0 1 403.511685 343.101198)" fill="rgb(0,0,0)" stroke="none" stroke-width="0"><tspan id="erPaIC0hF4R3" font-family="Roboto" font-size="70" stroke="none" stroke-width="0">{svgUrl}</tspan></text></svg> */}


      
        

        
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />      
        

        
      </article>



      <div style={{padding:'0 5vw'}}>
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
        svgImage2 {
          relativePath
        }
        overlayImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
