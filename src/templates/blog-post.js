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


  const Url = "https://www.youtube.com/embed/" + frontmatter.youtuber + "?controls=" + frontmatter.youtubecontrols + "&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;start=" + frontmatter.youtubestart + "&amp;end=" + frontmatter.youtubeend + "&amp;loop=1&amp;mute=" + frontmatter.youtubemute + "&amp;playsinline=1&amp;playlist=" + frontmatter.youtuber + ""

 
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



        {/* <svg id="erPaIC0hF4R1" viewBox="0 0 1600 1200" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><text id="erPaIC0hF4R2" dx="0" dy="0" font-family="&quot;Roboto&quot;" font-size="70" transform="matrix(1 0 0 1 403.511685 343.101198)" fill="rgb(0,0,0)" stroke="none" stroke-width="0"><tspan id="erPaIC0hF4R3" font-family="Roboto" font-size="70" stroke="none" stroke-width="0">{svgUrl}</tspan></text></svg> */}


        


        
        {/* <svg width="100%" height="100%" viewBox="0 0 992 210" version="1.1" style={{fillRule:'evenodd', clipRule:'evenodd',strokeLinejoin:'round', strokeMiterlimit:'2'}}>
    <g transform="matrix(1,0,0,1,-1185,-151)">
        <g id="Artboard1" transform="matrix(0.852234,0,0,0.416667,1154.32,151)">
            <rect x="36" y="0" width="1164" height="504" style={{fill:'none'}} />
            <g transform="matrix(1.26109,0,0,1,-9.39919,0)">
                <g transform="matrix(1,0,0,1,-76.2974,-10.941)">
                    <g transform="matrix(15.219,0,0,37.8255,-2702.86,4095.41)">
                        <g transform="matrix(14.7645,0,0,14.7645,212,-95.9266)">
                            <path d="M0.046,-0.269C0.046,-0.35 0.066,-0.415 0.104,-0.464C0.142,-0.513 0.193,-0.538 0.255,-0.538C0.317,-0.538 0.366,-0.517 0.402,-0.475L0.402,-0.75L0.492,-0.75L0.492,-0L0.409,-0L0.405,-0.057C0.369,-0.012 0.318,0.01 0.254,0.01C0.193,0.01 0.143,-0.015 0.104,-0.065C0.066,-0.116 0.046,-0.181 0.046,-0.262L0.046,-0.269ZM0.137,-0.258C0.137,-0.198 0.149,-0.152 0.174,-0.118C0.199,-0.084 0.233,-0.067 0.276,-0.067C0.334,-0.067 0.375,-0.093 0.402,-0.144L0.402,-0.387C0.375,-0.437 0.333,-0.461 0.277,-0.461C0.233,-0.461 0.199,-0.444 0.174,-0.41C0.149,-0.376 0.137,-0.325 0.137,-0.258Z" style={{fill:'white', fillRule:'nonzero'}} />
                        </g>
                    </g>
                    <g transform="matrix(15.4609,0,0,39.8795,-2650.4,4292.44)">
                        <g transform="matrix(14.7645,0,0,14.7645,212,-95.9266)">
                            <path d="M0.475,-0.314L0.176,-0.314L0.176,-0L0.083,-0L0.083,-0.711L0.523,-0.711L0.523,-0.634L0.176,-0.634L0.176,-0.391L0.475,-0.391L0.475,-0.314Z" style={{fill:'white', fillRule:'nonzero'}} />
                        </g>
                        <g transform="matrix(14.7645,0,0,14.7645,218.615,-95.9266)">
                            <path d="M0.324,-0.447C0.31,-0.45 0.295,-0.451 0.279,-0.451C0.22,-0.451 0.18,-0.425 0.159,-0.375L0.159,-0L0.068,-0L0.068,-0.528L0.156,-0.528L0.158,-0.467C0.187,-0.514 0.229,-0.538 0.284,-0.538C0.301,-0.538 0.315,-0.536 0.324,-0.531L0.324,-0.447Z" style={{fill:'white', fillRule:'nonzero'}} />
                        </g>
                        <g transform="matrix(14.7645,0,0,14.7645,222.884,-95.9266)">
                            <path d="M0.288,0.01C0.216,0.01 0.158,-0.014 0.113,-0.061C0.068,-0.108 0.045,-0.171 0.045,-0.25L0.045,-0.266C0.045,-0.319 0.055,-0.365 0.075,-0.406C0.095,-0.448 0.123,-0.48 0.159,-0.503C0.195,-0.526 0.234,-0.538 0.276,-0.538C0.345,-0.538 0.398,-0.515 0.437,-0.47C0.475,-0.425 0.494,-0.36 0.494,-0.276L0.494,-0.238L0.136,-0.238C0.137,-0.186 0.152,-0.144 0.181,-0.112C0.211,-0.08 0.248,-0.064 0.292,-0.064C0.324,-0.064 0.351,-0.07 0.374,-0.083C0.396,-0.097 0.415,-0.114 0.432,-0.135L0.487,-0.092C0.443,-0.024 0.376,0.01 0.288,0.01ZM0.276,-0.464C0.24,-0.464 0.209,-0.451 0.185,-0.424C0.16,-0.398 0.145,-0.36 0.139,-0.313L0.403,-0.313L0.403,-0.319C0.401,-0.365 0.388,-0.401 0.366,-0.426C0.344,-0.451 0.314,-0.464 0.276,-0.464Z" style={{fill:'white', fillRule:'nonzero'}} />
                        </g>
                        <g transform="matrix(14.7645,0,0,14.7645,230.115,-95.9266)">
                            <path d="M0.288,0.01C0.216,0.01 0.158,-0.014 0.113,-0.061C0.068,-0.108 0.045,-0.171 0.045,-0.25L0.045,-0.266C0.045,-0.319 0.055,-0.365 0.075,-0.406C0.095,-0.448 0.123,-0.48 0.159,-0.503C0.195,-0.526 0.234,-0.538 0.276,-0.538C0.345,-0.538 0.398,-0.515 0.437,-0.47C0.475,-0.425 0.494,-0.36 0.494,-0.276L0.494,-0.238L0.136,-0.238C0.137,-0.186 0.152,-0.144 0.181,-0.112C0.211,-0.08 0.248,-0.064 0.292,-0.064C0.324,-0.064 0.351,-0.07 0.374,-0.083C0.396,-0.097 0.415,-0.114 0.432,-0.135L0.487,-0.092C0.443,-0.024 0.376,0.01 0.288,0.01ZM0.276,-0.464C0.24,-0.464 0.209,-0.451 0.185,-0.424C0.16,-0.398 0.145,-0.36 0.139,-0.313L0.403,-0.313L0.403,-0.319C0.401,-0.365 0.388,-0.401 0.366,-0.426C0.344,-0.451 0.314,-0.464 0.276,-0.464Z" style={{fill:'white', fillRule:'nonzero'}} />
                        </g>
                    </g>
                </g>
                <g transform="matrix(0.900289,0,0,2.23759,314.671,14.4)">
                    <g transform="matrix(266.667,0,0,266.667,0,200)">
                        <path d="M0.475,-0.186L0.177,-0.186L0.11,-0L0.014,-0L0.285,-0.711L0.367,-0.711L0.639,-0L0.543,-0L0.475,-0.186ZM0.206,-0.263L0.447,-0.263L0.326,-0.595L0.206,-0.263Z" style={{fill:'white', fillRule:'nonzero',}}/>
                    </g>
                </g>
            </g>
            <g transform="matrix(1.48244,0,0,3.03212,-1437.33,-1817.32)">
                <g transform="matrix(0.329316,0,0,0.282079,838.374,612.089)">
                    <path d="M1192,129.919C1192,58.215 1142.14,0 1080.72,0L599.283,0C537.864,0 488,58.215 488,129.919L488,366.081C488,437.785 537.864,496 599.283,496L1080.72,496C1142.14,496 1192,437.785 1192,366.081L1192,129.919Z" style={{fill:'rgb(255,0,23)', }}/>
                </g>
                <g transform="matrix(3.86646e-17,0.554881,-0.584612,3.08072e-17,1656.35,52.8099)">
                    <path d="M1134,876L1184,976L1084,976L1134,876Z" style={{fill:'white',}}/>
                </g>
            </g>
        </g>
    </g>
    
</svg> */}
        
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
