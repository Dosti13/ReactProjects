import { useRouteError ,Link} from "react-router-dom";

export default function ErrorHandle(){
        const Error = useRouteError
        return(
            <div className="giterror text-center  underline">
                <p>{Error.message="there are some error ! Sorry"}</p>
                <Link to="/" className=" text-2xl ">Back To Home   </Link>
            </div>
        )
}