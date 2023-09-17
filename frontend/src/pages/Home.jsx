import Farmer from "../assets/Farmer.jpeg";
import Crop from "../assets/Crop.jpeg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="w-screen h-20 bg-green-100 flex justify-between p-6">
        <div>
          <h1>Logo</h1>
        </div>
        <ul className="flex gap-8 mr-10">
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Login</li>
        </ul>
      </div>
      <div>
        <div className="flex justify-between  m-10 p-10">
          <div>
            <h1 className="w-60 rounded-full ml-28">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
              dolorum deserunt dolores vero laboriosam exercitationem ratione
              eligendi velit, optio necessitatibus reprehenderit.
            </h1>
            <div className="rounded-full overflow-hidden">
              <img
                src={Farmer}
                alt="A farmer smiling"
                className="w-80 mt-20 rounded-full mix-blend-multiply"
              />
            </div>
          </div>
          <div>
            <h1 className="w-60 rounded-full ml-28">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
              dolorum deserunt dolores vero laboriosam exercitationem ratione
              eligendi velit, optio necessitatibus reprehenderit.
            </h1>
            <h1 className="w-60 rounded-full mt-36">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
              dolorum deserunt dolores vero laboriosam exercitationem ratione
            </h1>
          </div>
          <img
            src={Crop}
            alt="Crop image"
            className="w-5/12 rounded-full mix-blend-multiply shadow-xl shadow-black"
          />
        </div>
        <div className="flex justify-center font-semibold text-3xl">
          <Link to="/dashboard">
            <span className="border-2 border-green-400 px-2 py-1 bg-green-300 hover:bg-green-400 rounded-xl">
              Continue
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
