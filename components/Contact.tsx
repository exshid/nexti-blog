//@ts-nocheck
interface Props {
    close: any;
  }
  
const Contact: React.FC<Props> = ({close}) => {
return <div className="relative w-full h-full flex justify-center md:h-auto">
    <div className="relative rounded-lg w-full lg:w-1/2">
        <div className="flex items-start justify-between py-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Contact Us
            </h3>
            </div>

            <form>
  <div className="mb-6">
    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your name</label>
    <input placeholder="Your name" type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darker-reddish focus:border-darker-reddish block w-full p-2.5 dark:bg-lightnight dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-darker-reddish dark:focus:border-darker-reddish" required/>
  </div>
  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your email</label>
    <input placeholder="Your email" type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darker-reddish focus:border-darker-reddish block w-full p-2.5 dark:bg-lightnight dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-darker-reddish dark:focus:border-darker-reddish" required/>
  </div>
  <div className="mb-6">

  <label htmlFor="message" className="block mb-2 text-sm font-medium sr-only text-gray-900 dark:text-white">Your message</label>
<textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-darker-reddish focus:border-darker-reddish dark:bg-lightnight dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-darker-reddish dark:focus:border-darker-reddish" placeholder="Leave a comment..."></textarea>
</div>
   <button type="submit" className="text-white mb-6 bg-reddish hover:bg-darker-reddish focus:ring-4 focus:outline-none focus:ring-darker-reddish font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-reddish dark:hover:bg-darker-reddish dark:focus:ring-darker-reddish">Submit</button>
</form>
    </div>
</div>

}
export default Contact