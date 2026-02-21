function Pagination({pageNum, handleNext, handlePrev}) {
    return (
        <div className="bg-gray-400 p-4 h-[50px] w-full flex justify-center gap-2 mt-8">
        <div onClick={handlePrev} className="px-8">
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div>{pageNum}</div>
        <div onClick={handleNext} className="px-8">
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    )
}

export default Pagination;