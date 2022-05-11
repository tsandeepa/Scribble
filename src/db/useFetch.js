import { useEffect, useState } from "react";


const useFetch = () => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        fetch('https://cribble-4f33a-default-rtdb.firebaseio.com/Items.json')
        .then(response => response.json())
        .then(data => {
            setData(data);
            console.log(data);
            setIsLoading(false)
        })
        .catch(err => console.error(err));
    }, []);
    
    

    return {data}
}

export default useFetch;
