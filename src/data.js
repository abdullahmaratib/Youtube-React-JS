export const API_KEY = 'AIzaSyA_xSnNXVv3NeKYvOdPHp4wGCchgh0qM9A'

 export const converter = (value)=>{

    if(value>1000000)

    {
        return Math.floor(value/1000000)+ "M"
    }

    else if(value>1000)

    {
       return Math.floor(value/1000)+ "K"
    }

    else{

        return value;
    }

}