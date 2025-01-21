import HomeFooter from "./HomeFooter";
import HomeHeader from "./HomeHeader";

const HomeLayout = ({children}) =>{
    return(

    <>
       <HomeHeader/>

       <div>
         {children}
       </div>

       <HomeFooter/>

    </>
    )
}
export default HomeLayout;