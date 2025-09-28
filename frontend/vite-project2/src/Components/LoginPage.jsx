import { Link } from "react-router-dom";
export function LoginPage() {
    return (




        <div className="min-h-[100vh] pb-[72px] flex flex-col items-center bg-[#f9f4eb]">
            <div className="m-auto my-auto h-[350px] w-[300px] p-10 rounded-2xl flex flex-col items-center bg-white rounded-xl shadow-lg border border-gray-200">
                <h1 className="text-center text-3xl">Login</h1>
                <div className="mt-5">
                    <p className="ml-3">Username</p>
                    <input id="username" className="rounded-md border-black border-solid border m-3"></input>

                    <p className="ml-3">Password</p>
                    <input id="password" className="rounded-md border-black border-solid border m-3"></input>
                </div>
                <Link
                    to="/signup"
                    className="cursor-pointer hover:underline"
                ><p>Click here to signup</p></Link>

                <button className="border border-solid border-black rounded-md w-fit m-5 p-2" onClick={() => {
                    console.log("logging in")
                    //store userinfo to local storage
                    localStorage.setItem("username", document.getElementById("username").value);
                    localStorage.setItem("password", document.getElementById("password").value);


                    //reload to home screen
                    window.location.href = "/";

                }}>Submit</button>
            </div>
        </div>
    );
}

