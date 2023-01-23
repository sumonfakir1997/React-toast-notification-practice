import { toast } from "react-toastify"
const PageTwo = () => {
    const handle = () => {
        toast.warning(" this is page two")
    }
    return (
        <div className="">
            <h2>this is page two</h2>
            {/* <button  onClick={handle} className="bg-green-700  text-white"> page two </button> */}
        </div>
    )
}
export default PageTwo