import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - My Tourist Guide`
    }, [title])
};

export default useTitle;