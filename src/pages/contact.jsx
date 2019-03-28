import React from 'react'
import StaggeredList from '../components/staggeredList'

const ContactPage = () => (
  <div>
    <div className="container header-margin-2">
      <div style={{ paddingBottom: '12em' }} />      
      <div class="row ">
        <div class="col-sm-6 offset-sm-3">
          <div class="info-form">
            <form
              action="https://formspree.io/karanbirsingh1161@gmail.com"
              // class="form-inline justify-content-center"
              method="POST"
            >
              <div class="form-group">
                <label className="label label-primary" for="inputName">
                  Name:
                </label>
                <input
                  id="inputName"
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="Your name"
                />
              </div>
              <div class="form-group">
                <label for="inputEmail">Email:</label>
                <input
                  id="inputEmail"
                  type="email"
                  name="_replyto"
                  class="form-control"
                  placeholder="YourEmail@example.com"
                />
              </div>
              <div class="form-group">
                <label for="inputSubject">Subject</label>
                <input
                  id="inputSubject"
                  type="text"
                  name="subject"
                  class="form-control"
                  placeholder=""
                />
              </div>
              <div class="form-group">
                <label for="inputMessage">Message</label>
                <textarea id="inputMessage" name="message" class="form-control" rows="4" />
              </div>
              <div className="text-center">
                <br />
                <input type="submit" class="btn btn-success" value="Send" />
              </div>
            </form>
            <div style={{ paddingBottom: '12em' }} />
          </div>
        </div>
      </div>
    </div>
    {/* <div className="row">
      <div className="col-md-8" />
      <form
        action="https://formspree.io/karanbirsingh1161@gmail.com"
        method="POST"
      >
        <input type="text" name="name" />
        <input type="email" name="_replyto" />
        <input type="submit" value="Send" />
      </form>
    </div> */}
  </div>
)

// function ContactPage() {
//   return (
//     <Layout>
//       <SEO
//         title="Contact"
//         keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
//       />

//       <form className="mx-auto md:w-1/2">
//         <p className="leading-loose mb-8">
//           Here is an example of a form built using Tailwind. Click{' '}
//           <a
//             href="https://tailwindcss.com/docs/examples/forms"
//             className="font-bold no-underline text-grey-darkest"
//           >
//             here
//           </a>{' '}
//           to see more examples.
//         </p>

//         <label
//           className="block font-bold mb-2 text-xs uppercase"
//           htmlFor="first-name"
//         >
//           First Name
//         </label>

//         <input
//           className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
//           id="first-name"
//           type="text"
//           placeholder="Bill"
//         />

//         <label
//           className="block font-bold mb-2 text-xs uppercase"
//           htmlFor="last-name"
//         >
//           Last Name
//         </label>

//         <input
//           className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
//           id="last-name"
//           type="text"
//           placeholder="Murray"
//         />

//         <label
//           className="block font-bold mb-2 text-xs uppercase"
//           htmlFor="message"
//         >
//           Message
//         </label>

//         <textarea
//           className="appearance-none bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
//           placeholder="Say something..."
//           rows="8"
//         />

//         <button className="border-b-4 border-grey-darker hover:border-grey-dark bg-grey-dark hover:bg-grey font-bold px-6 py-3 rounded text-sm text-white">
//           Submit
//         </button>
//       </form>
//     </Layout>
//   )
// }

export default ContactPage
