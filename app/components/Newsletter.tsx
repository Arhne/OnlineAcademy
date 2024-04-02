

const Newsletter = () => {
  return (
    <section className="max-w-[1512px] bg-[#f4f4f8] text-center mr-6 md:mr-20 rounded-[0_40px_40px_0]">
      <div className="max-container padding-container p-6 overflow-hidden relative">
        <div className="3xxl:absolute w-[20%] h-[100%] right-0 top-0 z-[-.9] bg-blue-70 rounded-[40px]"></div>
        <div className="5xl:absolute w-[10%] h-[100%] left-[929px] z-[-.5] rotate-[-15deg] bottom-[3px] bg-blue-70 rounded-[48px_40px_40px_40px]"></div>
        <div className="grid gap-4 3xxl:grid-cols-2 items-center">
          <div>
            <p className="bold-40a 3maxi:text-left capitalize">
              Find out about the latest courses with the <span className="text-blue-70">academy</span> newsletter</p>
          </div>

          <div className="3xxl:justify-self-end mt-6 3xxl:mt-0 flex flex-col items-center z-[1]">
            <div className="bg-[#FAFAFA] flex py-1.5 pr-3.5 items-center flex-1 rounded-[10px]">           
              <input type="email" className="text-gray-30 p-2 w-full bold-13 mr-1.5 bg-transparent focus:outline-none" placeholder="Email Address.." />
              <button className="bold-14 py-[10px] px-[18px] uppercase rounded-[9px] text-white-70 bg-[#080808] text-white" type="button">
                submit
              </button>
            </div>
          </div>  

        </div>

      </div>
    </section>
  )
}

export default Newsletter