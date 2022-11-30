import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - PHONE RESELL`;
    }, [title])
};

export default useTitle;