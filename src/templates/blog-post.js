/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"
// import { FaHandPointDown } from "react-icons/fa"
// import ScrollAnimation from 'react-animate-on-scroll'
import CommentBox from "../components/commentbox"
import { StaticImage } from "gatsby-plugin-image"
import SVG from "../../static/assets/crude-addiction.svg"
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





  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""

    // const Image2 = frontmatter.featuredImage2
    // ? frontmatter.featuredImage2.childImageSharp.gatsbyImageData
    // : ""

  const { previous, next } = pageContext

  let props = {
    previous,
    next,
  }


  const Url = "https://www.youtube.com/embed/" + frontmatter.youtuber + "?controls=" + frontmatter.youtubecontrols + "&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;start=" + frontmatter.youtubestart + "&amp;end=" + frontmatter.youtubeend + "&amp;loop=1&amp;mute=" + frontmatter.youtubemute + "&amp;playlist=" + frontmatter.youtuber + ""

 
  const svgUrl = "../assets/" + frontmatter.featuredImage2.relativePath + ""

  const svgZindex = frontmatter.svgzindex


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


<div className="vidbox" style={{maxHeight:'100vh', overflow:'hidden'}}>
  
<div className="video-background" style={{width:'100vw'}}>


{/* <div className="featured-banner" style={{width:'100%', height:'100%',  position:'absolute', bottom:'0', left:'0', right:'0', zIndex:'2', backgroundSize:'cover'}} >
{Image2 ? (
            <GatsbyImage
              image={Image2}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image layer1"
              style={{height:'100vh'}}
            />
          ) : (
            <strong>NOPE!</strong>
          )}
</div> */}








<object className={svgZindex + " " + svgZindex} id="svg" data={svgUrl} type="image/svg+xml" style={{position:'absolute', bottom:'0', overflow:'hidden', border:'0px solid red', zIndex:'1',  }} ></object>




<div className="featured-banner" style={{width:'100%', height:'100%',  position:'absolute', bottom:'0', left:'0', right:'0', zIndex:'0', backgroundSize:'cover'}} >
{Image ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image layer1"
              style={{height:'100vh'}}
            />
          ) : (
            <StaticImage src="../../static/default-og-image.jpg" alt="AdFree Default Image" />
          )}
</div>




  <div className="video-foreground" style={{position:'absolute', zIndex:'0'}}>



  <iframe title="AdFree YouTube" id="youtube" className="video" width="100%" height="350" src={Url} frameBorder="0" playsInline />


  </div>
</div></div>


<br />
<GoBack />



      <article className="blog-post">
        <header>
          <section className="article-header" style={{textAlign:'center', margin:'0 4%', height:'auto'}}>
            <h1>{frontmatter.title}</h1>
            {/* <time sx={{color: "muted"}}>{frontmatter.date}</time> */}
            <TimeAgo date={frontmatter.date}/>
          </section>
        </header>


        
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
        date(formatString: "MMMM DD, YYYY")
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
        featuredImage2 {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
          relativePath
        }
      }
    }
  }
`
