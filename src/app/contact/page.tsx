import { Meteors } from "@/components/ui/meteors";


const page = () => {
  return (
    <div className='bg-gray-900 py-12 pt-36 min-h-screen '>
      

       <div className="relative w-full max-w-xl">
        <Meteors  number={100} />
       </div>

        <div className="flex flex-col  items-center">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-4xl mb-7">Contact Us</h2>
          <p className="text-gray-500 max-w-lg text-center">We're here to help with any questions about our courses, programs
            , or events. Reach out and let us know how we can assist you in your musical
            journey.
          </p>
          </div>

          <div className="flex flex-col w-lg mt-7">
            <input type="email" 
            placeholder="Your email address"
            className="outline-0 rounded-md mb-5 w-full h-12
             bg-black px-5 py-4"  />
            <textarea name="" id=""
            placeholder="Your message"
            className="outline-0 rounded-md mb-5 w-full h-72
             bg-black px-5 py-5"
            ></textarea>
          </div>
          
        </div>

      
      </div>
  )
}

export default page