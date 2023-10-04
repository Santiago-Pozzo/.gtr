import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const useRedirect = (rediretTo) => {
    const { currentUser } = useSelector(state => state.user);
    const navigate = useNavigate();
    useEffect (()=>{
        if (currentUser) {
            navigate(rediretTo);
        }
      }, [currentUser, navigate, rediretTo]
    );

}

export default useRedirect