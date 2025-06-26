import { useEffect, useState } from "react"

const PreLoader = () => {
    const[loading, setLoading] = useState(true);
    
    useEffect (() => {
      setTimeout(() => setLoading(false), 3500);
    }, []);

  return (
    loading && (
      <div className="w-screen h-screen fixed items-center justify-center bg-black z-50">PreLoader</div>
    )
  )
}
export default PreLoader