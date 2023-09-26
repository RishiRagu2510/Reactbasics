import Greeting from "./Greeting";
import Profile from "../Profile";
import  UserComponents  from "../UsersComponents";
function Gallery(){
    return(
        <>
        <Greeting/>
        <img src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcS_Q-fRFfDWAEfOcz_R0vktnglTXYO4EKn9z8bBlX6mgl4cobbtQ8K4KZFq46SSM4ArMq51ma5AZGxc62Y"></img>
        <Profile/>
        <UserComponents/>
        </>
    )
}
export default Gallery;