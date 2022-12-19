const Subscribe: React.FC = () => {

return <div className="w-full mt-4 p-4 dark:bg-midnightish bg-white rounded-lg border border-grayish dark:border-none sm:p-6 md:p-8">
    <form className="space-y-6" action="#">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Get more updates...</h3>
        <div className="flex">
        <div className="w-9/12 mr-3">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-grayish dark:border-none text-sm rounded-lg focus:ring-darker-reddish focus:border-darker-reddish block w-full p-2.5 dark:bg-lightnight dark:placeholder-gray-400 dark:text-white" placeholder="name@email.com" required/>
        </div>
        <button type="submit" className="w-3/12 text-white bg-reddish hover:bg-darker-reddish focus:ring-4 focus:outline-none focus:ring-darker-reddish font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button></div>
    </form>
</div>

}

export default Subscribe