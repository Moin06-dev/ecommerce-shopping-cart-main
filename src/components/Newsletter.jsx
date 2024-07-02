const Newsletter = () => {
  return (

<section>
  <div className="mx-auto w-full max-w-full">
    <div className=" p-8 text-center sm:p-10 md:p-16">
      <h2 className="mb-4 text-3xl font-montserrat font-bold md:text-5xl">Join for exclusives drops</h2>
      <p className="mx-auto mb-6 max-w-2xl  text-sm text-gray-500 font-montserrat sm:text-base md:mb-10 lg:mb-12">Do not miss out on the chance to indulge in the latest fashion trends at unbeatable prices.</p>
      <div className="mx-auto mb-4 flex max-w-lg justify-center">
        <form name="email-form" method="get" className="flex w-full flex-col gap-3 sm:flex-row">
          <input type="email" className="h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm font-montserrat  text-gray-500" placeholder="Enter your email" />
          <input type="submit" value="Notify me" className="cursor-pointer rounded-md bg-black px-6 py-2 font-montserrat  font-semibold text-white" />
        </form>
      </div>
    </div>
  </div>
</section>
  )
}

export default Newsletter