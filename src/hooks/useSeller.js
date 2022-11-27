import { useEffect, useState } from "react"

const useSeller = (role) => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsAdminLoading] = useState('true')

    useEffect( () => {
        if(role){
            fetch(`http://localhost:5000/users/seller/${role}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsSeller(data.isAdmin);
                setIsAdminLoading(false);
            })
        }
    }, [role])
    return [isSeller, isSellerLoading]
}

export default useSeller;