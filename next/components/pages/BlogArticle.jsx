import React from 'react'
import ScrollSpyContainer from "../components/ScrollSpyContainer.vue";
import CardCircularImage from "./../widgets/CardCircularImage.vue";
import TitleContentWithBackgroundImg from "./../widgets/TitleContentWithBackgroundImg.vue";
import AuthorInfo from "./../widgets/AuthorInfo.vue";

function BlogArticle() {
const  data =  {
   
      widget0:{
          title: 'Author: Stephon Huels',
          imgSrc: process.env.MIX_BASE_URL+"/assets/img/profile/1.jpg",
          content: "International Assurance Assistant",
      },
      widget1: {
          treeNodes:[{
              id: 'item-1',
              text: 'Introduction',
              nodes:[{
                  id: 'item-1-1',
                  text: 'Core concepts',
              },{
                  id: 'item-1-2',
                  text: 'Basic example',
                  nodes:[{
                      id: 'item-1-2-1',
                      text: 'How it works',
                  }]
              }]
          },{
              id: 'item-2',
              text: 'Guide lines',
          },{
              id: 'item-3',
              text: 'Related resources',
              nodes:[{
                  id: 'item-3-1',
                  text: 'Advanced use of concepts',
              },{
                  id: 'item-3-2',
                  text: 'Professional feedback',
              }]
          }],
          content:[{
              id: 'item-1',
              title: 'Introduction',
              text: "We employ the use of cookies. By accessing <span className='highlight preview_website_name'>CIA Website</span>, you agreed to use cookies in agreement with the <span className='highlight preview_company_name'>CIA</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies. We employ the use of cookies. By accessing <span className='highlight preview_website_name'>CIA Website</span>, you agreed to use cookies in agreement with the <span className='highlight preview_company_name'>CIA</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies. We employ the use of cookies. By accessing <span className='highlight preview_website_name'>CIA Website</span>, you agreed to use cookies in agreement with the <span className='highlight preview_company_name'>CIA</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.",
          },{
              id: 'item-1-1',
              title: 'Core concepts',
              text: "We employ the use of cookies. By accessing <span className='highlight preview_website_name'>CIA Website</span>, you agreed to use cookies in agreement with the <span className='highlight preview_company_name'>CIA</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies. We employ the use of cookies. By accessing <span className='highlight preview_website_name'>CIA Website</span>, you agreed to use cookies in agreement with the <span className='highlight preview_company_name'>CIA</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies. We employ the use of cookies. By accessing <span className='highlight preview_website_name'>CIA Website</span>, you agreed to use cookies in agreement with the <span className='highlight preview_company_name'>CIA</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.",
          },{
              id: 'item-1-2',
              title: 'Basic example',
              text: "We employ the use of cookies. By accessing <span className='highlight preview_website_name'>CIA Website</span>, you agreed to use cookies in agreement with the <span className='highlight preview_company_name'>CIA</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies. We employ the use of cookies. By accessing <span className='highlight preview_website_name'>CIA Website</span>, you agreed to use cookies in agreement with the <span className='highlight preview_company_name'>CIA</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies. We employ the use of cookies. By accessing <span className='highlight preview_website_name'>CIA Website</span>, you agreed to use cookies in agreement with the <span className='highlight preview_company_name'>CIA</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.",
          },{
              id: 'item-1-2-1',
              title: 'How it works',
              text: "We employ the use of cookies. By accessing <span className='highlight preview_website_name'>CIA Website</span>, you agreed to use cookies in agreement with the <span className='highlight preview_company_name'>CIA</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies. We employ the use of cookies. By accessing <span className='highlight preview_website_name'>CIA Website</span>, you agreed to use cookies in agreement with the <span className='highlight preview_company_name'>CIA</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies. We employ the use of cookies. By accessing <span className='highlight preview_website_name'>CIA Website</span>, you agreed to use cookies in agreement with the <span className='highlight preview_company_name'>CIA</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.",
          },{
              id: 'item-2',
              title: 'Guide lines',
              text: "We employ the use of cookies. By accessing <span className='highlight preview_website_name'>CIA Website</span>, you agreed to use cookies in agreement with the <span className='highlight preview_company_name'>CIA</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies. We employ the use of cookies. By accessing <span className='highlight preview_website_name'>CIA Website</span>, you agreed to use cookies in agreement with the <span className='highlight preview_company_name'>CIA</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies. We employ the use of cookies. By accessing <span className='highlight preview_website_name'>CIA Website</span>, you agreed to use cookies in agreement with the <span className='highlight preview_company_name'>CIA</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.",
          },{
              id: 'item-3',
              title: 'Related resources',
              text: "We employ the use of cookies. By accessing <span className='highlight preview_website_name'>CIA Website</span>, you agreed to use cookies in agreement with the <span className='highlight preview_company_name'>CIA</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies. We employ the use of cookies. By accessing <span className='highlight preview_website_name'>CIA Website</span>, you agreed to use cookies in agreement with the <span className='highlight preview_company_name'>CIA</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies. We employ the use of cookies. By accessing <span className='highlight preview_website_name'>CIA Website</span>, you agreed to use cookies in agreement with the <span className='highlight preview_company_name'>CIA</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.",
          },{
              id: 'item-3-1',
              title: 'Advanced use of concepts',
              text: "We employ the use of cookies. By accessing <span className='highlight preview_website_name'>CIA Website</span>, you agreed to use cookies in agreement with the <span className='highlight preview_company_name'>CIA</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies. We employ the use of cookies. By accessing <span className='highlight preview_website_name'>CIA Website</span>, you agreed to use cookies in agreement with the <span className='highlight preview_company_name'>CIA</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies. We employ the use of cookies. By accessing <span className='highlight preview_website_name'>CIA Website</span>, you agreed to use cookies in agreement with the <span className='highlight preview_company_name'>CIA</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.",
          },{
              id: 'item-3-2',
              title: 'Professional feedback',
              text: "We employ the use of cookies. By accessing <span className='highlight preview_website_name'>CIA Website</span>, you agreed to use cookies in agreement with the <span className='highlight preview_company_name'>CIA</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies. We employ the use of cookies. By accessing <span className='highlight preview_website_name'>CIA Website</span>, you agreed to use cookies in agreement with the <span className='highlight preview_company_name'>CIA</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies. We employ the use of cookies. By accessing <span className='highlight preview_website_name'>CIA Website</span>, you agreed to use cookies in agreement with the <span className='highlight preview_company_name'>CIA</span>'s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.",
          }]
      },
      widget2: {
        title: "Blog post title",
        content: "We take pride in providing highest-quality services for our clients allowing them to reach their goals. Our mission is to assist businesses in succeeding by providing the best digital solutions in a timely fashion for sustainable growth and increased revenues.",
        backgroundImgSrc:
          process.env.MIX_BASE_URL+"/assets/img/christina-wocintechchat-com-UcZcsHSp8o4-unsplash.jpg",
      },
      widget3: {
        name: "Author: M. Jhon Corl Balken",
        readTime: "Read time: 2 min",
        publicationDate: "Last modified: July 9, 2021",
        imgSrc: process.env.MIX_BASE_URL+"/assets/img/profile/1.jpg",
      }
    }
  return (
       <div style="padding: 4em">
        <div className="container-fluid">
        <div className="row py-3">
            <div className="col-ms-12 col-md-4 col-lg-3 align-self-end">
                <AuthorInfo data={data.widget3} />
            </div>
            <div className="col">
                <TitleContentWithBackgroundImg data={data.widget2}/>
            </div>
        </div>
    </div>
    <ScrollSpyContainer data={data.widget1}/>
    </div>
  )
}

export default BlogArticle