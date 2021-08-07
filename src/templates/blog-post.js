/** @jsx jsx */
// import React, { useEffect } from 'react';
import { jsx } from "theme-ui"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"
// import DisqusComments from '../components/disqus'
import { FaHandPointDown } from "react-icons/fa"
import ScrollAnimation from 'react-animate-on-scroll'
import CommentBox from "../components/commentbox"
// import commentbox from 'commentbox.io'
import { StaticImage } from "gatsby-plugin-image"
import SVG from "../../static/assets/crude-addiction.svg"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
import ShareSocial from '../components/share' 
// import { commentBox } from "commentbox.io"
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

  const artImage = frontmatter.featuredImage
  ? frontmatter.featuredImage.gatsbyImageData
  : ""

  // useEffect(() =>{
  //   commentbox('5708736052068352-proj', {
  //     backgroundColor: null,  // default transparent
  //     textColor: "#222",  // default black
  //      subtextColor: "#222",  // default grey
  //  })
  // },[])

  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""
  const { previous, next } = pageContext

  let props = {
    previous,
    next,
  }


  const Url = "https://www.youtube.com/embed/" + frontmatter.youtuber + "?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=" + frontmatter.youtuber + ""


  return (
    
    <Layout className="page">
      <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
        // image={artImage}
        image={"https://twilightscapes.com" + getSrc(frontmatter.featuredImage) }
        article={true}
      />


<div className="vidbox" style={{maxHeight:'100vh', overflow:'hidden'}}>
  
<div className="video-background" style={{width:'100vw'}}>




<div style={{width:'100%', height:'100%',  position:'absolute', bottom:'0', left:'0', right:'0', zIndex:'0', backgroundSize:'cover'}}>
{/* {Image ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image layer1"
              style={{height:'100vh'}}
            />
          ) : (
            ""
          )} */}
</div>

  {/* <SVG style={{width:'100%', height:'100%', position:'absolute', bottom:'0', left:'0', right:'0', zIndex:'0', backgroundSize:'cover'}} /> */}

  <div className="video-foreground" style={{position:'absolute', zIndex:'-1'}}>

  {/* <iframe className="" width="100%" height="350" src="https://www.youtube.com/embed/{frontmatter.youtuber}?controls=0&amp;playsinline=1&amp;start=5270&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist={frontmatter.youtuber}" frameBorder="0" allowFullScreen playsInline></iframe> */}

  <iframe id="youtube" className="video" width="100%" height="350" src={Url} frameBorder="0" />
  </div>
  {/* zomZywCAPTA */}
  {/* YpcJ6jJlz6o */}
</div>
{/*  */}
</div>

{frontmatter.youtuber}





      <article className="blog-post">
        <header className="featured-banner">
         {/* {Image ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image layer1"
              style={{height:'100vh'}}
            />
          ) : (
            ""
          )} */}
          <section className="article-header" style={{textAlign:'left', margin:'0 4%', height:'auto'}}>
            <h1>{frontmatter.title}</h1>
            {/* <time sx={{color: "muted"}}>{frontmatter.date}</time> */}
          </section>
        </header>

        <ShareSocial />
        
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />      
        

      <ShareSocial />

      </article>
      <div style={{padding:'0 5vw'}}>
      {(previous || next) && <Pagination {...props} />}
      </div>

   
      <div style={{padding:'5vh 5vw', borderTop:'0px solid', marginTop:'3rem'}}>
     {/* {commentBox('5730512475783168-proj')} */}
{/* <div className="commentbox"></div> */}
{/* <CommentBox /> */}
{/* <div className="commentbox" /> */}
<CommentBox />
     </div>

{/* <h3 style={{textAlign:'center', fontSize:'160%', fontWeight:'bold', maxWidth:'700px', margin:'3rem  auto 0 auto'}}>Have a private question or comment?</h3>

<ScrollAnimation animateIn="bounce" duration={1} animateOnce={false} animatePreScroll={false} >
<FaHandPointDown className="bounce" style={{fontSize:'80px', textAlign:'center', width:'100%', margin:'1rem auto'}} />
</ScrollAnimation> */}
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
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
