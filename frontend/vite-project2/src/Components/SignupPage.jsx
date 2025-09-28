export function SignupPage() {
    return (




        <div className="min-h-[100vh] pb-[72px] flex flex-col items-center bg-[#f9f4eb]">
            <div className="m-auto my-auto h-[430px] w-[300px] p-10 rounded-2xl flex flex-col items-center bg-white rounded-xl shadow-lg border border-gray-200">
                <h1 className="text-center text-3xl">Signup</h1>
                <div className="mt-5">

                    <p className="ml-3">Email</p>
                    <input id="email" className="rounded-md border-black border-solid border m-3"></input>

                    <p className="ml-3">Username</p>
                    <input id="username" className="rounded-md border-black border-solid border m-3"></input>

                    <p className="ml-3">Password</p>
                    <input id="password" className="rounded-md border-black border-solid border m-3"></input>
                </div>


                <button className="border border-solid border-black rounded-md w-fit m-5 p-2" onClick={() => {
                    console.log("signing up")
                    //store userinfo to local storage
                    localStorage.setItem("email", document.getElementById("email").value);
                    localStorage.setItem("username", document.getElementById("username").value);
                    localStorage.setItem("password", document.getElementById("password").value);

                    //reload to update topbar
                    window.location.reload();

                }}>Submit</button>
            </div>
        </div>
    );
}
