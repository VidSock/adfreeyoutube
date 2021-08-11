/** @jsx jsx */
import { jsx } from "theme-ui"
// import { graphql, Link } from "gatsby"

// import { RiArrowRightSLine } from "react-icons/ri"
// import Intro2 from '../components/Intro2'
import { Helmet } from "react-helmet"
// import FeaturedGallery from "../components/featured-galleries"
// import Newsignup from "../components/newssign"
// import ScrollAnimation from 'react-animate-on-scroll'
// import ShareSocial from '../components/share' 
import styled from "styled-components"
// import { AiOutlinePicture } from "react-icons/ai"

// import Trumpy from '../../static/assets/trump-family-board.svg'
// import Gearbox from "../components/gearbox"
// import BlogListHome from "../components/blog-list-home"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"

const CustomBox = styled.div`


`








const HomePage = () => {
  



  return (
    <CustomBox style={{}}>
    <Layout>
    <Helmet>
  <body className="homepage" />
</Helmet>
<Seo
          title={`Photo Galleries`}
          description={`photography`}
          image={'/default-og-image.jpg'}
        />
      
     
        




    </Layout>
    </CustomBox>
  )
}

export default HomePage