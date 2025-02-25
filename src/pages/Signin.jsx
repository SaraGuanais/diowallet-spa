import logo from '../assets/logo.png';

export default function Signin() {
    return(
        <div className="flex flex-col items-center justify-around bg-zinc-900 rounded p-8 w-[35rem] h-[35rem]">
            <img src={logo} className="w-44" />
            <form className="flex flex-col justify-center gap-4 w-full text-2xl text-white">
                <input 
                    type="email"
                    placeholder="Email"
                    className="rounded p-2 w-full bg-white text-black" 
                />
                <input 
                    type="password"
                    placeholder="Password"
                    className="rounded p-2 w-full bg-white text-black" 
                />

                <button 
                    type="submit"
                    className="px-4 py-2 rounded w-full font-bold text-white text-2xl"
                > 
                    Sign in 
                </button>
            </form>
        <p className='text-white text-2xl'>
            Don't have a account? Register
        </p>
        </div>
    );
}
