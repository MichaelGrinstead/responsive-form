function App() {
  return (
    <div className="flex flex-col justify-center h-5/6 sm:h-3/4 w-3/4 border bg-white p-5">
      <form className="h-1/2 flex flex-col justify-center gap-12 items-center ">
        <h3 className="text-2xl font-bold italic">Form</h3>
        <div className="flex flex-col w-full items-center gap-12 2xl:flex-row">
          <div className="flex flex-col w-full items-center gap-12 2xl:items-end">
            <input className="input-basic 2xl:w-[50.6%]"></input>
            <input className="input-basic 2xl:w-[50.6%]"></input>
          </div>
          <div className="flex flex-col w-full items-center gap-12 2xl:items-start">
            <input className="input-basic 2xl:w-[50.6%]"></input>
            <input className="input-basic 2xl:w-[50.6%]"></input>
          </div>
        </div>
        <button className="button-basic border p-2">Submit</button>
      </form>
    </div>
  );
}

export default App;
